export const RETHTarget2 = {
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
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003e6538038062003e658339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516139df6200048660003960005050600050506000505060008181610154015281816103790152612be701526000818161143501528181611b5d01528181611bc0015281816123a4015281816127c70152818161280301528181612a000152612bc10152600081816107d501528181610d3b01528181610e470152818161130d0152612b9b0152600061177c0152600081816118a2015281816122830152818161253a01526125b3015260008181610a5801528181610d9a015281816113af015281816118760152612587015260008181610d790152818161223f01526125060152600081816107f601528181610d1901528181610e68015281816112eb0152612c0d0152600081816102300152818161040f01528181610990015261323301526000818161072701528181610828015281816108af015281816109100152610948015260008181603d015281816115ec01526124380152600050506139df6000f3fe60806040526004361061002d5760003560e01c8063cba2e58d14610082578063dbbe8070146100ae57600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b6100956100903660046134fb565b6100c1565b6040805192835260208301919091520160405180910390f35b6100956100bc3660046134fb565b6100de565b6000806100d0868686866100ed565b915091505b94509492505050565b6000806100d086868686610332565b6000806100f86105a5565b600554610100900460ff1615610121576040516321081abf60e01b815260040160405180910390fd5b6101296105cf565b610132836105f0565b60008061013f8886610629565b909250905060006101508383610702565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101935760405163211ddda360e11b815260040160405180910390fd5b868210156101b4576040516342af972b60e01b815260040160405180910390fd5b60006101be610720565b90506101cc8184600461075b565b5060008060006101dc8787610cf2565b919a5091945090925090508b8810156102085760405163c972651760e01b815260040160405180910390fd5b81600b600082825461021a9190613570565b9091555061022b9050844283610ea5565b6102557f000000000000000000000000000000000000000000000000000000000000000085613570565b98506102638389888c610fe3565b600061027060018b61117d565b90506102898161028360208e018e613583565b8b6111b2565b8d8a8a898e8561029c6020830183613583565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866102d289878761125a565b6102dd8a8888611289565b6102ed60408801602089016135ba565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100d56001600055565b60008061033d6105a5565b600554610100900460ff1615610366576040516321081abf60e01b815260040160405180910390fd5b61036e6105cf565b610377836105f0565b7f00000000000000000000000000000000000000000000000000000000000000008610156103b85760405163211ddda360e11b815260040160405180910390fd5b60006103c26112b1565b9050848110156103e5576040516342af972b60e01b815260040160405180910390fd5b60006103ef610720565b905060006104066103fe610720565b84600461075b565b905060006104347f000000000000000000000000000000000000000000000000000000000000000084613570565b90506000806000806104478e89886112c4565b600b805494985092965090945092508391600090610466908490613570565b909155506104779050874283610ea5565b50600061048584898d6113e7565b9050808d10156104a85760405163c972651760e01b815260040160405180910390fd5b6104b2818c610629565b508e90506104c281858b8961140f565b60006104cf60028861117d565b90508c6104e9826104e36020840184613583565b856111b2565b858b86846104fa6020860186613583565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8d6105318c888b611289565b61054160408b0160208c016135ba565b6105558961054f8a8d6135d7565b90610702565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100d56001600055565b6002600054036105c857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156105ee57604051631574f9f360e01b815260040160405180910390fd5b565b60006105ff6020830183613583565b6001600160a01b0316036106265760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061063d60408501602086016135ba565b15610662576106588561065360408701876135ea565b6115c3565b909350905061067e565b503461067a8561067560408701876135ea565b6115df565b8492505b6106866112b1565b915080156106f957604051600090339083908381818185875af1925050503d80600081146106d0576040519150601f19603f3d011682016040523d82523d6000602084013e6106d5565b606091505b50509050806106f7576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006107178383670de0b6b3a7640000611619565b90505b92915050565b600061074c7f000000000000000000000000000000000000000000000000000000000000000042613647565b61075690426135d7565b905090565b600083815260076020526040812060018101546001600160801b031615158061078357504285115b1561079c57600101546001600160801b03169050610ceb565b60008060006107a9610720565b90508088036108215786925061081a6107c0611637565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611658565b91506108dd565b600061084d7f00000000000000000000000000000000000000000000000000000000000000008a613570565b90505b818103610868578793506108656107c0611637565b92505b6000818152600760205260409020600101546001600160801b0316935083156108aa576000818152600760205260409020546001600160801b031692506108db565b6108d47f000000000000000000000000000000000000000000000000000000000000000082613570565b9050610850565b505b6108e683611678565b6001850180546001600160801b0319166001600160801b039290921691909117905561093c6109357f00000000000000000000000000000000000000000000000000000000000000008a6135d7565b8984610ea5565b61097a8861097461096d7f000000000000000000000000000000000000000000000000000000000000000083613570565b42906116a6565b84610ea5565b610983876116bb565b50600090506007816109b57f00000000000000000000000000000000000000000000000000000000000000008c6135d7565b815260208101919091526040016000908120600101546001600160801b031691506109e160028b61117d565b6000818152600e60205260408120549192508b8b8315610b275760019250600080610a1086898d86600061185f565b9150915080600b6000828254610a269190613570565b90915550610a42905086600084610a3c8161192e565b88611958565b610a4c8183613570565b9150610a7c86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611ad2565b9150610a90610a8b8385610702565b611b1c565b60058054600290610ab19084906201000090046001600160701b031661365b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ade82611678565b60058054601090610b00908490600160801b90046001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b3460018461117d565b6000818152600e60205260409020549091508015610c435760019450600080610b61838b8f88600161185f565b9150915080600b6000828254610b779190613570565b90915550610b93905083600084610b8d8161192e565b8a611b46565b610b9d81836135d7565b9150610bac610a8b8387610702565b60058054600290610bcd9084906201000090046001600160701b031661365b565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bfa82611678565b60058054601090610c1c908490600160801b90046001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c7b57610c6f610c558761192e565b610c5e8361192e565b610c68919061369b565b6000611d37565b610c79838f611de5565b505b6000610c8684611fdf565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d5f610d03611637565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061213d565b9250610d6c6107c0611637565b9050610dc38684610dbe847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612169565b6121d6565b15610dd057610dd0612218565b600080610dde888489612231565b9092509050610ded82866135d7565b9450610dfa818489611619565b9350610e0684896135d7565b9550670de0b6b3a7640000610e8c87610e1d611637565b610e279190613570565b600154610e45908990600160801b90046001600160801b03166135d7565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611658565b1115610e9a57610e9a612218565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610ed15750505050565b6000848152600760205260408120546001600160801b031690819003610f2b57610efa83611678565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610fa9565b610f7c610f77670de0b6b3a7640000610f4488866135d7565b610f4e91906136bb565b85670de0b6b3a7640000610f62878a6135d7565b610f6c91906136bb565b8592919060016122b1565b611678565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fb284611678565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316611025610f778261100f670de0b6b3a7640000866136bb565b6004546001600160801b031691908860016122b1565b600480546001600160801b0319166001600160801b039290921691909117905561104e85611678565b600180546000906110699084906001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109684611678565b600180546010906110b8908490600160801b90046001600160801b03166136d2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110e584611678565b6110ef908261367b565b600280546001600160801b03808416600160801b0291161790559050600061111683612359565b9050611134816111258761192e565b61112f90846136f2565b611d37565b61113d8461239d565b61114957611149612218565b6000611154856123fd565b90508061117457604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111a75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111e4908490613570565b90915550506000838152600e602052604081208054839290611207908490613570565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061126c60408301602084016135ba565b15611278575082610ceb565b6112828484610702565b9050610ceb565b600061129b60408301602084016135ba565b156112aa57611282848461240a565b5082610ceb565b6000610756670de0b6b3a764000061241f565b6000806000806113316112d5611637565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006124ab565b92508661133e84886124cc565b111561134c5761134c612218565b60008061135a6107c0611637565b925061137089670de0b6b3a7640000858b6124e1565b50919350909150611383905081836135d7565b61138d90866135d7565b94506113d9886113d38b6113a1858a6135d7565b8b6113ac8e826125ef565b8e7f0000000000000000000000000000000000000000000000000000000000000000612605565b906124cc565b955092505093509350935093565b60006113f960408301602084016135ba565b15611405575082610ceb565b611282848461240a565b6001546001600160801b03168381101561142b5761142b612218565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090611463908390600f0b61262a565b101561147157611471612218565b6003546114bb90610f7790600160801b90046001600160801b031661149e670de0b6b3a7640000866136bb565b600454600160801b90046001600160801b031691908960016122b1565b600480546001600160801b03928316600160801b0292169190911790556114e181611678565b600180546001600160801b0319166001600160801b039290921691909117905561150a85611678565b6001805460109061152c908490600160801b90046001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061155985611678565b6003805460109061157b908490600160801b90046001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115aa83612359565b9050611134816115b98861192e565b61112f908461369b565b60008060405163350b944160e11b815260040160405180910390fd5b6116146001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612650565b505050565b600082600019048411830215820261163057600080fd5b5091020490565b600154600354600091610756916001600160801b0390911690600f0b61262a565b600061166f82611669858888611619565b906126b0565b95945050505050565b60006001600160801b038211156116a257604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116116b55782610717565b50919050565b60055460009081906116de908490600160801b90046001600160801b0316610702565b6005546201000090046001600160701b0316925090508181111561185a57600061170883836135d7565b9050611717610f77828661271b565b60058054601090611739908490600160801b90046001600160801b03166136d2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611772858361240a90919063ffffffff16565b905060006117a0827f0000000000000000000000000000000000000000000000000000000000000000610702565b905080600b60008282546117b49190613570565b909155506117c4905081836135d7565b91506117cf82611678565b600180546000906117ea9084906001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061181782612730565b6003805460009061182c908490600f0b61371a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061186c878561240a565b9150600061189a837f0000000000000000000000000000000000000000000000000000000000000000610702565b90506118c6817f0000000000000000000000000000000000000000000000000000000000000000610702565b915083156118e9576118d882826135d7565b6118e290846135d7565b9250611900565b6118f382826135d7565b6118fd9084613570565b92505b8686101561192357611913838789611619565b9250611920828789611619565b91505b509550959350505050565b60006001600160ff1b038211156116a25760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b03166119a1610f7782611984670de0b6b3a7640000866136bb565b600454600160801b90046001600160801b031691908a60006122b1565b600480546001600160801b03928316600160801b0292169190911790556119c786611678565b6119d190826136d2565b600380546001600160801b03928316600160801b0292169190911790556119f784611678565b60018054600090611a129084906001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a3f8361275a565b60038054600090611a54908490600f0b61371a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a8485611678565b60018054601090611aa6908490600160801b90046001600160801b03166136d2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611aea84611ae48a888a611619565b9061240a565b9050611af7888486611619565b611b019082613570565b905086811115611b115786810391505b509695505050505050565b60006001600160701b038211156116a25760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b8857507f0000000000000000000000000000000000000000000000000000000000000000611b8685836135d7565b105b15611b9557611b95612218565b6003549084900390600f0b611baa848261369b565b905083611bb68661192e565b138015611beb57507f0000000000000000000000000000000000000000000000000000000000000000611be9838361262a565b105b15611bf857611bf8612218565b600254600160801b90046001600160801b0316611c3a610f7782611c24670de0b6b3a7640000886136bb565b6004546001600160801b031691908c60006122b1565b600480546001600160801b0319166001600160801b0392909216919091179055611c6488826135d7565b9050611c6f81611678565b600280546001600160801b03928316600160801b029216919091179055611c9583611678565b600180546001600160801b0319166001600160801b0392909216919091179055611cbe8261275a565b600380546001600160801b0319166001600160801b0392909216919091179055611ce787611678565b60018054601090611d09908490600160801b90046001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611d60611d468483612796565b611d51846000612796565b611d5b919061369b565b61275a565b9050600081600f0b1315611db55760028054829190600090611d8c9084906001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561161457611dca81613747565b60028054600090611d8c9084906001600160801b03166136d2565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611e30916001600160801b0316906135d7565b905080600003611e4457600191505061071a565b6000611e4f856127a5565b905080600003611e645760019250505061071a565b600080611e72838589612841565b9150915080611e8857600094505050505061071a565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611ec49291906137eb565b6040805180830381865af4158015611ee0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f049190613861565b91509150611f22611f148261192e565b611f1d90613885565b6129bc565b925082611f38576000965050505050505061071a565b611f4182611678565b60068054600090611f5c9084906001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f8981611678565b60068054601090611fab908490600160801b90046001600160801b031661367b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61200887612b52565b6040518263ffffffff1660e01b815260040161202491906138a1565b6040805180830381865af4158015612040573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061206491906138b0565b915091508061207a575060009485945092505050565b600080861161208a576000612094565b6120948387610702565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120ff9190613570565b61210991906135d7565b9050806000036121225750600096879650945050505050565b600061212e838361240a565b98600198509650505050505050565b600061215e87878761215788670de0b6b3a76400006135d7565b8787612c8c565b979650505050505050565b60006121ce6121aa61218384670de0b6b3a76400006135d7565b6113d3670de0b6b3a7640000612199818a61271b565b6121a391906135d7565b87906124cc565b6121bc90670de0b6b3a7640000613570565b611ae484670de0b6b3a76400006135d7565b949350505050565b60008061220d856121e5611637565b6121ef9190613570565b600154610e45908790600160801b90046001600160801b03166135d7565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061227b856113d385817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612271818c61271b565b6113d391906135d7565b91506122a7827f0000000000000000000000000000000000000000000000000000000000000000610702565b9050935093915050565b6000826000036122c257508461166f565b8115612315576122f36122d58487613570565b6122df8587610702565b6122e9888a610702565b611ae49190613570565b9050600061230185886116a6565b90508082101561230f578091505b5061166f565b8285036123245750600061166f565b61234f61233184876135d7565b61233b85876124cc565b612345888a610702565b611ae491906135d7565b9695505050505050565b6000612381600e600061236d60028661117d565b81526020019081526020016000205461192e565b612393600e600061236d60018761117d565b61071a919061369b565b60006123c97f0000000000000000000000000000000000000000000000000000000000000000836124cc565b6002546123df91906001600160801b0316613570565b6001546123f5906001600160801b031684610702565b101592915050565b600061071a826004611de5565b600061071783670de0b6b3a764000084611619565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa158015612487573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071a91906138e0565b600061215e8787876124c588670de0b6b3a76400006135d7565b8787612d40565b60006107178383670de0b6b3a7640000612d63565b6000808080612532878661252b8b6113d36125048c670de0b6b3a76400006135d7565b7f0000000000000000000000000000000000000000000000000000000000000000906124cc565b9190612d63565b935061255e847f0000000000000000000000000000000000000000000000000000000000000000610702565b9150600061257f61257789670de0b6b3a76400006135d7565b8a9088612d63565b90506125ab817f00000000000000000000000000000000000000000000000000000000000000006124cc565b93506125d7847f0000000000000000000000000000000000000000000000000000000000000000610702565b6125e19084613570565b915050945094509450949050565b60008183116125fe5781610717565b5090919050565b60008061261d846126178a888a612d63565b9061271b565b9050611af7888486612d63565b6000806126378484612d89565b90925090508061264957612649612218565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526126aa908590612dc5565b50505050565b6000816000036126c95750670de0b6b3a764000061071a565b826000036126d95750600061071a565b60006126e48361192e565b905060006126f96126f48661192e565b612e2d565b9050818102612710670de0b6b3a7640000826138f9565b905061234f81613053565b600061071783670de0b6b3a764000084612d63565b600060016001607f1b038211156116a25760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612778575060016001607f1b0382135b156116a25760405163a5353be560e01b815260040160405180910390fd5b60008183136125fe5781610717565b60025460009081906127c0906001600160801b03168461271b565b90506127ec7f000000000000000000000000000000000000000000000000000000000000000082613570565b6001546001600160801b031611156116b5576001547f0000000000000000000000000000000000000000000000000000000000000000906128379083906001600160801b03166135d7565b610ceb91906135d7565b612849613448565b60008061285584612b52565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161289091906138a1565b6040805180830381865af41580156128ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128d091906138b0565b93509050826128e55750600091506129b49050565b600061290c61290784610160015185610140015161070290919063ffffffff16565b61192e565b61292c6129078561012001518661010001516124cc90919063ffffffff16565b612936919061369b565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a979190613927565b935093509350935080612ab35750600098975050505050505050565b868414612ae457612ac384611678565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612b1557612af48361275a565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612b4357612b2582611678565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b5a61349a565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612c5291166131e8565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612c84929004166131e8565b905292915050565b600080612c9c888887878761325e565b9050612cb685611669612caf898c613570565b8690610702565b9750612cc3848985611619565b975087811015612cd557612cd5612218565b878103670de0b6b3a76400008110612d0a57612d03612cfc670de0b6b3a76400008861271b565b82906126b0565b9050612d22565b612d1f612cfc670de0b6b3a76400008861240a565b90505b80881015612d3257612d32612218565b909603979650505050505050565b600080612d5188888888888861328d565b909250905080611b1157611b11612218565b6000826000190484118302158202612d7a57600080fd5b50910281810615159190040190565b600080600083612d988661192e565b612da2919061369b565b90506000811215612dba5760008092509250506106fb565b946001945092505050565b6000612dda6001600160a01b03841683613350565b90508051600014158015612dff575080806020019051810190612dfd919061395d565b155b1561161457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612e4f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612ed29084901c61192e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361306e57506000919050565b680755bf798b4a1bf1e58212613097576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061234f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61192e565b600080670de0b6b3a76400006131fc610720565b61320691906136bb565b9050808311613216576000613220565b61322081846135d7565b9150610ceb613257670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136bb565b839061240a565b600061326a85856126b0565b61328361327b86611669868b6124cc565b859085612d63565b61234f9190613570565b600080600061329f898988888861325e565b90506132af86611669898b613570565b9750878110156132c6576000809250925050613345565b8781036132d4818688612d63565b9050670de0b6b3a76400008110613301576132fa612cfc670de0b6b3a76400008961271b565b9050613319565b613316612cfc670de0b6b3a76400008961240a565b90505b613323818661271b565b9050808a101561333b57600080935093505050613345565b8903925060019150505b965096945050505050565b60606107178383600084600080856001600160a01b03168486604051613376919061397a565b60006040518083038185875af1925050503d80600081146133b3576040519150601f19603f3d011682016040523d82523d6000602084013e6133b8565b606091505b509150915061234f8683836060826133d8576133d38261341f565b610ceb565b81511580156133ef57506001600160a01b0384163b155b1561341857604051639996b31560e01b81526001600160a01b0385166004820152602401612e24565b5080610ceb565b80511561342f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061345c61349a565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561351157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561353d57600080fd5b85016060818803121561354f57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561071a5761071a61355a565b60006020828403121561359557600080fd5b81356001600160a01b0381168114610ceb57600080fd5b801515811461062657600080fd5b6000602082840312156135cc57600080fd5b8135610ceb816135ac565b8181038181111561071a5761071a61355a565b6000808335601e1984360301811261360157600080fd5b83018035915067ffffffffffffffff82111561361c57600080fd5b6020019150368190038213156106fb57600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261365657613656613631565b500690565b6001600160701b038181168382160190808211156126495761264961355a565b6001600160801b038181168382160190808211156126495761264961355a565b81810360008312801583831316838312821617156126495761264961355a565b808202811582820484141761071a5761071a61355a565b6001600160801b038281168282160390808211156126495761264961355a565b80820182811260008312801582168215821617156137125761371261355a565b505092915050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561071a5761071a61355a565b600081600f0b60016001607f1b031981036137645761376461355a565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506137ff82855161376d565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561387457600080fd5b505080516020909101519092909150565b6000600160ff1b820161389a5761389a61355a565b5060000390565b610180810161071a828461376d565b600080604083850312156138c357600080fd5b8251915060208301516138d5816135ac565b809150509250929050565b6000602082840312156138f257600080fd5b5051919050565b60008261390857613908613631565b600160ff1b8214600019841416156139225761392261355a565b500590565b6000806000806080858703121561393d57600080fd5b845193506020850151925060408501519150606085015161354f816135ac565b60006020828403121561396f57600080fd5b8151610ceb816135ac565b6000825160005b8181101561399b5760208186018101518583015201613981565b50600092019182525091905056fea26469706673582212205aa1604c01a595cefab07dca10d170f31d9e324ebf29f0d09bcffb805822be2c64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
