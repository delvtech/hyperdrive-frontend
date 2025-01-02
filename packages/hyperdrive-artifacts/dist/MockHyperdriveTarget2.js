export const MockHyperdriveTarget2 = {
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
        }
    ],
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162004390380380620043908339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613ebb620004d55f395f50505f50505f610c7301525f50505f818160f901528181610302015261315701525f81816115f9015281816120f501528181612158015281816128df01528181612d4701528181612d8301528181612f74015261313101525f818161083101528181610dcd01528181610e0f01528181610f0101528181611367015281816113c50152818161199c01528181611a2b015261310b01525f611d1f01525f8181611e40015281816129d001528181612a48015261326f01525f81816109ee01528181610e820152818161146001528181611e140152612a1c01525f8181610e610152818161299c015261322b01525f818161085201528181610dab01528181610e3001528181610f2201528181611345015281816113e6015261317d01525f81816101d3015281816103960152818161092c01526136f301525f81816106f20152818161076e015281816107e2015281816108ad01526108e501525f50505f818161055b015281816114c901528181611512015281816117a1015281816117ea01528181611879015281816118fa01528181611a9601528181611b1701528181612b2f0152612b780152613ebb5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a36600461396b565b61006b565b6040805192835260208301919091520160405180910390f35b61003f61006636600461396b565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d9836105c5565b5f806100e588866105fd565b90925090505f6100f583836106ce565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106eb565b905061017281846004600161071b565b505f805f6101808787610d7f565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd91906139d9565b909155506101ce9050844283610f5e565b6101f87f0000000000000000000000000000000000000000000000000000000000000000856139d9565b98506102068389888c611097565b5f61021260018b61122e565b905061022b8161022560208e018e613a00565b8b611262565b8d8a8a898e8561023e6020830183613a00565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b6040880160208901613a28565b8961028960408a018a613a43565b60405161029c9796959493929190613aae565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b610300836105c5565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a611307565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106eb565b90505f61038e6103846106eb565b846004600161071b565b90505f6103bb7f0000000000000000000000000000000000000000000000000000000000000000846139d9565b90505f805f806103cc8e8988611319565b60098054949850929650909450925083915f906103ea9084906139d9565b909155506103fb9050874283610f5e565b61040d610408858a61149b565b6114af565b6104189060016139d9565b9350505f61042784898d6115ac565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105fd565b508e905061046481858b896115d3565b5f61047060028861122e565b90508c61048a826104846020840184613a00565b85611262565b858b868461049b6020860186613a00565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c01613a28565b6104ec896104e68a8d613aee565b906106ce565b8d6104fa60408e018e613a43565b60405161050e989796959493929190613b01565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a557503415155b156105c357604051631574f9f360e01b815260040160405180910390fd5b565b5f6105d36020830183613a00565b6001600160a01b0316036105fa5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806106106040850160208601613a28565b156106355761062b856106266040870187613a43565b611786565b909350905061064d565b503461064d856106486040870187613a43565b611a10565b610655611307565b915080156106c5576040515f90339083908381818185875af1925050503d805f811461069c576040519150601f19603f3d011682016040523d82523d5f602084013e6106a1565b606091505b50509050806106c3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106e28383670de0b6b3a7640000611bb2565b90505b92915050565b5f610716427f0000000000000000000000000000000000000000000000000000000000000000611bcd565b905090565b5f84815260086020526040812060018101546001600160801b031615158061074257504286115b1561075b57600101546001600160801b03169050610d77565b5f805f6107666106eb565b90505f6107937f00000000000000000000000000000000000000000000000000000000000000008b6139d9565b90505b81811015610807575f818152600860205260409020600101546001600160801b031680156107df575f828152600860205260409020549094506001600160801b03169250610807565b507f000000000000000000000000000000000000000000000000000000000000000001610796565b835f036108795788935061087661081c611be2565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b92505b5061088383611c21565b6001850180546001600160801b0319166001600160801b03929092169190911790556108d96108d27f00000000000000000000000000000000000000000000000000000000000000008b613aee565b8a84610f5e565b6109178961091161090a7f0000000000000000000000000000000000000000000000000000000000000000836139d9565b4290611c4e565b84610f5e565b61092088611c62565b505f90506008816109517f00000000000000000000000000000000000000000000000000000000000000008d613aee565b815260208101919091526040015f908120600101546001600160801b0316915061097c60028c61122e565b5f818152600b60205260408120549192508c8c8315610abd57600192505f806109a886898d865f611dff565b915091508060095f8282546109bd91906139d9565b909155506109d89050865f846109d281611ecc565b88611ef5565b6109e281836139d9565b9150610a1286838a8e877f000000000000000000000000000000000000000000000000000000000000000061206c565b9150610a26610a2183856106ce565b6120b5565b60068054600290610a479084906201000090046001600160701b0316613b48565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7482611c21565b60068054601090610a96908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610ac960018461122e565b5f818152600b60205260409020549091508015610bd457600194505f80610af4838b8f886001611dff565b915091508060095f828254610b0991906139d9565b90915550610b249050835f84610b1e81611ecc565b8a6120de565b610b2e8183613aee565b9150610b3d610a2183876106ce565b60068054600290610b5e9084906201000090046001600160701b0316613b48565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b8b82611c21565b60068054601090610bad908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c0d57610bff610be687611ecc565b610bef83611ecc565b610bf99190613b88565b5f6122ce565b8e610c0a848261230d565b50505b5f610c17846124fc565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ccd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf19190613ba7565b90506001600160a01b03811615610d6557610d625a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061263e565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d8c611be2565b600254909150610df1908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006126c4565b600254909450610e54908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b9150610eab8785610ea6857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006126ef565b612753565b15610eb857610eb8612794565b610ec4878588856127ad565b91965094509250670de0b6b3a7640000610f46610ee187846139d9565b600254610eff908890600160801b90046001600160801b0316613aee565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b1115610f5457610f54612794565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f895750505050565b5f848152600860205260408120546001600160801b031690819003610fe157610fb183611c21565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561105e565b61103261102d670de0b6b3a7640000610ffa8886613aee565b6110049190613bc2565b85670de0b6b3a7640000611018878a613aee565b6110229190613bc2565b8592919060016127f5565b611c21565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61106784611c21565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110d961102d826110c3670de0b6b3a764000086613bc2565b6005546001600160801b031691908860016127f5565b600580546001600160801b0319166001600160801b039290921691909117905561110285611c21565b600280545f9061111c9084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114984611c21565b6002805460109061116b908490600160801b90046001600160801b0316613bd9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061119884611c21565b6111a29082613b68565b600380546001600160801b03808416600160801b02911617905590505f6111c883612899565b90506111e6816111d787611ecc565b6111e19084613bf9565b6122ce565b6111ef846128d9565b6111fb576111fb612794565b5f61120585612938565b90508061122557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b038211156112575760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906112939084906139d9565b90915550505f838152600b6020526040812080548392906112b59084906139d9565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f610716670de0b6b3a76400006114af565b5f805f805f611326611be2565b60025490915061138b908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612944565b9350876113988589612964565b11156113a6576113a6612794565b6002545f90819061140a908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b93506114208a670de0b6b3a7640000868c612978565b5091935090915061143390508183613aee565b61143d9087613aee565b95508861148a816114848d611452868c613aee565b8d61145d8782612a84565b877f0000000000000000000000000000000000000000000000000000000000000000612a99565b90612964565b975090945050505093509350935093565b5f6106e283670de0b6b3a764000084612ab9565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016114fd575047611586565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561155f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115839190613c20565b90505b600f545f03611595575f6115a5565b600f546115a59084908390611bb2565b9392505050565b5f6115bd6040830160208401613a28565b156115c95750826115a5565b610d778484612adc565b6002546001600160801b0316838110156115ef576115ef612794565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611627908390600f0b612af0565b101561163557611635612794565b60045461167f9061102d90600160801b90046001600160801b0316611662670de0b6b3a764000086613bc2565b600554600160801b90046001600160801b031691908960016127f5565b600580546001600160801b03928316600160801b0292169190911790556116a581611c21565b600280546001600160801b0319166001600160801b03929092169190911790556116ce85611c21565b600280546010906116f0908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061171d85611c21565b6004805460109061173f908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61176d83612899565b90506111e68161177c88611ecc565b6111e19084613b88565b5f808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016117d557504761185e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611837573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061185b9190613c20565b90505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118d857873410156118c7576040516312171d8360e31b815260040160405180910390fd5b6118d18834613aee565b905061196f565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611948573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061196c9190613c37565b91505b8161198d576040516312171d8360e31b815260040160405180910390fd5b600f545f036119d1576119c0887f0000000000000000000000000000000000000000000000000000000000000000612adc565b600f81905594509250611a08915050565b600f545f906119e2908a9086611bb2565b905080600f5f8282546119f591906139d9565b90915550909550909350611a0892505050565b935093915050565b5f611a1a846114af565b9050600f545f03611a5757611a4f817f0000000000000000000000000000000000000000000000000000000000000000612adc565b600f55611a7b565b5f611a6182612b15565b905080600f5f828254611a7491906139d9565b9091555050505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611af55782341015611ae4576040516312171d8360e31b815260040160405180910390fd5b611aee8334613aee565b9050611b8c565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611b65573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b899190613c37565b91505b81611baa576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f825f190484118302158202611bc6575f80fd5b5091020490565b5f611bd88284613c66565b6106e29084613aee565b6002546004545f91610716916001600160801b0390911690600f0b612af0565b5f611c1882611c12858888611bb2565b90612bfb565b95945050505050565b5f6001600160801b03821115611c4a57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f818311611c5c57826106e2565b50919050565b6006545f908190611c84908490600160801b90046001600160801b03166106ce565b6006546201000090046001600160701b03169250905081811115611dfa575f611cad8383613aee565b9050611cbc61102d828661149b565b60068054601090611cde908490600160801b90046001600160801b0316613bd9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611d168583612adc90919063ffffffff16565b90505f611d43827f00000000000000000000000000000000000000000000000000000000000000006106ce565b90508060095f828254611d5691906139d9565b90915550611d6690508183613aee565b9150611d7182611c21565b600280545f90611d8b9084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611db882612c60565b600480545f90611dcc908490600f0b613c79565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611e0b8785612adc565b91505f611e38837f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050611e64817f00000000000000000000000000000000000000000000000000000000000000006106ce565b91508315611e8757611e768282613aee565b611e809084613aee565b9250611e9e565b611e918282613aee565b611e9b90846139d9565b92505b86861015611ec157611eb1838789611bb2565b9250611ebe828789611bb2565b91505b509550959350505050565b5f6001600160ff1b03821115611c4a5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611f3d61102d82611f21670de0b6b3a764000086613bc2565b600554600160801b90046001600160801b031691908a5f6127f5565b600580546001600160801b03928316600160801b029216919091179055611f6386611c21565b611f6d9082613bd9565b600480546001600160801b03928316600160801b029216919091179055611f9384611c21565b600280545f90611fad9084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fda83612c89565b600480545f90611fee908490600f0b613c79565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061201e85611c21565b60028054601090612040908490600160801b90046001600160801b0316613bd9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806120838461207d8a888a611bb2565b90612adc565b9050612090888486611bb2565b61209a90826139d9565b9050868111156120aa5786810391505b509695505050505050565b5f6001600160701b03821115611c4a5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061212057507f000000000000000000000000000000000000000000000000000000000000000061211e8583613aee565b105b1561212d5761212d612794565b6004549084900390600f0b6121428482613b88565b90508361214e86611ecc565b13801561218357507f00000000000000000000000000000000000000000000000000000000000000006121818383612af0565b105b1561219057612190612794565b600354600160801b90046001600160801b03166121d161102d826121bc670de0b6b3a764000088613bc2565b6005546001600160801b031691908c5f6127f5565b600580546001600160801b0319166001600160801b03929092169190911790556121fb8882613aee565b905061220681611c21565b600380546001600160801b03928316600160801b02921691909117905561222c83611c21565b600280546001600160801b0319166001600160801b039290921691909117905561225582612c89565b600480546001600160801b0319166001600160801b039290921691909117905561227e87611c21565b600280546010906122a0908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546122e99061102d906001600160801b03168484612cc4565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612357916001600160801b031690613aee565b9050805f0361236a5760019150506106e5565b5f61237485612d26565b9050805f03612388576001925050506106e5565b5f80612395838589612dc1565b91509150806123aa575f9450505050506106e5565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016123e5929190613d24565b6040805180830381865af41580156123ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124239190613d99565b9150915061244161243382611ecc565b61243c90613dbb565b612f2e565b925082612456575f96505050505050506106e5565b61245f82611c21565b600780545f906124799084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506124a681611c21565b600780546010906124c8908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e612523876130c2565b6040518263ffffffff1660e01b815260040161253f9190613dd5565b6040805180830381865af4158015612559573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061257d9190613de4565b915091508061259257505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916125f7916139d9565b6126019190613aee565b9050805f0361261757505f958695509350505050565b5f808711612625575f612630565b612630848884611bb2565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561266157612661613e12565b6040519080825280601f01601f19166020018201604052801561268b576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156126ab578692505b828152825f602083013e90999098509650505050505050565b5f6126e48787876126dd88670de0b6b3a7640000613aee565b87876131fc565b979650505050505050565b5f610d7761272f61270884670de0b6b3a7640000613aee565b611484670de0b6b3a764000061271e818a61149b565b6127289190613aee565b8790612964565b61274190670de0b6b3a76400006139d9565b61207d84670de0b6b3a7640000613aee565b5f8061278985612761611be2565b61276b91906139d9565b600254610eff908790600160801b90046001600160801b0316613aee565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6127bd89878961321e565b90925090506127cc8289613aee565b97505f6127da82888a611bb2565b90506127e6818b613aee565b9a989950979650505050505050565b5f825f03612804575084611c18565b81156128565761283561281784876139d9565b61282185876106ce565b61282b888a6106ce565b61207d91906139d9565b90505f6128428588611c4e565b905080821015612850578091505b50611c18565b82850361286457505f611c18565b61288f6128718487613aee565b61287b8587612964565b612885888a6106ce565b61207d9190613aee565b9695505050505050565b5f6128be600b5f6128ab60028661122e565b81526020019081526020015f2054611ecc565b6128cf600b5f6128ab60018761122e565b6106e59190613b88565b5f6129047f000000000000000000000000000000000000000000000000000000000000000083612964565b60035461291a91906001600160801b03166139d9565b600254612930906001600160801b0316846106ce565b101592915050565b5f6106e582600461230d565b5f6126e487878761295d88670de0b6b3a7640000613aee565b878761329d565b5f6106e28383670de0b6b3a7640000612ab9565b5f8080806129c887866129c18b61148461299a8c670de0b6b3a7640000613aee565b7f000000000000000000000000000000000000000000000000000000000000000090612964565b9190612ab9565b93506129f4847f00000000000000000000000000000000000000000000000000000000000000006106ce565b91505f612a14612a0c89670de0b6b3a7640000613aee565b8a9088612ab9565b9050612a40817f0000000000000000000000000000000000000000000000000000000000000000612964565b9350612a6c847f00000000000000000000000000000000000000000000000000000000000000006106ce565b612a7690846139d9565b915050945094509450949050565b5f818311612a9257816106e2565b5090919050565b5f80612ab084612aaa8a888a612ab9565b9061149b565b90506120908884865b5f825f190484118302158202612acd575f80fd5b50910281810615159190040190565b5f6106e283670de0b6b3a764000084611bb2565b5f80612afc84846132ad565b909250905080612b0e57612b0e612794565b5092915050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612b63575047612bec565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612bc5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612be99190613c20565b90505b600f546115a590849083611bb2565b5f815f03612c125750670de0b6b3a76400006106e5565b825f03612c2057505f6106e5565b5f612c2a83611ecc565b90505f612c3e612c3986611ecc565b6132e5565b9050818102612c55670de0b6b3a764000082613e26565b905061288f8161350a565b5f60016001607f1b03821115611c4a5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612ca6575060016001607f1b0382135b15611c4a5760405163a5353be560e01b815260040160405180910390fd5b5f80612cd0845f61369c565b612cda845f61369c565b612ce49190613b88565b90505f811315612cff57612cf881866139d9565b9450612d1d565b5f811215612d1d57612d1081613dbb565b612d1a9086613aee565b94505b50929392505050565b6003545f908190612d40906001600160801b03168461149b565b9050612d6c7f0000000000000000000000000000000000000000000000000000000000000000826139d9565b6002546001600160801b03161115611c5c576002547f000000000000000000000000000000000000000000000000000000000000000090612db79083906001600160801b0316613aee565b6115a59190613aee565b612dc96138cc565b5f80612dd4846130c2565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e0e9190613dd5565b6040805180830381865af4158015612e28573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612e4c9190613de4565b9350905082612e6057505f9150611a089050565b5f612e86612e818461016001518561014001516106ce90919063ffffffff16565b611ecc565b612ea6612e8185610120015186610100015161296490919063ffffffff16565b612eb09190613b88565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612fe4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906130089190613e52565b93509350935093508061302357505f98975050505050505050565b8684146130545761303384611c21565b600280546001600160801b0319166001600160801b03929092169190911790555b8583146130855761306483612c89565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146130b35761309582611c21565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6130ca613916565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916131c291166136aa565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926131f4929004166136aa565b905292915050565b5f8061320c88888888888861371e565b9092509050806120aa576120aa612794565b5f806132678561148485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061325d818c61149b565b6114849190613aee565b9150613293827f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050935093915050565b5f8061320c8888888888886137e2565b5f805f836132ba86611ecc565b6132c49190613b88565b90505f8112156132da575f8092509250506106c7565b946001945092505050565b5f8082136133065760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133899084901c611ecc565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361352357505f919050565b680755bf798b4a1bf1e5821261354c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061288f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611ecc565b5f818313612a9257816106e2565b5f80670de0b6b3a76400006136bd6106eb565b6136c79190613bc2565b90508083116136d6575f6136e0565b6136e08184613aee565b91506115a5613717670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bc2565b8390612adc565b5f805f61372e898988888861389e565b905061374886611c126137418a8d6139d9565b87906106ce565b9850613755858a86611bb2565b98508881101561376b575f8092509250506137d7565b888103670de0b6b3a764000081106137a057613799613792670de0b6b3a76400008961149b565b8290612bfb565b90506137b8565b6137b5613792670de0b6b3a764000089612adc565b90505b808910156137cd575f809350935050506137d7565b8803925060019150505b965096945050505050565b5f805f6137f2898988888861389e565b905061380286611c12898b6139d9565b975087811015613818575f8092509250506137d7565b878103613826818688612ab9565b9050670de0b6b3a764000081106138535761384c613792670de0b6b3a76400008961149b565b905061386b565b613868613792670de0b6b3a764000089612adc565b90505b613875818661149b565b9050808a101561388c575f809350935050506137d7565b90980398600198509650505050505050565b5f6138a98585612bfb565b6138c26138ba86611c12868b612964565b859085612ab9565b61288f91906139d9565b6040518061012001604052806138e0613916565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561397e575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156139a9575f80fd5b8501606081880312156139ba575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156106e5576106e56139c5565b6001600160a01b03811681146105fa575f80fd5b5f60208284031215613a10575f80fd5b81356115a5816139ec565b80151581146105fa575f80fd5b5f60208284031215613a38575f80fd5b81356115a581613a1b565b5f808335601e19843603018112613a58575f80fd5b83018035915067ffffffffffffffff821115613a72575f80fd5b6020019150368190038213156106c7575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f613ae160c083018486613a86565b9998505050505050505050565b818103818111156106e5576106e56139c5565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f613b3a60e083018486613a86565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612b0e57612b0e6139c5565b6001600160801b03818116838216019080821115612b0e57612b0e6139c5565b8181035f831280158383131683831282161715612b0e57612b0e6139c5565b5f60208284031215613bb7575f80fd5b81516115a5816139ec565b80820281158282048414176106e5576106e56139c5565b6001600160801b03828116828216039080821115612b0e57612b0e6139c5565b8082018281125f831280158216821582161715613c1857613c186139c5565b505092915050565b5f60208284031215613c30575f80fd5b5051919050565b5f60208284031215613c47575f80fd5b81516115a581613a1b565b634e487b7160e01b5f52601260045260245ffd5b5f82613c7457613c74613c52565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106e5576106e56139c5565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613d37828551613ca6565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613daa575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613dcf57613dcf6139c5565b505f0390565b61018081016106e58284613ca6565b5f8060408385031215613df5575f80fd5b825191506020830151613e0781613a1b565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613e3457613e34613c52565b600160ff1b82145f1984141615613e4d57613e4d6139c5565b500590565b5f805f8060808587031215613e65575f80fd5b84519350602085015192506040850151915060608501516139ba81613a1b56fea2646970667358221220866c28df534d8c8a6e0f290d5c82cfde44a3eecea72f04a3e4f9fe6dc2d78f5f64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
