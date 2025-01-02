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
    bytecode: '0x608060405234801561000f575f80fd5b506122b88061001d5f395ff3fe608060405234801561000f575f80fd5b50600436106100e5575f3560e01c806394169d4911610088578063bc1e106511610063578063bc1e106514610212578063dbab851214610225578063e7acd3ad14610238578063f87845f21461024b575f80fd5b806394169d49146101be5780639e489b99146101ec578063a280a282146101ff575f80fd5b80635e6d9d36116100c35780635e6d9d361461014a5780636ceebe1d1461015d5780637ef99f8714610170578063902b1099146101ab575f80fd5b80632471caed146100e95780632810a0361461010f5780633f77b61714610122575b5f80fd5b6100fc6100f7366004611f50565b61025e565b6040519081526020015b60405180910390f35b6100fc61011d366004611f7f565b610276565b610135610130366004612087565b610290565b60408051928352602083019190915201610106565b6100fc6101583660046120bb565b6102af565b6100fc61016b3660046120bb565b6102cb565b61018361017e3660046120fa565b6102db565b604080519586526020860194909452928401919091526060830152608082015260a001610106565b6100fc6101b93660046120bb565b610357565b6101d16101cc366004612159565b610367565b60408051938452602084019290925290820152606001610106565b6100fc6101fa366004612087565b610394565b61013561020d366004612087565b6103aa565b6100fc6102203660046121a0565b6103b9565b6100fc6102333660046121a0565b6103cf565b6100fc6102463660046120bb565b6103db565b6101d1610259366004612159565b6103eb565b5f8061026c86868686610400565b9695505050505050565b5f80610285878787878761041f565b979650505050505050565b5f805f8061029f878787610439565b909450925050505b935093915050565b5f806102bf88888888888861063c565b98975050505050505050565b5f806102bf88888888888861065c565b5f805f805f61030d6040518060a001604052805f81526020015f81526020015f81526020015f81526020015f81525090565b61031c8d8d8d8d8d8d8d61067c565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b5f806102bf888888888888610718565b5f805f805f8061037c8d8d8d8d8d8d8d610761565b919750955093505050505b9750975097945050505050565b5f6103a08484846107cf565b90505b9392505050565b5f805f8061029f878787610971565b5f806103c58484610bc9565b9150505b92915050565b5f806103c58484610bee565b5f806102bf888888888888610c84565b5f805f805f8061037c8d8d8d8d8d8d8d610ca2565b5f61041682610410858888610cf5565b90610d10565b95945050505050565b5f8061042d87878786610400565b90506102858185610d70565b5f805f61044d865f01518760200151610bc9565b90505f6104688288604001518960e001518a60a00151610400565b90505f80610477898585610971565b90925090505f61048a8a8a858588610d95565b91505080156104a1575090945092506102a7915050565b506104ae89838a86610ec7565b95506104bc89878686610f64565b94505f806104cd8b8b8a8a89610d95565b915091508061053d5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b5f5b8981101561062d578489106105b25760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610534565b5f6105bf8d8b8a8a610fb6565b93509050826105ce575061062d565b5f6105d9858361104d565b6105e3908c6121d4565b90505f6105f28f838c8c610f64565b90506106018f8f84848d610d95565b9096509450841561061757819b50809a5061061f565b50505061062d565b50505080600101905061053f565b50505050505050935093915050565b5f61028587878761065588670de0b6b3a76400006121e7565b8787611061565b5f61028587878761067588670de0b6b3a76400006121e7565b8787611083565b5f805f805f80888810156106e857861561069e5761069b8d898b610cf5565b9c505b6106a98c898b610cf5565b9b506106b48b611093565b6106bd8d611093565b6106c791906121fa565b90506106d48b898b610cf5565b9a506106e18a898b610cf5565b9950610707565b6106f18b611093565b6106fa8d611093565b61070491906121fa565b90505b9b9c9a9b999a975050505050505050565b5f8061072f846107298a888a6110c0565b906110e3565b905061073c8884866110c0565b61074690826121d4565b9050868111156107565786810391505b509695505050505050565b5f808061078161077988670de0b6b3a76400006121e7565b899087610cf5565b905086156103875761079388886110f7565b91506107b48a8a846107ad8a670de0b6b3a76400006121e7565b8989611083565b92506107c083826121d4565b90509750975097945050505050565b604080516060810182525f808252602082018190529181018290525f6107fc865f01518760200151610bc9565b90505f6108178288604001518960e001518a60a00151610400565b90505f610824888461110b565b9050610833888285858b61122c565b158015604087015290855261084d5793506103a392505050565b5f61085989848a611380565b9050610868898286868c61122c565b1515604087018190529086526108da5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610534565b5f5b87811015610964576108f08a838688611453565b1580156040890152602088019190915261096457602086015186515f91610917919061104d565b61092190846121d4565b9050838111156109315750610964565b61093e8b8288888e61122c565b15801560408a01529088526109555780925061095b565b50610964565b506001016108dc565b5098975050505050505050565b5f805f806109a58688604001518960a00151670de0b6b3a764000061099691906121e7565b8a60c001518b60e001516114d6565b90506109f5876101400151670de0b6b3a76400006109c391906121e7565b6109ef670de0b6b3a76400006109d9818a6110e3565b6109e391906121e7565b6101208b015190611504565b90611504565b9150610a25876101400151670de0b6b3a7640000610a1391906121e7565b61072984670de0b6b3a76400006121d4565b60a0880151909250610a5490610a4d90610a4781670de0b6b3a76400006121e7565b9061104d565b8390610d10565b9150610a718760e001518860c001516110e390919063ffffffff16565b610a7b90836121d4565b9150610a87818361104d565b9150610ab6610a4d8860a00151670de0b6b3a7640000610aa791906121e7565b670de0b6b3a76400009061104d565b9150505f610ad18760e001518361104d90919063ffffffff16565b90505f80610b23896101400151670de0b6b3a7640000610af191906121e7565b610b1d670de0b6b3a7640000610b07818c61104d565b610b1191906121e7565b6101208d0151906110f7565b906110f7565b9050610b7984610b1d610b4b8c60a00151670de0b6b3a76400006110e390919063ffffffff16565b6104108d6101400151670de0b6b3a7640000610b6791906121e7565b610a4787670de0b6b3a76400006121d4565b915050610b908860c001518884610b1d91906121e7565b9450610ba285878a6101200151611518565b818960400151610bb291906121e7565b610bbc91906121e7565b9350505050935093915050565b5f80610bd58484611544565b909250905080610be757610be761157f565b5092915050565b5f80610c1e610c0f610c01866064612219565b66a5bbed86c5a000906110f7565b6748cd4072281e00009061104d565b9050610c32670de0b6b3a76400008261104d565b90506103c581610b1d610c5d610c58610c5389670de0b6b3a76400006121d4565b611093565b611598565b610a47610c58610c728a8a6301e13380610cf5565b610c5390670de0b6b3a76400006121d4565b5f80610c9584610a478a888a610cf5565b905061073c888486610cf5565b5f8080610cc2610cba88670de0b6b3a76400006121e7565b8990876110c0565b9050861561038757610cd48888611504565b91506107b48a8a84610cee8a670de0b6b3a76400006121e7565b89896117c6565b5f825f190484118302158202610d09575f80fd5b5091020490565b5f815f03610d275750670de0b6b3a76400006103c9565b825f03610d3557505f6103c9565b5f610d3f83611093565b90505f610d4e610c5886611093565b9050818102610d65670de0b6b3a764000082612230565b905061026c816117d6565b5f6103a3610d8384846301e133806110c0565b610a4785670de0b6b3a76400006121e7565b5f805f610dae86858a61012001518b6101600151611968565b90505f610dc88960c001518361104d90919063ffffffff16565b60c08a0151610dd890899061104d565b8a51610de491906121d4565b610dee91906121e7565b90505f868a60800151610e0191906121d4565b90505f610e0e8a8261197c565b610e1790612268565b90508a6101000151610e368c60c001518461104d90919063ffffffff16565b610e4091906121d4565b60c08c0151610e5090839061104d565b610e5a90856121d4565b10610eb2576101008b015160c08c0151610e7590849061104d565b60c08d0151610e8590849061104d565b610e8f90866121d4565b610e9991906121e7565b610ea391906121e7565b60019550955050505050610ebd565b5f8095509550505050505b9550959350505050565b5f80610ed586858586611990565b90505f610f1b670b1a2bc2ec500000610b1d610f118a60a00151670de0b6b3a7640000610f0291906121e7565b670de0b6b3a7640000906110e3565b610410868b61104d565b90505f610f30670de0b6b3a7640000836110f7565b610f4c610f4584670de0b6b3a76400006121e7565b87906110f7565b610f5691906121d4565b90506102bf88878784611990565b5f80610f9a848760400151610f868960c001518961104d90919063ffffffff16565b8960a001518a60c001518b60e0015161063c565b9050610fac8584886101200151611518565b61026c90826121e7565b5f80610fc486868686611a91565b909250905080610fd6575f9150611044565b611000610feb84670de0b6b3a76400006121e7565b610120880151610160890151610b1d916110f7565b61100a90836121d4565b915061101e670de0b6b3a7640000836121e7565b9150611041670de0b6b3a76400008760c0015184610cf59092919063ffffffff16565b91505b94509492505050565b5f6103a383670de0b6b3a764000084610cf5565b5f80611071888888888888611bdb565b9092509050806107565761075661157f565b5f80611071888888888888611c91565b5f6001600160ff1b038211156110bc5760405163396ea70160e11b815260040160405180910390fd5b5090565b5f825f1904841183021582026110d4575f80fd5b50910281810615159190040190565b5f6103a383670de0b6b3a7640000846110c0565b5f6103a38383670de0b6b3a7640000610cf5565b5f806111245f8560200151611d4d90919063ffffffff16565b84610100015161113491906121d4565b90505f6111678486604001518760a00151670de0b6b3a764000061115891906121e7565b8860c001518960e001516114d6565b90505f6111b56111a48760a00151670de0b6b3a764000061118891906121e7565b610410611199878b60200151610bc9565b60e08b015190611504565b60e088015160c089015191906110c0565b6111bf90836121e7565b9050670de0b6b3a764000081106111fc576111f56111ee8760a00151670de0b6b3a7640000610aa791906121e7565b8290610d10565b905061121d565b61121a6111ee8760a00151670de0b6b3a7640000610f0291906121e7565b90505b604086015161026c90826121e7565b5f805f80611261878a604001518a8c60a00151670de0b6b3a764000061125291906121e7565b8d60c001518e60e00151611c91565b9150915080611277575f80935093505050610ebd565b5f6112b08a60c001516112968b8a8e61012001518f6101600151611d62565b6112a68c8b8f6101200151611d6e565b61072991906121e7565b9050808310156112c8575f8094509450505050610ebd565b5f6112d382856121e7565b9050808b5f015110156112ef575f809550955050505050610ebd565b8a515f906112fe9083906121e7565b90505f61132b8d60c0015161131c5f8c611d4d90919063ffffffff16565b8f60800151610a4791906121e7565b90508c61010001518161133e91906121d4565b821061136f576101008d015161135482846121e7565b61135e91906121e7565b600197509750505050505050610ebd565b5f8097509750505050505050610ebd565b5f808390505f6113e88661010001516113aa8860c00151896080015161104d90919063ffffffff16565b60c08901516113bd90610a47895f611d4d565b89516113c991906121d4565b6113d391906121e7565b6113dd91906121e7565b60c0880151906110f7565b905061026c61141761140287670de0b6b3a76400006121e7565b6101208901516101608a0151610b1d916110f7565b61143861142c88670de0b6b3a76400006121e7565b6101208a0151906110f7565b61144290856121e7565b61144c91906121d4565b829061104d565b5f805f611461878786611d88565b90505f6114a98860c00151610a478a6101600151670de0b6b3a764000061148891906121e7565b610b1d61149d8b670de0b6b3a76400006121e7565b6101208e0151906110f7565b90508082106114c9576114bc81836121e7565b6001935093505050611044565b5f80935093505050611044565b5f6114e18585610d10565b6114fa6114f286610410868b6110f7565b859085610cf5565b61026c91906121d4565b5f6103a38383670de0b6b3a76400006110c0565b5f6103a0846109ef670de0b6b3a764000061153381886110e3565b61153d91906121e7565b8590611504565b5f805f8361155186611093565b61155b91906121fa565b90505f811215611571575f809250925050611578565b9150600190505b9250929050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f8082136115b95760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906116459084901c611093565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f80611071888888888888611e5a565b5f680248ce36a70cb26b3e1982136117ef57505f919050565b680755bf798b4a1bf1e58212611818576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061026c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611093565b5f61041684610b1d84610b1d898989611518565b5f81831361198a57826103a3565b50919050565b5f8061199c858261197c565b6119a590612268565b90505f611a118760c00151671bc16d674ec800008961010001516119da8b60c001518c6080015161104d90919063ffffffff16565b60c08c01516119ea90889061104d565b8c516119f691906121d4565b611a0091906121e7565b611a0a91906121e7565b9190610cf5565b9050610285611a36670de0b6b3a7640000611a2c818961104d565b61142c91906121e7565b670de0b6b3a7640000611a61611a4c89836121e7565b6101208c01516101608d0151610b1d916110f7565b611a73670de0b6b3a76400008961104d565b611a7d91906121d4565b611a8791906121e7565b61144c91906121e7565b5f805f611aab8760c001518761104d90919063ffffffff16565b90505f611ac6611abb83886121d4565b60e08a0151906110f7565b90505f611af9878a604001518b60a00151670de0b6b3a7640000611aea91906121e7565b8c60c001518d60e001516114d6565b9050611b15610aa78a60a0015184610d1090919063ffffffff16565b94505f611b43611b328b60a0015185610d1090919063ffffffff16565b60e08c015160c08d01519190610cf5565b905080821015611b5c575f809550955050505050611044565b611b92610f45611b888c60a00151670de0b6b3a7640000611b7d91906121e7565b60a08e0151906110e3565b61041084866121e7565b9550611bc0670de0b6b3a7640000611baa818a61104d565b611bb491906121e7565b6101208c0151906110f7565b611bca90876121e7565b9a60019a5098505050505050505050565b5f805f611beb8989888888611f2c565b9050611bfe86610410610f458a8d6121d4565b9850611c0b858a86610cf5565b985088811015611c21575f809250925050611c86565b888103670de0b6b3a76400008110611c4f57611c486111ee670de0b6b3a7640000896110e3565b9050611c67565b611c646111ee670de0b6b3a76400008961104d565b90505b80891015611c7c575f80935093505050611c86565b8803925060019150505b965096945050505050565b5f805f611ca18989888888611f2c565b9050611cb186610410898b6121d4565b975087811015611cc7575f809250925050611c86565b878103611cd58186886110c0565b9050670de0b6b3a76400008110611d0257611cfb6111ee670de0b6b3a7640000896110e3565b9050611d1a565b611d176111ee670de0b6b3a76400008961104d565b90505b611d2481866110e3565b9050808a1015611d3b575f80935093505050611c86565b90980398600198509650505050505050565b5f818313611d5b57816103a3565b5090919050565b5f61041682610b1d8787875b5f6103a0846109ef61153d86670de0b6b3a76400006121e7565b5f80611dab8386604001518760a00151670de0b6b3a764000061115891906121e7565b90505f611dd7610aa7611dcc8860a00151888a6040015161041091906121d4565b60c089015190611504565b90505f611e4e611e038860a00151670de0b6b3a7640000611df891906121e7565b60a08a0151906110e3565b610410611e318a60a00151670de0b6b3a7640000611e2191906121e7565b8a8c6040015161041091906121d4565b611e3b90876121e7565b60c08b015160e08c0151610b1d9161104d565b905061028582826110f7565b5f805f611e6a8989888888611f2c565b905086881015611e80575f809250925050611c86565b9686900396611e8f8887610d10565b975087811015611ea5575f809250925050611c86565b878103611eb38186886110c0565b9050670de0b6b3a76400008110611ee057611ed96111ee670de0b6b3a7640000896110e3565b9050611ef8565b611ef56111ee670de0b6b3a76400008961104d565b90505b611f0281866110e3565b905089811015611f19575f80935093505050611c86565b9890980398600198509650505050505050565b5f611f378585610d10565b6114fa611f4886610410868b611504565b8590856110c0565b5f805f8060808587031215611f63575f80fd5b5050823594602084013594506040840135936060013592509050565b5f805f805f60a08688031215611f93575f80fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff81118282101715611fe657634e487b7160e01b5f52604160045260245ffd5b60405290565b5f6101808284031215611ffd575f80fd5b612005611fb6565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b5f805f6101c0848603121561209a575f80fd5b6120a48585611fec565b9561018085013595506101a0909401359392505050565b5f805f805f8060c087890312156120d0575f80fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b5f805f805f805f60e0888a031215612110575f80fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c08801358015158114612149575f80fd5b8091505092959891949750929550565b5f805f805f805f60e0888a03121561216f575f80fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b5f80604083850312156121b1575f80fd5b50508035926020909101359150565b634e487b7160e01b5f52601160045260245ffd5b808201808211156103c9576103c96121c0565b818103818111156103c9576103c96121c0565b8181035f831280158383131683831282161715610be757610be76121c0565b80820281158282048414176103c9576103c96121c0565b5f8261224a57634e487b7160e01b5f52601260045260245ffd5b600160ff1b82145f1984141615612263576122636121c0565b500590565b5f600160ff1b820161227c5761227c6121c0565b505f039056fea26469706673582212208bfc08777a9a04f3b337ab46ccfb98f61996d6b8ac9d9faf7e0ce777cce7cc6364736f6c63430008160033',
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
