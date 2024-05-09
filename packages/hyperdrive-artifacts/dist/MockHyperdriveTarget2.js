export const MockHyperdriveTarget2 = {
    abi: [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "circuitBreakerDelta",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "sweepCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "DistributeExcessIdleFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidTimestamp",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumSharePrice",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolIsPaused",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RestrictedZeroAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TransferFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint112",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "basePayment",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "checkpointVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "openLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxDeposit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "openShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620041f2380380620041f28339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613d25620004cd600039600050506000505060005050600081816101000152818161032501526130bc01526000818161142c01528181611f3c01528181611f9f0152818161278801528181612ca301528181612cdf01528181612ed501526130960152600081816107cc01528181610d3201528181610e3e01528181611304015281816117d80152818161186b015261307001526000611b5b015260008181611c81015281816126670152818161298d0152612a06015260008181610a4f01528181610d91015281816113a601528181611c5501526129da015260008181610d700152818161262301526129590152600081816107ed01528181610d1001528181610e5f015281816112e201526130e20152600081816101dc015281816103bb0152818161098701526136a001526000818161071e0152818161081f015281816108a601528181610907015261093f0152600050506000818161057d015281816115d60152818161161f015281816116b101528181611732015281816118d90152818161195a0152818161281e0152818161286701528181612abe0152612b070152613d256000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613870565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613870565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102de565b6000806100a4610551565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561057b565b6100de836105e7565b6000806100eb8886610620565b909250905060006100fc83836106f9565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a610717565b905061017881846004610752565b5060008060006101888787610ce9565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c691906138e5565b909155506101d79050844283610e9c565b6102017f0000000000000000000000000000000000000000000000000000000000000000856138e5565b985061020f8389888c610fda565b600061021c60018b611174565b90506102358161022f60208e018e6138f8565b8b6111a9565b8d8a8a898e8561024860208301836138f8565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c8661027e898787611251565b6102898a8888611280565b610299604088016020890161392f565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102e9610551565b600554610100900460ff1615610312576040516321081abf60e01b815260040160405180910390fd5b61031a61057b565b610323836105e7565b7f00000000000000000000000000000000000000000000000000000000000000008610156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6112a8565b905084811015610391576040516342af972b60e01b815260040160405180910390fd5b600061039b610717565b905060006103b26103aa610717565b846004610752565b905060006103e07f0000000000000000000000000000000000000000000000000000000000000000846138e5565b90506000806000806103f38e89886112bb565b600b8054949850929650909450925083916000906104129084906138e5565b909155506104239050874283610e9c565b50600061043184898d6113de565b9050808d10156104545760405163c972651760e01b815260040160405180910390fd5b61045e818c610620565b508e905061046e81858b89611406565b600061047b600288611174565b90508c6104958261048f60208401846138f8565b856111a9565b858b86846104a660208601866138f8565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8d6104dd8c888b611280565b6104ed60408b0160208c0161392f565b610501896104fb8a8d61394c565b906106f9565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361057457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105c757503415155b156105e557604051631574f9f360e01b815260040160405180910390fd5b565b60006105f660208301836138f8565b6001600160a01b03160361061d5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610634604085016020860161392f565b156106595761064f8561064a604087018761395f565b6115ba565b9093509050610675565b50346106718561066c604087018761395f565b61184e565b8492505b61067d6112a8565b915080156106f057604051600090339083908381818185875af1925050503d80600081146106c7576040519150601f19603f3d011682016040523d82523d6000602084013e6106cc565b606091505b50509050806106ee576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061070e8383670de0b6b3a76400006119f8565b90505b92915050565b60006107437f0000000000000000000000000000000000000000000000000000000000000000426139bc565b61074d904261394c565b905090565b600083815260076020526040812060018101546001600160801b031615158061077a57504285115b1561079357600101546001600160801b03169050610ce2565b60008060006107a0610717565b9050808803610818578692506108116107b7611a16565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a37565b91506108d4565b60006108447f00000000000000000000000000000000000000000000000000000000000000008a6138e5565b90505b81810361085f5787935061085c6107b7611a16565b92505b6000818152600760205260409020600101546001600160801b0316935083156108a1576000818152600760205260409020546001600160801b031692506108d2565b6108cb7f0000000000000000000000000000000000000000000000000000000000000000826138e5565b9050610847565b505b6108dd83611a57565b6001850180546001600160801b0319166001600160801b039290921691909117905561093361092c7f00000000000000000000000000000000000000000000000000000000000000008a61394c565b8984610e9c565b6109718861096b6109647f0000000000000000000000000000000000000000000000000000000000000000836138e5565b4290611a85565b84610e9c565b61097a87611a9a565b50600090506007816109ac7f00000000000000000000000000000000000000000000000000000000000000008c61394c565b815260208101919091526040016000908120600101546001600160801b031691506109d860028b611174565b6000818152600e60205260408120549192508b8b8315610b1e5760019250600080610a0786898d866000611c3e565b9150915080600b6000828254610a1d91906138e5565b90915550610a39905086600084610a3381611d0d565b88611d37565b610a4381836138e5565b9150610a7386838a8e877f0000000000000000000000000000000000000000000000000000000000000000611eb1565b9150610a87610a8283856106f9565b611efb565b60058054600290610aa89084906201000090046001600160701b03166139d0565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ad582611a57565b60058054601090610af7908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b2b600184611174565b6000818152600e60205260409020549091508015610c3a5760019450600080610b58838b8f886001611c3e565b9150915080600b6000828254610b6e91906138e5565b90915550610b8a905083600084610b8481611d0d565b8a611f25565b610b94818361394c565b9150610ba3610a8283876106f9565b60058054600290610bc49084906201000090046001600160701b03166139d0565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bf182611a57565b60058054601090610c13908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c7257610c66610c4c87611d0d565b610c5583611d0d565b610c5f9190613a10565b6000612116565b610c70838f6121c9565b505b6000610c7d846123c3565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d56610cfa611a16565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612521565b9250610d636107b7611a16565b9050610dba8684610db5847f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061254d565b6125ba565b15610dc757610dc76125fc565b600080610dd5888489612615565b9092509050610de4828661394c565b9450610df18184896119f8565b9350610dfd848961394c565b9550670de0b6b3a7640000610e8387610e14611a16565b610e1e91906138e5565b600154610e3c908990600160801b90046001600160801b031661394c565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a37565b1115610e9157610e916125fc565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610ec85750505050565b6000848152600760205260408120546001600160801b031690819003610f2257610ef183611a57565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610fa0565b610f73610f6e670de0b6b3a7640000610f3b888661394c565b610f459190613a30565b85670de0b6b3a7640000610f59878a61394c565b610f639190613a30565b859291906001612695565b611a57565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fa984611a57565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b031661101c610f6e82611006670de0b6b3a764000086613a30565b6004546001600160801b03169190886001612695565b600480546001600160801b0319166001600160801b039290921691909117905561104585611a57565b600180546000906110609084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061108d84611a57565b600180546010906110af908490600160801b90046001600160801b0316613a47565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110dc84611a57565b6110e690826139f0565b600280546001600160801b03808416600160801b0291161790559050600061110d8361273d565b905061112b8161111c87611d0d565b6111269084613a67565b612116565b61113484612781565b611140576111406125fc565b600061114b856127e1565b90508061116b57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b0382111561119e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111db9084906138e5565b90915550506000838152600e6020526040812080548392906111fe9084906138e5565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611263604083016020840161392f565b1561126f575082610ce2565b61127984846106f9565b9050610ce2565b6000611292604083016020840161392f565b156112a15761127984846127ee565b5082610ce2565b600061074d670de0b6b3a7640000612803565b6000806000806113286112cc611a16565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006128fe565b925086611335848861291f565b1115611343576113436125fc565b6000806113516107b7611a16565b925061136789670de0b6b3a7640000858b612934565b5091935090915061137a9050818361394c565b611384908661394c565b94506113d0886113ca8b611398858a61394c565b8b6113a38e82612a42565b8e7f0000000000000000000000000000000000000000000000000000000000000000612a58565b9061291f565b955092505093509350935093565b60006113f0604083016020840161392f565b156113fc575082610ce2565b61127984846127ee565b6001546001600160801b031683811015611422576114226125fc565b60035490849003907f00000000000000000000000000000000000000000000000000000000000000009061145a908390600f0b612a7d565b1015611468576114686125fc565b6003546114b290610f6e90600160801b90046001600160801b0316611495670de0b6b3a764000086613a30565b600454600160801b90046001600160801b03169190896001612695565b600480546001600160801b03928316600160801b0292169190911790556114d881611a57565b600180546001600160801b0319166001600160801b039290921691909117905561150185611a57565b60018054601090611523908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061155085611a57565b60038054601090611572908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115a18361273d565b905061112b816115b088611d0d565b6111269084613a10565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161160a575047611695565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561166e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116929190613a8f565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161171057873410156116ff576040516312171d8360e31b815260040160405180910390fd5b611709883461394c565b90506117aa565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a79190613aa8565b91505b816117c8576040516312171d8360e31b815260040160405180910390fd5b60125460000361180d576117fc887f00000000000000000000000000000000000000000000000000000000000000006127ee565b601281905594509250611846915050565b60125460009061181f908a90866119f8565b9050806012600082825461183391906138e5565b9091555090955090935061184692505050565b935093915050565b600061185984612803565b90506012546000036118975761188f817f00000000000000000000000000000000000000000000000000000000000000006127ee565b6012556118bd565b60006118a282612aa3565b905080601260008282546118b691906138e5565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119385782341015611927576040516312171d8360e31b815260040160405180910390fd5b611931833461394c565b90506119d2565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156119ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cf9190613aa8565b91505b816119f0576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000826000190484118302158202611a0f57600080fd5b5091020490565b60015460035460009161074d916001600160801b0390911690600f0b612a7d565b6000611a4e82611a488588886119f8565b90612b8c565b95945050505050565b60006001600160801b03821115611a8157604051630f0af95160e11b815260040160405180910390fd5b5090565b6000818311611a94578261070e565b50919050565b6005546000908190611abd908490600160801b90046001600160801b03166106f9565b6005546201000090046001600160701b03169250905081811115611c39576000611ae7838361394c565b9050611af6610f6e8286612bf7565b60058054601090611b18908490600160801b90046001600160801b0316613a47565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b5185836127ee90919063ffffffff16565b90506000611b7f827f00000000000000000000000000000000000000000000000000000000000000006106f9565b905080600b6000828254611b9391906138e5565b90915550611ba39050818361394c565b9150611bae82611a57565b60018054600090611bc99084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bf682612c0c565b60038054600090611c0b908490600f0b613ac5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c4b87856127ee565b91506000611c79837f00000000000000000000000000000000000000000000000000000000000000006106f9565b9050611ca5817f00000000000000000000000000000000000000000000000000000000000000006106f9565b91508315611cc857611cb7828261394c565b611cc1908461394c565b9250611cdf565b611cd2828261394c565b611cdc90846138e5565b92505b86861015611d0257611cf28387896119f8565b9250611cff8287896119f8565b91505b509550959350505050565b60006001600160ff1b03821115611a815760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611d80610f6e82611d63670de0b6b3a764000086613a30565b600454600160801b90046001600160801b031691908a6000612695565b600480546001600160801b03928316600160801b029216919091179055611da686611a57565b611db09082613a47565b600380546001600160801b03928316600160801b029216919091179055611dd684611a57565b60018054600090611df19084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e1e83612c36565b60038054600090611e33908490600f0b613ac5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611e6385611a57565b60018054601090611e85908490600160801b90046001600160801b0316613a47565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611ec984611ec38a888a6119f8565b906127ee565b9050611ed68884866119f8565b611ee090826138e5565b905086811115611ef05786810391505b509695505050505050565b60006001600160701b03821115611a815760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611f6757507f0000000000000000000000000000000000000000000000000000000000000000611f65858361394c565b105b15611f7457611f746125fc565b6003549084900390600f0b611f898482613a10565b905083611f9586611d0d565b138015611fca57507f0000000000000000000000000000000000000000000000000000000000000000611fc88383612a7d565b105b15611fd757611fd76125fc565b600254600160801b90046001600160801b0316612019610f6e82612003670de0b6b3a764000088613a30565b6004546001600160801b031691908c6000612695565b600480546001600160801b0319166001600160801b0392909216919091179055612043888261394c565b905061204e81611a57565b600280546001600160801b03928316600160801b02921691909117905561207483611a57565b600180546001600160801b0319166001600160801b039290921691909117905561209d82612c36565b600380546001600160801b0319166001600160801b03929092169190911790556120c687611a57565b600180546010906120e8908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061213f6121258483612c72565b612130846000612c72565b61213a9190613a10565b612c36565b9050600081600f0b1315612194576002805482919060009061216b9084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156121c4576121a981613af2565b6002805460009061216b9084906001600160801b0316613a47565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291612214916001600160801b03169061394c565b905080600003612228576001915050610711565b600061223385612c81565b90508060000361224857600192505050610711565b600080612256838589612d1d565b915091508061226c576000945050505050610711565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016122a8929190613b96565b6040805180830381865af41580156122c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e89190613c0c565b915091506123066122f882611d0d565b61230190613c30565b612e91565b92508261231c5760009650505050505050610711565b61232582611a57565b600680546000906123409084906001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061236d81611a57565b6006805460109061238f908490600160801b90046001600160801b03166139f0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6123ec87613027565b6040518263ffffffff1660e01b81526004016124089190613c4c565b6040805180830381865af4158015612424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124489190613c5b565b915091508061245e575060009485945092505050565b600080861161246e576000612478565b61247883876106f9565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916124e391906138e5565b6124ed919061394c565b9050806000036125065750600096879650945050505050565b600061251283836127ee565b98600198509650505050505050565b600061254287878761253b88670de0b6b3a764000061394c565b8787613161565b979650505050505050565b60006125b261258e61256784670de0b6b3a764000061394c565b6113ca670de0b6b3a764000061257d818a612bf7565b612587919061394c565b879061291f565b6125a090670de0b6b3a76400006138e5565b611ec384670de0b6b3a764000061394c565b949350505050565b6000806125f1856125c9611a16565b6125d391906138e5565b600154610e3c908790600160801b90046001600160801b031661394c565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061265f856113ca85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612655818c612bf7565b6113ca919061394c565b915061268b827f00000000000000000000000000000000000000000000000000000000000000006106f9565b9050935093915050565b6000826000036126a6575084611a4e565b81156126f9576126d76126b984876138e5565b6126c385876106f9565b6126cd888a6106f9565b611ec391906138e5565b905060006126e58588611a85565b9050808210156126f3578091505b50611a4e565b82850361270857506000611a4e565b612733612715848761394c565b61271f858761291f565b612729888a6106f9565b611ec3919061394c565b9695505050505050565b6000612765600e6000612751600286611174565b815260200190815260200160002054611d0d565b612777600e6000612751600187611174565b6107119190613a10565b60006127ad7f00000000000000000000000000000000000000000000000000000000000000008361291f565b6002546127c391906001600160801b03166138e5565b6001546127d9906001600160801b0316846106f9565b101592915050565b60006107118260046121c9565b600061070e83670de0b6b3a7640000846119f8565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128525750476128dd565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156128b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128da9190613a8f565b90505b6012546000036128ee576000610ce2565b601254610ce290849083906119f8565b600061254287878761291888670de0b6b3a764000061394c565b8787613215565b600061070e8383670de0b6b3a7640000613238565b6000808080612985878661297e8b6113ca6129578c670de0b6b3a764000061394c565b7f00000000000000000000000000000000000000000000000000000000000000009061291f565b9190613238565b93506129b1847f00000000000000000000000000000000000000000000000000000000000000006106f9565b915060006129d26129ca89670de0b6b3a764000061394c565b8a9088613238565b90506129fe817f000000000000000000000000000000000000000000000000000000000000000061291f565b9350612a2a847f00000000000000000000000000000000000000000000000000000000000000006106f9565b612a3490846138e5565b915050945094509450949050565b6000818311612a51578161070e565b5090919050565b600080612a7084612a6a8a888a613238565b90612bf7565b9050611ed6888486613238565b600080612a8a848461325e565b909250905080612a9c57612a9c6125fc565b5092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612af2575047612b7d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612b56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7a9190613a8f565b90505b601254610ce2908490836119f8565b600081600003612ba55750670de0b6b3a7640000610711565b82600003612bb557506000610711565b6000612bc083611d0d565b90506000612bd5612bd086611d0d565b61329a565b9050818102612bec670de0b6b3a764000082613c8b565b9050612733816134c0565b600061070e83670de0b6b3a764000084613238565b600060016001607f1b03821115611a815760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612c54575060016001607f1b0382135b15611a815760405163a5353be560e01b815260040160405180910390fd5b6000818313612a51578161070e565b6002546000908190612c9c906001600160801b031684612bf7565b9050612cc87f0000000000000000000000000000000000000000000000000000000000000000826138e5565b6001546001600160801b03161115611a94576001547f000000000000000000000000000000000000000000000000000000000000000090612d139083906001600160801b031661394c565b610ce2919061394c565b612d256137bd565b600080612d3184613027565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d6c9190613c4c565b6040805180830381865af4158015612d88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dac9190613c5b565b9350905082612dc15750600091506118469050565b6000612de8612de38461016001518561014001516106f990919063ffffffff16565b611d0d565b612e08612de385610120015186610100015161291f90919063ffffffff16565b612e129190613a10565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612f48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f6c9190613cb9565b935093509350935080612f885750600098975050505050505050565b868414612fb957612f9884611a57565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612fea57612fc983612c36565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461301857612ffa82611a57565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b61302f61380f565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916131279116613655565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261315992900416613655565b905292915050565b60008061317188888787876136cb565b905061318b85611a48613184898c6138e5565b86906106f9565b97506131988489856119f8565b9750878110156131aa576131aa6125fc565b878103670de0b6b3a764000081106131df576131d86131d1670de0b6b3a764000088612bf7565b8290612b8c565b90506131f7565b6131f46131d1670de0b6b3a7640000886127ee565b90505b80881015613207576132076125fc565b909603979650505050505050565b6000806132268888888888886136fa565b909250905080611ef057611ef06125fc565b600082600019048411830215820261324f57600080fd5b50910281810615159190040190565b60008060008361326d86611d0d565b6132779190613a10565b9050600081121561328f5760008092509250506106f2565b946001945092505050565b60008082136132bc5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061333f9084901c611d0d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136134db57506000919050565b680755bf798b4a1bf1e58212613504576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061273374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611d0d565b600080670de0b6b3a7640000613669610717565b6136739190613a30565b905080831161368357600061368d565b61368d818461394c565b9150610ce26136c4670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a30565b83906127ee565b60006136d78585612b8c565b6136f06136e886611a48868b61291f565b859085613238565b61273391906138e5565b600080600061370c89898888886136cb565b905061371c86611a48898b6138e5565b9750878110156137335760008092509250506137b2565b878103613741818688613238565b9050670de0b6b3a7640000811061376e576137676131d1670de0b6b3a764000089612bf7565b9050613786565b6137836131d1670de0b6b3a7640000896127ee565b90505b6137908186612bf7565b9050808a10156137a8576000809350935050506137b2565b8903925060019150505b965096945050505050565b6040518061012001604052806137d161380f565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561388657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156138b257600080fd5b8501606081880312156138c457600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610711576107116138cf565b60006020828403121561390a57600080fd5b81356001600160a01b0381168114610ce257600080fd5b801515811461061d57600080fd5b60006020828403121561394157600080fd5b8135610ce281613921565b81810381811115610711576107116138cf565b6000808335601e1984360301811261397657600080fd5b83018035915067ffffffffffffffff82111561399157600080fd5b6020019150368190038213156106f257600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826139cb576139cb6139a6565b500690565b6001600160701b03818116838216019080821115612a9c57612a9c6138cf565b6001600160801b03818116838216019080821115612a9c57612a9c6138cf565b8181036000831280158383131683831282161715612a9c57612a9c6138cf565b8082028115828204841417610711576107116138cf565b6001600160801b03828116828216039080821115612a9c57612a9c6138cf565b8082018281126000831280158216821582161715613a8757613a876138cf565b505092915050565b600060208284031215613aa157600080fd5b5051919050565b600060208284031215613aba57600080fd5b8151610ce281613921565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610711576107116138cf565b600081600f0b60016001607f1b03198103613b0f57613b0f6138cf565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613baa828551613b18565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613c1f57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613c4557613c456138cf565b5060000390565b61018081016107118284613b18565b60008060408385031215613c6e57600080fd5b825191506020830151613c8081613921565b809150509250929050565b600082613c9a57613c9a6139a6565b600160ff1b821460001984141615613cb457613cb46138cf565b500590565b60008060008060808587031215613ccf57600080fd5b84519350602085015192506040850151915060608501516138c48161392156fea2646970667358221220eaa7e3eb0815c7b99e34c36b69842303d73bb5571051172e18c533a3c400067c64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
