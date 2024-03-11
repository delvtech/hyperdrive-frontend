export declare const MockHyperdriveMath: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
            readonly name: "reason";
            readonly type: "uint8";
        }];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longExposure";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "curveFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flatFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLPFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_spotPrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateAbsoluteMaxLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_normalizedTimeRemaining";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateCloseLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_normalizedTimeRemaining";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateCloseShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_apr";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionDuration";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }];
        readonly name: "calculateInitialBondReserves";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longExposure";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "curveFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flatFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLPFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "int256";
            readonly name: "_checkpointExposure";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxIterations";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longExposure";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "curveFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "flatFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "governanceLPFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
            readonly name: "_params";
            readonly type: "tuple";
        }, {
            readonly internalType: "int256";
            readonly name: "_checkpointExposure";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxIterations";
            readonly type: "uint256";
        }];
        readonly name: "calculateMaxShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_shareProceeds";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareReservesDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareCurveDelta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_totalGovernanceFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isLong";
            readonly type: "bool";
        }];
        readonly name: "calculateNegativeInterestOnClose";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateOpenLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "calculateOpenShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_bondAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_flatFee";
            readonly type: "uint256";
        }];
        readonly name: "calculateShortProceedsDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_bondAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_shareAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_openVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_closeVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_flatFee";
            readonly type: "uint256";
        }];
        readonly name: "calculateShortProceedsUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_effectiveShareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionDuration";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }];
        readonly name: "calculateSpotAPR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_shareReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_bondReserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_initialVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timeStretch";
            readonly type: "uint256";
        }];
        readonly name: "calculateSpotPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "apr";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionDuration";
            readonly type: "uint256";
        }];
        readonly name: "calculateTimeStretch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506123b1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063902b10991161008c578063a280a28211610066578063a280a28214610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b8063902b1099146101c457806394169d49146101d75780639e489b991461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f871461017657806382a4d306146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd366004611fd9565b610264565b6040519081526020015b60405180910390f35b61010261012336600461200b565b61027d565b61013b61013636600461211b565b610298565b6040805192835260208301919091520161010c565b61010261015e366004612152565b6102b9565b610102610171366004612152565b6102d6565b610189610184366004612195565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf36600461200b565b61036b565b6101026101d2366004612152565b61037b565b6101ea6101e53660046121fa565b61038c565b6040805193845260208401929092529082015260600161010c565b61010261021336600461211b565b6103bc565b61013b61022636600461211b565b6103d3565b610102610239366004612246565b6103e4565b61010261024c366004612152565b6103fb565b6101ea61025f3660046121fa565b61040c565b60008061027386868686610424565b9695505050505050565b60008061028d8787878787610444565b979650505050505050565b6000806000806102a987878761047f565b909450925050505b935093915050565b6000806102ca888888888888610693565b98975050505050505050565b6000806102ca8888888888886106b4565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106d5565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028d8787878787610774565b6000806102ca888888888888610805565b6000806000806000806103a48d8d8d8d8d8d8d61084f565b919750955093505050505b9750975097945050505050565b60006103c98484846108be565b90505b9392505050565b6000806000806102a9878787610a70565b6000806103f18484610cc0565b9150505b92915050565b6000806102ca888888888888610d57565b6000806000806000806103a48d8d8d8d8d8d8d610d76565b600061043b82610435858888610dca565b90610de8565b95945050505050565b60008061045387878786610424565b905061028d61046782866301e13380610e4e565b61047983670de0b6b3a764000061227e565b90610e74565b600080600061049686600001518760200151610e89565b905060006104b28288604001518960e001518a60a00151610424565b90506000806104c2898585610a70565b909250905060006104d68a8a858588610eb5565b91505080156104ed575090945092506102b1915050565b506104fa89838a86610fed565b95506105088987868661108d565b945060008061051a8b8b8a8a89610eb5565b915091508061058a5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610684578489106106005760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610581565b600061060e8d8b8a8a6110e0565b935090508261061d5750610684565b60006106298583610e74565b610633908c612291565b905060006106438f838c8c61108d565b90506106528f8f84848d610eb5565b9096509450841561066857819b50809a50610670565b505050610684565b5050508061067d906122a4565b905061058d565b50505050505050935093915050565b600061028d8787876106ad88670de0b6b3a764000061227e565b8787611179565b600061028d8787876106ce88670de0b6b3a764000061227e565b878761122a565b600080600080600080888810156107445786156106fa576106f78d898b610dca565b9c505b6107058c898b610dca565b9b506107108b61124f565b6107198d61124f565b61072391906122bd565b90506107308b898b610dca565b9a5061073d8a898b610dca565b9950610763565b61074d8b61124f565b6107568d61124f565b61076091906122bd565b90505b9b9c9a9b999a975050505050505050565b600080610785846301e13380610e74565b90506000610793868361127d565b6107a590670de0b6b3a7640000612291565b9050670de0b6b3a764000081106107d9576107d26107cb670de0b6b3a764000086610e74565b8290610de8565b90506107f1565b6107ee6107cb670de0b6b3a764000086611292565b90505b6102ca816107ff898b61127d565b9061127d565b60008061081d846108178a888a610e4e565b90611292565b905061082a888486610e4e565b6108349082612291565b9050868111156108445786810391505b509695505050505050565b6000808061087061086888670de0b6b3a764000061227e565b899087610dca565b905086156103af57610882888861127d565b91506108a38a8a8461089c8a670de0b6b3a764000061227e565b898961122a565b92506108af8382612291565b90509750975097945050505050565b6040805160608101825260008082526020820181905291810182905260006108ee86600001518760200151610e89565b9050600061090a8288604001518960e001518a60a00151610424565b9050600061091888846112a7565b9050610927888285858b6113c7565b15801560408701529085526109415793506103cc92505050565b600061094e89848a6114bd565b905061095d898286868c6113c7565b1515604087018190529086526109cf5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610581565b60005b87811015610a63576109e68a838688611593565b15801560408901526020880191909152610a635760208601518651600091610a0e9190610e74565b610a189084612291565b905083811115610a285750610a63565b610a358b8288888e6113c7565b15801560408a0152908852610a4c57809250610a52565b50610a63565b50610a5c816122a4565b90506109d2565b5098975050505050505050565b600080600080610aa68688604001518960a00151670de0b6b3a7640000610a97919061227e565b8a60c001518b60e0015161161a565b9050610af6876101400151670de0b6b3a7640000610ac4919061227e565b610af0670de0b6b3a7640000610ada818a611292565b610ae4919061227e565b6101208b015190611649565b90611649565b9150610b26876101400151670de0b6b3a7640000610b14919061227e565b61081784670de0b6b3a7640000612291565b60a0880151909250610b4f90610b489061047981670de0b6b3a764000061227e565b8390610de8565b9150610b6c8760e001518860c0015161129290919063ffffffff16565b610b769083612291565b9150610b828183610e74565b9150610bb1610b488860a00151670de0b6b3a7640000610ba2919061227e565b670de0b6b3a764000090610e74565b9150506000610bcd8760e0015183610e7490919063ffffffff16565b9050600080610c1a896101400151670de0b6b3a7640000610bee919061227e565b6107ff670de0b6b3a7640000610c04818c610e74565b610c0e919061227e565b6101208d01519061127d565b9050610c70846107ff610c428c60a00151670de0b6b3a764000061129290919063ffffffff16565b6104358d6101400151670de0b6b3a7640000610c5e919061227e565b61047987670de0b6b3a7640000612291565b915050610c878860c0015188846107ff919061227e565b9450610c9985878a610120015161165e565b818960400151610ca9919061227e565b610cb3919061227e565b9350505050935093915050565b600080610cf1610ce2610cd48660646122e4565b66a5bbed86c5a0009061127d565b6748cd4072281e000090610e74565b9050610d05670de0b6b3a764000082610e74565b90506103f1816107ff610d30610d2b610d2689670de0b6b3a7640000612291565b61124f565b61168b565b610479610d2b610d458a8a6301e13380610dca565b610d2690670de0b6b3a7640000612291565b600080610d69846104798a888a610dca565b905061082a888486610dca565b60008080610d97610d8f88670de0b6b3a764000061227e565b899087610e4e565b905086156103af57610da98888611649565b91506108a38a8a84610dc38a670de0b6b3a764000061227e565b89896118ba565b6000826000190484118302158202610de157600080fd5b5091020490565b600081600003610e015750670de0b6b3a76400006103f5565b82600003610e11575060006103f5565b6000610e1c8361124f565b90506000610e2c610d2b8661124f565b9050818102610e43670de0b6b3a7640000826122fb565b9050610273816118cb565b6000826000190484118302158202610e6557600080fd5b50910281810615159190040190565b60006103cc83670de0b6b3a764000084610dca565b60008082610e968561124f565b610ea091906122bd565b905060008112156103cc576103cc6001611a60565b6000806000610ed086858a61012001518b6101600151611a7b565b90506000610eeb8960c0015183610e7490919063ffffffff16565b60c08a0151610efb908990610e74565b8a51610f079190612291565b610f11919061227e565b90506000868a60800151610f259190612291565b90506000610f338a82611a95565b610f3c90612337565b90508a6101000151610f5b8c60c0015184610e7490919063ffffffff16565b610f659190612291565b60c08c0151610f75908390610e74565b610f7f9085612291565b10610fd7576101008b015160c08c0151610f9a908490610e74565b60c08d0151610faa908490610e74565b610fb49086612291565b610fbe919061227e565b610fc8919061227e565b60019550955050505050610fe3565b60008095509550505050505b9550959350505050565b600080610ffc86858586611aaa565b90506000611043670b1a2bc2ec5000006107ff6110398a60a00151670de0b6b3a764000061102a919061227e565b670de0b6b3a764000090611292565b610435868b610e74565b90506000611059670de0b6b3a76400008361127d565b61107561106e84670de0b6b3a764000061227e565b879061127d565b61107f9190612291565b90506102ca88878784611aaa565b6000806110c48487604001516110b08960c0015189610e7490919063ffffffff16565b8960a001518a60c001518b60e00151610693565b90506110d6858488610120015161165e565b610273908261227e565b6000806110ef86868686611bad565b9092509050806111025760009150611170565b61112c61111784670de0b6b3a764000061227e565b6101208801516101608901516107ff9161127d565b6111369083612291565b915061114a670de0b6b3a76400008361227e565b915061116d670de0b6b3a76400008760c0015184610dca9092919063ffffffff16565b91505b94509492505050565b6000806111898888878787611cfd565b90506111a38561043561119c898c612291565b869061127d565b97506111b0848985610dca565b9750878110156111c4576111c46000611a60565b878103670de0b6b3a764000081106111f2576111eb6107cb670de0b6b3a764000088611292565b905061120a565b6112076107cb670de0b6b3a764000088610e74565b90505b8088101561121c5761121c6000611a60565b909603979650505050505050565b60008061123b888888888888611d22565b909250905080610844576108446000611a60565b60006001600160ff1b038211156112795760405163396ea70160e11b815260040160405180910390fd5b5090565b60006103cc8383670de0b6b3a7640000610dca565b60006103cc83670de0b6b3a764000084610e4e565b6000806112c260008560200151611de590919063ffffffff16565b8461010001516112d29190612291565b905060006113068486604001518760a00151670de0b6b3a76400006112f7919061227e565b8860c001518960e0015161161a565b905060006113576113448760a00151670de0b6b3a7640000611328919061227e565b610435611339878b60200151610e89565b60e08b015190611649565b60e088015160c0890151610af091611292565b611361908361227e565b9050670de0b6b3a76400008110611397576113906107cb8760a00151670de0b6b3a7640000610ba2919061227e565b90506113b8565b6113b56107cb8760a00151670de0b6b3a764000061102a919061227e565b90505b6040860151610273908261227e565b6000806000806113fe878a604001518a8c60a00151670de0b6b3a76400006113ef919061227e565b8d60c001518e60e00151611d22565b915091508061141557600080935093505050610fe3565b600061144f8a60c001516114358b8a8e61012001518f6101600151611dfb565b6114458c8b8f6101200151611e12565b610479919061227e565b611459908461227e565b8a51611465919061227e565b905060006114948b60c0015161148560008a611de590919063ffffffff16565b8d60800151610479919061227e565b90508a6101000151816114a79190612291565b8210610fd7576101008b0151610fbe828461227e565b60008083905060006115288661010001516114e98860c001518960800151610e7490919063ffffffff16565b60c08901516114fd90610479896000611de5565b89516115099190612291565b611513919061227e565b61151d919061227e565b60c08801519061127d565b905061027361155761154287670de0b6b3a764000061227e565b6101208901516101608a01516107ff9161127d565b61157861156c88670de0b6b3a764000061227e565b6101208a01519061127d565b611582908561227e565b61158c9190612291565b8290610e74565b60008060006115a3878786611e2d565b905060006115ec8860c001516104798a6101600151670de0b6b3a76400006115cb919061227e565b6107ff6115e08b670de0b6b3a764000061227e565b6101208e01519061127d565b905080821061160c576115ff818361227e565b6001935093505050611170565b600080935093505050611170565b60006116268585610de8565b61163f61163786610435868b61127d565b859085610dca565b6102739190612291565b60006103cc8383670de0b6b3a7640000610e4e565b60006103c9846107ff670de0b6b3a764000061167a8188610e74565b611684919061227e565b859061127d565b60008082136116ad5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906117399084901c61124f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60008061123b888888888888611f02565b6000680248ce36a70cb26b3e1982136118e657506000919050565b680755bf798b4a1bf1e5821261190f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61124f565b80604051633c06d78b60e11b81526004016105819190612353565b600061043b611a8b86868661165e565b6107ff848761127d565b6000818313611aa457826103cc565b50919050565b600080611ab78582611a95565b611ac090612337565b90506000611b2d8760c00151671bc16d674ec80000896101000151611af68b60c001518c60800151610e7490919063ffffffff16565b60c08c0151611b06908890610e74565b8c51611b129190612291565b611b1c919061227e565b611b26919061227e565b9190610dca565b905061028d611b52670de0b6b3a7640000611b488189610e74565b61156c919061227e565b670de0b6b3a7640000611b7d611b68898361227e565b6101208c01516101608d01516107ff9161127d565b611b8f670de0b6b3a764000089610e74565b611b999190612291565b611ba3919061227e565b61158c919061227e565b6000806000611bc98760c0015187610e7490919063ffffffff16565b90506000611be5611bda8388612291565b60e08a01519061127d565b90506000611c19878a604001518b60a00151670de0b6b3a7640000611c0a919061227e565b8c60c001518d60e0015161161a565b9050611c35610ba28a60a0015184610de890919063ffffffff16565b94506000611c64611c538b60a0015185610de890919063ffffffff16565b60e08c015160c08d01519190610dca565b905080821015611c7e576000809550955050505050611170565b611cb461106e611caa8c60a00151670de0b6b3a7640000611c9f919061227e565b60a08e015190611292565b610435848661227e565b9550611ce2670de0b6b3a7640000611ccc818a610e74565b611cd6919061227e565b6101208c01519061127d565b611cec908761227e565b9a60019a5098505050505050505050565b6000611d098585610de8565b61163f611d1a86610435868b611649565b859085610e4e565b6000806000611d348989888888611cfd565b9050611d4486610435898b612291565b975087811015611d5b576000809250925050611dda565b878103611d69818688610e4e565b9050670de0b6b3a76400008110611d9657611d8f6107cb670de0b6b3a764000089611292565b9050611dae565b611dab6107cb670de0b6b3a764000089610e74565b90505b611db88186611292565b9050808a1015611dd057600080935093505050611dda565b8903925060019150505b965096945050505050565b6000818313611df457816103cc565b5090919050565b600061043b611e0b868686611e12565b839061127d565b60006103c9846107ff61168486670de0b6b3a764000061227e565b600080611e518386604001518760a00151670de0b6b3a76400006112f7919061227e565b90506000611e7e610ba2611e738860a00151888a604001516104359190612291565b60c089015190611649565b90506000611ef6611eab8860a00151670de0b6b3a7640000611ea0919061227e565b60a08a015190611292565b610435611ed98a60a00151670de0b6b3a7640000611ec9919061227e565b8a8c604001516104359190612291565b611ee3908761227e565b60c08b015160e08c01516107ff91610e74565b905061028d828261127d565b6000806000611f148989888888611cfd565b905086881015611f2b576000809250925050611dda565b9686900396611f3a8887610de8565b975087811015611f51576000809250925050611dda565b878103611f5f818688610e4e565b9050670de0b6b3a76400008110611f8c57611f856107cb670de0b6b3a764000089611292565b9050611fa4565b611fa16107cb670de0b6b3a764000089610e74565b90505b611fae8186611292565b905089811015611fc657600080935093505050611dda565b9890980398600198509650505050505050565b60008060008060808587031215611fef57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561202357600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff8111828210171561207857634e487b7160e01b600052604160045260246000fd5b60405290565b6000610180828403121561209157600080fd5b612099612046565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561213157600080fd5b61213b858561207e565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561216b57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121b057600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c088013580151581146121ea57600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561221557600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561225957600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b818103818111156103f5576103f5612268565b808201808211156103f5576103f5612268565b6000600182016122b6576122b6612268565b5060010190565b81810360008312801583831316838312821617156122dd576122dd612268565b5092915050565b80820281158282048414176103f5576103f5612268565b60008261231857634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561233257612332612268565b500590565b6000600160ff1b820161234c5761234c612268565b5060000390565b602081016004831061237557634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220a93ef04bb9476c873c5cede694d251f5051d107a83b4b997c2083d9b4e9d77d264736f6c63430008140033";
        readonly sourceMap: "208:8071:89:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063902b10991161008c578063a280a28211610066578063a280a28214610218578063dbab85121461022b578063e7acd3ad1461023e578063f87845f21461025157600080fd5b8063902b1099146101c457806394169d49146101d75780639e489b991461020557600080fd5b80635e6d9d36116100c85780635e6d9d36146101505780636ceebe1d146101635780637ef99f871461017657806382a4d306146101b157600080fd5b80632471caed146100ef5780632810a036146101155780633f77b61714610128575b600080fd5b6101026100fd366004611fd9565b610264565b6040519081526020015b60405180910390f35b61010261012336600461200b565b61027d565b61013b61013636600461211b565b610298565b6040805192835260208301919091520161010c565b61010261015e366004612152565b6102b9565b610102610171366004612152565b6102d6565b610189610184366004612195565b6102e7565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101bf36600461200b565b61036b565b6101026101d2366004612152565b61037b565b6101ea6101e53660046121fa565b61038c565b6040805193845260208401929092529082015260600161010c565b61010261021336600461211b565b6103bc565b61013b61022636600461211b565b6103d3565b610102610239366004612246565b6103e4565b61010261024c366004612152565b6103fb565b6101ea61025f3660046121fa565b61040c565b60008061027386868686610424565b9695505050505050565b60008061028d8787878787610444565b979650505050505050565b6000806000806102a987878761047f565b909450925050505b935093915050565b6000806102ca888888888888610693565b98975050505050505050565b6000806102ca8888888888886106b4565b60008060008060006103216040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103308d8d8d8d8d8d8d6106d5565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028d8787878787610774565b6000806102ca888888888888610805565b6000806000806000806103a48d8d8d8d8d8d8d61084f565b919750955093505050505b9750975097945050505050565b60006103c98484846108be565b90505b9392505050565b6000806000806102a9878787610a70565b6000806103f18484610cc0565b9150505b92915050565b6000806102ca888888888888610d57565b6000806000806000806103a48d8d8d8d8d8d8d610d76565b600061043b82610435858888610dca565b90610de8565b95945050505050565b60008061045387878786610424565b905061028d61046782866301e13380610e4e565b61047983670de0b6b3a764000061227e565b90610e74565b600080600061049686600001518760200151610e89565b905060006104b28288604001518960e001518a60a00151610424565b90506000806104c2898585610a70565b909250905060006104d68a8a858588610eb5565b91505080156104ed575090945092506102b1915050565b506104fa89838a86610fed565b95506105088987868661108d565b945060008061051a8b8b8a8a89610eb5565b915091508061058a5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b60648201526084015b60405180910390fd5b60005b89811015610684578489106106005760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610581565b600061060e8d8b8a8a6110e0565b935090508261061d5750610684565b60006106298583610e74565b610633908c612291565b905060006106438f838c8c61108d565b90506106528f8f84848d610eb5565b9096509450841561066857819b50809a50610670565b505050610684565b5050508061067d906122a4565b905061058d565b50505050505050935093915050565b600061028d8787876106ad88670de0b6b3a764000061227e565b8787611179565b600061028d8787876106ce88670de0b6b3a764000061227e565b878761122a565b600080600080600080888810156107445786156106fa576106f78d898b610dca565b9c505b6107058c898b610dca565b9b506107108b61124f565b6107198d61124f565b61072391906122bd565b90506107308b898b610dca565b9a5061073d8a898b610dca565b9950610763565b61074d8b61124f565b6107568d61124f565b61076091906122bd565b90505b9b9c9a9b999a975050505050505050565b600080610785846301e13380610e74565b90506000610793868361127d565b6107a590670de0b6b3a7640000612291565b9050670de0b6b3a764000081106107d9576107d26107cb670de0b6b3a764000086610e74565b8290610de8565b90506107f1565b6107ee6107cb670de0b6b3a764000086611292565b90505b6102ca816107ff898b61127d565b9061127d565b60008061081d846108178a888a610e4e565b90611292565b905061082a888486610e4e565b6108349082612291565b9050868111156108445786810391505b509695505050505050565b6000808061087061086888670de0b6b3a764000061227e565b899087610dca565b905086156103af57610882888861127d565b91506108a38a8a8461089c8a670de0b6b3a764000061227e565b898961122a565b92506108af8382612291565b90509750975097945050505050565b6040805160608101825260008082526020820181905291810182905260006108ee86600001518760200151610e89565b9050600061090a8288604001518960e001518a60a00151610424565b9050600061091888846112a7565b9050610927888285858b6113c7565b15801560408701529085526109415793506103cc92505050565b600061094e89848a6114bd565b905061095d898286868c6113c7565b1515604087018190529086526109cf5760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b6064820152608401610581565b60005b87811015610a63576109e68a838688611593565b15801560408901526020880191909152610a635760208601518651600091610a0e9190610e74565b610a189084612291565b905083811115610a285750610a63565b610a358b8288888e6113c7565b15801560408a0152908852610a4c57809250610a52565b50610a63565b50610a5c816122a4565b90506109d2565b5098975050505050505050565b600080600080610aa68688604001518960a00151670de0b6b3a7640000610a97919061227e565b8a60c001518b60e0015161161a565b9050610af6876101400151670de0b6b3a7640000610ac4919061227e565b610af0670de0b6b3a7640000610ada818a611292565b610ae4919061227e565b6101208b015190611649565b90611649565b9150610b26876101400151670de0b6b3a7640000610b14919061227e565b61081784670de0b6b3a7640000612291565b60a0880151909250610b4f90610b489061047981670de0b6b3a764000061227e565b8390610de8565b9150610b6c8760e001518860c0015161129290919063ffffffff16565b610b769083612291565b9150610b828183610e74565b9150610bb1610b488860a00151670de0b6b3a7640000610ba2919061227e565b670de0b6b3a764000090610e74565b9150506000610bcd8760e0015183610e7490919063ffffffff16565b9050600080610c1a896101400151670de0b6b3a7640000610bee919061227e565b6107ff670de0b6b3a7640000610c04818c610e74565b610c0e919061227e565b6101208d01519061127d565b9050610c70846107ff610c428c60a00151670de0b6b3a764000061129290919063ffffffff16565b6104358d6101400151670de0b6b3a7640000610c5e919061227e565b61047987670de0b6b3a7640000612291565b915050610c878860c0015188846107ff919061227e565b9450610c9985878a610120015161165e565b818960400151610ca9919061227e565b610cb3919061227e565b9350505050935093915050565b600080610cf1610ce2610cd48660646122e4565b66a5bbed86c5a0009061127d565b6748cd4072281e000090610e74565b9050610d05670de0b6b3a764000082610e74565b90506103f1816107ff610d30610d2b610d2689670de0b6b3a7640000612291565b61124f565b61168b565b610479610d2b610d458a8a6301e13380610dca565b610d2690670de0b6b3a7640000612291565b600080610d69846104798a888a610dca565b905061082a888486610dca565b60008080610d97610d8f88670de0b6b3a764000061227e565b899087610e4e565b905086156103af57610da98888611649565b91506108a38a8a84610dc38a670de0b6b3a764000061227e565b89896118ba565b6000826000190484118302158202610de157600080fd5b5091020490565b600081600003610e015750670de0b6b3a76400006103f5565b82600003610e11575060006103f5565b6000610e1c8361124f565b90506000610e2c610d2b8661124f565b9050818102610e43670de0b6b3a7640000826122fb565b9050610273816118cb565b6000826000190484118302158202610e6557600080fd5b50910281810615159190040190565b60006103cc83670de0b6b3a764000084610dca565b60008082610e968561124f565b610ea091906122bd565b905060008112156103cc576103cc6001611a60565b6000806000610ed086858a61012001518b6101600151611a7b565b90506000610eeb8960c0015183610e7490919063ffffffff16565b60c08a0151610efb908990610e74565b8a51610f079190612291565b610f11919061227e565b90506000868a60800151610f259190612291565b90506000610f338a82611a95565b610f3c90612337565b90508a6101000151610f5b8c60c0015184610e7490919063ffffffff16565b610f659190612291565b60c08c0151610f75908390610e74565b610f7f9085612291565b10610fd7576101008b015160c08c0151610f9a908490610e74565b60c08d0151610faa908490610e74565b610fb49086612291565b610fbe919061227e565b610fc8919061227e565b60019550955050505050610fe3565b60008095509550505050505b9550959350505050565b600080610ffc86858586611aaa565b90506000611043670b1a2bc2ec5000006107ff6110398a60a00151670de0b6b3a764000061102a919061227e565b670de0b6b3a764000090611292565b610435868b610e74565b90506000611059670de0b6b3a76400008361127d565b61107561106e84670de0b6b3a764000061227e565b879061127d565b61107f9190612291565b90506102ca88878784611aaa565b6000806110c48487604001516110b08960c0015189610e7490919063ffffffff16565b8960a001518a60c001518b60e00151610693565b90506110d6858488610120015161165e565b610273908261227e565b6000806110ef86868686611bad565b9092509050806111025760009150611170565b61112c61111784670de0b6b3a764000061227e565b6101208801516101608901516107ff9161127d565b6111369083612291565b915061114a670de0b6b3a76400008361227e565b915061116d670de0b6b3a76400008760c0015184610dca9092919063ffffffff16565b91505b94509492505050565b6000806111898888878787611cfd565b90506111a38561043561119c898c612291565b869061127d565b97506111b0848985610dca565b9750878110156111c4576111c46000611a60565b878103670de0b6b3a764000081106111f2576111eb6107cb670de0b6b3a764000088611292565b905061120a565b6112076107cb670de0b6b3a764000088610e74565b90505b8088101561121c5761121c6000611a60565b909603979650505050505050565b60008061123b888888888888611d22565b909250905080610844576108446000611a60565b60006001600160ff1b038211156112795760405163396ea70160e11b815260040160405180910390fd5b5090565b60006103cc8383670de0b6b3a7640000610dca565b60006103cc83670de0b6b3a764000084610e4e565b6000806112c260008560200151611de590919063ffffffff16565b8461010001516112d29190612291565b905060006113068486604001518760a00151670de0b6b3a76400006112f7919061227e565b8860c001518960e0015161161a565b905060006113576113448760a00151670de0b6b3a7640000611328919061227e565b610435611339878b60200151610e89565b60e08b015190611649565b60e088015160c0890151610af091611292565b611361908361227e565b9050670de0b6b3a76400008110611397576113906107cb8760a00151670de0b6b3a7640000610ba2919061227e565b90506113b8565b6113b56107cb8760a00151670de0b6b3a764000061102a919061227e565b90505b6040860151610273908261227e565b6000806000806113fe878a604001518a8c60a00151670de0b6b3a76400006113ef919061227e565b8d60c001518e60e00151611d22565b915091508061141557600080935093505050610fe3565b600061144f8a60c001516114358b8a8e61012001518f6101600151611dfb565b6114458c8b8f6101200151611e12565b610479919061227e565b611459908461227e565b8a51611465919061227e565b905060006114948b60c0015161148560008a611de590919063ffffffff16565b8d60800151610479919061227e565b90508a6101000151816114a79190612291565b8210610fd7576101008b0151610fbe828461227e565b60008083905060006115288661010001516114e98860c001518960800151610e7490919063ffffffff16565b60c08901516114fd90610479896000611de5565b89516115099190612291565b611513919061227e565b61151d919061227e565b60c08801519061127d565b905061027361155761154287670de0b6b3a764000061227e565b6101208901516101608a01516107ff9161127d565b61157861156c88670de0b6b3a764000061227e565b6101208a01519061127d565b611582908561227e565b61158c9190612291565b8290610e74565b60008060006115a3878786611e2d565b905060006115ec8860c001516104798a6101600151670de0b6b3a76400006115cb919061227e565b6107ff6115e08b670de0b6b3a764000061227e565b6101208e01519061127d565b905080821061160c576115ff818361227e565b6001935093505050611170565b600080935093505050611170565b60006116268585610de8565b61163f61163786610435868b61127d565b859085610dca565b6102739190612291565b60006103cc8383670de0b6b3a7640000610e4e565b60006103c9846107ff670de0b6b3a764000061167a8188610e74565b611684919061227e565b859061127d565b60008082136116ad5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906117399084901c61124f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60008061123b888888888888611f02565b6000680248ce36a70cb26b3e1982136118e657506000919050565b680755bf798b4a1bf1e5821261190f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061027374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61124f565b80604051633c06d78b60e11b81526004016105819190612353565b600061043b611a8b86868661165e565b6107ff848761127d565b6000818313611aa457826103cc565b50919050565b600080611ab78582611a95565b611ac090612337565b90506000611b2d8760c00151671bc16d674ec80000896101000151611af68b60c001518c60800151610e7490919063ffffffff16565b60c08c0151611b06908890610e74565b8c51611b129190612291565b611b1c919061227e565b611b26919061227e565b9190610dca565b905061028d611b52670de0b6b3a7640000611b488189610e74565b61156c919061227e565b670de0b6b3a7640000611b7d611b68898361227e565b6101208c01516101608d01516107ff9161127d565b611b8f670de0b6b3a764000089610e74565b611b999190612291565b611ba3919061227e565b61158c919061227e565b6000806000611bc98760c0015187610e7490919063ffffffff16565b90506000611be5611bda8388612291565b60e08a01519061127d565b90506000611c19878a604001518b60a00151670de0b6b3a7640000611c0a919061227e565b8c60c001518d60e0015161161a565b9050611c35610ba28a60a0015184610de890919063ffffffff16565b94506000611c64611c538b60a0015185610de890919063ffffffff16565b60e08c015160c08d01519190610dca565b905080821015611c7e576000809550955050505050611170565b611cb461106e611caa8c60a00151670de0b6b3a7640000611c9f919061227e565b60a08e015190611292565b610435848661227e565b9550611ce2670de0b6b3a7640000611ccc818a610e74565b611cd6919061227e565b6101208c01519061127d565b611cec908761227e565b9a60019a5098505050505050505050565b6000611d098585610de8565b61163f611d1a86610435868b611649565b859085610e4e565b6000806000611d348989888888611cfd565b9050611d4486610435898b612291565b975087811015611d5b576000809250925050611dda565b878103611d69818688610e4e565b9050670de0b6b3a76400008110611d9657611d8f6107cb670de0b6b3a764000089611292565b9050611dae565b611dab6107cb670de0b6b3a764000089610e74565b90505b611db88186611292565b9050808a1015611dd057600080935093505050611dda565b8903925060019150505b965096945050505050565b6000818313611df457816103cc565b5090919050565b600061043b611e0b868686611e12565b839061127d565b60006103c9846107ff61168486670de0b6b3a764000061227e565b600080611e518386604001518760a00151670de0b6b3a76400006112f7919061227e565b90506000611e7e610ba2611e738860a00151888a604001516104359190612291565b60c089015190611649565b90506000611ef6611eab8860a00151670de0b6b3a7640000611ea0919061227e565b60a08a015190611292565b610435611ed98a60a00151670de0b6b3a7640000611ec9919061227e565b8a8c604001516104359190612291565b611ee3908761227e565b60c08b015160e08c01516107ff91610e74565b905061028d828261127d565b6000806000611f148989888888611cfd565b905086881015611f2b576000809250925050611dda565b9686900396611f3a8887610de8565b975087811015611f51576000809250925050611dda565b878103611f5f818688610e4e565b9050670de0b6b3a76400008110611f8c57611f856107cb670de0b6b3a764000089611292565b9050611fa4565b611fa16107cb670de0b6b3a764000089610e74565b90505b611fae8186611292565b905089811015611fc657600080935093505050611dda565b9890980398600198509650505050505050565b60008060008060808587031215611fef57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561202357600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610180810167ffffffffffffffff8111828210171561207857634e487b7160e01b600052604160045260246000fd5b60405290565b6000610180828403121561209157600080fd5b612099612046565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b60008060006101c0848603121561213157600080fd5b61213b858561207e565b9561018085013595506101a0909401359392505050565b60008060008060008060c0878903121561216b57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a0312156121b057600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c088013580151581146121ea57600080fd5b8091505092959891949750929550565b600080600080600080600060e0888a03121561221557600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b6000806040838503121561225957600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b818103818111156103f5576103f5612268565b808201808211156103f5576103f5612268565b6000600182016122b6576122b6612268565b5060010190565b81810360008312801583831316838312821617156122dd576122dd612268565b5092915050565b80820281158282048414176103f5576103f5612268565b60008261231857634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561233257612332612268565b500590565b6000600160ff1b820161234c5761234c612268565b5060000390565b602081016004831061237557634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220a93ef04bb9476c873c5cede694d251f5051d107a83b4b997c2083d9b4e9d77d264736f6c63430008140033";
        readonly sourceMap: "208:8071:89:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6751:418;;;;;;:::i;:::-;;:::i;:::-;;;550:25:182;;;538:2;523:18;6751:418:89;;;;;;;;242:498;;;;;;:::i;:::-;;:::i;5504:409::-;;;;;;:::i;:::-;;:::i;:::-;;;;2994:25:182;;;3050:2;3035:18;;3028:34;;;;2967:18;5504:409:89;2820:248:182;1256:548:89;;;;;;:::i;:::-;;:::i;2567:550::-;;;;;;:::i;:::-;;:::i;4107:1113::-;;;;;;:::i;:::-;;:::i;:::-;;;;4548:25:182;;;4604:2;4589:18;;4582:34;;;;4632:18;;;4625:34;;;;4690:2;4675:18;;4668:34;4733:3;4718:19;;4711:35;4535:3;4520:19;4107:1113:89;4291:461:182;746:504:89;;;;;;:::i;:::-;;:::i;7175:546::-;;;;;;:::i;:::-;;:::i;1810:751::-;;;;;;:::i;:::-;;:::i;:::-;;;;5556:25:182;;;5612:2;5597:18;;5590:34;;;;5640:18;;;5633:34;5544:2;5529:18;1810:751:89;5354:319:182;6380:365:89;;;;;;:::i;:::-;;:::i;5919:455::-;;;;;;:::i;:::-;;:::i;5226:272::-;;;;;;:::i;:::-;;:::i;7727:550::-;;;;;;:::i;:::-;;:::i;3123:755::-;;;;;;:::i;:::-;;:::i;6751:418::-;6942:7;6961:14;6978:161;7025:14;7053:13;7080:23;7117:12;6978:33;:161::i;:::-;6961:178;6751:418;-1:-1:-1;;;;;;6751:418:89:o;242:498::-;475:7;494:14;511:199;556:23;593:13;620:23;657:17;688:12;511:31;:199::i;:::-;494:216;242:498;-1:-1:-1;;;;;;;242:498:89:o;5504:409::-;5682:7;5691;5711:15;5728;5747:124;5793:7;5814:19;5847:14;5747:32;:124::i;:::-;5710:161;;-1:-1:-1;5710:161:89;-1:-1:-1;;;5504:409:89;;;;;;;:::o;1256:548::-;1516:7;1535:14;1552:222;1598:23;1635:13;1662:9;1685:12;1711:16;1741:23;1552:32;:222::i;:::-;1535:239;1256:548;-1:-1:-1;;;;;;;;1256:548:89:o;2567:550::-;2828:7;2847:14;2864:223;2911:23;2948:13;2975:9;2998:12;3024:16;3054:23;2864:33;:223::i;4107:1113::-;4417:7;4426;4435;4444:6;4452:7;4471:43;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4471:43:89;4726:271;4787:14;4815:19;4848:16;4878:19;4911:20;4945:21;4980:7;4726:47;:271::i;:::-;4688:25;;;4524:473;;;4647:27;;;4524:473;;;4611:22;;;4524:473;;;4572:25;;;4524:473;;;;;;;;;-1:-1:-1;4524:473:89;;-1:-1:-1;4524:473:89;-1:-1:-1;4524:473:89;-1:-1:-1;4524:473:89;-1:-1:-1;4107:1113:89;;;;;;;;;;;;;:::o;746:504::-;982:7;1001:14;1018:202;1075:23;1112;1149:4;1167:17;1198:12;1018:43;:202::i;7175:546::-;7434:7;7453:14;7470:221;7523:11;7548:12;7574:20;7608:21;7643:16;7673:8;7470:39;:221::i;1810:751::-;2113:7;2122;2131;2151:15;2168;2185;2204:306;2268:23;2309:13;2340:9;2367:24;2409:12;2439:16;2473:23;2204:46;:306::i;:::-;2150:360;;-1:-1:-1;2150:360:89;-1:-1:-1;2150:360:89;-1:-1:-1;;;;1810:751:89;;;;;;;;;;;;:::o;6380:365::-;6559:7;6597:141;6648:7;6673:19;6710:14;6597:33;:141::i;:::-;6578:160;;6380:365;;;;;;:::o;5919:455::-;6106:7;6115;6135:15;6152;6171:161;6242:7;6267:23;6308:10;6171:53;:161::i;5226:272::-;5340:7;5359:14;5376:92;5425:3;5442:16;5376:35;:92::i;:::-;5359:109;-1:-1:-1;;5226:272:89;;;;;:::o;7727:550::-;7988:7;8007:14;8024:223;8079:11;8104:12;8130:20;8164:21;8199:16;8229:8;8024:41;:223::i;3123:755::-;3428:7;3437;3446;3466:15;3483;3500;3519:308;3584:23;3625:13;3656:10;3684:24;3726:12;3756:16;3790:23;3519:47;:308::i;3330:531:75:-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;:::-;3724:130;3330:531;-1:-1:-1;;;;;3330:531:75:o;4497:945::-;4730:11;5059:17;5079:155;5111:23;5148:13;5175:23;5212:12;5079:18;:155::i;:::-;5059:175;-1:-1:-1;5263:172:75;5374:47;5059:175;5393:17;5412:8;5374:18;:47::i;:::-;5264:15;5270:9;193:4:74;5264:15:75;:::i;:::-;5263:25;;:172::i;10963:5032:180:-;11125:21;11148;11322:30;11355:153;11432:7;:21;;;11471:7;:23;;;11355:59;:153::i;:::-;11322:186;;11518:17;11538:190;11585:22;11621:7;:20;;;11655:7;:30;;;11699:7;:19;;;11538:33;:190::i;:::-;11518:210;;11738:29;11777;11925:130;11967:7;11992:22;12032:9;11925:24;:130::i;:::-;11830:225;;-1:-1:-1;11830:225:180;-1:-1:-1;12072:15:180;12091:207;12135:7;12160:19;11830:225;;12275:9;12091:26;:207::i;:::-;12069:229;;;12316:10;12312:102;;;-1:-1:-1;12354:21:180;;-1:-1:-1;12377:21:180;-1:-1:-1;12346:53:180;;-1:-1:-1;;12346:53:180;12312:102;11816:608;13319:143;13354:7;13375:21;13410:19;13443:9;13319:21;:143::i;:::-;13303:159;;13488:136;13521:7;13542:13;13569:22;13605:9;13488:19;:136::i;:::-;13472:152;;13635:17;13654:12;13670:167;13710:7;13731:19;13764:13;13791;13818:9;13670:26;:167::i;:::-;13634:203;;;;13855:7;13847:69;;;;-1:-1:-1;;;13847:69:180;;6785:2:182;13847:69:180;;;6767:21:182;6824:2;6804:18;;;6797:30;6863:34;6843:18;;;6836:62;-1:-1:-1;;;6914:18:182;;;6907:47;6971:19;;13847:69:180;;;;;;;;;13931:9;13926:2015;13950:14;13946:1;:18;13926:2015;;;14211:21;14195:13;:37;14170:147;;;;-1:-1:-1;;;14170:147:180;;7203:2:182;14170:147:180;;;7185:21:182;7242:2;7222:18;;;7215:30;7281:34;7261:18;;;7254:62;-1:-1:-1;;;7332:18:182;;;7325:49;7391:19;;14170:147:180;7001:415:182;14170:147:180;14880:18;14936:173;14990:7;15015:13;15046:22;15086:9;14936:36;:173::i;:::-;14912:197;-1:-1:-1;14912:197:180;-1:-1:-1;14912:197:180;15123:52;;15155:5;;;15123:52;15188:29;15252;:9;15270:10;15252:17;:29::i;:::-;15220:61;;:13;:61;:::i;:::-;15188:93;;15295:29;15327:164;15364:7;15389:21;15428:22;15468:9;15327:19;:164::i;:::-;15295:196;;15528:207;15572:7;15597:19;15634:21;15673;15712:9;15528:26;:207::i;:::-;15505:230;;-1:-1:-1;15505:230:180;-1:-1:-1;15749:182:180;;;;15796:21;15780:37;;15851:21;15835:37;;15749:182;;;15911:5;;;;;15749:182;13971:1970;;;13966:3;;;;:::i;:::-;;;13926:2015;;;;15951:37;;;;;;10963:5032;;;;;;:::o;18147:892:75:-;18410:7;18547:485;18614:23;18655:13;18686:12;18925:18;18931:12;193:4:74;18925:18:75;:::i;:::-;18961:16;18995:23;18547:49;:485::i;22840:866::-;23101:7;23217:482;23284:23;23325:13;23356:9;23592:18;23598:12;193:4:74;23592:18:75;:::i;:::-;23628:16;23662:23;23217:49;:482::i;28882:2953::-;29192:7;29201;29210;29219:6;29227:7;30161:27;30226:20;30202:21;:44;30198:1445;;;30531:7;30527:191;;;30575:128;:14;30622:21;30665:20;30575:25;:128::i;:::-;30558:145;;30527:191;30873:121;:19;30921:21;30960:20;30873:30;:121::i;:::-;30851:143;;31151:27;:16;:25;:27::i;:::-;31102:30;:19;:28;:30::i;:::-;:76;;;;:::i;:::-;31063:115;-1:-1:-1;31211:118:75;:16;31256:21;31295:20;31211:27;:118::i;:::-;31192:137;-1:-1:-1;31365:121:75;:19;31413:21;31452:20;31365:30;:121::i;:::-;31343:143;;30198:1445;;;31605:27;:16;:25;:27::i;:::-;31556:30;:19;:28;:30::i;:::-;:76;;;;:::i;:::-;31517:115;;30198:1445;31674:14;;31702:19;;31735:16;;28882:2953;-1:-1:-1;;;;;;;;28882:2953:75:o;7656:1272::-;7892:20;;8130:35;:17;8156:8;8130:25;:35::i;:::-;8118:47;-1:-1:-1;8305:13:75;8327:15;:4;8118:47;8327:12;:15::i;:::-;8321:21;;193:4:74;8321:21:75;:::i;:::-;8305:37;;193:4:74;8356:5:75;:12;8352:300;;8463:36;8473:25;193:4:74;8485:12:75;8473:11;:25::i;:::-;8463:5;;:9;:36::i;:::-;8455:44;;8352:300;;;8607:34;8617:23;193:4:74;8627:12:75;8617:9;:23::i;8607:34::-;8599:42;;8352:300;8820:101;8902:5;8820:56;:23;8852;8820:31;:56::i;:::-;:64;;:101::i;10417:1660::-;10676:21;;11139:115;11237:16;11139:78;:11;11173:21;11196:20;11139:33;:78::i;:::-;:97;;:115::i;:::-;11118:136;-1:-1:-1;11502:48:75;:11;11523:8;11533:16;11502:20;:48::i;:::-;11488:62;;;;:::i;:::-;;;11866:12;11853:10;:25;11849:191;;;12003:12;11990:10;:25;11974:41;;11849:191;12050:20;10417:1660;;;;;;;;:::o;20020:2126::-;20360:23;;;21060:104;21094:30;21100:24;193:4:74;21094:30:75;:::i;:::-;21060:9;;21138:16;21060:20;:104::i;:::-;21044:120;-1:-1:-1;21178:28:75;;21174:966;;21414:43;:9;21432:24;21414:17;:43::i;:::-;21397:60;-1:-1:-1;21596:487:75;21663:23;21704:13;21397:60;21976:18;21982:12;193:4:74;21976:18:75;:::i;:::-;22012:16;22046:23;21596:49;:487::i;:::-;21578:505;-1:-1:-1;22097:32:75;21578:505;22097:32;;:::i;:::-;;;20020:2126;;;;;;;;;;;:::o;37638:4492:180:-;-1:-1:-1;;;;;;;;37801:7:180;-1:-1:-1;;;;;;;;;;;;;;;38120:30:180;38153:153;38230:7;:21;;;38269:7;:23;;;38153:59;:153::i;:::-;38120:186;;38316:17;38336:190;38383:22;38419:7;:20;;;38453:7;:30;;;38497:7;:19;;;38336:33;:190::i;:::-;38316:210;;38536:29;38568:94;38609:7;38630:22;38568:27;:94::i;:::-;38536:126;;38714:185;38755:7;38776:21;38811:22;38847:9;38870:19;38714:27;:185::i;:::-;38672:227;;;38693:17;;;38672:227;;;;38909:76;;38953:21;-1:-1:-1;38946:28:180;;-1:-1:-1;;;38946:28:180;38909:76;39879:21;39903:109;39939:7;39960:9;39983:19;39903:22;:109::i;:::-;39879:133;;40064:177;40105:7;40126:13;40153:22;40189:9;40212:19;40064:27;:177::i;:::-;40022:219;;40043:17;;;40022:219;;;;;;40251:113;;;;-1:-1:-1;;;40251:113:180;;8098:2:182;40251:113:180;;;8080:21:182;8137:2;8117:18;;;8110:30;8176:34;8156:18;;;8149:62;-1:-1:-1;;;8227:18:182;;;8220:47;8284:19;;40251:113:180;7896:413:182;40251:113:180;40379:9;40374:1719;40398:14;40394:1;:18;40374:1719;;;40994:174;41049:7;41074:13;41105:9;41132:22;40994:37;:174::i;:::-;40904:264;;;40960:17;;;40904:264;40922:20;;;40904:264;;;;41224:5;41182:62;41348:20;;;;41321:18;;41257:29;;41321:48;;:18;:26;:48::i;:::-;41289:80;;:13;:80;:::i;:::-;41257:112;;41411:21;41387;:45;41383:89;;;41452:5;;;41383:89;41723:209;41768:7;41793:21;41832:22;41872:9;41899:19;41723:27;:209::i;:::-;41635:297;;;41689:17;;;41635:297;;;;41946:137;;42003:21;41987:37;;41946:137;;;42063:5;;;41946:137;-1:-1:-1;40414:3:180;;;:::i;:::-;;;40374:1719;;;-1:-1:-1;42110:13:180;37638:4492;-1:-1:-1;;;;;;;;37638:4492:180:o;16597:3723::-;16792:29;16823;18018:13;18055:10;18068:245;18106:23;18147:7;:20;;;18191:7;:19;;;193:4:74;18185:25:180;;;;:::i;:::-;18228:7;:23;;;18269:7;:30;;;18068:20;:245::i;:::-;18055:258;;18335:110;18416:7;:15;;;193:4:74;18410:21:180;;;;:::i;:::-;18335:51;193:4:74;18358:21:180;193:4:74;18368:10:180;18358:9;:21::i;:::-;:27;;;;:::i;:::-;18335:16;;;;;:22;:51::i;:::-;:57;;:110::i;:::-;18327:118;;18467:42;18493:7;:15;;;193:4:74;18487:21:180;;;;:::i;:::-;18468:11;18474:5;193:4:74;18468:11:180;:::i;18467:42::-;18594:19;;;;18459:50;;-1:-1:-1;18531:97:180;;18558:56;;18559:25;18594:19;193:4:74;18559:25:180;:::i;18558:56::-;18531:5;;:9;:97::i;:::-;18523:105;;18651:91;18698:7;:30;;;18651:7;:23;;;:29;;:91;;;;:::i;:::-;18642:100;;;;:::i;:::-;;-1:-1:-1;18764:17:180;:2;18642:100;18764:10;:17::i;:::-;18756:25;;18803:49;18813:38;18831:7;:19;;;193:4:74;18825:25:180;;;;:::i;:::-;193:4:74;;18813:11:180;:38::i;18803:49::-;18795:57;;18041:822;18872:27;18902:67;18929:7;:30;;;18902:5;:13;;:67;;;;:::i;:::-;18872:97;;19324:26;19374:21;19398:137;19519:7;:15;;;193:4:74;19513:21:180;;;;:::i;:::-;19398:89;193:4:74;19457:23:180;193:4:74;19469:10:180;19457:11;:23::i;:::-;:29;;;;:::i;:::-;19398:33;;;;;:58;:89::i;:137::-;19374:161;;19570:135;19699:5;19570:120;19659:30;19669:7;:19;;;193:4:74;19659:9:180;;:30;;;;:::i;:::-;19588:52;19624:7;:15;;;193:4:74;19618:21:180;;;;:::i;:::-;19589:19;19595:13;193:4:74;19589:19:180;:::i;19570:135::-;19549:156;;19360:356;19863:93;19932:7;:23;;;19886;19864:19;:45;;;;:::i;19863:93::-;19839:117;;20177:136;20216:21;20255:10;20283:7;:16;;;20177:21;:136::i;:::-;20143:18;20120:7;:20;;;:41;;;;:::i;:::-;20119:194;;;;:::i;:::-;20083:230;;16858:3462;;;16597:3723;;;;;;:::o;1405:1330:75:-;1521:7;;1684:90;1725:39;1753:10;:4;1760:3;1753:10;:::i;:::-;1733;;1725:27;:39::i;:::-;1692:10;;1684:27;:90::i;:::-;1662:112;-1:-1:-1;1798:24:75;193:4:74;1662:112:75;1798:11;:24::i;:::-;1784:38;-1:-1:-1;2463:265:75;1784:38;2481:212;2663:28;:23;2664:10;2670:4;193::74;2664:10:75;:::i;:::-;2663:21;:23::i;:::-;:26;:28::i;:::-;2510:118;:88;2517:44;:4;2533:17;2552:8;2517:15;:44::i;:::-;2511:50;;193:4:74;2511:50:75;:::i;13567:1674::-;13828:21;;14294:119;14396:16;14294:80;:11;14330:21;14353:20;14294:35;:80::i;:119::-;14273:140;-1:-1:-1;14664:50:75;:11;14687:8;14697:16;14664:22;:50::i;24664:2130::-;25006:23;;;25791:103;25824:30;25830:24;193:4:74;25824:30:75;:::i;:::-;25791:10;;25868:16;25791:19;:103::i;:::-;25776:118;-1:-1:-1;25908:28:75;;25904:884;;26070:42;:10;26087:24;26070:16;:42::i;:::-;26053:59;-1:-1:-1;26247:485:75;26312:23;26353:13;26053:59;26625:18;26631:12;193:4:74;26625:18:75;:::i;:::-;26661:16;26695:23;26247:47;:485::i;898:556:74:-;1014:9;1279:1;-1:-1:-1;;1262:19:74;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:74;;1411:27;;898:556::o;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:74;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:74;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;4415:16::-;4402:29;-1:-1:-1;4509:18:74;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:74;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:74;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;6027:544:75:-;6162:7;6181:29;6253:16;6213:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;6181:88;;6308:1;6283:22;:26;6279:238;;;6325:181;6381:111;6325:38;:181::i;27211:1307:180:-;27437:7;27446:4;27462:21;27486:152;27526:11;27551:10;27575:7;:16;;;27605:7;:23;;;27486:26;:152::i;:::-;27462:176;;27648:21;27767:46;27789:7;:23;;;27767:13;:21;;:46;;;;:::i;:::-;27728:23;;;;27708:44;;:11;;:19;:44::i;:::-;27672:21;;:80;;;;:::i;:::-;:141;;;;:::i;:::-;27648:165;;27823:16;27865:11;27842:7;:20;;;:34;;;;:::i;:::-;27823:53;-1:-1:-1;27886:26:180;27924;:19;27886:26;27924:23;:26::i;:::-;27923:27;;;:::i;:::-;27886:65;;28137:7;:28;;;28077:41;28094:7;:23;;;28077:8;:16;;:41;;;;:::i;:::-;:88;;;;:::i;:::-;28037:23;;;;28010:51;;:18;;:26;:51::i;:::-;27978:83;;:13;:83;:::i;:::-;:187;27961:551;;28389:28;;;;28342:23;;;;28325:41;;:8;;:16;:41::i;:::-;28278:23;;;;28251:51;;:18;;:26;:51::i;:::-;28215:87;;:13;:87;:::i;:::-;:151;;;;:::i;:::-;:202;;;;:::i;:::-;28435:4;28190:263;;;;;;;;;;27961:551;28492:1;28495:5;28484:17;;;;;;;;27211:1307;;;;;;;;;:::o;20970:1484::-;21173:7;21305:13;21321:136;21359:7;21380:19;21413:10;21437;21321:24;:136::i;:::-;21305:152;;21901:9;21913:134;22040:6;21913:105;21981:36;21997:7;:19;;;193:4:74;21991:25:180;;;;:::i;:::-;193:4:74;;21981:9:180;:36::i;:::-;21913:50;:5;21940:22;21913:26;:50::i;:134::-;21901:146;-1:-1:-1;22057:25:180;22127:14;193:4:74;21901:146:180;22127:11;:14::i;:::-;22085:27;22104:7;22110:1;193:4:74;22104:7:180;:::i;:::-;22085:10;;:18;:27::i;:::-;:56;;;;:::i;:::-;22057:84;;22281:143;22319:7;22340:19;22373:10;22397:17;22281:24;:143::i;31845:645::-;32040:7;32059:18;32080:285;32126:23;32163:7;:20;;;32197:44;32217:7;:23;;;32197:11;:19;;:44;;;;:::i;:::-;32255:7;:19;;;32288:7;:23;;;32325:7;:30;;;32080:32;:285::i;:::-;32059:306;;32419:64;32441:11;32454:10;32466:7;:16;;;32419:21;:64::i;:::-;32394:89;;:10;:89;:::i;29903:929::-;30115:18;30135:12;30338:146;30381:7;30402:11;30427:23;30464:10;30338:29;:146::i;:::-;30314:170;;-1:-1:-1;30314:170:180;-1:-1:-1;30314:170:180;30494:58;;30530:1;30522:19;;;;30494:58;30620:97;30691:16;30697:10;193:4:74;30691:16:180;:::i;:::-;30652;;;;30620:23;;;;:49;;:31;:49::i;:97::-;30606:111;;;;:::i;:::-;;-1:-1:-1;30727:17:180;193:4:74;30606:111:180;30727:17;:::i;:::-;;;30763:52;30785:4;30791:7;:23;;;30763:10;:21;;:52;;;;;:::i;:::-;30755:70;;29903:929;;;;;;;;:::o;2068:1726:78:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:78;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:78;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3135:6;;;193:4:74;3165:9:78;;3161:261;;3263:20;3270:12;193:4:74;3280:1:78;3270:9;:12::i;3263:20::-;3258:25;;3161:261;;;3389:22;3396:14;193:4:74;3408:1:78;3396:11;:14::i;3389:22::-;3384:27;;3161:261;3495:2;3491:1;:6;3487:166;;;3513:129;3569:59;3513:38;:129::i;:::-;3771:6;;;;2068:1726;-1:-1:-1;;;;;;;2068:1726:78:o;10452:583::-;10642:14;10668:12;10710:141;10762:2;10778:1;10793:2;10809:1;10824;10839:2;10710:38;:141::i;:::-;10690:161;;-1:-1:-1;10690:161:78;-1:-1:-1;10690:161:78;10861:168;;10889:129;10945:59;10889:38;:129::i;2001:204:77:-;2053:8;-1:-1:-1;;;;;2079:1:77;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:77;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:77;2001:204::o;1610:118:74:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;42555:2183:180:-;42701:7;42944:28;43026:30;43054:1;43026:7;:23;;;:27;;:30;;;;:::i;:::-;42975:7;:28;;;:82;;;;:::i;:::-;42944:113;;43461:10;43474:221;43508:23;43545:7;:20;;;43585:7;:19;;;193:4:74;43579:25:180;;;;:::i;:::-;43618:7;:23;;;43655:7;:30;;;43474:20;:221::i;:::-;43461:234;;43705:27;43752:452;43837:353;44170:7;:19;;;193:4:74;44164:25:180;;;;:::i;:::-;43837:301;43941:175;44017:20;44067:7;:23;;;43941:46;:175::i;:::-;43837:51;;;;;:78;:301::i;:353::-;43782:30;;;;43752:23;;;;:61;;:29;:61::i;:452::-;43735:469;;:2;:469;:::i;:::-;43705:499;;193:4:74;44218:19:180;:26;44214:458;;44354:93;44395:38;44413:7;:19;;;193:4:74;44407:25:180;;;;:::i;44354:93::-;44332:115;;44214:458;;;44570:91;44611:36;44627:7;:19;;;193:4:74;44621:25:180;;;;:::i;44570:91::-;44548:113;;44214:458;44711:20;;;;44689:42;;:19;:42;:::i;48824:1941::-;49064:7;49073:4;49326:19;49347:12;49363:321;49447:23;49488:7;:20;;;49526:12;49562:7;:19;;;193:4:74;49556:25:180;;;;:::i;:::-;49599:7;:23;;;49640:7;:30;;;49363:66;:321::i;:::-;49325:359;;;;49699:7;49694:56;;49730:1;49733:5;49722:17;;;;;;;;49694:56;49826:21;49917:416;50309:7;:23;;;50085:214;50138:12;50176:10;50212:7;:16;;;50254:7;:23;;;50085:27;:214::i;:::-;49918:144;49962:12;49996:10;50028:7;:16;;;49918:22;:144::i;:::-;:381;;;;:::i;49917:416::-;49887:446;;:11;:446;:::i;:::-;49850:21;;:484;;;;:::i;:::-;49826:508;;50344:16;50363:135;50461:7;:23;;;50407:26;50431:1;50407:19;:23;;:26;;;;:::i;:::-;50364:7;:20;;;:70;;;;:::i;50363:135::-;50344:154;;50540:7;:28;;;50529:8;:39;;;;:::i;:::-;50512:13;:56;50508:251;;50636:28;;;;50609:24;50625:8;50609:13;:24;:::i;46195:866::-;46359:7;46378:21;46402:10;46378:34;;46422:13;46438:320;46720:7;:28;;;46648:53;46677:7;:23;;;46648:7;:20;;;:28;;:53;;;;:::i;:::-;46588:23;;;;46523:106;;46531:26;:19;46555:1;46531:23;:26::i;46523:106::-;46483:21;;:146;;;;:::i;:::-;:218;;;;:::i;:::-;:265;;;;:::i;:::-;46438:23;;;;;:31;:320::i;:::-;46422:336;-1:-1:-1;46787:267:180;46919:121;47002:16;47008:10;193:4:74;47002:16:180;:::i;:::-;46951;;;;46919:23;;;;:49;;:31;:49::i;:121::-;46854:42;46879:16;46885:10;193:4:74;46879:16:180;:::i;:::-;46854;;;;;:24;:42::i;:::-;46818:78;;:13;:78;:::i;:::-;:222;;;;:::i;:::-;46787:5;;:13;:267::i;51649:699::-;51863:7;51872:4;51888:11;51902:127;51949:7;51970:12;51996:23;51902:33;:127::i;:::-;51888:141;;52039:11;52053:166;52195:7;:23;;;52053:120;52149:7;:23;;;193:4:74;52143:29:180;;;;:::i;:::-;52053:68;52104:16;52110:10;193:4:74;52104:16:180;:::i;:::-;52053:29;;;;;:50;:68::i;:166::-;52039:180;;52240:3;52233;:10;52229:113;;52267:9;52273:3;52267;:9;:::i;:::-;52278:4;52259:24;;;;;;;;52229:113;52322:1;52325:5;52314:17;;;;;;;;20915:352:78;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;:::-;:50;;;;:::i;3190:114:74:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;35831:330:180:-;35975:7;36055:99;36129:11;36055:48;193:4:74;36073:23:180;193:4:74;36085:10:180;36073:11;:23::i;:::-;:29;;;;:::i;:::-;36055:9;;:17;:48::i;8508:3846:74:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:74;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:74;9286:41;-1:-1:-1;9283:1:74;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:74;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:74;10385:5;;10384:13;;-1:-1:-1;;10383:50:74;10453:5;;10452:13;;;-1:-1:-1;;10451:50:74;10519:5;;;-1:-1:-1;;10519:46:74;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:74:o;4331:579:78:-;4519:14;4545:12;4587:139;4637:2;4653:1;4668:2;4684:1;4699;4714:2;4587:36;:139::i;4907:3302:74:-;4953:8;-1:-1:-1;;5130:1:74;:26;5126:40;;-1:-1:-1;5165:1:74;;4907:3302;-1:-1:-1;4907:3302:74:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:74;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:74;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:74;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:74;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:74;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:74;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:74;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:74;7584:10;;;;-1:-1:-1;6063:75:74;;-1:-1:-1;6458:50:74;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;317:182:73:-;485:6;451:41;;-1:-1:-1;;;451:41:73;;;;;;;;:::i;36742:361:180:-;36925:7;36963:133;37025:57;37047:11;37060:10;37072:9;37025:21;:57::i;:::-;36963:36;:16;36988:10;36963:24;:36::i;15541:101:74:-;15597:6;15626:1;15622;:5;:13;;15634:1;15622:13;;;-1:-1:-1;15630:1:74;15541:101;-1:-1:-1;15541:101:74:o;24388:947:180:-;24586:7;;24643:26;:19;24586:7;24643:23;:26::i;:::-;24642:27;;;:::i;:::-;24605:65;;24680:16;24699:288;24928:7;:23;;;24969:4;24870:7;:28;;;24802:53;24831:7;:23;;;24802:7;:20;;;:28;;:53;;;;:::i;:::-;24763:23;;;;24736:51;;:18;;:26;:51::i;:::-;24700:21;;:87;;;;:::i;:::-;:155;;;;:::i;:::-;:198;;;;:::i;:::-;24699:211;:288;:211;:288::i;:::-;24680:307;-1:-1:-1;25008:295:180;25238:55;193:4:74;25263:23:180;193:4:74;25275:10:180;25263:11;:23::i;:::-;:29;;;;:::i;25238:55::-;193:4:74;25084:113:180;25163:16;25169:10;193:4:74;25163:16:180;:::i;:::-;25116;;;;25084:23;;;;:49;;:31;:49::i;:113::-;25038:27;193:4:74;25050:14:180;25038:11;:27::i;:::-;:159;;;;:::i;:::-;:181;;;;:::i;:::-;:255;;;;:::i;33928:1494::-;34133:18;34153:4;34222:19;34244:44;34264:7;:23;;;34244:11;:19;;:44;;;;:::i;:::-;34222:66;-1:-1:-1;34298:13:180;34314:99;34366:37;34222:66;34366:23;:37;:::i;:::-;34314:30;;;;;:38;:99::i;:::-;34298:115;;34423:10;34436:221;34470:23;34507:7;:20;;;34547:7;:19;;;193:4:74;34541:25:180;;;;:::i;:::-;34580:7;:23;;;34617:7;:30;;;34436:20;:221::i;:::-;34423:234;;34680:43;34692:30;34702:7;:19;;;34692:5;:9;;:30;;;;:::i;34680:43::-;34667:56;;34911:11;34925:132;34973:30;34983:7;:19;;;34973:5;:9;;:30;;;;:::i;:::-;35017;;;;34925:23;;;;;:132;:34;:132::i;:::-;34911:146;;35076:3;35071:2;:8;35067:56;;;35103:1;35106:5;35095:17;;;;;;;;;;35067:56;35145:110;35177:68;35192:52;35224:7;:19;;;193:4:74;35218:25:180;;;;:::i;:::-;35192:19;;;;;:25;:52::i;:::-;35178:8;35183:3;35178:2;:8;:::i;35145:110::-;35132:123;-1:-1:-1;35324:55:180;193:4:74;35349:23:180;193:4:74;35361:10:180;35349:11;:23::i;:::-;:29;;;;:::i;:::-;35324:16;;;;;:24;:55::i;:::-;35310:69;;;;:::i;:::-;;35410:4;;-1:-1:-1;33928:1494:180;-1:-1:-1;;;;;;;;;33928:1494:180:o;20059:343:78:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;11709:1515::-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:78;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:74;12549:2:78;:9;12545:263;;12648:20;12655:12;193:4:74;12665:1:78;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:74;12794:1:78;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:78;;-1:-1:-1;;11709:1515:78;;;;;;;;;;:::o;15815:101:74:-;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;;-1:-1:-1;15904:1:74;;15815:101;-1:-1:-1;15815:101:74:o;54850:343:180:-;55034:7;55072:114;55114:58;55137:11;55150:10;55162:9;55114:22;:58::i;:::-;55072:16;;:24;:114::i;54296:234::-;54441:7;54467:56;54511:11;54467:35;54485:16;54491:10;193:4:74;54485:16:180;:::i;53015:1033::-;53197:7;53216:10;53229:221;53263:23;53300:7;:20;;;53340:7;:19;;;193:4:74;53334:25:180;;;;:::i;53229:221::-;53216:234;;53460:11;53474:158;53499:123;53546:62;53588:7;:19;;;53570:12;53547:7;:20;;;:35;;;;:::i;53546:62::-;53499:23;;;;;:29;:123::i;53474:158::-;53460:172;;53642:11;53656:352;53955:52;53987:7;:19;;;193:4:74;53981:25:180;;;;:::i;:::-;53955:19;;;;;:25;:52::i;:::-;53656:281;53809:114;53882:7;:19;;;193:4:74;53876:25:180;;;;:::i;:::-;53833:12;53810:7;:20;;;:35;;;;:::i;53809:114::-;53784:139;;:2;:139;:::i;:::-;53721:23;;;;53656:43;;;;:89;;:64;:89::i;:352::-;53642:366;-1:-1:-1;54025:16:180;:3;53642:366;54025:11;:16::i;5576:1765:78:-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:74;6666:2:78;:9;6662:261;;6764:20;6771:12;193:4:74;6781:1:78;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:74;6909:1:78;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:78;-1:-1:-1;;;;;;;5576:1765:78:o;14:385:182:-;100:6;108;116;124;177:3;165:9;156:7;152:23;148:33;145:53;;;194:1;191;184:12;145:53;-1:-1:-1;;217:23:182;;;287:2;272:18;;259:32;;-1:-1:-1;338:2:182;323:18;;310:32;;389:2;374:18;361:32;;-1:-1:-1;14:385:182;-1:-1:-1;14:385:182:o;586:454::-;681:6;689;697;705;713;766:3;754:9;745:7;741:23;737:33;734:53;;;783:1;780;773:12;734:53;-1:-1:-1;;806:23:182;;;876:2;861:18;;848:32;;-1:-1:-1;927:2:182;912:18;;899:32;;978:2;963:18;;950:32;;-1:-1:-1;1029:3:182;1014:19;1001:33;;-1:-1:-1;586:454:182;-1:-1:-1;586:454:182:o;1045:347::-;1112:2;1106:9;1154:6;1142:19;;1191:18;1176:34;;1212:22;;;1173:62;1170:185;;;1277:10;1272:3;1268:20;1265:1;1258:31;1312:4;1309:1;1302:15;1340:4;1337:1;1330:15;1170:185;1371:2;1364:22;1045:347;:::o;1397:1032::-;1458:5;1506:6;1494:9;1489:3;1485:19;1481:32;1478:52;;;1526:1;1523;1516:12;1478:52;1548:17;;:::i;:::-;1539:26;;1601:9;1588:23;1581:5;1574:38;1672:2;1661:9;1657:18;1644:32;1639:2;1632:5;1628:14;1621:56;1737:2;1726:9;1722:18;1709:32;1704:2;1697:5;1693:14;1686:56;1802:2;1791:9;1787:18;1774:32;1769:2;1762:5;1758:14;1751:56;1868:3;1857:9;1853:19;1840:33;1834:3;1827:5;1823:15;1816:58;1935:3;1924:9;1920:19;1907:33;1901:3;1894:5;1890:15;1883:58;2002:3;1991:9;1987:19;1974:33;1968:3;1961:5;1957:15;1950:58;2069:3;2058:9;2054:19;2041:33;2035:3;2028:5;2024:15;2017:58;2094:3;2157:2;2146:9;2142:18;2129:32;2124:2;2117:5;2113:14;2106:56;;2181:3;2244:2;2233:9;2229:18;2216:32;2211:2;2204:5;2200:14;2193:56;;2268:3;2331:2;2320:9;2316:18;2303:32;2298:2;2291:5;2287:14;2280:56;;2355:3;2418:2;2407:9;2403:18;2390:32;2385:2;2378:5;2374:14;2367:56;;1397:1032;;;;:::o;2434:381::-;2544:6;2552;2560;2613:3;2601:9;2592:7;2588:23;2584:33;2581:53;;;2630:1;2627;2620:12;2581:53;2653:52;2697:7;2686:9;2653:52;:::i;:::-;2643:62;2752:3;2737:19;;2724:33;;-1:-1:-1;2804:3:182;2789:19;;;2776:33;;2434:381;-1:-1:-1;;;2434:381:182:o;3073:523::-;3177:6;3185;3193;3201;3209;3217;3270:3;3258:9;3249:7;3245:23;3241:33;3238:53;;;3287:1;3284;3277:12;3238:53;-1:-1:-1;;3310:23:182;;;3380:2;3365:18;;3352:32;;-1:-1:-1;3431:2:182;3416:18;;3403:32;;3482:2;3467:18;;3454:32;;-1:-1:-1;3533:3:182;3518:19;;3505:33;;-1:-1:-1;3585:3:182;3570:19;3557:33;;-1:-1:-1;3073:523:182;-1:-1:-1;3073:523:182:o;3601:685::-;3711:6;3719;3727;3735;3743;3751;3759;3812:3;3800:9;3791:7;3787:23;3783:33;3780:53;;;3829:1;3826;3819:12;3780:53;3865:9;3852:23;3842:33;;3922:2;3911:9;3907:18;3894:32;3884:42;;3973:2;3962:9;3958:18;3945:32;3935:42;;4024:2;4013:9;4009:18;3996:32;3986:42;;4075:3;4064:9;4060:19;4047:33;4037:43;;4127:3;4116:9;4112:19;4099:33;4089:43;;4182:3;4171:9;4167:19;4154:33;4230:5;4223:13;4216:21;4209:5;4206:32;4196:60;;4252:1;4249;4242:12;4196:60;4275:5;4265:15;;;3601:685;;;;;;;;;;:::o;4757:592::-;4870:6;4878;4886;4894;4902;4910;4918;4971:3;4959:9;4950:7;4946:23;4942:33;4939:53;;;4988:1;4985;4978:12;4939:53;-1:-1:-1;;5011:23:182;;;5081:2;5066:18;;5053:32;;-1:-1:-1;5132:2:182;5117:18;;5104:32;;5183:2;5168:18;;5155:32;;-1:-1:-1;5234:3:182;5219:19;;5206:33;;-1:-1:-1;5286:3:182;5271:19;;5258:33;;-1:-1:-1;5338:3:182;5323:19;5310:33;;-1:-1:-1;4757:592:182;-1:-1:-1;4757:592:182:o;6065:248::-;6133:6;6141;6194:2;6182:9;6173:7;6169:23;6165:32;6162:52;;;6210:1;6207;6200:12;6162:52;-1:-1:-1;;6233:23:182;;;6303:2;6288:18;;;6275:32;;-1:-1:-1;6065:248:182:o;6318:127::-;6379:10;6374:3;6370:20;6367:1;6360:31;6410:4;6407:1;6400:15;6434:4;6431:1;6424:15;6450:128;6517:9;;;6538:11;;;6535:37;;;6552:18;;:::i;7421:125::-;7486:9;;;7507:10;;;7504:36;;;7520:18;;:::i;7551:135::-;7590:3;7611:17;;;7608:43;;7631:18;;:::i;:::-;-1:-1:-1;7678:1:182;7667:13;;7551:135::o;7691:200::-;7757:9;;;7730:4;7785:9;;7813:10;;7825:12;;;7809:29;7848:12;;;7840:21;;7806:56;7803:82;;;7865:18;;:::i;:::-;7803:82;7691:200;;;;:::o;8314:168::-;8387:9;;;8418;;8435:15;;;8429:22;;8415:37;8405:71;;8456:18;;:::i;8619:290::-;8658:1;8684;8674:132;;8728:10;8723:3;8719:20;8716:1;8709:31;8763:4;8760:1;8753:15;8791:4;8788:1;8781:15;8674:132;-1:-1:-1;;;8822:18:182;;-1:-1:-1;;8842:13:182;;8818:38;8815:64;;;8859:18;;:::i;:::-;-1:-1:-1;8893:10:182;;8619:290::o;8914:136::-;8949:3;-1:-1:-1;;;8970:22:182;;8967:48;;8995:18;;:::i;:::-;-1:-1:-1;9035:1:182;9031:13;;8914:136::o;9055:360::-;9219:2;9204:18;;9252:1;9241:13;;9231:144;;9297:10;9292:3;9288:20;9285:1;9278:31;9332:4;9329:1;9322:15;9360:4;9357:1;9350:15;9231:144;9384:25;;;9055:360;:::o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a280a282";
        readonly "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49";
        readonly "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2";
        readonly "calculateInitialBondReserves(uint256,uint256,uint256,uint256,uint256)": "82a4d306";
        readonly "calculateMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "3f77b617";
        readonly "calculateMaxShort((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "9e489b99";
        readonly "calculateNegativeInterestOnClose(uint256,uint256,uint256,uint256,uint256,uint256,bool)": "7ef99f87";
        readonly "calculateOpenLong(uint256,uint256,uint256,uint256,uint256,uint256)": "5e6d9d36";
        readonly "calculateOpenShort(uint256,uint256,uint256,uint256,uint256,uint256)": "6ceebe1d";
        readonly "calculateShortProceedsDown(uint256,uint256,uint256,uint256,uint256,uint256)": "e7acd3ad";
        readonly "calculateShortProceedsUp(uint256,uint256,uint256,uint256,uint256,uint256)": "902b1099";
        readonly "calculateSpotAPR(uint256,uint256,uint256,uint256,uint256)": "2810a036";
        readonly "calculateSpotPrice(uint256,uint256,uint256,uint256)": "2471caed";
        readonly "calculateTimeStretch(uint256,uint256)": "dbab8512";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"}],\"name\":\"calculateAbsoluteMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateInitialBondReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLPFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareCurveDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalGovernanceFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isLong\",\"type\":\"bool\"}],\"name\":\"calculateNegativeInterestOnClose\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_flatFee\",\"type\":\"uint256\"}],\"name\":\"calculateShortProceedsDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_flatFee\",\"type\":\"uint256\"}],\"name\":\"calculateShortProceedsUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotAPR\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"}],\"name\":\"calculateTimeStretch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdriveMath.sol\":\"MockHyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/MockHyperdriveMath.sol\":{\"keccak256\":\"0x3216937ae4cab12cc38a706996f3728676ca8f1b35911695b68bec932d942a07\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://036a8f8307a432f041163b2e091465a47f94ea1a30fc3bad8075209b1f33a4d3\",\"dweb:/ipfs/QmcZ7ArLLL9bnbh41M5xWn3mPVZezhfgwf77fnsgPGCEek\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
                    readonly name: "reason";
                    readonly type: "uint8";
                }];
                readonly type: "error";
                readonly name: "InsufficientLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "curveFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "flatFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "governanceLPFee";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_spotPrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateAbsoluteMaxLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_normalizedTimeRemaining";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateCloseLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountOut";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_normalizedTimeRemaining";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateCloseShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_apr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_positionDuration";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateInitialBondReserves";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "curveFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "flatFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "governanceLPFee";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "int256";
                    readonly name: "_checkpointExposure";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxIterations";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateMaxLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct HyperdriveUtils.MaxTradeParams";
                    readonly name: "_params";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "curveFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "flatFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "governanceLPFee";
                        readonly type: "uint256";
                    }];
                }, {
                    readonly internalType: "int256";
                    readonly name: "_checkpointExposure";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxIterations";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateMaxShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shareProceeds";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareReservesDelta";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareCurveDelta";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_totalGovernanceFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_openVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_closeVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_isLong";
                    readonly type: "bool";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateNegativeInterestOnClose";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateOpenLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_amountIn";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateOpenShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_openVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_closeVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_flatFee";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateShortProceedsDown";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_shareAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_openVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_closeVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_flatFee";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateShortProceedsUp";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_effectiveShareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_positionDuration";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateSpotAPR";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_initialVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timeStretch";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateSpotPrice";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "apr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "positionDuration";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateTimeStretch";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockHyperdriveMath.sol": "MockHyperdriveMath";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317";
                readonly urls: readonly ["bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213", "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76";
                readonly urls: readonly ["bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb", "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56";
                readonly urls: readonly ["bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8", "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e";
                readonly urls: readonly ["bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534", "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785";
                readonly urls: readonly ["bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263", "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891";
                readonly urls: readonly ["bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c", "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdriveMath.sol": {
                readonly keccak256: "0x3216937ae4cab12cc38a706996f3728676ca8f1b35911695b68bec932d942a07";
                readonly urls: readonly ["bzz-raw://036a8f8307a432f041163b2e091465a47f94ea1a30fc3bad8075209b1f33a4d3", "dweb:/ipfs/QmcZ7ArLLL9bnbh41M5xWn3mPVZezhfgwf77fnsgPGCEek"];
                readonly license: "Apache-2.0";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04";
                readonly urls: readonly ["bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6", "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockHyperdriveMath.sol";
        readonly id: 21502;
        readonly exportedSymbols: {
            readonly HyperdriveMath: readonly [15630];
            readonly HyperdriveUtils: readonly [146465];
            readonly MockHyperdriveMath: readonly [21501];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:8241:89";
        readonly nodes: readonly [{
            readonly id: 21013;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:89";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 21015;
            readonly nodeType: "ImportDirective";
            readonly src: "64:76:89";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "contracts/src/libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 21502;
            readonly sourceUnit: 15631;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 21014;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15630;
                    readonly src: "73:14:89";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 21017;
            readonly nodeType: "ImportDirective";
            readonly src: "141:65:89";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 21502;
            readonly sourceUnit: 146466;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 21016;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 146465;
                    readonly src: "150:15:89";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 21501;
            readonly nodeType: "ContractDefinition";
            readonly src: "208:8071:89";
            readonly nodes: readonly [{
                readonly id: 21046;
                readonly nodeType: "FunctionDefinition";
                readonly src: "242:498:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21045;
                    readonly nodeType: "Block";
                    readonly src: "484:256:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21033];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21033;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "502:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21045;
                            readonly src: "494:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21032;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "494:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21042;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21036;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21019;
                                readonly src: "556:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21037;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21021;
                                readonly src: "593:13:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21038;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21023;
                                readonly src: "620:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21039;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21025;
                                readonly src: "657:17:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21040;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21027;
                                readonly src: "688:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21034;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "511:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21035;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "526:16:89";
                                readonly memberName: "calculateSpotAPR";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15073;
                                readonly src: "511:31:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21041;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "511:199:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "494:216:89";
                    }, {
                        readonly expression: {
                            readonly id: 21043;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21033;
                            readonly src: "727:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21031;
                        readonly id: 21044;
                        readonly nodeType: "Return";
                        readonly src: "720:13:89";
                    }];
                };
                readonly functionSelector: "2810a036";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotAPR";
                readonly nameLocation: "251:16:89";
                readonly parameters: {
                    readonly id: 21028;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21019;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "285:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21046;
                        readonly src: "277:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21018;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "277:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21021;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "326:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21046;
                        readonly src: "318:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21020;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "318:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21023;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "357:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21046;
                        readonly src: "349:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21022;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "349:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21025;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "398:17:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21046;
                        readonly src: "390:25:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21024;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "390:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21027;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "433:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21046;
                        readonly src: "425:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21026;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "425:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "267:184:89";
                };
                readonly returnParameters: {
                    readonly id: 21031;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21030;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21046;
                        readonly src: "475:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21029;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "475:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "474:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21075;
                readonly nodeType: "FunctionDefinition";
                readonly src: "746:504:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21074;
                    readonly nodeType: "Block";
                    readonly src: "991:259:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21062];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21062;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1009:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21074;
                            readonly src: "1001:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21061;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1001:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21071;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21065;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21048;
                                readonly src: "1075:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21066;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21050;
                                readonly src: "1112:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21067;
                                readonly name: "_apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21052;
                                readonly src: "1149:4:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21068;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21054;
                                readonly src: "1167:17:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21069;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21056;
                                readonly src: "1198:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21063;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "1018:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21064;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1033:28:89";
                                readonly memberName: "calculateInitialBondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15177;
                                readonly src: "1018:43:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21070;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1018:202:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1001:219:89";
                    }, {
                        readonly expression: {
                            readonly id: 21072;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21062;
                            readonly src: "1237:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21060;
                        readonly id: 21073;
                        readonly nodeType: "Return";
                        readonly src: "1230:13:89";
                    }];
                };
                readonly functionSelector: "82a4d306";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateInitialBondReserves";
                readonly nameLocation: "755:28:89";
                readonly parameters: {
                    readonly id: 21057;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21048;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "801:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21075;
                        readonly src: "793:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21047;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "793:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21050;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "842:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21075;
                        readonly src: "834:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21049;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "834:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21052;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "883:4:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21075;
                        readonly src: "875:12:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21051;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "875:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21054;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "905:17:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21075;
                        readonly src: "897:25:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21053;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "897:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21056;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "940:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21075;
                        readonly src: "932:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21055;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "932:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "783:175:89";
                };
                readonly returnParameters: {
                    readonly id: 21060;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21059;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21075;
                        readonly src: "982:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21058;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "982:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "981:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21107;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1256:548:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21106;
                    readonly nodeType: "Block";
                    readonly src: "1525:279:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21093];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21093;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1543:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21106;
                            readonly src: "1535:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21092;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1535:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21103;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21096;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21077;
                                readonly src: "1598:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21097;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21079;
                                readonly src: "1635:13:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21098;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21081;
                                readonly src: "1662:9:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21099;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21083;
                                readonly src: "1685:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21100;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21085;
                                readonly src: "1711:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21101;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21087;
                                readonly src: "1741:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21094;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "1552:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21095;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1567:17:89";
                                readonly memberName: "calculateOpenLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15368;
                                readonly src: "1552:32:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21102;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1552:222:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1535:239:89";
                    }, {
                        readonly expression: {
                            readonly id: 21104;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21093;
                            readonly src: "1791:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21091;
                        readonly id: 21105;
                        readonly nodeType: "Return";
                        readonly src: "1784:13:89";
                    }];
                };
                readonly functionSelector: "5e6d9d36";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "1265:17:89";
                readonly parameters: {
                    readonly id: 21088;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21077;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "1300:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21107;
                        readonly src: "1292:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21076;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1292:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21079;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "1341:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21107;
                        readonly src: "1333:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21078;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1333:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21081;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "1372:9:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21107;
                        readonly src: "1364:17:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21080;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1364:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21083;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "1399:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21107;
                        readonly src: "1391:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21082;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1391:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21085;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "1429:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21107;
                        readonly src: "1421:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21084;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1421:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21087;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "1463:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21107;
                        readonly src: "1455:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21086;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1455:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1282:210:89";
                };
                readonly returnParameters: {
                    readonly id: 21091;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21090;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21107;
                        readonly src: "1516:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21089;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1516:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1515:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21153;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1810:751:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21152;
                    readonly nodeType: "Block";
                    readonly src: "2140:421:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21131, 21133, 21135];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21131;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "2159:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21152;
                            readonly src: "2151:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21130;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2151:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21133;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "2176:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21152;
                            readonly src: "2168:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21132;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2168:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21135;
                            readonly mutability: "mutable";
                            readonly name: "result3";
                            readonly nameLocation: "2193:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21152;
                            readonly src: "2185:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21134;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2185:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21146;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21138;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21109;
                                readonly src: "2268:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21139;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21111;
                                readonly src: "2309:13:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21140;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21113;
                                readonly src: "2340:9:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21141;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21115;
                                readonly src: "2367:24:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21142;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21117;
                                readonly src: "2409:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21143;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21119;
                                readonly src: "2439:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21144;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21121;
                                readonly src: "2473:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21136;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "2204:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21137;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2232:18:89";
                                readonly memberName: "calculateCloseLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15433;
                                readonly src: "2204:46:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 21145;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2204:306:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2150:360:89";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21147;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21131;
                                readonly src: "2528:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21148;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21133;
                                readonly src: "2537:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21149;
                                readonly name: "result3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21135;
                                readonly src: "2546:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21150;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "2527:27:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21129;
                        readonly id: 21151;
                        readonly nodeType: "Return";
                        readonly src: "2520:34:89";
                    }];
                };
                readonly functionSelector: "94169d49";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseLong";
                readonly nameLocation: "1819:18:89";
                readonly parameters: {
                    readonly id: 21122;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21109;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "1855:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "1847:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21108;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1847:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21111;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "1896:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "1888:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21110;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1888:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21113;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "1927:9:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "1919:17:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21112;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1919:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21115;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "1954:24:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "1946:32:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21114;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1946:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21117;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "1996:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "1988:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21116;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1988:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21119;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "2026:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "2018:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21118;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2018:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21121;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "2060:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "2052:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21120;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2052:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1837:252:89";
                };
                readonly returnParameters: {
                    readonly id: 21129;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21124;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "2113:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21123;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2113:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21126;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "2122:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21125;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2122:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21128;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21153;
                        readonly src: "2131:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21127;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2131:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2112:27:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21185;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2567:550:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21184;
                    readonly nodeType: "Block";
                    readonly src: "2837:280:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21171];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21171;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "2855:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21184;
                            readonly src: "2847:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21170;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2847:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21181;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21174;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21155;
                                readonly src: "2911:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21175;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21157;
                                readonly src: "2948:13:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21176;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21159;
                                readonly src: "2975:9:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21177;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21161;
                                readonly src: "2998:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21178;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21163;
                                readonly src: "3024:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21179;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21165;
                                readonly src: "3054:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21172;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "2864:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21173;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2879:18:89";
                                readonly memberName: "calculateOpenShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15464;
                                readonly src: "2864:33:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21180;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2864:223:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2847:240:89";
                    }, {
                        readonly expression: {
                            readonly id: 21182;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21171;
                            readonly src: "3104:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21169;
                        readonly id: 21183;
                        readonly nodeType: "Return";
                        readonly src: "3097:13:89";
                    }];
                };
                readonly functionSelector: "6ceebe1d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenShort";
                readonly nameLocation: "2576:18:89";
                readonly parameters: {
                    readonly id: 21166;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21155;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "2612:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21185;
                        readonly src: "2604:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21154;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2604:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21157;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "2653:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21185;
                        readonly src: "2645:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21156;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2645:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21159;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "2684:9:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21185;
                        readonly src: "2676:17:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21158;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2676:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21161;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "2711:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21185;
                        readonly src: "2703:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21160;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2703:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21163;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "2741:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21185;
                        readonly src: "2733:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21162;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2733:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21165;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "2775:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21185;
                        readonly src: "2767:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21164;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2767:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2594:210:89";
                };
                readonly returnParameters: {
                    readonly id: 21169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21168;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21185;
                        readonly src: "2828:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2828:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2827:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21231;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3123:755:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21230;
                    readonly nodeType: "Block";
                    readonly src: "3455:423:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21209, 21211, 21213];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21209;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "3474:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21230;
                            readonly src: "3466:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21208;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3466:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21211;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "3491:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21230;
                            readonly src: "3483:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21210;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3483:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21213;
                            readonly mutability: "mutable";
                            readonly name: "result3";
                            readonly nameLocation: "3508:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21230;
                            readonly src: "3500:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21212;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3500:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21224;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21216;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21187;
                                readonly src: "3584:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21217;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21189;
                                readonly src: "3625:13:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21218;
                                readonly name: "_amountOut";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21191;
                                readonly src: "3656:10:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21219;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21193;
                                readonly src: "3684:24:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21220;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21195;
                                readonly src: "3726:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21221;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21197;
                                readonly src: "3756:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21222;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21199;
                                readonly src: "3790:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21214;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "3519:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21215;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3547:19:89";
                                readonly memberName: "calculateCloseShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15529;
                                readonly src: "3519:47:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 21223;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3519:308:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3465:362:89";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21225;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21209;
                                readonly src: "3845:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21226;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21211;
                                readonly src: "3854:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21227;
                                readonly name: "result3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21213;
                                readonly src: "3863:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21228;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "3844:27:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21207;
                        readonly id: 21229;
                        readonly nodeType: "Return";
                        readonly src: "3837:34:89";
                    }];
                };
                readonly functionSelector: "f87845f2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseShort";
                readonly nameLocation: "3132:19:89";
                readonly parameters: {
                    readonly id: 21200;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21187;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "3169:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3161:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21186;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3161:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21189;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "3210:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3202:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21188;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3202:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21191;
                        readonly mutability: "mutable";
                        readonly name: "_amountOut";
                        readonly nameLocation: "3241:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3233:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21190;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3233:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21193;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "3269:24:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3261:32:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21192;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3261:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21195;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "3311:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3303:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21194;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3303:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21197;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "3341:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3333:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21196;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3333:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21199;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "3375:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3367:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21198;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3367:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3151:253:89";
                };
                readonly returnParameters: {
                    readonly id: 21207;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21202;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3428:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21201;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3428:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21204;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3437:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21203;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3437:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21206;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21231;
                        readonly src: "3446:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21205;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3446:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3427:27:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21242;
                readonly nodeType: "StructDefinition";
                readonly src: "3884:217:89";
                readonly nodes: readonly [];
                readonly canonicalName: "MockHyperdriveMath.NegativeInterestOnCloseOutput";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 21233;
                    readonly mutability: "mutable";
                    readonly name: "shareProceeds";
                    readonly nameLocation: "3939:13:89";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21242;
                    readonly src: "3931:21:89";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21232;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3931:7:89";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21235;
                    readonly mutability: "mutable";
                    readonly name: "shareReservesDelta";
                    readonly nameLocation: "3970:18:89";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21242;
                    readonly src: "3962:26:89";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21234;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3962:7:89";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21237;
                    readonly mutability: "mutable";
                    readonly name: "shareCurveDelta";
                    readonly nameLocation: "4006:15:89";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21242;
                    readonly src: "3998:23:89";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21236;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3998:7:89";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21239;
                    readonly mutability: "mutable";
                    readonly name: "shareAdjustmentDelta";
                    readonly nameLocation: "4038:20:89";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21242;
                    readonly src: "4031:27:89";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                    readonly typeName: {
                        readonly id: 21238;
                        readonly name: "int256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4031:6:89";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21241;
                    readonly mutability: "mutable";
                    readonly name: "totalGovernanceFee";
                    readonly nameLocation: "4076:18:89";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 21242;
                    readonly src: "4068:26:89";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 21240;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4068:7:89";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "NegativeInterestOnCloseOutput";
                readonly nameLocation: "3891:29:89";
                readonly scope: 21501;
                readonly visibility: "public";
            }, {
                readonly id: 21310;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4107:1113:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21309;
                    readonly nodeType: "Block";
                    readonly src: "4461:759:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21271];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21271;
                            readonly mutability: "mutable";
                            readonly name: "output";
                            readonly nameLocation: "4508:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21309;
                            readonly src: "4471:43:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput";
                            };
                            readonly typeName: {
                                readonly id: 21270;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 21269;
                                    readonly name: "NegativeInterestOnCloseOutput";
                                    readonly nameLocations: readonly ["4471:29:89"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 21242;
                                    readonly src: "4471:29:89";
                                };
                                readonly referencedDeclaration: 21242;
                                readonly src: "4471:29:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_storage_ptr";
                                    readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21272;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4471:43:89";
                    }, {
                        readonly expression: {
                            readonly id: 21295;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly expression: {
                                        readonly id: 21273;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21271;
                                        readonly src: "4538:6:89";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21275;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4545:13:89";
                                    readonly memberName: "shareProceeds";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21233;
                                    readonly src: "4538:20:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21276;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21271;
                                        readonly src: "4572:6:89";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21277;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4579:18:89";
                                    readonly memberName: "shareReservesDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21235;
                                    readonly src: "4572:25:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21278;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21271;
                                        readonly src: "4611:6:89";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21279;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4618:15:89";
                                    readonly memberName: "shareCurveDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21237;
                                    readonly src: "4611:22:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21280;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21271;
                                        readonly src: "4647:6:89";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21281;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4654:20:89";
                                    readonly memberName: "shareAdjustmentDelta";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21239;
                                    readonly src: "4647:27:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 21282;
                                        readonly name: "output";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21271;
                                        readonly src: "4688:6:89";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                            readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                        };
                                    };
                                    readonly id: 21283;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: true;
                                    readonly memberLocation: "4695:18:89";
                                    readonly memberName: "totalGovernanceFee";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21241;
                                    readonly src: "4688:25:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 21284;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "4524:199:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 21287;
                                    readonly name: "_shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21244;
                                    readonly src: "4787:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21288;
                                    readonly name: "_shareReservesDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21246;
                                    readonly src: "4815:19:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21289;
                                    readonly name: "_shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21248;
                                    readonly src: "4848:16:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21290;
                                    readonly name: "_totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21250;
                                    readonly src: "4878:19:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21291;
                                    readonly name: "_openVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21252;
                                    readonly src: "4911:20:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21292;
                                    readonly name: "_closeVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21254;
                                    readonly src: "4945:21:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 21293;
                                    readonly name: "_isLong";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21256;
                                    readonly src: "4980:7:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    }];
                                    readonly expression: {
                                        readonly id: 21285;
                                        readonly name: "HyperdriveMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 15630;
                                        readonly src: "4726:14:89";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                            readonly typeString: "type(library HyperdriveMath)";
                                        };
                                    };
                                    readonly id: 21286;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4741:32:89";
                                    readonly memberName: "calculateNegativeInterestOnClose";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 15629;
                                    readonly src: "4726:47:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)";
                                    };
                                };
                                readonly id: 21294;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4726:271:89";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                                };
                            };
                            readonly src: "4524:473:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 21296;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4524:473:89";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly expression: {
                                    readonly id: 21297;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21271;
                                    readonly src: "5028:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21298;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5035:13:89";
                                readonly memberName: "shareProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21233;
                                readonly src: "5028:20:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21299;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21271;
                                    readonly src: "5062:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21300;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5069:18:89";
                                readonly memberName: "shareReservesDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21235;
                                readonly src: "5062:25:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21301;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21271;
                                    readonly src: "5101:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21302;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5108:15:89";
                                readonly memberName: "shareCurveDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21237;
                                readonly src: "5101:22:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21303;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21271;
                                    readonly src: "5137:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21304;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5144:20:89";
                                readonly memberName: "shareAdjustmentDelta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21239;
                                readonly src: "5137:27:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 21305;
                                    readonly name: "output";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 21271;
                                    readonly src: "5178:6:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_NegativeInterestOnCloseOutput_$21242_memory_ptr";
                                        readonly typeString: "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory";
                                    };
                                };
                                readonly id: 21306;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5185:18:89";
                                readonly memberName: "totalGovernanceFee";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21241;
                                readonly src: "5178:25:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21307;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "5014:199:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21268;
                        readonly id: 21308;
                        readonly nodeType: "Return";
                        readonly src: "5007:206:89";
                    }];
                };
                readonly functionSelector: "7ef99f87";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNegativeInterestOnClose";
                readonly nameLocation: "4116:32:89";
                readonly parameters: {
                    readonly id: 21257;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21244;
                        readonly mutability: "mutable";
                        readonly name: "_shareProceeds";
                        readonly nameLocation: "4166:14:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4158:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21243;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4158:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21246;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "4198:19:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4190:27:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21245;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4190:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21248;
                        readonly mutability: "mutable";
                        readonly name: "_shareCurveDelta";
                        readonly nameLocation: "4235:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4227:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21247;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4227:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21250;
                        readonly mutability: "mutable";
                        readonly name: "_totalGovernanceFee";
                        readonly nameLocation: "4269:19:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4261:27:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21249;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4261:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21252;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "4306:20:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4298:28:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21251;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4298:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21254;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "4344:21:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4336:29:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21253;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4336:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21256;
                        readonly mutability: "mutable";
                        readonly name: "_isLong";
                        readonly nameLocation: "4380:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4375:12:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 21255;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4375:4:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4148:245:89";
                };
                readonly returnParameters: {
                    readonly id: 21268;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21259;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4417:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21258;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4417:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21261;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4426:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21260;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4426:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21263;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4435:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21262;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4435:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21265;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4444:6:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21264;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4444:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21267;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21310;
                        readonly src: "4452:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21266;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4452:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4416:44:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21330;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5226:272:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21329;
                    readonly nodeType: "Block";
                    readonly src: "5349:149:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21320];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21320;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "5367:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21329;
                            readonly src: "5359:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21319;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5359:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21326;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21323;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21312;
                                readonly src: "5425:3:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21324;
                                readonly name: "positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21314;
                                readonly src: "5442:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21321;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "5376:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21322;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5391:20:89";
                                readonly memberName: "calculateTimeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15009;
                                readonly src: "5376:35:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21325;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5376:92:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5359:109:89";
                    }, {
                        readonly expression: {
                            readonly id: 21327;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21320;
                            readonly src: "5485:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21318;
                        readonly id: 21328;
                        readonly nodeType: "Return";
                        readonly src: "5478:13:89";
                    }];
                };
                readonly functionSelector: "dbab8512";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeStretch";
                readonly nameLocation: "5235:20:89";
                readonly parameters: {
                    readonly id: 21315;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21312;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "5273:3:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21330;
                        readonly src: "5265:11:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21311;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5265:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21314;
                        readonly mutability: "mutable";
                        readonly name: "positionDuration";
                        readonly nameLocation: "5294:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21330;
                        readonly src: "5286:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21313;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5286:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5255:61:89";
                };
                readonly returnParameters: {
                    readonly id: 21318;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21317;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21330;
                        readonly src: "5340:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21316;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5340:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5339:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21360;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5504:409:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21359;
                    readonly nodeType: "Block";
                    readonly src: "5700:213:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21345, 21347];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21345;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "5719:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21359;
                            readonly src: "5711:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21344;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5711:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21347;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "5736:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21359;
                            readonly src: "5728:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21346;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5728:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21354;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21350;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21333;
                                readonly src: "5793:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 21351;
                                readonly name: "_checkpointExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21335;
                                readonly src: "5814:19:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 21352;
                                readonly name: "_maxIterations";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21337;
                                readonly src: "5847:14:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21348;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146465;
                                    readonly src: "5747:15:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$146465_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 21349;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5763:16:89";
                                readonly memberName: "calculateMaxLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 144684;
                                readonly src: "5747:32:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$144491_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256,uint256)";
                                };
                            };
                            readonly id: 21353;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5747:124:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5710:161:89";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21355;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21345;
                                readonly src: "5889:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21356;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21347;
                                readonly src: "5898:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21357;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "5888:18:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21343;
                        readonly id: 21358;
                        readonly nodeType: "Return";
                        readonly src: "5881:25:89";
                    }];
                };
                readonly functionSelector: "3f77b617";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxLong";
                readonly nameLocation: "5513:16:89";
                readonly parameters: {
                    readonly id: 21338;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21333;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "5577:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21360;
                        readonly src: "5539:45:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 21332;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21331;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["5539:15:89", "5555:14:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 144491;
                                readonly src: "5539:30:89";
                            };
                            readonly referencedDeclaration: 144491;
                            readonly src: "5539:30:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21335;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointExposure";
                        readonly nameLocation: "5601:19:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21360;
                        readonly src: "5594:26:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21334;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5594:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21337;
                        readonly mutability: "mutable";
                        readonly name: "_maxIterations";
                        readonly nameLocation: "5638:14:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21360;
                        readonly src: "5630:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21336;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5630:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5529:129:89";
                };
                readonly returnParameters: {
                    readonly id: 21343;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21340;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21360;
                        readonly src: "5682:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21339;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5682:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21342;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21360;
                        readonly src: "5691:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21341;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5691:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5681:18:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21390;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5919:455:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21389;
                    readonly nodeType: "Block";
                    readonly src: "6124:250:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21375, 21377];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21375;
                            readonly mutability: "mutable";
                            readonly name: "result1";
                            readonly nameLocation: "6143:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21389;
                            readonly src: "6135:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21374;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6135:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 21377;
                            readonly mutability: "mutable";
                            readonly name: "result2";
                            readonly nameLocation: "6160:7:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21389;
                            readonly src: "6152:15:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21376;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6152:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21384;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21380;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21363;
                                readonly src: "6242:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 21381;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21365;
                                readonly src: "6267:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21382;
                                readonly name: "_spotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21367;
                                readonly src: "6308:10:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21378;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146465;
                                    readonly src: "6171:15:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$146465_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 21379;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6200:24:89";
                                readonly memberName: "calculateAbsoluteMaxLong";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 144878;
                                readonly src: "6171:53:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$144491_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,uint256,uint256) pure returns (uint256,uint256)";
                                };
                            };
                            readonly id: 21383;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6171:161:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6134:198:89";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 21385;
                                readonly name: "result1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21375;
                                readonly src: "6350:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21386;
                                readonly name: "result2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21377;
                                readonly src: "6359:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 21387;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "6349:18:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 21373;
                        readonly id: 21388;
                        readonly nodeType: "Return";
                        readonly src: "6342:25:89";
                    }];
                };
                readonly functionSelector: "a280a282";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateAbsoluteMaxLong";
                readonly nameLocation: "5928:24:89";
                readonly parameters: {
                    readonly id: 21368;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21363;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "6000:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21390;
                        readonly src: "5962:45:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 21362;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21361;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["5962:15:89", "5978:14:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 144491;
                                readonly src: "5962:30:89";
                            };
                            readonly referencedDeclaration: 144491;
                            readonly src: "5962:30:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21365;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "6025:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21390;
                        readonly src: "6017:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21364;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6017:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21367;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "6066:10:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21390;
                        readonly src: "6058:18:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21366;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6058:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5952:130:89";
                };
                readonly returnParameters: {
                    readonly id: 21373;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21370;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21390;
                        readonly src: "6106:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21369;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6106:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21372;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21390;
                        readonly src: "6115:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21371;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6115:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6105:18:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21410;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6380:365:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21409;
                    readonly nodeType: "Block";
                    readonly src: "6568:177:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 21404;
                                readonly name: "_params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21393;
                                readonly src: "6648:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                };
                            }, {
                                readonly id: 21405;
                                readonly name: "_checkpointExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21395;
                                readonly src: "6673:19:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 21406;
                                readonly name: "_maxIterations";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21397;
                                readonly src: "6710:14:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                                    readonly typeString: "struct HyperdriveUtils.MaxTradeParams memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21402;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146465;
                                    readonly src: "6597:15:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$146465_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 21403;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6613:17:89";
                                readonly memberName: "calculateMaxShort";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 145614;
                                readonly src: "6597:33:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_MaxTradeParams_$144491_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21407;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6597:141:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21401;
                        readonly id: 21408;
                        readonly nodeType: "Return";
                        readonly src: "6578:160:89";
                    }];
                };
                readonly functionSelector: "9e489b99";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMaxShort";
                readonly nameLocation: "6389:17:89";
                readonly parameters: {
                    readonly id: 21398;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21393;
                        readonly mutability: "mutable";
                        readonly name: "_params";
                        readonly nameLocation: "6454:7:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21410;
                        readonly src: "6416:45:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_memory_ptr";
                            readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                        };
                        readonly typeName: {
                            readonly id: 21392;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 21391;
                                readonly name: "HyperdriveUtils.MaxTradeParams";
                                readonly nameLocations: readonly ["6416:15:89", "6432:14:89"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 144491;
                                readonly src: "6416:30:89";
                            };
                            readonly referencedDeclaration: 144491;
                            readonly src: "6416:30:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MaxTradeParams_$144491_storage_ptr";
                                readonly typeString: "struct HyperdriveUtils.MaxTradeParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21395;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointExposure";
                        readonly nameLocation: "6478:19:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21410;
                        readonly src: "6471:26:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 21394;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6471:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21397;
                        readonly mutability: "mutable";
                        readonly name: "_maxIterations";
                        readonly nameLocation: "6515:14:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21410;
                        readonly src: "6507:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21396;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6507:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6406:129:89";
                };
                readonly returnParameters: {
                    readonly id: 21401;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21400;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21410;
                        readonly src: "6559:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21399;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6559:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6558:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21436;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6751:418:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21435;
                    readonly nodeType: "Block";
                    readonly src: "6951:218:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21424];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21424;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "6969:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21435;
                            readonly src: "6961:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21423;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6961:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21432;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21427;
                                readonly name: "_shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21412;
                                readonly src: "7025:14:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21428;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21414;
                                readonly src: "7053:13:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21429;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21416;
                                readonly src: "7080:23:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21430;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21418;
                                readonly src: "7117:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21425;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "6978:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21426;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6993:18:89";
                                readonly memberName: "calculateSpotPrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15035;
                                readonly src: "6978:33:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21431;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6978:161:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6961:178:89";
                    }, {
                        readonly expression: {
                            readonly id: 21433;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21424;
                            readonly src: "7156:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21422;
                        readonly id: 21434;
                        readonly nodeType: "Return";
                        readonly src: "7149:13:89";
                    }];
                };
                readonly functionSelector: "2471caed";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotPrice";
                readonly nameLocation: "6760:18:89";
                readonly parameters: {
                    readonly id: 21419;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21412;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "6796:14:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21436;
                        readonly src: "6788:22:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21411;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6788:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21414;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "6828:13:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21436;
                        readonly src: "6820:21:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21413;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6820:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21416;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "6859:23:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21436;
                        readonly src: "6851:31:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21415;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6851:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21418;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "6900:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21436;
                        readonly src: "6892:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21417;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6892:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6778:140:89";
                };
                readonly returnParameters: {
                    readonly id: 21422;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21421;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21436;
                        readonly src: "6942:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21420;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6942:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6941:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21468;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7175:546:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21467;
                    readonly nodeType: "Block";
                    readonly src: "7443:278:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21454];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21454;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "7461:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21467;
                            readonly src: "7453:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21453;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7453:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21464;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21457;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21438;
                                readonly src: "7523:11:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21458;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21440;
                                readonly src: "7548:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21459;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21442;
                                readonly src: "7574:20:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21460;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21444;
                                readonly src: "7608:21:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21461;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21446;
                                readonly src: "7643:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21462;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21448;
                                readonly src: "7673:8:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21455;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "7470:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21456;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7485:24:89";
                                readonly memberName: "calculateShortProceedsUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15229;
                                readonly src: "7470:39:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21463;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7470:221:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7453:238:89";
                    }, {
                        readonly expression: {
                            readonly id: 21465;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21454;
                            readonly src: "7708:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21452;
                        readonly id: 21466;
                        readonly nodeType: "Return";
                        readonly src: "7701:13:89";
                    }];
                };
                readonly functionSelector: "902b1099";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsUp";
                readonly nameLocation: "7184:24:89";
                readonly parameters: {
                    readonly id: 21449;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21438;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "7226:11:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21468;
                        readonly src: "7218:19:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21437;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7218:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21440;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7255:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21468;
                        readonly src: "7247:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21439;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7247:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21442;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "7285:20:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21468;
                        readonly src: "7277:28:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21441;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7277:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21444;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "7323:21:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21468;
                        readonly src: "7315:29:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21443;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7315:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21446;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "7362:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21468;
                        readonly src: "7354:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21445;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7354:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21448;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "7396:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21468;
                        readonly src: "7388:16:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21447;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7388:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7208:202:89";
                };
                readonly returnParameters: {
                    readonly id: 21452;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21451;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21468;
                        readonly src: "7434:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21450;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7434:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7433:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 21500;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7727:550:89";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 21499;
                    readonly nodeType: "Block";
                    readonly src: "7997:280:89";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [21486];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 21486;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "8015:6:89";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 21499;
                            readonly src: "8007:14:89";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 21485;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8007:7:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 21496;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 21489;
                                readonly name: "_bondAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21470;
                                readonly src: "8079:11:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21490;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21472;
                                readonly src: "8104:12:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21491;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21474;
                                readonly src: "8130:20:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21492;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21476;
                                readonly src: "8164:21:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21493;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21478;
                                readonly src: "8199:16:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 21494;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 21480;
                                readonly src: "8229:8:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 21487;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "8024:14:89";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 21488;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8039:26:89";
                                readonly memberName: "calculateShortProceedsDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15281;
                                readonly src: "8024:41:89";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 21495;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8024:223:89";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8007:240:89";
                    }, {
                        readonly expression: {
                            readonly id: 21497;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 21486;
                            readonly src: "8264:6:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 21484;
                        readonly id: 21498;
                        readonly nodeType: "Return";
                        readonly src: "8257:13:89";
                    }];
                };
                readonly functionSelector: "e7acd3ad";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsDown";
                readonly nameLocation: "7736:26:89";
                readonly parameters: {
                    readonly id: 21481;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21470;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "7780:11:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21500;
                        readonly src: "7772:19:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21469;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7772:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21472;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7809:12:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21500;
                        readonly src: "7801:20:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21471;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7801:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21474;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "7839:20:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21500;
                        readonly src: "7831:28:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21473;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7831:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21476;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "7877:21:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21500;
                        readonly src: "7869:29:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21475;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7869:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21478;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "7916:16:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21500;
                        readonly src: "7908:24:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21477;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7908:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 21480;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "7950:8:89";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21500;
                        readonly src: "7942:16:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21479;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7942:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7762:202:89";
                };
                readonly returnParameters: {
                    readonly id: 21484;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 21483;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 21500;
                        readonly src: "7988:7:89";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 21482;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7988:7:89";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7987:9:89";
                };
                readonly scope: 21501;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "MockHyperdriveMath";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [21501];
            readonly name: "MockHyperdriveMath";
            readonly nameLocation: "217:18:89";
            readonly scope: 21502;
            readonly usedErrors: readonly [7478, 7490, 7526, 7582];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 89;
};
//# sourceMappingURL=MockHyperdriveMath.d.ts.map