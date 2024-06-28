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
    bytecode: '0x608060405234801561001057600080fd5b50612391806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806394169d491161008c578063bc1e106511610066578063bc1e106514610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b806394169d49146101c45780639e489b99146101f2578063a280a2821461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f8714610176578063902b1099146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd366004611fe8565b610264565b6040519081526020015b60405180910390f35b61010261012336600461201a565b61027d565b61013b61013636600461212a565b610298565b6040805192835260208301919091520161010c565b61010261015e366004612161565b6102b9565b610102610171366004612161565b6102d6565b6101896101843660046121a4565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf366004612161565b61036b565b6101d76101d2366004612209565b61037c565b6040805193845260208401929092529082015260600161010c565b61010261020036600461212a565b6103ac565b61013b61021336600461212a565b6103c3565b610102610226366004612255565b6103d4565b610102610239366004612255565b6103eb565b61010261024c366004612161565b6103f8565b6101d761025f366004612209565b610409565b60008061027386868686610421565b9695505050505050565b60008061028d8787878787610441565b979650505050505050565b6000806000806102a987878761045c565b909450925050505b935093915050565b6000806102ca888888888888610670565b98975050505050505050565b6000806102ca888888888888610691565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106b2565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b6000806102ca888888888888610751565b6000806000806000806103948d8d8d8d8d8d8d61079b565b919750955093505050505b9750975097945050505050565b60006103b984848461080a565b90505b9392505050565b6000806000806102a98787876109bc565b6000806103e18484610c18565b9150505b92915050565b6000806103e18484610c3e565b6000806102ca888888888888610cd5565b6000806000806000806103948d8d8d8d8d8d8d610cf4565b600061043882610432858888610d48565b90610d66565b95945050505050565b60008061045087878786610421565b905061028d8185610dcc565b600080600061047386600001518760200151610c18565b9050600061048f8288604001518960e001518a60a00151610421565b905060008061049f8985856109bc565b909250905060006104b38a8a858588610df2565b91505080156104ca575090945092506102b1915050565b506104d789838a86610f2a565b95506104e589878686610fca565b94506000806104f78b8b8a8a89610df2565b91509150806105675760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610661578489106105dd5760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b606482015260840161055e565b60006105eb8d8b8a8a61101d565b93509050826105fa5750610661565b600061060685836110b6565b610610908c61228d565b905060006106208f838c8c610fca565b905061062f8f8f84848d610df2565b9096509450841561064557819b50809a5061064d565b505050610661565b5050508061065a906122a0565b905061056a565b50505050505050935093915050565b600061028d87878761068a88670de0b6b3a76400006122b9565b87876110cb565b600061028d8787876106ab88670de0b6b3a76400006122b9565b878761117f565b600080600080600080888810156107215786156106d7576106d48d898b610d48565b9c505b6106e28c898b610d48565b9b506106ed8b6111a2565b6106f68d6111a2565b61070091906122cc565b905061070d8b898b610d48565b9a5061071a8a898b610d48565b9950610740565b61072a8b6111a2565b6107338d6111a2565b61073d91906122cc565b90505b9b9c9a9b999a975050505050505050565b600080610769846107638a888a6111d0565b906111f6565b90506107768884866111d0565b610780908261228d565b9050868111156107905786810391505b509695505050505050565b600080806107bc6107b488670de0b6b3a76400006122b9565b899087610d48565b9050861561039f576107ce888861120b565b91506107ef8a8a846107e88a670de0b6b3a76400006122b9565b898961117f565b92506107fb838261228d565b90509750975097945050505050565b60408051606081018252600080825260208201819052918101829052600061083a86600001518760200151610c18565b905060006108568288604001518960e001518a60a00151610421565b905060006108648884611220565b9050610873888285858b61133e565b158015604087015290855261088d5793506103bc92505050565b600061089a89848a61149e565b90506108a9898286868c61133e565b15156040870181905290865261091b5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b606482015260840161055e565b60005b878110156109af576109328a838688611574565b158015604089015260208801919091526109af576020860151865160009161095a91906110b6565b610964908461228d565b90508381111561097457506109af565b6109818b8288888e61133e565b15801560408a01529088526109985780925061099e565b506109af565b506109a8816122a0565b905061091e565b5098975050505050505050565b6000806000806109f28688604001518960a00151670de0b6b3a76400006109e391906122b9565b8a60c001518b60e001516115fb565b9050610a42876101400151670de0b6b3a7640000610a1091906122b9565b610a3c670de0b6b3a7640000610a26818a6111f6565b610a3091906122b9565b6101208b01519061162a565b9061162a565b9150610a72876101400151670de0b6b3a7640000610a6091906122b9565b61076384670de0b6b3a764000061228d565b60a0880151909250610aa190610a9a90610a9481670de0b6b3a76400006122b9565b906110b6565b8390610d66565b9150610abe8760e001518860c001516111f690919063ffffffff16565b610ac8908361228d565b9150610ad481836110b6565b9150610b03610a9a8860a00151670de0b6b3a7640000610af491906122b9565b670de0b6b3a7640000906110b6565b9150506000610b1f8760e00151836110b690919063ffffffff16565b9050600080610b72896101400151670de0b6b3a7640000610b4091906122b9565b610b6c670de0b6b3a7640000610b56818c6110b6565b610b6091906122b9565b6101208d01519061120b565b9061120b565b9050610bc884610b6c610b9a8c60a00151670de0b6b3a76400006111f690919063ffffffff16565b6104328d6101400151670de0b6b3a7640000610bb691906122b9565b610a9487670de0b6b3a764000061228d565b915050610bdf8860c001518884610b6c91906122b9565b9450610bf185878a610120015161163f565b818960400151610c0191906122b9565b610c0b91906122b9565b9350505050935093915050565b600080610c25848461166c565b909250905080610c3757610c376116ab565b5092915050565b600080610c6f610c60610c528660646122ec565b66a5bbed86c5a0009061120b565b6748cd4072281e0000906110b6565b9050610c83670de0b6b3a7640000826110b6565b90506103e181610b6c610cae610ca9610ca489670de0b6b3a764000061228d565b6111a2565b6116c4565b610a94610ca9610cc38a8a6301e13380610d48565b610ca490670de0b6b3a764000061228d565b600080610ce784610a948a888a610d48565b9050610776888486610d48565b60008080610d15610d0d88670de0b6b3a76400006122b9565b8990876111d0565b9050861561039f57610d27888861162a565b91506107ef8a8a84610d418a670de0b6b3a76400006122b9565b89896118f3565b6000826000190484118302158202610d5f57600080fd5b5091020490565b600081600003610d7f5750670de0b6b3a76400006103e5565b82600003610d8f575060006103e5565b6000610d9a836111a2565b90506000610daa610ca9866111a2565b9050818102610dc1670de0b6b3a764000082612303565b905061027381611904565b60006103bc610de084846301e133806111d0565b610a9485670de0b6b3a76400006122b9565b6000806000610e0d86858a61012001518b6101600151611a99565b90506000610e288960c00151836110b690919063ffffffff16565b60c08a0151610e389089906110b6565b8a51610e44919061228d565b610e4e91906122b9565b90506000868a60800151610e62919061228d565b90506000610e708a82611aae565b610e799061233f565b90508a6101000151610e988c60c00151846110b690919063ffffffff16565b610ea2919061228d565b60c08c0151610eb29083906110b6565b610ebc908561228d565b10610f14576101008b015160c08c0151610ed79084906110b6565b60c08d0151610ee79084906110b6565b610ef1908661228d565b610efb91906122b9565b610f0591906122b9565b60019550955050505050610f20565b60008095509550505050505b9550959350505050565b600080610f3986858586611ac3565b90506000610f80670b1a2bc2ec500000610b6c610f768a60a00151670de0b6b3a7640000610f6791906122b9565b670de0b6b3a7640000906111f6565b610432868b6110b6565b90506000610f96670de0b6b3a76400008361120b565b610fb2610fab84670de0b6b3a76400006122b9565b879061120b565b610fbc919061228d565b90506102ca88878784611ac3565b600080611001848760400151610fed8960c00151896110b690919063ffffffff16565b8960a001518a60c001518b60e00151610670565b9050611013858488610120015161163f565b61027390826122b9565b60008061102c86868686611bc6565b90925090508061103f57600091506110ad565b61106961105484670de0b6b3a76400006122b9565b610120880151610160890151610b6c9161120b565b611073908361228d565b9150611087670de0b6b3a7640000836122b9565b91506110aa670de0b6b3a76400008760c0015184610d489092919063ffffffff16565b91505b94509492505050565b60006103bc83670de0b6b3a764000084610d48565b6000806110db8888878787611d16565b90506110f5856104326110ee898c61228d565b869061120b565b9750611102848985610d48565b975087811015611114576111146116ab565b878103670de0b6b3a764000081106111495761114261113b670de0b6b3a7640000886111f6565b8290610d66565b9050611161565b61115e61113b670de0b6b3a7640000886110b6565b90505b80881015611171576111716116ab565b909603979650505050505050565b600080611190888888888888611d3b565b909250905080610790576107906116ab565b60006001600160ff1b038211156111cc5760405163396ea70160e11b815260040160405180910390fd5b5090565b60008260001904841183021582026111e757600080fd5b50910281810615159190040190565b60006103bc83670de0b6b3a7640000846111d0565b60006103bc8383670de0b6b3a7640000610d48565b60008061123b60008560200151611dfe90919063ffffffff16565b84610100015161124b919061228d565b9050600061127f8486604001518760a00151670de0b6b3a764000061127091906122b9565b8860c001518960e001516115fb565b905060006112ce6112bd8760a00151670de0b6b3a76400006112a191906122b9565b6104326112b2878b60200151610c18565b60e08b01519061162a565b60e088015160c089015191906111d0565b6112d890836122b9565b9050670de0b6b3a7640000811061130e5761130761113b8760a00151670de0b6b3a7640000610af491906122b9565b905061132f565b61132c61113b8760a00151670de0b6b3a7640000610f6791906122b9565b90505b604086015161027390826122b9565b600080600080611375878a604001518a8c60a00151670de0b6b3a764000061136691906122b9565b8d60c001518e60e00151611d3b565b915091508061138c57600080935093505050610f20565b60006113c68a60c001516113ac8b8a8e61012001518f6101600151611e14565b6113bc8c8b8f6101200151611e21565b61076391906122b9565b9050808310156113df5760008094509450505050610f20565b60006113eb82856122b9565b9050808b600001511015611409576000809550955050505050610f20565b8a516000906114199083906122b9565b905060006114488d60c0015161143960008c611dfe90919063ffffffff16565b8f60800151610a9491906122b9565b90508c61010001518161145b919061228d565b821061148c576101008d015161147182846122b9565b61147b91906122b9565b600197509750505050505050610f20565b60008097509750505050505050610f20565b60008083905060006115098661010001516114ca8860c0015189608001516110b690919063ffffffff16565b60c08901516114de90610a94896000611dfe565b89516114ea919061228d565b6114f491906122b9565b6114fe91906122b9565b60c08801519061120b565b905061027361153861152387670de0b6b3a76400006122b9565b6101208901516101608a0151610b6c9161120b565b61155961154d88670de0b6b3a76400006122b9565b6101208a01519061120b565b61156390856122b9565b61156d919061228d565b82906110b6565b6000806000611584878786611e3c565b905060006115cd8860c00151610a948a6101600151670de0b6b3a76400006115ac91906122b9565b610b6c6115c18b670de0b6b3a76400006122b9565b6101208e01519061120b565b90508082106115ed576115e081836122b9565b60019350935050506110ad565b6000809350935050506110ad565b60006116078585610d66565b61162061161886610432868b61120b565b859085610d48565b610273919061228d565b60006103bc8383670de0b6b3a76400006111d0565b60006103b984610a3c670de0b6b3a764000061165b81886111f6565b61166591906122b9565b859061162a565b60008060008361167b866111a2565b61168591906122cc565b9050600081121561169d5760008092509250506116a4565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b60008082136116e65760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906117729084901c6111a2565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b600080611190888888888888611f11565b6000680248ce36a70cb26b3e19821361191f57506000919050565b680755bf798b4a1bf1e58212611948576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6111a2565b600061043884610b6c84610b6c89898961163f565b6000818313611abd57826103bc565b50919050565b600080611ad08582611aae565b611ad99061233f565b90506000611b468760c00151671bc16d674ec80000896101000151611b0f8b60c001518c608001516110b690919063ffffffff16565b60c08c0151611b1f9088906110b6565b8c51611b2b919061228d565b611b3591906122b9565b611b3f91906122b9565b9190610d48565b905061028d611b6b670de0b6b3a7640000611b6181896110b6565b61154d91906122b9565b670de0b6b3a7640000611b96611b8189836122b9565b6101208c01516101608d0151610b6c9161120b565b611ba8670de0b6b3a7640000896110b6565b611bb2919061228d565b611bbc91906122b9565b61156d91906122b9565b6000806000611be28760c00151876110b690919063ffffffff16565b90506000611bfe611bf3838861228d565b60e08a01519061120b565b90506000611c32878a604001518b60a00151670de0b6b3a7640000611c2391906122b9565b8c60c001518d60e001516115fb565b9050611c4e610af48a60a0015184610d6690919063ffffffff16565b94506000611c7d611c6c8b60a0015185610d6690919063ffffffff16565b60e08c015160c08d01519190610d48565b905080821015611c975760008095509550505050506110ad565b611ccd610fab611cc38c60a00151670de0b6b3a7640000611cb891906122b9565b60a08e0151906111f6565b61043284866122b9565b9550611cfb670de0b6b3a7640000611ce5818a6110b6565b611cef91906122b9565b6101208c01519061120b565b611d0590876122b9565b9a60019a5098505050505050505050565b6000611d228585610d66565b611620611d3386610432868b61162a565b8590856111d0565b6000806000611d4d8989888888611d16565b9050611d5d86610432898b61228d565b975087811015611d74576000809250925050611df3565b878103611d828186886111d0565b9050670de0b6b3a76400008110611daf57611da861113b670de0b6b3a7640000896111f6565b9050611dc7565b611dc461113b670de0b6b3a7640000896110b6565b90505b611dd181866111f6565b9050808a1015611de957600080935093505050611df3565b8903925060019150505b965096945050505050565b6000818313611e0d57816103bc565b5090919050565b600061043882610b6c8787875b60006103b984610a3c61166586670de0b6b3a76400006122b9565b600080611e608386604001518760a00151670de0b6b3a764000061127091906122b9565b90506000611e8d610af4611e828860a00151888a60400151610432919061228d565b60c08901519061162a565b90506000611f05611eba8860a00151670de0b6b3a7640000611eaf91906122b9565b60a08a0151906111f6565b610432611ee88a60a00151670de0b6b3a7640000611ed891906122b9565b8a8c60400151610432919061228d565b611ef290876122b9565b60c08b015160e08c0151610b6c916110b6565b905061028d828261120b565b6000806000611f238989888888611d16565b905086881015611f3a576000809250925050611df3565b9686900396611f498887610d66565b975087811015611f60576000809250925050611df3565b878103611f6e8186886111d0565b9050670de0b6b3a76400008110611f9b57611f9461113b670de0b6b3a7640000896111f6565b9050611fb3565b611fb061113b670de0b6b3a7640000896110b6565b90505b611fbd81866111f6565b905089811015611fd557600080935093505050611df3565b9890980398600198509650505050505050565b60008060008060808587031215611ffe57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561203257600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff8111828210171561208757634e487b7160e01b600052604160045260246000fd5b60405290565b600061018082840312156120a057600080fd5b6120a8612055565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561214057600080fd5b61214a858561208d565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561217a57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121bf57600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c088013580151581146121f957600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561222457600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561226857600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b808201808211156103e5576103e5612277565b6000600182016122b2576122b2612277565b5060010190565b818103818111156103e5576103e5612277565b8181036000831280158383131683831282161715610c3757610c37612277565b80820281158282048414176103e5576103e5612277565b60008261232057634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561233a5761233a612277565b500590565b6000600160ff1b820161235457612354612277565b506000039056fea2646970667358221220df8068e96c4442d7df7ade085fe839d51d283e03404c6ab328ec9e94570bfba064736f6c63430008140033',
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
