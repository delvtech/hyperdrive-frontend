export const MockHyperdriveMath = 
{
  "abi": [
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "shareAdjustment",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longExposure",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "curveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct HyperdriveUtils.MaxTradeParams",
          "name": "_params",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "_effectiveShareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_spotPrice",
          "type": "uint256"
        }
      ],
      "name": "calculateAbsoluteMaxLong",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_effectiveShareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_normalizedTimeRemaining",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timeStretch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateCloseLong",
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_effectiveShareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_normalizedTimeRemaining",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timeStretch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateCloseShort",
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_effectiveShareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_positionDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timeStretch",
          "type": "uint256"
        }
      ],
      "name": "calculateInitialBondReserves",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "shareAdjustment",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longExposure",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "curveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct HyperdriveUtils.MaxTradeParams",
          "name": "_params",
          "type": "tuple"
        },
        {
          "internalType": "int256",
          "name": "_checkpointLongExposure",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "_maxIterations",
          "type": "uint256"
        }
      ],
      "name": "calculateMaxLong",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "shareAdjustment",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longExposure",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "curveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct HyperdriveUtils.MaxTradeParams",
          "name": "_params",
          "type": "tuple"
        },
        {
          "internalType": "int256",
          "name": "_checkpointExposure",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "_maxIterations",
          "type": "uint256"
        }
      ],
      "name": "calculateMaxShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_shareProceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_shareReservesDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_shareCurveDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_totalGovernanceFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_openSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_closeSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "calculateNegativeInterestOnClose",
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
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_effectiveShareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timeStretch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateOpenLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_effectiveShareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timeStretch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateOpenShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "shareAdjustment",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longAverageTimeRemaining",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortAverageTimeRemaining",
              "type": "uint256"
            }
          ],
          "internalType": "struct HyperdriveMath.PresentValueParams",
          "name": "_params",
          "type": "tuple"
        }
      ],
      "name": "calculatePresentValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
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
          "name": "_openSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_closeSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateShortInterest",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
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
          "name": "_shareAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_openSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_closeSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_flatFee",
          "type": "uint256"
        }
      ],
      "name": "calculateShortProceeds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_effectiveShareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_positionDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timeStretch",
          "type": "uint256"
        }
      ],
      "name": "calculateSpotAPR",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_shareReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondReserves",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timeStretch",
          "type": "uint256"
        }
      ],
      "name": "calculateSpotPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b5061248a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806386ad02af1161008c578063a40a6be811610066578063a40a6be814610218578063de31b2ab1461022b578063f87845f21461023e578063fdc30d611461025157600080fd5b806386ad02af146101af57806394169d49146101c2578063a2b9a7b7146101f057600080fd5b80635e6d9d36116100c85780635e6d9d361461013b5780636ceebe1d1461014e5780637ef99f871461016157806382a4d3061461019c57600080fd5b80632471caed146100ef5780632810a0361461011557806337043a5314610128575b600080fd5b6101026100fd3660046120c3565b610264565b6040519081526020015b60405180910390f35b6101026101233660046120f5565b61027f565b6101026101363660046121f9565b61029a565b610102610149366004612216565b6102ab565b61010261015c366004612216565b6102c8565b61017461016f366004612259565b6102d9565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101aa3660046120f5565b61035d565b6101026101bd3660046122be565b61036d565b6101d56101d03660046122f5565b610384565b6040805193845260208401929092529082015260600161010c565b6102036101fe3660046122be565b6103b4565b6040805192835260208301919091520161010c565b6102036102263660046122be565b6103d5565b610102610239366004612216565b6103e6565b6101d561024c3660046122f5565b6103f7565b61010261025f3660046120c3565b61040f565b6000806102738686868661041e565b9150505b949350505050565b60008061028f878787878761043e565b979650505050505050565b60006102a582610479565b92915050565b6000806102bc8888888888886106e7565b98975050505050505050565b6000806102bc888888888888610708565b60008060008060006103136040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103228d8d8d8d8d8d8d610729565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028f87878787876107a4565b600061037a8484846107fb565b90505b9392505050565b60008060008060008061039c8d8d8d8d8d8d8d6109b2565b919750955093505050505b9750975097945050505050565b6000806000806103c5878787610a21565b909450925050505b935093915050565b6000806000806103c5878787610bba565b6000806102bc888888888888610dc9565b60008060008060008061039c8d8d8d8d8d8d8d610e18565b60008061027386868686610e64565b60006104358261042f858888610e89565b90610ea7565b95945050505050565b60008061044d8787878661041e565b905061028f61046182866301e13380610efe565b61047383670de0b6b3a7640000612357565b90610f24565b600080610499836101400151846101200151610f3990919063ffffffff16565b61010084015160e08501516104ad91610f39565b6104b7919061236a565b905060006104cd84600001518560200151610f4e565b9050600082131561056d57600061050f8286604001518760a001518860c00151670de0b6b3a76400006105009190612357565b89606001518a60800151610f6b565b905061051b8184611005565b9050801561056757610554828660400151838860c00151670de0b6b3a76400006105459190612357565b89606001518a6080015161101a565b85518690610563908390612357565b9052505b50610629565b60008212156106295761057f82612391565b915060006105b38286604001518760c00151670de0b6b3a76400006105a49190612357565b8860600151896080015161104e565b90506105bf8184611005565b9050801561060b576105f8828660400151838860c00151670de0b6b3a76400006105e99190612357565b89606001518a608001516110d8565b855186906106079083906123ad565b9052505b6106158184612357565b855186906106249083906123ad565b905250505b6000610658856101000151670de0b6b3a76400006106479190612357565b606087015160e08801519190610e89565b610686866101400151670de0b6b3a76400006106749190612357565b60608801516101208901519190610e89565b610690919061236a565b905060008186600001516106a491906123c0565b90508560a001518112156106cb5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516106dd9082612357565b9695505050505050565b600061028f87878761070188670de0b6b3a7640000612357565b878761116d565b600061028f87878761072288670de0b6b3a7640000612357565b878761101a565b6000806000806000808888101561078657861561074e5761074b8d898b610e89565b9c505b6107598c898b610e89565b9b506107658b8d61236a565b90506107728b898b610e89565b9a5061077f8a898b610e89565b9950610793565b6107908b8d61236a565b90505b9b9c9a9b999a975050505050505050565b6000806107b5846301e13380610f24565b905061028f6107eb6107cf670de0b6b3a764000086611201565b6107d98885610f39565b61042f90670de0b6b3a76400006123ad565b6107f5888a610f39565b90610f39565b60408051606081018252600080825260208201819052918101829052600061082b86600001518760200151610f4e565b905060006108478288604001518960e001518a60a0015161041e565b905060006108558884611216565b9050610864888285858b61130b565b158015604087015290855261087e57935061037d92505050565b600061088b89848a611430565b905061089a898286868c61130b565b1515604087018190529086526109115760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b60648201526084015b60405180910390fd5b60005b878110156109a5576109288a838688611506565b158015604089015260208801919091526109a557602086015186516000916109509190610f24565b61095a90846123ad565b90508381111561096a57506109a5565b6109778b8288888e61130b565b15801560408a015290885261098e57809250610994565b506109a5565b5061099e816123e8565b9050610914565b5098975050505050505050565b600080806109d36109cb88670de0b6b3a7640000612357565b899087610e89565b905086156103a7576109e58888610f39565b9150610a068a8a846109ff8a670de0b6b3a7640000612357565b898961101a565b9250610a1283826123ad565b90509750975097945050505050565b600080600080610a578688604001518960a00151670de0b6b3a7640000610a489190612357565b8a60c001518b60e00151611586565b9050610af9610a868860a00151670de0b6b3a7640000610a779190612357565b670de0b6b3a764000090610f24565b60a089015161042f90610ad590610aa99061047381670de0b6b3a7640000612357565b6107d9670de0b6b3a7640000610abf818d611201565b610ac99190612357565b6101208e0151906115b5565b60e08b015160c08c0151610ae891611201565b610af291906123ad565b8490610f24565b9150506000610b158760e0015183610f2490919063ffffffff16565b90506000610b6b836107f5610b3f8b60a00151670de0b6b3a764000061120190919063ffffffff16565b6107d9670de0b6b3a7640000610b55818d610f24565b610b5f9190612357565b6101208e015190610f39565b9050610b818860c0015188846107f59190612357565b9450610b9385878a61012001516115ca565b818960400151610ba39190612357565b610bad9190612357565b9350505050935093915050565b6000806000610bd186600001518760200151610f4e565b90506000610bed8288604001518960e001518a60a0015161041e565b9050600080610bfd898585610a21565b90925090506000610c118a8a8585886115f7565b9150508015610c28575090945092506103cd915050565b50610c3589838a86611720565b9550610c43898786866117b1565b9450600080610c558b8b8a8a896115f7565b9150915080610cc05760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b6064820152608401610908565b60005b89811015610dba57848910610d365760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610908565b6000610d448d8b8a8a611804565b9350905082610d535750610dba565b6000610d5f8583610f24565b610d69908c6123ad565b90506000610d798f838c8c6117b1565b9050610d888f8f84848d6115f7565b90965094508415610d9e57819b50809a50610da6565b505050610dba565b50505080610db3906123e8565b9050610cc3565b50505050505050935093915050565b600080610de285610dda88876115b5565b8a9190610e89565b9050610def888486610e89565b610df990826123ad565b905086811115610e0d576102bc8782612357565b509695505050505050565b60008080610e316109cb88670de0b6b3a7640000612357565b9050610e3d8888610f39565b915081156103a757610a068a8a84610e5d8a670de0b6b3a7640000612357565b89896110d8565b60008383111561027757610435610e7b8585612357565b610e8586856115b5565b8791905b6000826000190484118302158202610ea057600080fd5b5091020490565b600081600003610ec05750670de0b6b3a76400006102a5565b82600003610ed0575060006102a5565b816000610edc8561189c565b9050818102610ef3670de0b6b3a764000082612401565b90506106dd81611ab8565b6000826000190484118302158202610f1557600080fd5b50910281810615159190040190565b600061037d83670de0b6b3a764000084610e89565b600061037d8383670de0b6b3a7640000610e89565b600080610f5b838561236a565b9050600081121561037d57600080fd5b600080610f7b8888878787611586565b90506000610f98610f908761042f878b6115b5565b869086610efe565b610fa29083612357565b9050670de0b6b3a76400008110610fd657610fcf610fc8670de0b6b3a764000088610f24565b8290610ea7565b9050610fee565b610feb610fc8670de0b6b3a764000088611201565b90505b610ff88882612357565b9998505050505050505050565b6000818311611014578261037d565b50919050565b60008061102b888888888888611c43565b909250905080610e0d57604051637ac17d2560e01b815260040160405180910390fd5b60008061105e8787878787611d05565b90506000611089670de0b6b3a76400006110788787610f24565b61108291906123ad565b8390611201565b9050670de0b6b3a764000081106110b6576110af610fc8670de0b6b3a764000088611201565b90506110ce565b6110cb610fc8670de0b6b3a764000088610f24565b90505b6102bc8188612357565b6000806110e88888878787611d05565b90506110f88561042f888a612357565b96506000611112848661110b8b86612357565b9190610efe565b9050670de0b6b3a7640000811061113f57611138610fc8670de0b6b3a764000088611201565b9050611157565b611154610fc8670de0b6b3a764000088610f24565b90505b6111618185611201565b9050610ff88982612357565b60008061117d8888878787611d05565b90506111978561042f611190898c6123ad565b8690610f39565b97506111a4848985610e89565b975060006111b28983612357565b9050670de0b6b3a764000081106111df576111d8610fc8670de0b6b3a764000088611201565b90506111f7565b6111f4610fc8670de0b6b3a764000088610f24565b90505b610ff88189612357565b600061037d83670de0b6b3a764000084610efe565b60008061123d846101000151856020015161123191906123c0565b61010086015190611d2a565b905060006112718486604001518760a00151670de0b6b3a76400006112629190612357565b8860c001518960e00151611586565b905060006112f96112a28760a00151670de0b6b3a76400006112939190612357565b670de0b6b3a764000090611201565b6112ef6112dc8960a00151670de0b6b3a76400006112c09190612357565b61042f6112d1898d60200151610f4e565b60e08d015190610f39565b60e08a015160c08b01516107f591610f24565b61042f9085612357565b90508560400151816106dd9190612357565b600080600080611342878a604001518a8c60a00151670de0b6b3a76400006113339190612357565b8d60c001518e60e00151611c43565b915091508061135957600080935093505050611426565b60006113938a60c001516113798b8a8e61012001518f6101400151611d40565b6113898c8b8f6101200151611d57565b6104739190612357565b61139d9084612357565b8a516113a99190612357565b905060006113d88b60c001516113c960008a611d2a90919063ffffffff16565b8d608001516104739190612357565b90508a6101000151816113eb91906123ad565b821061141a576101008b01516114018284612357565b61140b9190612357565b60019550955050505050611426565b60008095509550505050505b9550959350505050565b600080839050600061149b86610100015161145c8860c001518960800151610f2490919063ffffffff16565b60c089015161147090610473896000611d2a565b895161147c91906123ad565b6114869190612357565b6114909190612357565b60c088015190610f39565b90506106dd6114ca6114b587670de0b6b3a7640000612357565b6101208901516101408a01516107f591610f39565b6114eb6114df88670de0b6b3a7640000612357565b6101208a015190610f39565b6114f59085612357565b6114ff91906123ad565b8290610f24565b6000806000611516878786611d72565b905060006115538860c001516104738a6101400151670de0b6b3a764000061153e9190612357565b6107f5610b5f8b670de0b6b3a7640000612357565b9050808210611573576115668183612357565b600193509350505061157d565b6000809350935050505b94509492505050565b60006115928585610ea7565b6115ab6115a38661042f868b610f39565b859085610e89565b6106dd91906123ad565b600061037d8383670de0b6b3a7640000610efe565b600061037a846107f5670de0b6b3a76400006115e68188610f24565b6115f09190612357565b8590610f39565b600080600061161286858a61012001518b6101400151611e47565b9050600061162d8960c0015183610f2490919063ffffffff16565b60c08a015161163d908990610f24565b8a5161164991906123ad565b6116539190612357565b90506000828861166489600261243d565b8c6080015161167391906123ad565b61167d9190612357565b61168791906123ad565b905060006116958a82611e61565b61169e90612391565b90508a61010001516116bd8c60c0015184610f2490919063ffffffff16565b6116c791906123ad565b60c08c01516116d7908390610f24565b6116e190856123ad565b1061141a576101008b015160c08c01516116fc908490610f24565b60c08d015161170c908490610f24565b61171690866123ad565b6114019190612357565b60008061172f86858586611e70565b90506000611767670b1a2bc2ec5000006107f561175d8a60a00151670de0b6b3a76400006112939190612357565b61042f868b610f24565b9050600061177d670de0b6b3a764000083610f39565b61179961179284670de0b6b3a7640000612357565b8790610f39565b6117a391906123ad565b90506102bc88878784611e70565b6000806117e88487604001516117d48960c0015189610f2490919063ffffffff16565b8960a001518a60c001518b60e001516106e7565b90506117fa85848861012001516115ca565b6102739082612357565b60008061181386868686611f73565b909250905080611826576000915061157d565b61185061183b84670de0b6b3a7640000612357565b6101208801516101408901516107f591610f39565b61185a90836123ad565b915061186e670de0b6b3a764000083612357565b9150611891671bc16d674ec800008760c0015184610e899092919063ffffffff16565b915094509492505050565b60008082136118be57604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611ad357506000919050565b680755bf798b4a1bf1e58212611afc5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000806000611c558989888888611d05565b9050611c658661042f898b6123ad565b975087811015611c7c576000809250925050611cfa565b6000611c8d858761110b8c86612357565b9050670de0b6b3a76400008110611cba57611cb3610fc8670de0b6b3a764000089611201565b9050611cd2565b611ccf610fc8670de0b6b3a764000089610f24565b90505b611cdc8186611201565b9050808a1115611cf357611cf0818b612357565b93505b6001925050505b965096945050505050565b6000611d118585610ea7565b6115ab611d228661042f868b6115b5565b859085610efe565b6000818313611d39578161037d565b5090919050565b6000610435611d50868686611d57565b8390610f39565b600061037a846107f56115f086670de0b6b3a7640000612357565b600080611d968386604001518760a00151670de0b6b3a76400006112629190612357565b90506000611dc3610a77611db88860a00151888a6040015161042f91906123ad565b60c0890151906115b5565b90506000611e3b611df08860a00151670de0b6b3a7640000611de59190612357565b60a08a015190611201565b61042f611e1e8a60a00151670de0b6b3a7640000611e0e9190612357565b8a8c6040015161042f91906123ad565b611e289087612357565b60c08b015160e08c01516107f591610f24565b905061028f8282610f39565b6000610435611e578686866115ca565b6107f58487610f39565b6000818313611014578261037d565b600080611e7d8582611e61565b611e8690612391565b90506000611ef38760c00151671bc16d674ec80000896101000151611ebc8b60c001518c60800151610f2490919063ffffffff16565b60c08c0151611ecc908890610f24565b8c51611ed891906123ad565b611ee29190612357565b611eec9190612357565b9190610e89565b905061028f611f18670de0b6b3a7640000611f0e8189610f24565b6114df9190612357565b670de0b6b3a7640000611f43611f2e8983612357565b6101208c01516101408d01516107f591610f39565b611f55670de0b6b3a764000089610f24565b611f5f91906123ad565b611f699190612357565b6114ff9190612357565b6000806000611f8f8760c0015187610f2490919063ffffffff16565b90506000611fab611fa083886123ad565b60e08a015190610f39565b90506000611fdf878a604001518b60a00151670de0b6b3a7640000611fd09190612357565b8c60c001518d60e00151611586565b9050611ffb610a778a60a0015184610ea790919063ffffffff16565b9450600061202a6120198b60a0015185610ea790919063ffffffff16565b60e08c015160c08d01519190610e89565b90508082101561204457600080955095505050505061157d565b61207a6117926120708c60a00151670de0b6b3a76400006120659190612357565b60a08e015190611201565b61042f8486612357565b95506120a8670de0b6b3a7640000612092818a610f24565b61209c9190612357565b6101208c015190610f39565b6120b29087612357565b9a60019a5098505050505050505050565b600080600080608085870312156120d957600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561210d57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610160810167ffffffffffffffff8111828210171561216257634e487b7160e01b600052604160045260246000fd5b60405290565b6000610160828403121561217b57600080fd5b612183612130565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525092915050565b6000610160828403121561220c57600080fd5b61037d8383612168565b60008060008060008060c0878903121561222f57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a03121561227457600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c088013580151581146122ae57600080fd5b8091505092959891949750929550565b60008060006101a084860312156122d457600080fd5b6122de8585612168565b956101608501359550610180909401359392505050565b600080600080600080600060e0888a03121561231057600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102a5576102a5612341565b818103600083128015838313168383128216171561238a5761238a612341565b5092915050565b6000600160ff1b82016123a6576123a6612341565b5060000390565b808201808211156102a5576102a5612341565b80820182811260008312801582168215821617156123e0576123e0612341565b505092915050565b6000600182016123fa576123fa612341565b5060010190565b60008261241e57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561243857612438612341565b500590565b80820281158282048414176102a5576102a561234156fea2646970667358221220bd0c45fc237214be3ac80cf8d8f253518e0d90d2538cae248748b1bc4ef791eb64736f6c63430008130033",
    "sourceMap": "208:7697:52:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c806386ad02af1161008c578063a40a6be811610066578063a40a6be814610218578063de31b2ab1461022b578063f87845f21461023e578063fdc30d611461025157600080fd5b806386ad02af146101af57806394169d49146101c2578063a2b9a7b7146101f057600080fd5b80635e6d9d36116100c85780635e6d9d361461013b5780636ceebe1d1461014e5780637ef99f871461016157806382a4d3061461019c57600080fd5b80632471caed146100ef5780632810a0361461011557806337043a5314610128575b600080fd5b6101026100fd3660046120c3565b610264565b6040519081526020015b60405180910390f35b6101026101233660046120f5565b61027f565b6101026101363660046121f9565b61029a565b610102610149366004612216565b6102ab565b61010261015c366004612216565b6102c8565b61017461016f366004612259565b6102d9565b604080519586526020860194909452928401919091526060830152608082015260a00161010c565b6101026101aa3660046120f5565b61035d565b6101026101bd3660046122be565b61036d565b6101d56101d03660046122f5565b610384565b6040805193845260208401929092529082015260600161010c565b6102036101fe3660046122be565b6103b4565b6040805192835260208301919091520161010c565b6102036102263660046122be565b6103d5565b610102610239366004612216565b6103e6565b6101d561024c3660046122f5565b6103f7565b61010261025f3660046120c3565b61040f565b6000806102738686868661041e565b9150505b949350505050565b60008061028f878787878761043e565b979650505050505050565b60006102a582610479565b92915050565b6000806102bc8888888888886106e7565b98975050505050505050565b6000806102bc888888888888610708565b60008060008060006103136040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6103228d8d8d8d8d8d8d610729565b608086018190526060860182905260408601839052602086018490529484905292985090965094509250905097509750975097509792505050565b60008061028f87878787876107a4565b600061037a8484846107fb565b90505b9392505050565b60008060008060008061039c8d8d8d8d8d8d8d6109b2565b919750955093505050505b9750975097945050505050565b6000806000806103c5878787610a21565b909450925050505b935093915050565b6000806000806103c5878787610bba565b6000806102bc888888888888610dc9565b60008060008060008061039c8d8d8d8d8d8d8d610e18565b60008061027386868686610e64565b60006104358261042f858888610e89565b90610ea7565b95945050505050565b60008061044d8787878661041e565b905061028f61046182866301e13380610efe565b61047383670de0b6b3a7640000612357565b90610f24565b600080610499836101400151846101200151610f3990919063ffffffff16565b61010084015160e08501516104ad91610f39565b6104b7919061236a565b905060006104cd84600001518560200151610f4e565b9050600082131561056d57600061050f8286604001518760a001518860c00151670de0b6b3a76400006105009190612357565b89606001518a60800151610f6b565b905061051b8184611005565b9050801561056757610554828660400151838860c00151670de0b6b3a76400006105459190612357565b89606001518a6080015161101a565b85518690610563908390612357565b9052505b50610629565b60008212156106295761057f82612391565b915060006105b38286604001518760c00151670de0b6b3a76400006105a49190612357565b8860600151896080015161104e565b90506105bf8184611005565b9050801561060b576105f8828660400151838860c00151670de0b6b3a76400006105e99190612357565b89606001518a608001516110d8565b855186906106079083906123ad565b9052505b6106158184612357565b855186906106249083906123ad565b905250505b6000610658856101000151670de0b6b3a76400006106479190612357565b606087015160e08801519190610e89565b610686866101400151670de0b6b3a76400006106749190612357565b60608801516101208901519190610e89565b610690919061236a565b905060008186600001516106a491906123c0565b90508560a001518112156106cb5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516106dd9082612357565b9695505050505050565b600061028f87878761070188670de0b6b3a7640000612357565b878761116d565b600061028f87878761072288670de0b6b3a7640000612357565b878761101a565b6000806000806000808888101561078657861561074e5761074b8d898b610e89565b9c505b6107598c898b610e89565b9b506107658b8d61236a565b90506107728b898b610e89565b9a5061077f8a898b610e89565b9950610793565b6107908b8d61236a565b90505b9b9c9a9b999a975050505050505050565b6000806107b5846301e13380610f24565b905061028f6107eb6107cf670de0b6b3a764000086611201565b6107d98885610f39565b61042f90670de0b6b3a76400006123ad565b6107f5888a610f39565b90610f39565b60408051606081018252600080825260208201819052918101829052600061082b86600001518760200151610f4e565b905060006108478288604001518960e001518a60a0015161041e565b905060006108558884611216565b9050610864888285858b61130b565b158015604087015290855261087e57935061037d92505050565b600061088b89848a611430565b905061089a898286868c61130b565b1515604087018190529086526109115760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b60648201526084015b60405180910390fd5b60005b878110156109a5576109288a838688611506565b158015604089015260208801919091526109a557602086015186516000916109509190610f24565b61095a90846123ad565b90508381111561096a57506109a5565b6109778b8288888e61130b565b15801560408a015290885261098e57809250610994565b506109a5565b5061099e816123e8565b9050610914565b5098975050505050505050565b600080806109d36109cb88670de0b6b3a7640000612357565b899087610e89565b905086156103a7576109e58888610f39565b9150610a068a8a846109ff8a670de0b6b3a7640000612357565b898961101a565b9250610a1283826123ad565b90509750975097945050505050565b600080600080610a578688604001518960a00151670de0b6b3a7640000610a489190612357565b8a60c001518b60e00151611586565b9050610af9610a868860a00151670de0b6b3a7640000610a779190612357565b670de0b6b3a764000090610f24565b60a089015161042f90610ad590610aa99061047381670de0b6b3a7640000612357565b6107d9670de0b6b3a7640000610abf818d611201565b610ac99190612357565b6101208e0151906115b5565b60e08b015160c08c0151610ae891611201565b610af291906123ad565b8490610f24565b9150506000610b158760e0015183610f2490919063ffffffff16565b90506000610b6b836107f5610b3f8b60a00151670de0b6b3a764000061120190919063ffffffff16565b6107d9670de0b6b3a7640000610b55818d610f24565b610b5f9190612357565b6101208e015190610f39565b9050610b818860c0015188846107f59190612357565b9450610b9385878a61012001516115ca565b818960400151610ba39190612357565b610bad9190612357565b9350505050935093915050565b6000806000610bd186600001518760200151610f4e565b90506000610bed8288604001518960e001518a60a0015161041e565b9050600080610bfd898585610a21565b90925090506000610c118a8a8585886115f7565b9150508015610c28575090945092506103cd915050565b50610c3589838a86611720565b9550610c43898786866117b1565b9450600080610c558b8b8a8a896115f7565b9150915080610cc05760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d61784c6f6044820152703733b01034b99034b739b7b63b32b73a1760791b6064820152608401610908565b60005b89811015610dba57848910610d365760405162461bcd60e51b815260206004820152603360248201527f52656163686564206162736f6c757465206d617820626f6e6420616d6f756e746044820152721034b7103033b2ba2fb6b0bc2fb637b733b01760691b6064820152608401610908565b6000610d448d8b8a8a611804565b9350905082610d535750610dba565b6000610d5f8583610f24565b610d69908c6123ad565b90506000610d798f838c8c6117b1565b9050610d888f8f84848d6115f7565b90965094508415610d9e57819b50809a50610da6565b505050610dba565b50505080610db3906123e8565b9050610cc3565b50505050505050935093915050565b600080610de285610dda88876115b5565b8a9190610e89565b9050610def888486610e89565b610df990826123ad565b905086811115610e0d576102bc8782612357565b509695505050505050565b60008080610e316109cb88670de0b6b3a7640000612357565b9050610e3d8888610f39565b915081156103a757610a068a8a84610e5d8a670de0b6b3a7640000612357565b89896110d8565b60008383111561027757610435610e7b8585612357565b610e8586856115b5565b8791905b6000826000190484118302158202610ea057600080fd5b5091020490565b600081600003610ec05750670de0b6b3a76400006102a5565b82600003610ed0575060006102a5565b816000610edc8561189c565b9050818102610ef3670de0b6b3a764000082612401565b90506106dd81611ab8565b6000826000190484118302158202610f1557600080fd5b50910281810615159190040190565b600061037d83670de0b6b3a764000084610e89565b600061037d8383670de0b6b3a7640000610e89565b600080610f5b838561236a565b9050600081121561037d57600080fd5b600080610f7b8888878787611586565b90506000610f98610f908761042f878b6115b5565b869086610efe565b610fa29083612357565b9050670de0b6b3a76400008110610fd657610fcf610fc8670de0b6b3a764000088610f24565b8290610ea7565b9050610fee565b610feb610fc8670de0b6b3a764000088611201565b90505b610ff88882612357565b9998505050505050505050565b6000818311611014578261037d565b50919050565b60008061102b888888888888611c43565b909250905080610e0d57604051637ac17d2560e01b815260040160405180910390fd5b60008061105e8787878787611d05565b90506000611089670de0b6b3a76400006110788787610f24565b61108291906123ad565b8390611201565b9050670de0b6b3a764000081106110b6576110af610fc8670de0b6b3a764000088611201565b90506110ce565b6110cb610fc8670de0b6b3a764000088610f24565b90505b6102bc8188612357565b6000806110e88888878787611d05565b90506110f88561042f888a612357565b96506000611112848661110b8b86612357565b9190610efe565b9050670de0b6b3a7640000811061113f57611138610fc8670de0b6b3a764000088611201565b9050611157565b611154610fc8670de0b6b3a764000088610f24565b90505b6111618185611201565b9050610ff88982612357565b60008061117d8888878787611d05565b90506111978561042f611190898c6123ad565b8690610f39565b97506111a4848985610e89565b975060006111b28983612357565b9050670de0b6b3a764000081106111df576111d8610fc8670de0b6b3a764000088611201565b90506111f7565b6111f4610fc8670de0b6b3a764000088610f24565b90505b610ff88189612357565b600061037d83670de0b6b3a764000084610efe565b60008061123d846101000151856020015161123191906123c0565b61010086015190611d2a565b905060006112718486604001518760a00151670de0b6b3a76400006112629190612357565b8860c001518960e00151611586565b905060006112f96112a28760a00151670de0b6b3a76400006112939190612357565b670de0b6b3a764000090611201565b6112ef6112dc8960a00151670de0b6b3a76400006112c09190612357565b61042f6112d1898d60200151610f4e565b60e08d015190610f39565b60e08a015160c08b01516107f591610f24565b61042f9085612357565b90508560400151816106dd9190612357565b600080600080611342878a604001518a8c60a00151670de0b6b3a76400006113339190612357565b8d60c001518e60e00151611c43565b915091508061135957600080935093505050611426565b60006113938a60c001516113798b8a8e61012001518f6101400151611d40565b6113898c8b8f6101200151611d57565b6104739190612357565b61139d9084612357565b8a516113a99190612357565b905060006113d88b60c001516113c960008a611d2a90919063ffffffff16565b8d608001516104739190612357565b90508a6101000151816113eb91906123ad565b821061141a576101008b01516114018284612357565b61140b9190612357565b60019550955050505050611426565b60008095509550505050505b9550959350505050565b600080839050600061149b86610100015161145c8860c001518960800151610f2490919063ffffffff16565b60c089015161147090610473896000611d2a565b895161147c91906123ad565b6114869190612357565b6114909190612357565b60c088015190610f39565b90506106dd6114ca6114b587670de0b6b3a7640000612357565b6101208901516101408a01516107f591610f39565b6114eb6114df88670de0b6b3a7640000612357565b6101208a015190610f39565b6114f59085612357565b6114ff91906123ad565b8290610f24565b6000806000611516878786611d72565b905060006115538860c001516104738a6101400151670de0b6b3a764000061153e9190612357565b6107f5610b5f8b670de0b6b3a7640000612357565b9050808210611573576115668183612357565b600193509350505061157d565b6000809350935050505b94509492505050565b60006115928585610ea7565b6115ab6115a38661042f868b610f39565b859085610e89565b6106dd91906123ad565b600061037d8383670de0b6b3a7640000610efe565b600061037a846107f5670de0b6b3a76400006115e68188610f24565b6115f09190612357565b8590610f39565b600080600061161286858a61012001518b6101400151611e47565b9050600061162d8960c0015183610f2490919063ffffffff16565b60c08a015161163d908990610f24565b8a5161164991906123ad565b6116539190612357565b90506000828861166489600261243d565b8c6080015161167391906123ad565b61167d9190612357565b61168791906123ad565b905060006116958a82611e61565b61169e90612391565b90508a61010001516116bd8c60c0015184610f2490919063ffffffff16565b6116c791906123ad565b60c08c01516116d7908390610f24565b6116e190856123ad565b1061141a576101008b015160c08c01516116fc908490610f24565b60c08d015161170c908490610f24565b61171690866123ad565b6114019190612357565b60008061172f86858586611e70565b90506000611767670b1a2bc2ec5000006107f561175d8a60a00151670de0b6b3a76400006112939190612357565b61042f868b610f24565b9050600061177d670de0b6b3a764000083610f39565b61179961179284670de0b6b3a7640000612357565b8790610f39565b6117a391906123ad565b90506102bc88878784611e70565b6000806117e88487604001516117d48960c0015189610f2490919063ffffffff16565b8960a001518a60c001518b60e001516106e7565b90506117fa85848861012001516115ca565b6102739082612357565b60008061181386868686611f73565b909250905080611826576000915061157d565b61185061183b84670de0b6b3a7640000612357565b6101208801516101408901516107f591610f39565b61185a90836123ad565b915061186e670de0b6b3a764000083612357565b9150611891671bc16d674ec800008760c0015184610e899092919063ffffffff16565b915094509492505050565b60008082136118be57604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611ad357506000919050565b680755bf798b4a1bf1e58212611afc5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000806000611c558989888888611d05565b9050611c658661042f898b6123ad565b975087811015611c7c576000809250925050611cfa565b6000611c8d858761110b8c86612357565b9050670de0b6b3a76400008110611cba57611cb3610fc8670de0b6b3a764000089611201565b9050611cd2565b611ccf610fc8670de0b6b3a764000089610f24565b90505b611cdc8186611201565b9050808a1115611cf357611cf0818b612357565b93505b6001925050505b965096945050505050565b6000611d118585610ea7565b6115ab611d228661042f868b6115b5565b859085610efe565b6000818313611d39578161037d565b5090919050565b6000610435611d50868686611d57565b8390610f39565b600061037a846107f56115f086670de0b6b3a7640000612357565b600080611d968386604001518760a00151670de0b6b3a76400006112629190612357565b90506000611dc3610a77611db88860a00151888a6040015161042f91906123ad565b60c0890151906115b5565b90506000611e3b611df08860a00151670de0b6b3a7640000611de59190612357565b60a08a015190611201565b61042f611e1e8a60a00151670de0b6b3a7640000611e0e9190612357565b8a8c6040015161042f91906123ad565b611e289087612357565b60c08b015160e08c01516107f591610f24565b905061028f8282610f39565b6000610435611e578686866115ca565b6107f58487610f39565b6000818313611014578261037d565b600080611e7d8582611e61565b611e8690612391565b90506000611ef38760c00151671bc16d674ec80000896101000151611ebc8b60c001518c60800151610f2490919063ffffffff16565b60c08c0151611ecc908890610f24565b8c51611ed891906123ad565b611ee29190612357565b611eec9190612357565b9190610e89565b905061028f611f18670de0b6b3a7640000611f0e8189610f24565b6114df9190612357565b670de0b6b3a7640000611f43611f2e8983612357565b6101208c01516101408d01516107f591610f39565b611f55670de0b6b3a764000089610f24565b611f5f91906123ad565b611f699190612357565b6114ff9190612357565b6000806000611f8f8760c0015187610f2490919063ffffffff16565b90506000611fab611fa083886123ad565b60e08a015190610f39565b90506000611fdf878a604001518b60a00151670de0b6b3a7640000611fd09190612357565b8c60c001518d60e00151611586565b9050611ffb610a778a60a0015184610ea790919063ffffffff16565b9450600061202a6120198b60a0015185610ea790919063ffffffff16565b60e08c015160c08d01519190610e89565b90508082101561204457600080955095505050505061157d565b61207a6117926120708c60a00151670de0b6b3a76400006120659190612357565b60a08e015190611201565b61042f8486612357565b95506120a8670de0b6b3a7640000612092818a610f24565b61209c9190612357565b6101208c015190610f39565b6120b29087612357565b9a60019a5098505050505050505050565b600080600080608085870312156120d957600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a0868803121561210d57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b604051610160810167ffffffffffffffff8111828210171561216257634e487b7160e01b600052604160045260246000fd5b60405290565b6000610160828403121561217b57600080fd5b612183612130565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525092915050565b6000610160828403121561220c57600080fd5b61037d8383612168565b60008060008060008060c0878903121561222f57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a03121561227457600080fd5b873596506020880135955060408801359450606088013593506080880135925060a0880135915060c088013580151581146122ae57600080fd5b8091505092959891949750929550565b60008060006101a084860312156122d457600080fd5b6122de8585612168565b956101608501359550610180909401359392505050565b600080600080600080600060e0888a03121561231057600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102a5576102a5612341565b818103600083128015838313168383128216171561238a5761238a612341565b5092915050565b6000600160ff1b82016123a6576123a6612341565b5060000390565b808201808211156102a5576102a5612341565b80820182811260008312801582168215821617156123e0576123e0612341565b505092915050565b6000600182016123fa576123fa612341565b5060010190565b60008261241e57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561243857612438612341565b500590565b80820281158282048414176102a5576102a561234156fea2646970667358221220bd0c45fc237214be3ac80cf8d8f253518e0d90d2538cae248748b1bc4ef791eb64736f6c63430008130033",
    "sourceMap": "208:7697:52:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6361:408;;;;;;:::i;:::-;;:::i;:::-;;;550:25:167;;;538:2;523:18;6361:408:52;;;;;;;;242:488;;;;;;:::i;:::-;;:::i;6775:196::-;;;;;;:::i;:::-;;:::i;1236:528::-;;;;;;:::i;:::-;;:::i;2507:530::-;;;;;;:::i;:::-;;:::i;4007:1093::-;;;;;;:::i;:::-;;:::i;:::-;;;;4081:25:167;;;4137:2;4122:18;;4115:34;;;;4165:18;;;4158:34;;;;4223:2;4208:18;;4201:34;4266:3;4251:19;;4244:35;4068:3;4053:19;4007:1093:52;3824:461:167;736:494:52;;;;;;:::i;:::-;;:::i;5990:365::-;;;;;;:::i;:::-;;:::i;1770:731::-;;;;;;:::i;:::-;;:::i;:::-;;;;5479:25:167;;;5535:2;5520:18;;5513:34;;;;5563:18;;;5556:34;5467:2;5452:18;1770:731:52;5277:319:167;5529:455:52;;;;;;:::i;:::-;;:::i;:::-;;;;6166:25:167;;;6222:2;6207:18;;6200:34;;;;6139:18;5529:455:52;5992:248:167;5106:417:52;;;;;;:::i;:::-;;:::i;6977:512::-;;;;;;:::i;:::-;;:::i;3043:735::-;;;;;;:::i;:::-;;:::i;7495:408::-;;;;;;:::i;:::-;;:::i;6361:::-;6547:7;6566:14;6583:156;6630:14;6658:13;6685:18;6717:12;6583:33;:156::i;:::-;6566:173;-1:-1:-1;;6361:408:52;;;;;;;:::o;242:488::-;470:7;489:14;506:194;551:23;588:13;615:18;647:17;678:12;506:31;:194::i;:::-;489:211;242:488;-1:-1:-1;;;;;;;242:488:52:o;6775:196::-;6893:7;6919:45;6956:7;6919:36;:45::i;:::-;6912:52;6775:196;-1:-1:-1;;6775:196:52:o;1236:528::-;1486:7;1505:14;1522:212;1568:23;1605:13;1632:9;1655:12;1681:11;1706:18;1522:32;:212::i;:::-;1505:229;1236:528;-1:-1:-1;;;;;;;;1236:528:52:o;2507:530::-;2758:7;2777:14;2794:213;2841:23;2878:13;2905:9;2928:12;2954:11;2979:18;2794:33;:213::i;4007:1093::-;4307:7;4316;4325;4334:6;4342:7;4361:43;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4361:43:52;4616:261;4677:14;4705:19;4738:16;4768:19;4801:15;4830:16;4860:7;4616:47;:261::i;:::-;4578:25;;;4414:463;;;4537:27;;;4414:463;;;4501:22;;;4414:463;;;4462:25;;;4414:463;;;;;;;;;-1:-1:-1;4414:463:52;;-1:-1:-1;4414:463:52;-1:-1:-1;4414:463:52;-1:-1:-1;4414:463:52;-1:-1:-1;4007:1093:52;;;;;;;;;;;;;:::o;736:494::-;967:7;986:14;1003:197;1060:23;1097:18;1129:4;1147:17;1178:12;1003:43;:197::i;5990:365::-;6169:7;6207:141;6258:7;6283:19;6320:14;6207:33;:141::i;:::-;6188:160;;5990:365;;;;;;:::o;1770:731::-;2063:7;2072;2081;2101:15;2118;2135;2154:296;2218:23;2259:13;2290:9;2317:24;2359:12;2389:11;2418:18;2154:46;:296::i;:::-;2100:350;;-1:-1:-1;2100:350:52;-1:-1:-1;2100:350:52;-1:-1:-1;;;;1770:731:52;;;;;;;;;;;;:::o;5529:455::-;5716:7;5725;5745:15;5762;5781:161;5852:7;5877:23;5918:10;5781:53;:161::i;:::-;5744:198;;-1:-1:-1;5744:198:52;-1:-1:-1;;;5529:455:52;;;;;;;:::o;5106:417::-;5288:7;5297;5317:15;5334;5353:128;5399:7;5420:23;5457:14;5353:32;:128::i;6977:512::-;7219:7;7238:14;7255:204;7306:11;7331:12;7357:15;7386:16;7416:11;7441:8;7255:37;:204::i;3043:735::-;3338:7;3347;3356;3376:15;3393;3410;3429:298;3494:23;3535:13;3566:10;3594:24;3636:12;3666:11;3695:18;3429:47;:298::i;7495:408::-;7681:7;7700:14;7717:156;7768:11;7793:15;7822:16;7852:11;7717:37;:156::i;1246:449:34:-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;:::-;1563:125;1246:449;-1:-1:-1;;;;;1246:449:34:o;2254:774::-;2482:11;2718:17;2738:150;2770:23;2807:13;2834:18;2866:12;2738:18;:150::i;:::-;2718:170;-1:-1:-1;2917:104:34;2960:47;2718:170;2979:17;2998:8;2960:18;:47::i;:::-;2918:15;2924:9;150:4:33;2918:15:34;:::i;:::-;2917:25;;:104::i;20164:5466::-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:33;21747:25:34;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:34;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:34;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:33;22409:25:34;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:34;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:33;23632:25:34;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:34;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:34;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:33;24288:25:34;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:34;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:34;24665:19;24899:153;24962:7;:32;;;150:4:33;24956:38:34;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:33;24761:39:34;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:34;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;:::-;25564:59;20164:5466;-1:-1:-1;;;;;;20164:5466:34:o;6975:872::-;7228:7;7365:475;7432:23;7473:13;7504:12;7743:18;7749:12;150:4:33;7743:18:34;:::i;:::-;7779:11;7808:18;7365:49;:475::i;11325:846::-;11576:7;11692:472;11759:23;11800:13;11831:9;12067:18;12073:12;150:4:33;12067:18:34;:::i;:::-;12103:11;12132:18;11692:49;:472::i;16838:2717::-;17138:7;17147;17156;17165:6;17173:7;18107:27;18167:15;18148:16;:34;18144:1219;;;18383:7;18379:181;;;18427:118;:14;18474:16;18512:15;18427:25;:118::i;:::-;18410:135;;18379:181;18635:111;:19;18683:16;18717:15;18635:30;:111::i;:::-;18613:133;-1:-1:-1;18854:70:34;18907:16;18613:133;18854:70;:::i;:::-;18815:109;-1:-1:-1;18957:108:34;:16;19002;19036:15;18957:27;:108::i;:::-;18938:127;-1:-1:-1;19101:111:34;:19;19149:16;19183:15;19101:30;:111::i;:::-;19079:133;;18144:1219;;;19282:70;19335:16;19289:19;19282:70;:::i;:::-;19243:109;;18144:1219;19394:14;;19422:19;;19455:16;;16838:2717;-1:-1:-1;;;;;;;;16838:2717:34:o;4023:611::-;4254:20;;4363:35;:17;4389:8;4363:25;:35::i;:::-;4351:47;-1:-1:-1;4484:143:34;4561:52;4589:23;150:4:33;4599:12:34;4589:9;:23::i;:::-;4568:15;:4;4581:1;4568:12;:15::i;:::-;4562:21;;150:4:33;4562:21:34;:::i;4561:52::-;4484:51;:18;4511:23;4484:26;:51::i;:::-;:59;;:143::i;37382:4487:165:-;-1:-1:-1;;;;;;;;37545:7:165;-1:-1:-1;;;;;;;;;;;;;;;37864:30:165;37897:153;37974:7;:21;;;38013:7;:23;;;37897:59;:153::i;:::-;37864:186;;38060:17;38080:185;38127:22;38163:7;:20;;;38197:7;:25;;;38236:7;:19;;;38080:33;:185::i;:::-;38060:205;;38275:29;38307:94;38348:7;38369:22;38307:27;:94::i;:::-;38275:126;;38453:185;38494:7;38515:21;38550:22;38586:9;38609:19;38453:27;:185::i;:::-;38411:227;;;38432:17;;;38411:227;;;;38648:76;;38692:21;-1:-1:-1;38685:28:165;;-1:-1:-1;;;38685:28:165;38648:76;39618:21;39642:109;39678:7;39699:9;39722:19;39642:22;:109::i;:::-;39618:133;;39803:177;39844:7;39865:13;39892:22;39928:9;39951:19;39803:27;:177::i;:::-;39761:219;;39782:17;;;39761:219;;;;;;39990:113;;;;-1:-1:-1;;;39990:113:165;;7409:2:167;39990:113:165;;;7391:21:167;7448:2;7428:18;;;7421:30;7487:34;7467:18;;;7460:62;-1:-1:-1;;;7538:18:167;;;7531:47;7595:19;;39990:113:165;;;;;;;;;40118:9;40113:1719;40137:14;40133:1;:18;40113:1719;;;40733:174;40788:7;40813:13;40844:9;40871:22;40733:37;:174::i;:::-;40643:264;;;40699:17;;;40643:264;40661:20;;;40643:264;;;;40963:5;40921:62;41087:20;;;;41060:18;;40996:29;;41060:48;;:18;:26;:48::i;:::-;41028:80;;:13;:80;:::i;:::-;40996:112;;41150:21;41126;:45;41122:89;;;41191:5;;;41122:89;41462:209;41507:7;41532:21;41571:22;41611:9;41638:19;41462:27;:209::i;:::-;41374:297;;;41428:17;;;41374:297;;;;41685:137;;41742:21;41726:37;;41685:137;;;41802:5;;;41685:137;-1:-1:-1;40153:3:165;;;:::i;:::-;;;40113:1719;;;-1:-1:-1;41849:13:165;37382:4487;-1:-1:-1;;;;;;;;37382:4487:165:o;8791:1862:34:-;9121:23;;;9700:99;9734:30;9740:24;150:4:33;9734:30:34;:::i;:::-;9700:9;;9778:11;9700:20;:99::i;:::-;9684:115;-1:-1:-1;9813:28:34;;9809:838;;9929:43;:9;9947:24;9929:17;:43::i;:::-;9912:60;-1:-1:-1;10113:477:34;10180:23;10221:13;9912:60;10493:18;10499:12;150:4:33;10493:18:34;:::i;:::-;10529:11;10558:18;10113:49;:477::i;:::-;10095:495;-1:-1:-1;10604:32:34;10095:495;10604:32;;:::i;:::-;;;8791:1862;;;;;;;;;;;:::o;16759:3209:165:-;16954:29;16985;18051:13;18088:10;18101:235;18139:23;18180:7;:20;;;18224:7;:19;;;150:4:33;18218:25:165;;;;:::i;:::-;18261:7;:18;;;18297:7;:25;;;18101:20;:235::i;:::-;18088:248;;18358:516;18835:38;18853:7;:19;;;150:4:33;18847:25:165;;;;:::i;:::-;150:4:33;;18835:11:165;:38::i;:::-;18712:19;;;;18358:455;;18485:310;;18639:126;;18640:25;18712:19;150:4:33;18640:25:165;:::i;18639:126::-;18520:51;150:4:33;18543:21:165;150:4:33;18553:10:165;18543:9;:21::i;:::-;:27;;;;:::i;:::-;18520:16;;;;;:22;:51::i;18485:310::-;18432:25;;;;18407:18;;;;:51;;:24;:51::i;:::-;:388;;;;:::i;:::-;18358:2;;:27;:455::i;:516::-;18350:524;;18074:811;18894:27;18924:40;18938:7;:25;;;18924:5;:13;;:40;;;;:::i;:::-;18894:70;;19187:26;19216:152;19362:5;19216:124;19309:30;19319:7;:19;;;150:4:33;19309:9:165;;:30;;;;:::i;:::-;19235:55;150:4:33;19260:23:165;150:4:33;19272:10:165;19260:11;:23::i;:::-;:29;;;;:::i;:::-;19235:16;;;;;:24;:55::i;19216:152::-;19187:181;;19516:88;19585:7;:18;;;19539:23;19517:19;:45;;;;:::i;19516:88::-;19492:112;;19825:136;19864:21;19903:10;19931:7;:16;;;19825:21;:136::i;:::-;19791:18;19768:7;:20;;;:41;;;;:::i;:::-;19767:194;;;;:::i;:::-;19731:230;;17020:2948;;;16759:3209;;;;;;:::o;11110:5047::-;11276:21;11299;11473:30;11506:153;11583:7;:21;;;11622:7;:23;;;11506:59;:153::i;:::-;11473:186;;11669:17;11689:185;11736:22;11772:7;:20;;;11806:7;:25;;;11845:7;:19;;;11689:33;:185::i;:::-;11669:205;;11884:29;11923;12071:130;12113:7;12138:22;12178:9;12071:24;:130::i;:::-;11976:225;;-1:-1:-1;11976:225:165;-1:-1:-1;12218:15:165;12237:211;12281:7;12306:23;11976:225;;12425:9;12237:26;:211::i;:::-;12215:233;;;12466:10;12462:102;;;-1:-1:-1;12504:21:165;;-1:-1:-1;12527:21:165;-1:-1:-1;12496:53:165;;-1:-1:-1;;12496:53:165;12462:102;11962:612;13469:147;13504:7;13525:21;13560:23;13597:9;13469:21;:147::i;:::-;13453:163;;13642:136;13675:7;13696:13;13723:22;13759:9;13642:19;:136::i;:::-;13626:152;;13789:17;13808:12;13824:171;13864:7;13885:23;13922:13;13949;13976:9;13824:26;:171::i;:::-;13788:207;;;;14013:7;14005:69;;;;-1:-1:-1;;;14005:69:165;;7967:2:167;14005:69:165;;;7949:21:167;8006:2;7986:18;;;7979:30;8045:34;8025:18;;;8018:62;-1:-1:-1;;;8096:18:167;;;8089:47;8153:19;;14005:69:165;7765:413:167;14005:69:165;14089:9;14084:2019;14108:14;14104:1;:18;14084:2019;;;14369:21;14353:13;:37;14328:147;;;;-1:-1:-1;;;14328:147:165;;8385:2:167;14328:147:165;;;8367:21:167;8424:2;8404:18;;;8397:30;8463:34;8443:18;;;8436:62;-1:-1:-1;;;8514:18:167;;;8507:49;8573:19;;14328:147:165;8183:415:167;14328:147:165;15038:18;15094:173;15148:7;15173:13;15204:22;15244:9;15094:36;:173::i;:::-;15070:197;-1:-1:-1;15070:197:165;-1:-1:-1;15070:197:165;15281:52;;15313:5;;;15281:52;15346:29;15410;:9;15428:10;15410:17;:29::i;:::-;15378:61;;:13;:61;:::i;:::-;15346:93;;15453:29;15485:164;15522:7;15547:21;15586:22;15626:9;15485:19;:164::i;:::-;15453:196;;15686:211;15730:7;15755:23;15796:21;15835;15874:9;15686:26;:211::i;:::-;15663:234;;-1:-1:-1;15663:234:165;-1:-1:-1;15911:182:165;;;;15958:21;15942:37;;16013:21;15997:37;;15911:182;;;16073:5;;;;;15911:182;14129:1974;;;14124:3;;;;:::i;:::-;;;14084:2019;;;;16113:37;;;;;;11110:5047;;;;;;:::o;26919:1230:34:-;27161:21;;27503:186;27539:16;27645:34;:15;27667:11;27645:21;:34::i;:::-;27503:11;;:186;:22;:186::i;:::-;27482:207;-1:-1:-1;27910:45:34;:11;27933:8;27943:11;27910:22;:45::i;:::-;27896:59;;;;:::i;:::-;;;27983:12;27970:10;:25;27966:147;;;28077:25;28090:12;28077:10;:25;:::i;27966:147::-;28122:20;26919:1230;;;;;;;;:::o;13107:1882::-;13439:23;;;14115:100;14150:30;14156:24;150:4:33;14150:30:34;:::i;14115:100::-;14100:115;-1:-1:-1;14242:44:34;:10;14261:24;14242:18;:44::i;:::-;14225:61;-1:-1:-1;14300:18:34;;14296:687;;14452:475;14517:23;14558:13;14589:14;14830:18;14836:12;150:4:33;14830:18:34;:::i;:::-;14866:11;14895:18;14452:47;:475::i;28895:640::-;29081:21;29197:15;29178:16;:34;29174:355;;;29298:220;29338:34;29357:15;29338:16;:34;:::i;:::-;29470;:15;29492:11;29470:21;:34::i;:::-;29298:11;;:220;984:556:33;1100:9;1365:1;-1:-1:-1;;1348:19:33;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:33;;1497:27;;984:556::o;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:33;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:33;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:33;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;2726:748::-;2840:9;3105:1;-1:-1:-1;;3088:19:33;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:33;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;2207:165::-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;1814:119::-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;30120:340:34:-;30255:7;;30306:53;30343:16;30313:14;30306:53;:::i;:::-;30274:85;;30403:1;30377:22;:27;;30369:36;;;;;12091:1116:36;12264:7;12704:9;12716:21;12722:1;12725;12728;12731;12734:2;12716:5;:21::i;:::-;12704:33;-1:-1:-1;12747:16:36;12770:37;12781:21;12800:1;12781:14;:2;12790:4;12781:8;:14::i;:21::-;12770:1;;12804:2;12770:10;:37::i;:::-;12766:41;;:1;:41;:::i;:::-;12747:60;;150:4:33;12821:8:36;:15;12817:295;;12935:28;12948:14;150:4:33;12960:1:36;12948:11;:14::i;:::-;12935:8;;:12;:28::i;:::-;12924:39;;12817:295;;;13075:26;13088:12;150:4:33;13098:1:36;13088:9;:12::i;13075:26::-;13064:37;;12817:295;13188:12;13199:1;13188:8;:12;:::i;:::-;13181:19;12091:1116;-1:-1:-1;;;;;;;;;12091:1116:36:o;14433:104:33:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;;-1:-1:-1;14525:1:33;14433:104;-1:-1:-1;14433:104:33:o;7297:489:36:-;7486:14;7512:12;7554:140;7606:1;7621;7636:2;7652:1;7667;7682:2;7554:38;:140::i;:::-;7534:160;;-1:-1:-1;7534:160:36;-1:-1:-1;7534:160:36;7704:76;;7739:30;;-1:-1:-1;;;7739:30:36;;;;;;;;;;;10391:1124;10541:7;11029:9;11041:19;11045:1;11048;11051;11054;11057:2;11041:3;:19::i;:::-;11029:31;-1:-1:-1;11070:16:36;11089:28;150:4:33;11097:13:36;:1;11107:2;11097:9;:13::i;:::-;:19;;;;:::i;:::-;11089:1;;:7;:28::i;:::-;11070:47;;150:4:33;11131:8:36;:15;11127:293;;11242:26;11255:12;150:4:33;11265:1:36;11255:9;:12::i;11242:26::-;11231:37;;11127:293;;;11381:28;11394:14;150:4:33;11406:1:36;11394:11;:14::i;11381:28::-;11370:39;;11127:293;11496:12;11500:8;11496:1;:12;:::i;3827:1099::-;4014:7;4170:9;4182:19;4186:1;4189;4192;4195;4198:2;4182:3;:19::i;:::-;4170:31;-1:-1:-1;4244:15:36;4257:1;4245:6;4249:2;4245:1;:6;:::i;4244:15::-;4240:19;-1:-1:-1;4415:10:36;4428:23;4445:2;4449:1;4429:5;4240:19;4429:1;:5;:::i;:::-;4428:16;:23;:16;:23::i;:::-;4415:36;;150:4:33;4465:2:36;:9;4461:261;;4563:20;4570:12;150:4:33;4580:1:36;4570:9;:12::i;4563:20::-;4558:25;;4461:261;;;4689:22;4696:14;150:4:33;4708:1:36;4696:11;:14::i;4689:22::-;4684:27;;4461:261;4804:12;:2;4813;4804:8;:12::i;:::-;4799:17;-1:-1:-1;4913:6:36;4918:1;4799:17;4913:6;:::i;2079:1170::-;2268:7;2424:9;2436:19;2440:1;2443;2446;2449;2452:2;2436:3;:19::i;:::-;2424:31;-1:-1:-1;2589:25:36;2612:1;2589:18;2600:6;2604:2;2600:1;:6;:::i;:::-;2589:2;;:10;:18::i;:25::-;2585:29;-1:-1:-1;2674:19:36;:1;2585:29;2690:2;2674:12;:19::i;:::-;2670:23;-1:-1:-1;2853:10:36;2866:5;2670:23;2866:1;:5;:::i;:::-;2853:18;;150:4:33;2885:2:36;:9;2881:261;;2983:20;2990:12;150:4:33;3000:1:36;2990:9;:12::i;2983:20::-;2978:25;;2881:261;;;3109:22;3116:14;150:4:33;3128:1:36;3116:11;:14::i;3109:22::-;3104:27;;2881:261;3236:6;3240:2;3236:1;:6;:::i;4141:115:33:-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;42294:2020:165:-;42440:7;42877:28;42929:134;43020:7;:28;;;42987:7;:23;;;:62;;;;:::i;:::-;42936:28;;;;;42929:40;:134::i;:::-;42877:196;;43477:10;43490:211;43524:23;43561:7;:20;;;43601:7;:19;;;150:4:33;43595:25:165;;;;:::i;:::-;43634:7;:18;;;43666:7;:25;;;43490:20;:211::i;:::-;43477:224;;43711:27;43741:506;44210:36;44226:7;:19;;;150:4:33;44220:25:165;;;;:::i;:::-;150:4:33;;44210:9:165;:36::i;:::-;43759:445;43840:350;44170:7;:19;;;150:4:33;44164:25:165;;;;:::i;:::-;43840:298;43941:175;44017:20;44067:7;:23;;;43941:46;:175::i;:::-;43840:46;;;;;:75;:298::i;:350::-;43787:25;;;;43760:18;;;;:53;;:26;:53::i;43759:445::-;43742:462;;:2;:462;:::i;43741:506::-;43711:536;;44287:7;:20;;;44265:19;:42;;;;:::i;48421:1889::-;48661:7;48670:4;48923:19;48944:12;48960:311;49044:23;49085:7;:20;;;49123:12;49159:7;:19;;;150:4:33;49153:25:165;;;;:::i;:::-;49196:7;:18;;;49232:7;:25;;;48960:66;:311::i;:::-;48922:349;;;;49286:7;49281:56;;49317:1;49320:5;49309:17;;;;;;;;49281:56;49413:21;49504:409;49894:7;:18;;;49672:212;49725:12;49763:10;49799:7;:16;;;49841:7;:21;;;49672:27;:212::i;:::-;49505:144;49549:12;49583:10;49615:7;:16;;;49505:22;:144::i;:::-;:379;;;;:::i;49504:409::-;49474:439;;:11;:439;:::i;:::-;49437:21;;:477;;;;:::i;:::-;49413:501;;49924:16;49943:100;50024:7;:18;;;49987:26;50011:1;49987:19;:23;;:26;;;;:::i;:::-;49944:7;:20;;;:70;;;;:::i;49943:100::-;49924:119;;50085:7;:28;;;50074:8;:39;;;;:::i;:::-;50057:13;:56;50053:251;;50181:28;;;;50154:24;50170:8;50154:13;:24;:::i;:::-;:55;;;;:::i;:::-;50227:4;50129:116;;;;;;;;;;50053:251;50284:1;50287:5;50276:17;;;;;;;;48421:1889;;;;;;;;;:::o;45776:849::-;45940:7;45959:21;45983:10;45959:34;;46003:13;46019:305;46286:7;:28;;;46219:48;46248:7;:18;;;46219:7;:20;;;:28;;:48;;;;:::i;:::-;46164:18;;;;46099:101;;46107:26;:19;46131:1;46107:23;:26::i;46099:101::-;46059:21;;:141;;;;:::i;:::-;:208;;;;:::i;:::-;:255;;;;:::i;:::-;46019:18;;;;;:26;:305::i;:::-;46003:321;-1:-1:-1;46353:265:165;46485:119;46566:16;46572:10;150:4:33;46566:16:165;:::i;:::-;46515;;;;46485:21;;;;:47;;:29;:47::i;:119::-;46420:42;46445:16;46451:10;150:4:33;46445:16:165;:::i;:::-;46420;;;;;:24;:42::i;:::-;46384:78;;:13;:78;:::i;:::-;:220;;;;:::i;:::-;46353:5;;:13;:265::i;51194:692::-;51408:7;51417:4;51433:11;51447:127;51494:7;51515:12;51541:23;51447:33;:127::i;:::-;51433:141;;51584:11;51598:159;51738:7;:18;;;51598:118;51694:7;:21;;;150:4:33;51688:27:165;;;;:::i;:::-;51598:68;51649:16;51655:10;150:4:33;51649:16:165;:::i;51598:159::-;51584:173;;51778:3;51771;:10;51767:113;;51805:9;51811:3;51805;:9;:::i;:::-;51816:4;51797:24;;;;;;;;51767:113;51860:1;51863:5;51852:17;;;;;;51194:692;;;;;;;;:::o;14610:278:36:-;14750:7;14873:8;:1;14879;14873:5;:8::i;:::-;14832:38;14845:20;14863:1;14845:13;:2;14856:1;14845:10;:13::i;:20::-;14832:1;;14867:2;14832:12;:38::i;:::-;:49;;;;:::i;3750:115:33:-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;35581:330:165:-;35725:7;35805:99;35879:11;35805:48;150:4:33;35823:23:165;150:4:33;35835:10:165;35823:11;:23::i;:::-;:29;;;;:::i;:::-;35805:9;;:17;:48::i;27041:1333::-;27271:7;27280:4;27296:21;27320:150;27360:11;27385:10;27409:7;:16;;;27439:7;:21;;;27320:26;:150::i;:::-;27296:174;;27480:21;27594:41;27616:7;:18;;;27594:13;:21;;:41;;;;:::i;:::-;27560:18;;;;27540:39;;:11;;:19;:39::i;:::-;27504:21;;:75;;;;:::i;:::-;:131;;;;:::i;:::-;27480:155;-1:-1:-1;27645:16:165;27767:13;27741:11;27699:27;27715:11;27699:1;:27;:::i;:::-;27664:7;:20;;;:62;;;;:::i;:::-;:88;;;;:::i;:::-;:116;;;;:::i;:::-;27645:135;-1:-1:-1;27790:26:165;27828:30;:23;27790:26;27828:27;:30::i;:::-;27827:31;;;:::i;:::-;27790:69;;28003:7;:28;;;27964:36;27981:7;:18;;;27964:8;:16;;:36;;;;:::i;:::-;:67;;;;:::i;:::-;27929:18;;;;27902:46;;:18;;:26;:46::i;:::-;27886:62;;:13;:62;:::i;:::-;:145;27869:499;;28245:28;;;;28203:18;;;;28186:36;;:8;;:16;:36::i;:::-;28144:18;;;;28117:46;;:18;;:26;:46::i;:::-;28081:82;;:13;:82;:::i;:::-;:141;;;;:::i;20627:1494::-;20834:7;20966:13;20982:140;21020:7;21041:23;21078:10;21102;20982:24;:140::i;:::-;20966:156;;21566:9;21578:134;21705:6;21578:105;21646:36;21662:7;:19;;;150:4:33;21656:25:165;;;;:::i;21646:36::-;21578:50;:5;21605:22;21578:26;:50::i;:134::-;21566:146;-1:-1:-1;21722:25:165;21792:14;150:4:33;21566:146:165;21792:11;:14::i;:::-;21750:27;21769:7;21775:1;150:4:33;21769:7:165;:::i;:::-;21750:10;;:18;:27::i;:::-;:56;;;;:::i;:::-;21722:84;;21944:147;21982:7;22003:23;22040:10;22064:17;21944:24;:147::i;31640:630::-;31835:7;31854:18;31875:270;31921:23;31958:7;:20;;;31992:39;32012:7;:18;;;31992:11;:19;;:39;;;;:::i;:::-;32045:7;:19;;;32078:7;:18;;;32110:7;:25;;;31875:32;:270::i;:::-;31854:291;;32199:64;32221:11;32234:10;32246:7;:16;;;32199:21;:64::i;:::-;32174:89;;:10;:89;:::i;29705:922::-;29917:18;29937:12;30140:146;30183:7;30204:11;30229:23;30266:10;30140:29;:146::i;:::-;30116:170;;-1:-1:-1;30116:170:165;-1:-1:-1;30116:170:165;30296:58;;30332:1;30324:19;;;;30296:58;30422:95;30491:16;30497:10;150:4:33;30491:16:165;:::i;:::-;30452;;;;30422:21;;;;:47;;:29;:47::i;:95::-;30408:109;;;;:::i;:::-;;-1:-1:-1;30527:17:165;150:4:33;30408:109:165;30527:17;:::i;:::-;;;30563:47;30585:4;30591:7;:18;;;30563:10;:21;;:47;;;;;:::i;:::-;30555:65;;29705:922;;;;;;;:::o;9632:3592:33:-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:33;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:33;10164:34;-1:-1:-1;;10158:1:33;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:33;11255:5;;11254:13;;-1:-1:-1;;11253:50:33;11323:5;;11322:13;;;-1:-1:-1;;11321:50:33;11389:5;-1:-1:-1;;11389:46:33;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:33;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:33;:26;5992:40;;-1:-1:-1;6031:1:33;;5773:3347;-1:-1:-1;5773:3347:33:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:33;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:33;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:33;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:33;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:33;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:33;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:33;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:33;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:33:o;8540:1314:36:-;8733:14;8749:12;8910:9;8922:19;8926:1;8929;8932;8935;8938:2;8922:3;:19::i;:::-;8910:31;-1:-1:-1;8984:15:36;8997:1;8985:6;8989:2;8985:1;:6;:::i;8984:15::-;8980:19;;9081:1;9077;:5;9073:53;;;9106:1;9109:5;9098:17;;;;;;;9073:53;9281:10;9294:23;9311:2;9315:1;9295:5;9299:1;9295;:5;:::i;9294:23::-;9281:36;;150:4:33;9331:2:36;:9;9327:263;;9430:20;9437:12;150:4:33;9447:1:36;9437:9;:12::i;9430:20::-;9425:25;;9327:263;;;9557:22;9564:14;150:4:33;9576:1:36;9564:11;:14::i;9557:22::-;9552:27;;9327:263;9672:12;:2;9681;9672:8;:12::i;:::-;9667:17;;9780:2;9776:1;:6;9772:52;;;9807:6;9811:2;9807:1;:6;:::i;:::-;9798:15;;9772:52;9843:4;9833:14;;8763:1091;;8540:1314;;;;;;;;;;:::o;13772:272::-;13910:7;14029:8;:1;14035;14029:5;:8::i;:::-;13992:34;14003:18;14019:1;14003:11;:2;14012:1;14003:8;:11::i;:18::-;13992:1;;14023:2;13992:10;:34::i;15261:101:33:-;15317:6;15346:1;15342;:5;:13;;15354:1;15342:13;;;-1:-1:-1;15350:1:33;;15261:101;-1:-1:-1;15261:101:33:o;54361:339:165:-;54543:7;54581:112;54621:58;54644:11;54657:10;54669:9;54621:22;:58::i;:::-;54581:14;;:22;:112::i;53809:234::-;53954:7;53980:56;54024:11;53980:35;53998:16;54004:10;150:4:33;53998:16:165;:::i;52553:1008::-;52735:7;52754:10;52767:211;52801:23;52838:7;:20;;;52878:7;:19;;;150:4:33;52872:25:165;;;;:::i;52767:211::-;52754:224;;52988:11;53002:153;53027:118;53069:62;53111:7;:19;;;53093:12;53070:7;:20;;;:35;;;;:::i;53069:62::-;53027:18;;;;;:24;:118::i;53002:153::-;52988:167;;53165:11;53179:342;53468:52;53500:7;:19;;;150:4:33;53494:25:165;;;;:::i;:::-;53468:19;;;;;:25;:52::i;:::-;53179:271;53322:114;53395:7;:19;;;150:4:33;53389:25:165;;;;:::i;:::-;53346:12;53323:7;:20;;;:35;;;;:::i;53322:114::-;53297:139;;:2;:139;:::i;:::-;53239:18;;;;53179:38;;;;:79;;:59;:79::i;:342::-;53165:356;-1:-1:-1;53538:16:165;:3;53165:356;53538:11;:16::i;36490:357::-;36671:7;36709:131;36769:57;36791:11;36804:10;36816:9;36769:21;:57::i;:::-;36709:34;:14;36732:10;36709:22;:34::i;14987:101:33:-;15043:6;15072:1;15068;:5;:13;;15080:1;15068:13;;24063:892:165;24265:7;;24322:30;:23;24265:7;24322:27;:30::i;:::-;24321:31;;;:::i;:::-;24284:69;;24363:16;24382:227;24584:7;:18;;;24604:4;24543:7;:28;;;24480:48;24509:7;:18;;;24480:7;:20;;;:28;;:48;;;;:::i;:::-;24446:18;;;;24419:46;;:18;;:26;:46::i;:::-;24383:21;;:82;;;;:::i;:::-;:145;;;;:::i;:::-;:188;;;;:::i;:::-;24382:201;:227;:201;:227::i;:::-;24363:246;-1:-1:-1;24630:293:165;24858:55;150:4:33;24883:23:165;150:4:33;24895:10:165;24883:11;:23::i;:::-;:29;;;;:::i;24858:55::-;150:4:33;24706:111:165;24783:16;24789:10;150:4:33;24783:16:165;:::i;:::-;24736;;;;24706:21;;;;:47;;:29;:47::i;:111::-;24660:27;150:4:33;24672:14:165;24660:11;:27::i;:::-;:157;;;;:::i;:::-;:179;;;;:::i;:::-;:253;;;;:::i;33708:1464::-;33913:18;33933:4;34002:19;34024:39;34044:7;:18;;;34024:11;:19;;:39;;;;:::i;:::-;34002:61;-1:-1:-1;34073:13:165;34089:94;34136:37;34002:61;34136:23;:37;:::i;:::-;34089:25;;;;;:33;:94::i;:::-;34073:110;;34193:10;34206:211;34240:23;34277:7;:20;;;34317:7;:19;;;150:4:33;34311:25:165;;;;:::i;:::-;34350:7;:18;;;34382:7;:25;;;34206:20;:211::i;:::-;34193:224;;34440:43;34452:30;34462:7;:19;;;34452:5;:9;;:30;;;;:::i;34440:43::-;34427:56;;34671:11;34685:122;34728:30;34738:7;:19;;;34728:5;:9;;:30;;;;:::i;:::-;34772:25;;;;34685:18;;;;;:122;:29;:122::i;:::-;34671:136;;34826:3;34821:2;:8;34817:56;;;34853:1;34856:5;34845:17;;;;;;;;;;34817:56;34895:110;34927:68;34942:52;34974:7;:19;;;150:4:33;34968:25:165;;;;:::i;:::-;34942:19;;;;;:25;:52::i;:::-;34928:8;34933:3;34928:2;:8;:::i;34895:110::-;34882:123;-1:-1:-1;35074:55:165;150:4:33;35099:23:165;150:4:33;35111:10:165;35099:11;:23::i;:::-;:29;;;;:::i;:::-;35074:16;;;;;:24;:55::i;:::-;35060:69;;;;:::i;:::-;;35160:4;;-1:-1:-1;33708:1464:165;-1:-1:-1;;;;;;;;;33708:1464:165:o;14:385:167:-;100:6;108;116;124;177:3;165:9;156:7;152:23;148:33;145:53;;;194:1;191;184:12;145:53;-1:-1:-1;;217:23:167;;;287:2;272:18;;259:32;;-1:-1:-1;338:2:167;323:18;;310:32;;389:2;374:18;361:32;;-1:-1:-1;14:385:167;-1:-1:-1;14:385:167:o;586:454::-;681:6;689;697;705;713;766:3;754:9;745:7;741:23;737:33;734:53;;;783:1;780;773:12;734:53;-1:-1:-1;;806:23:167;;;876:2;861:18;;848:32;;-1:-1:-1;927:2:167;912:18;;899:32;;978:2;963:18;;950:32;;-1:-1:-1;1029:3:167;1014:19;1001:33;;-1:-1:-1;586:454:167;-1:-1:-1;586:454:167:o;1045:347::-;1112:2;1106:9;1154:6;1142:19;;1191:18;1176:34;;1212:22;;;1173:62;1170:185;;;1277:10;1272:3;1268:20;1265:1;1258:31;1312:4;1309:1;1302:15;1340:4;1337:1;1330:15;1170:185;1371:2;1364:22;1045:347;:::o;1397:949::-;1462:5;1510:6;1498:9;1493:3;1489:19;1485:32;1482:52;;;1530:1;1527;1520:12;1482:52;1552:17;;:::i;:::-;1543:26;;1605:9;1592:23;1585:5;1578:38;1676:2;1665:9;1661:18;1648:32;1643:2;1636:5;1632:14;1625:56;1741:2;1730:9;1726:18;1713:32;1708:2;1701:5;1697:14;1690:56;1806:2;1795:9;1791:18;1778:32;1773:2;1766:5;1762:14;1755:56;1872:3;1861:9;1857:19;1844:33;1838:3;1831:5;1827:15;1820:58;1939:3;1928:9;1924:19;1911:33;1905:3;1898:5;1894:15;1887:58;2006:3;1995:9;1991:19;1978:33;1972:3;1965:5;1961:15;1954:58;2073:3;2062:9;2058:19;2045:33;2039:3;2032:5;2028:15;2021:58;2098:3;2161:2;2150:9;2146:18;2133:32;2128:2;2121:5;2117:14;2110:56;;2185:3;2248:2;2237:9;2233:18;2220:32;2215:2;2208:5;2204:14;2197:56;;2272:3;2335:2;2324:9;2320:18;2307:32;2302:2;2295:5;2291:14;2284:56;;1397:949;;;;:::o;2351:250::-;2446:6;2499:3;2487:9;2478:7;2474:23;2470:33;2467:53;;;2516:1;2513;2506:12;2467:53;2539:56;2587:7;2576:9;2539:56;:::i;2606:523::-;2710:6;2718;2726;2734;2742;2750;2803:3;2791:9;2782:7;2778:23;2774:33;2771:53;;;2820:1;2817;2810:12;2771:53;-1:-1:-1;;2843:23:167;;;2913:2;2898:18;;2885:32;;-1:-1:-1;2964:2:167;2949:18;;2936:32;;3015:2;3000:18;;2987:32;;-1:-1:-1;3066:3:167;3051:19;;3038:33;;-1:-1:-1;3118:3:167;3103:19;3090:33;;-1:-1:-1;2606:523:167;-1:-1:-1;2606:523:167:o;3134:685::-;3244:6;3252;3260;3268;3276;3284;3292;3345:3;3333:9;3324:7;3320:23;3316:33;3313:53;;;3362:1;3359;3352:12;3313:53;3398:9;3385:23;3375:33;;3455:2;3444:9;3440:18;3427:32;3417:42;;3506:2;3495:9;3491:18;3478:32;3468:42;;3557:2;3546:9;3542:18;3529:32;3519:42;;3608:3;3597:9;3593:19;3580:33;3570:43;;3660:3;3649:9;3645:19;3632:33;3622:43;;3715:3;3704:9;3700:19;3687:33;3763:5;3756:13;3749:21;3742:5;3739:32;3729:60;;3785:1;3782;3775:12;3729:60;3808:5;3798:15;;;3134:685;;;;;;;;;;:::o;4290:385::-;4400:6;4408;4416;4469:3;4457:9;4448:7;4444:23;4440:33;4437:53;;;4486:1;4483;4476:12;4437:53;4509:56;4557:7;4546:9;4509:56;:::i;:::-;4499:66;4612:3;4597:19;;4584:33;;-1:-1:-1;4664:3:167;4649:19;;;4636:33;;4290:385;-1:-1:-1;;;4290:385:167:o;4680:592::-;4793:6;4801;4809;4817;4825;4833;4841;4894:3;4882:9;4873:7;4869:23;4865:33;4862:53;;;4911:1;4908;4901:12;4862:53;-1:-1:-1;;4934:23:167;;;5004:2;4989:18;;4976:32;;-1:-1:-1;5055:2:167;5040:18;;5027:32;;5106:2;5091:18;;5078:32;;-1:-1:-1;5157:3:167;5142:19;;5129:33;;-1:-1:-1;5209:3:167;5194:19;;5181:33;;-1:-1:-1;5261:3:167;5246:19;5233:33;;-1:-1:-1;4680:592:167;-1:-1:-1;4680:592:167:o;6245:127::-;6306:10;6301:3;6297:20;6294:1;6287:31;6337:4;6334:1;6327:15;6361:4;6358:1;6351:15;6377:128;6444:9;;;6465:11;;;6462:37;;;6479:18;;:::i;6510:200::-;6576:9;;;6549:4;6604:9;;6632:10;;6644:12;;;6628:29;6667:12;;;6659:21;;6625:56;6622:82;;;6684:18;;:::i;:::-;6622:82;6510:200;;;;:::o;6715:136::-;6750:3;-1:-1:-1;;;6771:22:167;;6768:48;;6796:18;;:::i;:::-;-1:-1:-1;6836:1:167;6832:13;;6715:136::o;6856:125::-;6921:9;;;6942:10;;;6939:36;;;6955:18;;:::i;6986:216::-;7050:9;;;7078:11;;;7025:3;7108:9;;7136:10;;7132:19;;7161:10;;7153:19;;7129:44;7126:70;;;7176:18;;:::i;:::-;7126:70;;6986:216;;;;:::o;7625:135::-;7664:3;7685:17;;;7682:43;;7705:18;;:::i;:::-;-1:-1:-1;7752:1:167;7741:13;;7625:135::o;8735:290::-;8774:1;8800;8790:132;;8844:10;8839:3;8835:20;8832:1;8825:31;8879:4;8876:1;8869:15;8907:4;8904:1;8897:15;8790:132;-1:-1:-1;;;8938:18:167;;-1:-1:-1;;8958:13:167;;8934:38;8931:64;;;8975:18;;:::i;:::-;-1:-1:-1;9009:10:167;;8735:290::o;9030:168::-;9103:9;;;9134;;9151:15;;;9145:22;;9131:37;9121:71;;9172:18;;:::i",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "calculateAbsoluteMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256)": "a2b9a7b7",
    "calculateCloseLong(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "94169d49",
    "calculateCloseShort(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": "f87845f2",
    "calculateInitialBondReserves(uint256,uint256,uint256,uint256,uint256)": "82a4d306",
    "calculateMaxLong((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "a40a6be8",
    "calculateMaxShort((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),int256,uint256)": "86ad02af",
    "calculateNegativeInterestOnClose(uint256,uint256,uint256,uint256,uint256,uint256,bool)": "7ef99f87",
    "calculateOpenLong(uint256,uint256,uint256,uint256,uint256,uint256)": "5e6d9d36",
    "calculateOpenShort(uint256,uint256,uint256,uint256,uint256,uint256)": "6ceebe1d",
    "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "37043a53",
    "calculateShortInterest(uint256,uint256,uint256,uint256)": "fdc30d61",
    "calculateShortProceeds(uint256,uint256,uint256,uint256,uint256,uint256)": "de31b2ab",
    "calculateSpotAPR(uint256,uint256,uint256,uint256,uint256)": "2810a036",
    "calculateSpotPrice(uint256,uint256,uint256,uint256)": "2471caed"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"}],\"name\":\"calculateAbsoluteMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateCloseShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateInitialBondReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointLongExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceFee\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveUtils.MaxTradeParams\",\"name\":\"_params\",\"type\":\"tuple\"},{\"internalType\":\"int256\",\"name\":\"_checkpointExposure\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_maxIterations\",\"type\":\"uint256\"}],\"name\":\"calculateMaxShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareCurveDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalGovernanceFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isLong\",\"type\":\"bool\"}],\"name\":\"calculateNegativeInterestOnClose\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageTimeRemaining\",\"type\":\"uint256\"}],\"internalType\":\"struct HyperdriveMath.PresentValueParams\",\"name\":\"_params\",\"type\":\"tuple\"}],\"name\":\"calculatePresentValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateShortInterest\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_flatFee\",\"type\":\"uint256\"}],\"name\":\"calculateShortProceeds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_effectiveShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotAPR\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_timeStretch\",\"type\":\"uint256\"}],\"name\":\"calculateSpotPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdriveMath.sol\":\"MockHyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/test/MockHyperdriveMath.sol\":{\"keccak256\":\"0xcaec0bb6c5f175f5337d5d5c893eb97f3a5c68b15e72143008487c9f80df7aef\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://27a61ee2c66b8c35bf888b048b150e25810dac44597654331aaa1dd5c36c3283\",\"dweb:/ipfs/QmR5Foi1kCiB7dRty2doFRdyqEehdnNxCQ1JbFDTtmKgJW\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x5861db03144fda3f71c21354d8a639396bacb85acaca8804f6dbaf600428cf9a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c01ebbc32504f67bb4eaf65ef613431a0afc05530dbbc9a0489c342f722904b7\",\"dweb:/ipfs/QmZEVPaEqhD4p13yzfrKf1K5MFrvNaeF9pn7hSZxs9YfmQ\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [
            {
              "internalType": "struct HyperdriveUtils.MaxTradeParams",
              "name": "_params",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "shareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "int256",
                  "name": "shareAdjustment",
                  "type": "int256"
                },
                {
                  "internalType": "uint256",
                  "name": "bondReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longExposure",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "curveFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceFee",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "uint256",
              "name": "_effectiveShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_spotPrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateAbsoluteMaxLong",
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
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_effectiveShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_normalizedTimeRemaining",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_initialSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateCloseLong",
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
            },
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
              "name": "_effectiveShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_normalizedTimeRemaining",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_initialSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateCloseShort",
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
            },
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
              "name": "_effectiveShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_positionDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_timeStretch",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateInitialBondReserves",
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
              "internalType": "struct HyperdriveUtils.MaxTradeParams",
              "name": "_params",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "shareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "int256",
                  "name": "shareAdjustment",
                  "type": "int256"
                },
                {
                  "internalType": "uint256",
                  "name": "bondReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longExposure",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "curveFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceFee",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "int256",
              "name": "_checkpointLongExposure",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "_maxIterations",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateMaxLong",
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
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct HyperdriveUtils.MaxTradeParams",
              "name": "_params",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "shareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "int256",
                  "name": "shareAdjustment",
                  "type": "int256"
                },
                {
                  "internalType": "uint256",
                  "name": "bondReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longExposure",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "curveFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceFee",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "int256",
              "name": "_checkpointExposure",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "_maxIterations",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateMaxShort",
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
              "name": "_shareProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_shareReservesDelta",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_shareCurveDelta",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_totalGovernanceFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_openSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_closeSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "_isLong",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateNegativeInterestOnClose",
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
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            },
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
              "name": "_effectiveShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_initialSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateOpenLong",
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
              "name": "_effectiveShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_initialSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateOpenShort",
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
              "internalType": "struct HyperdriveMath.PresentValueParams",
              "name": "_params",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "shareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "int256",
                  "name": "shareAdjustment",
                  "type": "int256"
                },
                {
                  "internalType": "uint256",
                  "name": "bondReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longAverageTimeRemaining",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortAverageTimeRemaining",
                  "type": "uint256"
                }
              ]
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculatePresentValue",
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
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_openSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_closeSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateShortInterest",
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
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_shareAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_openSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_closeSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_flatFee",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateShortProceeds",
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
              "name": "_effectiveShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_positionDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_timeStretch",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateSpotAPR",
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
              "name": "_shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_timeStretch",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateSpotPrice",
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
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/test/MockHyperdriveMath.sol": "MockHyperdriveMath"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed",
        "urls": [
          "bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6",
          "dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f",
        "urls": [
          "bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe",
          "dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockHyperdriveMath.sol": {
        "keccak256": "0xcaec0bb6c5f175f5337d5d5c893eb97f3a5c68b15e72143008487c9f80df7aef",
        "urls": [
          "bzz-raw://27a61ee2c66b8c35bf888b048b150e25810dac44597654331aaa1dd5c36c3283",
          "dweb:/ipfs/QmR5Foi1kCiB7dRty2doFRdyqEehdnNxCQ1JbFDTtmKgJW"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      },
      "test/utils/HyperdriveUtils.sol": {
        "keccak256": "0x5861db03144fda3f71c21354d8a639396bacb85acaca8804f6dbaf600428cf9a",
        "urls": [
          "bzz-raw://c01ebbc32504f67bb4eaf65ef613431a0afc05530dbbc9a0489c342f722904b7",
          "dweb:/ipfs/QmZEVPaEqhD4p13yzfrKf1K5MFrvNaeF9pn7hSZxs9YfmQ"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockHyperdriveMath.sol",
    "id": 14965,
    "exportedSymbols": {
      "HyperdriveMath": [
        9918
      ],
      "HyperdriveUtils": [
        124790
      ],
      "MockHyperdriveMath": [
        14964
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:7867:52",
    "nodes": [
      {
        "id": 14488,
        "nodeType": "PragmaDirective",
        "src": "39:23:52",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 14490,
        "nodeType": "ImportDirective",
        "src": "64:76:52",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "contracts/src/libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14965,
        "sourceUnit": 9919,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14489,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9918,
              "src": "73:14:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14492,
        "nodeType": "ImportDirective",
        "src": "141:65:52",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveUtils.sol",
        "file": "test/utils/HyperdriveUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14965,
        "sourceUnit": 124791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14491,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 124790,
              "src": "150:15:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14964,
        "nodeType": "ContractDefinition",
        "src": "208:7697:52",
        "nodes": [
          {
            "id": 14521,
            "nodeType": "FunctionDefinition",
            "src": "242:488:52",
            "nodes": [],
            "body": {
              "id": 14520,
              "nodeType": "Block",
              "src": "479:251:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14508
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14508,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "497:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14520,
                      "src": "489:14:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14507,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "489:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14517,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14511,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14494,
                        "src": "551:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14512,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14496,
                        "src": "588:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14513,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14498,
                        "src": "615:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14514,
                        "name": "_positionDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14500,
                        "src": "647:17:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14515,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14502,
                        "src": "678:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14509,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "506:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "521:16:52",
                      "memberName": "calculateSpotAPR",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9151,
                      "src": "506:31:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14516,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "506:194:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "489:211:52"
                },
                {
                  "expression": {
                    "id": 14518,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14508,
                    "src": "717:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14506,
                  "id": 14519,
                  "nodeType": "Return",
                  "src": "710:13:52"
                }
              ]
            },
            "functionSelector": "2810a036",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotAPR",
            "nameLocation": "251:16:52",
            "parameters": {
              "id": 14503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14494,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "285:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14521,
                  "src": "277:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14493,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14496,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "326:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14521,
                  "src": "318:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14498,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "357:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14521,
                  "src": "349:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14497,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14500,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "393:17:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14521,
                  "src": "385:25:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14502,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "428:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14521,
                  "src": "420:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14501,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "267:179:52"
            },
            "returnParameters": {
              "id": 14506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14505,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14521,
                  "src": "470:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14504,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "469:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14550,
            "nodeType": "FunctionDefinition",
            "src": "736:494:52",
            "nodes": [],
            "body": {
              "id": 14549,
              "nodeType": "Block",
              "src": "976:254:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14537
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14537,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "994:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14549,
                      "src": "986:14:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14536,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "986:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14546,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14540,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14523,
                        "src": "1060:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14541,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14525,
                        "src": "1097:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14542,
                        "name": "_apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14527,
                        "src": "1129:4:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14543,
                        "name": "_positionDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14529,
                        "src": "1147:17:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14544,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14531,
                        "src": "1178:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14538,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "1003:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14539,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1018:28:52",
                      "memberName": "calculateInitialBondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9195,
                      "src": "1003:43:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1003:197:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "986:214:52"
                },
                {
                  "expression": {
                    "id": 14547,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14537,
                    "src": "1217:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14535,
                  "id": 14548,
                  "nodeType": "Return",
                  "src": "1210:13:52"
                }
              ]
            },
            "functionSelector": "82a4d306",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateInitialBondReserves",
            "nameLocation": "745:28:52",
            "parameters": {
              "id": 14532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14523,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "791:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14550,
                  "src": "783:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14522,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "783:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14525,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "832:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14550,
                  "src": "824:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14524,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "824:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14527,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "868:4:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14550,
                  "src": "860:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "860:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14529,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "890:17:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14550,
                  "src": "882:25:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14528,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "882:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14531,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "925:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14550,
                  "src": "917:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14530,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "773:170:52"
            },
            "returnParameters": {
              "id": 14535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14534,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14550,
                  "src": "967:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14533,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "966:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14582,
            "nodeType": "FunctionDefinition",
            "src": "1236:528:52",
            "nodes": [],
            "body": {
              "id": 14581,
              "nodeType": "Block",
              "src": "1495:269:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14568
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14568,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1513:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14581,
                      "src": "1505:14:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14567,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1505:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14578,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14571,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14552,
                        "src": "1568:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14572,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14554,
                        "src": "1605:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14573,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14556,
                        "src": "1632:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14574,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14558,
                        "src": "1655:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14575,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14560,
                        "src": "1681:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14576,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14562,
                        "src": "1706:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14569,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "1522:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14570,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1537:17:52",
                      "memberName": "calculateOpenLong",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9272,
                      "src": "1522:32:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1522:212:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1505:229:52"
                },
                {
                  "expression": {
                    "id": 14579,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14568,
                    "src": "1751:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14566,
                  "id": 14580,
                  "nodeType": "Return",
                  "src": "1744:13:52"
                }
              ]
            },
            "functionSelector": "5e6d9d36",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "1245:17:52",
            "parameters": {
              "id": 14563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14552,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "1280:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14582,
                  "src": "1272:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14551,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1272:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14554,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "1321:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14582,
                  "src": "1313:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14553,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1313:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14556,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "1352:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14582,
                  "src": "1344:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1344:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14558,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "1379:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14582,
                  "src": "1371:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1371:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14560,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "1409:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14582,
                  "src": "1401:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14559,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1401:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14562,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "1438:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14582,
                  "src": "1430:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14561,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1430:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1262:200:52"
            },
            "returnParameters": {
              "id": 14566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14565,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14582,
                  "src": "1486:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1486:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1485:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14628,
            "nodeType": "FunctionDefinition",
            "src": "1770:731:52",
            "nodes": [],
            "body": {
              "id": 14627,
              "nodeType": "Block",
              "src": "2090:411:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14606,
                    14608,
                    14610
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14606,
                      "mutability": "mutable",
                      "name": "result1",
                      "nameLocation": "2109:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14627,
                      "src": "2101:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14605,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2101:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14608,
                      "mutability": "mutable",
                      "name": "result2",
                      "nameLocation": "2126:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14627,
                      "src": "2118:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14607,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2118:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14610,
                      "mutability": "mutable",
                      "name": "result3",
                      "nameLocation": "2143:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14627,
                      "src": "2135:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14609,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2135:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14621,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14613,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14584,
                        "src": "2218:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14614,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14586,
                        "src": "2259:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14615,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14588,
                        "src": "2290:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14616,
                        "name": "_normalizedTimeRemaining",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14590,
                        "src": "2317:24:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14617,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14592,
                        "src": "2359:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14618,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14594,
                        "src": "2389:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14619,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14596,
                        "src": "2418:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14611,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "2154:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14612,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2182:18:52",
                      "memberName": "calculateCloseLong",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9337,
                      "src": "2154:46:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)"
                      }
                    },
                    "id": 14620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2154:296:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2100:350:52"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 14622,
                        "name": "result1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14606,
                        "src": "2468:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14623,
                        "name": "result2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14608,
                        "src": "2477:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14624,
                        "name": "result3",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14610,
                        "src": "2486:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14625,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2467:27:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14604,
                  "id": 14626,
                  "nodeType": "Return",
                  "src": "2460:34:52"
                }
              ]
            },
            "functionSelector": "94169d49",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseLong",
            "nameLocation": "1779:18:52",
            "parameters": {
              "id": 14597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14584,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "1815:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "1807:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1807:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14586,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "1856:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "1848:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14585,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1848:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14588,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "1887:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "1879:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1879:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14590,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "1914:24:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "1906:32:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14589,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1906:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14592,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "1956:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "1948:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14591,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1948:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14594,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "1986:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "1978:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1978:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14596,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "2015:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "2007:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2007:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1797:242:52"
            },
            "returnParameters": {
              "id": 14604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14599,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "2063:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14598,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2063:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14601,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "2072:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14600,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2072:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14603,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14628,
                  "src": "2081:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2081:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2062:27:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14660,
            "nodeType": "FunctionDefinition",
            "src": "2507:530:52",
            "nodes": [],
            "body": {
              "id": 14659,
              "nodeType": "Block",
              "src": "2767:270:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14646
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14646,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "2785:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14659,
                      "src": "2777:14:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14645,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2777:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14656,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14649,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14630,
                        "src": "2841:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14650,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14632,
                        "src": "2878:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14651,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14634,
                        "src": "2905:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14652,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14636,
                        "src": "2928:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14653,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14638,
                        "src": "2954:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14654,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14640,
                        "src": "2979:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14647,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "2794:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2809:18:52",
                      "memberName": "calculateOpenShort",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9368,
                      "src": "2794:33:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2794:213:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2777:230:52"
                },
                {
                  "expression": {
                    "id": 14657,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14646,
                    "src": "3024:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14644,
                  "id": 14658,
                  "nodeType": "Return",
                  "src": "3017:13:52"
                }
              ]
            },
            "functionSelector": "6ceebe1d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenShort",
            "nameLocation": "2516:18:52",
            "parameters": {
              "id": 14641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14630,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "2552:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14660,
                  "src": "2544:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14629,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2544:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14632,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "2593:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14660,
                  "src": "2585:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2585:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14634,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "2624:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14660,
                  "src": "2616:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2616:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14636,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "2651:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14660,
                  "src": "2643:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14635,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2643:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14638,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "2681:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14660,
                  "src": "2673:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14637,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2673:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14640,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "2710:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14660,
                  "src": "2702:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2702:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2534:200:52"
            },
            "returnParameters": {
              "id": 14644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14643,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14660,
                  "src": "2758:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14642,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2758:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2757:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14706,
            "nodeType": "FunctionDefinition",
            "src": "3043:735:52",
            "nodes": [],
            "body": {
              "id": 14705,
              "nodeType": "Block",
              "src": "3365:413:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14684,
                    14686,
                    14688
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14684,
                      "mutability": "mutable",
                      "name": "result1",
                      "nameLocation": "3384:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14705,
                      "src": "3376:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14683,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3376:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14686,
                      "mutability": "mutable",
                      "name": "result2",
                      "nameLocation": "3401:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14705,
                      "src": "3393:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14685,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3393:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14688,
                      "mutability": "mutable",
                      "name": "result3",
                      "nameLocation": "3418:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14705,
                      "src": "3410:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14687,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3410:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14699,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14691,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14662,
                        "src": "3494:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14692,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14664,
                        "src": "3535:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14693,
                        "name": "_amountOut",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14666,
                        "src": "3566:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14694,
                        "name": "_normalizedTimeRemaining",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14668,
                        "src": "3594:24:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14695,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14670,
                        "src": "3636:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14696,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14672,
                        "src": "3666:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14697,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14674,
                        "src": "3695:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14689,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "3429:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14690,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3457:19:52",
                      "memberName": "calculateCloseShort",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9433,
                      "src": "3429:47:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)"
                      }
                    },
                    "id": 14698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3429:298:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3375:352:52"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 14700,
                        "name": "result1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14684,
                        "src": "3745:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14701,
                        "name": "result2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14686,
                        "src": "3754:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14702,
                        "name": "result3",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14688,
                        "src": "3763:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14703,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3744:27:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14682,
                  "id": 14704,
                  "nodeType": "Return",
                  "src": "3737:34:52"
                }
              ]
            },
            "functionSelector": "f87845f2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShort",
            "nameLocation": "3052:19:52",
            "parameters": {
              "id": 14675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14662,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "3089:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3081:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14661,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3081:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14664,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "3130:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3122:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3122:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14666,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "3161:10:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3153:18:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14665,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3153:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14668,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "3189:24:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3181:32:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14667,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3181:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14670,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "3231:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3223:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3223:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14672,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "3261:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3253:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14671,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3253:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14674,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "3290:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3282:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3282:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3071:243:52"
            },
            "returnParameters": {
              "id": 14682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14677,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3338:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3338:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14679,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3347:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14678,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3347:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14681,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14706,
                  "src": "3356:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3356:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3337:27:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14717,
            "nodeType": "StructDefinition",
            "src": "3784:217:52",
            "nodes": [],
            "canonicalName": "MockHyperdriveMath.NegativeInterestOnCloseOutput",
            "members": [
              {
                "constant": false,
                "id": 14708,
                "mutability": "mutable",
                "name": "shareProceeds",
                "nameLocation": "3839:13:52",
                "nodeType": "VariableDeclaration",
                "scope": 14717,
                "src": "3831:21:52",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 14707,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "3831:7:52",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 14710,
                "mutability": "mutable",
                "name": "shareReservesDelta",
                "nameLocation": "3870:18:52",
                "nodeType": "VariableDeclaration",
                "scope": 14717,
                "src": "3862:26:52",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 14709,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "3862:7:52",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 14712,
                "mutability": "mutable",
                "name": "shareCurveDelta",
                "nameLocation": "3906:15:52",
                "nodeType": "VariableDeclaration",
                "scope": 14717,
                "src": "3898:23:52",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 14711,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "3898:7:52",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 14714,
                "mutability": "mutable",
                "name": "shareAdjustmentDelta",
                "nameLocation": "3938:20:52",
                "nodeType": "VariableDeclaration",
                "scope": 14717,
                "src": "3931:27:52",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 14713,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "3931:6:52",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 14716,
                "mutability": "mutable",
                "name": "totalGovernanceFee",
                "nameLocation": "3976:18:52",
                "nodeType": "VariableDeclaration",
                "scope": 14717,
                "src": "3968:26:52",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 14715,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "3968:7:52",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "NegativeInterestOnCloseOutput",
            "nameLocation": "3791:29:52",
            "scope": 14964,
            "visibility": "public"
          },
          {
            "id": 14785,
            "nodeType": "FunctionDefinition",
            "src": "4007:1093:52",
            "nodes": [],
            "body": {
              "id": 14784,
              "nodeType": "Block",
              "src": "4351:749:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14746
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14746,
                      "mutability": "mutable",
                      "name": "output",
                      "nameLocation": "4398:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14784,
                      "src": "4361:43:52",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                        "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput"
                      },
                      "typeName": {
                        "id": 14745,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 14744,
                          "name": "NegativeInterestOnCloseOutput",
                          "nameLocations": [
                            "4361:29:52"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 14717,
                          "src": "4361:29:52"
                        },
                        "referencedDeclaration": 14717,
                        "src": "4361:29:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_storage_ptr",
                          "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14747,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4361:43:52"
                },
                {
                  "expression": {
                    "id": 14770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "expression": {
                            "id": 14748,
                            "name": "output",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14746,
                            "src": "4428:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                              "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                            }
                          },
                          "id": 14750,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "4435:13:52",
                          "memberName": "shareProceeds",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14708,
                          "src": "4428:20:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 14751,
                            "name": "output",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14746,
                            "src": "4462:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                              "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                            }
                          },
                          "id": 14752,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "4469:18:52",
                          "memberName": "shareReservesDelta",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14710,
                          "src": "4462:25:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 14753,
                            "name": "output",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14746,
                            "src": "4501:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                              "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                            }
                          },
                          "id": 14754,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "4508:15:52",
                          "memberName": "shareCurveDelta",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14712,
                          "src": "4501:22:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 14755,
                            "name": "output",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14746,
                            "src": "4537:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                              "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                            }
                          },
                          "id": 14756,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "4544:20:52",
                          "memberName": "shareAdjustmentDelta",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14714,
                          "src": "4537:27:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "expression": {
                            "id": 14757,
                            "name": "output",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14746,
                            "src": "4578:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                              "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                            }
                          },
                          "id": 14758,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "4585:18:52",
                          "memberName": "totalGovernanceFee",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14716,
                          "src": "4578:25:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 14759,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4414:199:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 14762,
                          "name": "_shareProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14719,
                          "src": "4677:14:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14763,
                          "name": "_shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14721,
                          "src": "4705:19:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14764,
                          "name": "_shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14723,
                          "src": "4738:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14765,
                          "name": "_totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14725,
                          "src": "4768:19:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14766,
                          "name": "_openSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14727,
                          "src": "4801:15:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14767,
                          "name": "_closeSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14729,
                          "src": "4830:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14768,
                          "name": "_isLong",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14731,
                          "src": "4860:7:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "expression": {
                          "id": 14760,
                          "name": "HyperdriveMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9918,
                          "src": "4616:14:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                            "typeString": "type(library HyperdriveMath)"
                          }
                        },
                        "id": 14761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4631:32:52",
                        "memberName": "calculateNegativeInterestOnClose",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9537,
                        "src": "4616:47:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)"
                        }
                      },
                      "id": 14769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4616:261:52",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                      }
                    },
                    "src": "4414:463:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 14771,
                  "nodeType": "ExpressionStatement",
                  "src": "4414:463:52"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "expression": {
                          "id": 14772,
                          "name": "output",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14746,
                          "src": "4908:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                            "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                          }
                        },
                        "id": 14773,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4915:13:52",
                        "memberName": "shareProceeds",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14708,
                        "src": "4908:20:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 14774,
                          "name": "output",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14746,
                          "src": "4942:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                            "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                          }
                        },
                        "id": 14775,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4949:18:52",
                        "memberName": "shareReservesDelta",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14710,
                        "src": "4942:25:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 14776,
                          "name": "output",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14746,
                          "src": "4981:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                            "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                          }
                        },
                        "id": 14777,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4988:15:52",
                        "memberName": "shareCurveDelta",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14712,
                        "src": "4981:22:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 14778,
                          "name": "output",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14746,
                          "src": "5017:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                            "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                          }
                        },
                        "id": 14779,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5024:20:52",
                        "memberName": "shareAdjustmentDelta",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14714,
                        "src": "5017:27:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "expression": {
                          "id": 14780,
                          "name": "output",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14746,
                          "src": "5058:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_NegativeInterestOnCloseOutput_$14717_memory_ptr",
                            "typeString": "struct MockHyperdriveMath.NegativeInterestOnCloseOutput memory"
                          }
                        },
                        "id": 14781,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5065:18:52",
                        "memberName": "totalGovernanceFee",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14716,
                        "src": "5058:25:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14782,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4894:199:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14743,
                  "id": 14783,
                  "nodeType": "Return",
                  "src": "4887:206:52"
                }
              ]
            },
            "functionSelector": "7ef99f87",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateNegativeInterestOnClose",
            "nameLocation": "4016:32:52",
            "parameters": {
              "id": 14732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14719,
                  "mutability": "mutable",
                  "name": "_shareProceeds",
                  "nameLocation": "4066:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4058:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14718,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4058:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14721,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "4098:19:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4090:27:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4090:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14723,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "4135:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4127:24:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14722,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4127:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14725,
                  "mutability": "mutable",
                  "name": "_totalGovernanceFee",
                  "nameLocation": "4169:19:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4161:27:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14724,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4161:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14727,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "4206:15:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4198:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14726,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4198:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14729,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "4239:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4231:24:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14728,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4231:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14731,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "4270:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4265:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14730,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4265:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4048:235:52"
            },
            "returnParameters": {
              "id": 14743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14734,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4307:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14733,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4307:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14736,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4316:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14735,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4316:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14738,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4325:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4325:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14740,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4334:6:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14739,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4334:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14742,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14785,
                  "src": "4342:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4342:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4306:44:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14815,
            "nodeType": "FunctionDefinition",
            "src": "5106:417:52",
            "nodes": [],
            "body": {
              "id": 14814,
              "nodeType": "Block",
              "src": "5306:217:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14800,
                    14802
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14800,
                      "mutability": "mutable",
                      "name": "result1",
                      "nameLocation": "5325:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14814,
                      "src": "5317:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14799,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5317:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14802,
                      "mutability": "mutable",
                      "name": "result2",
                      "nameLocation": "5342:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14814,
                      "src": "5334:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14801,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5334:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14809,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14805,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14788,
                        "src": "5399:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                          "typeString": "struct HyperdriveUtils.MaxTradeParams memory"
                        }
                      },
                      {
                        "id": 14806,
                        "name": "_checkpointLongExposure",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14790,
                        "src": "5420:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 14807,
                        "name": "_maxIterations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14792,
                        "src": "5457:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                          "typeString": "struct HyperdriveUtils.MaxTradeParams memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14803,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124790,
                        "src": "5353:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$124790_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 14804,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5369:16:52",
                      "memberName": "calculateMaxLong",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 122703,
                      "src": "5353:32:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_MaxTradeParams_$122510_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256,uint256)"
                      }
                    },
                    "id": 14808,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5353:128:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5316:165:52"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 14810,
                        "name": "result1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14800,
                        "src": "5499:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14811,
                        "name": "result2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14802,
                        "src": "5508:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14812,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5498:18:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14798,
                  "id": 14813,
                  "nodeType": "Return",
                  "src": "5491:25:52"
                }
              ]
            },
            "functionSelector": "a40a6be8",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxLong",
            "nameLocation": "5115:16:52",
            "parameters": {
              "id": 14793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14788,
                  "mutability": "mutable",
                  "name": "_params",
                  "nameLocation": "5179:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14815,
                  "src": "5141:45:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                    "typeString": "struct HyperdriveUtils.MaxTradeParams"
                  },
                  "typeName": {
                    "id": 14787,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14786,
                      "name": "HyperdriveUtils.MaxTradeParams",
                      "nameLocations": [
                        "5141:15:52",
                        "5157:14:52"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 122510,
                      "src": "5141:30:52"
                    },
                    "referencedDeclaration": 122510,
                    "src": "5141:30:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MaxTradeParams_$122510_storage_ptr",
                      "typeString": "struct HyperdriveUtils.MaxTradeParams"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14790,
                  "mutability": "mutable",
                  "name": "_checkpointLongExposure",
                  "nameLocation": "5203:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14815,
                  "src": "5196:30:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14789,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5196:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14792,
                  "mutability": "mutable",
                  "name": "_maxIterations",
                  "nameLocation": "5244:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14815,
                  "src": "5236:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5236:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5131:133:52"
            },
            "returnParameters": {
              "id": 14798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14795,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14815,
                  "src": "5288:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14794,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5288:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14797,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14815,
                  "src": "5297:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14796,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5297:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5287:18:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14845,
            "nodeType": "FunctionDefinition",
            "src": "5529:455:52",
            "nodes": [],
            "body": {
              "id": 14844,
              "nodeType": "Block",
              "src": "5734:250:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14830,
                    14832
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14830,
                      "mutability": "mutable",
                      "name": "result1",
                      "nameLocation": "5753:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14844,
                      "src": "5745:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14829,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5745:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14832,
                      "mutability": "mutable",
                      "name": "result2",
                      "nameLocation": "5770:7:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14844,
                      "src": "5762:15:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14831,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5762:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14839,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14835,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14818,
                        "src": "5852:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                          "typeString": "struct HyperdriveUtils.MaxTradeParams memory"
                        }
                      },
                      {
                        "id": 14836,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14820,
                        "src": "5877:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14837,
                        "name": "_spotPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14822,
                        "src": "5918:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                          "typeString": "struct HyperdriveUtils.MaxTradeParams memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14833,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124790,
                        "src": "5781:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$124790_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 14834,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5810:24:52",
                      "memberName": "calculateAbsoluteMaxLong",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 122846,
                      "src": "5781:53:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_MaxTradeParams_$122510_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (struct HyperdriveUtils.MaxTradeParams memory,uint256,uint256) pure returns (uint256,uint256)"
                      }
                    },
                    "id": 14838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5781:161:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5744:198:52"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 14840,
                        "name": "result1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14830,
                        "src": "5960:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14841,
                        "name": "result2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14832,
                        "src": "5969:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14842,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5959:18:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14828,
                  "id": 14843,
                  "nodeType": "Return",
                  "src": "5952:25:52"
                }
              ]
            },
            "functionSelector": "a2b9a7b7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateAbsoluteMaxLong",
            "nameLocation": "5538:24:52",
            "parameters": {
              "id": 14823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14818,
                  "mutability": "mutable",
                  "name": "_params",
                  "nameLocation": "5610:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14845,
                  "src": "5572:45:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                    "typeString": "struct HyperdriveUtils.MaxTradeParams"
                  },
                  "typeName": {
                    "id": 14817,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14816,
                      "name": "HyperdriveUtils.MaxTradeParams",
                      "nameLocations": [
                        "5572:15:52",
                        "5588:14:52"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 122510,
                      "src": "5572:30:52"
                    },
                    "referencedDeclaration": 122510,
                    "src": "5572:30:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MaxTradeParams_$122510_storage_ptr",
                      "typeString": "struct HyperdriveUtils.MaxTradeParams"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14820,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "5635:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14845,
                  "src": "5627:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14819,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5627:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14822,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "5676:10:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14845,
                  "src": "5668:18:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14821,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5668:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5562:130:52"
            },
            "returnParameters": {
              "id": 14828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14825,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14845,
                  "src": "5716:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5716:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14827,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14845,
                  "src": "5725:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14826,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5725:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5715:18:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14865,
            "nodeType": "FunctionDefinition",
            "src": "5990:365:52",
            "nodes": [],
            "body": {
              "id": 14864,
              "nodeType": "Block",
              "src": "6178:177:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14859,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14848,
                        "src": "6258:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                          "typeString": "struct HyperdriveUtils.MaxTradeParams memory"
                        }
                      },
                      {
                        "id": 14860,
                        "name": "_checkpointExposure",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14850,
                        "src": "6283:19:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 14861,
                        "name": "_maxIterations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14852,
                        "src": "6320:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                          "typeString": "struct HyperdriveUtils.MaxTradeParams memory"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14857,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124790,
                        "src": "6207:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$124790_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 14858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6223:17:52",
                      "memberName": "calculateMaxShort",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 123587,
                      "src": "6207:33:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_MaxTradeParams_$122510_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (struct HyperdriveUtils.MaxTradeParams memory,int256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6207:141:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14856,
                  "id": 14863,
                  "nodeType": "Return",
                  "src": "6188:160:52"
                }
              ]
            },
            "functionSelector": "86ad02af",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxShort",
            "nameLocation": "5999:17:52",
            "parameters": {
              "id": 14853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14848,
                  "mutability": "mutable",
                  "name": "_params",
                  "nameLocation": "6064:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14865,
                  "src": "6026:45:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MaxTradeParams_$122510_memory_ptr",
                    "typeString": "struct HyperdriveUtils.MaxTradeParams"
                  },
                  "typeName": {
                    "id": 14847,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14846,
                      "name": "HyperdriveUtils.MaxTradeParams",
                      "nameLocations": [
                        "6026:15:52",
                        "6042:14:52"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 122510,
                      "src": "6026:30:52"
                    },
                    "referencedDeclaration": 122510,
                    "src": "6026:30:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MaxTradeParams_$122510_storage_ptr",
                      "typeString": "struct HyperdriveUtils.MaxTradeParams"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14850,
                  "mutability": "mutable",
                  "name": "_checkpointExposure",
                  "nameLocation": "6088:19:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14865,
                  "src": "6081:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14849,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6081:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14852,
                  "mutability": "mutable",
                  "name": "_maxIterations",
                  "nameLocation": "6125:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14865,
                  "src": "6117:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6117:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6016:129:52"
            },
            "returnParameters": {
              "id": 14856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14855,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14865,
                  "src": "6169:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14854,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6169:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6168:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14891,
            "nodeType": "FunctionDefinition",
            "src": "6361:408:52",
            "nodes": [],
            "body": {
              "id": 14890,
              "nodeType": "Block",
              "src": "6556:213:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14879
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14879,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "6574:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14890,
                      "src": "6566:14:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14878,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6566:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14887,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14882,
                        "name": "_shareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14867,
                        "src": "6630:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14883,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14869,
                        "src": "6658:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14884,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14871,
                        "src": "6685:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14885,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14873,
                        "src": "6717:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14880,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "6583:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6598:18:52",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9113,
                      "src": "6583:33:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6583:156:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6566:173:52"
                },
                {
                  "expression": {
                    "id": 14888,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14879,
                    "src": "6756:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14877,
                  "id": 14889,
                  "nodeType": "Return",
                  "src": "6749:13:52"
                }
              ]
            },
            "functionSelector": "2471caed",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotPrice",
            "nameLocation": "6370:18:52",
            "parameters": {
              "id": 14874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14867,
                  "mutability": "mutable",
                  "name": "_shareReserves",
                  "nameLocation": "6406:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14891,
                  "src": "6398:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14866,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6398:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14869,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "6438:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14891,
                  "src": "6430:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14868,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6430:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14871,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "6469:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14891,
                  "src": "6461:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14870,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6461:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14873,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "6505:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14891,
                  "src": "6497:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6497:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6388:135:52"
            },
            "returnParameters": {
              "id": 14877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14876,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14891,
                  "src": "6547:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14875,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6547:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6546:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14905,
            "nodeType": "FunctionDefinition",
            "src": "6775:196:52",
            "nodes": [],
            "body": {
              "id": 14904,
              "nodeType": "Block",
              "src": "6902:69:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14901,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14894,
                        "src": "6956:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      ],
                      "expression": {
                        "id": 14899,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "6919:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6934:21:52",
                      "memberName": "calculatePresentValue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9802,
                      "src": "6919:36:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$9560_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct HyperdriveMath.PresentValueParams memory) pure returns (uint256)"
                      }
                    },
                    "id": 14902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6919:45:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14898,
                  "id": 14903,
                  "nodeType": "Return",
                  "src": "6912:52:52"
                }
              ]
            },
            "functionSelector": "37043a53",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculatePresentValue",
            "nameLocation": "6784:21:52",
            "parameters": {
              "id": 14895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14894,
                  "mutability": "mutable",
                  "name": "_params",
                  "nameLocation": "6856:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14905,
                  "src": "6815:48:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                    "typeString": "struct HyperdriveMath.PresentValueParams"
                  },
                  "typeName": {
                    "id": 14893,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14892,
                      "name": "HyperdriveMath.PresentValueParams",
                      "nameLocations": [
                        "6815:14:52",
                        "6830:18:52"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 9560,
                      "src": "6815:33:52"
                    },
                    "referencedDeclaration": 9560,
                    "src": "6815:33:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$9560_storage_ptr",
                      "typeString": "struct HyperdriveMath.PresentValueParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6805:64:52"
            },
            "returnParameters": {
              "id": 14898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14897,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14905,
                  "src": "6893:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14896,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6893:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6892:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14937,
            "nodeType": "FunctionDefinition",
            "src": "6977:512:52",
            "nodes": [],
            "body": {
              "id": 14936,
              "nodeType": "Block",
              "src": "7228:261:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14923
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14923,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7246:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14936,
                      "src": "7238:14:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14922,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7238:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14933,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14926,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14907,
                        "src": "7306:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14927,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14909,
                        "src": "7331:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14928,
                        "name": "_openSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14911,
                        "src": "7357:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14929,
                        "name": "_closeSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14913,
                        "src": "7386:16:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14930,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14915,
                        "src": "7416:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14931,
                        "name": "_flatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14917,
                        "src": "7441:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14924,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "7255:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7270:22:52",
                      "memberName": "calculateShortProceeds",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9853,
                      "src": "7255:37:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7255:204:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7238:221:52"
                },
                {
                  "expression": {
                    "id": 14934,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14923,
                    "src": "7476:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14921,
                  "id": 14935,
                  "nodeType": "Return",
                  "src": "7469:13:52"
                }
              ]
            },
            "functionSelector": "de31b2ab",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortProceeds",
            "nameLocation": "6986:22:52",
            "parameters": {
              "id": 14918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14907,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "7026:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14937,
                  "src": "7018:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7018:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14909,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "7055:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14937,
                  "src": "7047:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14908,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7047:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14911,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "7085:15:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14937,
                  "src": "7077:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14910,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7077:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14913,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "7118:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14937,
                  "src": "7110:24:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14912,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7110:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14915,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "7152:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14937,
                  "src": "7144:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14914,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7144:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14917,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "7181:8:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14937,
                  "src": "7173:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14916,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7173:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7008:187:52"
            },
            "returnParameters": {
              "id": 14921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14920,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14937,
                  "src": "7219:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14919,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7219:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7218:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14963,
            "nodeType": "FunctionDefinition",
            "src": "7495:408:52",
            "nodes": [],
            "body": {
              "id": 14962,
              "nodeType": "Block",
              "src": "7690:213:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14951
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14951,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7708:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 14962,
                      "src": "7700:14:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14950,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7700:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14959,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14954,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14939,
                        "src": "7768:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14955,
                        "name": "_openSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14941,
                        "src": "7793:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14956,
                        "name": "_closeSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14943,
                        "src": "7822:16:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14957,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14945,
                        "src": "7852:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 14952,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "7717:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 14953,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7732:22:52",
                      "memberName": "calculateShortInterest",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9886,
                      "src": "7717:37:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7717:156:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7700:173:52"
                },
                {
                  "expression": {
                    "id": 14960,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14951,
                    "src": "7890:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14949,
                  "id": 14961,
                  "nodeType": "Return",
                  "src": "7883:13:52"
                }
              ]
            },
            "functionSelector": "fdc30d61",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortInterest",
            "nameLocation": "7504:22:52",
            "parameters": {
              "id": 14946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14939,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "7544:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "7536:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14938,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7536:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14941,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "7573:15:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "7565:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7565:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14943,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "7606:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "7598:24:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14942,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7598:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14945,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "7640:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "7632:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14944,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7632:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7526:131:52"
            },
            "returnParameters": {
              "id": 14949,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14948,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "7681:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14947,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7681:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7680:9:52"
            },
            "scope": 14964,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "MockHyperdriveMath",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          14964
        ],
        "name": "MockHyperdriveMath",
        "nameLocation": "217:18:52",
        "scope": 14965,
        "usedErrors": [
          7330,
          7416,
          7418,
          7425
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 52
} as const;
