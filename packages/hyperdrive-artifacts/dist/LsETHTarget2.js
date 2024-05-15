export const LsETHTarget2 = {
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
            "inputs": [],
            "name": "UnsupportedToken",
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003d9d38038062003d9d8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161391d6200048060003960005050600050506000505060008181610100015281816103110152612b2501526000818161137301528181611a9b01528181611afe015281816122e201528181612705015281816127410152818161293e0152612aff01526000818161076301528181610cc901528181610dd5015281816112440152612ad9015260006116ba0152600081816117e0015281816121c10152818161246301526124dc0152600081816109e601528181610d28015281816112e6015281816117b401526124b0015260008181610d070152818161217d015261242f01526000818161078401528181610ca701528181610df6015281816112220152612b4b0152600081816101dc015281816103a70152818161091e01526131710152600081816106b5015281816107b60152818161083d0152818161089e01526108d601526000818161152a015261236101526000505061391d6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613439565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613439565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102ca565b6000806100a4610533565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d561055d565b6100de8361057e565b6000806100eb88866105b7565b909250905060006100fc8383610690565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106ae565b9050610178818460046106e9565b5060008060006101888787610c80565b919a5091945090925090508b8810156101b45760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101c691906134ae565b909155506101d79050844283610e33565b6102017f0000000000000000000000000000000000000000000000000000000000000000856134ae565b985061020f8389888c610f71565b600061021c60018b61110b565b90506102358161022f60208e018e6134c1565b8b611140565b8d8a8a898e8561024860208301836134c1565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c86888661028560408801602089016134f8565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102d5610533565b600554610100900460ff16156102fe576040516321081abf60e01b815260040160405180910390fd5b61030661055d565b61030f8361057e565b7f00000000000000000000000000000000000000000000000000000000000000008610156103505760405163211ddda360e11b815260040160405180910390fd5b600061035a6111e8565b90508481101561037d576040516342af972b60e01b815260040160405180910390fd5b60006103876106ae565b9050600061039e6103966106ae565b8460046106e9565b905060006103cc7f0000000000000000000000000000000000000000000000000000000000000000846134ae565b90506000806000806103df8e89886111fb565b600b8054949850929650909450925083916000906103fe9084906134ae565b9091555061040f9050874283610e33565b50600061041d84898d61131e565b9050808d10156104405760405163c972651760e01b815260040160405180910390fd5b61044a818c6105b7565b508e905061045a81858b8961134d565b600061046760028861110b565b90508c6104818261047b60208401846134c1565b85611140565b858b868461049260208601866134c1565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8a866104cf60408b0160208c016134f8565b6104e3896104dd8a8d613515565b90610690565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361055657604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057c57604051631574f9f360e01b815260040160405180910390fd5b565b600061058d60208301836134c1565b6001600160a01b0316036105b45760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105cb60408501602086016134f8565b156105f0576105e6856105e16040870187613528565b611501565b909350905061060c565b5034610608856106036040870187613528565b61151d565b8492505b6106146111e8565b9150801561068757604051600090339083908381818185875af1925050503d806000811461065e576040519150601f19603f3d011682016040523d82523d6000602084013e610663565b606091505b5050905080610685576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106a58383670de0b6b3a7640000611557565b90505b92915050565b60006106da7f000000000000000000000000000000000000000000000000000000000000000042613585565b6106e49042613515565b905090565b600083815260076020526040812060018101546001600160801b031615158061071157504285115b1561072a57600101546001600160801b03169050610c79565b60008060006107376106ae565b90508088036107af578692506107a861074e611575565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611596565b915061086b565b60006107db7f00000000000000000000000000000000000000000000000000000000000000008a6134ae565b90505b8181036107f6578793506107f361074e611575565b92505b6000818152600760205260409020600101546001600160801b031693508315610838576000818152600760205260409020546001600160801b03169250610869565b6108627f0000000000000000000000000000000000000000000000000000000000000000826134ae565b90506107de565b505b610874836115b6565b6001850180546001600160801b0319166001600160801b03929092169190911790556108ca6108c37f00000000000000000000000000000000000000000000000000000000000000008a613515565b8984610e33565b610908886109026108fb7f0000000000000000000000000000000000000000000000000000000000000000836134ae565b42906115e4565b84610e33565b610911876115f9565b50600090506007816109437f00000000000000000000000000000000000000000000000000000000000000008c613515565b815260208101919091526040016000908120600101546001600160801b0316915061096f60028b61110b565b6000818152600e60205260408120549192508b8b8315610ab5576001925060008061099e86898d86600061179d565b9150915080600b60008282546109b491906134ae565b909155506109d09050866000846109ca8161186c565b88611896565b6109da81836134ae565b9150610a0a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611a10565b9150610a1e610a198385610690565b611a5a565b60058054600290610a3f9084906201000090046001600160701b0316613599565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a6c826115b6565b60058054601090610a8e908490600160801b90046001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610ac260018461110b565b6000818152600e60205260409020549091508015610bd15760019450600080610aef838b8f88600161179d565b9150915080600b6000828254610b0591906134ae565b90915550610b21905083600084610b1b8161186c565b8a611a84565b610b2b8183613515565b9150610b3a610a198387610690565b60058054600290610b5b9084906201000090046001600160701b0316613599565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b88826115b6565b60058054601090610baa908490600160801b90046001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c0957610bfd610be38761186c565b610bec8361186c565b610bf691906135d9565b6000611c75565b610c07838f611d23565b505b6000610c1484611f1d565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610ced610c91611575565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061207b565b9250610cfa61074e611575565b9050610d518684610d4c847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006120a7565b612114565b15610d5e57610d5e612156565b600080610d6c88848961216f565b9092509050610d7b8286613515565b9450610d88818489611557565b9350610d948489613515565b9550670de0b6b3a7640000610e1a87610dab611575565b610db591906134ae565b600154610dd3908990600160801b90046001600160801b0316613515565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611596565b1115610e2857610e28612156565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e5f5750505050565b6000848152600760205260408120546001600160801b031690819003610eb957610e88836115b6565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f37565b610f0a610f05670de0b6b3a7640000610ed28886613515565b610edc91906135f9565b85670de0b6b3a7640000610ef0878a613515565b610efa91906135f9565b8592919060016121ef565b6115b6565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f40846115b6565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610fb3610f0582610f9d670de0b6b3a7640000866135f9565b6004546001600160801b031691908860016121ef565b600480546001600160801b0319166001600160801b0392909216919091179055610fdc856115b6565b60018054600090610ff79084906001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611024846115b6565b60018054601090611046908490600160801b90046001600160801b0316613610565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611073846115b6565b61107d90826135b9565b600280546001600160801b03808416600160801b029116179055905060006110a483612297565b90506110c2816110b38761186c565b6110bd9084613630565b611c75565b6110cb846122db565b6110d7576110d7612156565b60006110e28561233b565b90508061110257604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111355760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111729084906134ae565b90915550506000838152600e6020526040812080548392906111959084906134ae565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106e4670de0b6b3a7640000612348565b60008060008061126861120c611575565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006123d4565b92508661127584886123f5565b111561128357611283612156565b60008061129161074e611575565b92506112a789670de0b6b3a7640000858b61240a565b509193509091506112ba90508183613515565b6112c49086613515565b94506113108861130a8b6112d8858a613515565b8b6112e38e82612518565b8e7f000000000000000000000000000000000000000000000000000000000000000061252e565b906123f5565b955092505093509350935093565b600061133060408301602084016134f8565b1561133c575082610c79565b6113468484612553565b9050610c79565b6001546001600160801b03168381101561136957611369612156565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906113a1908390600f0b612568565b10156113af576113af612156565b6003546113f990610f0590600160801b90046001600160801b03166113dc670de0b6b3a7640000866135f9565b600454600160801b90046001600160801b031691908960016121ef565b600480546001600160801b03928316600160801b02921691909117905561141f816115b6565b600180546001600160801b0319166001600160801b0392909216919091179055611448856115b6565b6001805460109061146a908490600160801b90046001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611497856115b6565b600380546010906114b9908490600160801b90046001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114e883612297565b90506110c2816114f78861186c565b6110bd90846135d9565b60008060405163350b944160e11b815260040160405180910390fd5b6115526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308661258e565b505050565b600082600019048411830215820261156e57600080fd5b5091020490565b6001546003546000916106e4916001600160801b0390911690600f0b612568565b60006115ad826115a7858888611557565b906125ee565b95945050505050565b60006001600160801b038211156115e057604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116115f357826106a5565b50919050565b600554600090819061161c908490600160801b90046001600160801b0316610690565b6005546201000090046001600160701b031692509050818111156117985760006116468383613515565b9050611655610f058286612659565b60058054601090611677908490600160801b90046001600160801b0316613610565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116b0858361255390919063ffffffff16565b905060006116de827f0000000000000000000000000000000000000000000000000000000000000000610690565b905080600b60008282546116f291906134ae565b9091555061170290508183613515565b915061170d826115b6565b600180546000906117289084906001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117558261266e565b6003805460009061176a908490600f0b613658565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117aa8785612553565b915060006117d8837f0000000000000000000000000000000000000000000000000000000000000000610690565b9050611804817f0000000000000000000000000000000000000000000000000000000000000000610690565b91508315611827576118168282613515565b6118209084613515565b925061183e565b6118318282613515565b61183b90846134ae565b92505b8686101561186157611851838789611557565b925061185e828789611557565b91505b509550959350505050565b60006001600160ff1b038211156115e05760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b03166118df610f05826118c2670de0b6b3a7640000866135f9565b600454600160801b90046001600160801b031691908a60006121ef565b600480546001600160801b03928316600160801b029216919091179055611905866115b6565b61190f9082613610565b600380546001600160801b03928316600160801b029216919091179055611935846115b6565b600180546000906119509084906001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061197d83612698565b60038054600090611992908490600f0b613658565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506119c2856115b6565b600180546010906119e4908490600160801b90046001600160801b0316613610565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611a2884611a228a888a611557565b90612553565b9050611a35888486611557565b611a3f90826134ae565b905086811115611a4f5786810391505b509695505050505050565b60006001600160701b038211156115e05760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611ac657507f0000000000000000000000000000000000000000000000000000000000000000611ac48583613515565b105b15611ad357611ad3612156565b6003549084900390600f0b611ae884826135d9565b905083611af48661186c565b138015611b2957507f0000000000000000000000000000000000000000000000000000000000000000611b278383612568565b105b15611b3657611b36612156565b600254600160801b90046001600160801b0316611b78610f0582611b62670de0b6b3a7640000886135f9565b6004546001600160801b031691908c60006121ef565b600480546001600160801b0319166001600160801b0392909216919091179055611ba28882613515565b9050611bad816115b6565b600280546001600160801b03928316600160801b029216919091179055611bd3836115b6565b600180546001600160801b0319166001600160801b0392909216919091179055611bfc82612698565b600380546001600160801b0319166001600160801b0392909216919091179055611c25876115b6565b60018054601090611c47908490600160801b90046001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c9e611c8484836126d4565b611c8f8460006126d4565b611c9991906135d9565b612698565b9050600081600f0b1315611cf35760028054829190600090611cca9084906001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561155257611d0881613685565b60028054600090611cca9084906001600160801b0316613610565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d6e916001600160801b031690613515565b905080600003611d825760019150506106a8565b6000611d8d856126e3565b905080600003611da2576001925050506106a8565b600080611db083858961277f565b9150915080611dc65760009450505050506106a8565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e02929190613729565b6040805180830381865af4158015611e1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e42919061379f565b91509150611e60611e528261186c565b611e5b906137c3565b6128fa565b925082611e7657600096505050505050506106a8565b611e7f826115b6565b60068054600090611e9a9084906001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ec7816115b6565b60068054601090611ee9908490600160801b90046001600160801b03166135b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f4687612a90565b6040518263ffffffff1660e01b8152600401611f6291906137df565b6040805180830381865af4158015611f7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa291906137ee565b9150915080611fb8575060009485945092505050565b6000808611611fc8576000611fd2565b611fd28387610690565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161203d91906134ae565b6120479190613515565b9050806000036120605750600096879650945050505050565b600061206c8383612553565b98600198509650505050505050565b600061209c87878761209588670de0b6b3a7640000613515565b8787612bca565b979650505050505050565b600061210c6120e86120c184670de0b6b3a7640000613515565b61130a670de0b6b3a76400006120d7818a612659565b6120e19190613515565b87906123f5565b6120fa90670de0b6b3a76400006134ae565b611a2284670de0b6b3a7640000613515565b949350505050565b60008061214b85612123611575565b61212d91906134ae565b600154610dd3908790600160801b90046001600160801b0316613515565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806121b98561130a85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006121af818c612659565b61130a9190613515565b91506121e5827f0000000000000000000000000000000000000000000000000000000000000000610690565b9050935093915050565b6000826000036122005750846115ad565b81156122535761223161221384876134ae565b61221d8587610690565b612227888a610690565b611a2291906134ae565b9050600061223f85886115e4565b90508082101561224d578091505b506115ad565b828503612262575060006115ad565b61228d61226f8487613515565b61227985876123f5565b612283888a610690565b611a229190613515565b9695505050505050565b60006122bf600e60006122ab60028661110b565b81526020019081526020016000205461186c565b6122d1600e60006122ab60018761110b565b6106a891906135d9565b60006123077f0000000000000000000000000000000000000000000000000000000000000000836123f5565b60025461231d91906001600160801b03166134ae565b600154612333906001600160801b031684610690565b101592915050565b60006106a8826004611d23565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f0290602401602060405180830381865afa1580156123b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a8919061381e565b600061209c8787876123ee88670de0b6b3a7640000613515565b8787612c7e565b60006106a58383670de0b6b3a7640000612ca1565b600080808061245b87866124548b61130a61242d8c670de0b6b3a7640000613515565b7f0000000000000000000000000000000000000000000000000000000000000000906123f5565b9190612ca1565b9350612487847f0000000000000000000000000000000000000000000000000000000000000000610690565b915060006124a86124a089670de0b6b3a7640000613515565b8a9088612ca1565b90506124d4817f00000000000000000000000000000000000000000000000000000000000000006123f5565b9350612500847f0000000000000000000000000000000000000000000000000000000000000000610690565b61250a90846134ae565b915050945094509450949050565b600081831161252757816106a5565b5090919050565b600080612546846125408a888a612ca1565b90612659565b9050611a35888486612ca1565b60006106a583670de0b6b3a764000084611557565b6000806125758484612cc7565b90925090508061258757612587612156565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526125e8908590612d03565b50505050565b6000816000036126075750670de0b6b3a76400006106a8565b82600003612617575060006106a8565b60006126228361186c565b905060006126376126328661186c565b612d6b565b905081810261264e670de0b6b3a764000082613837565b905061228d81612f91565b60006106a583670de0b6b3a764000084612ca1565b600060016001607f1b038211156115e05760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806126b6575060016001607f1b0382135b156115e05760405163a5353be560e01b815260040160405180910390fd5b600081831361252757816106a5565b60025460009081906126fe906001600160801b031684612659565b905061272a7f0000000000000000000000000000000000000000000000000000000000000000826134ae565b6001546001600160801b031611156115f3576001547f0000000000000000000000000000000000000000000000000000000000000000906127759083906001600160801b0316613515565b610c799190613515565b612787613386565b60008061279384612a90565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016127ce91906137df565b6040805180830381865af41580156127ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061280e91906137ee565b93509050826128235750600091506128f29050565b600061284a61284584610160015185610140015161069090919063ffffffff16565b61186c565b61286a6128458561012001518661010001516123f590919063ffffffff16565b61287491906135d9565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156129b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129d59190613865565b9350935093509350806129f15750600098975050505050505050565b868414612a2257612a01846115b6565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612a5357612a3283612698565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612a8157612a63826115b6565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612a986133d8565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612b909116613126565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612bc292900416613126565b905292915050565b600080612bda888887878761319c565b9050612bf4856115a7612bed898c6134ae565b8690610690565b9750612c01848985611557565b975087811015612c1357612c13612156565b878103670de0b6b3a76400008110612c4857612c41612c3a670de0b6b3a764000088612659565b82906125ee565b9050612c60565b612c5d612c3a670de0b6b3a764000088612553565b90505b80881015612c7057612c70612156565b909603979650505050505050565b600080612c8f8888888888886131cb565b909250905080611a4f57611a4f612156565b6000826000190484118302158202612cb857600080fd5b50910281810615159190040190565b600080600083612cd68661186c565b612ce091906135d9565b90506000811215612cf8576000809250925050610689565b946001945092505050565b6000612d186001600160a01b0384168361328e565b90508051600014158015612d3d575080806020019051810190612d3b919061389b565b155b1561155257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612d8d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e109084901c61186c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612fac57506000919050565b680755bf798b4a1bf1e58212612fd5576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061228d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61186c565b600080670de0b6b3a764000061313a6106ae565b61314491906135f9565b905080831161315457600061315e565b61315e8184613515565b9150610c79613195670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006135f9565b8390612553565b60006131a885856125ee565b6131c16131b9866115a7868b6123f5565b859085612ca1565b61228d91906134ae565b60008060006131dd898988888861319c565b90506131ed866115a7898b6134ae565b975087811015613204576000809250925050613283565b878103613212818688612ca1565b9050670de0b6b3a7640000811061323f57613238612c3a670de0b6b3a764000089612659565b9050613257565b613254612c3a670de0b6b3a764000089612553565b90505b6132618186612659565b9050808a101561327957600080935093505050613283565b8903925060019150505b965096945050505050565b60606106a58383600084600080856001600160a01b031684866040516132b491906138b8565b60006040518083038185875af1925050503d80600081146132f1576040519150601f19603f3d011682016040523d82523d6000602084013e6132f6565b606091505b509150915061228d868383606082613316576133118261335d565b610c79565b815115801561332d57506001600160a01b0384163b155b1561335657604051639996b31560e01b81526001600160a01b0385166004820152602401612d62565b5080610c79565b80511561336d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061339a6133d8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561344f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561347b57600080fd5b85016060818803121561348d57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106a8576106a8613498565b6000602082840312156134d357600080fd5b81356001600160a01b0381168114610c7957600080fd5b80151581146105b457600080fd5b60006020828403121561350a57600080fd5b8135610c79816134ea565b818103818111156106a8576106a8613498565b6000808335601e1984360301811261353f57600080fd5b83018035915067ffffffffffffffff82111561355a57600080fd5b60200191503681900382131561068957600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826135945761359461356f565b500690565b6001600160701b0381811683821601908082111561258757612587613498565b6001600160801b0381811683821601908082111561258757612587613498565b818103600083128015838313168383128216171561258757612587613498565b80820281158282048414176106a8576106a8613498565b6001600160801b0382811682821603908082111561258757612587613498565b808201828112600083128015821682158216171561365057613650613498565b505092915050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106a8576106a8613498565b600081600f0b60016001607f1b031981036136a2576136a2613498565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061373d8285516136ab565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156137b257600080fd5b505080516020909101519092909150565b6000600160ff1b82016137d8576137d8613498565b5060000390565b61018081016106a882846136ab565b6000806040838503121561380157600080fd5b825191506020830151613813816134ea565b809150509250929050565b60006020828403121561383057600080fd5b5051919050565b6000826138465761384661356f565b600160ff1b82146000198414161561386057613860613498565b500590565b6000806000806080858703121561387b57600080fd5b845193506020850151925060408501519150606085015161348d816134ea565b6000602082840312156138ad57600080fd5b8151610c79816134ea565b6000825160005b818110156138d957602081860181015185830152016138bf565b50600092019182525091905056fea264697066735822122007346c055f6db29a6cb95f6bff224e2a2ff450ac15786f2252903699fdf88d8e64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
