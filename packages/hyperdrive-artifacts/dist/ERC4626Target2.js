export const ERC4626Target2 = {
    "abi": [
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
                },
                {
                    "internalType": "contract IERC4626",
                    "name": "__vault",
                    "type": "address"
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
            "inputs": [
                {
                    "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                    "name": "reason",
                    "type": "uint8"
                }
            ],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidPresentValue",
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
            "name": "UpdateLiquidityFailed",
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
        }
    ],
    "bytecode": {
        "object": "0x6102406040523480156200001257600080fd5b5060405162004a8138038062004a818339810160408190526200003591620001de565b600160005581516001600160a01b039081166080908152606080850151610180908152918501516101a05260a0808601516101c05260e08087015190915260c080870151905261010080870151909152918501805151909252815160209081015161012090815283516040908101516101409081529451909301516101609081529187015185166101e052918601516102005290850151600a80549185166001600160a01b03199283161790559185015160088054918516918416919091179055909301516009805491831691909416179092551661022052620002e6565b6040516101a081016001600160401b03811182821017156200014657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016457600080fd5b919050565b6000608082840312156200017c57600080fd5b604051608081016001600160401b0381118282101715620001ad57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610220811215620001f457600080fd5b610200808212156200020557600080fd5b6200020f62000114565b91506200021c856200014c565b82526200022c602086016200014c565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e0830152610100808601518184015250610120620002898187016200014c565b908301526101406200029d8682016200014c565b90830152610160620002b18682016200014c565b90830152610180620002c68787830162000169565b8184015250819350620002db8186016200014c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516146326200044f600039600081816117b801528181612433015281816124990152612515015260005050600050506000818160af0152818161032301526126a7015260008181611057015281816115c10152818161162601528181612096015281816120d2015281816123380152612681015260008181610b1801528181610b6501528181610d3001528181611485015261265b01526000611913015260008181611a3901528181611dee0152611e6701526000818161072201528181610cbf01528181611a0d0152611e3b015260008181610bb70152611db4015260008181610af601528181610b8601528181610d510152818161146301526126cd01526000818161066201528181610c450152818161152401528181611c510152612f1b015260006105be0152600050506146326000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046142b3565b610073565b60405190815260200160405180910390f35b61004e61006e3660046142b3565b61008c565b60006100818585858561009a565b90505b949350505050565b60006100818585858561030e565b60006100a461053c565b6100ad82610566565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f861059f565b9050854210156101195761011361010d6105b7565b826105ed565b50610125565b61012386826105ed565b505b61013a6101336002886109b0565b33876109e5565b600080600080600061014d8a878d610abe565b945094509450945094508a4210156101f65780600b60008282546101719190614328565b9091555061018490508a8685858f610dac565b600061018f8c610f2b565b90506101ad61019d8c610f6f565b6101a7908361433b565b82610f9d565b6101b687611050565b6101c4576101c460036110b0565b60006101cf886110d4565b9050806101ef57604051638bdf918d60e01b815260040160405180910390fd5b505061020d565b6102008487611243565b935061020b866110d4565b505b600061021a85888b611324565b90508981101561023d5760405163c972651760e01b815260040160405180910390fd5b8a8c85848a8d61024e6002866109b0565b61025b602083018361435b565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730886102928c88886113bf565b61029d8d89896113ee565b6102ad6040890160208a01614392565b6102c18a6102bb8d8f614328565b90611416565b6040805195865260208601949094529284019190915215156060830152608082015260a081018b905260c00160405180910390a450949b5050505050505050505050506100846001600055565b600061031861053c565b61032182610566565b7f00000000000000000000000000000000000000000000000000000000000000008410156103625760405163211ddda360e11b815260040160405180910390fd5b600061036c61059f565b9050854210156103875761038161010d6105b7565b50610393565b61039186826105ed565b505b6103a16101336001886109b0565b60008060008060006103b48a878d61142b565b9450945094509450945060008b90508b4210156104455781600b60008282546103dd9190614328565b909155506103f090508b878686856115aa565b60006103fb82610f2b565b90506104136104098d610f6f565b6101a790836143af565b600061041e896110d4565b90508061043e57604051638bdf918d60e01b815260040160405180910390fd5b505061045c565b61044f8588611243565b945061045a876110d4565b505b600061046986898c611324565b90508a81101561048c5760405163c972651760e01b815260040160405180910390fd5b8b888b61049a6001866109b0565b6104a7602083018361435b565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b802886104de8988886113bf565b6104e98a89896113ee565b6104f96040890160208a01614392565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100846001600055565b60026000540361055f57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610575602083018361435b565b6001600160a01b03160361059c5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105b2670de0b6b3a764000061179f565b905090565b60006105e37f0000000000000000000000000000000000000000000000000000000000000000426143ed565b6105b29042614401565b600082815260076020526040812080546001600160801b031615158061061257504284115b1561062857546001600160801b031690506109aa565b6106318361182c565b81546001600160801b0319166001600160801b039190911617815561065583611852565b50600090506007816106877f000000000000000000000000000000000000000000000000000000000000000088614401565b815260208101919091526040016000908120546001600160801b031691506106b06002876109b0565b6000818152600e602052604081205491925081156107f1575060016000806106da848a88846119f6565b9150915080600b60008282546106f09190614328565b9091555061070c90508460008461070681610f6f565b8e610dac565b6107168183614328565b91506107468483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611ac4565b915061075a610755838b611416565b611b0e565b6005805460029061077b9084906201000090046001600160701b0316614414565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107a88261182c565b600580546010906107ca908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006107fe60018a6109b0565b6000818152600e6020526040902054909150801561090e576001925060008061082a838c8a60016119f6565b9150915080600b60008282546108409190614328565b909155508c905061085d8460008561085781610f6f565b856115aa565b6108678284614401565b9250610876610755848e611416565b600580546002906108979084906201000090046001600160701b0316614414565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108c48361182c565b600580546010906108e6908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b82156109455761093a61092085610f6f565b61092983610f6f565b610933919061433b565b6000610f9d565b610943896110d4565b505b60006109508a611b34565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b60006001600160f81b038211156109da5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610a2857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a6b908490614401565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610ad288611c24565b9050610b3c610adf611c75565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611c96565b909850955091506000610baa610b50611c75565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d06565b9050610be08389610bdb847f0000000000000000000000000000000000000000000000000000000000000000611d1d565b611d4d565b15610bef57610bef60026110b0565b8a8a60008080610c0185888887611d8f565b9b5091945092509050610c148184614401565b610c1e9089614328565b9750610c2a8284614328565b610c34908c614328565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610c6f9190614401565b815260208101919091526040016000908120546001600160801b03169150428911610cb1576000898152600760205260409020546001600160801b0316610cb3565b895b9050610ce38b8784848e7f0000000000000000000000000000000000000000000000000000000000000000611ac4565b9650610cef8487614401565b9550670de0b6b3a7640000610d7584610d06611c75565b610d109190614328565b600154610d2e908c90600160801b90046001600160801b0316614401565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d06565b1115610d8557610d8560026110b0565b610d958787858786866000611ea3565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610dfa610df582610dd8670de0b6b3a764000086614454565b600454600160801b90046001600160801b031691908a6000611f42565b61182c565b600480546001600160801b03928316600160801b029216919091179055610e208661182c565b610e2a908261446b565b600380546001600160801b03928316600160801b029216919091179055610e508461182c565b60018054600090610e6b9084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610e988361200b565b60038054600090610ead908490600f0b61448b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550610edd8561182c565b60018054601090610eff908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000610f53600e6000610f3f6002866109b0565b815260200190815260200160002054610f6f565b610f65600e6000610f3f6001876109b0565b6109aa919061433b565b60006001600160ff1b03821115610f995760405163396ea70160e11b815260040160405180910390fd5b5090565b6000610fc6610fac8483612049565b610fb7846000612049565b610fc1919061433b565b61200b565b9050600081600f0b131561101b5760028054829190600090610ff29084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561104b57611030816144b8565b60028054600090610ff29084906001600160801b031661446b565b505050565b600061107c7f00000000000000000000000000000000000000000000000000000000000000008361205f565b60025461109291906001600160801b0316614328565b6001546110a8906001600160801b031684611416565b101592915050565b80604051633c06d78b60e11b81526004016110cb91906144de565b60405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161111f916001600160801b031690614401565b9050806000036111325750600192915050565b600061113d84612074565b905080600003611151575060019392505050565b60008061115f838588612116565b91509150806111745750600095945050505050565b60008061118084612223565b9150915061118d8261182c565b600680546000906111a89084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111d58161182c565b600680546010906111f7908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061123561122782610f6f565b61123090614506565b61230b565b506001979650505050505050565b600080600061125184611852565b909250905060006112628686611416565b90508183111561127a576112778683856123fc565b95505b8281101561128c578083039250611291565b600092505b61129a83611b0e565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156112ed578690036112f1565b5060005b6112fa8161182c565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806113318585611416565b905061133c8161241a565b9450846000036113505760009150506113b8565b6113606040840160208501614392565b1561138f5761138885611376602086018661435b565b6113836040870187614522565b61246a565b91506113b6565b6113b2856113a0602086018661435b565b6113ad6040870187614522565b612508565b8491505b505b9392505050565b60006113d16040830160208401614392565b156113dd5750826113b8565b6113e78484611416565b90506113b8565b60006114006040830160208401614392565b1561140f576113e78484612542565b50826113b8565b60006113b88383670de0b6b3a76400006123fc565b600080600080600080600061143f88611c24565b90506114a961144c611c75565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000612557565b9098509650915060008080806114c0610b50611c75565b90508c6114cf8f878484611d8f565b9a5091965090945092506114e38486614401565b6114ed9088614401565b96506114f98386614328565b611503908c614401565b9a5061150f888c614328565b995050505050505061159585858385600760007f00000000000000000000000000000000000000000000000000000000000000008e61154e9190614401565b81526020810191909152604001600020546001600160801b0316428d1161158c5760008d8152600760205260409020546001600160801b031661158e565b8d5b6001611ea3565b999d939c50919a509098509095505050505050565b6001546001600160801b0316838110806115ec57507f00000000000000000000000000000000000000000000000000000000000000006115ea8583614401565b105b156115fb576115fb60036110b0565b6003549084900390600f0b611610848261433b565b90508361161c86610f6f565b13801561165157507f000000000000000000000000000000000000000000000000000000000000000061164f83836125ab565b105b156116605761166060016110b0565b600254600160801b90046001600160801b03166116a2610df58261168c670de0b6b3a764000088614454565b6004546001600160801b031691908c6000611f42565b600480546001600160801b0319166001600160801b03929092169190911790556116cc8882614401565b90506116d78161182c565b600280546001600160801b03928316600160801b0292169190911790556116fd8361182c565b600180546001600160801b0319166001600160801b03929092169190911790556117268261200b565b600380546001600160801b0319166001600160801b039290921691909117905561174f8761182c565b60018054601090611771908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015611808573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109aa9190614569565b6000600160801b8210610f9957604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611875908490600160801b90046001600160801b0316611416565b6005546201000090046001600160701b031692509050818111156119f157600061189f8383614401565b90506118ae610df582866125d3565b600580546010906118d0908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611909858361254290919063ffffffff16565b90506000611937827f0000000000000000000000000000000000000000000000000000000000000000611416565b905080600b600082825461194b9190614328565b9091555061195b90508183614401565b91506119668261182c565b600180546000906119819084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119ae826125e8565b600380546000906119c3908490600f0b61448b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611a038686612542565b91506000611a31837f0000000000000000000000000000000000000000000000000000000000000000611416565b9050611a5d817f0000000000000000000000000000000000000000000000000000000000000000611416565b91508315611a8057611a6f8282614401565b611a799084614401565b9250611a97565b611a8a8282614401565b611a949084614328565b92505b84861015611aba57611aaa8387876123fc565b9250611ab78287876123fc565b91505b5094509492505050565b600080611adc84611ad68a888a6123fc565b90612542565b9050611ae98884866123fc565b611af39082614328565b905086811115611b035786810391505b509695505050505050565b6000600160701b8210610f995760405163086b151760e11b815260040160405180910390fd5b600080600080611b4b611b4686612612565b61274c565b9150915080611b61575060009485945092505050565b6000808611611b71576000611b7b565b611b7b8387611416565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611be69190614328565b611bf09190614401565b905080600003611c095750600096879650945050505050565b6000611c158383612542565b98600198509650505050505050565b600080611c2f6105b7565b9050808311611c3f576000611c49565b611c498184614401565b91506113b8827f0000000000000000000000000000000000000000000000000000000000000000612542565b6001546003546000916105b2916001600160801b0390911690600f0b6125ab565b60008080611cb7611caf88670de0b6b3a7640000614401565b8990876127d9565b90508615611cf957611cc9888861205f565b9150611cea8a8a84611ce38a670de0b6b3a7640000614401565b89896127ff565b9250611cf68382614328565b90505b9750975097945050505050565b600061008182611d178588886123fc565b90612824565b6000611d3b611d3484670de0b6b3a7640000614401565b839061205f565b6113b890670de0b6b3a7640000614401565b600080611d8485611d5c611c75565b611d669190614328565b600154610d2e908790600160801b90046001600160801b0316614401565b909210949350505050565b6000808080611de68786611ddf8b611dd9611db28c670de0b6b3a7640000614401565b7f00000000000000000000000000000000000000000000000000000000000000009061205f565b9061205f565b91906127d9565b9350611e12847f0000000000000000000000000000000000000000000000000000000000000000611416565b91506000611e33611e2b89670de0b6b3a7640000614401565b8a90886127d9565b9050611e5f817f000000000000000000000000000000000000000000000000000000000000000061205f565b9350611e8b847f0000000000000000000000000000000000000000000000000000000000000000611416565b611e959084614328565b915050945094509450949050565b60008060008060008088881015611f12578615611ec857611ec58d898b6123fc565b9c505b611ed38c898b6123fc565b9b50611ede8b610f6f565b611ee78d610f6f565b611ef1919061433b565b9050611efe8b898b6123fc565b9a50611f0b8a898b6123fc565b9950611f31565b611f1b8b610f6f565b611f248d610f6f565b611f2e919061433b565b90505b9b9c9a9b999a975050505050505050565b600082600003611f53575084612002565b8115611fc557611f84611f668487614328565b611f708587611416565b611f7a888a611416565b611ad69190614328565b90506000611f928588612899565b90506000611fa086896128a8565b905081831015611fb257819250611fbe565b80831115611fbe578092505b5050612002565b828503611fd457506000612002565b611fff611fe18487614401565b611feb858761205f565b611ff5888a611416565b611ad69190614401565b90505b95945050505050565b600060016001607f1b0319821280159061202c575060016001607f1b038213155b610f995760405163a5353be560e01b815260040160405180910390fd5b600081831361205857816113b8565b5090919050565b60006113b88383670de0b6b3a76400006127d9565b600254600090819061208f906001600160801b0316846125d3565b90506120bb7f000000000000000000000000000000000000000000000000000000000000000082614328565b6001546001600160801b03161115612110576001547f0000000000000000000000000000000000000000000000000000000000000000906121069083906001600160801b0316614401565b6113b89190614401565b50919050565b61211e614200565b60008061212a84612612565b905060006121378261274c565b935090508261214c57506000915061221b9050565b600061217361216e84610160015185610140015161141690919063ffffffff16565b610f6f565b61219361216e85610120015186610100015161205f90919063ffffffff16565b61219d919061433b565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60008060008061223b8560c001518660e001516128b7565b9150915080612251575060009485945092505050565b600061225d86846128f6565b9250905081158061226c575080155b1561227f57506000958695509350505050565b600061228b8783612a05565b9050806000036122a45750600096879650945050505050565b866060015181116122ba57969095509350505050565b50606086015160006122cd888685612ad6565b9050806000036122e7575060009788975095505050505050565b8281106122fe575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b9004166000808061235d8686867f00000000000000000000000000000000000000000000000000000000000000008b612e26565b925092509250858314612394576123738361182c565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146123c5576123a48261200b565b600380546001600160801b0319166001600160801b03929092169190911790555b8381146123f3576123d58161182c565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b600082600019048411830215820261241357600080fd5b5091020490565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024016117eb565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156124e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100819190614569565b61253c6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612e6d565b50505050565b60006113b883670de0b6b3a7640000846123fc565b6000808061257861257088670de0b6b3a7640000614401565b8990876123fc565b90508615611cf95761258a8888611416565b9150611cea8a8a846125a48a670de0b6b3a7640000614401565b8989612ebf565b6000806125b884846128b7565b9092509050806125cc576125cc60016110b0565b5092915050565b60006113b883670de0b6b3a7640000846127d9565b600060016001607f1b03821115610f995760405163a5353be560e01b815260040160405180910390fd5b61261a614252565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916127129116612ed0565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261274492900416612ed0565b905292915050565b600080600080600061275d86612f46565b915091508061277457506000958695509350505050565b6127818660a00151610f6f565b61278a87613266565b836127988960000151610f6f565b6127a291906143af565b6127ac91906143af565b6127b6919061433b565b9250505060008112156127cf5750600093849350915050565b9360019350915050565b60008260001904841183021582026127f057600080fd5b50910281810615159190040190565b6000806128108888888888886132ca565b909250905080611b0357611b0360006110b0565b60008160000361283d5750670de0b6b3a76400006109aa565b8260000361284d575060006109aa565b600061285883610f6f565b9050600061286d61286886610f6f565b6133ab565b9050818102612884670de0b6b3a764000082614582565b905061288f816135d1565b9695505050505050565b600081831161211057826113b8565b600081831161205857816113b8565b6000806000836128c686610f6f565b6128d0919061433b565b905060008112156128e85760008092509250506128ef565b9150600190505b9250929050565b60008060008460a0015112612913575050608082015160016128ef565b60008460a0015161292390614506565b9050600061295f85876101000151886000015160e00151670de0b6b3a764000061294d9190614401565b89516060810151608090910151613766565b9350905082158061296e575080155b15612981576000809350935050506128ef565b600061298d83836125d3565b9050670de0b6b3a764000081116129c95780670de0b6b3a76400000394506129c28760c001518661141690919063ffffffff16565b94506129d8565b600080945094505050506128ef565b86608001518511156129f75786608001516001945094505050506128ef565b506001925050509250929050565b600080612a3b8460c001518560e00151866101000151876000015160a00151612a2d88610f6f565b612a3690614506565b613812565b87516040810192909252602082019290925291909152905080612a625760009150506109aa565b6000612a71856000015161274c565b9250905081612a85576000925050506109aa565b84602001518110612a9b576000925050506109aa565b600085606001518660400151612ab19190614328565b9050612acc828760200151836123fc9092919063ffffffff16565b61288f9082614401565b60008084606001518560400151612aed9190614328565b60208601516060870151919250600091612b0791846123fc565b90508560a00151600003612b1e5791506113b89050565b60005b6004811015612e1c57612b348286612899565b91506000612b5d8860c001518960e001518a61010001518b6000015160a00151612a2d88610f6f565b8b516040810192909252602082019290925291909152905080612b875760009450505050506113b8565b6000612b96896000015161392a565b9050612ba389828761395a565b15612baf575050612e1c565b60008960a001511315612d1357885180516020820151604083015160a084015160e0909401518d94600094612c099490939092909190612bf790670de0b6b3a7640000614401565b875160608101516080909101516139c6565b9450905083612c225760009750505050505050506113b8565b808260a0015110612d1057612c3682613ab2565b909650935083612c505760009750505050505050506113b8565b612c758260c001518360e00151846101000151856000015160a00151612a2d8b610f6f565b85516040810192909252602082019290925291909152935083612ca25760009750505050505050506113b8565b815180516020820151604083015160a0909301518e5160e00151612cd4949190612bf790670de0b6b3a7640000614401565b9450905083612ced5760009750505050505050506113b8565b8a60a001518111612d0757859750505050505050506113b8565b50505050612b21565b50505b6000612d248a8a8c60a00151613b88565b93509050821580612d3d5750670de0b6b3a76400008110155b15612d5157600096505050505050506113b8565b80670de0b6b3a76400000390506000612d7e61216e8c604001518d6020015161205f90919063ffffffff16565b612d8b61216e858a611416565b612d95919061433b565b90506000811315612dbf57612dae87611ad68385612542565b612db89087614328565b9550612e0d565b6000811215612e04576000612dd988611ad6858186614506565b905086811015612ded578087039650612dfe565b6000985050505050505050506113b8565b50612e0d565b50505050612e1c565b84600101945050505050612b21565b5095945050505050565b600080600080612e398989898989613812565b9296509094509250905080612e6157604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261104b908490613ee2565b600080612810888888888888613f45565b600080670de0b6b3a7640000612ee46105b7565b612eee9190614454565b9050808311612efe576000612f08565b612f088184614401565b91506113b8612f3f670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614454565b8390612542565b6000806000612f6b61216e85610160015186610140015161141690919063ffffffff16565b612f8b61216e86610120015187610100015161205f90919063ffffffff16565b612f95919061433b565b9050600080612fac866000015187602001516128b7565b9150915080612fc357506000958695509350505050565b60008313156131045760008390506000613011886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006130029190614401565b8d606001518e608001516139c6565b935090508261302a575060009788975095505050505050565b8181106130c8576000613064858a60400151858c60e00151670de0b6b3a76400006130559190614401565b8d606001518e60800151613f45565b945090508315801561307957508860c0015183105b156130905750600098600198509650505050505050565b836130a657506000988998509650505050505050565b6130af81610f6f565b6130b890614506565b9960019950975050505050505050565b60008860200151126130f0576130e78860a001518561216e9190614401565b611c1590614506565b60a088015188516130e79161216e91614401565b600083121561325757600061311884614506565b9050600061314c8489604001518a60e00151670de0b6b3a764000061313d9190614401565b8b606001518c60800151613766565b9350905082613165575060009788975095505050505050565b8181106131ea57600061319f858a60400151858c60e00151670de0b6b3a76400006131909190614401565b8d606001518e608001516132ca565b94509050831580156131b457508860c0015183105b156131cb5750600098600198509650505050505050565b836131e157506000988998509650505050505050565b6130b881610f6f565b600061321c858a604001518b60e00151670de0b6b3a764000061320d9190614401565b8c606001518d60800151614005565b945090508361323657506000988998509650505050505050565b6130b861324d8a606001518486611ad69190614401565b61216e9083614328565b50600095600195509350505050565b600061329961216e836101200151670de0b6b3a76400006132879190614401565b606085015161010086015191906127d9565b610f6561216e846101600151670de0b6b3a76400006132b89190614401565b606086015161014087015191906123fc565b60008060006132dc89898888886140b4565b9050868810156132f35760008092509250506133a0565b96869003966133028887612824565b9750878110156133195760008092509250506133a0565b8781036133278186886127d9565b9050670de0b6b3a7640000811061335b5761335461334d670de0b6b3a7640000896125d3565b8290612824565b9050613373565b61337061334d670de0b6b3a764000089612542565b90505b61337d81866125d3565b905089811015613395576000809350935050506133a0565b899003925060019150505b965096945050505050565b60008082136133cd5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134509084901c610f6f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136135ec57506000919050565b680755bf798b4a1bf1e58212613615576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061288f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f6f565b600080600061377888888888886140b4565b905060006137a3670de0b6b3a76400006137928888612542565b61379c9190614328565b83906125d3565b9050670de0b6b3a764000081106137d0576137c961334d670de0b6b3a7640000896125d3565b90506137e8565b6137e561334d670de0b6b3a764000089612542565b90505b808810156137fe57600080935093505050613808565b8703925060019150505b9550959350505050565b600080600080846000036138315750879250869150859050600161391e565b60008561383d8b610f6f565b61384791906143af565b905061385287610f6f565b81121561386d5760008060008094509450945094505061391e565b8094506000891261388d5761388661216e868b8d6123fc565b93506138b0565b6138a461216e61389c8b614506565b87908d6127d9565b6138ad90614506565b93505b6000806138bd8c8c6128b7565b91509150806138dc57600080600080965096509650965050505061391e565b60006138e888886128b7565b92509050816139085760008060008097509750975097505050505061391e565b6139138b82856123fc565b955060019450505050505b95509550955095915050565b60008060006139388461274c565b91509150806125cc57604051635516328b60e11b815260040160405180910390fd5b602083015160009061396c90846125d3565b604085015161397c908490612542565b10158015610084575060208401516139ac90846139a5633b9aca00670de0b6b3a7640000614328565b91906123fc565b60408501516139bc9084906125d3565b1115949350505050565b60008060008812156139e8576139db88614506565b6139e59087614328565b95505b60006139f48a8a6125ab565b90506000613a05828a8989896140e3565b90506000613a22613a1a89611d17898d61205f565b8890886127d9565b905080821015613a3b5760008094509450505050613aa6565b808203670de0b6b3a76400008110613a6957613a6261334d670de0b6b3a76400008b612542565b9050613a81565b613a7e61334d670de0b6b3a76400008b6125d3565b90505b8a811015613a99576000809550955050505050613aa6565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113613acc57506000928392509050565b6000613adb8460000151613266565b90506000613b07856040015186606001518760400151613afb9190614328565b602088015191906127d9565b905060008212613b2e5780821015613b2157819003613b44565b5060009485945092505050565b613b3782614506565b613b419082614328565b90505b60e085015160c0860151613b599183906127d9565b9050808560c001511015613b74575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613bac57855160400151613ba5908590614328565b9050613be7565b6000613bb785614506565b875160400151909150811015613bd7578651604001518190039150613be5565b60008093509350505061221b565b505b855180516020909101516000918291613c0091906128b7565b9150915080613c18576000809450945050505061221b565b875160e0810151604090910151600091613c4d91613c4191613c3a9190612824565b8a90611416565b6101008b0151906125d3565b895160e0810151608090910151613c7891613c6c91611d179088611416565b8b5160600151906125d3565b613c829190614328565b90506000613cba613cae613ca78c6000015160e001518861282490919063ffffffff16565b8b9061205f565b6101008c015190612542565b905080821015613cd55760008096509650505050505061221b565b80820391506000613d17858c60000151604001518d6000015160e00151670de0b6b3a7640000613d059190614401565b8e5160608101516080909101516140b4565b90506000613d418c6000015160e00151670de0b6b3a7640000613d3a9190614401565b8890612824565b905080821015613d5e57600080985098505050505050505061221b565b8b51608081015160609091015191830391613d7a9183916127d9565b9050670de0b6b3a76400008110613dbe578b5160e00151613db79061334d90613dab90670de0b6b3a7640000614401565b8e5160e00151906125d3565b9050613ded565b8b5160e00151613dea9061334d90613dde90670de0b6b3a7640000614401565b8e5160e0015190612542565b90505b8b5160600151613e0090859083906127d9565b935083670de0b6b3a76400001115613e245783670de0b6b3a7640000039350613e38565b60006001985098505050505050505061221b565b60008c60e0015112613e9a5760c08c015160e08d0151613e57916125d3565b9250670de0b6b3a76400008310613e7b57600080985098505050505050505061221b565b670de0b6b3a76400009290920391613e938484611416565b9350613ecf565b613ecc613eb38d60c001518e60e00151611ad690614506565b613ec590670de0b6b3a7640000614328565b8590611416565b93505b50919a60019a5098505050505050505050565b6000613ef76001600160a01b03841683614108565b90508051600014158015613f1c575080806020019051810190613f1a91906145b0565b155b1561104b57604051635274afe760e01b81526001600160a01b03841660048201526024016110cb565b6000806000613f5789898888886140b4565b9050613f6786611d17898b614328565b975087811015613f7e5760008092509250506133a0565b878103613f8c8186886127d9565b9050670de0b6b3a76400008110613fb957613fb261334d670de0b6b3a7640000896125d3565b9050613fd1565b613fce61334d670de0b6b3a764000089612542565b90505b613fdb81866125d3565b9050808a1015613ff3576000809350935050506133a0565b90980398600198509650505050505050565b600080600061401788888888886140e3565b9050600061403b670de0b6b3a764000061403188886125d3565b612f3f9190614328565b9050670de0b6b3a764000081106140685761406161334d670de0b6b3a764000089612542565b9050614080565b61407d61334d670de0b6b3a7640000896125d3565b90505b61408a8186612542565b9050888110156140a257600080935093505050613808565b97909703976001975095505050505050565b60006140c08585612824565b6140d96140d186611d17868b61205f565b8590856127d9565b611fff9190614328565b60006140ef8585612824565b6140d961410086611d17868b611416565b8590856123fc565b60606113b88383600084600080856001600160a01b0316848660405161412e91906145cd565b60006040518083038185875af1925050503d806000811461416b576040519150601f19603f3d011682016040523d82523d6000602084013e614170565b606091505b509150915061288f8683836060826141905761418b826141d7565b6113b8565b81511580156141a757506001600160a01b0384163b155b156141d057604051639996b31560e01b81526001600160a01b03851660048201526024016110cb565b50806113b8565b8051156141e75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280614214614252565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156142c957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156142f557600080fd5b85016060818803121561430757600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156109aa576109aa614312565b81810360008312801583831316838312821617156125cc576125cc614312565b60006020828403121561436d57600080fd5b81356001600160a01b03811681146113b857600080fd5b801515811461059c57600080fd5b6000602082840312156143a457600080fd5b81356113b881614384565b80820182811260008312801582168215821617156143cf576143cf614312565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826143fc576143fc6143d7565b500690565b818103818111156109aa576109aa614312565b6001600160701b038181168382160190808211156125cc576125cc614312565b6001600160801b038181168382160190808211156125cc576125cc614312565b80820281158282048414176109aa576109aa614312565b6001600160801b038281168282160390808211156125cc576125cc614312565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156109aa576109aa614312565b600081600f0b60016001607f1b031981036144d5576144d5614312565b60000392915050565b602081016004831061450057634e487b7160e01b600052602160045260246000fd5b91905290565b6000600160ff1b820161451b5761451b614312565b5060000390565b6000808335601e1984360301811261453957600080fd5b83018035915067ffffffffffffffff82111561455457600080fd5b6020019150368190038213156128ef57600080fd5b60006020828403121561457b57600080fd5b5051919050565b600082614591576145916143d7565b600160ff1b8214600019841416156145ab576145ab614312565b500590565b6000602082840312156145c257600080fd5b81516113b881614384565b6000825160005b818110156145ee57602081860181015185830152016145d4565b50600092019182525091905056fea26469706673582212203c17adb329231b9c280c4bc204914a27116185501308f7dcb363e35c19f7a04c64736f6c63430008140033",
        "sourceMap": "755:375:48:-:0;;;987:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:171;1917:7;:21;5192:17:120;;-1:-1:-1;;;;;5179:30:120;;;;;;;5299;;;;;5273:56;;;;5752:28;;;;5728:52;;6068:32;;;;;6040:60;;6283:26;;;;;6261:48;;;6339:24;;;;;6319:44;;-1:-1:-1;6388:19:120;;;;6373:34;;;6472:12;;;;;:18;6460:30;;;6511:12;;-1:-1:-1;6511:17:120;;;;-1:-1:-1;6500:28:120;;;6557:12;;-1:-1:-1;6557:25:120;;;;6538:44;;;;6615:12;;:29;;;;6592:52;;;;-1:-1:-1;;;6721:21:120;6704:38;;;;-1:-1:-1;;;6770:22:120;6752:40;;6895:18;;;;6881:11;:32;;;;;-1:-1:-1;;;;;;6881:32:120;;;;;;6939:20;;;;6923:13;:36;;;;;;;;;;;;;;6987:22;;;;6969:15;:40;;;;;;;;;;;;;1508:16:44;;;755:375:48;;14:347:235;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:235;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:235;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:235;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1490::-;1368:6;1376;1420:9;1411:7;1407:23;1450:3;1446:2;1442:12;1439:32;;;1467:1;1464;1457:12;1439:32;1490:6;1516:2;1512;1508:11;1505:31;;;1532:1;1529;1522:12;1505:31;1558:17;;:::i;:::-;1545:30;;1598:48;1636:9;1598:48;:::i;:::-;1591:5;1584:63;1679:57;1732:2;1721:9;1717:18;1679:57;:::i;:::-;1674:2;1667:5;1663:14;1656:81;1790:2;1779:9;1775:18;1769:25;1764:2;1757:5;1753:14;1746:49;1848:2;1837:9;1833:18;1827:25;1822:2;1815:5;1811:14;1804:49;1907:3;1896:9;1892:19;1886:26;1880:3;1873:5;1869:15;1862:51;1967:3;1956:9;1952:19;1946:26;1940:3;1933:5;1929:15;1922:51;2027:3;2016:9;2012:19;2006:26;2000:3;1993:5;1989:15;1982:51;2087:3;2076:9;2072:19;2066:26;2060:3;2053:5;2049:15;2042:51;2112:3;2168:2;2157:9;2153:18;2147:25;2142:2;2135:5;2131:14;2124:49;;2192:3;2227:57;2280:2;2269:9;2265:18;2227:57;:::i;:::-;2211:14;;;2204:81;2304:3;2339:57;2377:18;;;2339:57;:::i;:::-;2323:14;;;2316:81;2416:3;2451:57;2489:18;;;2451:57;:::i;:::-;2435:14;;;2428:81;2528:3;2563:62;2617:7;2597:18;;;2563:62;:::i;:::-;2558:2;2551:5;2547:14;2540:86;;2645:5;2635:15;;2669:57;2722:2;2711:9;2707:18;2669:57;:::i;:::-;2659:67;;;;1242:1490;;;;;:::o;:::-;755:375:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e6100493660046142b3565b610073565b60405190815260200160405180910390f35b61004e61006e3660046142b3565b61008c565b60006100818585858561009a565b90505b949350505050565b60006100818585858561030e565b60006100a461053c565b6100ad82610566565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f861059f565b9050854210156101195761011361010d6105b7565b826105ed565b50610125565b61012386826105ed565b505b61013a6101336002886109b0565b33876109e5565b600080600080600061014d8a878d610abe565b945094509450945094508a4210156101f65780600b60008282546101719190614328565b9091555061018490508a8685858f610dac565b600061018f8c610f2b565b90506101ad61019d8c610f6f565b6101a7908361433b565b82610f9d565b6101b687611050565b6101c4576101c460036110b0565b60006101cf886110d4565b9050806101ef57604051638bdf918d60e01b815260040160405180910390fd5b505061020d565b6102008487611243565b935061020b866110d4565b505b600061021a85888b611324565b90508981101561023d5760405163c972651760e01b815260040160405180910390fd5b8a8c85848a8d61024e6002866109b0565b61025b602083018361435b565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730886102928c88886113bf565b61029d8d89896113ee565b6102ad6040890160208a01614392565b6102c18a6102bb8d8f614328565b90611416565b6040805195865260208601949094529284019190915215156060830152608082015260a081018b905260c00160405180910390a450949b5050505050505050505050506100846001600055565b600061031861053c565b61032182610566565b7f00000000000000000000000000000000000000000000000000000000000000008410156103625760405163211ddda360e11b815260040160405180910390fd5b600061036c61059f565b9050854210156103875761038161010d6105b7565b50610393565b61039186826105ed565b505b6103a16101336001886109b0565b60008060008060006103b48a878d61142b565b9450945094509450945060008b90508b4210156104455781600b60008282546103dd9190614328565b909155506103f090508b878686856115aa565b60006103fb82610f2b565b90506104136104098d610f6f565b6101a790836143af565b600061041e896110d4565b90508061043e57604051638bdf918d60e01b815260040160405180910390fd5b505061045c565b61044f8588611243565b945061045a876110d4565b505b600061046986898c611324565b90508a81101561048c5760405163c972651760e01b815260040160405180910390fd5b8b888b61049a6001866109b0565b6104a7602083018361435b565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b802886104de8988886113bf565b6104e98a89896113ee565b6104f96040890160208a01614392565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100846001600055565b60026000540361055f57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610575602083018361435b565b6001600160a01b03160361059c5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105b2670de0b6b3a764000061179f565b905090565b60006105e37f0000000000000000000000000000000000000000000000000000000000000000426143ed565b6105b29042614401565b600082815260076020526040812080546001600160801b031615158061061257504284115b1561062857546001600160801b031690506109aa565b6106318361182c565b81546001600160801b0319166001600160801b039190911617815561065583611852565b50600090506007816106877f000000000000000000000000000000000000000000000000000000000000000088614401565b815260208101919091526040016000908120546001600160801b031691506106b06002876109b0565b6000818152600e602052604081205491925081156107f1575060016000806106da848a88846119f6565b9150915080600b60008282546106f09190614328565b9091555061070c90508460008461070681610f6f565b8e610dac565b6107168183614328565b91506107468483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611ac4565b915061075a610755838b611416565b611b0e565b6005805460029061077b9084906201000090046001600160701b0316614414565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107a88261182c565b600580546010906107ca908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006107fe60018a6109b0565b6000818152600e6020526040902054909150801561090e576001925060008061082a838c8a60016119f6565b9150915080600b60008282546108409190614328565b909155508c905061085d8460008561085781610f6f565b856115aa565b6108678284614401565b9250610876610755848e611416565b600580546002906108979084906201000090046001600160701b0316614414565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108c48361182c565b600580546010906108e6908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b82156109455761093a61092085610f6f565b61092983610f6f565b610933919061433b565b6000610f9d565b610943896110d4565b505b60006109508a611b34565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b60006001600160f81b038211156109da5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610a2857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a6b908490614401565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610ad288611c24565b9050610b3c610adf611c75565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611c96565b909850955091506000610baa610b50611c75565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d06565b9050610be08389610bdb847f0000000000000000000000000000000000000000000000000000000000000000611d1d565b611d4d565b15610bef57610bef60026110b0565b8a8a60008080610c0185888887611d8f565b9b5091945092509050610c148184614401565b610c1e9089614328565b9750610c2a8284614328565b610c34908c614328565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610c6f9190614401565b815260208101919091526040016000908120546001600160801b03169150428911610cb1576000898152600760205260409020546001600160801b0316610cb3565b895b9050610ce38b8784848e7f0000000000000000000000000000000000000000000000000000000000000000611ac4565b9650610cef8487614401565b9550670de0b6b3a7640000610d7584610d06611c75565b610d109190614328565b600154610d2e908c90600160801b90046001600160801b0316614401565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d06565b1115610d8557610d8560026110b0565b610d958787858786866000611ea3565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610dfa610df582610dd8670de0b6b3a764000086614454565b600454600160801b90046001600160801b031691908a6000611f42565b61182c565b600480546001600160801b03928316600160801b029216919091179055610e208661182c565b610e2a908261446b565b600380546001600160801b03928316600160801b029216919091179055610e508461182c565b60018054600090610e6b9084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610e988361200b565b60038054600090610ead908490600f0b61448b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550610edd8561182c565b60018054601090610eff908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000610f53600e6000610f3f6002866109b0565b815260200190815260200160002054610f6f565b610f65600e6000610f3f6001876109b0565b6109aa919061433b565b60006001600160ff1b03821115610f995760405163396ea70160e11b815260040160405180910390fd5b5090565b6000610fc6610fac8483612049565b610fb7846000612049565b610fc1919061433b565b61200b565b9050600081600f0b131561101b5760028054829190600090610ff29084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561104b57611030816144b8565b60028054600090610ff29084906001600160801b031661446b565b505050565b600061107c7f00000000000000000000000000000000000000000000000000000000000000008361205f565b60025461109291906001600160801b0316614328565b6001546110a8906001600160801b031684611416565b101592915050565b80604051633c06d78b60e11b81526004016110cb91906144de565b60405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161111f916001600160801b031690614401565b9050806000036111325750600192915050565b600061113d84612074565b905080600003611151575060019392505050565b60008061115f838588612116565b91509150806111745750600095945050505050565b60008061118084612223565b9150915061118d8261182c565b600680546000906111a89084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111d58161182c565b600680546010906111f7908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061123561122782610f6f565b61123090614506565b61230b565b506001979650505050505050565b600080600061125184611852565b909250905060006112628686611416565b90508183111561127a576112778683856123fc565b95505b8281101561128c578083039250611291565b600092505b61129a83611b0e565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156112ed578690036112f1565b5060005b6112fa8161182c565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806113318585611416565b905061133c8161241a565b9450846000036113505760009150506113b8565b6113606040840160208501614392565b1561138f5761138885611376602086018661435b565b6113836040870187614522565b61246a565b91506113b6565b6113b2856113a0602086018661435b565b6113ad6040870187614522565b612508565b8491505b505b9392505050565b60006113d16040830160208401614392565b156113dd5750826113b8565b6113e78484611416565b90506113b8565b60006114006040830160208401614392565b1561140f576113e78484612542565b50826113b8565b60006113b88383670de0b6b3a76400006123fc565b600080600080600080600061143f88611c24565b90506114a961144c611c75565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000612557565b9098509650915060008080806114c0610b50611c75565b90508c6114cf8f878484611d8f565b9a5091965090945092506114e38486614401565b6114ed9088614401565b96506114f98386614328565b611503908c614401565b9a5061150f888c614328565b995050505050505061159585858385600760007f00000000000000000000000000000000000000000000000000000000000000008e61154e9190614401565b81526020810191909152604001600020546001600160801b0316428d1161158c5760008d8152600760205260409020546001600160801b031661158e565b8d5b6001611ea3565b999d939c50919a509098509095505050505050565b6001546001600160801b0316838110806115ec57507f00000000000000000000000000000000000000000000000000000000000000006115ea8583614401565b105b156115fb576115fb60036110b0565b6003549084900390600f0b611610848261433b565b90508361161c86610f6f565b13801561165157507f000000000000000000000000000000000000000000000000000000000000000061164f83836125ab565b105b156116605761166060016110b0565b600254600160801b90046001600160801b03166116a2610df58261168c670de0b6b3a764000088614454565b6004546001600160801b031691908c6000611f42565b600480546001600160801b0319166001600160801b03929092169190911790556116cc8882614401565b90506116d78161182c565b600280546001600160801b03928316600160801b0292169190911790556116fd8361182c565b600180546001600160801b0319166001600160801b03929092169190911790556117268261200b565b600380546001600160801b0319166001600160801b039290921691909117905561174f8761182c565b60018054601090611771908490600160801b90046001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015611808573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109aa9190614569565b6000600160801b8210610f9957604051630f0af95160e11b815260040160405180910390fd5b6005546000908190611875908490600160801b90046001600160801b0316611416565b6005546201000090046001600160701b031692509050818111156119f157600061189f8383614401565b90506118ae610df582866125d3565b600580546010906118d0908490600160801b90046001600160801b031661446b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611909858361254290919063ffffffff16565b90506000611937827f0000000000000000000000000000000000000000000000000000000000000000611416565b905080600b600082825461194b9190614328565b9091555061195b90508183614401565b91506119668261182c565b600180546000906119819084906001600160801b0316614434565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119ae826125e8565b600380546000906119c3908490600f0b61448b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611a038686612542565b91506000611a31837f0000000000000000000000000000000000000000000000000000000000000000611416565b9050611a5d817f0000000000000000000000000000000000000000000000000000000000000000611416565b91508315611a8057611a6f8282614401565b611a799084614401565b9250611a97565b611a8a8282614401565b611a949084614328565b92505b84861015611aba57611aaa8387876123fc565b9250611ab78287876123fc565b91505b5094509492505050565b600080611adc84611ad68a888a6123fc565b90612542565b9050611ae98884866123fc565b611af39082614328565b905086811115611b035786810391505b509695505050505050565b6000600160701b8210610f995760405163086b151760e11b815260040160405180910390fd5b600080600080611b4b611b4686612612565b61274c565b9150915080611b61575060009485945092505050565b6000808611611b71576000611b7b565b611b7b8387611416565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611be69190614328565b611bf09190614401565b905080600003611c095750600096879650945050505050565b6000611c158383612542565b98600198509650505050505050565b600080611c2f6105b7565b9050808311611c3f576000611c49565b611c498184614401565b91506113b8827f0000000000000000000000000000000000000000000000000000000000000000612542565b6001546003546000916105b2916001600160801b0390911690600f0b6125ab565b60008080611cb7611caf88670de0b6b3a7640000614401565b8990876127d9565b90508615611cf957611cc9888861205f565b9150611cea8a8a84611ce38a670de0b6b3a7640000614401565b89896127ff565b9250611cf68382614328565b90505b9750975097945050505050565b600061008182611d178588886123fc565b90612824565b6000611d3b611d3484670de0b6b3a7640000614401565b839061205f565b6113b890670de0b6b3a7640000614401565b600080611d8485611d5c611c75565b611d669190614328565b600154610d2e908790600160801b90046001600160801b0316614401565b909210949350505050565b6000808080611de68786611ddf8b611dd9611db28c670de0b6b3a7640000614401565b7f00000000000000000000000000000000000000000000000000000000000000009061205f565b9061205f565b91906127d9565b9350611e12847f0000000000000000000000000000000000000000000000000000000000000000611416565b91506000611e33611e2b89670de0b6b3a7640000614401565b8a90886127d9565b9050611e5f817f000000000000000000000000000000000000000000000000000000000000000061205f565b9350611e8b847f0000000000000000000000000000000000000000000000000000000000000000611416565b611e959084614328565b915050945094509450949050565b60008060008060008088881015611f12578615611ec857611ec58d898b6123fc565b9c505b611ed38c898b6123fc565b9b50611ede8b610f6f565b611ee78d610f6f565b611ef1919061433b565b9050611efe8b898b6123fc565b9a50611f0b8a898b6123fc565b9950611f31565b611f1b8b610f6f565b611f248d610f6f565b611f2e919061433b565b90505b9b9c9a9b999a975050505050505050565b600082600003611f53575084612002565b8115611fc557611f84611f668487614328565b611f708587611416565b611f7a888a611416565b611ad69190614328565b90506000611f928588612899565b90506000611fa086896128a8565b905081831015611fb257819250611fbe565b80831115611fbe578092505b5050612002565b828503611fd457506000612002565b611fff611fe18487614401565b611feb858761205f565b611ff5888a611416565b611ad69190614401565b90505b95945050505050565b600060016001607f1b0319821280159061202c575060016001607f1b038213155b610f995760405163a5353be560e01b815260040160405180910390fd5b600081831361205857816113b8565b5090919050565b60006113b88383670de0b6b3a76400006127d9565b600254600090819061208f906001600160801b0316846125d3565b90506120bb7f000000000000000000000000000000000000000000000000000000000000000082614328565b6001546001600160801b03161115612110576001547f0000000000000000000000000000000000000000000000000000000000000000906121069083906001600160801b0316614401565b6113b89190614401565b50919050565b61211e614200565b60008061212a84612612565b905060006121378261274c565b935090508261214c57506000915061221b9050565b600061217361216e84610160015185610140015161141690919063ffffffff16565b610f6f565b61219361216e85610120015186610100015161205f90919063ffffffff16565b61219d919061433b565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60008060008061223b8560c001518660e001516128b7565b9150915080612251575060009485945092505050565b600061225d86846128f6565b9250905081158061226c575080155b1561227f57506000958695509350505050565b600061228b8783612a05565b9050806000036122a45750600096879650945050505050565b866060015181116122ba57969095509350505050565b50606086015160006122cd888685612ad6565b9050806000036122e7575060009788975095505050505050565b8281106122fe575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b9004166000808061235d8686867f00000000000000000000000000000000000000000000000000000000000000008b612e26565b925092509250858314612394576123738361182c565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146123c5576123a48261200b565b600380546001600160801b0319166001600160801b03929092169190911790555b8381146123f3576123d58161182c565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b600082600019048411830215820261241357600080fd5b5091020490565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024016117eb565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156124e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100819190614569565b61253c6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612e6d565b50505050565b60006113b883670de0b6b3a7640000846123fc565b6000808061257861257088670de0b6b3a7640000614401565b8990876123fc565b90508615611cf95761258a8888611416565b9150611cea8a8a846125a48a670de0b6b3a7640000614401565b8989612ebf565b6000806125b884846128b7565b9092509050806125cc576125cc60016110b0565b5092915050565b60006113b883670de0b6b3a7640000846127d9565b600060016001607f1b03821115610f995760405163a5353be560e01b815260040160405180910390fd5b61261a614252565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916127129116612ed0565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261274492900416612ed0565b905292915050565b600080600080600061275d86612f46565b915091508061277457506000958695509350505050565b6127818660a00151610f6f565b61278a87613266565b836127988960000151610f6f565b6127a291906143af565b6127ac91906143af565b6127b6919061433b565b9250505060008112156127cf5750600093849350915050565b9360019350915050565b60008260001904841183021582026127f057600080fd5b50910281810615159190040190565b6000806128108888888888886132ca565b909250905080611b0357611b0360006110b0565b60008160000361283d5750670de0b6b3a76400006109aa565b8260000361284d575060006109aa565b600061285883610f6f565b9050600061286d61286886610f6f565b6133ab565b9050818102612884670de0b6b3a764000082614582565b905061288f816135d1565b9695505050505050565b600081831161211057826113b8565b600081831161205857816113b8565b6000806000836128c686610f6f565b6128d0919061433b565b905060008112156128e85760008092509250506128ef565b9150600190505b9250929050565b60008060008460a0015112612913575050608082015160016128ef565b60008460a0015161292390614506565b9050600061295f85876101000151886000015160e00151670de0b6b3a764000061294d9190614401565b89516060810151608090910151613766565b9350905082158061296e575080155b15612981576000809350935050506128ef565b600061298d83836125d3565b9050670de0b6b3a764000081116129c95780670de0b6b3a76400000394506129c28760c001518661141690919063ffffffff16565b94506129d8565b600080945094505050506128ef565b86608001518511156129f75786608001516001945094505050506128ef565b506001925050509250929050565b600080612a3b8460c001518560e00151866101000151876000015160a00151612a2d88610f6f565b612a3690614506565b613812565b87516040810192909252602082019290925291909152905080612a625760009150506109aa565b6000612a71856000015161274c565b9250905081612a85576000925050506109aa565b84602001518110612a9b576000925050506109aa565b600085606001518660400151612ab19190614328565b9050612acc828760200151836123fc9092919063ffffffff16565b61288f9082614401565b60008084606001518560400151612aed9190614328565b60208601516060870151919250600091612b0791846123fc565b90508560a00151600003612b1e5791506113b89050565b60005b6004811015612e1c57612b348286612899565b91506000612b5d8860c001518960e001518a61010001518b6000015160a00151612a2d88610f6f565b8b516040810192909252602082019290925291909152905080612b875760009450505050506113b8565b6000612b96896000015161392a565b9050612ba389828761395a565b15612baf575050612e1c565b60008960a001511315612d1357885180516020820151604083015160a084015160e0909401518d94600094612c099490939092909190612bf790670de0b6b3a7640000614401565b875160608101516080909101516139c6565b9450905083612c225760009750505050505050506113b8565b808260a0015110612d1057612c3682613ab2565b909650935083612c505760009750505050505050506113b8565b612c758260c001518360e00151846101000151856000015160a00151612a2d8b610f6f565b85516040810192909252602082019290925291909152935083612ca25760009750505050505050506113b8565b815180516020820151604083015160a0909301518e5160e00151612cd4949190612bf790670de0b6b3a7640000614401565b9450905083612ced5760009750505050505050506113b8565b8a60a001518111612d0757859750505050505050506113b8565b50505050612b21565b50505b6000612d248a8a8c60a00151613b88565b93509050821580612d3d5750670de0b6b3a76400008110155b15612d5157600096505050505050506113b8565b80670de0b6b3a76400000390506000612d7e61216e8c604001518d6020015161205f90919063ffffffff16565b612d8b61216e858a611416565b612d95919061433b565b90506000811315612dbf57612dae87611ad68385612542565b612db89087614328565b9550612e0d565b6000811215612e04576000612dd988611ad6858186614506565b905086811015612ded578087039650612dfe565b6000985050505050505050506113b8565b50612e0d565b50505050612e1c565b84600101945050505050612b21565b5095945050505050565b600080600080612e398989898989613812565b9296509094509250905080612e6157604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261104b908490613ee2565b600080612810888888888888613f45565b600080670de0b6b3a7640000612ee46105b7565b612eee9190614454565b9050808311612efe576000612f08565b612f088184614401565b91506113b8612f3f670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614454565b8390612542565b6000806000612f6b61216e85610160015186610140015161141690919063ffffffff16565b612f8b61216e86610120015187610100015161205f90919063ffffffff16565b612f95919061433b565b9050600080612fac866000015187602001516128b7565b9150915080612fc357506000958695509350505050565b60008313156131045760008390506000613011886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006130029190614401565b8d606001518e608001516139c6565b935090508261302a575060009788975095505050505050565b8181106130c8576000613064858a60400151858c60e00151670de0b6b3a76400006130559190614401565b8d606001518e60800151613f45565b945090508315801561307957508860c0015183105b156130905750600098600198509650505050505050565b836130a657506000988998509650505050505050565b6130af81610f6f565b6130b890614506565b9960019950975050505050505050565b60008860200151126130f0576130e78860a001518561216e9190614401565b611c1590614506565b60a088015188516130e79161216e91614401565b600083121561325757600061311884614506565b9050600061314c8489604001518a60e00151670de0b6b3a764000061313d9190614401565b8b606001518c60800151613766565b9350905082613165575060009788975095505050505050565b8181106131ea57600061319f858a60400151858c60e00151670de0b6b3a76400006131909190614401565b8d606001518e608001516132ca565b94509050831580156131b457508860c0015183105b156131cb5750600098600198509650505050505050565b836131e157506000988998509650505050505050565b6130b881610f6f565b600061321c858a604001518b60e00151670de0b6b3a764000061320d9190614401565b8c606001518d60800151614005565b945090508361323657506000988998509650505050505050565b6130b861324d8a606001518486611ad69190614401565b61216e9083614328565b50600095600195509350505050565b600061329961216e836101200151670de0b6b3a76400006132879190614401565b606085015161010086015191906127d9565b610f6561216e846101600151670de0b6b3a76400006132b89190614401565b606086015161014087015191906123fc565b60008060006132dc89898888886140b4565b9050868810156132f35760008092509250506133a0565b96869003966133028887612824565b9750878110156133195760008092509250506133a0565b8781036133278186886127d9565b9050670de0b6b3a7640000811061335b5761335461334d670de0b6b3a7640000896125d3565b8290612824565b9050613373565b61337061334d670de0b6b3a764000089612542565b90505b61337d81866125d3565b905089811015613395576000809350935050506133a0565b899003925060019150505b965096945050505050565b60008082136133cd5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134509084901c610f6f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136135ec57506000919050565b680755bf798b4a1bf1e58212613615576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061288f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f6f565b600080600061377888888888886140b4565b905060006137a3670de0b6b3a76400006137928888612542565b61379c9190614328565b83906125d3565b9050670de0b6b3a764000081106137d0576137c961334d670de0b6b3a7640000896125d3565b90506137e8565b6137e561334d670de0b6b3a764000089612542565b90505b808810156137fe57600080935093505050613808565b8703925060019150505b9550959350505050565b600080600080846000036138315750879250869150859050600161391e565b60008561383d8b610f6f565b61384791906143af565b905061385287610f6f565b81121561386d5760008060008094509450945094505061391e565b8094506000891261388d5761388661216e868b8d6123fc565b93506138b0565b6138a461216e61389c8b614506565b87908d6127d9565b6138ad90614506565b93505b6000806138bd8c8c6128b7565b91509150806138dc57600080600080965096509650965050505061391e565b60006138e888886128b7565b92509050816139085760008060008097509750975097505050505061391e565b6139138b82856123fc565b955060019450505050505b95509550955095915050565b60008060006139388461274c565b91509150806125cc57604051635516328b60e11b815260040160405180910390fd5b602083015160009061396c90846125d3565b604085015161397c908490612542565b10158015610084575060208401516139ac90846139a5633b9aca00670de0b6b3a7640000614328565b91906123fc565b60408501516139bc9084906125d3565b1115949350505050565b60008060008812156139e8576139db88614506565b6139e59087614328565b95505b60006139f48a8a6125ab565b90506000613a05828a8989896140e3565b90506000613a22613a1a89611d17898d61205f565b8890886127d9565b905080821015613a3b5760008094509450505050613aa6565b808203670de0b6b3a76400008110613a6957613a6261334d670de0b6b3a76400008b612542565b9050613a81565b613a7e61334d670de0b6b3a76400008b6125d3565b90505b8a811015613a99576000809550955050505050613aa6565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113613acc57506000928392509050565b6000613adb8460000151613266565b90506000613b07856040015186606001518760400151613afb9190614328565b602088015191906127d9565b905060008212613b2e5780821015613b2157819003613b44565b5060009485945092505050565b613b3782614506565b613b419082614328565b90505b60e085015160c0860151613b599183906127d9565b9050808560c001511015613b74575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613bac57855160400151613ba5908590614328565b9050613be7565b6000613bb785614506565b875160400151909150811015613bd7578651604001518190039150613be5565b60008093509350505061221b565b505b855180516020909101516000918291613c0091906128b7565b9150915080613c18576000809450945050505061221b565b875160e0810151604090910151600091613c4d91613c4191613c3a9190612824565b8a90611416565b6101008b0151906125d3565b895160e0810151608090910151613c7891613c6c91611d179088611416565b8b5160600151906125d3565b613c829190614328565b90506000613cba613cae613ca78c6000015160e001518861282490919063ffffffff16565b8b9061205f565b6101008c015190612542565b905080821015613cd55760008096509650505050505061221b565b80820391506000613d17858c60000151604001518d6000015160e00151670de0b6b3a7640000613d059190614401565b8e5160608101516080909101516140b4565b90506000613d418c6000015160e00151670de0b6b3a7640000613d3a9190614401565b8890612824565b905080821015613d5e57600080985098505050505050505061221b565b8b51608081015160609091015191830391613d7a9183916127d9565b9050670de0b6b3a76400008110613dbe578b5160e00151613db79061334d90613dab90670de0b6b3a7640000614401565b8e5160e00151906125d3565b9050613ded565b8b5160e00151613dea9061334d90613dde90670de0b6b3a7640000614401565b8e5160e0015190612542565b90505b8b5160600151613e0090859083906127d9565b935083670de0b6b3a76400001115613e245783670de0b6b3a7640000039350613e38565b60006001985098505050505050505061221b565b60008c60e0015112613e9a5760c08c015160e08d0151613e57916125d3565b9250670de0b6b3a76400008310613e7b57600080985098505050505050505061221b565b670de0b6b3a76400009290920391613e938484611416565b9350613ecf565b613ecc613eb38d60c001518e60e00151611ad690614506565b613ec590670de0b6b3a7640000614328565b8590611416565b93505b50919a60019a5098505050505050505050565b6000613ef76001600160a01b03841683614108565b90508051600014158015613f1c575080806020019051810190613f1a91906145b0565b155b1561104b57604051635274afe760e01b81526001600160a01b03841660048201526024016110cb565b6000806000613f5789898888886140b4565b9050613f6786611d17898b614328565b975087811015613f7e5760008092509250506133a0565b878103613f8c8186886127d9565b9050670de0b6b3a76400008110613fb957613fb261334d670de0b6b3a7640000896125d3565b9050613fd1565b613fce61334d670de0b6b3a764000089612542565b90505b613fdb81866125d3565b9050808a1015613ff3576000809350935050506133a0565b90980398600198509650505050505050565b600080600061401788888888886140e3565b9050600061403b670de0b6b3a764000061403188886125d3565b612f3f9190614328565b9050670de0b6b3a764000081106140685761406161334d670de0b6b3a764000089612542565b9050614080565b61407d61334d670de0b6b3a7640000896125d3565b90505b61408a8186612542565b9050888110156140a257600080935093505050613808565b97909703976001975095505050505050565b60006140c08585612824565b6140d96140d186611d17868b61205f565b8590856127d9565b611fff9190614328565b60006140ef8585612824565b6140d961410086611d17868b611416565b8590856123fc565b60606113b88383600084600080856001600160a01b0316848660405161412e91906145cd565b60006040518083038185875af1925050503d806000811461416b576040519150601f19603f3d011682016040523d82523d6000602084013e614170565b606091505b509150915061288f8683836060826141905761418b826141d7565b6113b8565b81511580156141a757506001600160a01b0384163b155b156141d057604051639996b31560e01b81526001600160a01b03851660048201526024016110cb565b50806113b8565b8051156141e75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280614214614252565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156142c957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156142f557600080fd5b85016060818803121561430757600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156109aa576109aa614312565b81810360008312801583831316838312821617156125cc576125cc614312565b60006020828403121561436d57600080fd5b81356001600160a01b03811681146113b857600080fd5b801515811461059c57600080fd5b6000602082840312156143a457600080fd5b81356113b881614384565b80820182811260008312801582168215821617156143cf576143cf614312565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826143fc576143fc6143d7565b500690565b818103818111156109aa576109aa614312565b6001600160701b038181168382160190808211156125cc576125cc614312565b6001600160801b038181168382160190808211156125cc576125cc614312565b80820281158282048414176109aa576109aa614312565b6001600160801b038281168282160390808211156125cc576125cc614312565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156109aa576109aa614312565b600081600f0b60016001607f1b031981036144d5576144d5614312565b60000392915050565b602081016004831061450057634e487b7160e01b600052602160045260246000fd5b91905290565b6000600160ff1b820161451b5761451b614312565b5060000390565b6000808335601e1984360301811261453957600080fd5b83018035915067ffffffffffffffff82111561455457600080fd5b6020019150368190038213156128ef57600080fd5b60006020828403121561457b57600080fd5b5051919050565b600082614591576145916143d7565b600160ff1b8214600019841416156145ab576145ab614312565b500590565b6000602082840312156145c257600080fd5b81516113b881614384565b6000825160005b818110156145ee57602081860181015185830152016145d4565b50600092019182525091905056fea26469706673582212203c17adb329231b9c280c4bc204914a27116185501308f7dcb363e35c19f7a04c64736f6c63430008140033",
        "sourceMap": "755:375:48:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2934:273:39;;;;;;:::i;:::-;;:::i;:::-;;;757:25:235;;;745:2;730:18;2934:273:39;;;;;;;1985:271;;;;;;:::i;:::-;;:::i;2934:273::-;3113:7;3139:61;3151:13;3166:11;3179:10;3191:8;3139:11;:61::i;:::-;3132:68;;2934:273;;;;;;;:::o;1985:271::-;2163:7;2189:60;2200:13;2215:11;2228:10;2240:8;2189:10;:60::i;7055:6341:119:-;7248:7;2356:21:171;:19;:21::i;:::-;7321:23:119::1;7335:8;7321:13;:23::i;:::-;7483:25;7469:11;:39;7465:115;;;7531:38;;-1:-1:-1::0;;;7531:38:119::1;;;;;;;;;;;7465:115;7850:23;7876:21;:19;:21::i;:::-;7850:47;;7929:13;7911:15;:31;7907:195;;;7958:54;7975:19;:17;:19::i;:::-;7996:15;7958:16;:54::i;:::-;;7907:195;;;8043:48;8060:13;8075:15;8043:16;:48::i;:::-;;7907:195;8162:143;8181:65;8203:27;8232:13;8181:21;:65::i;:::-;8260:10;8284:11;8162:5;:143::i;:::-;8593:25;8632:21:::0;8667:26:::1;8707:27:::0;8748:26:::1;8787:65;8808:11;8821:15;8838:13;8787:20;:65::i;:::-;8579:273;;;;;;;;;;9076:13;9058:15;:31;9054:2301;;;9177:18;9151:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;9288:199:119::1;::::0;-1:-1:-1;9322:11:119;9351:17;9386:18;9422:20;9460:13;9288:16:::1;:199::i;:::-;9655:21;9679:30;9695:13;9679:15;:30::i;:::-;9655:54;;9723:122;9777:22;:11;:20;:22::i;:::-;9760:39;::::0;:14;:39:::1;:::i;:::-;9817:14;9723:19;:122::i;:::-;10062:27;10073:15;10062:10;:27::i;:::-;10057:201;;10109:134;10169:56;10109:38;:134::i;:::-;10522:12;10537:42;10563:15;10537:25;:42::i;:::-;10522:57;;10598:7;10593:94;;10632:40;;-1:-1:-1::0;;;10632:40:119::1;;;;;;;;;;;10593:94;9091:1606;;9054:2301;;;10931:49;10949:13;10964:15;10931:17;:49::i;:::-;10915:65;;11302:42;11328:15;11302:25;:42::i;:::-;;9054:2301;11564:16;11583:51;11593:13;11608:15;11625:8;11583:9;:51::i;:::-;11564:70;;11937:10;11926:8;:21;11922:84;;;11970:25;;-1:-1:-1::0;;;11970:25:119::1;;;;;;;;;;;11922:84;12073:11:::0;12148:13;12232:18;12321;12407:15;12502:8;12662:64:::1;12684:27;12148:13:::0;12662:21:::1;:64::i;:::-;12614:19;;::::0;::::1;:7:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;12556:807:119::1;12580:10;12556:807;12740:12:::0;12795:61:::1;12820:8:::0;12830:16;12848:7;12795:24:::1;:61::i;:::-;12907:130;12956:8;12982:16;13016:7;12907:31;:130::i;:::-;13051:14;::::0;;;::::1;::::0;::::1;;:::i;:::-;13230:99;13299:16:::0;13231:41:::1;13253:19:::0;13231;:41:::1;:::i;:::-;13230:51:::0;::::1;:99::i;:::-;12556:807;::::0;;2201:25:235;;;2257:2;2242:18;;2235:34;;;;2285:18;;;2278:34;;;;2355:14;2348:22;2343:2;2328:18;;2321:50;2402:3;2387:19;;2380:35;2446:3;2431:19;;2424:35;;;2188:3;2173:19;12556:807:119::1;;;;;;;-1:-1:-1::0;13381:8:119;;-1:-1:-1;;;;;;;;;;;;2398:20:171;1713:1;2924:7;:21;2744:208;6222:5126:117;6414:7;2356:21:171;:19;:21::i;:::-;6487:23:117::1;6501:8;6487:13;:23::i;:::-;6649:25;6635:11;:39;6631:115;;;6697:38;;-1:-1:-1::0;;;6697:38:117::1;;;;;;;;;;;6631:115;7013:23;7039:21;:19;:21::i;:::-;7013:47;;7092:13;7074:15;:31;7070:195;;;7121:54;7138:19;:17;:19::i;7121:54::-;;7070:195;;;7206:48;7223:13;7238:15;7206:16;:48::i;:::-;;7070:195;7324:142;7343:64;7365:26;7393:13;7343:21;:64::i;7324:142::-;7642:25;7681:21:::0;7716:26:::1;7756:27:::0;7797:26:::1;7836:64;7856:11;7869:15;7886:13;7836:19;:64::i;:::-;7628:272;;;;;;;;;;8101:20;8124:13;8101:36;;8200:13;8182:15;:31;8178:1805;;;8300:18;8274:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;8332:197:117::1;::::0;-1:-1:-1;8365:11:117;8394:17;8429:18;8465:20;8503:12;8332:15:::1;:197::i;:::-;8696:21;8720:29;8736:12;8720:15;:29::i;:::-;8696:53;;8763:122;8817:22;:11;:20;:22::i;:::-;8800:39;::::0;:14;:39:::1;:::i;8763:122::-;9150:12;9165:42;9191:15;9165:25;:42::i;:::-;9150:57;;9226:7;9221:94;;9260:40;;-1:-1:-1::0;;;9260:40:117::1;;;;;;;;;;;9221:94;8215:1110;;8178:1805;;;9559:49;9577:13;9592:15;9559:17;:49::i;:::-;9543:65;;9930:42;9956:15;9930:25;:42::i;:::-;;8178:1805;10039:16;10058:51;10068:13;10083:15;10100:8;10058:9;:51::i;:::-;10039:70;;10411:10;10400:8;:21;10396:84;;;10444:25;;-1:-1:-1::0;;;10444:25:117::1;;;;;;;;;;;10396:84;10546:11:::0;10625:15;10720:8;10879:63:::1;10901:26;10929:12:::0;10879:21:::1;:63::i;:::-;10831:19;;::::0;::::1;:7:::0;:19:::1;:::i;:::-;-1:-1:-1::0;;;;;10774:541:117::1;10797:10;10774:541;10956:12:::0;11011:61:::1;11036:8:::0;11046:16;11064:7;11011:24:::1;:61::i;:::-;11123:130;11172:8;11198:16;11232:7;11123:31;:130::i;:::-;11267:14;::::0;;;::::1;::::0;::::1;;:::i;:::-;10774:541;::::0;;2944:25:235;;;3000:2;2985:18;;2978:34;;;;3028:18;;;3021:34;3098:14;3091:22;3086:2;3071:18;;3064:50;3145:3;3130:19;;3123:35;;;2931:3;2916:19;10774:541:117::1;;;;;;;-1:-1:-1::0;11333:8:117;;-1:-1:-1;;;;;;;;;;2398:20:171;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:171;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;8216:221:114:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:114;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:114;;;;;;;;;;;8324:107;8216:221;:::o;5594:150::-;5672:23;5718:19;193:4:124;5718:14:114;:19::i;:::-;5711:26;;5594:150;:::o;11561:223::-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;3253:7270:115:-;3379:7;3511:51;;;:12;:51;;;;;3589:27;;-1:-1:-1;;;;;3589:27:115;:32;;;:81;;;3655:15;3637;:33;3589:81;3572:168;;;3702:27;-1:-1:-1;;;;;3702:27:115;;-1:-1:-1;3695:34:115;;3572:168;3832:28;:16;:26;:28::i;:::-;3802:58;;-1:-1:-1;;;;;;3802:58:115;-1:-1:-1;;;;;3802:58:115;;;;;;;3947:40;3970:16;3947:22;:40::i;:::-;-1:-1:-1;4451:27:115;;-1:-1:-1;4481:12:115;4451:27;4507:35;4525:17;4507:15;:35;:::i;:::-;4481:71;;;;;;;;;;;-1:-1:-1;4481:71:115;;;:87;-1:-1:-1;;;;;4481:87:115;;-1:-1:-1;4601:101:115;4636:27;4677:15;4601:21;:101::i;:::-;4712:27;4742:26;;;:12;:26;;;;;;4578:124;;-1:-1:-1;4812:23:115;;4808:2275;;-1:-1:-1;5026:4:115;5189:21;;5266:190;5313:19;5354:16;5392:19;5189:21;5266:25;:190::i;:::-;5171:285;;;;5496:13;5470:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5523:238:115;;-1:-1:-1;5557:19:115;5594:1;5613:13;5644:24;5613:13;5644:22;:24::i;:::-;5732:15;5523:16;:238::i;:::-;5995:30;6012:13;5995:30;;:::i;:::-;;;6423:254;6482:19;6519:13;6550:19;6587:16;6621;6655:8;6423:41;:254::i;:::-;6407:270;-1:-1:-1;6912:85:115;:56;6407:270;6951:16;6912:38;:56::i;:::-;:83;:85::i;:::-;6877:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6877:120:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6877:120:115;;;;;-1:-1:-1;;;;;6877:120:115;;;;;;7047:25;:13;:23;:25::i;:::-;7011:32;:61;;:32;;:61;;;;-1:-1:-1;;;7011:61:115;;-1:-1:-1;;;;;7011:61:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7011:61:115;;;;;-1:-1:-1;;;;;7011:61:115;;;;;;4837:2246;;4808:2275;7201:19;7223:100;7258:26;7298:15;7223:21;:100::i;:::-;7333:26;7362:25;;;:12;:25;;;;;;7201:122;;-1:-1:-1;7401:22:115;;7397:1597;;7613:4;7595:22;;7775:21;7814;7852:188;7899:18;7939:16;7977:19;8018:4;7852:25;:188::i;:::-;7757:283;;;;8080:13;8054:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8132:15:115;;-1:-1:-1;8191:235:115;8224:18;8107:22;8279:13;8310:24;8279:13;8310:22;:24::i;:::-;8398:14;8191:15;:235::i;:::-;8560:30;8577:13;8560:30;;:::i;:::-;;-1:-1:-1;8823:85:115;:56;8560:30;8862:16;8823:38;:56::i;:85::-;8788:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8788:120:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8788:120:115;;;;;-1:-1:-1;;;;;8788:120:115;;;;;;8958:25;:13;:23;:25::i;:::-;8922:32;:61;;:32;;:61;;;;-1:-1:-1;;;8922:61:115;;-1:-1:-1;;;;;8922:61:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8922:61:115;;;;;-1:-1:-1;;;;;8922:61:115;;;;;;7425:1569;;;7397:1597;9145:15;9141:701;;;9365:132;9434:30;:19;:28;:30::i;:::-;9402:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9482:1;9365:19;:132::i;:::-;9788:43;9814:16;9788:25;:43::i;:::-;;9141:701;10221:20;10247:44;10274:16;10247:26;:44::i;:::-;-1:-1:-1;10306:176:115;;;4182:25:235;;;4238:2;4223:18;;4216:34;;;4266:18;;;4259:34;;;4324:2;4309:18;;4302:34;;;10220:71:115;;-1:-1:-1;10336:15:115;;10306:176;;4169:3:235;4154:19;10306:176:115;;;;;;;10500:16;10493:23;;;;;;;;;;3253:7270;;;;;:::o;1198:469:121:-;1309:10;-1:-1:-1;;;;;1401:10:121;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:121;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:121;1620:18;;;;1617:34;;1198:469::o;6522:597:118:-;6722:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6722:25:118;;;;;;;;;;:34;-1:-1:-1;6718:105:118;;;6779:33;;-1:-1:-1;;;6779:33:118;;;;;;;;;;;6718:105;6906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6906:25:118;;;;;;;;;:35;;;;;;;6961:21;;;:12;:21;;;;;:31;;6935:6;;6906:19;6961:31;;6935:6;;6961:31;:::i;:::-;;;;-1:-1:-1;;7051:61:118;;;4521:25:235;;;4577:2;4562:18;;4555:34;;;7092:1:118;;-1:-1:-1;;;;;7051:61:118;;;7066:10;;7051:61;;4494:18:235;7051:61:118;;;;;;;6522:597;;;:::o;24382:7139:119:-;24572:25;24611:21;24646:26;24686:27;24727:26;24999:23;25480:21;25504:38;25528:13;25504:23;:38::i;:::-;25480:62;;25677:299;25729:25;:23;:25::i;:::-;25772:12;:25;-1:-1:-1;;;25772:25:119;;-1:-1:-1;;;;;25772:25:119;25815:11;25844:13;25875:12;25905:16;25939:23;25677:34;:299::i;:::-;25556:420;;-1:-1:-1;25556:420:119;-1:-1:-1;25556:420:119;-1:-1:-1;26121:17:119;26141:204;26192:25;:23;:25::i;:::-;26235:12;:25;-1:-1:-1;;;26235:25:119;;-1:-1:-1;;;;;26235:25:119;26278:23;26319:12;26141:33;:204::i;:::-;26121:224;;26380:273;26421:15;26458:17;26497:138;26569:9;26604;26497:46;:138::i;:::-;26380:19;:273::i;:::-;26359:476;;;26686:134;26746:56;26686:38;:134::i;:::-;27057:11;27133:16;27036:18;;;27427:157;27057:11;27497:13;27528:9;27133:16;27427:24;:157::i;:::-;27287:297;-1:-1:-1;27287:297:119;;-1:-1:-1;27287:297:119;-1:-1:-1;27287:297:119;-1:-1:-1;28232:29:119;27287:297;;28232:29;:::i;:::-;28213:48;;;;:::i;:::-;;-1:-1:-1;28535:18:119;28546:7;28535:8;:18;:::i;:::-;28513:40;;;;:::i;:::-;;;25032:3532;;;;;;;28721:27;28751:12;:77;28797:17;28781:13;:33;;;;:::i;:::-;28751:77;;;;;;;;;;;-1:-1:-1;28751:77:119;;;:93;-1:-1:-1;;;;;28751:93:119;;-1:-1:-1;28889:15:119;:31;-1:-1:-1;28889:128:119;;28974:27;;;;:12;:27;;;;;:43;-1:-1:-1;;;;;28974:43:119;28889:128;;;28939:16;28889:128;28858:159;;29666:255;29725:11;29754:18;29790:19;29827:20;29865:16;29899:8;29666:41;:255::i;:::-;29650:271;-1:-1:-1;30127:40:119;30149:18;30127:40;;:::i;:::-;;;193:4:124;30268:262:119;30351:15;30323:25;:23;:25::i;:::-;:43;;;;:::i;:::-;30388:12;:25;:45;;30416:17;;-1:-1:-1;;;30388:25:119;;-1:-1:-1;;;;;30388:25:119;:45;:::i;:::-;30455:23;30500:12;30268:33;:262::i;:::-;:268;30247:471;;;30569:134;30629:56;30569:38;:134::i;:::-;31209:295;31274:13;31305:18;31341:15;31374:18;31410:19;31447:20;31485:5;31209:47;:295::i;:::-;24382:7139;;31018:486;;-1:-1:-1;31018:486:119;;-1:-1:-1;31018:486:119;;-1:-1:-1;24382:7139:119;;-1:-1:-1;;;;;;;;24382:7139:119:o;17905:1127::-;18207:30;;-1:-1:-1;;;18207:30:119;;-1:-1:-1;;;;;18207:30:119;18287:300;:275;18207:30;18444:19;193:4:124;18444:13:119;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:119;;-1:-1:-1;;;;;18308:37:119;;;18514:11;18543:5;18287:103;:275::i;:::-;:298;:300::i;:::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:119;;;-1:-1:-1;;;18247:340:119;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:119;;;-1:-1:-1;;;18652:101:119;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:119;;;;;-1:-1:-1;;;;;18821:61:119;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:119;;;;;;;-1:-1:-1;;;;;18892:64:119;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:119;;-1:-1:-1;;;;;18966:59:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:119;;;;;-1:-1:-1;;;;;18966:59:119;;;;;;18117:915;17905:1127;;;;;:::o;12556:675:114:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;2001:204:127:-;2053:8;-1:-1:-1;;;;;2079:1:127;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:127;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:127;2001:204::o;18678:551:114:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:114;;;;;-1:-1:-1;;;;;19079:43:114;;;;;;18747:482;18678:551;;:::o;19050:173::-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:114;;:::i;19139:84::-;18747:482;18678:551;;:::o;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:114;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:114;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:114:o;317:182:123:-;485:6;451:41;;-1:-1:-1;;;451:41:123;;;;;;;;:::i;:::-;;;;;;;;21421:1688:116;21735:13;:29;-1:-1:-1;;;21514:4:116;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:116;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:116;;21421:1688;-1:-1:-1;;21421:1688:116:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:116;;21421:1688;-1:-1:-1;;;21421:1688:116:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:116;;21421:1688;-1:-1:-1;;;;;21421:1688:116:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22863:36;:24;:34;:36::i;:::-;22830:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;22830:69:116;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22830:69:116;;;;;-1:-1:-1;;;;;22830:69:116;;;;;;22935:25;:13;:23;:25::i;:::-;22909:13;:51;;:22;;:51;;;;-1:-1:-1;;;22909:51:116;;-1:-1:-1;;;;;22909:51:116;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22909:51:116;;;;;-1:-1:-1;;;;;22909:51:116;;;;;;23037:43;23055:24;:13;:22;:24::i;:::-;23054:25;;;:::i;:::-;23037:16;:43::i;:::-;-1:-1:-1;23098:4:116;;21421:1688;-1:-1:-1;;;;;;;21421:1688:116:o;19651:1652:114:-;19768:7;19895:26;19935;19974:40;19997:16;19974:22;:40::i;:::-;19881:133;;-1:-1:-1;19881:133:114;-1:-1:-1;20283:20:114;20306:40;:14;20329:16;20306:22;:40::i;:::-;20283:63;;20381:18;20360;:39;20356:198;;;20432:111;:14;20475:18;20511;20432:25;:111::i;:::-;20415:128;;20356:198;20660:18;20645:12;:33;20641:193;;;20744:12;20722:34;;;;20641:193;;;20822:1;20801:22;;20641:193;20877:30;:18;:28;:30::i;:::-;20843:31;:64;;-1:-1:-1;;;;;20843:64:114;;;;;;-1:-1:-1;;20843:64:114;;;;;;;;;;;-1:-1:-1;;;;;;;;20947:32:114;;;;20993:36;;;20989:200;;;21073:37;;;20989:200;;;-1:-1:-1;21177:1:114;20989:200;21233:31;:19;:29;:31::i;:::-;21198:32;:66;;-1:-1:-1;;;;;21198:66:114;;;-1:-1:-1;;;21198:66:114;;;;;;;;;-1:-1:-1;21282:14:114;;-1:-1:-1;;;;19651:1652:114;;;;:::o;4144:1323::-;4293:23;;4630:33;:7;4646:16;4630:15;:33::i;:::-;4609:54;;4683:28;4700:10;4683:16;:28::i;:::-;4673:38;;4799:7;4810:1;4799:12;4795:51;;4834:1;4827:8;;;;;4795:51;4940:15;;;;;;;;:::i;:::-;4936:492;;;5036:130;5071:7;5096:20;;;;:8;:20;:::i;:::-;5134:18;;;;:8;:18;:::i;:::-;5036:17;:130::i;:::-;5018:148;;4936:492;;;5246:132;5283:7;5308:20;;;;:8;:20;:::i;:::-;5346:18;;;;:8;:18;:::i;:::-;5246:19;:132::i;:::-;5410:7;5392:25;;4936:492;5438:22;4144:1323;;;;;;:::o;32807:391::-;32976:7;32999:15;;;;;;;;:::i;:::-;32995:197;;;-1:-1:-1;33037:7:114;33030:14;;32995:197;33148:33;:7;33164:16;33148:15;:33::i;:::-;33141:40;;;;33531:405;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:114;33905:14;;1610:118:124;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;22516:5095:117:-;22705:25;22744:21;22779:26;22819:27;22860:26;23099:23;23567:21;23591:38;23615:13;23591:23;:38::i;:::-;23567:62;;23697:347;23769:25;:23;:25::i;:::-;23816:12;:25;-1:-1:-1;;;23816:25:117;;-1:-1:-1;;;;;23816:25:117;23863:11;23896:13;23931:12;23965:16;24003:23;23697:50;:347::i;:::-;23643:401;;-1:-1:-1;23643:401:117;-1:-1:-1;23643:401:117;-1:-1:-1;24285:16:117;;;;24404:204;24455:25;:23;:25::i;24404:204::-;24384:224;-1:-1:-1;24648:16:117;24882:158;24924:11;24953:13;24384:224;24648:16;24882:24;:158::i;:::-;24702:338;-1:-1:-1;24702:338:117;;-1:-1:-1;24702:338:117;;-1:-1:-1;24702:338:117;-1:-1:-1;25523:29:117;24702:338;;25523:29;:::i;:::-;25503:50;;;;:::i;:::-;;-1:-1:-1;25764:18:117;25775:7;25764:8;:18;:::i;:::-;25747:35;;;;:::i;:::-;;-1:-1:-1;26166:34:117;26182:18;25747:35;26166:34;:::i;:::-;26145:55;;23132:3079;;;;;;26658:946;26719:13;26746:18;26778:15;26807:18;27318:12;:47;27347:17;27331:13;:33;;;;:::i;:::-;27318:47;;;;;;;;;;;-1:-1:-1;27318:47:117;:63;-1:-1:-1;;;;;27318:63:117;27421:15;:31;-1:-1:-1;27421:128:117;;27506:27;;;;:12;:27;;;;;:43;-1:-1:-1;;;;;27506:43:117;27421:128;;;27471:16;27421:128;27590:4;26658:47;:946::i;:::-;22516:5095;;26491:1113;;-1:-1:-1;26491:1113:117;;-1:-1:-1;26491:1113:117;;-1:-1:-1;22516:5095:117;;-1:-1:-1;;;;;;22516:5095:117:o;14268:3167::-;14652:12;:26;-1:-1:-1;;;;;14652:26:117;14705:35;;;;:110;;-1:-1:-1;14794:21:117;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:117;;-1:-1:-1;;;;;16178:29:117;16256:297;:272;16178:29;16410:19;193:4:124;16410:13:117;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:117;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:117;-1:-1:-1;;;;;16217:336:117;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:117;;;-1:-1:-1;;;16656:60:117;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:117;-1:-1:-1;;;;;17238:54:117;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:117;-1:-1:-1;;;;;17302:57:117;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:117;;-1:-1:-1;;;;;17369:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:117;;;;;-1:-1:-1;;;;;17369:59:117;;;;;;14479:2956;;;14268:3167;;;;;:::o;4821:161:44:-;4939:36;;-1:-1:-1;;;4939:36:44;;;;;757:25:235;;;4913:7:44;;4939:6;-1:-1:-1;;;;;4939:22:44;;;;730:18:235;;4939:36:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;884:190:127:-;937:9;-1:-1:-1;;;964:1:127;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:127;;;;;;;;;;;21722:2511:114;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:114;;-1:-1:-1;;;;;22081:32:114;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:114;;-1:-1:-1;22022:101:114;-1:-1:-1;22328:39:114;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:114;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:114;;-1:-1:-1;;;;;22834:120:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:114;;;;;-1:-1:-1;;;;;22834:120:114;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:114;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:114;;-1:-1:-1;23856:28:114;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:114;;;;;-1:-1:-1;;;;;23898:62:114;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:114;;;;;;;-1:-1:-1;;;;;23974:63:114;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11087:2398:115:-;11274:21;;11680:37;:11;11700:16;11680:19;:37::i;:::-;11664:53;-1:-1:-1;11727:15:115;11745:31;11664:53;11767:8;11745:21;:31::i;:::-;11727:49;-1:-1:-1;11802:33:115;11727:49;11818:16;11802:15;:33::i;:::-;11786:49;;12262:7;12258:557;;;12302:23;12312:13;12302:7;:23;:::i;:::-;12285:40;;;;:::i;:::-;;;12258:557;;;12781:23;12791:13;12781:7;:23;:::i;:::-;12764:40;;;;:::i;:::-;;;12258:557;13033:20;13014:16;:39;13010:469;;;13148:110;:13;13190:16;13224:20;13148:24;:110::i;:::-;13132:126;-1:-1:-1;13358:110:115;:13;13400:16;13434:20;13358:24;:110::i;:::-;13342:126;;13010:469;11320:2165;11087:2398;;;;;;;:::o;14667:1674:125:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:125;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:127:-;580:9;-1:-1:-1;;;607:1:127;:12;601:86;;643:33;;-1:-1:-1;;;643:33:127;;;;;;;;;;;25409:1358:114;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:114;;;;-1:-1:-1;25409:1358:114;-1:-1:-1;;;25409:1358:114:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:114;-1:-1:-1;;;;;26309:29:114;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:114;;;;-1:-1:-1;25409:1358:114;-1:-1:-1;;;;;25409:1358:114:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:114;-1:-1:-1;;;;;;;25409:1358:114:o;10366:432::-;10459:21;10492:24;10519:19;:17;:19::i;:::-;10492:46;;10580:16;10564:13;:32;:95;;10658:1;10564:95;;;10611:32;10627:16;10611:13;:32;:::i;:::-;10548:111;-1:-1:-1;10751:40:114;10548:111;10773:17;10751:21;:40::i;11965:253::-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:114;;;;12169:28;;12061:46;:150::i;25764:2130:125:-;26106:23;;;26891:103;26924:30;26930:24;193:4:124;26924:30:125;:::i;:::-;26891:10;;26968:16;26891:19;:103::i;:::-;26876:118;-1:-1:-1;27008:28:125;;27004:884;;27170:42;:10;27187:24;27170:16;:42::i;:::-;27153:59;-1:-1:-1;27347:485:125;27412:23;27453:13;27153:59;27725:18;27731:12;193:4:124;27725:18:125;:::i;:::-;27761:16;27795:23;27347:47;:485::i;:::-;27329:503;-1:-1:-1;27846:31:125;27329:503;27846:31;;:::i;:::-;;;27004:884;25764:2130;;;;;;;;;;;:::o;3330:531::-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;18256:284::-;18389:7;18492:41;18508:24;18514:18;193:4:124;18508:24:125;:::i;:::-;18492:9;;:15;:41::i;:::-;18486:47;;193:4:124;18486:47:125;:::i;17116:683:114:-;17272:4;17497:23;17523:221;17598:16;17570:25;:23;:25::i;:::-;:44;;;;:::i;:::-;17628:12;:25;:43;;17656:15;;-1:-1:-1;;;17628:25:114;;-1:-1:-1;;;;;17628:25:114;:43;:::i;17523:221::-;-1:-1:-1;;;;17116:683:114;-1:-1:-1;;;;17116:683:114:o;29755:2727::-;29988:16;;;;30875:144;30976:24;31002:16;30875:78;30941:11;30875:46;30904:16;30910:10;193:4:124;30904:16:114;:::i;:::-;30875:9;;:28;:46::i;:::-;:65;;:78::i;:::-;:100;:144;:100;:144::i;:::-;30864:155;-1:-1:-1;31307:34:114;30864:155;31324:16;31307;:34::i;:::-;31286:55;-1:-1:-1;31849:12:114;31864:104;31898:30;31904:24;193:4:124;31898:30:114;:::i;:::-;31864:11;;31942:16;31864:20;:104::i;:::-;31849:119;-1:-1:-1;31988:20:114;31849:119;31999:8;31988:10;:20::i;:::-;31978:30;-1:-1:-1;32442:33:114;31978:30;32458:16;32442:15;:33::i;:::-;32409:66;;:18;:66;:::i;:::-;32376:99;;30128:2354;29755:2727;;;;;;;;;:::o;29982:2953:125:-;30292:7;30301;30310;30319:6;30327:7;31261:27;31326:20;31302:21;:44;31298:1445;;;31631:7;31627:191;;;31675:128;:14;31722:21;31765:20;31675:25;:128::i;:::-;31658:145;;31627:191;31973:121;:19;32021:21;32060:20;31973:30;:121::i;:::-;31951:143;;32251:27;:16;:25;:27::i;:::-;32202:30;:19;:28;:30::i;:::-;:76;;;;:::i;:::-;32163:115;-1:-1:-1;32311:118:125;:16;32356:21;32395:20;32311:27;:118::i;:::-;32292:137;-1:-1:-1;32465:121:125;:19;32513:21;32552:20;32465:30;:121::i;:::-;32443:143;;31298:1445;;;32705:27;:16;:25;:27::i;:::-;32656:30;:19;:28;:30::i;:::-;:76;;;;:::i;:::-;32617:115;;31298:1445;32774:14;;32802:19;;32835:16;;29982:2953;-1:-1:-1;;;;;;;;29982:2953:125:o;12712:2102:124:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:124;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:124;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:124;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:124;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;14645:152::-;14635:162;;13319:1489;12712:2102;;;;;;;:::o;1616:219:127:-;1667:8;-1:-1:-1;;;;;;1693:21:127;;;;;:46;;-1:-1:-1;;;;;;1718:21:127;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:127;;;;;;;;;;;15815:101:124;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;;-1:-1:-1;15904:1:124;;15815:101;-1:-1:-1;15815:101:124:o;3190:114::-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;24513:558:114:-;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:114;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:114;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:114;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:114;:57;:::i;:::-;:97;;;;:::i;24816:222::-;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:114;-1:-1:-1;14138:108:114;14256:61;;-1:-1:-1;14300:5:114;;-1:-1:-1;14284:22:114;;-1:-1:-1;14284:22:114;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:114;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;;15195:32;;14809:569;;;;15266:34;;;;14809:569;;;;15336:31;;;;;14809:569;;;;-1:-1:-1;14809:569:114;-1:-1:-1;15398:4:114;;-1:-1:-1;13522:1887:114;;;;;;;:::o;22927:3408:126:-;23046:7;23055;23361:38;23401:12;23417:173;23498:7;:29;;;23545:7;:31;;;23417:63;:173::i;:::-;23360:230;;;;23605:7;23600:52;;-1:-1:-1;23636:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;22927:3408:126:o;23600:52::-;23661:29;23735:109;23783:7;23804:30;23735:34;:109::i;:::-;23700:144;-1:-1:-1;23700:144:126;-1:-1:-1;23858:8:126;;;:38;;-1:-1:-1;23870:26:126;;23858:38;23854:82;;;-1:-1:-1;23920:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;22927:3408:126:o;23854:82::-;24224:32;24259:131;24330:7;24355:21;24259:53;:131::i;:::-;24224:166;;24527:24;24555:1;24527:29;24523:743;;-1:-1:-1;24580:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;22927:3408:126:o;24523:743::-;24861:7;:35;;;24833:24;:63;24816:450;;24929:24;24955:21;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;22927:3408:126:o;24816:450::-;-1:-1:-1;25220:35:126;;;;25525:21;25549:152;25605:7;25626:30;25670:21;25549:42;:152::i;:::-;25525:176;;25715:13;25732:1;25715:18;25711:62;;-1:-1:-1;25757:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;;22927:3408:126:o;25711:62::-;26107:21;26090:13;:38;26086:82;;-1:-1:-1;26152:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;;22927:3408:126:o;26086:82::-;26288:24;;26314:13;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;22927:3408:126:o;23286:1121:116:-;23427:12;:26;23489:28;;-1:-1:-1;;;;;23427:26:116;;;;23489:28;;;;;;-1:-1:-1;;;23551:25:116;;;23402:22;;;23725:218;23427:26;23489:28;23551:25;23871:21;23910:19;23725:31;:218::i;:::-;23586:357;;;;;;24018:14;23994:20;:38;23990:130;;24077:32;:20;:30;:32::i;:::-;24048:12;:61;;-1:-1:-1;;;;;;24048:61:116;-1:-1:-1;;;;;24048:61:116;;;;;;;;;;23990:130;24159:16;24133:22;:42;24129:137;;24222:33;:22;:31;:33::i;:::-;24191:28;:64;;-1:-1:-1;;;;;;24191:64:116;-1:-1:-1;;;;;24191:64:116;;;;;;;;;;24129:137;24302:13;24279:19;:36;24275:126;;24359:31;:19;:29;:31::i;:::-;24331:12;:59;;-1:-1:-1;;;;;24331:59:116;;;-1:-1:-1;;;24331:59:116;;;;;;;;;24275:126;23349:1058;;;;;;23286:1121;:::o;898:556:124:-;1014:9;1279:1;-1:-1:-1;;1262:19:124;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:124;;1411:27;;898:556::o;5142:161:44:-;5261:35;;-1:-1:-1;;;5261:35:44;;;;;757:25:235;;;5235:7:44;;5261:6;-1:-1:-1;;;;;5261:22:44;;;;730:18:235;;5261:35:44;611:177:235;3415:460:44;3733:102;;-1:-1:-1;;;3733:102:44;;;;;7002:25:235;;;-1:-1:-1;;;;;7101:15:235;;;7081:18;;;7074:43;3820:4:44;7133:18:235;;;7126:43;3569:23:44;;3733:6;:13;;;;;;6975:18:235;;3733:102:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;4117:280::-;4327:63;-1:-1:-1;;;;;4341:6:44;4327:35;4363:12;4377;4327:35;:63::i;:::-;4117:280;;;;:::o;1884:164:124:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;21120:2126:125:-;21460:23;;;22160:104;22194:30;22200:24;193:4:124;22194:30:125;:::i;:::-;22160:9;;22238:16;22160:20;:104::i;:::-;22144:120;-1:-1:-1;22278:28:125;;22274:966;;22514:43;:9;22532:24;22514:17;:43::i;:::-;22497:60;-1:-1:-1;22696:487:125;22763:23;22804:13;22497:60;23076:18;23082:12;193:4:124;23076:18:125;:::i;:::-;23112:16;23146:23;22696:49;:487::i;6050:574::-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:125;-1:-1:-1;6249:139:125;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;3462:114:124:-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;1240:212:127:-;1292:8;-1:-1:-1;;;;;1318:30:127;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:127;;;;;;;;;;;15602:1035:114;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:114;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:114;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:114;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:114:o;8818:1173:126:-;8925:7;8934:4;9311:19;9355:20;9377:12;9393:65;9437:7;9393:26;:65::i;:::-;9354:104;;;;9477:7;9472:64;;-1:-1:-1;9512:1:126;;;;-1:-1:-1;8818:1173:126;-1:-1:-1;;;;8818:1173:126:o;9472:64::-;9712:39;:7;:28;;;:37;:39::i;:::-;9663:30;9685:7;9663:21;:30::i;:::-;9631:13;9580:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;9549:202;;9340:422;;9893:1;9878:12;:16;9874:64;;;-1:-1:-1;9918:1:126;;;;-1:-1:-1;8818:1173:126;-1:-1:-1;;8818:1173:126:o;9874:64::-;9964:12;9979:4;;-1:-1:-1;8818:1173:126;-1:-1:-1;;8818:1173:126:o;2284:748:124:-;2398:9;2663:1;-1:-1:-1;;2646:19:124;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:124;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;4331:579:128:-;4519:14;4545:12;4587:139;4637:2;4653:1;4668:2;4684:1;4699;4714:2;4587:36;:139::i;:::-;4567:159;;-1:-1:-1;4567:159:128;-1:-1:-1;4567:159:128;4736:168;;4764:129;4820:59;4764:38;:129::i;3811:844:124:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:124;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:124;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:124;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:124:o;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;15264:104;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;7273:398:125;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;-1:-1:-1;7659:4:125;;-1:-1:-1;7273:398:125;;;;;;:::o;46936:3239:126:-;47109:29;47140:12;47329:1;47304:7;:21;;;:26;47300:84;;-1:-1:-1;;47354:12:126;;;;47368:4;47346:27;;47300:84;47393:21;47426:7;:21;;;47425:22;;;:::i;:::-;47393:55;;47697:21;47755:316;47811:31;47856:7;:28;;;47904:7;:26;;;:38;;;193:4:124;47898:44:126;;;;:::i;:::-;47956:26;;:42;;;;48012:49;;;;;47755:42;:316::i;:::-;47728:343;-1:-1:-1;47728:343:126;-1:-1:-1;48085:8:126;;;:30;;-1:-1:-1;48097:18:126;;48085:30;48081:78;;;48139:1;48142:5;48131:17;;;;;;;;48081:78;49182:24;49209:34;:13;49229;49209:19;:34::i;:::-;49182:61;;193:4:124;49426:16:126;:23;49422:453;;49523:16;193:4:124;49517:22:126;49493:46;;49591:90;49638:7;:29;;;49591:21;:29;;:90;;;;:::i;:::-;49567:114;;49422:453;;;49855:1;49858:5;49847:17;;;;;;;;;49422:453;50057:7;:12;;;50033:21;:36;50029:94;;;50093:7;:12;;;50107:4;50085:27;;;;;;;;;50029:94;-1:-1:-1;50163:4:126;;-1:-1:-1;;;46936:3239:126;;;;;:::o;27196:2209::-;27376:7;27475:12;27694:274;27736:7;:29;;;27779:7;:31;;;27824:7;:28;;;27866:7;:26;;;:47;;;27928:30;:19;:28;:30::i;:::-;27927:31;;;:::i;:::-;27694:28;:274::i;:::-;27511:26;;27621:39;;;27497:471;;;;27565:42;;;27497:471;;;;;;;;;-1:-1:-1;27497:471:126;27978:167;;28133:1;28126:8;;;;;27978:167;28154:26;28222:75;28261:7;:26;;;28222:25;:75::i;:::-;28190:107;-1:-1:-1;28190:107:126;-1:-1:-1;28190:107:126;28307:167;;28462:1;28455:8;;;;;;28307:167;28808:7;:28;;;28786:18;:50;28782:89;;28859:1;28852:8;;;;;;28782:89;29120:21;29186:7;:35;;;29144:7;:27;;;:77;;;;:::i;:::-;29120:101;;29278:120;29320:18;29356:7;:28;;;29278:13;:24;;:120;;;;;:::i;:::-;29250:148;;:13;:148;:::i;30287:10343::-;30508:7;30569:21;30635:7;:35;;;30593:7;:27;;;:77;;;;:::i;:::-;31228:28;;;;31168:35;;;;30569:101;;-1:-1:-1;31144:21:126;;31168:125;;30569:101;31168:46;:125::i;:::-;31144:149;;31406:7;:21;;;31431:1;31406:26;31402:77;;31455:13;-1:-1:-1;31448:20:126;;-1:-1:-1;31448:20:126;31402:77;31842:9;31837:8756;871:1;31857;:33;31837:8756;;;32065:41;:13;32083:22;32065:17;:41::i;:::-;32049:57;;32239:12;32482:292;32528:7;:29;;;32575:7;:31;;;32624:7;:28;;;32670:7;:26;;;:47;;;32736:24;:13;:22;:24::i;32482:292::-;32283:26;;32401:39;;;32265:509;;;;32341:42;;;32265:509;;;;;;;;;-1:-1:-1;32265:509:126;32788:268;;33040:1;33033:8;;;;;;;;32788:268;33069:20;33092:79;33131:7;:26;;;33092:21;:79::i;:::-;33069:102;;33276:167;33349:7;33378:12;33412:13;33276:51;:167::i;:::-;33255:241;;;33476:5;;;;33255:241;33746:1;33722:7;:21;;;:25;33718:4509;;;34135:25;;:39;;34200:41;;;;34267:38;;;;34331:46;;;;34409:37;;;;;33931:7;;33888:40;;34046:563;;34135:39;;34200:41;;34267:38;;34331:46;34403:43;;193:4:124;34403:43:126;:::i;:::-;34472:25;;:41;;;;34539:48;;;;;34046:63;:563::i;:::-;34019:590;-1:-1:-1;34019:590:126;-1:-1:-1;34019:590:126;34627:289;;34896:1;34889:8;;;;;;;;;;;34627:289;35127:13;35102:6;:20;;;35094:46;35090:3123;;35408:115;35495:6;35408:61;:115::i;:::-;35311:212;;-1:-1:-1;35311:212:126;-1:-1:-1;35311:212:126;35545:200;;35721:1;35714:8;;;;;;;;;;;35545:200;36157:336;36211:6;:28;;;36265:6;:30;;;36321:6;:27;;;36374:6;:25;;;:46;;;36447:24;:13;:22;:24::i;36157:336::-;35929:25;;36061:38;;;35903:590;;;;35994:41;;;35903:590;;;;;;;;;-1:-1:-1;35903:590:126;36515:200;;36691:1;36684:8;;;;;;;;;;;36515:200;36860:25;;:39;;36929:41;;;;37000:38;;;;37068:46;;;;;37150:26;;:38;;;36763:600;;37000:38;37068:46;37144:44;;193:4:124;37144:44:126;:::i;36763:600::-;36736:627;-1:-1:-1;36736:627:126;-1:-1:-1;36736:627:126;37385:200;;37561:1;37554:8;;;;;;;;;;;37385:200;37908:7;:21;;;37883:13;:47;37879:316;;37965:13;37958:20;;;;;;;;;;;37879:316;38164:8;;;;31837:8756;;37879:316;33749:4478;;33718:4509;38503:18;38605:176;38672:7;38697:31;38746:7;:21;;;38605:49;:176::i;:::-;38535:246;-1:-1:-1;38535:246:126;-1:-1:-1;38799:8:126;;;:29;;;193:4:124;38811:10:126;:17;;38799:29;38795:189;;;38968:1;38961:8;;;;;;;;;;38795:189;39044:10;193:4:124;39038:16:126;39025:29;;39356:12;39436:137;:105;39513:7;:27;;;39436:7;:49;;;:76;;:105;;;;:::i;:137::-;39371:46;:35;:12;39392:13;39371:20;:35::i;:46::-;:202;;;;:::i;:::-;39356:217;;39599:1;39591:5;:9;39587:893;;;39764:57;39807:13;39764:34;39772:5;39787:10;39764:22;:34::i;:57::-;39728:93;;:13;:93;:::i;:::-;39692:129;;39587:893;;;39854:1;39846:5;:9;39842:638;;;39947:14;39964:96;40029:13;39964:35;39988:10;39964:35;39973:5;39972:6;:::i;39964:96::-;39947:113;;40091:13;40082:6;:22;40078:344;;;40196:6;40180:13;:22;40164:38;;40078:344;;;40402:1;40395:8;;;;;;;;;;;;40078:344;39857:579;39842:638;;;40460:5;;;;;;39842:638;40565:3;;;;;31894:8699;;;;31837:8756;;;-1:-1:-1;40610:13:126;30287:10343;-1:-1:-1;;;;;30287:10343:126:o;1782:813::-;2053:21;2088:22;2124:20;2169:12;2307:191;2349:14;2377:16;2407:13;2434:21;2469:19;2307:28;:191::i;:::-;2191:307;;-1:-1:-1;2191:307:126;;-1:-1:-1;2191:307:126;-1:-1:-1;2191:307:126;-1:-1:-1;2191:307:126;2508:81;;2543:35;;-1:-1:-1;;;2543:35:126;;;;;;;;;;;2508:81;2159:436;1782:813;;;;;;;;;:::o;1303:160:168:-;1412:43;;;-1:-1:-1;;;;;7570:32:235;;1412:43:168;;;7552:51:235;7619:18;;;;7612:34;;;1412:43:168;;;;;;;;;;7525:18:235;;;;1412:43:168;;;;;;;;-1:-1:-1;;;;;1412:43:168;-1:-1:-1;;;1412:43:168;;;1385:71;;1405:5;;1385:19;:71::i;10452:583:128:-;10642:14;10668:12;10710:141;10762:2;10778:1;10793:2;10809:1;10824;10839:2;10710:38;:141::i;10998:450:114:-;11097:21;11130:24;193:4:124;11157:19:114;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:114;11417:23;193:4:124;11417:17:114;:23;:::i;:::-;11395:13;;:21;:46::i;10319:9443:126:-;10427:6;10435:4;11237:23;11392:130;:102;11460:7;:33;;;11392:7;:42;;;:67;;:102;;;;:::i;:130::-;11263:114;:90;11320:7;:32;;;11263:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;11237:285;;11533:30;11565:12;11581:157;11662:7;:21;;;11701:7;:23;;;11581:63;:157::i;:::-;11532:206;;;;11753:7;11748:160;;-1:-1:-1;11888:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;10319:9443:126:o;11748:160::-;12157:1;12138:16;:20;12134:7595;;;12174:25;12210:16;12174:53;;12415:21;12477:401;12558:7;:21;;;12601:7;:23;;;12646:7;:20;;;12688:7;:28;;;12744:7;:19;;;193:4:124;12738:25:126;;;;:::i;:::-;12785:7;:23;;;12830:7;:30;;;12477:59;:401::i;:::-;12450:428;-1:-1:-1;12450:428:126;-1:-1:-1;12450:428:126;12892:176;;-1:-1:-1;13044:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;10319:9443:126:o;12892:176::-;13245:17;13228:13;:34;13224:2891;;13536:21;13602:389;13702:22;13750:7;:20;;;13796:17;13845:7;:19;;;193:4:124;13839:25:126;;;;:::i;:::-;13890:7;:23;;;13939:7;:30;;;13602:74;:389::i;:::-;13575:416;-1:-1:-1;13575:416:126;-1:-1:-1;14297:8:126;;:84;;;;;14349:7;:32;;;14329:17;:52;14297:84;14272:335;;;-1:-1:-1;14430:1:126;;14433:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;14272:335::-;14540:7;14535:72;;-1:-1:-1;14579:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;14535:72::-;14634:24;:13;:22;:24::i;:::-;14633:25;;;:::i;:::-;14625:40;14660:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;;10319:9443:126:o;13224:2891::-;15350:1;15323:7;:23;;;:28;15319:782;;15409:95;15435:7;:28;;;15410:22;:53;;;;:::i;15409:95::-;15408:96;;;:::i;15319:782::-;15961:28;;;;15937:21;;15936:94;;15937:52;;;:::i;12134:7595::-;16240:1;16221:16;:20;16217:3512;;;16257:25;16293:17;16294:16;16293:17;:::i;:::-;16257:54;;16428:21;16490:307;16571:22;16615:7;:20;;;16663:7;:19;;;193:4:124;16657:25:126;;;;:::i;:::-;16704:7;:23;;;16749:7;:30;;;16490:59;:307::i;:::-;16463:334;-1:-1:-1;16463:334:126;-1:-1:-1;16463:334:126;16811:64;;-1:-1:-1;16851:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;10319:9443:126:o;16811:64::-;17052:17;17035:13;:34;17031:2688;;17344:21;17410:387;17508:22;17556:7;:20;;;17602:17;17651:7;:19;;;193:4:124;17645:25:126;;;;:::i;:::-;17696:7;:23;;;17745:7;:30;;;17410:72;:387::i;:::-;17383:414;-1:-1:-1;17383:414:126;-1:-1:-1;18103:8:126;;:84;;;;;18155:7;:32;;;18135:17;:52;18103:84;18078:335;;;-1:-1:-1;18236:1:126;;18239:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;18078:335::-;18346:7;18341:72;;-1:-1:-1;18385:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;18341:72::-;18439:24;:13;:22;:24::i;17031:2688::-;18797:23;18867:335;18956:22;19004:7;:20;;;19056:7;:19;;;193:4:124;19050:25:126;;;;:::i;:::-;19101:7;:23;;;19150:7;:30;;;18867:63;:335::i;:::-;18838:364;-1:-1:-1;18838:364:126;-1:-1:-1;18838:364:126;19220:72;;-1:-1:-1;19264:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;19220:72::-;19483:177;19526:122;19599:7;:23;;;19547:13;19527:17;:33;;;;:::i;19526:122::-;19484:164;;:15;:164;:::i;16217:3512::-;-1:-1:-1;19747:1:126;;19750:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;10319:9443:126:o;20009:1167::-;20112:6;20970:199;20988:156;21049:7;:32;;;193:4:124;21043:38:126;;;;:::i;:::-;21103:23;;;;20988:24;;;;;:156;:33;:156::i;20970:199::-;20752:203;20770:160;20834:7;:33;;;193:4:124;20828:39:126;;;;:::i;:::-;20889:23;;;;20770:25;;;;;:160;:36;:160::i;5576:1765:128:-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:124;6666:2:128;:9;6662:261;;6764:20;6771:12;193:4:124;6781:1:128;6771:9;:12::i;:::-;6764:2;;:6;:20::i;:::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:124;6909:1:128;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;-1:-1:-1;7319:4:128;;-1:-1:-1;;5576:1765:128;;;;;;;;;;:::o;8508:3846:124:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:124;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:124;-1:-1:-1;9283:1:124;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:124;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:124;10385:5;;10384:13;;-1:-1:-1;;10383:50:124;10453:5;;10452:13;;;-1:-1:-1;;10451:50:124;10519:5;;;-1:-1:-1;;10519:46:124;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:124:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:124;:26;5126:40;;-1:-1:-1;5165:1:124;;4907:3302;-1:-1:-1;4907:3302:124:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:124;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:124;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:124;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:124;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:124;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:124;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:124;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:124;7584:10;;;;-1:-1:-1;6063:75:124;;-1:-1:-1;6458:50:124;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;15892:1050:128:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:128;16337:28;193:4:124;16345:13:128;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:124;16379:8:128;:15;16375:293;;16490:26;16503:12;193:4:124;16513:1:128;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:124;16654:1:128;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:128;;-1:-1:-1;;15892:1050:128;;;;;;;;;:::o;3400:3557:126:-;3675:21;3710:22;3746:20;3780:4;3919:19;3942:1;3919:24;3915:117;;-1:-1:-1;3967:14:126;;-1:-1:-1;3983:16:126;;-1:-1:-1;4001:13:126;;-1:-1:-1;4016:4:126;3959:62;;3915:117;4201:21;4253:19;4225:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;4201:71;;4303:32;:21;:30;:32::i;:::-;4286:14;:49;4282:103;;;4359:1;4362;4365;4368:5;4351:23;;;;;;;;;;;4282:103;4418:14;4394:39;;5008:1;4988:16;:21;4984:497;;5121:112;:84;:13;5171:16;5190:14;5121:41;:84::i;:112::-;5103:130;;4984:497;;;5359:111;:83;5407:17;5408:16;5407:17;:::i;:::-;5359:13;;5427:14;5359:39;:83::i;:111::-;5358:112;;;:::i;:::-;5340:130;;4984:497;6183:33;6218:12;6234:143;6315:14;6347:16;6234:63;:143::i;:::-;6182:195;;;;6392:7;6387:62;;6423:1;6426;6429;6432:5;6415:23;;;;;;;;;;;;;6387:62;6458:30;6534:141;6615:13;6646:15;6534:63;:141::i;:::-;6498:177;-1:-1:-1;6498:177:126;-1:-1:-1;6498:177:126;6685:62;;6721:1;6724;6727;6730:5;6713:23;;;;;;;;;;;;;;6685:62;6771:109;:13;6809:22;6845:25;6771:24;:109::i;:::-;6756:124;-1:-1:-1;6945:4:126;;-1:-1:-1;;;;;3400:3557:126;;;;;;;;;;;:::o;7782:341::-;7885:7;7905:20;7927:12;7943:56;7982:7;7943:25;:56::i;:::-;7904:95;;;;8014:7;8009:79;;8044:33;;-1:-1:-1;;;8044:33:126;;;;;;;;;;;44905:1269;45532:28;;;;45109:4;;45532:50;;45567:14;45532:34;:50::i;:::-;45422:27;;;;45400:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;46093:28:126;;;;46028:139;;46139:14;46029:34;1037:3;193:4:124;46029:34:126;:::i;:::-;46028:47;:139;:47;:139::i;:::-;45916:27;;;;45896:48;;:13;;:19;:48::i;:::-;:271;;45125:1042;44905:1269;-1:-1:-1;;;;44905:1269:126:o;17581:1971:128:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:128;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:21::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:124;18982:15:128;;18978:295;;19096:28;19109:14;193:4:124;19121:1:128;19109:11;:14::i;19096:28::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:124;19259:1:128;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:128;;-1:-1:-1;;;;17581:1971:128;;;;;;;;;;;:::o;42321:1866:126:-;42472:7;42481:4;42763:1;42728:7;:31;;;:36;42724:84;;-1:-1:-1;42788:1:126;;;;-1:-1:-1;42321:1866:126;-1:-1:-1;42321:1866:126:o;42724:84::-;42859:19;42881:49;42903:7;:26;;;42881:21;:49::i;:::-;42859:71;;43073:11;43087:167;43138:7;:27;;;43209:7;:35;;;43179:7;:27;;;:65;;;;:::i;:::-;43087:28;;;;;:167;:37;:167::i;:::-;43073:181;;43284:1;43268:12;:17;43264:411;;43329:3;43313:12;43305:27;43301:304;;;43384:28;;;43264:411;;43301:304;-1:-1:-1;43581:1:126;;;;-1:-1:-1;42321:1866:126;-1:-1:-1;;;42321:1866:126:o;43264:411::-;43650:13;43651:12;43650:13;:::i;:::-;43635:29;;;;:::i;:::-;;;43264:411;43915:31;;;;43838:29;;;;:119;;43890:3;;43838:38;:119::i;:::-;43832:125;;44040:3;44008:7;:29;;;:35;44004:83;;;-1:-1:-1;44067:1:126;;;;-1:-1:-1;42321:1866:126;-1:-1:-1;;;42321:1866:126:o;44004:83::-;44160:3;44128:7;:29;;;:35;44165:4;44120:50;;;;;;42321:1866;;;:::o;52581:5799::-;52797:7;52806:4;52895:20;52944:1;52929:11;:16;52925:670;;52992:26;;:39;;;:78;;53058:11;;52992:78;:::i;:::-;52961:109;;52925:670;;;53101:18;53130:12;53131:11;53130:12;:::i;:::-;53174:26;;:39;;;53101:42;;-1:-1:-1;53161:52:126;;53157:428;;;53304:26;;:39;;;:76;;;;-1:-1:-1;53157:428:126;;;53561:1;53564:5;53553:17;;;;;;;;53157:428;53087:508;52925:670;53984:26;;:40;;54042:42;;;;;53855:30;;;;53903:195;;53984:40;53903:63;:195::i;:::-;53854:244;;;;54113:7;54108:56;;54144:1;54147:5;54136:17;;;;;;;;;54108:56;54656:26;;:38;;;;54587:39;;;;;54173:18;;54474:274;;54526:208;;54587:129;;:39;:43;:129::i;:::-;54526:31;;:39;:208::i;:::-;54474:28;;;;;:34;:274::i;:::-;54410:26;;:38;;;;54256:83;;;;;54194:265;;54256:193;;:132;;54365:22;54256:108;:132::i;:193::-;54194:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;54173:575;;54818:11;54832:185;54882:125;54937:56;54954:7;:26;;;:38;;;54937:12;:16;;:56;;;;:::i;:::-;54882:31;;:37;:125::i;:::-;54832:28;;;;;:36;:185::i;:::-;54818:199;;55044:3;55031:10;:16;55027:64;;;55071:1;55074:5;55063:17;;;;;;;;;;;55027:64;55138:3;55124:17;;;;55381:9;55393:294;55425:22;55461:7;:26;;;:39;;;55520:7;:26;;;:38;;;193:4:124;55514:44:126;;;;:::i;:::-;55572:26;;:42;;;;55628:49;;;;;55393:18;:294::i;:::-;55381:306;;55697:13;55713:84;55749:7;:26;;;:38;;;193:4:124;55743:44:126;;;;:::i;:::-;55713:12;;:16;:84::i;:::-;55697:100;;55815:5;55811:1;:9;55807:201;;;55988:1;55991:5;55980:17;;;;;;;;;;;;;55807:201;56114:26;;:49;;;;56177:42;;;;;56049:9;;;;56086:143;;56049:9;;56086:14;:143::i;:::-;56078:151;;193:4:124;56243:5:126;:12;56239:584;;56454:26;;:38;;;56355:169;;56382:128;;56448:44;;193:4:124;56448:44:126;:::i;:::-;56382:26;;:38;;;;:44;:128::i;56355:169::-;56347:177;;56239:584;;;56742:26;;:38;;;56641:171;;56668:130;;56736:44;;193:4:124;56736:44:126;:::i;:::-;56668:26;;:38;;;;:46;:130::i;56641:171::-;56633:179;;56239:584;56975:26;;:42;;;56923:104;;:10;;56956:5;;56923:19;:104::i;:::-;56910:117;;57087:10;193:4:124;57081:16:126;57077:398;;;57160:10;193:4:124;57154:16:126;57141:29;;57077:398;;;57456:1;57459:4;57448:16;;;;;;;;;;;;;57077:398;57649:1;57614:7;:31;;;:36;57610:728;;57736:29;;;;57680:31;;;;57672:107;;:46;:107::i;:::-;57666:113;;193:4:124;57797:3:126;:10;57793:168;;57937:1;57940:5;57929:17;;;;;;;;;;;;;57793:168;193:4:124;58008:9:126;;;;;58058:23;:10;58008:9;58058:18;:23::i;:::-;58045:36;;57610:728;;;58125:202;58187:126;58262:7;:29;;;58196:7;:31;;;58195:32;;;:::i;58187:126::-;58161:152;;193:4:124;58161:152:126;:::i;:::-;58125:10;;:18;:202::i;:::-;58112:215;;57610:728;-1:-1:-1;58356:10:126;;58368:4;;-1:-1:-1;52581:5799:126;-1:-1:-1;;;;;;;;;52581:5799:126:o;4059:629:168:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:168;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:168;;-1:-1:-1;;;;;8071:32:235;;4631:40:168;;;8053:51:235;8026:18;;4631:40:168;7907:203:235;11709:1515:128;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:128;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:124;12549:2:128;:9;12545:263;;12648:20;12655:12;193:4:124;12665:1:128;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:124;12794:1:128;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;;13202:4;;-1:-1:-1;11709:1515:128;-1:-1:-1;;;;;;;11709:1515:128:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:128;14607:28;193:4:124;14617:11:128;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:124;14649:9:128;:16;14645:300;;14765:29;14779:14;193:4:124;14791:1:128;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:124;14931:1:128;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:128;-1:-1:-1;;;;;;13859:1409:128:o;20059:343::-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;:::-;:46;;;;:::i;20915:352::-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;2705:151:169:-;2780:12;2811:38;2833:6;2841:4;2847:1;2780:12;3421;3435:23;3462:6;-1:-1:-1;;;;;3462:11:169;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:169;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:169;;-1:-1:-1;;;;;8071:32:235;;5121:24:169;;;8053:51:235;8026:18;;5121:24:169;7907:203:235;5041:119:169;-1:-1:-1;5180:10:169;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:169;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:592:235:-;128:6;136;144;152;205:3;193:9;184:7;180:23;176:33;173:53;;;222:1;219;212:12;173:53;258:9;245:23;235:33;;315:2;304:9;300:18;287:32;277:42;;366:2;355:9;351:18;338:32;328:42;;421:2;410:9;406:18;393:32;448:18;440:6;437:30;434:50;;;480:1;477;470:12;434:50;503:22;;559:2;541:16;;;537:25;534:45;;;575:1;572;565:12;534:45;14:592;;;;-1:-1:-1;14:592:235;;-1:-1:-1;;14:592:235:o;793:127::-;854:10;849:3;845:20;842:1;835:31;885:4;882:1;875:15;909:4;906:1;899:15;925:125;990:9;;;1011:10;;;1008:36;;;1024:18;;:::i;1055:200::-;1121:9;;;1094:4;1149:9;;1177:10;;1189:12;;;1173:29;1212:12;;;1204:21;;1170:56;1167:82;;;1229:18;;:::i;1260:286::-;1319:6;1372:2;1360:9;1351:7;1347:23;1343:32;1340:52;;;1388:1;1385;1378:12;1340:52;1414:23;;-1:-1:-1;;;;;1466:31:235;;1456:42;;1446:70;;1512:1;1509;1502:12;1551:118;1637:5;1630:13;1623:21;1616:5;1613:32;1603:60;;1659:1;1656;1649:12;1674:241;1730:6;1783:2;1771:9;1762:7;1758:23;1754:32;1751:52;;;1799:1;1796;1789:12;1751:52;1838:9;1825:23;1857:28;1879:5;1857:28;:::i;2470:216::-;2534:9;;;2562:11;;;2509:3;2592:9;;2620:10;;2616:19;;2645:10;;2637:19;;2613:44;2610:70;;;2660:18;;:::i;:::-;2610:70;;2470:216;;;;:::o;3169:127::-;3230:10;3225:3;3221:20;3218:1;3211:31;3261:4;3258:1;3251:15;3285:4;3282:1;3275:15;3301:112;3333:1;3359;3349:35;;3364:18;;:::i;:::-;-1:-1:-1;3398:9:235;;3301:112::o;3418:128::-;3485:9;;;3506:11;;;3503:37;;;3520:18;;:::i;3551:193::-;-1:-1:-1;;;;;3669:10:235;;;3681;;;3665:27;;3704:11;;;3701:37;;;3718:18;;:::i;3749:197::-;-1:-1:-1;;;;;3871:10:235;;;3883;;;3867:27;;3906:11;;;3903:37;;;3920:18;;:::i;4600:168::-;4673:9;;;4704;;4721:15;;;4715:22;;4701:37;4691:71;;4742:18;;:::i;4773:200::-;-1:-1:-1;;;;;4909:10:235;;;4897;;;4893:27;;4932:12;;;4929:38;;;4947:18;;:::i;4978:245::-;5076:2;5046:17;;;5065;;;;5042:41;-1:-1:-1;;;;;5098:44:235;;-1:-1:-1;;;;;;5144:49:235;;5095:99;5092:125;;;5197:18;;:::i;5228:213::-;5263:3;5311:5;5307:2;5296:21;-1:-1:-1;;;;;5341:39:235;5332:7;5329:52;5326:78;;5384:18;;:::i;:::-;5424:1;5420:15;;5228:213;-1:-1:-1;;5228:213:235:o;5578:361::-;5743:2;5728:18;;5776:1;5765:13;;5755:144;;5821:10;5816:3;5812:20;5809:1;5802:31;5856:4;5853:1;5846:15;5884:4;5881:1;5874:15;5755:144;5908:25;;;5578:361;:::o;5944:136::-;5979:3;-1:-1:-1;;;6000:22:235;;5997:48;;6025:18;;:::i;:::-;-1:-1:-1;6065:1:235;6061:13;;5944:136::o;6085:521::-;6162:4;6168:6;6228:11;6215:25;6322:2;6318:7;6307:8;6291:14;6287:29;6283:43;6263:18;6259:68;6249:96;;6341:1;6338;6331:12;6249:96;6368:33;;6420:20;;;-1:-1:-1;6463:18:235;6452:30;;6449:50;;;6495:1;6492;6485:12;6449:50;6528:4;6516:17;;-1:-1:-1;6559:14:235;6555:27;;;6545:38;;6542:58;;;6596:1;6593;6586:12;6611:184;6681:6;6734:2;6722:9;6713:7;6709:23;6705:32;6702:52;;;6750:1;6747;6740:12;6702:52;-1:-1:-1;6773:16:235;;6611:184;-1:-1:-1;6611:184:235:o;7180:193::-;7219:1;7245;7235:35;;7250:18;;:::i;:::-;-1:-1:-1;;;7286:18:235;;-1:-1:-1;;7306:13:235;;7282:38;7279:64;;;7323:18;;:::i;:::-;-1:-1:-1;7357:10:235;;7180:193::o;7657:245::-;7724:6;7777:2;7765:9;7756:7;7752:23;7748:32;7745:52;;;7793:1;7790;7783:12;7745:52;7825:9;7819:16;7844:28;7866:5;7844:28;:::i;8115:412::-;8244:3;8282:6;8276:13;8307:1;8317:129;8331:6;8328:1;8325:13;8317:129;;;8429:4;8413:14;;;8409:25;;8403:32;8390:11;;;8383:53;8346:12;8317:129;;;-1:-1:-1;8501:1:235;8465:16;;8490:13;;;-1:-1:-1;8465:16:235;8115:412;-1:-1:-1;8115:412:235:o",
        "linkReferences": {},
        "immutableReferences": {
            "18129": [
                {
                    "start": 1470,
                    "length": 32
                }
            ],
            "18132": [
                {
                    "start": 1634,
                    "length": 32
                },
                {
                    "start": 3141,
                    "length": 32
                },
                {
                    "start": 5412,
                    "length": 32
                },
                {
                    "start": 7249,
                    "length": 32
                },
                {
                    "start": 12059,
                    "length": 32
                }
            ],
            "18135": [
                {
                    "start": 2806,
                    "length": 32
                },
                {
                    "start": 2950,
                    "length": 32
                },
                {
                    "start": 3409,
                    "length": 32
                },
                {
                    "start": 5219,
                    "length": 32
                },
                {
                    "start": 9933,
                    "length": 32
                }
            ],
            "18138": [
                {
                    "start": 2999,
                    "length": 32
                },
                {
                    "start": 7604,
                    "length": 32
                }
            ],
            "18141": [
                {
                    "start": 1826,
                    "length": 32
                },
                {
                    "start": 3263,
                    "length": 32
                },
                {
                    "start": 6669,
                    "length": 32
                },
                {
                    "start": 7739,
                    "length": 32
                }
            ],
            "18144": [
                {
                    "start": 6713,
                    "length": 32
                },
                {
                    "start": 7662,
                    "length": 32
                },
                {
                    "start": 7783,
                    "length": 32
                }
            ],
            "18147": [
                {
                    "start": 6419,
                    "length": 32
                }
            ],
            "18150": [
                {
                    "start": 2840,
                    "length": 32
                },
                {
                    "start": 2917,
                    "length": 32
                },
                {
                    "start": 3376,
                    "length": 32
                },
                {
                    "start": 5253,
                    "length": 32
                },
                {
                    "start": 9819,
                    "length": 32
                }
            ],
            "18153": [
                {
                    "start": 4183,
                    "length": 32
                },
                {
                    "start": 5569,
                    "length": 32
                },
                {
                    "start": 5670,
                    "length": 32
                },
                {
                    "start": 8342,
                    "length": 32
                },
                {
                    "start": 8402,
                    "length": 32
                },
                {
                    "start": 9016,
                    "length": 32
                },
                {
                    "start": 9857,
                    "length": 32
                }
            ],
            "18156": [
                {
                    "start": 175,
                    "length": 32
                },
                {
                    "start": 803,
                    "length": 32
                },
                {
                    "start": 9895,
                    "length": 32
                }
            ],
            "7753": [
                {
                    "start": 6072,
                    "length": 32
                },
                {
                    "start": 9267,
                    "length": 32
                },
                {
                    "start": 9369,
                    "length": 32
                },
                {
                    "start": 9493,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpdateLiquidityFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds the user receives. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds of closing this short. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\"}},\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"title\":\"ERC4626Target2\",\"version\":1},\"userdoc\":{\"errors\":{\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientBalance()\":[{\"notice\":\"Thrown when a user doesn't have a sufficient balance to perform         an action.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}],\"UpdateLiquidityFailed()\":[{\"notice\":\"Thrown when `LPMath.calculateUpdateLiquidity` fails.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"constructor\":{\"notice\":\"Initializes the target2 contract.\"}},\"notice\":\"ERC4626Hyperdrive's target2 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target2.sol\":\"ERC4626Target2\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39\",\"dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad\",\"dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb\"]},\"contracts/src/instances/erc4626/ERC4626Target2.sol\":{\"keccak256\":\"0xc41cc2e80e975b5a361d69462870e8a62ad29eaf47c4e40c0d594cacd4b37fd7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3d290759e14a2d4e153edfc4c2e3fb599345c66b5a2dc137102c1cb37eac860\",\"dweb:/ipfs/QmYnooe7vq13JgsiuVmS758cXeZs7kGGTMutbGkihTWwLf\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0x95d34e3dbf7a85d9d5d0071baddf3a8d73cf8a68a5c062d7656f4984b3ef5cb6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2067273085c326e2f1789d1f571ea6fe4ecf211e551ffcda03b98ae0c9cdb724\",\"dweb:/ipfs/QmYxrY9uCXkaTSTCqvQvYx9phDcvkJim1JFbopxJRFEPbw\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "_config",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
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
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
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
                                    ]
                                }
                            ]
                        },
                        {
                            "internalType": "contract IERC4626",
                            "name": "__vault",
                            "type": "address"
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
                    "type": "error",
                    "name": "AddressEmptyCode"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "AddressInsufficientBalance"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DistributeExcessIdleFailed"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpInvalidExponent"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "FailedInnerCall"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InsufficientBalance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
                            "name": "reason",
                            "type": "uint8"
                        }
                    ],
                    "type": "error",
                    "name": "InsufficientLiquidity"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidPresentValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidTimestamp"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "LnInvalidInput"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MinimumTransactionAmount"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "OutputLimit"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "RestrictedZeroAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "SafeERC20FailedOperation"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt128"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint112"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint128"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UpdateLiquidityFailed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "AddLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "basePayment",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "fees",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CollectGovernanceFee",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "checkpointTime",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedShorts",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedLongs",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CreateCheckpoint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newFeeCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "FeeCollectorUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "apr",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialize",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauseStatusUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newPauser",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauserUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RedeemWithdrawalShares",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RemoveLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Sweep",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newSweepCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SweepCollectorUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
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
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
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
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "closeLong",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
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
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
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
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "closeShort",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of longs to close.",
                            "_maturityTime": "The maturity time of the long.",
                            "_minOutput": "The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The proceeds the user receives. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`."
                        }
                    },
                    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of shorts to close.",
                            "_maturityTime": "The maturity time of the short.",
                            "_minOutput": "The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The proceeds of closing this short. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`."
                        }
                    },
                    "constructor": {
                        "params": {
                            "__vault": "The ERC4626 compatible vault.",
                            "_config": "The configuration of the Hyperdrive pool."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Closes a long position with a specified maturity time."
                    },
                    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Closes a short position with a specified maturity time."
                    },
                    "constructor": {
                        "notice": "Initializes the target2 contract."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/instances/erc4626/ERC4626Target2.sol": "ERC4626Target2"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/HyperdriveTarget2.sol": {
                "keccak256": "0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79",
                "urls": [
                    "bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39",
                    "dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Base.sol": {
                "keccak256": "0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18",
                "urls": [
                    "bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad",
                    "dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/instances/erc4626/ERC4626Target2.sol": {
                "keccak256": "0xc41cc2e80e975b5a361d69462870e8a62ad29eaf47c4e40c0d594cacd4b37fd7",
                "urls": [
                    "bzz-raw://a3d290759e14a2d4e153edfc4c2e3fb599345c66b5a2dc137102c1cb37eac860",
                    "dweb:/ipfs/QmYnooe7vq13JgsiuVmS758cXeZs7kGGTMutbGkihTWwLf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626.sol": {
                "keccak256": "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e",
                "urls": [
                    "bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3",
                    "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"
                ],
                "license": "GPL-2.0-or-later"
            },
            "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
                "keccak256": "0x95d34e3dbf7a85d9d5d0071baddf3a8d73cf8a68a5c062d7656f4984b3ef5cb6",
                "urls": [
                    "bzz-raw://2067273085c326e2f1789d1f571ea6fe4ecf211e551ffcda03b98ae0c9cdb724",
                    "dweb:/ipfs/QmYxrY9uCXkaTSTCqvQvYx9phDcvkJim1JFbopxJRFEPbw"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
                "keccak256": "0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33",
                "urls": [
                    "bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73",
                    "dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952",
                "urls": [
                    "bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf",
                    "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d",
                "urls": [
                    "bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603",
                    "dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb",
                "urls": [
                    "bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6",
                    "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d",
                "urls": [
                    "bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2",
                    "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832",
                "urls": [
                    "bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7",
                    "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5",
                "urls": [
                    "bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006",
                    "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a",
                "urls": [
                    "bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195",
                    "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067",
                "urls": [
                    "bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f",
                    "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/instances/erc4626/ERC4626Target2.sol",
        "id": 8204,
        "exportedSymbols": {
            "ERC4626Base": [
                7983
            ],
            "ERC4626Target2": [
                8203
            ],
            "HyperdriveTarget2": [
                5604
            ],
            "IERC4626": [
                10602
            ],
            "IHyperdrive": [
                11028
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1092:48",
        "nodes": [
            {
                "id": 8172,
                "nodeType": "PragmaDirective",
                "src": "39:23:48",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 8174,
                "nodeType": "ImportDirective",
                "src": "64:73:48",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget2.sol",
                "file": "../../external/HyperdriveTarget2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8204,
                "sourceUnit": 5605,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8173,
                            "name": "HyperdriveTarget2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5604,
                            "src": "73:17:48",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8176,
                "nodeType": "ImportDirective",
                "src": "138:57:48",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC4626.sol",
                "file": "../../interfaces/IERC4626.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8204,
                "sourceUnit": 10603,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8175,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10602,
                            "src": "147:8:48",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8178,
                "nodeType": "ImportDirective",
                "src": "196:63:48",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8204,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8177,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "205:11:48",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8180,
                "nodeType": "ImportDirective",
                "src": "260:48:48",
                "nodes": [],
                "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
                "file": "./ERC4626Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8204,
                "sourceUnit": 7984,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8179,
                            "name": "ERC4626Base",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7983,
                            "src": "269:11:48",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8203,
                "nodeType": "ContractDefinition",
                "src": "755:375:48",
                "nodes": [
                    {
                        "id": 8202,
                        "nodeType": "FunctionDefinition",
                        "src": "987:141:48",
                        "nodes": [],
                        "body": {
                            "id": 8201,
                            "nodeType": "Block",
                            "src": "1126:2:48",
                            "nodes": [],
                            "statements": []
                        },
                        "documentation": {
                            "id": 8186,
                            "nodeType": "StructuredDocumentation",
                            "src": "819:163:48",
                            "text": "@notice Initializes the target2 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 8195,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8189,
                                        "src": "1096:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 8196,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 8194,
                                    "name": "HyperdriveTarget2",
                                    "nameLocations": [
                                        "1078:17:48"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5604,
                                    "src": "1078:17:48"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1078:26:48"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 8198,
                                        "name": "__vault",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8192,
                                        "src": "1117:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$10602",
                                            "typeString": "contract IERC4626"
                                        }
                                    }
                                ],
                                "id": 8199,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 8197,
                                    "name": "ERC4626Base",
                                    "nameLocations": [
                                        "1105:11:48"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 7983,
                                    "src": "1105:11:48"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1105:20:48"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 8193,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8189,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "1038:7:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8202,
                                    "src": "1008:37:48",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 8188,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8187,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1008:11:48",
                                                "1020:10:48"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10819,
                                            "src": "1008:22:48"
                                        },
                                        "referencedDeclaration": 10819,
                                        "src": "1008:22:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10819_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8192,
                                    "mutability": "mutable",
                                    "name": "__vault",
                                    "nameLocation": "1064:7:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8202,
                                    "src": "1055:16:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$10602",
                                        "typeString": "contract IERC4626"
                                    },
                                    "typeName": {
                                        "id": 8191,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8190,
                                            "name": "IERC4626",
                                            "nameLocations": [
                                                "1055:8:48"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10602,
                                            "src": "1055:8:48"
                                        },
                                        "referencedDeclaration": 10602,
                                        "src": "1055:8:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC4626_$10602",
                                            "typeString": "contract IERC4626"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "998:79:48"
                        },
                        "returnParameters": {
                            "id": 8200,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1126:0:48"
                        },
                        "scope": 8203,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 8182,
                            "name": "HyperdriveTarget2",
                            "nameLocations": [
                                "782:17:48"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5604,
                            "src": "782:17:48"
                        },
                        "id": 8183,
                        "nodeType": "InheritanceSpecifier",
                        "src": "782:17:48"
                    },
                    {
                        "baseName": {
                            "id": 8184,
                            "name": "ERC4626Base",
                            "nameLocations": [
                                "801:11:48"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 7983,
                            "src": "801:11:48"
                        },
                        "id": 8185,
                        "nodeType": "InheritanceSpecifier",
                        "src": "801:11:48"
                    }
                ],
                "canonicalName": "ERC4626Target2",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 8181,
                    "nodeType": "StructuredDocumentation",
                    "src": "310:445:48",
                    "text": "@author DELV\n @title ERC4626Target2\n @notice ERC4626Hyperdrive's target2 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    8203,
                    7983,
                    5604,
                    14797,
                    18103,
                    16633,
                    15699,
                    17117,
                    13157,
                    14333,
                    18319,
                    71995,
                    11551,
                    12117
                ],
                "name": "ERC4626Target2",
                "nameLocation": "764:14:48",
                "scope": 8204,
                "usedErrors": [
                    10890,
                    10896,
                    10902,
                    10926,
                    10932,
                    10935,
                    10941,
                    10950,
                    10959,
                    10970,
                    10982,
                    10985,
                    10988,
                    10991,
                    10997,
                    71370,
                    71651,
                    71656,
                    71659,
                    71940
                ],
                "usedEvents": [
                    11371,
                    11386,
                    11405,
                    11420,
                    11437,
                    11456,
                    11475,
                    11496,
                    11509,
                    11516,
                    11521,
                    11526,
                    11531,
                    11538,
                    11543,
                    11550,
                    12098,
                    12107,
                    12116
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 48
};
