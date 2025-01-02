export const EzETHLineaTarget2 = {
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
                    "name": "__xRenzoDeposit",
                    "type": "address",
                    "internalType": "contract IXRenzoDeposit"
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
    bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003e8138038062003e818339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516139dd620004a45f395f61146a01525f50505f50505f610c2801525f50505f818160f9015281816103020152612c2701525f81816114e601528181611c8d01528181611cf001528181612477015281816128100152818161284c01528181612a440152612c0101525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612bdb01525f6118b701525f81816119d801528181612568015281816125e00152612d3f01525f81816109a301528181610e3701528181611415015281816119ac01526125b401525f8181610e16015281816125340152612cfb01525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612c4d01525f81816101d301528181610396015281816108e1015261322c01525f81816106a7015281816107230152818161079701528181610862015261089a01525f6116b201525f50506139dd5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a3660046134a4565b61006b565b6040805192835260208301919091520160405180910390f35b61003f6100663660046134a4565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613512565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613512565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e613539565b8b611217565b8d8a8a898e8561023e6020830183613539565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b6040880160208901613561565b8961028960408a018a61357c565b60405161029c97969594939291906135e7565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613512565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613512565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613512565b9350505f61042784898d61148f565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b896114c0565b5f6104706002886111e3565b90508c61048a826104846020840184613539565b85611217565b858b868461049b6020860186613539565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c01613561565b6104ec896104e68a8d613627565b90610683565b8d6104fa60408e018e61357c565b60405161050e98979695949392919061363a565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f6105886020830183613539565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c56040850160208601613561565b156105ea576105e0856105db604087018761357c565b611673565b9093509050610602565b5034610602856105fd604087018761357c565b61168e565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a764000061174a565b90505b92915050565b5f6106cb427f0000000000000000000000000000000000000000000000000000000000000000611765565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613512565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d161177a565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061179a565b92505b50610838836117b9565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b613627565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613512565b42906117e6565b84610f13565b6108d5886117fa565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d613627565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611997565b915091508060095f8282546109729190613512565b9091555061098d9050865f8461098781611a64565b88611a8d565b6109978183613512565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c04565b91506109db6109d68385610683565b611c4d565b600680546002906109fc9084906201000090046001600160701b0316613681565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a29826117b9565b60068054601090610a4b908490600160801b90046001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611997565b915091508060095f828254610abe9190613512565b90915550610ad99050835f84610ad381611a64565b8a611c76565b610ae38183613627565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b0316613681565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b40826117b9565b60068054601090610b62908490600160801b90046001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611a64565b610ba483611a64565b610bae91906136c1565b5f611e66565b8e610bbf8482611ea5565b50505b5f610bcc84612094565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca691906136e0565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906121d6565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d4161177a565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061225c565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061179a565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612287565b6122eb565b15610e6d57610e6d61232c565b610e7987858885612345565b91965094509250670de0b6b3a7640000610efb610e968784613512565b600254610eb4908890600160801b90046001600160801b0316613627565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061179a565b1115610f0957610f0961232c565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f66836117b9565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf8886613627565b610fb991906136fb565b85670de0b6b3a7640000610fcd878a613627565b610fd791906136fb565b85929190600161238d565b6117b9565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c846117b9565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a7640000866136fb565b6005546001600160801b0316919088600161238d565b600580546001600160801b0319166001600160801b03929092169190911790556110b7856117b9565b600280545f906110d19084906001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe846117b9565b60028054601090611120908490600160801b90046001600160801b0316613712565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d846117b9565b61115790826136a1565b600380546001600160801b03808416600160801b02911617905590505f61117d83612431565b905061119b8161118c87611a64565b6111969084613732565b611e66565b6111a484612471565b6111b0576111b061232c565b5f6111ba856124d0565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613512565b90915550505f838152600b60205260408120805483929061126a908490613512565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db61177a565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006124dc565b93508761134d85896124fc565b111561135b5761135b61232c565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061179a565b93506113d58a670de0b6b3a7640000868c612510565b509193509091506113e890508183613627565b6113f29087613627565b95508861143f816114398d611407868c613627565b8d611412878261261c565b877f0000000000000000000000000000000000000000000000000000000000000000612631565b906124fc565b975090945050505093509350935093565b5f61069783670de0b6b3a764000084612651565b5f61069a7f000000000000000000000000000000000000000000000000000000000000000083612674565b5f6114a06040830160208401613561565b156114ac5750826114b9565b6114b6848461268b565b90505b9392505050565b6002546001600160801b0316838110156114dc576114dc61232c565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611514908390600f0b61269f565b10156115225761152261232c565b60045461156c90610fe290600160801b90046001600160801b031661154f670de0b6b3a7640000866136fb565b600554600160801b90046001600160801b0316919089600161238d565b600580546001600160801b03928316600160801b029216919091179055611592816117b9565b600280546001600160801b0319166001600160801b03929092169190911790556115bb856117b9565b600280546010906115dd908490600160801b90046001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061160a856117b9565b6004805460109061162c908490600160801b90046001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61165a83612431565b905061119b8161166988611a64565b61119690846136c1565b5f8060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611700573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117249190613759565b905080611744576040516312171d8360e31b815260040160405180910390fd5b50505050565b5f825f19048411830215820261175e575f80fd5b5091020490565b5f6117708284613788565b6106979084613627565b6002546004545f916106cb916001600160801b0390911690600f0b61269f565b5f6117b0826117aa85888861174a565b906126c4565b95945050505050565b5f6001600160801b038211156117e257604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116117f45782610697565b50919050565b6006545f90819061181c908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611992575f6118458383613627565b9050611854610fe28286611450565b60068054601090611876908490600160801b90046001600160801b0316613712565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6118ae858361268b90919063ffffffff16565b90505f6118db827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f8282546118ee9190613512565b909155506118fe90508183613627565b9150611909826117b9565b600280545f906119239084906001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061195082612729565b600480545f90611964908490600f0b61379b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f806119a3878561268b565b91505f6119d0837f0000000000000000000000000000000000000000000000000000000000000000610683565b90506119fc817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611a1f57611a0e8282613627565b611a189084613627565b9250611a36565b611a298282613627565b611a339084613512565b92505b86861015611a5957611a4983878961174a565b9250611a5682878961174a565b91505b509550959350505050565b5f6001600160ff1b038211156117e25760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611ad5610fe282611ab9670de0b6b3a7640000866136fb565b600554600160801b90046001600160801b031691908a5f61238d565b600580546001600160801b03928316600160801b029216919091179055611afb866117b9565b611b059082613712565b600480546001600160801b03928316600160801b029216919091179055611b2b846117b9565b600280545f90611b459084906001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b7283612752565b600480545f90611b86908490600f0b61379b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611bb6856117b9565b60028054601090611bd8908490600160801b90046001600160801b0316613712565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611c1b84611c158a888a61174a565b9061268b565b9050611c2888848661174a565b611c329082613512565b905086811115611c425786810391505b509695505050505050565b5f6001600160701b038211156117e25760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611cb857507f0000000000000000000000000000000000000000000000000000000000000000611cb68583613627565b105b15611cc557611cc561232c565b6004549084900390600f0b611cda84826136c1565b905083611ce686611a64565b138015611d1b57507f0000000000000000000000000000000000000000000000000000000000000000611d19838361269f565b105b15611d2857611d2861232c565b600354600160801b90046001600160801b0316611d69610fe282611d54670de0b6b3a7640000886136fb565b6005546001600160801b031691908c5f61238d565b600580546001600160801b0319166001600160801b0392909216919091179055611d938882613627565b9050611d9e816117b9565b600380546001600160801b03928316600160801b029216919091179055611dc4836117b9565b600280546001600160801b0319166001600160801b0392909216919091179055611ded82612752565b600480546001600160801b0319166001600160801b0392909216919091179055611e16876117b9565b60028054601090611e38908490600160801b90046001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611e8190610fe2906001600160801b0316848461278d565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611eef916001600160801b031690613627565b9050805f03611f0257600191505061069a565b5f611f0c856127ef565b9050805f03611f205760019250505061069a565b5f80611f2d83858961288a565b9150915080611f42575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f7d929190613846565b6040805180830381865af4158015611f97573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fbb91906138bb565b91509150611fd9611fcb82611a64565b611fd4906138dd565b6129fe565b925082611fee575f965050505050505061069a565b611ff7826117b9565b600780545f906120119084906001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061203e816117b9565b60078054601090612060908490600160801b90046001600160801b03166136a1565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120bb87612b92565b6040518263ffffffff1660e01b81526004016120d791906138f7565b6040805180830381865af41580156120f1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121159190613906565b915091508061212a57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161218f91613512565b6121999190613627565b9050805f036121af57505f958695509350505050565b5f8087116121bd575f6121c8565b6121c884888461174a565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156121f9576121f9613934565b6040519080825280601f01601f191660200182016040528015612223576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612243578692505b828152825f602083013e90999098509650505050505050565b5f61227c87878761227588670de0b6b3a7640000613627565b8787612ccc565b979650505050505050565b5f6114b66122c76122a084670de0b6b3a7640000613627565b611439670de0b6b3a76400006122b6818a611450565b6122c09190613627565b87906124fc565b6122d990670de0b6b3a7640000613512565b611c1584670de0b6b3a7640000613627565b5f80612321856122f961177a565b6123039190613512565b600254610eb4908790600160801b90046001600160801b0316613627565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f612355898789612cee565b90925090506123648289613627565b97505f61237282888a61174a565b905061237e818b613627565b9a989950979650505050505050565b5f825f0361239c5750846117b0565b81156123ee576123cd6123af8487613512565b6123b98587610683565b6123c3888a610683565b611c159190613512565b90505f6123da85886117e6565b9050808210156123e8578091505b506117b0565b8285036123fc57505f6117b0565b6124276124098487613627565b61241385876124fc565b61241d888a610683565b611c159190613627565b9695505050505050565b5f612456600b5f6124436002866111e3565b81526020019081526020015f2054611a64565b612467600b5f6124436001876111e3565b61069a91906136c1565b5f61249c7f0000000000000000000000000000000000000000000000000000000000000000836124fc565b6003546124b291906001600160801b0316613512565b6002546124c8906001600160801b031684610683565b101592915050565b5f61069a826004611ea5565b5f61227c8787876124f588670de0b6b3a7640000613627565b8787612d6d565b5f6106978383670de0b6b3a7640000612651565b5f80808061256087866125598b6114396125328c670de0b6b3a7640000613627565b7f0000000000000000000000000000000000000000000000000000000000000000906124fc565b9190612651565b935061258c847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f6125ac6125a489670de0b6b3a7640000613627565b8a9088612651565b90506125d8817f00000000000000000000000000000000000000000000000000000000000000006124fc565b9350612604847f0000000000000000000000000000000000000000000000000000000000000000610683565b61260e9084613512565b915050945094509450949050565b5f81831161262a5781610697565b5090919050565b5f80612648846126428a888a612651565b90611450565b9050611c288884865b5f825f190484118302158202612665575f80fd5b50910281810615159190040190565b5f8061267f84612d7d565b9050610d2c8382610683565b5f61069783670de0b6b3a76400008461174a565b5f806126ab8484612de6565b9092509050806126bd576126bd61232c565b5092915050565b5f815f036126db5750670de0b6b3a764000061069a565b825f036126e957505f61069a565b5f6126f383611a64565b90505f61270761270286611a64565b612e1e565b905081810261271e670de0b6b3a764000082613948565b905061242781613043565b5f60016001607f1b038211156117e25760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b031982128061276f575060016001607f1b0382135b156117e25760405163a5353be560e01b815260040160405180910390fd5b5f80612799845f6131d5565b6127a3845f6131d5565b6127ad91906136c1565b90505f8113156127c8576127c18186613512565b94506127e6565b5f8112156127e6576127d9816138dd565b6127e39086613627565b94505b50929392505050565b6003545f908190612809906001600160801b031684611450565b90506128357f000000000000000000000000000000000000000000000000000000000000000082613512565b6002546001600160801b031611156117f4576002547f0000000000000000000000000000000000000000000000000000000000000000906128809083906001600160801b0316613627565b6114b99190613627565b612892613405565b5f8061289d84612b92565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128d791906138f7565b6040805180830381865af41580156128f1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129159190613906565b935090508261292957505f91506129f69050565b5f61294f61294a84610160015185610140015161068390919063ffffffff16565b611a64565b61296f61294a8561012001518661010001516124fc90919063ffffffff16565b61297991906136c1565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612ab4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ad89190613974565b935093509350935080612af357505f98975050505050505050565b868414612b2457612b03846117b9565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b5557612b3483612752565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b8357612b65826117b9565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b9a61344f565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c9291166131e3565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612cc4929004166131e3565b905292915050565b5f80612cdc888888888888613257565b909250905080611c4257611c4261232c565b5f80612d378561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612d2d818c611450565b6114399190613627565b9150612d63827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612cdc88888888888861331b565b5f80826001600160a01b03166396f0bd616040518163ffffffff1660e01b81526004016040805180830381865afa158015612dba573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612dde91906138bb565b509392505050565b5f805f83612df386611a64565b612dfd91906136c1565b90505f811215612e13575f80925092505061067c565b946001945092505050565b5f808213612e3f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ec29084901c611a64565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361305c57505f919050565b680755bf798b4a1bf1e58212613085576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061242774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a64565b5f81831361262a5781610697565b5f80670de0b6b3a76400006131f66106a0565b61320091906136fb565b905080831161320f575f613219565b6132198184613627565b91506114b9613250670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136fb565b839061268b565b5f805f61326789898888886133d7565b9050613281866117aa61327a8a8d613512565b8790610683565b985061328e858a8661174a565b9850888110156132a4575f809250925050613310565b888103670de0b6b3a764000081106132d9576132d26132cb670de0b6b3a764000089611450565b82906126c4565b90506132f1565b6132ee6132cb670de0b6b3a76400008961268b565b90505b80891015613306575f80935093505050613310565b8803925060019150505b965096945050505050565b5f805f61332b89898888886133d7565b905061333b866117aa898b613512565b975087811015613351575f809250925050613310565b87810361335f818688612651565b9050670de0b6b3a7640000811061338c576133856132cb670de0b6b3a764000089611450565b90506133a4565b6133a16132cb670de0b6b3a76400008961268b565b90505b6133ae8186611450565b9050808a10156133c5575f80935093505050613310565b90980398600198509650505050505050565b5f6133e285856126c4565b6133fb6133f3866117aa868b6124fc565b859085612651565b6124279190613512565b60405180610120016040528061341961344f565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f80608085870312156134b7575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156134e2575f80fd5b8501606081880312156134f3575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a6134fe565b6001600160a01b03811681146105af575f80fd5b5f60208284031215613549575f80fd5b81356114b981613525565b80151581146105af575f80fd5b5f60208284031215613571575f80fd5b81356114b981613554565b5f808335601e19843603018112613591575f80fd5b83018035915067ffffffffffffffff8211156135ab575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61361a60c0830184866135bf565b9998505050505050505050565b8181038181111561069a5761069a6134fe565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61367360e0830184866135bf565b9a9950505050505050505050565b6001600160701b038181168382160190808211156126bd576126bd6134fe565b6001600160801b038181168382160190808211156126bd576126bd6134fe565b8181035f8312801583831316838312821617156126bd576126bd6134fe565b5f602082840312156136f0575f80fd5b81516114b981613525565b808202811582820484141761069a5761069a6134fe565b6001600160801b038281168282160390808211156126bd576126bd6134fe565b8082018281125f831280158216821582161715613751576137516134fe565b505092915050565b5f60208284031215613769575f80fd5b81516114b981613554565b634e487b7160e01b5f52601260045260245ffd5b5f8261379657613796613774565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a6134fe565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506138598285516137c8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f80604083850312156138cc575f80fd5b505080516020909101519092909150565b5f600160ff1b82016138f1576138f16134fe565b505f0390565b610180810161069a82846137c8565b5f8060408385031215613917575f80fd5b82519150602083015161392981613554565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f8261395657613956613774565b600160ff1b82145f198414161561396f5761396f6134fe565b500590565b5f805f8060808587031215613987575f80fd5b84519350602085015192506040850151915060608501516134f38161355456fea2646970667358221220236e255a79db1393c18a8216c83057b5006da584dfca625b70e0cd0075dea52064736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
