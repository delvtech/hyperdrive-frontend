export const StETHTarget3 = {
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
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "checkpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
                }
            ],
            "stateMutability": "payable"
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "fees",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
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
            "name": "FeeCollectorUpdated",
            "inputs": [
                {
                    "name": "newFeeCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernanceUpdated",
            "inputs": [
                {
                    "name": "newGovernance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
            "name": "PauserUpdated",
            "inputs": [
                {
                    "name": "newPauser",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "status",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
            "name": "SweepCollectorUpdated",
            "inputs": [
                {
                    "name": "newSweepCollector",
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
            "name": "BelowMinimumContribution",
            "inputs": []
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
            "name": "InvalidCheckpointTime",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidPresentValue",
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
            "name": "PoolAlreadyInitialized",
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
    bytecode: '0x6102406040523480156200001257600080fd5b5060405162004a2538038062004a258339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516145e06200044560003960005050600050506000818161047401526125ae0152600081816101f50152818161024c0152818161033301528181611455015281816114910152818161172c01528181611c8401528181611ce7015281816124b301526125880152600081816102a201528181610feb01528181611033015281816111530152612562015260006118cd0152600081816119f3015261239c015260008181610a35015281816110a601526119c701526000818161108501526123580152600081816102e501528181610fc9015281816110540152818161117401526125d40152600081816102c4015281816105400152818161097001526134ca01526000818161013f01528181610816015281816108a301526109080152600081816113c00152818161204d01526120e80152600050506145e06000f3fe6080604052600436106100345760003560e01c8063414f826d1461003957806377d05ff41461005b578063cba2e58d14610081575b600080fd5b34801561004557600080fd5b5061005961005436600461425f565b6100a9565b005b61006e610069366004614293565b6100b7565b6040519081526020015b60405180910390f35b61009461008f3660046142e3565b6100ce565b60408051928352602083019190915201610078565b6100b382826100eb565b5050565b60006100c48484846101a7565b90505b9392505050565b6000806100dd86868686610415565b915091505b94509492505050565b6100f3610641565b60006100fd61066b565b6000848152600760205260409020549091506001600160801b03161561012e576101278183610683565b505061019d565b600061013861080f565b90506101647f000000000000000000000000000000000000000000000000000000000000000085614353565b15158061017057508381105b1561018e5760405163ecd29e8160e01b815260040160405180910390fd5b610199848385610845565b5050505b6100b36001600055565b60006101b1610641565b6101ba82610cd8565b60055460ff16156101de57604051637983c05160e01b815260040160405180910390fd5b6000806101eb8685610d11565b909250905061021b7f0000000000000000000000000000000000000000000000000000000000000000600261437d565b82101561023b57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061027982610dea565b600180546001600160801b0319166001600160801b039290921691909117905561030e610309837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e18565b610dea565b600180546001600160801b03928316600160801b0292169190911790556103576000807f0000000000000000000000000000000000000000000000000000000000000000610eb7565b61036f60006103696020870187614394565b85610eb7565b61038261037a61080f565b826004610845565b506000610390878387610f5f565b905061039f6020860186614394565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866103dc60408b0160208c016143bd565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a25050506100c76001600055565b600080610420610641565b600554610100900460ff1615610449576040516321081abf60e01b815260040160405180910390fd5b61045283610cd8565b60008061045f8886610d11565b909250905060006104708383610f8e565b90507f00000000000000000000000000000000000000000000000000000000000000008110156104b35760405163211ddda360e11b815260040160405180910390fd5b868210156104d4576040516342af972b60e01b815260040160405180910390fd5b60006104de61080f565b90506104ec81846004610845565b506000806104fa8686610fa3565b90985090925090508a8710156105235760405163c972651760e01b815260040160405180910390fd5b80600b600082825461053591906143df565b9091555061056590507f0000000000000000000000000000000000000000000000000000000000000000846143df565b97506105738288878b6111b0565b600061058060018a61134a565b90506105998161059360208d018d614394565b8a610eb7565b8c8989888d856105ac6020830183614394565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866105e2898787610f5f565b6105ed8a888861137f565b6105fd60408801602089016143bd565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100e26001600055565b60026000540361066457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061067e670de0b6b3a76400006113a7565b905090565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916106ce916001600160801b0316906143f2565b9050806000036106e2576001915050610809565b60006106ed85611433565b90508060000361070257600192505050610809565b6000806107108385896114d8565b9150915080610726576000945050505050610809565b60008061073384896115e5565b91509150610751610743826116d5565b61074c90614405565b6116ff565b9250826107675760009650505050505050610809565b61077082610dea565b6006805460009061078b9084906001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506107b881610dea565b600680546010906107da908490600160801b90046001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600061083b7f000000000000000000000000000000000000000000000000000000000000000042614353565b61067e90426143f2565b600083815260076020526040812080546001600160801b031615158061086a57504285115b1561088057546001600160801b031690506100c7565b60008061088b61080f565b905080870361089c57859150610936565b60006108c87f0000000000000000000000000000000000000000000000000000000000000000896143df565b90505b6000818152600760205260409020546001600160801b0316925081811480156108f2575082155b156108fb578692505b826000036109345761092d7f0000000000000000000000000000000000000000000000000000000000000000826143df565b90506108cb565b505b61093f82610dea565b83546001600160801b0319166001600160801b03919091161783556109638661180c565b50600090506007816109957f00000000000000000000000000000000000000000000000000000000000000008b6143f2565b815260208101919091526040016000908120546001600160801b031691506109be60028a61134a565b6000818152600e60205260408120549192508a8a8315610b0457600192506000806109ed86898c8660006119b0565b9150915080600b6000828254610a0391906143df565b90915550610a1f905086600084610a19816116d5565b88611a7f565b610a2981836143df565b9150610a5986838a8d877f0000000000000000000000000000000000000000000000000000000000000000611bf9565b9150610a6d610a688385610f8e565b611c43565b60058054600290610a8e9084906201000090046001600160701b0316614441565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610abb82610dea565b60058054601090610add908490600160801b90046001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b1160018461134a565b6000818152600e60205260409020549091508015610c205760019450600080610b3e838b8e8860016119b0565b9150915080600b6000828254610b5491906143df565b90915550610b70905083600084610b6a816116d5565b8a611c6d565b610b7a81836143f2565b9150610b89610a688387610f8e565b60058054600290610baa9084906201000090046001600160701b0316614441565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bd782610dea565b60058054601090610bf9908490600160801b90046001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c5857610c4c610c32876116d5565b610c3b836116d5565b610c459190614461565b6000611e5e565b610c568e8e610683565b505b6000610c638f611f11565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610cbc959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989e9d5050505050505050505050505050565b6000610ce76020830183614394565b6001600160a01b031603610d0e5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610d2560408501602086016143bd565b15610d4a57610d4085610d3b6040870187614481565b612001565b9093509050610d66565b5034610d6285610d5d6040870187614481565b6120c6565b8492505b610d6e61066b565b91508015610de157604051600090339083908381818185875af1925050503d8060008114610db8576040519150601f19603f3d011682016040523d82523d6000602084013e610dbd565b606091505b5050905080610ddf576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006001600160801b03821115610e1457604051630f0af95160e11b815260040160405180910390fd5b5090565b600080610e29846301e13380612163565b90506000610e378683610f8e565b610e4990670de0b6b3a76400006143df565b9050670de0b6b3a76400008110610e7d57610e76610e6f670de0b6b3a764000086612163565b8290612178565b9050610e95565b610e92610e6f670de0b6b3a7640000866121ed565b90505b610ea981610ea3898b610f8e565b90610f8e565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ee99084906143df565b90915550506000838152600e602052604081208054839290610f0c9084906143df565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610f7160408301602084016143bd565b15610f7d5750826100c7565b610f878484610f8e565b90506100c7565b60006100c78383670de0b6b3a7640000612202565b600080600061100f610fb3612220565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000612241565b9150600061107861101e612220565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061226d565b90506110cf86846110ca847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612284565b6122ef565b156110dc576110dc612331565b6000806110ea88848961234a565b90925090506110f982866143f2565b9450611106818489612202565b935061111284896143f2565b9550670de0b6b3a764000061119887611129612220565b61113391906143df565b600154611151908990600160801b90046001600160801b03166143f2565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061226d565b11156111a6576111a6612331565b5050509250925092565b600254600160801b90046001600160801b03166111f2610309826111dc670de0b6b3a76400008661437d565b6004546001600160801b031691908860016123ca565b600480546001600160801b0319166001600160801b039290921691909117905561121b85610dea565b600180546000906112369084906001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061126384610dea565b60018054601090611285908490600160801b90046001600160801b03166144c8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112b284610dea565b6112bc9082614421565b600280546001600160801b03808416600160801b029116179055905060006112e383612468565b9050611301816112f2876116d5565b6112fc90846144e8565b611e5e565b61130a846124ac565b61131657611316612331565b60006113218561250c565b90508061134157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156113745760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061139160408301602084016143bd565b156113a057610f878484612163565b50826100c7565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa15801561140f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108099190614510565b600254600090819061144e906001600160801b0316846121ed565b905061147a7f0000000000000000000000000000000000000000000000000000000000000000826143df565b6001546001600160801b031611156114d2576001547f0000000000000000000000000000000000000000000000000000000000000000906114c59083906001600160801b03166143f2565b6114cf91906143f2565b91505b50919050565b6114e06141ac565b6000806114ec84612519565b905060006114f982612653565b935090508261150e5750600091506115dd9050565b6000611535611530846101600151856101400151610f8e90919063ffffffff16565b6116d5565b6115556115308561012001518661010001516126e090919063ffffffff16565b61155f9190614461565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806115fd8660c001518760e001516126f5565b915091508061161457600080935093505050610de3565b60006116208784612731565b9250905081158061162f575080155b156116435760008094509450505050610de3565b600061164f8883612840565b905080600003611669576000809550955050505050610de3565b876060015181116116805794509250610de3915050565b50606087015160006116948986858b612911565b9050806000036116af57600080965096505050505050610de3565b8281106116c757600080965096505050505050610de3565b909890975095505050505050565b60006001600160ff1b03821115610e145760405163396ea70160e11b815260040160405180910390fd5b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806117518787877f00000000000000000000000000000000000000000000000000000000000000008d612e28565b93509350935093508061176d5750600098975050505050505050565b86841461179e5761177d84610dea565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146117cf576117ae83612f40565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146117fd576117df82610dea565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600554600090819061182f908490600160801b90046001600160801b0316610f8e565b6005546201000090046001600160701b031692509050818111156119ab57600061185983836143f2565b905061186861030982866121ed565b6005805460109061188a908490600160801b90046001600160801b03166144c8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006118c3858361216390919063ffffffff16565b905060006118f1827f0000000000000000000000000000000000000000000000000000000000000000610f8e565b905080600b600082825461190591906143df565b90915550611915905081836143f2565b915061192082610dea565b6001805460009061193b9084906001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061196882612f7c565b6003805460009061197d908490600f0b614529565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806119bd8785612163565b915060006119eb837f0000000000000000000000000000000000000000000000000000000000000000610f8e565b9050611a17817f0000000000000000000000000000000000000000000000000000000000000000610f8e565b91508315611a3a57611a2982826143f2565b611a3390846143f2565b9250611a51565b611a4482826143f2565b611a4e90846143df565b92505b86861015611a7457611a64838789612202565b9250611a71828789612202565b91505b509550959350505050565b600354600160801b90046001600160801b0316611ac861030982611aab670de0b6b3a76400008661437d565b600454600160801b90046001600160801b031691908a60006123ca565b600480546001600160801b03928316600160801b029216919091179055611aee86610dea565b611af890826144c8565b600380546001600160801b03928316600160801b029216919091179055611b1e84610dea565b60018054600090611b399084906001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b6683612f40565b60038054600090611b7b908490600f0b614529565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611bab85610dea565b60018054601090611bcd908490600160801b90046001600160801b03166144c8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c1184611c0b8a888a612202565b90612163565b9050611c1e888486612202565b611c2890826143df565b905086811115611c385786810391505b509695505050505050565b60006001600160701b03821115610e145760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611caf57507f0000000000000000000000000000000000000000000000000000000000000000611cad85836143f2565b105b15611cbc57611cbc612331565b6003549084900390600f0b611cd18482614461565b905083611cdd866116d5565b138015611d1257507f0000000000000000000000000000000000000000000000000000000000000000611d108383612fa6565b105b15611d1f57611d1f612331565b600254600160801b90046001600160801b0316611d6161030982611d4b670de0b6b3a76400008861437d565b6004546001600160801b031691908c60006123ca565b600480546001600160801b0319166001600160801b0392909216919091179055611d8b88826143f2565b9050611d9681610dea565b600280546001600160801b03928316600160801b029216919091179055611dbc83610dea565b600180546001600160801b0319166001600160801b0392909216919091179055611de582612f40565b600380546001600160801b0319166001600160801b0392909216919091179055611e0e87610dea565b60018054601090611e30908490600160801b90046001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611e87611e6d8483612fcc565b611e78846000612fcc565b611e829190614461565b612f40565b9050600081600f0b1315611edc5760028054829190600090611eb39084906001600160801b0316614421565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611f0c57611ef181614556565b60028054600090611eb39084906001600160801b03166144c8565b505050565b600080600080611f28611f2386612519565b612653565b9150915080611f3e575060009485945092505050565b6000808611611f4e576000611f58565b611f588387610f8e565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611fc391906143df565b611fcd91906143f2565b905080600003611fe65750600096879650945050505050565b6000611ff28383612163565b98600198509650505050505050565b60008084341015612025576040516312171d8360e31b815260040160405180910390fd5b5060085460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015612097573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906120bc9190614510565b9150935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015612139573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215d9190614510565b50505050565b60006100c783670de0b6b3a764000084612202565b6000816000036121915750670de0b6b3a7640000610809565b826000036121a157506000610809565b60006121ac836116d5565b905060006121c16121bc866116d5565b612fe2565b90508181026121d8670de0b6b3a76400008261457c565b90506121e381613208565b9695505050505050565b60006100c783670de0b6b3a76400008461339d565b600082600019048411830215820261221957600080fd5b5091020490565b60015460035460009161067e916001600160801b0390911690600f0b612fa6565b600061226287878761225b88670de0b6b3a76400006143f2565b87876133c3565b979650505050505050565b6000610eae8261227e858888612202565b90612178565b60006100c46122cb61229e84670de0b6b3a76400006143f2565b6122c5670de0b6b3a76400006122b4818a6121ed565b6122be91906143f2565b87906126e0565b906126e0565b6122dd90670de0b6b3a76400006143df565b611c0b84670de0b6b3a76400006143f2565b600080612326856122fe612220565b61230891906143df565b600154611151908790600160801b90046001600160801b03166143f2565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600080612394856122c585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061238a818c6121ed565b6122c591906143f2565b91506123c0827f0000000000000000000000000000000000000000000000000000000000000000610f8e565b9050935093915050565b6000826000036123db575084610eae565b811561242e5761240c6123ee84876143df565b6123f88587610f8e565b612402888a610f8e565b611c0b91906143df565b9050600061241a8588613470565b905080821015612428578091505b50610eae565b82850361243d57506000610eae565b6121e361244a84876143f2565b61245485876126e0565b61245e888a610f8e565b611c0b91906143f2565b6000612490600e600061247c60028661134a565b8152602001908152602001600020546116d5565b6124a2600e600061247c60018761134a565b6108099190614461565b60006124d87f0000000000000000000000000000000000000000000000000000000000000000836126e0565b6002546124ee91906001600160801b03166143df565b600154612504906001600160801b031684610f8e565b101592915050565b6000610809826004610683565b6125216141fe565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612619911661347f565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261264b9290041661347f565b905292915050565b6000806000806000612664866134f5565b915091508061267b57506000958695509350505050565b6126888660a001516116d5565b61269187613815565b8361269f89600001516116d5565b6126a991906144e8565b6126b391906144e8565b6126bd9190614461565b9250505060008112156126d65750600093849350915050565b9360019350915050565b60006100c78383670de0b6b3a764000061339d565b600080600083612704866116d5565b61270e9190614461565b90506000811215612726576000809250925050610de3565b946001945092505050565b60008060008460a001511261274e57505060808201516001610de3565b60008460a0015161275e90614405565b9050600061279a85876101000151886000015160e00151670de0b6b3a764000061278891906143f2565b89516060810151608090910151613879565b935090508215806127a9575080155b156127bc57600080935093505050610de3565b60006127c883836121ed565b9050670de0b6b3a764000081116128045780670de0b6b3a76400000394506127fd8760c0015186610f8e90919063ffffffff16565b9450612813565b60008094509450505050610de3565b8660800151851115612832578660800151600194509450505050610de3565b506001925050509250929050565b6000806128768460c001518560e00151866101000151876000015160a00151612868886116d5565b61287190614405565b612e28565b8751604081019290925260208201929092529190915290508061289d576000915050610809565b60006128ac8560000151612653565b92509050816128c057600092505050610809565b846020015181106128d657600092505050610809565b6000856060015186604001516128ec91906143df565b9050612907828760200151836122029092919063ffffffff16565b6121e390826143f2565b6000808560600151866040015161292891906143df565b602087015160608801519192506000916129429184612202565b90508660a00151600003612959579150612e209050565b6000808089600488101561296c57600497505b60005b88811015612cc857612981868b613470565b955060006129aa8360c001518460e00151856101000151866000015160a001516128688c6116d5565b865160408101929092526020820192909252919091529050806129d857600098505050505050505050612e20565b60006129e78e60000151612653565b9250905081612a025760009950505050505050505050612e20565b612a0d84828b613925565b15612a2357879950505050505050505050612e20565b60008460a001511315612b8c57835180516020820151604083015160a084015160e090940151600094612a7794939291612a6590670de0b6b3a76400006143f2565b8a516060810151608090910151613991565b9350905082612a935760009a5050505050505050505050612e20565b808560a0015110612b8a57612aa785613a96565b909950925082612ac45760009a5050505050505050505050612e20565b612ae98560c001518660e00151876101000151886000015160a001516128688e6116d5565b88516040810192909252602082019290925291909152925082612b195760009a5050505050505050505050612e20565b845180516020820151604083015160a084015160e090940151612b499490612a6590670de0b6b3a76400006143f2565b9350905082612b655760009a5050505050505050505050612e20565b8e60a001518111612b8257889a5050505050505050505050612e20565b50505061296f565b505b6000612b9d858f8760a00151613b6c565b93509050821580612bb65750670de0b6b3a76400008110155b15612bce5760009a5050505050505050505050612e20565b80670de0b6b3a76400000390506000612bfb611530876040015188602001516126e090919063ffffffff16565b612c08611530858e610f8e565b612c129190614461565b9050881580612c305750612c2589613ec7565b612c2e82613ec7565b125b15612c3f578098508997508296505b6000811315612c6757612c568b611c0b8385612163565b612c60908b6143df565b9950612cb9565b6000811215612cb0576000612c818c611c0b858186614405565b90508a811015612c9557808b039a50612caa565b60009c50505050505050505050505050612e20565b50612cb9565b50505050612cc8565b8460010194505050505061296f565b506000612cf08260c001518360e00151846101000151856000015160a001516128688b6116d5565b85516040810192909252602082019290925291909152905080612d1d576000975050505050505050612e20565b6000612d2c8360000151613edf565b90506000612d4e611530856040015186602001516126e090919063ffffffff16565b612d5b611530848c610f8e565b612d659190614461565b9050612d7087613ec7565b612d7982613ec7565b1215612d86578795508194505b612dad612da1655af3107a4000670de0b6b3a76400006143f2565b6020860151908b61339d565b6040850151612dbd908790612163565b1080612dfd5750612deb612ddf655af3107a4000670de0b6b3a76400006143df565b6020860151908b612202565b6040850151612dfb9087906121ed565b115b15612e145760009950505050505050505050612e20565b50939750505050505050505b949350505050565b60008060008084600003612e4757508792508691508590506001612f34565b600085612e538b6116d5565b612e5d91906144e8565b9050612e68876116d5565b811215612e8357600080600080945094509450945050612f34565b80945060008912612ea357612e9c611530868b8d612202565b9350612ec6565b612eba611530612eb28b614405565b87908d61339d565b612ec390614405565b93505b600080612ed38c8c6126f5565b9150915080612ef2576000806000809650965096509650505050612f34565b6000612efe88886126f5565b9250905081612f1e57600080600080975097509750975050505050612f34565b612f298b8285612202565b955060019450505050505b95509550955095915050565b600060016001607f1b0319821280612f5e575060016001607f1b0382135b15610e145760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03821115610e145760405163a5353be560e01b815260040160405180910390fd5b600080612fb384846126f5565b909250905080612fc557612fc5612331565b5092915050565b6000818313612fdb57816100c7565b5090919050565b60008082136130045760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130879084901c6116d5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361322357506000919050565b680755bf798b4a1bf1e5821261324c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906121e374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6116d5565b60008260001904841183021582026133b457600080fd5b50910281810615159190040190565b6000806133d38888878787613f0f565b90506133ed8561227e6133e6898c6143df565b8690610f8e565b97506133fa848985612202565b97508781101561340c5761340c612331565b878103670de0b6b3a7640000811061343a57613433610e6f670de0b6b3a7640000886121ed565b9050613452565b61344f610e6f670de0b6b3a764000088612163565b90505b8088101561346257613462612331565b909603979650505050505050565b60008183116114d257826100c7565b600080670de0b6b3a764000061349361080f565b61349d919061437d565b90508083116134ad5760006134b7565b6134b781846143f2565b91506114cf6134ee670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061437d565b8390612163565b600080600061351a611530856101600151866101400151610f8e90919063ffffffff16565b61353a6115308661012001518761010001516126e090919063ffffffff16565b6135449190614461565b905060008061355b866000015187602001516126f5565b915091508061357257506000958695509350505050565b60008313156136b357600083905060006135c0886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006135b191906143f2565b8d606001518e60800151613991565b93509050826135d9575060009788975095505050505050565b818110613677576000613613858a60400151858c60e00151670de0b6b3a764000061360491906143f2565b8d606001518e60800151613f3e565b945090508315801561362857508860c0015183105b1561363f5750600098600198509650505050505050565b8361365557506000988998509650505050505050565b61365e816116d5565b61366790614405565b9960019950975050505050505050565b600088602001511261369f576136968860a001518561153091906143f2565b611ff290614405565b60a0880151885161369691611530916143f2565b60008312156138065760006136c784614405565b905060006136fb8489604001518a60e00151670de0b6b3a76400006136ec91906143f2565b8b606001518c60800151613879565b9350905082613714575060009788975095505050505050565b81811061379957600061374e858a60400151858c60e00151670de0b6b3a764000061373f91906143f2565b8d606001518e60800151614001565b945090508315801561376357508860c0015183105b1561377a5750600098600198509650505050505050565b8361379057506000988998509650505050505050565b613667816116d5565b60006137cb858a604001518b60e00151670de0b6b3a76400006137bc91906143f2565b8c606001518d608001516140d8565b94509050836137e557506000988998509650505050505050565b6136676137fc8a606001518486611c0b91906143f2565b61153090836143df565b50600095600195509350505050565b6000613848611530836101200151670de0b6b3a764000061383691906143f2565b6060850151610100860151919061339d565b6124a2611530846101600151670de0b6b3a764000061386791906143f2565b60608601516101408701519190612202565b600080600061388b8888888888613f0f565b905060006138b6670de0b6b3a76400006138a58888612163565b6138af91906143df565b83906121ed565b9050670de0b6b3a764000081106138e3576138dc610e6f670de0b6b3a7640000896121ed565b90506138fb565b6138f8610e6f670de0b6b3a764000089612163565b90505b808810156139115760008093509350505061391b565b8703925060019150505b9550959350505050565b602083015160009061393790846121ed565b6040850151613947908490612163565b101580156100c4575060208401516139779084613970633b9aca00670de0b6b3a76400006143df565b9190612202565b60408501516139879084906121ed565b1115949350505050565b60008060008812156139b3576139a688614405565b6139b090876143df565b95505b6000806139c08b8b6126f5565b91509150806139d757600080935093505050613a8a565b60006139e6838b8a8a8a614187565b90506000613a036139fb8a61227e8a8e6126e0565b89908961339d565b905080821015613a1d576000809550955050505050613a8a565b808203670de0b6b3a76400008110613a4b57613a44610e6f670de0b6b3a76400008c612163565b9050613a63565b613a60610e6f670de0b6b3a76400008c6121ed565b90505b8b811015613a7c57600080965096505050505050613a8a565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613ab057506000928392509050565b6000613abf8460000151613815565b90506000613aeb856040015186606001518760400151613adf91906143df565b6020880151919061339d565b905060008212613b125780821015613b0557819003613b28565b5060009485945092505050565b613b1b82614405565b613b2590826143df565b90505b60e085015160c0860151613b3d91839061339d565b9050808560c001511015613b58575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b9057855160400151613b899085906143df565b9050613bcb565b6000613b9b85614405565b875160400151909150811015613bbb578651604001518190039150613bc9565b6000809350935050506115dd565b505b855180516020909101516000918291613be491906126f5565b9150915080613bfc57600080945094505050506115dd565b875160e0810151604090910151600091613c3191613c2591613c1e9190612178565b8a90610f8e565b6101008b0151906121ed565b895160e0810151608090910151613c5c91613c509161227e9088610f8e565b8b5160600151906121ed565b613c6691906143df565b90506000613c9e613c92613c8b8c6000015160e001518861217890919063ffffffff16565b8b906126e0565b6101008c015190612163565b905080821015613cb9576000809650965050505050506115dd565b80820391506000613cfb858c60000151604001518d6000015160e00151670de0b6b3a7640000613ce991906143f2565b8e516060810151608090910151613f0f565b90506000613d258c6000015160e00151670de0b6b3a7640000613d1e91906143f2565b8890612178565b905080821015613d425760008098509850505050505050506115dd565b8b51608081015160609091015191830391613d5e91839161339d565b9050670de0b6b3a76400008110613da2578b5160e00151613d9b90610e6f90613d8f90670de0b6b3a76400006143f2565b8e5160e00151906121ed565b9050613dd1565b8b5160e00151613dce90610e6f90613dc290670de0b6b3a76400006143f2565b8e5160e0015190612163565b90505b8b5160600151613de4908590839061339d565b935083670de0b6b3a76400001115613e085783670de0b6b3a7640000039350613e1c565b6000600198509850505050505050506115dd565b60008c60e0015112613e7f5760c08c015160e08d0151613e3b916121ed565b9250670de0b6b3a7640000831115613e605760008098509850505050505050506115dd565b670de0b6b3a76400009290920391613e788484610f8e565b9350613eb4565b613eb1613e988d60c001518e60e00151611c0b90614405565b613eaa90670de0b6b3a76400006143df565b8590610f8e565b93505b50919a60019a5098505050505050505050565b6000808212613ed65781610809565b61080982614405565b6000806000613eed84612653565b9150915080612fc557604051635516328b60e11b815260040160405180910390fd5b6000613f1b8585612178565b613f34613f2c8661227e868b6126e0565b85908561339d565b6121e391906143df565b6000806000613f508989888888613f0f565b9050613f608661227e898b6143df565b975087811015613f77576000809250925050613ff6565b878103613f8581868861339d565b9050670de0b6b3a76400008110613fb257613fab610e6f670de0b6b3a7640000896121ed565b9050613fca565b613fc7610e6f670de0b6b3a764000089612163565b90505b613fd481866121ed565b9050808a1015613fec57600080935093505050613ff6565b8903925060019150505b965096945050505050565b60008060006140138989888888613f0f565b90508688101561402a576000809250925050613ff6565b96869003966140398887612178565b975087811015614050576000809250925050613ff6565b87810361405e81868861339d565b9050670de0b6b3a7640000811061408b57614084610e6f670de0b6b3a7640000896121ed565b90506140a3565b6140a0610e6f670de0b6b3a764000089612163565b90505b6140ad81866121ed565b9050898110156140c557600080935093505050613ff6565b9890980398600198509650505050505050565b60008060006140ea8888888888614187565b9050600061410e670de0b6b3a764000061410488886121ed565b6134ee91906143df565b9050670de0b6b3a7640000811061413b57614134610e6f670de0b6b3a764000089612163565b9050614153565b614150610e6f670de0b6b3a7640000896121ed565b90505b61415d8186612163565b9050888110156141755760008093509350505061391b565b97909703976001975095505050505050565b60006141938585612178565b613f346141a48661227e868b610f8e565b859085612202565b6040518061012001604052806141c06141fe565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806040838503121561427257600080fd5b50508035926020909101359150565b6000606082840312156114d257600080fd5b6000806000606084860312156142a857600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156142cd57600080fd5b6142d986828701614281565b9150509250925092565b600080600080608085870312156142f957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561432557600080fd5b61433187828801614281565b91505092959194509250565b634e487b7160e01b600052601260045260246000fd5b6000826143625761436261433d565b500690565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761080957610809614367565b6000602082840312156143a657600080fd5b81356001600160a01b03811681146100c757600080fd5b6000602082840312156143cf57600080fd5b813580151581146100c757600080fd5b8082018082111561080957610809614367565b8181038181111561080957610809614367565b6000600160ff1b820161441a5761441a614367565b5060000390565b6001600160801b03818116838216019080821115612fc557612fc5614367565b6001600160701b03818116838216019080821115612fc557612fc5614367565b8181036000831280158383131683831282161715612fc557612fc5614367565b6000808335601e1984360301811261449857600080fd5b83018035915067ffffffffffffffff8211156144b357600080fd5b602001915036819003821315610de357600080fd5b6001600160801b03828116828216039080821115612fc557612fc5614367565b808201828112600083128015821682158216171561450857614508614367565b505092915050565b60006020828403121561452257600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561080957610809614367565b600081600f0b60016001607f1b0319810361457357614573614367565b60000392915050565b60008261458b5761458b61433d565b600160ff1b8214600019841416156145a5576145a5614367565b50059056fea26469706673582212204f7d252a884fc67a7881e1a14b2e57dfcdec9c703445eb72ecb199cdd9b05f0964736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d"
    }
};
