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
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003df738038062003df78339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516139716200048660003960005050600050506000505060008181610154015281816103650152612b790152600081816113c701528181611aef01528181611b52015281816123360152818161275901528181612795015281816129920152612b530152600081816107b701528181610d1d01528181610e29015281816112980152612b2d0152600061170e01526000818161183401528181612215015281816124b70152612530015260008181610a3a01528181610d7c0152818161133a015281816118080152612504015260008181610d5b015281816121d101526124830152600081816107d801528181610cfb01528181610e4a015281816112760152612b9f015260008181610230015281816103fb0152818161097201526131c50152600081816107090152818161080a01528181610891015281816108f2015261092a015260008181603d0152818161157e01526123b50152600050506139716000f3fe60806040526004361061002d5760003560e01c8063cba2e58d14610082578063dbbe8070146100ae57600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b61009561009036600461348d565b6100c1565b6040805192835260208301919091520160405180910390f35b6100956100bc36600461348d565b6100de565b6000806100d0868686866100ed565b915091505b94509492505050565b6000806100d08686868661031e565b6000806100f8610587565b600554610100900460ff1615610121576040516321081abf60e01b815260040160405180910390fd5b6101296105b1565b610132836105d2565b60008061013f888661060b565b9092509050600061015083836106e4565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101935760405163211ddda360e11b815260040160405180910390fd5b868210156101b4576040516342af972b60e01b815260040160405180910390fd5b60006101be610702565b90506101cc8184600461073d565b5060008060006101dc8787610cd4565b919a5091945090925090508b8810156102085760405163c972651760e01b815260040160405180910390fd5b81600b600082825461021a9190613502565b9091555061022b9050844283610e87565b6102557f000000000000000000000000000000000000000000000000000000000000000085613502565b98506102638389888c610fc5565b600061027060018b61115f565b90506102898161028360208e018e613515565b8b611194565b8d8a8a898e8561029c6020830183613515565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c8688866102d9604088016020890161354c565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100d56001600055565b600080610329610587565b600554610100900460ff1615610352576040516321081abf60e01b815260040160405180910390fd5b61035a6105b1565b610363836105d2565b7f00000000000000000000000000000000000000000000000000000000000000008610156103a45760405163211ddda360e11b815260040160405180910390fd5b60006103ae61123c565b9050848110156103d1576040516342af972b60e01b815260040160405180910390fd5b60006103db610702565b905060006103f26103ea610702565b84600461073d565b905060006104207f000000000000000000000000000000000000000000000000000000000000000084613502565b90506000806000806104338e898861124f565b600b805494985092965090945092508391600090610452908490613502565b909155506104639050874283610e87565b50600061047184898d611372565b9050808d10156104945760405163c972651760e01b815260040160405180910390fd5b61049e818c61060b565b508e90506104ae81858b896113a1565b60006104bb60028861115f565b90508c6104d5826104cf6020840184613515565b85611194565b858b86846104e66020860186613515565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8a8661052360408b0160208c0161354c565b610537896105318a8d613569565b906106e4565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100d56001600055565b6002600054036105aa57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156105d057604051631574f9f360e01b815260040160405180910390fd5b565b60006105e16020830183613515565b6001600160a01b0316036106085760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061061f604085016020860161354c565b156106445761063a85610635604087018761357c565b611555565b9093509050610660565b503461065c85610657604087018761357c565b611571565b8492505b61066861123c565b915080156106db57604051600090339083908381818185875af1925050503d80600081146106b2576040519150601f19603f3d011682016040523d82523d6000602084013e6106b7565b606091505b50509050806106d9576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106f98383670de0b6b3a76400006115ab565b90505b92915050565b600061072e7f0000000000000000000000000000000000000000000000000000000000000000426135d9565b6107389042613569565b905090565b600083815260076020526040812060018101546001600160801b031615158061076557504285115b1561077e57600101546001600160801b03169050610ccd565b600080600061078b610702565b9050808803610803578692506107fc6107a26115c9565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006115ea565b91506108bf565b600061082f7f00000000000000000000000000000000000000000000000000000000000000008a613502565b90505b81810361084a578793506108476107a26115c9565b92505b6000818152600760205260409020600101546001600160801b03169350831561088c576000818152600760205260409020546001600160801b031692506108bd565b6108b67f000000000000000000000000000000000000000000000000000000000000000082613502565b9050610832565b505b6108c88361160a565b6001850180546001600160801b0319166001600160801b039290921691909117905561091e6109177f00000000000000000000000000000000000000000000000000000000000000008a613569565b8984610e87565b61095c8861095661094f7f000000000000000000000000000000000000000000000000000000000000000083613502565b4290611638565b84610e87565b6109658761164d565b50600090506007816109977f00000000000000000000000000000000000000000000000000000000000000008c613569565b815260208101919091526040016000908120600101546001600160801b031691506109c360028b61115f565b6000818152600e60205260408120549192508b8b8315610b0957600192506000806109f286898d8660006117f1565b9150915080600b6000828254610a089190613502565b90915550610a24905086600084610a1e816118c0565b886118ea565b610a2e8183613502565b9150610a5e86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611a64565b9150610a72610a6d83856106e4565b611aae565b60058054600290610a939084906201000090046001600160701b03166135ed565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ac08261160a565b60058054601090610ae2908490600160801b90046001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b1660018461115f565b6000818152600e60205260409020549091508015610c255760019450600080610b43838b8f8860016117f1565b9150915080600b6000828254610b599190613502565b90915550610b75905083600084610b6f816118c0565b8a611ad8565b610b7f8183613569565b9150610b8e610a6d83876106e4565b60058054600290610baf9084906201000090046001600160701b03166135ed565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bdc8261160a565b60058054601090610bfe908490600160801b90046001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c5d57610c51610c37876118c0565b610c40836118c0565b610c4a919061362d565b6000611cc9565b610c5b838f611d77565b505b6000610c6884611f71565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610d41610ce56115c9565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006120cf565b9250610d4e6107a26115c9565b9050610da58684610da0847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006120fb565b612168565b15610db257610db26121aa565b600080610dc08884896121c3565b9092509050610dcf8286613569565b9450610ddc8184896115ab565b9350610de88489613569565b9550670de0b6b3a7640000610e6e87610dff6115c9565b610e099190613502565b600154610e27908990600160801b90046001600160801b0316613569565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006115ea565b1115610e7c57610e7c6121aa565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610eb35750505050565b6000848152600760205260408120546001600160801b031690819003610f0d57610edc8361160a565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f8b565b610f5e610f59670de0b6b3a7640000610f268886613569565b610f30919061364d565b85670de0b6b3a7640000610f44878a613569565b610f4e919061364d565b859291906001612243565b61160a565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f948461160a565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316611007610f5982610ff1670de0b6b3a76400008661364d565b6004546001600160801b03169190886001612243565b600480546001600160801b0319166001600160801b03929092169190911790556110308561160a565b6001805460009061104b9084906001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110788461160a565b6001805460109061109a908490600160801b90046001600160801b0316613664565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110c78461160a565b6110d1908261360d565b600280546001600160801b03808416600160801b029116179055905060006110f8836122eb565b905061111681611107876118c0565b6111119084613684565b611cc9565b61111f8461232f565b61112b5761112b6121aa565b60006111368561238f565b90508061115657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111895760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906111c6908490613502565b90915550506000838152600e6020526040812080548392906111e9908490613502565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610738670de0b6b3a764000061239c565b6000806000806112bc6112606115c9565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612428565b9250866112c98488612449565b11156112d7576112d76121aa565b6000806112e56107a26115c9565b92506112fb89670de0b6b3a7640000858b61245e565b5091935090915061130e90508183613569565b6113189086613569565b94506113648861135e8b61132c858a613569565b8b6113378e8261256c565b8e7f0000000000000000000000000000000000000000000000000000000000000000612582565b90612449565b955092505093509350935093565b6000611384604083016020840161354c565b15611390575082610ccd565b61139a84846125a7565b9050610ccd565b6001546001600160801b0316838110156113bd576113bd6121aa565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906113f5908390600f0b6125bc565b1015611403576114036121aa565b60035461144d90610f5990600160801b90046001600160801b0316611430670de0b6b3a76400008661364d565b600454600160801b90046001600160801b03169190896001612243565b600480546001600160801b03928316600160801b0292169190911790556114738161160a565b600180546001600160801b0319166001600160801b039290921691909117905561149c8561160a565b600180546010906114be908490600160801b90046001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114eb8561160a565b6003805460109061150d908490600160801b90046001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061153c836122eb565b90506111168161154b886118c0565b611111908461362d565b60008060405163350b944160e11b815260040160405180910390fd5b6115a66001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866125e2565b505050565b60008260001904841183021582026115c257600080fd5b5091020490565b600154600354600091610738916001600160801b0390911690600f0b6125bc565b6000611601826115fb8588886115ab565b90612642565b95945050505050565b60006001600160801b0382111561163457604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161164757826106f9565b50919050565b6005546000908190611670908490600160801b90046001600160801b03166106e4565b6005546201000090046001600160701b031692509050818111156117ec57600061169a8383613569565b90506116a9610f5982866126ad565b600580546010906116cb908490600160801b90046001600160801b0316613664565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061170485836125a790919063ffffffff16565b90506000611732827f00000000000000000000000000000000000000000000000000000000000000006106e4565b905080600b60008282546117469190613502565b9091555061175690508183613569565b91506117618261160a565b6001805460009061177c9084906001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117a9826126c2565b600380546000906117be908490600f0b6136ac565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117fe87856125a7565b9150600061182c837f00000000000000000000000000000000000000000000000000000000000000006106e4565b9050611858817f00000000000000000000000000000000000000000000000000000000000000006106e4565b9150831561187b5761186a8282613569565b6118749084613569565b9250611892565b6118858282613569565b61188f9084613502565b92505b868610156118b5576118a58387896115ab565b92506118b28287896115ab565b91505b509550959350505050565b60006001600160ff1b038211156116345760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611933610f5982611916670de0b6b3a76400008661364d565b600454600160801b90046001600160801b031691908a6000612243565b600480546001600160801b03928316600160801b0292169190911790556119598661160a565b6119639082613664565b600380546001600160801b03928316600160801b0292169190911790556119898461160a565b600180546000906119a49084906001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119d1836126ec565b600380546000906119e6908490600f0b6136ac565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611a168561160a565b60018054601090611a38908490600160801b90046001600160801b0316613664565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611a7c84611a768a888a6115ab565b906125a7565b9050611a898884866115ab565b611a939082613502565b905086811115611aa35786810391505b509695505050505050565b60006001600160701b038211156116345760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611b1a57507f0000000000000000000000000000000000000000000000000000000000000000611b188583613569565b105b15611b2757611b276121aa565b6003549084900390600f0b611b3c848261362d565b905083611b48866118c0565b138015611b7d57507f0000000000000000000000000000000000000000000000000000000000000000611b7b83836125bc565b105b15611b8a57611b8a6121aa565b600254600160801b90046001600160801b0316611bcc610f5982611bb6670de0b6b3a76400008861364d565b6004546001600160801b031691908c6000612243565b600480546001600160801b0319166001600160801b0392909216919091179055611bf68882613569565b9050611c018161160a565b600280546001600160801b03928316600160801b029216919091179055611c278361160a565b600180546001600160801b0319166001600160801b0392909216919091179055611c50826126ec565b600380546001600160801b0319166001600160801b0392909216919091179055611c798761160a565b60018054601090611c9b908490600160801b90046001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611cf2611cd88483612728565b611ce3846000612728565b611ced919061362d565b6126ec565b9050600081600f0b1315611d475760028054829190600090611d1e9084906001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156115a657611d5c816136d9565b60028054600090611d1e9084906001600160801b0316613664565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611dc2916001600160801b031690613569565b905080600003611dd65760019150506106fc565b6000611de185612737565b905080600003611df6576001925050506106fc565b600080611e048385896127d3565b9150915080611e1a5760009450505050506106fc565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e5692919061377d565b6040805180830381865af4158015611e72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e9691906137f3565b91509150611eb4611ea6826118c0565b611eaf90613817565b61294e565b925082611eca57600096505050505050506106fc565b611ed38261160a565b60068054600090611eee9084906001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f1b8161160a565b60068054601090611f3d908490600160801b90046001600160801b031661360d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f9a87612ae4565b6040518263ffffffff1660e01b8152600401611fb69190613833565b6040805180830381865af4158015611fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff69190613842565b915091508061200c575060009485945092505050565b600080861161201c576000612026565b61202683876106e4565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120919190613502565b61209b9190613569565b9050806000036120b45750600096879650945050505050565b60006120c083836125a7565b98600198509650505050505050565b60006120f08787876120e988670de0b6b3a7640000613569565b8787612c1e565b979650505050505050565b600061216061213c61211584670de0b6b3a7640000613569565b61135e670de0b6b3a764000061212b818a6126ad565b6121359190613569565b8790612449565b61214e90670de0b6b3a7640000613502565b611a7684670de0b6b3a7640000613569565b949350505050565b60008061219f856121776115c9565b6121819190613502565b600154610e27908790600160801b90046001600160801b0316613569565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008061220d8561135e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612203818c6126ad565b61135e9190613569565b9150612239827f00000000000000000000000000000000000000000000000000000000000000006106e4565b9050935093915050565b600082600003612254575084611601565b81156122a7576122856122678487613502565b61227185876106e4565b61227b888a6106e4565b611a769190613502565b905060006122938588611638565b9050808210156122a1578091505b50611601565b8285036122b657506000611601565b6122e16122c38487613569565b6122cd8587612449565b6122d7888a6106e4565b611a769190613569565b9695505050505050565b6000612313600e60006122ff60028661115f565b8152602001908152602001600020546118c0565b612325600e60006122ff60018761115f565b6106fc919061362d565b600061235b7f000000000000000000000000000000000000000000000000000000000000000083612449565b60025461237191906001600160801b0316613502565b600154612387906001600160801b0316846106e4565b101592915050565b60006106fc826004611d77565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa158015612404573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fc9190613872565b60006120f087878761244288670de0b6b3a7640000613569565b8787612cd2565b60006106f98383670de0b6b3a7640000612cf5565b60008080806124af87866124a88b61135e6124818c670de0b6b3a7640000613569565b7f000000000000000000000000000000000000000000000000000000000000000090612449565b9190612cf5565b93506124db847f00000000000000000000000000000000000000000000000000000000000000006106e4565b915060006124fc6124f489670de0b6b3a7640000613569565b8a9088612cf5565b9050612528817f0000000000000000000000000000000000000000000000000000000000000000612449565b9350612554847f00000000000000000000000000000000000000000000000000000000000000006106e4565b61255e9084613502565b915050945094509450949050565b600081831161257b57816106f9565b5090919050565b60008061259a846125948a888a612cf5565b906126ad565b9050611a89888486612cf5565b60006106f983670de0b6b3a7640000846115ab565b6000806125c98484612d1b565b9092509050806125db576125db6121aa565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261263c908590612d57565b50505050565b60008160000361265b5750670de0b6b3a76400006106fc565b8260000361266b575060006106fc565b6000612676836118c0565b9050600061268b612686866118c0565b612dbf565b90508181026126a2670de0b6b3a76400008261388b565b90506122e181612fe5565b60006106f983670de0b6b3a764000084612cf5565b600060016001607f1b038211156116345760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061270a575060016001607f1b0382135b156116345760405163a5353be560e01b815260040160405180910390fd5b600081831361257b57816106f9565b6002546000908190612752906001600160801b0316846126ad565b905061277e7f000000000000000000000000000000000000000000000000000000000000000082613502565b6001546001600160801b03161115611647576001547f0000000000000000000000000000000000000000000000000000000000000000906127c99083906001600160801b0316613569565b610ccd9190613569565b6127db6133da565b6000806127e784612ae4565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128229190613833565b6040805180830381865af415801561283e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128629190613842565b93509050826128775750600091506129469050565b600061289e6128998461016001518561014001516106e490919063ffffffff16565b6118c0565b6128be61289985610120015186610100015161244990919063ffffffff16565b6128c8919061362d565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a2991906138b9565b935093509350935080612a455750600098975050505050505050565b868414612a7657612a558461160a565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612aa757612a86836126ec565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612ad557612ab78261160a565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612aec61342c565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612be4911661317a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612c169290041661317a565b905292915050565b600080612c2e88888787876131f0565b9050612c48856115fb612c41898c613502565b86906106e4565b9750612c558489856115ab565b975087811015612c6757612c676121aa565b878103670de0b6b3a76400008110612c9c57612c95612c8e670de0b6b3a7640000886126ad565b8290612642565b9050612cb4565b612cb1612c8e670de0b6b3a7640000886125a7565b90505b80881015612cc457612cc46121aa565b909603979650505050505050565b600080612ce388888888888861321f565b909250905080611aa357611aa36121aa565b6000826000190484118302158202612d0c57600080fd5b50910281810615159190040190565b600080600083612d2a866118c0565b612d34919061362d565b90506000811215612d4c5760008092509250506106dd565b946001945092505050565b6000612d6c6001600160a01b038416836132e2565b90508051600014158015612d91575080806020019051810190612d8f91906138ef565b155b156115a657604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612de15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e649084901c6118c0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361300057506000919050565b680755bf798b4a1bf1e58212613029576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906122e174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6118c0565b600080670de0b6b3a764000061318e610702565b613198919061364d565b90508083116131a85760006131b2565b6131b28184613569565b9150610ccd6131e9670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061364d565b83906125a7565b60006131fc8585612642565b61321561320d866115fb868b612449565b859085612cf5565b6122e19190613502565b600080600061323189898888886131f0565b9050613241866115fb898b613502565b9750878110156132585760008092509250506132d7565b878103613266818688612cf5565b9050670de0b6b3a764000081106132935761328c612c8e670de0b6b3a7640000896126ad565b90506132ab565b6132a8612c8e670de0b6b3a7640000896125a7565b90505b6132b581866126ad565b9050808a10156132cd576000809350935050506132d7565b8903925060019150505b965096945050505050565b60606106f98383600084600080856001600160a01b03168486604051613308919061390c565b60006040518083038185875af1925050503d8060008114613345576040519150601f19603f3d011682016040523d82523d6000602084013e61334a565b606091505b50915091506122e186838360608261336a57613365826133b1565b610ccd565b815115801561338157506001600160a01b0384163b155b156133aa57604051639996b31560e01b81526001600160a01b0385166004820152602401612db6565b5080610ccd565b8051156133c15780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806133ee61342c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156134a357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156134cf57600080fd5b8501606081880312156134e157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106fc576106fc6134ec565b60006020828403121561352757600080fd5b81356001600160a01b0381168114610ccd57600080fd5b801515811461060857600080fd5b60006020828403121561355e57600080fd5b8135610ccd8161353e565b818103818111156106fc576106fc6134ec565b6000808335601e1984360301811261359357600080fd5b83018035915067ffffffffffffffff8211156135ae57600080fd5b6020019150368190038213156106dd57600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826135e8576135e86135c3565b500690565b6001600160701b038181168382160190808211156125db576125db6134ec565b6001600160801b038181168382160190808211156125db576125db6134ec565b81810360008312801583831316838312821617156125db576125db6134ec565b80820281158282048414176106fc576106fc6134ec565b6001600160801b038281168282160390808211156125db576125db6134ec565b80820182811260008312801582168215821617156136a4576136a46134ec565b505092915050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106fc576106fc6134ec565b600081600f0b60016001607f1b031981036136f6576136f66134ec565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506137918285516136ff565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561380657600080fd5b505080516020909101519092909150565b6000600160ff1b820161382c5761382c6134ec565b5060000390565b61018081016106fc82846136ff565b6000806040838503121561385557600080fd5b8251915060208301516138678161353e565b809150509250929050565b60006020828403121561388457600080fd5b5051919050565b60008261389a5761389a6135c3565b600160ff1b8214600019841416156138b4576138b46134ec565b500590565b600080600080608085870312156138cf57600080fd5b84519350602085015192506040850151915060608501516134e18161353e565b60006020828403121561390157600080fd5b8151610ccd8161353e565b6000825160005b8181101561392d5760208186018101518583015201613913565b50600092019182525091905056fea264697066735822122021ede48e9f1b0a45bfad8d9b78c5eac90d3735304f31ee8c5c3153c5b5e3e83464736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
