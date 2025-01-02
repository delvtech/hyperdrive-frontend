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
    bytecode: '0x61028060405234801562000011575f80fd5b5060405162003f2338038062003f238339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613a8d620004965f395f50505f50505f8181610bf701526116fa01525f50505f818160f1015281816102f20152612d4401525f818161151301528181611dc801528181611e2b015281816125b2015281816129340152818161297001528181612b610152612d1e01525f81816107b501528181610d5101528181610d9301528181610e85015281816112eb015281816113490152612cf801525f6119f201525f8181611b13015281816126a30152818161271b0152612e5c01525f818161097201528181610e06015281816113e401528181611ae701526126ef01525f8181610de50152818161266f0152612e1801525f81816107d601528181610d2f01528181610db401528181610ea6015281816112c90152818161136a0152612d6a01525f81816101cb01528181610386015281816108b001526132e001525f8181610676015281816106f20152818161076601528181610831015261086901525f818161144b015281816116ca015261180d01525f5050613a8d5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a366004613558565b61006b565b6040805192835260208301919091520160405180910390f35b61003f610066366004613558565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102b4565b5f8061009f610521565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d183610549565b5f806100dd8886610581565b90925090505f6100ed8383610652565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101305760405163211ddda360e11b815260040160405180910390fd5b86821015610151576040516342af972b60e01b815260040160405180910390fd5b5f61015a61066f565b905061016a81846004600161069f565b505f805f6101788787610d03565b919a5091945090925090508b8810156101a45760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101b591906135c6565b909155506101c69050844283610ee2565b6101f07f0000000000000000000000000000000000000000000000000000000000000000856135c6565b98506101fe8389888c61101b565b5f61020a60018b6111b2565b90506102238161021d60208e018e6135ed565b8b6111e6565b8d8a8a898e8561023660208301836135ed565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102736040880160208901613615565b8961028160408a018a613630565b604051610294979695949392919061369b565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102be610521565b600654610100900460ff16156102e7576040516321081abf60e01b815260040160405180910390fd5b6102f083610549565b7f00000000000000000000000000000000000000000000000000000000000000008610156103315760405163211ddda360e11b815260040160405180910390fd5b5f61033a61128b565b90508481101561035d576040516342af972b60e01b815260040160405180910390fd5b5f61036661066f565b90505f61037e61037461066f565b846004600161069f565b90505f6103ab7f0000000000000000000000000000000000000000000000000000000000000000846135c6565b90505f805f806103bc8e898861129d565b60098054949850929650909450925083915f906103da9084906135c6565b909155506103eb9050874283610ee2565b6103fd6103f8858a61141f565b611433565b6104089060016135c6565b9350505f61041784898d6114bc565b9050808d101561043a5760405163c972651760e01b815260040160405180910390fd5b610444818c610581565b508e905061045481858b896114ed565b5f6104606002886111b2565b90508c61047a8261047460208401846135ed565b856111e6565b858b868461048b60208601866135ed565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104c860408b0160208c01613615565b6104dc896104d68a8d6136db565b90610652565b8d6104ea60408e018e613630565b6040516104fe9897969594939291906136ee565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361054357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61055760208301836135ed565b6001600160a01b03160361057e5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105946040850160208601613615565b156105b9576105af856105aa6040870187613630565b6116a0565b90935090506105d1565b50346105d1856105cc6040870187613630565b6117eb565b6105d961128b565b91508015610649576040515f90339083908381818185875af1925050503d805f8114610620576040519150601f19603f3d011682016040523d82523d5f602084013e610625565b606091505b5050905080610647576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106668383670de0b6b3a7640000611885565b90505b92915050565b5f61069a427f00000000000000000000000000000000000000000000000000000000000000006118a0565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106c657504286115b156106df57600101546001600160801b03169050610cfb565b5f805f6106ea61066f565b90505f6107177f00000000000000000000000000000000000000000000000000000000000000008b6135c6565b90505b8181101561078b575f818152600860205260409020600101546001600160801b03168015610763575f828152600860205260409020549094506001600160801b0316925061078b565b507f00000000000000000000000000000000000000000000000000000000000000000161071a565b835f036107fd578893506107fa6107a06118b5565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d5565b92505b50610807836118f4565b6001850180546001600160801b0319166001600160801b039290921691909117905561085d6108567f00000000000000000000000000000000000000000000000000000000000000008b6136db565b8a84610ee2565b61089b8961089561088e7f0000000000000000000000000000000000000000000000000000000000000000836135c6565b4290611921565b84610ee2565b6108a488611935565b505f90506008816108d57f00000000000000000000000000000000000000000000000000000000000000008d6136db565b815260208101919091526040015f908120600101546001600160801b0316915061090060028c6111b2565b5f818152600b60205260408120549192508c8c8315610a4157600192505f8061092c86898d865f611ad2565b915091508060095f82825461094191906135c6565b9091555061095c9050865f8461095681611b9f565b88611bc8565b61096681836135c6565b915061099686838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d3f565b91506109aa6109a58385610652565b611d88565b600680546002906109cb9084906201000090046001600160701b0316613735565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109f8826118f4565b60068054601090610a1a908490600160801b90046001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a4d6001846111b2565b5f818152600b60205260409020549091508015610b5857600194505f80610a78838b8f886001611ad2565b915091508060095f828254610a8d91906135c6565b90915550610aa89050835f84610aa281611b9f565b8a611db1565b610ab281836136db565b9150610ac16109a58387610652565b60068054600290610ae29084906201000090046001600160701b0316613735565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b0f826118f4565b60068054601090610b31908490600160801b90046001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b9157610b83610b6a87611b9f565b610b7383611b9f565b610b7d9190613775565b5f611fa1565b8e610b8e8482611fe0565b50505b5f610b9b846121cf565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c51573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c759190613794565b90506001600160a01b03811615610ce957610ce65a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612311565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d106118b5565b600254909150610d75908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612397565b600254909450610dd8908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d5565b9150610e2f8785610e2a857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006123c2565b612426565b15610e3c57610e3c612467565b610e4887858885612480565b91965094509250670de0b6b3a7640000610eca610e6587846135c6565b600254610e83908890600160801b90046001600160801b03166136db565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d5565b1115610ed857610ed8612467565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f0d5750505050565b5f848152600860205260408120546001600160801b031690819003610f6557610f35836118f4565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610fe2565b610fb6610fb1670de0b6b3a7640000610f7e88866136db565b610f8891906137af565b85670de0b6b3a7640000610f9c878a6136db565b610fa691906137af565b8592919060016124c8565b6118f4565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610feb846118f4565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661105d610fb182611047670de0b6b3a7640000866137af565b6005546001600160801b031691908860016124c8565b600580546001600160801b0319166001600160801b0392909216919091179055611086856118f4565b600280545f906110a09084906001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110cd846118f4565b600280546010906110ef908490600160801b90046001600160801b03166137c6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061111c846118f4565b6111269082613755565b600380546001600160801b03808416600160801b02911617905590505f61114c8361256c565b905061116a8161115b87611b9f565b61116590846137e6565b611fa1565b611173846125ac565b61117f5761117f612467565b5f6111898561260b565b9050806111a957604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b038211156111db5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906112179084906135c6565b90915550505f838152600b6020526040812080548392906112399084906135c6565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f61069a670de0b6b3a7640000611433565b5f805f805f6112aa6118b5565b60025490915061130f908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612617565b93508761131c8589612637565b111561132a5761132a612467565b6002545f90819061138e908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118d5565b93506113a48a670de0b6b3a7640000868c61264b565b509193509091506113b7905081836136db565b6113c190876136db565b95508861140e816114088d6113d6868c6136db565b8d6113e18782612757565b877f000000000000000000000000000000000000000000000000000000000000000061276c565b90612637565b975090945050505093509350935093565b5f61066683670de0b6b3a76400008461278c565b604051630f451f7160e31b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015611498573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610669919061380d565b5f6114cd6040830160208401613615565b156114d95750826114e6565b6114e384846127af565b90505b9392505050565b6002546001600160801b03168381101561150957611509612467565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611541908390600f0b6127c3565b101561154f5761154f612467565b60045461159990610fb190600160801b90046001600160801b031661157c670de0b6b3a7640000866137af565b600554600160801b90046001600160801b031691908960016124c8565b600580546001600160801b03928316600160801b0292169190911790556115bf816118f4565b600280546001600160801b0319166001600160801b03929092169190911790556115e8856118f4565b6002805460109061160a908490600160801b90046001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611637856118f4565b60048054601090611659908490600160801b90046001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6116878361256c565b905061116a8161169688611b9f565b6111659084613775565b5f80843410156116c3576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a1903eab867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611754573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117789190613794565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af11580156117bb573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906117e0919061380d565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303815f875af115801561185b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061187f919061380d565b50505050565b5f825f190484118302158202611899575f80fd5b5091020490565b5f6118ab8284613838565b61066690846136db565b6002546004545f9161069a916001600160801b0390911690600f0b6127c3565b5f6118eb826118e5858888611885565b906127e8565b95945050505050565b5f6001600160801b0382111561191d57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f81831161192f5782610666565b50919050565b6006545f908190611957908490600160801b90046001600160801b0316610652565b6006546201000090046001600160701b03169250905081811115611acd575f61198083836136db565b905061198f610fb1828661141f565b600680546010906119b1908490600160801b90046001600160801b03166137c6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6119e985836127af90919063ffffffff16565b90505f611a16827f0000000000000000000000000000000000000000000000000000000000000000610652565b90508060095f828254611a2991906135c6565b90915550611a39905081836136db565b9150611a44826118f4565b600280545f90611a5e9084906001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a8b8261284d565b600480545f90611a9f908490600f0b61384b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611ade87856127af565b91505f611b0b837f0000000000000000000000000000000000000000000000000000000000000000610652565b9050611b37817f0000000000000000000000000000000000000000000000000000000000000000610652565b91508315611b5a57611b4982826136db565b611b5390846136db565b9250611b71565b611b6482826136db565b611b6e90846135c6565b92505b86861015611b9457611b84838789611885565b9250611b91828789611885565b91505b509550959350505050565b5f6001600160ff1b0382111561191d5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611c10610fb182611bf4670de0b6b3a7640000866137af565b600554600160801b90046001600160801b031691908a5f6124c8565b600580546001600160801b03928316600160801b029216919091179055611c36866118f4565b611c4090826137c6565b600480546001600160801b03928316600160801b029216919091179055611c66846118f4565b600280545f90611c809084906001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cad83612876565b600480545f90611cc1908490600f0b61384b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611cf1856118f4565b60028054601090611d13908490600160801b90046001600160801b03166137c6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611d5684611d508a888a611885565b906127af565b9050611d63888486611885565b611d6d90826135c6565b905086811115611d7d5786810391505b509695505050505050565b5f6001600160701b0382111561191d5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611df357507f0000000000000000000000000000000000000000000000000000000000000000611df185836136db565b105b15611e0057611e00612467565b6004549084900390600f0b611e158482613775565b905083611e2186611b9f565b138015611e5657507f0000000000000000000000000000000000000000000000000000000000000000611e5483836127c3565b105b15611e6357611e63612467565b600354600160801b90046001600160801b0316611ea4610fb182611e8f670de0b6b3a7640000886137af565b6005546001600160801b031691908c5f6124c8565b600580546001600160801b0319166001600160801b0392909216919091179055611ece88826136db565b9050611ed9816118f4565b600380546001600160801b03928316600160801b029216919091179055611eff836118f4565b600280546001600160801b0319166001600160801b0392909216919091179055611f2882612876565b600480546001600160801b0319166001600160801b0392909216919091179055611f51876118f4565b60028054601090611f73908490600160801b90046001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611fbc90610fb1906001600160801b031684846128b1565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161202a916001600160801b0316906136db565b9050805f0361203d576001915050610669565b5f61204785612913565b9050805f0361205b57600192505050610669565b5f806120688385896129ae565b915091508061207d575f945050505050610669565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016120b89291906138f6565b6040805180830381865af41580156120d2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120f6919061396b565b9150915061211461210682611b9f565b61210f9061398d565b612b1b565b925082612129575f9650505050505050610669565b612132826118f4565b600780545f9061214c9084906001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612179816118f4565b6007805460109061219b908490600160801b90046001600160801b0316613755565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6121f687612caf565b6040518263ffffffff1660e01b815260040161221291906139a7565b6040805180830381865af415801561222c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061225091906139b6565b915091508061226557505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916122ca916135c6565b6122d491906136db565b9050805f036122ea57505f958695509350505050565b5f8087116122f8575f612303565b612303848884611885565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff811115612334576123346139e4565b6040519080825280601f01601f19166020018201604052801561235e576020820181803683370190505b5090505f808751602089018b8e8ef191503d92508683111561237e578692505b828152825f602083013e90999098509650505050505050565b5f6123b78787876123b088670de0b6b3a76400006136db565b8787612de9565b979650505050505050565b5f6114e36124026123db84670de0b6b3a76400006136db565b611408670de0b6b3a76400006123f1818a61141f565b6123fb91906136db565b8790612637565b61241490670de0b6b3a76400006135c6565b611d5084670de0b6b3a76400006136db565b5f8061245c856124346118b5565b61243e91906135c6565b600254610e83908790600160801b90046001600160801b03166136db565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f612490898789612e0b565b909250905061249f82896136db565b97505f6124ad82888a611885565b90506124b9818b6136db565b9a989950979650505050505050565b5f825f036124d75750846118eb565b8115612529576125086124ea84876135c6565b6124f48587610652565b6124fe888a610652565b611d5091906135c6565b90505f6125158588611921565b905080821015612523578091505b506118eb565b82850361253757505f6118eb565b61256261254484876136db565b61254e8587612637565b612558888a610652565b611d5091906136db565b9695505050505050565b5f612591600b5f61257e6002866111b2565b81526020019081526020015f2054611b9f565b6125a2600b5f61257e6001876111b2565b6106699190613775565b5f6125d77f000000000000000000000000000000000000000000000000000000000000000083612637565b6003546125ed91906001600160801b03166135c6565b600254612603906001600160801b031684610652565b101592915050565b5f610669826004611fe0565b5f6123b787878761263088670de0b6b3a76400006136db565b8787612e8a565b5f6106668383670de0b6b3a764000061278c565b5f80808061269b87866126948b61140861266d8c670de0b6b3a76400006136db565b7f000000000000000000000000000000000000000000000000000000000000000090612637565b919061278c565b93506126c7847f0000000000000000000000000000000000000000000000000000000000000000610652565b91505f6126e76126df89670de0b6b3a76400006136db565b8a908861278c565b9050612713817f0000000000000000000000000000000000000000000000000000000000000000612637565b935061273f847f0000000000000000000000000000000000000000000000000000000000000000610652565b61274990846135c6565b915050945094509450949050565b5f8183116127655781610666565b5090919050565b5f806127838461277d8a888a61278c565b9061141f565b9050611d638884865b5f825f1904841183021582026127a0575f80fd5b50910281810615159190040190565b5f61066683670de0b6b3a764000084611885565b5f806127cf8484612e9a565b9092509050806127e1576127e1612467565b5092915050565b5f815f036127ff5750670de0b6b3a7640000610669565b825f0361280d57505f610669565b5f61281783611b9f565b90505f61282b61282686611b9f565b612ed2565b9050818102612842670de0b6b3a7640000826139f8565b9050612562816130f7565b5f60016001607f1b0382111561191d5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612893575060016001607f1b0382135b1561191d5760405163a5353be560e01b815260040160405180910390fd5b5f806128bd845f613289565b6128c7845f613289565b6128d19190613775565b90505f8113156128ec576128e581866135c6565b945061290a565b5f81121561290a576128fd8161398d565b61290790866136db565b94505b50929392505050565b6003545f90819061292d906001600160801b03168461141f565b90506129597f0000000000000000000000000000000000000000000000000000000000000000826135c6565b6002546001600160801b0316111561192f576002547f0000000000000000000000000000000000000000000000000000000000000000906129a49083906001600160801b03166136db565b6114e691906136db565b6129b66134b9565b5f806129c184612caf565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129fb91906139a7565b6040805180830381865af4158015612a15573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a3991906139b6565b9350905082612a4d57505f91506117e39050565b5f612a73612a6e84610160015185610140015161065290919063ffffffff16565b611b9f565b612a93612a6e85610120015186610100015161263790919063ffffffff16565b612a9d9190613775565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bd1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612bf59190613a24565b935093509350935080612c1057505f98975050505050505050565b868414612c4157612c20846118f4565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c7257612c5183612876565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ca057612c82826118f4565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612cb7613503565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612daf9116613297565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612de192900416613297565b905292915050565b5f80612df988888888888861330b565b909250905080611d7d57611d7d612467565b5f80612e548561140885817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612e4a818c61141f565b61140891906136db565b9150612e80827f0000000000000000000000000000000000000000000000000000000000000000610652565b9050935093915050565b5f80612df98888888888886133cf565b5f805f83612ea786611b9f565b612eb19190613775565b90505f811215612ec7575f80925092505061064b565b946001945092505050565b5f808213612ef35760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f769084901c611b9f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361311057505f919050565b680755bf798b4a1bf1e58212613139576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061256274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b9f565b5f8183136127655781610666565b5f80670de0b6b3a76400006132aa61066f565b6132b491906137af565b90508083116132c3575f6132cd565b6132cd81846136db565b91506114e6613304670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137af565b83906127af565b5f805f61331b898988888861348b565b9050613335866118e561332e8a8d6135c6565b8790610652565b9850613342858a86611885565b985088811015613358575f8092509250506133c4565b888103670de0b6b3a7640000811061338d5761338661337f670de0b6b3a76400008961141f565b82906127e8565b90506133a5565b6133a261337f670de0b6b3a7640000896127af565b90505b808910156133ba575f809350935050506133c4565b8803925060019150505b965096945050505050565b5f805f6133df898988888861348b565b90506133ef866118e5898b6135c6565b975087811015613405575f8092509250506133c4565b87810361341381868861278c565b9050670de0b6b3a764000081106134405761343961337f670de0b6b3a76400008961141f565b9050613458565b61345561337f670de0b6b3a7640000896127af565b90505b613462818661141f565b9050808a1015613479575f809350935050506133c4565b90980398600198509650505050505050565b5f61349685856127e8565b6134af6134a7866118e5868b612637565b85908561278c565b61256291906135c6565b6040518061012001604052806134cd613503565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561356b575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613596575f80fd5b8501606081880312156135a7575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115610669576106696135b2565b6001600160a01b038116811461057e575f80fd5b5f602082840312156135fd575f80fd5b81356114e6816135d9565b801515811461057e575f80fd5b5f60208284031215613625575f80fd5b81356114e681613608565b5f808335601e19843603018112613645575f80fd5b83018035915067ffffffffffffffff82111561365f575f80fd5b60200191503681900382131561064b575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6136ce60c083018486613673565b9998505050505050505050565b81810381811115610669576106696135b2565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61372760e083018486613673565b9a9950505050505050505050565b6001600160701b038181168382160190808211156127e1576127e16135b2565b6001600160801b038181168382160190808211156127e1576127e16135b2565b8181035f8312801583831316838312821617156127e1576127e16135b2565b5f602082840312156137a4575f80fd5b81516114e6816135d9565b8082028115828204841417610669576106696135b2565b6001600160801b038281168282160390808211156127e1576127e16135b2565b8082018281125f831280158216821582161715613805576138056135b2565b505092915050565b5f6020828403121561381d575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f8261384657613846613824565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610669576106696135b2565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613909828551613878565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f806040838503121561397c575f80fd5b505080516020909101519092909150565b5f600160ff1b82016139a1576139a16135b2565b505f0390565b61018081016106698284613878565b5f80604083850312156139c7575f80fd5b8251915060208301516139d981613608565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613a0657613a06613824565b600160ff1b82145f1984141615613a1f57613a1f6135b2565b500590565b5f805f8060808587031215613a37575f80fd5b84519350602085015192506040850151915060608501516135a78161360856fea26469706673582212204b0f5c410487b49731b8a68b5623f369dfbe74c911b1098ff8614c700245147e64736f6c63430008160033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
