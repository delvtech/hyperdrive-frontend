export const MockHyperdriveMath = {
    abi: [
        {
            "type": "function",
            "name": "calculateAbsoluteMaxLong",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct HyperdriveUtils.MaxTradeParams",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                            "name": "curveFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flatFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLPFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_spotPrice",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateCloseLong",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_normalizedTimeRemaining",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
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
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateCloseShort",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountOut",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_normalizedTimeRemaining",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
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
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateEffectiveShareReserves",
            "inputs": [
                {
                    "name": "_shareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareAdjustment",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxLong",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct HyperdriveUtils.MaxTradeParams",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                            "name": "curveFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flatFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLPFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_checkpointExposure",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxShort",
            "inputs": [
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct HyperdriveUtils.MaxTradeParams",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int256",
                            "internalType": "int256"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                            "name": "curveFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "flatFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governanceLPFee",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "_checkpointExposure",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateNegativeInterestOnClose",
            "inputs": [
                {
                    "name": "_shareProceeds",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareReservesDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareCurveDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_totalGovernanceFee",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_openVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_closeVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_isLong",
                    "type": "bool",
                    "internalType": "bool"
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
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateOpenLong",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateOpenShort",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_amountIn",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateShortProceedsDown",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_openVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_closeVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_flatFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateShortProceedsUp",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_shareAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_openVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_closeVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_flatFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSpotAPR",
            "inputs": [
                {
                    "name": "_effectiveShareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_positionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSpotPrice",
            "inputs": [
                {
                    "name": "_shareReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondReserves",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_initialVaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretch",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateTimeStretch",
            "inputs": [
                {
                    "name": "apr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "positionDuration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
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
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b506123ac806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806394169d491161008c578063bc1e106511610066578063bc1e106514610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b806394169d49146101c45780639e489b99146101f2578063a280a2821461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f8714610176578063902b1099146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd366004612003565b610264565b6040519081526020015b60405180910390f35b610102610123366004612035565b61027d565b61013b610136366004612145565b610298565b6040805192835260208301919091520161010c565b61010261015e36600461217c565b6102b9565b61010261017136600461217c565b6102d6565b6101896101843660046121bf565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf36600461217c565b61036b565b6101d76101d2366004612224565b61037c565b6040805193845260208401929092529082015260600161010c565b610102610200366004612145565b6103ac565b61013b610213366004612145565b6103c3565b610102610226366004612270565b6103d4565b610102610239366004612270565b6103eb565b61010261024c36600461217c565b6103f8565b6101d761025f366004612224565b610409565b60008061027386868686610421565b9695505050505050565b60008061028d8787878787610441565b979650505050505050565b6000806000806102a987878761045c565b909450925050505b935093915050565b6000806102ca888888888888610670565b98975050505050505050565b6000806102ca888888888888610691565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106b2565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b6000806102ca888888888888610751565b6000806000806000806103948d8d8d8d8d8d8d61079b565b919750955093505050505b9750975097945050505050565b60006103b984848461080a565b90505b9392505050565b6000806000806102a98787876109bc565b6000806103e18484610c18565b9150505b92915050565b6000806103e18484610c3e565b6000806102ca888888888888610cd5565b6000806000806000806103948d8d8d8d8d8d8d610cf4565b600061043882610432858888610d48565b90610d66565b95945050505050565b60008061045087878786610421565b905061028d8185610dcc565b600080600061047386600001518760200151610c18565b9050600061048f8288604001518960e001518a60a00151610421565b905060008061049f8985856109bc565b909250905060006104b38a8a858588610df2565b91505080156104ca575090945092506102b1915050565b506104d789838a86610f2a565b95506104e589878686610fca565b94506000806104f78b8b8a8a89610df2565b91509150806105675760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610661578489106105dd5760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b606482015260840161055e565b60006105eb8d8b8a8a61101d565b93509050826105fa5750610661565b600061060685836110b6565b610610908c6122a8565b905060006106208f838c8c610fca565b905061062f8f8f84848d610df2565b9096509450841561064557819b50809a5061064d565b505050610661565b5050508061065a906122bb565b905061056a565b50505050505050935093915050565b600061028d87878761068a88670de0b6b3a76400006122d4565b87876110cb565b600061028d8787876106ab88670de0b6b3a76400006122d4565b87876110ee565b600080600080600080888810156107215786156106d7576106d48d898b610d48565b9c505b6106e28c898b610d48565b9b506106ed8b6110ff565b6106f68d6110ff565b61070091906122e7565b905061070d8b898b610d48565b9a5061071a8a898b610d48565b9950610740565b61072a8b6110ff565b6107338d6110ff565b61073d91906122e7565b90505b9b9c9a9b999a975050505050505050565b600080610769846107638a888a61112d565b90611153565b905061077688848661112d565b61078090826122a8565b9050868111156107905786810391505b509695505050505050565b600080806107bc6107b488670de0b6b3a76400006122d4565b899087610d48565b9050861561039f576107ce8888611168565b91506107ef8a8a846107e88a670de0b6b3a76400006122d4565b89896110ee565b92506107fb83826122a8565b90509750975097945050505050565b60408051606081018252600080825260208201819052918101829052600061083a86600001518760200151610c18565b905060006108568288604001518960e001518a60a00151610421565b90506000610864888461117d565b9050610873888285858b6112a2565b158015604087015290855261088d5793506103bc92505050565b600061089a89848a611402565b90506108a9898286868c6112a2565b15156040870181905290865261091b5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b606482015260840161055e565b60005b878110156109af576109328a8386886114d8565b158015604089015260208801919091526109af576020860151865160009161095a91906110b6565b61096490846122a8565b90508381111561097457506109af565b6109818b8288888e6112a2565b15801560408a01529088526109985780925061099e565b506109af565b506109a8816122bb565b905061091e565b5098975050505050505050565b6000806000806109f28688604001518960a00151670de0b6b3a76400006109e391906122d4565b8a60c001518b60e0015161155f565b9050610a42876101400151670de0b6b3a7640000610a1091906122d4565b610a3c670de0b6b3a7640000610a26818a611153565b610a3091906122d4565b6101208b01519061158e565b9061158e565b9150610a72876101400151670de0b6b3a7640000610a6091906122d4565b61076384670de0b6b3a76400006122a8565b60a0880151909250610aa190610a9a90610a9481670de0b6b3a76400006122d4565b906110b6565b8390610d66565b9150610abe8760e001518860c0015161115390919063ffffffff16565b610ac890836122a8565b9150610ad481836110b6565b9150610b03610a9a8860a00151670de0b6b3a7640000610af491906122d4565b670de0b6b3a7640000906110b6565b9150506000610b1f8760e00151836110b690919063ffffffff16565b9050600080610b72896101400151670de0b6b3a7640000610b4091906122d4565b610b6c670de0b6b3a7640000610b56818c6110b6565b610b6091906122d4565b6101208d015190611168565b90611168565b9050610bc884610b6c610b9a8c60a00151670de0b6b3a764000061115390919063ffffffff16565b6104328d6101400151670de0b6b3a7640000610bb691906122d4565b610a9487670de0b6b3a76400006122a8565b915050610bdf8860c001518884610b6c91906122d4565b9450610bf185878a61012001516115a3565b818960400151610c0191906122d4565b610c0b91906122d4565b9350505050935093915050565b600080610c2584846115d0565b909250905080610c3757610c3761160f565b5092915050565b600080610c6f610c60610c52866064612307565b66a5bbed86c5a00090611168565b6748cd4072281e0000906110b6565b9050610c83670de0b6b3a7640000826110b6565b90506103e181610b6c610cae610ca9610ca489670de0b6b3a76400006122a8565b6110ff565b611628565b610a94610ca9610cc38a8a6301e13380610d48565b610ca490670de0b6b3a76400006122a8565b600080610ce784610a948a888a610d48565b9050610776888486610d48565b60008080610d15610d0d88670de0b6b3a76400006122d4565b89908761112d565b9050861561039f57610d27888861158e565b91506107ef8a8a84610d418a670de0b6b3a76400006122d4565b8989611857565b6000826000190484118302158202610d5f57600080fd5b5091020490565b600081600003610d7f5750670de0b6b3a76400006103e5565b82600003610d8f575060006103e5565b6000610d9a836110ff565b90506000610daa610ca9866110ff565b9050818102610dc1670de0b6b3a76400008261231e565b905061027381611868565b60006103bc610de084846301e1338061112d565b610a9485670de0b6b3a76400006122d4565b6000806000610e0d86858a61012001518b61016001516119fd565b90506000610e288960c00151836110b690919063ffffffff16565b60c08a0151610e389089906110b6565b8a51610e4491906122a8565b610e4e91906122d4565b90506000868a60800151610e6291906122a8565b90506000610e708a82611a12565b610e799061235a565b90508a6101000151610e988c60c00151846110b690919063ffffffff16565b610ea291906122a8565b60c08c0151610eb29083906110b6565b610ebc90856122a8565b10610f14576101008b015160c08c0151610ed79084906110b6565b60c08d0151610ee79084906110b6565b610ef190866122a8565b610efb91906122d4565b610f0591906122d4565b60019550955050505050610f20565b60008095509550505050505b9550959350505050565b600080610f3986858586611a27565b90506000610f80670b1a2bc2ec500000610b6c610f768a60a00151670de0b6b3a7640000610f6791906122d4565b670de0b6b3a764000090611153565b610432868b6110b6565b90506000610f96670de0b6b3a764000083611168565b610fb2610fab84670de0b6b3a76400006122d4565b8790611168565b610fbc91906122a8565b90506102ca88878784611a27565b600080611001848760400151610fed8960c00151896110b690919063ffffffff16565b8960a001518a60c001518b60e00151610670565b905061101385848861012001516115a3565b61027390826122d4565b60008061102c86868686611b2a565b90925090508061103f57600091506110ad565b61106961105484670de0b6b3a76400006122d4565b610120880151610160890151610b6c91611168565b61107390836122a8565b9150611087670de0b6b3a7640000836122d4565b91506110aa670de0b6b3a76400008760c0015184610d489092919063ffffffff16565b91505b94509492505050565b60006103bc83670de0b6b3a764000084610d48565b6000806110dc888888888888611c7a565b9092509050806107905761079061160f565b6000806110dc888888888888611d34565b60006001600160ff1b038211156111295760405163396ea70160e11b815260040160405180910390fd5b5090565b600082600019048411830215820261114457600080fd5b50910281810615159190040190565b60006103bc83670de0b6b3a76400008461112d565b60006103bc8383670de0b6b3a7640000610d48565b60008061119860008560200151611df490919063ffffffff16565b8461010001516111a891906122a8565b905060006111dc8486604001518760a00151670de0b6b3a76400006111cd91906122d4565b8860c001518960e0015161155f565b9050600061122b61121a8760a00151670de0b6b3a76400006111fe91906122d4565b61043261120f878b60200151610c18565b60e08b01519061158e565b60e088015160c0890151919061112d565b61123590836122d4565b9050670de0b6b3a764000081106112725761126b6112648760a00151670de0b6b3a7640000610af491906122d4565b8290610d66565b9050611293565b6112906112648760a00151670de0b6b3a7640000610f6791906122d4565b90505b604086015161027390826122d4565b6000806000806112d9878a604001518a8c60a00151670de0b6b3a76400006112ca91906122d4565b8d60c001518e60e00151611d34565b91509150806112f057600080935093505050610f20565b600061132a8a60c001516113108b8a8e61012001518f6101600151611e0a565b6113208c8b8f6101200151611e17565b61076391906122d4565b9050808310156113435760008094509450505050610f20565b600061134f82856122d4565b9050808b60000151101561136d576000809550955050505050610f20565b8a5160009061137d9083906122d4565b905060006113ac8d60c0015161139d60008c611df490919063ffffffff16565b8f60800151610a9491906122d4565b90508c6101000151816113bf91906122a8565b82106113f0576101008d01516113d582846122d4565b6113df91906122d4565b600197509750505050505050610f20565b60008097509750505050505050610f20565b600080839050600061146d86610100015161142e8860c0015189608001516110b690919063ffffffff16565b60c089015161144290610a94896000611df4565b895161144e91906122a8565b61145891906122d4565b61146291906122d4565b60c088015190611168565b905061027361149c61148787670de0b6b3a76400006122d4565b6101208901516101608a0151610b6c91611168565b6114bd6114b188670de0b6b3a76400006122d4565b6101208a015190611168565b6114c790856122d4565b6114d191906122a8565b82906110b6565b60008060006114e8878786611e32565b905060006115318860c00151610a948a6101600151670de0b6b3a764000061151091906122d4565b610b6c6115258b670de0b6b3a76400006122d4565b6101208e015190611168565b90508082106115515761154481836122d4565b60019350935050506110ad565b6000809350935050506110ad565b600061156b8585610d66565b61158461157c86610432868b611168565b859085610d48565b61027391906122a8565b60006103bc8383670de0b6b3a764000061112d565b60006103b984610a3c670de0b6b3a76400006115bf8188611153565b6115c991906122d4565b859061158e565b6000806000836115df866110ff565b6115e991906122e7565b90506000811215611601576000809250925050611608565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b600080821361164a5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906116d69084901c6110ff565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000806110dc888888888888611f07565b6000680248ce36a70cb26b3e19821361188357506000919050565b680755bf798b4a1bf1e582126118ac576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6110ff565b600061043884610b6c84610b6c8989896115a3565b6000818313611a2157826103bc565b50919050565b600080611a348582611a12565b611a3d9061235a565b90506000611aaa8760c00151671bc16d674ec80000896101000151611a738b60c001518c608001516110b690919063ffffffff16565b60c08c0151611a839088906110b6565b8c51611a8f91906122a8565b611a9991906122d4565b611aa391906122d4565b9190610d48565b905061028d611acf670de0b6b3a7640000611ac581896110b6565b6114b191906122d4565b670de0b6b3a7640000611afa611ae589836122d4565b6101208c01516101608d0151610b6c91611168565b611b0c670de0b6b3a7640000896110b6565b611b1691906122a8565b611b2091906122d4565b6114d191906122d4565b6000806000611b468760c00151876110b690919063ffffffff16565b90506000611b62611b5783886122a8565b60e08a015190611168565b90506000611b96878a604001518b60a00151670de0b6b3a7640000611b8791906122d4565b8c60c001518d60e0015161155f565b9050611bb2610af48a60a0015184610d6690919063ffffffff16565b94506000611be1611bd08b60a0015185610d6690919063ffffffff16565b60e08c015160c08d01519190610d48565b905080821015611bfb5760008095509550505050506110ad565b611c31610fab611c278c60a00151670de0b6b3a7640000611c1c91906122d4565b60a08e015190611153565b61043284866122d4565b9550611c5f670de0b6b3a7640000611c49818a6110b6565b611c5391906122d4565b6101208c015190611168565b611c6990876122d4565b9a60019a5098505050505050505050565b6000806000611c8c8989888888611fde565b9050611c9f86610432610fab8a8d6122a8565b9850611cac858a86610d48565b985088811015611cc3576000809250925050611d29565b888103670de0b6b3a76400008110611cf157611cea611264670de0b6b3a764000089611153565b9050611d09565b611d06611264670de0b6b3a7640000896110b6565b90505b80891015611d1f57600080935093505050611d29565b8803925060019150505b965096945050505050565b6000806000611d468989888888611fde565b9050611d5686610432898b6122a8565b975087811015611d6d576000809250925050611d29565b878103611d7b81868861112d565b9050670de0b6b3a76400008110611da857611da1611264670de0b6b3a764000089611153565b9050611dc0565b611dbd611264670de0b6b3a7640000896110b6565b90505b611dca8186611153565b9050808a1015611de257600080935093505050611d29565b90980398600198509650505050505050565b6000818313611e0357816103bc565b5090919050565b600061043882610b6c8787875b60006103b984610a3c6115c986670de0b6b3a76400006122d4565b600080611e568386604001518760a00151670de0b6b3a76400006111cd91906122d4565b90506000611e83610af4611e788860a00151888a6040015161043291906122a8565b60c08901519061158e565b90506000611efb611eb08860a00151670de0b6b3a7640000611ea591906122d4565b60a08a015190611153565b610432611ede8a60a00151670de0b6b3a7640000611ece91906122d4565b8a8c6040015161043291906122a8565b611ee890876122d4565b60c08b015160e08c0151610b6c916110b6565b905061028d8282611168565b6000806000611f198989888888611fde565b905086881015611f30576000809250925050611d29565b9686900396611f3f8887610d66565b975087811015611f56576000809250925050611d29565b878103611f6481868861112d565b9050670de0b6b3a76400008110611f9157611f8a611264670de0b6b3a764000089611153565b9050611fa9565b611fa6611264670de0b6b3a7640000896110b6565b90505b611fb38186611153565b905089811015611fcb57600080935093505050611d29565b9890980398600198509650505050505050565b6000611fea8585610d66565b611584611ffb86610432868b61158e565b85908561112d565b6000806000806080858703121561201957600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561204d57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff811182821017156120a257634e487b7160e01b600052604160045260246000fd5b60405290565b600061018082840312156120bb57600080fd5b6120c3612070565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561215b57600080fd5b61216585856120a8565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561219557600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121da57600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c0880135801515811461221457600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561223f57600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561228357600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b808201808211156103e5576103e5612292565b6000600182016122cd576122cd612292565b5060010190565b818103818111156103e5576103e5612292565b8181036000831280158383131683831282161715610c3757610c37612292565b80820281158282048414176103e5576103e5612292565b60008261233b57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561235557612355612292565b500590565b6000600160ff1b820161236f5761236f612292565b506000039056fea2646970667358221220f154b312745fccd1ad5a0505a0f12cd0bf496272897953bb903c5d6a8fb46db964736f6c63430008140033',
    methodIdentifiers: {
        "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a280a282",
        "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49",
        "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2",
        "calculateEffectiveShareReserves(uint256,int256)": "bc1e1065",
        "calculateMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "3f77b617",
        "calculateMaxShort((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "9e489b99",
        "calculateNegativeInterestOnClose(uint256,uint256,uint256,uint256,uint256,uint256,bool)": "7ef99f87",
        "calculateOpenLong(uint256,uint256,uint256,uint256,uint256,uint256)": "5e6d9d36",
        "calculateOpenShort(uint256,uint256,uint256,uint256,uint256,uint256)": "6ceebe1d",
        "calculateShortProceedsDown(uint256,uint256,uint256,uint256,uint256,uint256)": "e7acd3ad",
        "calculateShortProceedsUp(uint256,uint256,uint256,uint256,uint256,uint256)": "902b1099",
        "calculateSpotAPR(uint256,uint256,uint256,uint256,uint256)": "2810a036",
        "calculateSpotPrice(uint256,uint256,uint256,uint256)": "2471caed",
        "calculateTimeStretch(uint256,uint256)": "dbab8512"
    }
};
