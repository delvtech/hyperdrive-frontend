export const L2Pool = {
  name: 'L2Pool' as const,
  abi: [
  {
    "type": "function",
    "name": "ADDRESSES_PROVIDER",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IPoolAddressesProvider"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "BRIDGE_PROTOCOL_FEE",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "FLASHLOAN_PREMIUM_TOTAL",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "FLASHLOAN_PREMIUM_TO_PROTOCOL",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MAX_NUMBER_RESERVES",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "backUnbacked",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fee",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "borrow",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "interestRateMode",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "internalType": "uint16"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "borrow",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "configureEModeCategory",
    "inputs": [
      {
        "name": "id",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "category",
        "type": "tuple",
        "internalType": "struct DataTypes.EModeCategory",
        "components": [
          {
            "name": "ltv",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "liquidationThreshold",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "liquidationBonus",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "priceSource",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "label",
            "type": "string",
            "internalType": "string"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "dropReserve",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "finalizeTransfer",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "balanceFromBefore",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "balanceToBefore",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "flashLoan",
    "inputs": [
      {
        "name": "receiverAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "assets",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "amounts",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "interestRateModes",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "params",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "flashLoanSimple",
    "inputs": [
      {
        "name": "receiverAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "params",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getBorrowLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getBridgeLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getConfiguration",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct DataTypes.ReserveConfigurationMap",
        "components": [
          {
            "name": "data",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getEModeCategoryData",
    "inputs": [
      {
        "name": "id",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct DataTypes.EModeCategory",
        "components": [
          {
            "name": "ltv",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "liquidationThreshold",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "liquidationBonus",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "priceSource",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "label",
            "type": "string",
            "internalType": "string"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getEModeLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getFlashLoanLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getLiquidationGracePeriod",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint40",
        "internalType": "uint40"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getLiquidationLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getPoolLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getReserveAddressById",
    "inputs": [
      {
        "name": "id",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getReserveData",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct DataTypes.ReserveDataLegacy",
        "components": [
          {
            "name": "configuration",
            "type": "tuple",
            "internalType": "struct DataTypes.ReserveConfigurationMap",
            "components": [
              {
                "name": "data",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "liquidityIndex",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "currentLiquidityRate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "variableBorrowIndex",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "currentVariableBorrowRate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "currentStableBorrowRate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "lastUpdateTimestamp",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "id",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "aTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "stableDebtTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "variableDebtTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "interestRateStrategyAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "accruedToTreasury",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "unbacked",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "isolationModeTotalDebt",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getReserveDataExtended",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct DataTypes.ReserveData",
        "components": [
          {
            "name": "configuration",
            "type": "tuple",
            "internalType": "struct DataTypes.ReserveConfigurationMap",
            "components": [
              {
                "name": "data",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "liquidityIndex",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "currentLiquidityRate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "variableBorrowIndex",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "currentVariableBorrowRate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "currentStableBorrowRate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "lastUpdateTimestamp",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "id",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "liquidationGracePeriodUntil",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "aTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "stableDebtTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "variableDebtTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "interestRateStrategyAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "accruedToTreasury",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "unbacked",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "isolationModeTotalDebt",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "virtualUnderlyingBalance",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getReserveNormalizedIncome",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getReserveNormalizedVariableDebt",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getReservesCount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getReservesList",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSupplyLogic",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getUserAccountData",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "totalCollateralBase",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "totalDebtBase",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "availableBorrowsBase",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "currentLiquidationThreshold",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "ltv",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "healthFactor",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUserConfiguration",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct DataTypes.UserConfigurationMap",
        "components": [
          {
            "name": "data",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUserEMode",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVirtualUnderlyingBalance",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "initReserve",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "aTokenAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "stableDebtAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "variableDebtAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "interestRateStrategyAddress",
        "type": "address",
        "internalType": "address"
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
        "name": "provider",
        "type": "address",
        "internalType": "contract IPoolAddressesProvider"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "liquidationCall",
    "inputs": [
      {
        "name": "collateralAsset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "debtAsset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "debtToCover",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "receiveAToken",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "liquidationCall",
    "inputs": [
      {
        "name": "args1",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "args2",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mintToTreasury",
    "inputs": [
      {
        "name": "assets",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mintUnbacked",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rebalanceStableBorrowRate",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rebalanceStableBorrowRate",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "repay",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "repay",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "interestRateMode",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "repayWithATokens",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "interestRateMode",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "repayWithATokens",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "repayWithPermit",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "r",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "repayWithPermit",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "interestRateMode",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "deadline",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "permitV",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "permitR",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "permitS",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rescueTokens",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "resetIsolationModeTotalDebt",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setConfiguration",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "configuration",
        "type": "tuple",
        "internalType": "struct DataTypes.ReserveConfigurationMap",
        "components": [
          {
            "name": "data",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setLiquidationGracePeriod",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "until",
        "type": "uint40",
        "internalType": "uint40"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setReserveInterestRateStrategyAddress",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "rateStrategyAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setUserEMode",
    "inputs": [
      {
        "name": "categoryId",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setUserUseReserveAsCollateral",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setUserUseReserveAsCollateral",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "useAsCollateral",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supply",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supply",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supplyWithPermit",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "internalType": "uint16"
      },
      {
        "name": "deadline",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "permitV",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "permitR",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "permitS",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supplyWithPermit",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "r",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "swapBorrowRateMode",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "swapBorrowRateMode",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "interestRateMode",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "swapToVariable",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "syncIndexesState",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "syncRatesState",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateBridgeProtocolFee",
    "inputs": [
      {
        "name": "protocolFee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateFlashloanPremiums",
    "inputs": [
      {
        "name": "flashLoanPremiumTotal",
        "type": "uint128",
        "internalType": "uint128"
      },
      {
        "name": "flashLoanPremiumToProtocol",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "name": "args",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "BackUnbacked",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "backer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "fee",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Borrow",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "interestRateMode",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum DataTypes.InterestRateMode"
      },
      {
        "name": "borrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "indexed": true,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FlashLoan",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "initiator",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "interestRateMode",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum DataTypes.InterestRateMode"
      },
      {
        "name": "premium",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "indexed": true,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "IsolationModeTotalDebtUpdated",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "totalDebt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LiquidationCall",
    "inputs": [
      {
        "name": "collateralAsset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "debtAsset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "debtToCover",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidatedCollateralAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidator",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "receiveAToken",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MintUnbacked",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "indexed": true,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MintedToTreasury",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amountMinted",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RebalanceStableBorrowRate",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Repay",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "repayer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "useATokens",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReserveDataUpdated",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "liquidityRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "stableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidityIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReserveDataUpdated",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "liquidityRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "stableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidityIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReserveUsedAsCollateralDisabled",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReserveUsedAsCollateralEnabled",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Supply",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "indexed": true,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SwapBorrowRateMode",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "interestRateMode",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum DataTypes.InterestRateMode"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UserEModeSet",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "categoryId",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Withdraw",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
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
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "ADDRESSES_PROVIDER()": "0542975c",
  "BRIDGE_PROTOCOL_FEE()": "272d9072",
  "FLASHLOAN_PREMIUM_TOTAL()": "074b2e43",
  "FLASHLOAN_PREMIUM_TO_PROTOCOL()": "6a99c036",
  "MAX_NUMBER_RESERVES()": "f8119d51",
  "MAX_STABLE_RATE_BORROW_SIZE_PERCENT()": "e82fec2f",
  "backUnbacked(address,uint256,uint256)": "d65dc7a1",
  "borrow(address,uint256,uint256,uint16,address)": "a415bcad",
  "borrow(bytes32)": "d5eed868",
  "configureEModeCategory(uint8,(uint16,uint16,uint16,address,string))": "d579ea7d",
  "deposit(address,uint256,address,uint16)": "e8eda9df",
  "dropReserve(address)": "63c9b860",
  "finalizeTransfer(address,address,address,uint256,uint256,uint256)": "d5ed3933",
  "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)": "ab9c4b5d",
  "flashLoanSimple(address,address,uint256,bytes,uint16)": "42b0b77c",
  "getBorrowLogic()": "2be29fa7",
  "getBridgeLogic()": "df374c36",
  "getConfiguration(address)": "c44b11f7",
  "getEModeCategoryData(uint8)": "6c6f6ae1",
  "getEModeLogic()": "f32b9a73",
  "getFlashLoanLogic()": "348fde0f",
  "getLiquidationGracePeriod(address)": "5c9a8b18",
  "getLiquidationLogic()": "911a3413",
  "getPoolLogic()": "d3350155",
  "getReserveAddressById(uint16)": "52751797",
  "getReserveData(address)": "35ea6a75",
  "getReserveDataExtended(address)": "8381995f",
  "getReserveNormalizedIncome(address)": "d15e0053",
  "getReserveNormalizedVariableDebt(address)": "386497fd",
  "getReservesCount()": "72218d04",
  "getReservesList()": "d1946dbc",
  "getSupplyLogic()": "870e7744",
  "getUserAccountData(address)": "bf92857c",
  "getUserConfiguration(address)": "4417a583",
  "getUserEMode(address)": "eddf1b79",
  "getVirtualUnderlyingBalance(address)": "6fb07f96",
  "initReserve(address,address,address,address,address)": "7a708e92",
  "initialize(address)": "c4d66de8",
  "liquidationCall(address,address,address,uint256,bool)": "00a718a9",
  "liquidationCall(bytes32,bytes32)": "fd21ecff",
  "mintToTreasury(address[])": "9cd19996",
  "mintUnbacked(address,uint256,address,uint16)": "69a933a5",
  "rebalanceStableBorrowRate(address,address)": "cd112382",
  "rebalanceStableBorrowRate(bytes32)": "427da177",
  "repay(address,uint256,uint256,address)": "573ade81",
  "repay(bytes32)": "563dd613",
  "repayWithATokens(address,uint256,uint256)": "2dad97d4",
  "repayWithATokens(bytes32)": "dc7c0bff",
  "repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)": "ee3e210b",
  "repayWithPermit(bytes32,bytes32,bytes32)": "94b576de",
  "rescueTokens(address,address,uint256)": "cea9d26f",
  "resetIsolationModeTotalDebt(address)": "e43e88a1",
  "setConfiguration(address,(uint256))": "f51e435b",
  "setLiquidationGracePeriod(address,uint40)": "b1a99e26",
  "setReserveInterestRateStrategyAddress(address,address)": "1d2118f9",
  "setUserEMode(uint8)": "28530a47",
  "setUserUseReserveAsCollateral(address,bool)": "5a3b74b9",
  "setUserUseReserveAsCollateral(bytes32)": "4d013f03",
  "supply(address,uint256,address,uint16)": "617ba037",
  "supply(bytes32)": "f7a73840",
  "supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)": "02c205f0",
  "supplyWithPermit(bytes32,bytes32,bytes32)": "680dd47c",
  "swapBorrowRateMode(address,uint256)": "94ba89a2",
  "swapBorrowRateMode(bytes32)": "1fe3c6f3",
  "swapToVariable(address,address)": "2520d5ee",
  "syncIndexesState(address)": "ab2b51f6",
  "syncRatesState(address)": "98c7da4e",
  "updateBridgeProtocolFee(uint256)": "3036b439",
  "updateFlashloanPremiums(uint128,uint128)": "bcb6e522",
  "withdraw(address,uint256,address)": "69328dec",
  "withdraw(bytes32)": "8e19899e"
} as const
};
