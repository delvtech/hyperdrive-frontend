export const RETHTarget1 = {
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
            "name": "InsufficientBalance",
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
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
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
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
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
            "name": "closeLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
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
            "name": "closeShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003e8038038062003e808339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613a016200047f600039600050506000505060005050600081816101100152818161038c0152612b790152600081816113900152818161173b0152818161179e0152818161275901528181612795015281816129920152612b530152600081816106e201528181610d6801528181610f27015281816115fa0152612b2d01526000611ada015260008181611c00015281816121ea015261226301526000818161096501528181610eb601528181611bd40152612237015260008181610dab01526121b001526000818161070301528181610d4601528181610f48015281816115d80152612b9f01526000818161089d01528181610e360152818161169701528181612085015261310f01526000818161063901528181610735015281816107bc0152818161081d0152610855015260008181603d0152818161192e01528181612486015281816124d601526125c7015260005050613a016000f3fe60806040526004361061002d5760003560e01c806329b23fc114610082578063ded06231146100b457600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b34801561008e57600080fd5b506100a261009d36600461351d565b6100d4565b60405190815260200160405180910390f35b3480156100c057600080fd5b506100a26100cf36600461351d565b6100ed565b60006100e2858585856100fb565b90505b949350505050565b60006100e285858585610377565b60006101056105b7565b61010e826105e1565b7f000000000000000000000000000000000000000000000000000000000000000084101561014f5760405163211ddda360e11b815260040160405180910390fd5b600061015961061a565b90508542101561017c5761017661016e610632565b826004610668565b5061018a565b61018886826004610668565b505b61019f610198600288610bff565b3387610c34565b6000806000806000806101b38b888e610d0d565b95509550955095509550955060008c90508c4210156102735782600b60008282546101de9190613592565b909155506101f690506101ef610632565b4284610fa6565b6102038c888787856110e4565b600061020e8e61125e565b905061022c61021c8e6112a8565b61022690836135a5565b826112d6565b61023589611389565b610241576102416113e9565b600061024c8a611402565b90508061026c57604051638bdf918d60e01b815260040160405180910390fd5b505061028a565b61027d868961140f565b955061028888611402565b505b6000610297878a8d6114f0565b90508b8110156102ba5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e6102ca600288610bff565b6102d760208301836135c5565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a8a876103156040890160208a016135fc565b6103298a6103238d8f613592565b9061158a565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100e56001600055565b60006103816105b7565b61038a826105e1565b7f00000000000000000000000000000000000000000000000000000000000000008410156103cb5760405163211ddda360e11b815260040160405180910390fd5b60006103d561061a565b9050854210156103f0576103ea61016e610632565b506103fe565b6103fc86826004610668565b505b61040c610198600188610bff565b6000806000806000806104208b888e61159f565b95509550955095509550955060008c90508c4210156104d35782600b600082825461044b9190613592565b9091555061045c90506101ef610632565b6104698c88878785611724565b60006104748261125e565b905061048c6104828e6112a8565b6102269083613619565b61049589611389565b6104a1576104a16113e9565b60006104ac8a611402565b9050806104cc57604051638bdf918d60e01b815260040160405180910390fd5b50506104ea565b6104dd868961140f565b95506104e888611402565b505b60006104f7878a8d6114f0565b90508b81101561051a5760405163c972651760e01b815260040160405180910390fd5b8c898c610528600186610bff565b61053560208301836135c5565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028888876105736040890160208a016135fc565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100e56001600055565b6002600054036105da57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105f060208301836135c5565b6001600160a01b0316036106175760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600061062d670de0b6b3a7640000611915565b905090565b600061065e7f000000000000000000000000000000000000000000000000000000000000000042613657565b61062d904261366b565b600083815260076020526040812060018101546001600160801b031615158061069057504285115b156106a957600101546001600160801b03169050610bf8565b60008060006106b6610632565b905080880361072e578692506107276106cd6119a2565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c3565b91506107ea565b600061075a7f00000000000000000000000000000000000000000000000000000000000000008a613592565b90505b818103610775578793506107726106cd6119a2565b92505b6000818152600760205260409020600101546001600160801b0316935083156107b7576000818152600760205260409020546001600160801b031692506107e8565b6107e17f000000000000000000000000000000000000000000000000000000000000000082613592565b905061075d565b505b6107f3836119da565b6001850180546001600160801b0319166001600160801b03929092169190911790556108496108427f00000000000000000000000000000000000000000000000000000000000000008a61366b565b8984610fa6565b6108878861088161087a7f000000000000000000000000000000000000000000000000000000000000000083613592565b4290611a04565b84610fa6565b61089087611a19565b50600090506007816108c27f00000000000000000000000000000000000000000000000000000000000000008c61366b565b815260208101919091526040016000908120600101546001600160801b031691506108ee60028b610bff565b6000818152600e60205260408120549192508b8b8315610a34576001925060008061091d86898d866000611bbd565b9150915080600b60008282546109339190613592565b9091555061094f905086600084610949816112a8565b886110e4565b6109598183613592565b915061098986838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c8c565b915061099d610998838561158a565b611cd6565b600580546002906109be9084906201000090046001600160701b031661367e565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109eb826119da565b60058054601090610a0d908490600160801b90046001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a41600184610bff565b6000818152600e60205260409020549091508015610b505760019450600080610a6e838b8f886001611bbd565b9150915080600b6000828254610a849190613592565b90915550610aa0905083600084610a9a816112a8565b8a611724565b610aaa818361366b565b9150610ab9610998838761158a565b60058054600290610ada9084906201000090046001600160701b031661367e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b07826119da565b60058054601090610b29908490600160801b90046001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b8857610b7c610b62876112a8565b610b6b836112a8565b610b7591906135a5565b60006112d6565b610b86838f611d00565b505b6000610b9384611efa565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610c295760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c7757604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610cba90849061366b565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d2289612058565b9050610d8c610d2f6119a2565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006120a9565b90995096509150610d9e6106cd6119a2565b9250610dd48289610dcf867f0000000000000000000000000000000000000000000000000000000000000000612119565b612149565b15610de157610de16113e9565b8a8a60008080610df385878a8761218b565b9b5091945092509050610e06818461366b565b610e109088613592565b9650610e1c8284613592565b610e26908c613592565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610e60919061366b565b815260208101919091526040016000908120600101546001600160801b03169150428a11610ea85760008a8152600760205260409020600101546001600160801b0316610eaa565b8a5b9050610eda8c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611c8c565b9750610ee6858861366b565b9650670de0b6b3a7640000610f6c84610efd6119a2565b610f079190613592565b600154610f25908d90600160801b90046001600160801b031661366b565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119c3565b1115610f7a57610f7a6113e9565b610f8a888885888686600061229f565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610fd25750505050565b6000848152600760205260408120546001600160801b03169081900361102c57610ffb836119da565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790556110aa565b61107d611078670de0b6b3a7640000611045888661366b565b61104f91906136be565b85670de0b6b3a7640000611063878a61366b565b61106d91906136be565b85929190600161233e565b6119da565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110b3846119da565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661112d61107882611110670de0b6b3a7640000866136be565b600454600160801b90046001600160801b031691908a600061233e565b600480546001600160801b03928316600160801b029216919091179055611153866119da565b61115d90826136d5565b600380546001600160801b03928316600160801b029216919091179055611183846119da565b6001805460009061119e9084906001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111cb836123e8565b600380546000906111e0908490600f0b6136f5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611210856119da565b60018054601090611232908490600160801b90046001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611286600e6000611272600286610bff565b8152602001908152602001600020546112a8565b611298600e6000611272600187610bff565b6112a291906135a5565b92915050565b60006001600160ff1b038211156112d25760405163396ea70160e11b815260040160405180910390fd5b5090565b60006112ff6112e58483612424565b6112f0846000612424565b6112fa91906135a5565b6123e8565b9050600081600f0b1315611354576002805482919060009061132b9084906001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156113845761136981613722565b6002805460009061132b9084906001600160801b03166136d5565b505050565b60006113b57f00000000000000000000000000000000000000000000000000000000000000008361243a565b6002546113cb91906001600160801b0316613592565b6001546113e1906001600160801b03168461158a565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112a2826004611d00565b600080600061141d84611a19565b9092509050600061142e868661158a565b9050818311156114465761144386838561244f565b95505b8281101561145857808303925061145d565b600092505b61146683611cd6565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b9578690036114bd565b5060005b6114c6816119da565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114fd858561158a565b90506115088161246d565b94508460000361151c576000915050610bf8565b61152c60408401602085016135fc565b1561155b576115548561154260208601866135c5565b61154f6040870187613748565b6124bd565b9150611582565b61157e8561156c60208601866135c5565b6115796040870187613748565b6125ba565b8491505b509392505050565b6000610bf88383670de0b6b3a764000061244f565b6000806000806000806000806115b489612058565b905061161e6115c16119a2565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f00000000000000000000000000000000000000000000000000000000000000006125f4565b90995097509150600080806116346106cd6119a2565b95508c6116438f86898461218b565b9a509195509093509150611657838561366b565b611661908761366b565b955061166d8285613592565b611677908c61366b565b9a50611683888c613592565b9950505050505061170e86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116c1919061366b565b81526020810191909152604001600020600101546001600160801b0316428e116117055760008e8152600760205260409020600101546001600160801b0316611707565b8e5b600161229f565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061176657507f0000000000000000000000000000000000000000000000000000000000000000611764858361366b565b105b15611773576117736113e9565b6003549084900390600f0b61178884826135a5565b905083611794866112a8565b1380156117c957507f00000000000000000000000000000000000000000000000000000000000000006117c78383612648565b105b156117d6576117d66113e9565b600254600160801b90046001600160801b031661181861107882611802670de0b6b3a7640000886136be565b6004546001600160801b031691908c600061233e565b600480546001600160801b0319166001600160801b0392909216919091179055611842888261366b565b905061184d816119da565b600280546001600160801b03928316600160801b029216919091179055611873836119da565b600180546001600160801b0319166001600160801b039290921691909117905561189c826123e8565b600380546001600160801b0319166001600160801b03929092169190911790556118c5876119da565b600180546010906118e7908490600160801b90046001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa15801561197e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a2919061378f565b60015460035460009161062d916001600160801b0390911690600f0b612648565b60006100e2826119d485888861244f565b9061266e565b60006001600160801b038211156112d257604051630f0af95160e11b815260040160405180910390fd5b6000818311611a135782610bf8565b50919050565b6005546000908190611a3c908490600160801b90046001600160801b031661158a565b6005546201000090046001600160701b03169250905081811115611bb8576000611a66838361366b565b9050611a7561107882866126e3565b60058054601090611a97908490600160801b90046001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611ad085836126f890919063ffffffff16565b90506000611afe827f000000000000000000000000000000000000000000000000000000000000000061158a565b905080600b6000828254611b129190613592565b90915550611b229050818361366b565b9150611b2d826119da565b60018054600090611b489084906001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b758261270d565b60038054600090611b8a908490600f0b6136f5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611bca87856126f8565b91506000611bf8837f000000000000000000000000000000000000000000000000000000000000000061158a565b9050611c24817f000000000000000000000000000000000000000000000000000000000000000061158a565b91508315611c4757611c36828261366b565b611c40908461366b565b9250611c5e565b611c51828261366b565b611c5b9084613592565b92505b86861015611c8157611c7183878961244f565b9250611c7e82878961244f565b91505b509550959350505050565b600080611ca484611c9e8a888a61244f565b906126f8565b9050611cb188848661244f565b611cbb9082613592565b905086811115611ccb5786810391505b509695505050505050565b60006001600160701b038211156112d25760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d4b916001600160801b03169061366b565b905080600003611d5f5760019150506112a2565b6000611d6a85612737565b905080600003611d7f576001925050506112a2565b600080611d8d8385896127d3565b9150915080611da35760009450505050506112a2565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611ddf929190613826565b6040805180830381865af4158015611dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1f919061389c565b91509150611e3d611e2f826112a8565b611e38906138c0565b61294e565b925082611e5357600096505050505050506112a2565b611e5c826119da565b60068054600090611e779084906001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ea4816119da565b60068054601090611ec6908490600160801b90046001600160801b031661369e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f2387612ae4565b6040518263ffffffff1660e01b8152600401611f3f91906138dc565b6040805180830381865af4158015611f5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f7f91906138eb565b9150915080611f95575060009485945092505050565b6000808611611fa5576000611faf565b611faf838761158a565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161201a9190613592565b612024919061366b565b90508060000361203d5750600096879650945050505050565b600061204983836126f8565b98600198509650505050505050565b600080612063610632565b905080831161207357600061207d565b61207d818461366b565b9150610bf8827f00000000000000000000000000000000000000000000000000000000000000006126f8565b600080806120ca6120c288670de0b6b3a764000061366b565b899087612c1e565b9050861561210c576120dc888861243a565b91506120fd8a8a846120f68a670de0b6b3a764000061366b565b8989612c44565b92506121098382613592565b90505b9750975097945050505050565b600061213761213084670de0b6b3a764000061366b565b839061243a565b610bf890670de0b6b3a764000061366b565b600080612180856121586119a2565b6121629190613592565b600154610f25908790600160801b90046001600160801b031661366b565b909210949350505050565b60008080806121e287866121db8b6121d56121ae8c670de0b6b3a764000061366b565b7f00000000000000000000000000000000000000000000000000000000000000009061243a565b9061243a565b9190612c1e565b935061220e847f000000000000000000000000000000000000000000000000000000000000000061158a565b9150600061222f61222789670de0b6b3a764000061366b565b8a9088612c1e565b905061225b817f000000000000000000000000000000000000000000000000000000000000000061243a565b9350612287847f000000000000000000000000000000000000000000000000000000000000000061158a565b6122919084613592565b915050945094509450949050565b6000806000806000808888101561230e5786156122c4576122c18d898b61244f565b9c505b6122cf8c898b61244f565b9b506122da8b6112a8565b6122e38d6112a8565b6122ed91906135a5565b90506122fa8b898b61244f565b9a506123078a898b61244f565b995061232d565b6123178b6112a8565b6123208d6112a8565b61232a91906135a5565b90505b9b9c9a9b999a975050505050505050565b60008260000361234f5750846123df565b81156123a2576123806123628487613592565b61236c858761158a565b612376888a61158a565b611c9e9190613592565b9050600061238e8588611a04565b90508082101561239c578091505b506123df565b8285036123b1575060006123df565b6123dc6123be848761366b565b6123c8858761243a565b6123d2888a61158a565b611c9e919061366b565b90505b95945050505050565b600060016001607f1b0319821280612406575060016001607f1b0382135b156112d25760405163a5353be560e01b815260040160405180910390fd5b60008183136124335781610bf8565b5090919050565b6000610bf88383670de0b6b3a7640000612c1e565b600082600019048411830215820261246657600080fd5b5091020490565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401611961565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b15801561252257600080fd5b505af1158015612536573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d806000811461258a576040519150601f19603f3d011682016040523d82523d6000602084013e61258f565b606091505b50509050806125b1576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6125ee6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612c67565b50505050565b6000808061261561260d88670de0b6b3a764000061366b565b89908761244f565b9050861561210c57612627888861158a565b91506120fd8a8a846126418a670de0b6b3a764000061366b565b8989612cb9565b6000806126558484612cca565b909250905080612667576126676113e9565b5092915050565b6000816000036126875750670de0b6b3a76400006112a2565b82600003612697575060006112a2565b60006126a2836112a8565b905060006126b76126b2866112a8565b612d09565b90508181026126ce670de0b6b3a76400008261391b565b90506126d981612f2f565b9695505050505050565b6000610bf883670de0b6b3a764000084612c1e565b6000610bf883670de0b6b3a76400008461244f565b600060016001607f1b038211156112d25760405163a5353be560e01b815260040160405180910390fd5b6002546000908190612752906001600160801b0316846126e3565b905061277e7f000000000000000000000000000000000000000000000000000000000000000082613592565b6001546001600160801b03161115611a13576001547f0000000000000000000000000000000000000000000000000000000000000000906127c99083906001600160801b031661366b565b610bf8919061366b565b6127db61346a565b6000806127e784612ae4565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161282291906138dc565b6040805180830381865af415801561283e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061286291906138eb565b93509050826128775750600091506129469050565b600061289e61289984610160015185610140015161158a90919063ffffffff16565b6112a8565b6128be61289985610120015186610100015161243a90919063ffffffff16565b6128c891906135a5565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a299190613949565b935093509350935080612a455750600098975050505050505050565b868414612a7657612a55846119da565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612aa757612a86836123e8565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612ad557612ab7826119da565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612aec6134bc565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612be491166130c4565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612c16929004166130c4565b905292915050565b6000826000190484118302158202612c3557600080fd5b50910281810615159190040190565b600080612c5588888888888861313a565b909250905080611ccb57611ccb6113e9565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261138490849061321b565b600080612c55888888888888613283565b600080600083612cd9866112a8565b612ce391906135a5565b90506000811215612cfb576000809250925050612d02565b9150600190505b9250929050565b6000808213612d2b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612dae9084901c6112a8565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213612f4a57506000919050565b680755bf798b4a1bf1e58212612f73576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906126d974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112a8565b600080670de0b6b3a76400006130d8610632565b6130e291906136be565b90508083116130f25760006130fc565b6130fc818461366b565b9150610bf8613133670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136be565b83906126f8565b600080600061314c8989888888613343565b905086881015613163576000809250925050613210565b9686900396613172888761266e565b975087811015613189576000809250925050613210565b878103613197818688612c1e565b9050670de0b6b3a764000081106131cb576131c46131bd670de0b6b3a7640000896126e3565b829061266e565b90506131e3565b6131e06131bd670de0b6b3a7640000896126f8565b90505b6131ed81866126e3565b90508981101561320557600080935093505050613210565b899003925060019150505b965096945050505050565b60006132306001600160a01b03841683613372565b90508051600014158015613255575080806020019051810190613253919061397f565b155b1561138457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060006132958989888888613343565b90506132a5866119d4898b613592565b9750878110156132bc576000809250925050613210565b8781036132ca818688612c1e565b9050670de0b6b3a764000081106132f7576132f06131bd670de0b6b3a7640000896126e3565b905061330f565b61330c6131bd670de0b6b3a7640000896126f8565b90505b61331981866126e3565b9050808a101561333157600080935093505050613210565b90980398600198509650505050505050565b600061334f858561266e565b613368613360866119d4868b61243a565b859085612c1e565b6123dc9190613592565b6060610bf88383600084600080856001600160a01b03168486604051613398919061399c565b60006040518083038185875af1925050503d80600081146133d5576040519150601f19603f3d011682016040523d82523d6000602084013e6133da565b606091505b50915091506126d98683836060826133fa576133f582613441565b610bf8565b815115801561341157506001600160a01b0384163b155b1561343a57604051639996b31560e01b81526001600160a01b038516600482015260240161327a565b5080610bf8565b8051156134515780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061347e6134bc565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561353357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561355f57600080fd5b85016060818803121561357157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112a2576112a261357c565b81810360008312801583831316838312821617156126675761266761357c565b6000602082840312156135d757600080fd5b81356001600160a01b0381168114610bf857600080fd5b801515811461061757600080fd5b60006020828403121561360e57600080fd5b8135610bf8816135ee565b80820182811260008312801582168215821617156136395761363961357c565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261366657613666613641565b500690565b818103818111156112a2576112a261357c565b6001600160701b038181168382160190808211156126675761266761357c565b6001600160801b038181168382160190808211156126675761266761357c565b80820281158282048414176112a2576112a261357c565b6001600160801b038281168282160390808211156126675761266761357c565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112a2576112a261357c565b600081600f0b60016001607f1b0319810361373f5761373f61357c565b60000392915050565b6000808335601e1984360301811261375f57600080fd5b83018035915067ffffffffffffffff82111561377a57600080fd5b602001915036819003821315612d0257600080fd5b6000602082840312156137a157600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061383a8285516137a8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156138af57600080fd5b505080516020909101519092909150565b6000600160ff1b82016138d5576138d561357c565b5060000390565b61018081016112a282846137a8565b600080604083850312156138fe57600080fd5b825191506020830151613910816135ee565b809150509250929050565b60008261392a5761392a613641565b600160ff1b8214600019841416156139445761394461357c565b500590565b6000806000806080858703121561395f57600080fd5b8451935060208501519250604085015191506060850151613571816135ee565b60006020828403121561399157600080fd5b8151610bf8816135ee565b6000825160005b818110156139bd57602081860181015185830152016139a3565b50600092019182525091905056fea26469706673582212208a4747ba8bcd37b350916ee9e3d4be83c9745b111436e7ae7291548dbb2064b564736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
