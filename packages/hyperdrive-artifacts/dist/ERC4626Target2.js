export const ERC4626Target2 = {
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
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
            "name": "FailedInnerCall",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200400e3803806200400e8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b766200049860003960005050600050506000505060008181610100015281816103110152612cdb01526000818161137301528181611bbb01528181611c1e01528181612402015281816128c2015281816128fe01528181612af40152612cb501526000818161076301528181610cc901528181610dd5015281816112440152612c8f015260006117da015260008181611900015281816122e10152818161258301526125fc0152600081816109e601528181610d28015281816112e6015281816118d401526125d0015260008181610d070152818161229d015261254f01526000818161078401528181610ca701528181610df6015281816112220152612d010152600081816101dc015281816103a70152818161091e01526133ca0152600081816106b5015281816107b60152818161083d0152818161089e01526108d601526000818161153e015281816115b80152818161164a015261248101526000818161151101526115720152613b766000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613692565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613692565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102ca565b6000806100a4610533565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561055d565b6100de8361057e565b6000806100eb88866105b7565b909250905060006100fc8383610690565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106ae565b9050610178818460046106e9565b5060008060006101888787610c80565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c69190613707565b909155506101d79050844283610e33565b6102017f000000000000000000000000000000000000000000000000000000000000000085613707565b985061020f8389888c610f71565b600061021c60018b61110b565b90506102358161022f60208e018e61371a565b8b611140565b8d8a8a898e85610248602083018361371a565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c8688866102856040880160208901613751565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102d5610533565b600554610100900460ff16156102fe576040516321081abf60e01b815260040160405180910390fd5b61030661055d565b61030f8361057e565b7f00000000000000000000000000000000000000000000000000000000000000008610156103505760405163211ddda360e11b815260040160405180910390fd5b600061035a6111e8565b90508481101561037d576040516342af972b60e01b815260040160405180910390fd5b60006103876106ae565b9050600061039e6103966106ae565b8460046106e9565b905060006103cc7f000000000000000000000000000000000000000000000000000000000000000084613707565b90506000806000806103df8e89886111fb565b600b8054949850929650909450925083916000906103fe908490613707565b9091555061040f9050874283610e33565b50600061041d84898d61131e565b9050808d10156104405760405163c972651760e01b815260040160405180910390fd5b61044a818c6105b7565b508e905061045a81858b8961134d565b600061046760028861110b565b90508c6104818261047b602084018461371a565b85611140565b858b8684610492602086018661371a565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8a866104cf60408b0160208c01613751565b6104e3896104dd8a8d61376e565b90610690565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361055657604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057c57604051631574f9f360e01b815260040160405180910390fd5b565b600061058d602083018361371a565b6001600160a01b0316036105b45760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105cb6040850160208601613751565b156105f0576105e6856105e16040870187613781565b611501565b909350905061060c565b5034610608856106036040870187613781565b61163d565b8492505b6106146111e8565b9150801561068757604051600090339083908381818185875af1925050503d806000811461065e576040519150601f19603f3d011682016040523d82523d6000602084013e610663565b606091505b5050905080610685576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106a58383670de0b6b3a7640000611677565b90505b92915050565b60006106da7f0000000000000000000000000000000000000000000000000000000000000000426137de565b6106e4904261376e565b905090565b600083815260076020526040812060018101546001600160801b031615158061071157504285115b1561072a57600101546001600160801b03169050610c79565b60008060006107376106ae565b90508088036107af578692506107a861074e611695565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116b6565b915061086b565b60006107db7f00000000000000000000000000000000000000000000000000000000000000008a613707565b90505b8181036107f6578793506107f361074e611695565b92505b6000818152600760205260409020600101546001600160801b031693508315610838576000818152600760205260409020546001600160801b03169250610869565b6108627f000000000000000000000000000000000000000000000000000000000000000082613707565b90506107de565b505b610874836116d6565b6001850180546001600160801b0319166001600160801b03929092169190911790556108ca6108c37f00000000000000000000000000000000000000000000000000000000000000008a61376e565b8984610e33565b610908886109026108fb7f000000000000000000000000000000000000000000000000000000000000000083613707565b4290611704565b84610e33565b61091187611719565b50600090506007816109437f00000000000000000000000000000000000000000000000000000000000000008c61376e565b815260208101919091526040016000908120600101546001600160801b0316915061096f60028b61110b565b6000818152600e60205260408120549192508b8b8315610ab5576001925060008061099e86898d8660006118bd565b9150915080600b60008282546109b49190613707565b909155506109d09050866000846109ca8161198c565b886119b6565b6109da8183613707565b9150610a0a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b30565b9150610a1e610a198385610690565b611b7a565b60058054600290610a3f9084906201000090046001600160701b03166137f2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a6c826116d6565b60058054601090610a8e908490600160801b90046001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ac260018461110b565b6000818152600e60205260409020549091508015610bd15760019450600080610aef838b8f8860016118bd565b9150915080600b6000828254610b059190613707565b90915550610b21905083600084610b1b8161198c565b8a611ba4565b610b2b818361376e565b9150610b3a610a198387610690565b60058054600290610b5b9084906201000090046001600160701b03166137f2565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b88826116d6565b60058054601090610baa908490600160801b90046001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c0957610bfd610be38761198c565b610bec8361198c565b610bf69190613832565b6000611d95565b610c07838f611e43565b505b6000610c148461203d565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610ced610c91611695565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061219b565b9250610cfa61074e611695565b9050610d518684610d4c847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121c7565b612234565b15610d5e57610d5e612276565b600080610d6c88848961228f565b9092509050610d7b828661376e565b9450610d88818489611677565b9350610d94848961376e565b9550670de0b6b3a7640000610e1a87610dab611695565b610db59190613707565b600154610dd3908990600160801b90046001600160801b031661376e565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116b6565b1115610e2857610e28612276565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e5f5750505050565b6000848152600760205260408120546001600160801b031690819003610eb957610e88836116d6565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f37565b610f0a610f05670de0b6b3a7640000610ed2888661376e565b610edc9190613852565b85670de0b6b3a7640000610ef0878a61376e565b610efa9190613852565b85929190600161230f565b6116d6565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f40846116d6565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610fb3610f0582610f9d670de0b6b3a764000086613852565b6004546001600160801b0316919088600161230f565b600480546001600160801b0319166001600160801b0392909216919091179055610fdc856116d6565b60018054600090610ff79084906001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611024846116d6565b60018054601090611046908490600160801b90046001600160801b0316613869565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611073846116d6565b61107d9082613812565b600280546001600160801b03808416600160801b029116179055905060006110a4836123b7565b90506110c2816110b38761198c565b6110bd9084613889565b611d95565b6110cb846123fb565b6110d7576110d7612276565b60006110e28561245b565b90508061110257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111355760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611172908490613707565b90915550506000838152600e602052604081208054839290611195908490613707565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106e4670de0b6b3a7640000612468565b60008060008061126861120c611695565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006124f4565b9250866112758488612515565b111561128357611283612276565b60008061129161074e611695565b92506112a789670de0b6b3a7640000858b61252a565b509193509091506112ba9050818361376e565b6112c4908661376e565b94506113108861130a8b6112d8858a61376e565b8b6112e38e82612638565b8e7f000000000000000000000000000000000000000000000000000000000000000061264e565b90612515565b955092505093509350935093565b60006113306040830160208401613751565b1561133c575082610c79565b6113468484612673565b9050610c79565b6001546001600160801b03168381101561136957611369612276565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906113a1908390600f0b612688565b10156113af576113af612276565b6003546113f990610f0590600160801b90046001600160801b03166113dc670de0b6b3a764000086613852565b600454600160801b90046001600160801b0316919089600161230f565b600480546001600160801b03928316600160801b02921691909117905561141f816116d6565b600180546001600160801b0319166001600160801b0392909216919091179055611448856116d6565b6001805460109061146a908490600160801b90046001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611497856116d6565b600380546010906114b9908490600160801b90046001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114e8836123b7565b90506110c2816114f78861198c565b6110bd9084613832565b6000806115396001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886126ae565b6115997f0000000000000000000000000000000000000000000000000000000000000000611568876001613707565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061271b565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162d91906138b1565b925060009150505b935093915050565b6116726001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866126ae565b505050565b600082600019048411830215820261168e57600080fd5b5091020490565b6001546003546000916106e4916001600160801b0390911690600f0b612688565b60006116cd826116c7858888611677565b906127ab565b95945050505050565b60006001600160801b0382111561170057604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161171357826106a5565b50919050565b600554600090819061173c908490600160801b90046001600160801b0316610690565b6005546201000090046001600160701b031692509050818111156118b8576000611766838361376e565b9050611775610f058286612816565b60058054601090611797908490600160801b90046001600160801b0316613869565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117d0858361267390919063ffffffff16565b905060006117fe827f0000000000000000000000000000000000000000000000000000000000000000610690565b905080600b60008282546118129190613707565b909155506118229050818361376e565b915061182d826116d6565b600180546000906118489084906001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118758261282b565b6003805460009061188a908490600f0b6138ca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806118ca8785612673565b915060006118f8837f0000000000000000000000000000000000000000000000000000000000000000610690565b9050611924817f0000000000000000000000000000000000000000000000000000000000000000610690565b9150831561194757611936828261376e565b611940908461376e565b925061195e565b611951828261376e565b61195b9084613707565b92505b8686101561198157611971838789611677565b925061197e828789611677565b91505b509550959350505050565b60006001600160ff1b038211156117005760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b03166119ff610f05826119e2670de0b6b3a764000086613852565b600454600160801b90046001600160801b031691908a600061230f565b600480546001600160801b03928316600160801b029216919091179055611a25866116d6565b611a2f9082613869565b600380546001600160801b03928316600160801b029216919091179055611a55846116d6565b60018054600090611a709084906001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a9d83612855565b60038054600090611ab2908490600f0b6138ca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ae2856116d6565b60018054601090611b04908490600160801b90046001600160801b0316613869565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b4884611b428a888a611677565b90612673565b9050611b55888486611677565b611b5f9082613707565b905086811115611b6f5786810391505b509695505050505050565b60006001600160701b038211156117005760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611be657507f0000000000000000000000000000000000000000000000000000000000000000611be4858361376e565b105b15611bf357611bf3612276565b6003549084900390600f0b611c088482613832565b905083611c148661198c565b138015611c4957507f0000000000000000000000000000000000000000000000000000000000000000611c478383612688565b105b15611c5657611c56612276565b600254600160801b90046001600160801b0316611c98610f0582611c82670de0b6b3a764000088613852565b6004546001600160801b031691908c600061230f565b600480546001600160801b0319166001600160801b0392909216919091179055611cc2888261376e565b9050611ccd816116d6565b600280546001600160801b03928316600160801b029216919091179055611cf3836116d6565b600180546001600160801b0319166001600160801b0392909216919091179055611d1c82612855565b600380546001600160801b0319166001600160801b0392909216919091179055611d45876116d6565b60018054601090611d67908490600160801b90046001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611dbe611da48483612891565b611daf846000612891565b611db99190613832565b612855565b9050600081600f0b1315611e135760028054829190600090611dea9084906001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561167257611e28816138f7565b60028054600090611dea9084906001600160801b0316613869565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611e8e916001600160801b03169061376e565b905080600003611ea25760019150506106a8565b6000611ead856128a0565b905080600003611ec2576001925050506106a8565b600080611ed083858961293c565b9150915080611ee65760009450505050506106a8565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f2292919061399b565b6040805180830381865af4158015611f3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f629190613a11565b91509150611f80611f728261198c565b611f7b90613a35565b612ab0565b925082611f9657600096505050505050506106a8565b611f9f826116d6565b60068054600090611fba9084906001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fe7816116d6565b60068054601090612009908490600160801b90046001600160801b0316613812565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61206687612c46565b6040518263ffffffff1660e01b81526004016120829190613a51565b6040805180830381865af415801561209e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c29190613a60565b91509150806120d8575060009485945092505050565b60008086116120e85760006120f2565b6120f28387610690565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161215d9190613707565b612167919061376e565b9050806000036121805750600096879650945050505050565b600061218c8383612673565b98600198509650505050505050565b60006121bc8787876121b588670de0b6b3a764000061376e565b8787612d80565b979650505050505050565b600061222c6122086121e184670de0b6b3a764000061376e565b61130a670de0b6b3a76400006121f7818a612816565b612201919061376e565b8790612515565b61221a90670de0b6b3a7640000613707565b611b4284670de0b6b3a764000061376e565b949350505050565b60008061226b85612243611695565b61224d9190613707565b600154610dd3908790600160801b90046001600160801b031661376e565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122d98561130a85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006122cf818c612816565b61130a919061376e565b9150612305827f0000000000000000000000000000000000000000000000000000000000000000610690565b9050935093915050565b6000826000036123205750846116cd565b8115612373576123516123338487613707565b61233d8587610690565b612347888a610690565b611b429190613707565b9050600061235f8588611704565b90508082101561236d578091505b506116cd565b828503612382575060006116cd565b6123ad61238f848761376e565b6123998587612515565b6123a3888a610690565b611b42919061376e565b9695505050505050565b60006123df600e60006123cb60028661110b565b81526020019081526020016000205461198c565b6123f1600e60006123cb60018761110b565b6106a89190613832565b60006124277f000000000000000000000000000000000000000000000000000000000000000083612515565b60025461243d91906001600160801b0316613707565b600154612453906001600160801b031684610690565b101592915050565b60006106a8826004611e43565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156124d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a891906138b1565b60006121bc87878761250e88670de0b6b3a764000061376e565b8787612e34565b60006106a58383670de0b6b3a7640000612e57565b600080808061257b87866125748b61130a61254d8c670de0b6b3a764000061376e565b7f000000000000000000000000000000000000000000000000000000000000000090612515565b9190612e57565b93506125a7847f0000000000000000000000000000000000000000000000000000000000000000610690565b915060006125c86125c089670de0b6b3a764000061376e565b8a9088612e57565b90506125f4817f0000000000000000000000000000000000000000000000000000000000000000612515565b9350612620847f0000000000000000000000000000000000000000000000000000000000000000610690565b61262a9084613707565b915050945094509450949050565b600081831161264757816106a5565b5090919050565b600080612666846126608a888a612e57565b90612816565b9050611b55888486612e57565b60006106a583670de0b6b3a764000084611677565b6000806126958484612e7d565b9092509050806126a7576126a7612276565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127159186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612eb9565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261276c8482612f21565b612715576040516001600160a01b038481166024830152600060448301526127a191869182169063095ea7b3906064016126e3565b6127158482612eb9565b6000816000036127c45750670de0b6b3a76400006106a8565b826000036127d4575060006106a8565b60006127df8361198c565b905060006127f46127ef8661198c565b612fc4565b905081810261280b670de0b6b3a764000082613a90565b90506123ad816131ea565b60006106a583670de0b6b3a764000084612e57565b600060016001607f1b038211156117005760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612873575060016001607f1b0382135b156117005760405163a5353be560e01b815260040160405180910390fd5b600081831361264757816106a5565b60025460009081906128bb906001600160801b031684612816565b90506128e77f000000000000000000000000000000000000000000000000000000000000000082613707565b6001546001600160801b03161115611713576001547f0000000000000000000000000000000000000000000000000000000000000000906129329083906001600160801b031661376e565b610c79919061376e565b6129446135df565b60008061295084612c46565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161298b9190613a51565b6040805180830381865af41580156129a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129cb9190613a60565b93509050826129e05750600091506116359050565b6000612a07612a0284610160015185610140015161069090919063ffffffff16565b61198c565b612a27612a0285610120015186610100015161251590919063ffffffff16565b612a319190613832565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b8b9190613abe565b935093509350935080612ba75750600098975050505050505050565b868414612bd857612bb7846116d6565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612c0957612be883612855565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612c3757612c19826116d6565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c4e613631565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612d46911661337f565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612d789290041661337f565b905292915050565b600080612d9088888787876133f5565b9050612daa856116c7612da3898c613707565b8690610690565b9750612db7848985611677565b975087811015612dc957612dc9612276565b878103670de0b6b3a76400008110612dfe57612df7612df0670de0b6b3a764000088612816565b82906127ab565b9050612e16565b612e13612df0670de0b6b3a764000088612673565b90505b80881015612e2657612e26612276565b909603979650505050505050565b600080612e45888888888888613424565b909250905080611b6f57611b6f612276565b6000826000190484118302158202612e6e57600080fd5b50910281810615159190040190565b600080600083612e8c8661198c565b612e969190613832565b90506000811215612eae576000809250925050610689565b946001945092505050565b6000612ece6001600160a01b038416836134e7565b90508051600014158015612ef3575080806020019051810190612ef19190613af4565b155b1561167257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b031684604051612f3e9190613b11565b6000604051808303816000865af19150503d8060008114612f7b576040519150601f19603f3d011682016040523d82523d6000602084013e612f80565b606091505b5091509150818015612faa575080511580612faa575080806020019051810190612faa9190613af4565b80156116cd5750505050506001600160a01b03163b151590565b6000808213612fe65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130699084901c61198c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361320557506000919050565b680755bf798b4a1bf1e5821261322e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906123ad74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61198c565b600080670de0b6b3a76400006133936106ae565b61339d9190613852565b90508083116133ad5760006133b7565b6133b7818461376e565b9150610c796133ee670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613852565b8390612673565b600061340185856127ab565b61341a613412866116c7868b612515565b859085612e57565b6123ad9190613707565b600080600061343689898888886133f5565b9050613446866116c7898b613707565b97508781101561345d5760008092509250506134dc565b87810361346b818688612e57565b9050670de0b6b3a7640000811061349857613491612df0670de0b6b3a764000089612816565b90506134b0565b6134ad612df0670de0b6b3a764000089612673565b90505b6134ba8186612816565b9050808a10156134d2576000809350935050506134dc565b8903925060019150505b965096945050505050565b60606106a58383600084600080856001600160a01b0316848660405161350d9190613b11565b60006040518083038185875af1925050503d806000811461354a576040519150601f19603f3d011682016040523d82523d6000602084013e61354f565b606091505b50915091506123ad86838360608261356f5761356a826135b6565b610c79565b815115801561358657506001600160a01b0384163b155b156135af57604051639996b31560e01b81526001600160a01b0385166004820152602401612f18565b5080610c79565b8051156135c65780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135f3613631565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156136a857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136d457600080fd5b8501606081880312156136e657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106a8576106a86136f1565b60006020828403121561372c57600080fd5b81356001600160a01b0381168114610c7957600080fd5b80151581146105b457600080fd5b60006020828403121561376357600080fd5b8135610c7981613743565b818103818111156106a8576106a86136f1565b6000808335601e1984360301811261379857600080fd5b83018035915067ffffffffffffffff8211156137b357600080fd5b60200191503681900382131561068957600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826137ed576137ed6137c8565b500690565b6001600160701b038181168382160190808211156126a7576126a76136f1565b6001600160801b038181168382160190808211156126a7576126a76136f1565b81810360008312801583831316838312821617156126a7576126a76136f1565b80820281158282048414176106a8576106a86136f1565b6001600160801b038281168282160390808211156126a7576126a76136f1565b80820182811260008312801582168215821617156138a9576138a96136f1565b505092915050565b6000602082840312156138c357600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106a8576106a86136f1565b600081600f0b60016001607f1b03198103613914576139146136f1565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139af82855161391d565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a2457600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a4a57613a4a6136f1565b5060000390565b61018081016106a8828461391d565b60008060408385031215613a7357600080fd5b825191506020830151613a8581613743565b809150509250929050565b600082613a9f57613a9f6137c8565b600160ff1b821460001984141615613ab957613ab96136f1565b500590565b60008060008060808587031215613ad457600080fd5b84519350602085015192506040850151915060608501516136e681613743565b600060208284031215613b0657600080fd5b8151610c7981613743565b6000825160005b81811015613b325760208186018101518583015201613b18565b50600092019182525091905056fea26469706673582212207ec0335567630fe7013f22bfd8addf27f95f1b3387b9cfb2f7cd6303784595de64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
