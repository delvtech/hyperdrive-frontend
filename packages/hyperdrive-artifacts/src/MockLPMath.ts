export const MockLPMath = {
  name: 'MockLPMath' as const,
  abi: [
  {
    "type": "function",
    "name": "calculateDistributeExcessIdle",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.DistributeExcessIdleParams",
        "components": [
          {
            "name": "presentValueParams",
            "type": "tuple",
            "internalType": "struct LPMath.PresentValueParams",
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
                "name": "minimumTransactionAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "timeStretch",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "startingPresentValue",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "activeLpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "idle",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "netCurveTrade",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "originalShareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalBondReserves",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
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
    "name": "calculateDistributeExcessIdleShareProceeds",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.DistributeExcessIdleParams",
        "components": [
          {
            "name": "presentValueParams",
            "type": "tuple",
            "internalType": "struct LPMath.PresentValueParams",
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
                "name": "minimumTransactionAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "timeStretch",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "startingPresentValue",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "activeLpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "idle",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "netCurveTrade",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "originalShareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalBondReserves",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_originalEffectiveShareReserves",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxShareReservesDelta",
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
    "name": "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.DistributeExcessIdleParams",
        "components": [
          {
            "name": "presentValueParams",
            "type": "tuple",
            "internalType": "struct LPMath.PresentValueParams",
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
                "name": "minimumTransactionAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "timeStretch",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "startingPresentValue",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "activeLpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "idle",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "netCurveTrade",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "originalShareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalBondReserves",
            "type": "uint256",
            "internalType": "uint256"
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
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateDistributeExcessIdleWithdrawalSharesRedeemed",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.DistributeExcessIdleParams",
        "components": [
          {
            "name": "presentValueParams",
            "type": "tuple",
            "internalType": "struct LPMath.PresentValueParams",
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
                "name": "minimumTransactionAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "timeStretch",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "startingPresentValue",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "activeLpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "idle",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "netCurveTrade",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "originalShareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalBondReserves",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_shareReservesDelta",
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
    "name": "calculateInitialReserves",
    "inputs": [
      {
        "name": "_shareAmount",
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
      },
      {
        "name": "_targetApr",
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
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateMaxShareReservesDeltaSafe",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.DistributeExcessIdleParams",
        "components": [
          {
            "name": "presentValueParams",
            "type": "tuple",
            "internalType": "struct LPMath.PresentValueParams",
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
                "name": "minimumTransactionAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "timeStretch",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "startingPresentValue",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "activeLpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "idle",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "netCurveTrade",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "originalShareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalBondReserves",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_originalEffectiveShareReserves",
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
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateNetCurveTrade",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.PresentValueParams",
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
            "name": "minimumTransactionAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "timeStretch",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longAverageTimeRemaining",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortAverageTimeRemaining",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateNetFlatTrade",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.PresentValueParams",
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
            "name": "minimumTransactionAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "timeStretch",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longAverageTimeRemaining",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortAverageTimeRemaining",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculatePresentValue",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.PresentValueParams",
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
            "name": "minimumTransactionAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "timeStretch",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longAverageTimeRemaining",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortAverageTimeRemaining",
            "type": "uint256",
            "internalType": "uint256"
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
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateSharesDeltaGivenBondsDeltaDerivativeSafe",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.DistributeExcessIdleParams",
        "components": [
          {
            "name": "presentValueParams",
            "type": "tuple",
            "internalType": "struct LPMath.PresentValueParams",
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
                "name": "minimumTransactionAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "timeStretch",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "startingPresentValue",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "activeLpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "idle",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "netCurveTrade",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "originalShareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalBondReserves",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_originalEffectiveShareReserves",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_bondAmount",
        "type": "int256",
        "internalType": "int256"
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
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateUpdateLiquidity",
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
      },
      {
        "name": "_bondReserves",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minimumShareReserves",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_shareReservesDelta",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [
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
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "shouldShortCircuitDistributeExcessIdleShareProceeds",
    "inputs": [
      {
        "name": "_params",
        "type": "tuple",
        "internalType": "struct LPMath.DistributeExcessIdleParams",
        "components": [
          {
            "name": "presentValueParams",
            "type": "tuple",
            "internalType": "struct LPMath.PresentValueParams",
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
                "name": "minimumTransactionAmount",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "timeStretch",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "longAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortsOutstanding",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shortAverageTimeRemaining",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "startingPresentValue",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "activeLpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "idle",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "netCurveTrade",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "originalShareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "originalBondReserves",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_lpTotalSupply",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_presentValue",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
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
    "name": "InvalidPresentValue",
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
] as const,
  bytecode: '0x608060405234801561000f575f80fd5b5061251a8061001d5f395ff3fe608060405234801561000f575f80fd5b50600436106100b1575f3560e01c8063a4fc6f811161006e578063a4fc6f8114610174578063b29e1d1e14610187578063b500f3cb146101b5578063c00b11d3146101c8578063c615b2d9146101db578063cefef8b7146101ee575f80fd5b806332c5dec4146100b55780633f9ccc01146100db578063865d65a2146100ee5780638f1505fa146101165780639e5fc16b14610139578063a0d1643c14610161575b5f80fd5b6100c86100c33660046120d9565b610201565b6040519081526020015b60405180910390f35b6100c86100e936600461217a565b610211565b6101016100fc3660046121ae565b610227565b604080519283526020830191909152016100d2565b61012961012436600461217a565b6102ac565b60405190151581526020016100d2565b61014c6101473660046121ae565b6102b8565b604080519283529015156020830152016100d2565b6100c861016f3660046121ae565b6102c4565b6100c86101823660046120d9565b6102d6565b61019a6101953660046121d9565b610355565b604080519384526020840192909252908201526060016100d2565b61019a6101c3366004612218565b610402565b6100c86101d63660046120d9565b610513565b61014c6101e936600461217a565b61058b565b61014c6101fc36600461224f565b6105a5565b5f61020b826105b9565b92915050565b5f61021f848484600461062b565b949350505050565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef6885856040518363ffffffff1660e01b81526004016102629291906122e8565b6040805180830381865af415801561027c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102a0919061235d565b915091505b9250929050565b5f61021f848484610b32565b5f806102a08484610b9d565b5f6102cf8383610ca4565b9392505050565b5f805f6102e284610d69565b915091508061034e5760405162461bcd60e51b815260206004820152602d60248201527f4d6f636b4c504d6174683a2063616c63756c6174654e6574437572766554726160448201526c191954d859994819985a5b1959609a1b60648201526084015b60405180910390fd5b5092915050565b60405163594f0e8f60e11b8152600481018790526024810186905260448101859052606481018490526084810183905260a481018290525f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156103cc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103f0919061237f565b919b909a509098509650505050505050565b60405163685a2be760e11b815260048101869052602481018590526044810184905260648101839052608481018290525f9081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015610474573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049891906123aa565b92965090945092509050806105075760405162461bcd60e51b815260206004820152602f60248201527f4d6f636b4c504d6174683a2063616c63756c6174655570646174654c6971756960448201526e191a5d1e54d859994819985a5b1959608a1b6064820152608401610345565b50955095509592505050565b604051635f9d50ab60e11b81525f9073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061054c9085906004016123ec565b602060405180830381865af4158015610567573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061020b91906123fb565b5f80610598858585611080565b915091505b935093915050565b5f806105b0836113d5565b91509150915091565b5f6105f06105eb836101200151670de0b6b3a76400006105d99190612426565b606085015161010086015191906114a2565b6114c5565b6106216105eb846101600151670de0b6b3a764000061060f9190612426565b606086015161014087015191906114f2565b61020b9190612439565b5f80856060015186604001516106419190612458565b602087015160608801519192505f9161065a91846114f2565b90508660a001515f0361067057915061021f9050565b5f808089600488101561068257600497505b5f5b888110156109db57610696868b61150d565b95505f6106cb8360c001518460e00151856101000151865f015160a001516106bd8c6114c5565b6106c69061246b565b611521565b865160408101929092526020820192909252919091529050806106f8575f9850505050505050505061021f565b5f6107058e5f015161162c565b925090508161071f575f995050505050505050505061021f565b61072a84828b610b32565b156107405787995050505050505050505061021f565b5f8460a0015113156108a257835180516020820151604083015160a084015160e0909401515f946107929493929161078090670de0b6b3a7640000612426565b8a5160608101516080909101516116b2565b93509050826107ad575f9a505050505050505050505061021f565b808560a00151106108a0576107c1856113d5565b9099509250826107dd575f9a505050505050505050505061021f565b6108018560c001518660e00151876101000151885f015160a001516106bd8e6114c5565b88516040810192909252602082019290925291909152925082610830575f9a505050505050505050505061021f565b845180516020820151604083015160a084015160e090940151610860949061078090670de0b6b3a7640000612426565b935090508261087b575f9a505050505050505050505061021f565b8e60a00151811161089857889a505050505050505050505061021f565b5050506109d3565b505b5f6108b2858f8760a00151611080565b935090508215806108cb5750670de0b6b3a76400008110155b156108e2575f9a505050505050505050505061021f565b80670de0b6b3a76400000390505f61090e6105eb876040015188602001516117af90919063ffffffff16565b61091b6105eb858e6117c3565b6109259190612439565b90508815806109435750610938896117d7565b610941826117d7565b105b15610952578098508997508296505b5f81131561097f5761096e8b61096883856117e8565b906117e8565b610978908b612458565b99506109ce565b5f8112156109c5575f6109978c61096885818661246b565b90508a8110156109ab57808b039a506109bf565b5f9c5050505050505050505050505061021f565b506109ce565b505050506109db565b505050505b600101610684565b505f610a018260c001518360e00151846101000151855f015160a001516106bd8b6114c5565b85516040810192909252602082019290925291909152905080610a2d575f97505050505050505061021f565b5f610a3a835f01516117fc565b90505f610a5b6105eb856040015186602001516117af90919063ffffffff16565b610a686105eb848c6117c3565b610a729190612439565b9050610a7d876117d7565b610a86826117d7565b1015610a93578795508194505b610aba610aae655af3107a4000670de0b6b3a7640000612426565b6020860151908b6114a2565b6040850151610aca9087906117e8565b1080610b0a5750610af8610aec655af3107a4000670de0b6b3a7640000612458565b6020860151908b6114f2565b6040850151610b0890879061182a565b115b15610b20575f995050505050505050505061021f565b50939c9b505050505050505050505050565b60208301515f90610b43908461182a565b6040850151610b539084906117e8565b1015801561021f57506020840151610b839084610b7c633b9aca00670de0b6b3a7640000612458565b91906114f2565b6040850151610b9390849061182a565b1115949350505050565b5f805f8460a0015112610bb8575050608082015160016102a5565b5f8460a00151610bc79061246b565b90505f610c0185876101000151885f015160e00151670de0b6b3a7640000610bef9190612426565b8951606081015160809091015161183e565b93509050821580610c10575080155b15610c22575f809350935050506102a5565b5f610c2d838361182a565b9050670de0b6b3a76400008111610c695780670de0b6b3a7640000039450610c628760c00151866117c390919063ffffffff16565b9450610c77565b5f80945094505050506102a5565b8660800151851115610c965786608001516001945094505050506102a5565b506001925050509250929050565b5f80610cca8460c001518560e00151866101000151875f015160a001516106bd886114c5565b87516040810192909252602082019290925291909152905080610cf0575f91505061020b565b5f610cfd855f015161162c565b9250905081610d10575f9250505061020b565b84602001518110610d25575f9250505061020b565b5f85606001518660400151610d3a9190612458565b9050610d55828760200151836114f29092919063ffffffff16565b610d5f9082612426565b9695505050505050565b5f805f610d8c6105eb8561016001518661014001516117c390919063ffffffff16565b610dac6105eb8661012001518761010001516117af90919063ffffffff16565b610db69190612439565b90505f80610dcb865f015187602001516118e6565b9150915080610de157505f958695509350505050565b5f831315610f28575f8390505f610e2b885f015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000610e1c9190612426565b8d606001518e608001516116b2565b9350905082610e4357505f9788975095505050505050565b818110610ede575f610e7c858a60400151858c60e00151670de0b6b3a7640000610e6d9190612426565b8d606001518e6080015161191e565b9450905083158015610e9157508860c0015183105b15610ea757505f98600198509650505050505050565b83610ebc57505f988998509650505050505050565b610ec5816114c5565b610ece9061246b565b9960019950975050505050505050565b5f886020015112610f1457610efc8860a00151856105eb9190612426565b610f059061246b565b98600198509650505050505050565b60a08801518851610efc916105eb91612426565b5f831215611072575f610f3a8461246b565b90505f610f6d8489604001518a60e00151670de0b6b3a7640000610f5e9190612426565b8b606001518c6080015161183e565b9350905082610f8557505f9788975095505050505050565b818110611007575f610fbe858a60400151858c60e00151670de0b6b3a7640000610faf9190612426565b8d606001518e608001516119dd565b9450905083158015610fd357508860c0015183105b15610fe957505f98600198509650505050505050565b83610ffe57505f988998509650505050505050565b610ece816114c5565b5f611038858a604001518b60e00151670de0b6b3a76400006110299190612426565b8c606001518d60800151611aaf565b945090508361105157505f988998509650505050505050565b610ece6110688a6060015184866109689190612426565b6105eb9083612458565b505f95600195509350505050565b5f805f8084126110a25785516040015161109b908590612458565b90506110db565b5f6110ac8561246b565b8751604001519091508110156110cc5786516040015181900391506110d9565b5f8093509350505061059d565b505b855180516020909101515f9182916110f391906118e6565b915091508061110a575f809450945050505061059d565b875160e08101516040909101515f9161113e916111329161112b9190611b61565b8a906117c3565b6101008b01519061182a565b895160e081015160809091015161116f916111639161115d90886117c3565b90611b61565b8b51606001519061182a565b6111799190612458565b90505f6111af6111a361119c8c5f015160e0015188611b6190919063ffffffff16565b8b906117af565b6101008c0151906117e8565b9050808210156111c9575f8096509650505050505061059d565b80820391505f611208858c5f0151604001518d5f015160e00151670de0b6b3a76400006111f69190612426565b8e516060810151608090910151611bc6565b90505f6112308c5f015160e00151670de0b6b3a76400006112299190612426565b8890611b61565b90508082101561124c575f80985098505050505050505061059d565b8b516080810151606090910151918303916112689183916114a2565b9050670de0b6b3a764000081106112b3578b5160e001516112ac906112a59061129990670de0b6b3a7640000612426565b8e5160e001519061182a565b8290611b61565b90506112e2565b8b5160e001516112df906112a5906112d390670de0b6b3a7640000612426565b8e5160e00151906117e8565b90505b8b51606001516112f590859083906114a2565b935083670de0b6b3a764000011156113195783670de0b6b3a764000003935061132c565b5f6001985098505050505050505061059d565b5f8c60e001511261138d5760c08c015160e08d015161134a9161182a565b9250670de0b6b3a764000083111561136e575f80985098505050505050505061059d565b670de0b6b3a7640000929092039161138684846117c3565b93506113c2565b6113bf6113a68d60c001518e60e001516109689061246b565b6113b890670de0b6b3a7640000612458565b85906117c3565b93505b50919a60019a5098505050505050505050565b5f805f8360e00151136113ec57505f928392509050565b5f6113f9845f01516105b9565b90505f6114248560400151866060015187604001516114189190612458565b602088015191906114a2565b90505f8212611449578082101561143d5781900361145f565b505f9485945092505050565b6114528261246b565b61145c9082612458565b90505b60e085015160c08601516114749183906114a2565b9050808560c00151101561148e57505f9485945092505050565b808560c00151036001935093505050915091565b5f825f1904841183021582026114b6575f80fd5b50910281810615159190040190565b5f6001600160ff1b038211156114ee5760405163396ea70160e11b815260040160405180910390fd5b5090565b5f825f190484118302158202611506575f80fd5b5091020490565b5f81831161151b57826102cf565b50919050565b5f805f80845f0361153d57508792508691508590506001611620565b5f856115488b6114c5565b6115529190612485565b905061155d876114c5565b811215611576575f805f80945094509450945050611620565b8094505f89126115955761158e6105eb868b8d6114f2565b93506115b8565b6115ac6105eb6115a48b61246b565b87908d6114a2565b6115b59061246b565b93505b5f806115c48c8c6118e6565b91509150806115e1575f805f809650965096509650505050611620565b5f6115ec88886118e6565b925090508161160a575f805f80975097509750975050505050611620565b6116158b82856114f2565b955060019450505050505b95509550955095915050565b5f805f805f61163a86610d69565b915091508061165057505f958695509350505050565b61165d8660a001516114c5565b611666876105b9565b83611673895f01516114c5565b61167d9190612485565b6116879190612485565b6116919190612439565b925050505f8112156116a857505f93849350915050565b9360019350915050565b5f805f8812156116d2576116c58861246b565b6116cf9087612458565b95505b5f806116de8b8b6118e6565b91509150806116f4575f809350935050506117a3565b5f611702838b8a8a8a611bf4565b90505f61171e6117168a61115d8a8e6117af565b8990896114a2565b905080821015611737575f8095509550505050506117a3565b808203670de0b6b3a764000081106117655761175e6112a5670de0b6b3a76400008c6117e8565b905061177d565b61177a6112a5670de0b6b3a76400008c61182a565b90505b8b811015611795575f809650965050505050506117a3565b8b9003955060019450505050505b97509795505050505050565b5f6102cf8383670de0b6b3a76400006114a2565b5f6102cf8383670de0b6b3a76400006114f2565b5f808212156114ee57815f0361020b565b5f6102cf83670de0b6b3a7640000846114f2565b5f805f6118088461162c565b915091508061034e57604051635516328b60e11b815260040160405180910390fd5b5f6102cf83670de0b6b3a7640000846114a2565b5f805f61184e8888888888611bc6565b90505f611878670de0b6b3a764000061186788886117e8565b6118719190612458565b839061182a565b9050670de0b6b3a764000081106118a55761189e6112a5670de0b6b3a76400008961182a565b90506118bd565b6118ba6112a5670de0b6b3a7640000896117e8565b90505b808810156118d2575f809350935050506118dc565b8703925060019150505b9550959350505050565b5f805f836118f3866114c5565b6118fd9190612439565b90505f811215611913575f8092509250506102a5565b946001945092505050565b5f805f61192e8989888888611bc6565b905061193e8661115d898b612458565b975087811015611954575f8092509250506119d2565b8781036119628186886114a2565b9050670de0b6b3a7640000811061198f576119886112a5670de0b6b3a76400008961182a565b90506119a7565b6119a46112a5670de0b6b3a7640000896117e8565b90505b6119b1818661182a565b9050808a10156119c8575f809350935050506119d2565b8903925060019150505b965096945050505050565b5f805f6119ed8989888888611bc6565b905086881015611a03575f8092509250506119d2565b9686900396611a128887611b61565b975087811015611a28575f8092509250506119d2565b878103611a368186886114a2565b9050670de0b6b3a76400008110611a6357611a5c6112a5670de0b6b3a76400008961182a565b9050611a7b565b611a786112a5670de0b6b3a7640000896117e8565b90505b611a85818661182a565b905089811015611a9c575f809350935050506119d2565b9890980398600198509650505050505050565b5f805f611abf8888888888611bf4565b90505f611ae9670de0b6b3a7640000611ad8888861182a565b611ae29190612458565b83906117e8565b9050670de0b6b3a76400008110611b1657611b0f6112a5670de0b6b3a7640000896117e8565b9050611b2e565b611b2b6112a5670de0b6b3a76400008961182a565b90505b611b3881866117e8565b905088811015611b4f575f809350935050506118dc565b97909703976001975095505050505050565b5f815f03611b785750670de0b6b3a764000061020b565b825f03611b8657505f61020b565b5f611b90836114c5565b90505f611ba4611b9f866114c5565b611c18565b9050818102611bbb670de0b6b3a7640000826124ac565b9050610d5f81611e46565b5f611bd18585611b61565b611bea611be28661115d868b6117af565b8590856114a2565b610d5f9190612458565b5f611bff8585611b61565b611bea611c108661115d868b6117c3565b8590856114f2565b5f808213611c395760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611cc59084901c6114c5565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e198213611e5f57505f919050565b680755bf798b4a1bf1e58212611e88576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190610d5f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6114c5565b604051610180810167ffffffffffffffff8111828210171561200857634e487b7160e01b5f52604160045260245ffd5b60405290565b604051610120810167ffffffffffffffff8111828210171561200857634e487b7160e01b5f52604160045260245ffd5b5f610180828403121561204f575f80fd5b612057611fd8565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016080830135818301525092915050565b5f61018082840312156120ea575f80fd5b6102cf838361203e565b5f6102808284031215612105575f80fd5b61210d61200e565b9050612119838361203e565b815261018082013560208201526101a082013560408201526101c082013560608201526101e0820135608082015261020082013560a082015261022082013560c082015261024082013560e082015261026082013561010082015292915050565b5f805f6102c0848603121561218d575f80fd5b61219785856120f4565b9561028085013595506102a0909401359392505050565b5f806102a083850312156121c0575f80fd5b6121ca84846120f4565b94610280939093013593505050565b5f805f805f8060c087890312156121ee575f80fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b5f805f805f60a0868803121561222c575f80fd5b505083359560208501359550604085013594606081013594506080013592509050565b5f6102808284031215612260575f80fd5b6102cf83836120f4565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506122fb82855161226a565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f806040838503121561236e575f80fd5b505080516020909101519092909150565b5f805f60608486031215612391575f80fd5b8351925060208401519150604084015190509250925092565b5f805f80608085870312156123bd575f80fd5b845193506020850151925060408501519150606085015180151581146123e1575f80fd5b939692955090935050565b610180810161020b828461226a565b5f6020828403121561240b575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561020b5761020b612412565b8181035f83128015838313168383128216171561034e5761034e612412565b8082018082111561020b5761020b612412565b5f600160ff1b820161247f5761247f612412565b505f0390565b8082018281125f8312801582168215821617156124a4576124a4612412565b505092915050565b5f826124c657634e487b7160e01b5f52601260045260245ffd5b600160ff1b82145f19841416156124df576124df612412565b50059056fea2646970667358221220c1489ea17c5fc61a3b455bb2f0d398358386a0beec6f70da990abbdd8dc3c07e64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "calculateDistributeExcessIdle(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "865d65a2",
  "calculateDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "3f9ccc01",
  "calculateDistributeExcessIdleShareProceedsNetLongEdgeCaseSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256))": "cefef8b7",
  "calculateDistributeExcessIdleWithdrawalSharesRedeemed(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "a0d1643c",
  "calculateInitialReserves(uint256,uint256,uint256,uint256,uint256,uint256)": "b29e1d1e",
  "calculateMaxShareReservesDeltaSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256)": "9e5fc16b",
  "calculateNetCurveTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "a4fc6f81",
  "calculateNetFlatTrade((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "32c5dec4",
  "calculatePresentValue((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": "c00b11d3",
  "calculateSharesDeltaGivenBondsDeltaDerivativeSafe(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,int256)": "c615b2d9",
  "calculateUpdateLiquidity(uint256,int256,uint256,uint256,int256)": "b500f3cb",
  "shouldShortCircuitDistributeExcessIdleShareProceeds(((uint256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,uint256,uint256,int256,uint256,int256,uint256),uint256,uint256)": "8f1505fa"
} as const
};
