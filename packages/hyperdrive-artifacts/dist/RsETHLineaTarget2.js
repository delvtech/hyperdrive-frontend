export const RsETHLineaTarget2 = {
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
                    "name": "__rsETHPool",
                    "type": "address",
                    "internalType": "contract IRSETHPoolV2"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003fce38038062003fce8339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613b15620004b95f395f8181611439015281816116470152818161170e01526127b801525f50505f50505f610bf701525f50505f818160f1015281816102f20152612d3901525f81816114b501528181611d7b01528181611dde01528181612565015281816129290152818161296501528181612b560152612d1301525f81816107b501528181610d5101528181610d9301528181610e85015281816112eb015281816113490152612ced01525f6119a501525f8181611ac601528181612656015281816126ce0152612e5101525f818161097201528181610e06015281816113e401528181611a9a01526126a201525f8181610de5015281816126220152612e0d01525f81816107d601528181610d2f01528181610db401528181610ea6015281816112c90152818161136a0152612d5f01525f81816101cb01528181610386015281816108b0015261334d01525f8181610676015281816106f20152818161076601528181610831015261086901525f6117a001525f5050613b155ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a3660046135c5565b61006b565b6040805192835260208301919091520160405180910390f35b61003f6100663660046135c5565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102b4565b5f8061009f610521565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d183610549565b5f806100dd8886610581565b90925090505f6100ed8383610652565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101305760405163211ddda360e11b815260040160405180910390fd5b86821015610151576040516342af972b60e01b815260040160405180910390fd5b5f61015a61066f565b905061016a81846004600161069f565b505f805f6101788787610d03565b919a5091945090925090508b8810156101a45760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101b59190613633565b909155506101c69050844283610ee2565b6101f07f000000000000000000000000000000000000000000000000000000000000000085613633565b98506101fe8389888c61101b565b5f61020a60018b6111b2565b90506102238161021d60208e018e61365a565b8b6111e6565b8d8a8a898e85610236602083018361365a565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102736040880160208901613682565b8961028160408a018a61369d565b6040516102949796959493929190613708565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102be610521565b600654610100900460ff16156102e7576040516321081abf60e01b815260040160405180910390fd5b6102f083610549565b7f00000000000000000000000000000000000000000000000000000000000000008610156103315760405163211ddda360e11b815260040160405180910390fd5b5f61033a61128b565b90508481101561035d576040516342af972b60e01b815260040160405180910390fd5b5f61036661066f565b90505f61037e61037461066f565b846004600161069f565b90505f6103ab7f000000000000000000000000000000000000000000000000000000000000000084613633565b90505f805f806103bc8e898861129d565b60098054949850929650909450925083915f906103da908490613633565b909155506103eb9050874283610ee2565b6103fd6103f8858a61141f565b611433565b610408906001613633565b9350505f61041784898d61145e565b9050808d101561043a5760405163c972651760e01b815260040160405180910390fd5b610444818c610581565b508e905061045481858b8961148f565b5f6104606002886111b2565b90508c61047a82610474602084018461365a565b856111e6565b858b868461048b602086018661365a565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104c860408b0160208c01613682565b6104dc896104d68a8d613748565b90610652565b8d6104ea60408e018e61369d565b6040516104fe98979695949392919061375b565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361054357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f610557602083018361365a565b6001600160a01b03160361057e5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105946040850160208601613682565b156105b9576105af856105aa604087018761369d565b611642565b90935090506105d1565b50346105d1856105cc604087018761369d565b61177c565b6105d961128b565b91508015610649576040515f90339083908381818185875af1925050503d805f8114610620576040519150601f19603f3d011682016040523d82523d5f602084013e610625565b606091505b5050905080610647576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106668383670de0b6b3a7640000611838565b90505b92915050565b5f61069a427f0000000000000000000000000000000000000000000000000000000000000000611853565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106c657504286115b156106df57600101546001600160801b03169050610cfb565b5f805f6106ea61066f565b90505f6107177f00000000000000000000000000000000000000000000000000000000000000008b613633565b90505b8181101561078b575f818152600860205260409020600101546001600160801b03168015610763575f828152600860205260409020549094506001600160801b0316925061078b565b507f00000000000000000000000000000000000000000000000000000000000000000161071a565b835f036107fd578893506107fa6107a0611868565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611888565b92505b50610807836118a7565b6001850180546001600160801b0319166001600160801b039290921691909117905561085d6108567f00000000000000000000000000000000000000000000000000000000000000008b613748565b8a84610ee2565b61089b8961089561088e7f000000000000000000000000000000000000000000000000000000000000000083613633565b42906118d4565b84610ee2565b6108a4886118e8565b505f90506008816108d57f00000000000000000000000000000000000000000000000000000000000000008d613748565b815260208101919091526040015f908120600101546001600160801b0316915061090060028c6111b2565b5f818152600b60205260408120549192508c8c8315610a4157600192505f8061092c86898d865f611a85565b915091508060095f8282546109419190613633565b9091555061095c9050865f8461095681611b52565b88611b7b565b6109668183613633565b915061099686838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cf2565b91506109aa6109a58385610652565b611d3b565b600680546002906109cb9084906201000090046001600160701b03166137a2565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109f8826118a7565b60068054601090610a1a908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a4d6001846111b2565b5f818152600b60205260409020549091508015610b5857600194505f80610a78838b8f886001611a85565b915091508060095f828254610a8d9190613633565b90915550610aa89050835f84610aa281611b52565b8a611d64565b610ab28183613748565b9150610ac16109a58387610652565b60068054600290610ae29084906201000090046001600160701b03166137a2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b0f826118a7565b60068054601090610b31908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b9157610b83610b6a87611b52565b610b7383611b52565b610b7d91906137e2565b5f611f54565b8e610b8e8482611f93565b50505b5f610b9b84612182565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c51573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c759190613801565b90506001600160a01b03811615610ce957610ce65a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906122c4565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d10611868565b600254909150610d75908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061234a565b600254909450610dd8908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611888565b9150610e2f8785610e2a857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612375565b6123d9565b15610e3c57610e3c61241a565b610e4887858885612433565b91965094509250670de0b6b3a7640000610eca610e658784613633565b600254610e83908890600160801b90046001600160801b0316613748565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611888565b1115610ed857610ed861241a565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f0d5750505050565b5f848152600860205260408120546001600160801b031690819003610f6557610f35836118a7565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610fe2565b610fb6610fb1670de0b6b3a7640000610f7e8886613748565b610f88919061381c565b85670de0b6b3a7640000610f9c878a613748565b610fa6919061381c565b85929190600161247b565b6118a7565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610feb846118a7565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661105d610fb182611047670de0b6b3a76400008661381c565b6005546001600160801b0316919088600161247b565b600580546001600160801b0319166001600160801b0392909216919091179055611086856118a7565b600280545f906110a09084906001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110cd846118a7565b600280546010906110ef908490600160801b90046001600160801b0316613833565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061111c846118a7565b61112690826137c2565b600380546001600160801b03808416600160801b02911617905590505f61114c8361251f565b905061116a8161115b87611b52565b6111659084613853565b611f54565b6111738461255f565b61117f5761117f61241a565b5f611189856125be565b9050806111a957604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b038211156111db5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611217908490613633565b90915550505f838152600b602052604081208054839290611239908490613633565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f61069a670de0b6b3a7640000611433565b5f805f805f6112aa611868565b60025490915061130f908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f00000000000000000000000000000000000000000000000000000000000000006125ca565b93508761131c85896125ea565b111561132a5761132a61241a565b6002545f90819061138e908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611888565b93506113a48a670de0b6b3a7640000868c6125fe565b509193509091506113b790508183613748565b6113c19087613748565b95508861140e816114088d6113d6868c613748565b8d6113e1878261270a565b877f000000000000000000000000000000000000000000000000000000000000000061271f565b906125ea565b975090945050505093509350935093565b5f61066683670de0b6b3a76400008461273f565b5f6106697f000000000000000000000000000000000000000000000000000000000000000083612762565b5f61146f6040830160208401613682565b1561147b575082611488565b6114858484612779565b90505b9392505050565b6002546001600160801b0316838110156114ab576114ab61241a565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114e3908390600f0b61278d565b10156114f1576114f161241a565b60045461153b90610fb190600160801b90046001600160801b031661151e670de0b6b3a76400008661381c565b600554600160801b90046001600160801b0316919089600161247b565b600580546001600160801b03928316600160801b029216919091179055611561816118a7565b600280546001600160801b0319166001600160801b039290921691909117905561158a856118a7565b600280546010906115ac908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115d9856118a7565b600480546010906115fb908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6116298361251f565b905061116a8161163888611b52565b61116590846137e2565b5f805f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166324a9d8536040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116a1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116c5919061387a565b11156116e45760405163350b944160e11b815260040160405180910390fd5b5060405163513708c360e11b8152602060048201525f602482015234859003906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a26e11869087906044015f604051808303818588803b158015611751575f80fd5b505af1158015611763573d5f803e3d5ffd5b5050505050611771856127b2565b91505b935093915050565b6040516323b872dd60e01b8152336004820152306024820152604481018490525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af11580156117ee573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118129190613891565b905080611832576040516312171d8360e31b815260040160405180910390fd5b50505050565b5f825f19048411830215820261184c575f80fd5b5091020490565b5f61185e82846138c0565b6106669084613748565b6002546004545f9161069a916001600160801b0390911690600f0b61278d565b5f61189e82611898858888611838565b906127dd565b95945050505050565b5f6001600160801b038211156118d057604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116118e25782610666565b50919050565b6006545f90819061190a908490600160801b90046001600160801b0316610652565b6006546201000090046001600160701b03169250905081811115611a80575f6119338383613748565b9050611942610fb1828661141f565b60068054601090611964908490600160801b90046001600160801b0316613833565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61199c858361277990919063ffffffff16565b90505f6119c9827f0000000000000000000000000000000000000000000000000000000000000000610652565b90508060095f8282546119dc9190613633565b909155506119ec90508183613748565b91506119f7826118a7565b600280545f90611a119084906001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a3e82612842565b600480545f90611a52908490600f0b6138d3565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611a918785612779565b91505f611abe837f0000000000000000000000000000000000000000000000000000000000000000610652565b9050611aea817f0000000000000000000000000000000000000000000000000000000000000000610652565b91508315611b0d57611afc8282613748565b611b069084613748565b9250611b24565b611b178282613748565b611b219084613633565b92505b86861015611b4757611b37838789611838565b9250611b44828789611838565b91505b509550959350505050565b5f6001600160ff1b038211156118d05760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611bc3610fb182611ba7670de0b6b3a76400008661381c565b600554600160801b90046001600160801b031691908a5f61247b565b600580546001600160801b03928316600160801b029216919091179055611be9866118a7565b611bf39082613833565b600480546001600160801b03928316600160801b029216919091179055611c19846118a7565b600280545f90611c339084906001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c608361286b565b600480545f90611c74908490600f0b6138d3565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ca4856118a7565b60028054601090611cc6908490600160801b90046001600160801b0316613833565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611d0984611d038a888a611838565b90612779565b9050611d16888486611838565b611d209082613633565b905086811115611d305786810391505b509695505050505050565b5f6001600160701b038211156118d05760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611da657507f0000000000000000000000000000000000000000000000000000000000000000611da48583613748565b105b15611db357611db361241a565b6004549084900390600f0b611dc884826137e2565b905083611dd486611b52565b138015611e0957507f0000000000000000000000000000000000000000000000000000000000000000611e07838361278d565b105b15611e1657611e1661241a565b600354600160801b90046001600160801b0316611e57610fb182611e42670de0b6b3a76400008861381c565b6005546001600160801b031691908c5f61247b565b600580546001600160801b0319166001600160801b0392909216919091179055611e818882613748565b9050611e8c816118a7565b600380546001600160801b03928316600160801b029216919091179055611eb2836118a7565b600280546001600160801b0319166001600160801b0392909216919091179055611edb8261286b565b600480546001600160801b0319166001600160801b0392909216919091179055611f04876118a7565b60028054601090611f26908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f6f90610fb1906001600160801b031684846128a6565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611fdd916001600160801b031690613748565b9050805f03611ff0576001915050610669565b5f611ffa85612908565b9050805f0361200e57600192505050610669565b5f8061201b8385896129a3565b9150915080612030575f945050505050610669565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161206b92919061397e565b6040805180830381865af4158015612085573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120a991906139f3565b915091506120c76120b982611b52565b6120c290613a15565b612b10565b9250826120dc575f9650505050505050610669565b6120e5826118a7565b600780545f906120ff9084906001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061212c816118a7565b6007805460109061214e908490600160801b90046001600160801b03166137c2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6121a987612ca4565b6040518263ffffffff1660e01b81526004016121c59190613a2f565b6040805180830381865af41580156121df573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906122039190613a3e565b915091508061221857505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161227d91613633565b6122879190613748565b9050805f0361229d57505f958695509350505050565b5f8087116122ab575f6122b6565b6122b6848884611838565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156122e7576122e7613a6c565b6040519080825280601f01601f191660200182016040528015612311576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612331578692505b828152825f602083013e90999098509650505050505050565b5f61236a87878761236388670de0b6b3a7640000613748565b8787612dde565b979650505050505050565b5f6114856123b561238e84670de0b6b3a7640000613748565b611408670de0b6b3a76400006123a4818a61141f565b6123ae9190613748565b87906125ea565b6123c790670de0b6b3a7640000613633565b611d0384670de0b6b3a7640000613748565b5f8061240f856123e7611868565b6123f19190613633565b600254610e83908790600160801b90046001600160801b0316613748565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f612443898789612e00565b90925090506124528289613748565b97505f61246082888a611838565b905061246c818b613748565b9a989950979650505050505050565b5f825f0361248a57508461189e565b81156124dc576124bb61249d8487613633565b6124a78587610652565b6124b1888a610652565b611d039190613633565b90505f6124c885886118d4565b9050808210156124d6578091505b5061189e565b8285036124ea57505f61189e565b6125156124f78487613748565b61250185876125ea565b61250b888a610652565b611d039190613748565b9695505050505050565b5f612544600b5f6125316002866111b2565b81526020019081526020015f2054611b52565b612555600b5f6125316001876111b2565b61066991906137e2565b5f61258a7f0000000000000000000000000000000000000000000000000000000000000000836125ea565b6003546125a091906001600160801b0316613633565b6002546125b6906001600160801b031684610652565b101592915050565b5f610669826004611f93565b5f61236a8787876125e388670de0b6b3a7640000613748565b8787612e7f565b5f6106668383670de0b6b3a764000061273f565b5f80808061264e87866126478b6114086126208c670de0b6b3a7640000613748565b7f0000000000000000000000000000000000000000000000000000000000000000906125ea565b919061273f565b935061267a847f0000000000000000000000000000000000000000000000000000000000000000610652565b91505f61269a61269289670de0b6b3a7640000613748565b8a908861273f565b90506126c6817f00000000000000000000000000000000000000000000000000000000000000006125ea565b93506126f2847f0000000000000000000000000000000000000000000000000000000000000000610652565b6126fc9084613633565b915050945094509450949050565b5f8183116127185781610666565b5090919050565b5f80612736846127308a888a61273f565b9061141f565b9050611d168884865b5f825f190484118302158202612753575f80fd5b50910281810615159190040190565b5f8061276d84612e8f565b9050610cfb8382610652565b5f61066683670de0b6b3a764000084611838565b5f806127998484612ef0565b9092509050806127ab576127ab61241a565b5092915050565b5f6106697f000000000000000000000000000000000000000000000000000000000000000083612f28565b5f815f036127f45750670de0b6b3a7640000610669565b825f0361280257505f610669565b5f61280c83611b52565b90505f61282061281b86611b52565b612f3f565b9050818102612837670de0b6b3a764000082613a80565b905061251581613164565b5f60016001607f1b038211156118d05760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612888575060016001607f1b0382135b156118d05760405163a5353be560e01b815260040160405180910390fd5b5f806128b2845f6132f6565b6128bc845f6132f6565b6128c691906137e2565b90505f8113156128e1576128da8186613633565b94506128ff565b5f8112156128ff576128f281613a15565b6128fc9086613748565b94505b50929392505050565b6003545f908190612922906001600160801b03168461141f565b905061294e7f000000000000000000000000000000000000000000000000000000000000000082613633565b6002546001600160801b031611156118e2576002547f0000000000000000000000000000000000000000000000000000000000000000906129999083906001600160801b0316613748565b6114889190613748565b6129ab613526565b5f806129b684612ca4565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129f09190613a2f565b6040805180830381865af4158015612a0a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a2e9190613a3e565b9350905082612a4257505f91506117749050565b5f612a68612a6384610160015185610140015161065290919063ffffffff16565b611b52565b612a88612a638561012001518661010001516125ea90919063ffffffff16565b612a9291906137e2565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bc6573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612bea9190613aac565b935093509350935080612c0557505f98975050505050505050565b868414612c3657612c15846118a7565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c6757612c468361286b565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c9557612c77826118a7565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612cac613570565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612da49116613304565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612dd692900416613304565b905292915050565b5f80612dee888888888888613378565b909250905080611d3057611d3061241a565b5f80612e498561140885817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612e3f818c61141f565b6114089190613748565b9150612e75827f0000000000000000000000000000000000000000000000000000000000000000610652565b9050935093915050565b5f80612dee88888888888861343c565b5f816001600160a01b031663679aefce6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612ecc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610669919061387a565b5f805f83612efd86611b52565b612f0791906137e2565b90505f811215612f1d575f80925092505061064b565b946001945092505050565b5f80612f3384612e8f565b9050610cfb8382612779565b5f808213612f605760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fe39084901c611b52565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361317d57505f919050565b680755bf798b4a1bf1e582126131a6576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061251574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b52565b5f8183136127185781610666565b5f80670de0b6b3a764000061331761066f565b613321919061381c565b9050808311613330575f61333a565b61333a8184613748565b9150611488613371670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061381c565b8390612779565b5f805f61338889898888886134f8565b90506133a28661189861339b8a8d613633565b8790610652565b98506133af858a86611838565b9850888110156133c5575f809250925050613431565b888103670de0b6b3a764000081106133fa576133f36133ec670de0b6b3a76400008961141f565b82906127dd565b9050613412565b61340f6133ec670de0b6b3a764000089612779565b90505b80891015613427575f80935093505050613431565b8803925060019150505b965096945050505050565b5f805f61344c89898888886134f8565b905061345c86611898898b613633565b975087811015613472575f809250925050613431565b87810361348081868861273f565b9050670de0b6b3a764000081106134ad576134a66133ec670de0b6b3a76400008961141f565b90506134c5565b6134c26133ec670de0b6b3a764000089612779565b90505b6134cf818661141f565b9050808a10156134e6575f80935093505050613431565b90980398600198509650505050505050565b5f61350385856127dd565b61351c61351486611898868b6125ea565b85908561273f565b6125159190613633565b60405180610120016040528061353a613570565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f80608085870312156135d8575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613603575f80fd5b850160608188031215613614575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156106695761066961361f565b6001600160a01b038116811461057e575f80fd5b5f6020828403121561366a575f80fd5b813561148881613646565b801515811461057e575f80fd5b5f60208284031215613692575f80fd5b813561148881613675565b5f808335601e198436030181126136b2575f80fd5b83018035915067ffffffffffffffff8211156136cc575f80fd5b60200191503681900382131561064b575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61373b60c0830184866136e0565b9998505050505050505050565b818103818111156106695761066961361f565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61379460e0830184866136e0565b9a9950505050505050505050565b6001600160701b038181168382160190808211156127ab576127ab61361f565b6001600160801b038181168382160190808211156127ab576127ab61361f565b8181035f8312801583831316838312821617156127ab576127ab61361f565b5f60208284031215613811575f80fd5b815161148881613646565b80820281158282048414176106695761066961361f565b6001600160801b038281168282160390808211156127ab576127ab61361f565b8082018281125f8312801582168215821617156138725761387261361f565b505092915050565b5f6020828403121561388a575f80fd5b5051919050565b5f602082840312156138a1575f80fd5b815161148881613675565b634e487b7160e01b5f52601260045260245ffd5b5f826138ce576138ce6138ac565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106695761066961361f565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613991828551613900565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613a04575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613a2957613a2961361f565b505f0390565b61018081016106698284613900565b5f8060408385031215613a4f575f80fd5b825191506020830151613a6181613675565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613a8e57613a8e6138ac565b600160ff1b82145f1984141615613aa757613aa761361f565b500590565b5f805f8060808587031215613abf575f80fd5b84519350602085015192506040850151915060608501516136148161367556fea264697066735822122074fe8f43e81dfbc897490f4ff8ade25a151ae10fac46dde0dc5d1542d22aa4c564736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
