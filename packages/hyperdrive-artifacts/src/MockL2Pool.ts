export const MockL2Pool = {
  name: 'MockL2Pool' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "addressesProvider",
        "type": "address",
        "internalType": "contract IPoolAddressesProvider"
      }
    ],
    "stateMutability": "nonpayable"
  },
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
  bytecode: '0x60a06040525f805534801562000013575f80fd5b5060405162005c4e38038062005c4e833981016040819052620000369162000048565b6001600160a01b031660805262000077565b5f6020828403121562000059575f80fd5b81516001600160a01b038116811462000070575f80fd5b9392505050565b608051615b63620000eb5f395f818161043c01528181610d2f01528181610deb015281816112090152818161196d01528181611c24015281816122840152818161232c0152818161255d015281816128ac01528181612dbb015281816132bb015281816134a50152613b8d0152615b635ff3fe608060405234801561000f575f80fd5b506004361061040b575f3560e01c8063870e774411610221578063d1946dbc1161012a578063e82fec2f116100b4578063f32b9a7311610084578063f32b9a7314610c48578063f51e435b14610c62578063f7a7384014610c75578063f8119d5114610c88578063fd21ecff14610c97575f80fd5b8063e82fec2f14610bf9578063e8eda9df146106c8578063eddf1b7914610c0a578063ee3e210b14610c35575f80fd5b8063d5eed868116100fa578063d5eed86814610b93578063d65dc7a114610ba6578063dc7c0bff14610bb9578063df374c3614610bcc578063e43e88a114610be6575f80fd5b8063d1946dbc14610b3e578063d335015514610b53578063d579ea7d14610b6d578063d5ed393314610b80575f80fd5b8063ab9c4b5d116101ab578063c44b11f71161017b578063c44b11f714610ab3578063c4d66de814610af4578063cd11238214610b05578063cea9d26f14610b18578063d15e005314610b2b575f80fd5b8063ab9c4b5d14610a3a578063b1a99e2614610a4d578063bcb6e52214610a60578063bf92857c14610a73575f80fd5b806394ba89a2116101f157806394ba89a2146109db57806398c7da4e146109ee5780639cd1999614610a01578063a415bcad14610a14578063ab2b51f614610a27575f80fd5b8063870e7744146109815780638e19899e1461099b578063911a3413146109ae57806394b576de146109c8575f80fd5b80634417a58311610323578063680dd47c116102ad5780636c6f6ae11161027d5780636c6f6ae11461073f5780636fb07f961461075f57806372218d041461079a5780637a708e92146107ad5780638381995f146107c0575f80fd5b8063680dd47c146106ee57806369328dec1461070157806369a933a5146107145780636a99c03614610727575f80fd5b8063573ade81116102f3578063573ade81146106535780635a3b74b9146106665780635c9a8b1814610679578063617ba037146106c857806363c9b860146106db575f80fd5b80634417a583146105b15780634d013f03146106015780635275179714610614578063563dd61314610640575f80fd5b806328530a47116103a4578063348fde0f11610374578063348fde0f1461053e57806335ea6a7514610558578063386497fd14610578578063427da1771461058b57806342b0b77c1461059e575f80fd5b806328530a47146104eb5780632be29fa7146104fe5780632dad97d4146105185780633036b4391461052b575f80fd5b80631d2118f9116103df5780631d2118f9146104a05780631fe3c6f3146104b35780632520d5ee146104c6578063272d9072146104d9575f80fd5b8062a718a91461040f57806302c205f0146104245780630542975c14610437578063074b2e431461047b575b5f80fd5b61042261041d3660046143cd565b610caa565b005b610422610432366004614452565b610eb5565b61045e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b603a546001600160801b03165b6040516001600160801b039091168152602001610472565b6104226104ae3660046144cc565b610fc6565b6104226104c1366004614503565b6110e9565b6104226104d43660046144cc565b611109565b6039545b604051908152602001610472565b6104226104f936600461451a565b61119d565b73__$5f76d850ac254f0697945c46b13dedf9fb$__61045e565b6104dd610526366004614533565b611333565b610422610539366004614503565b611433565b73__$8adee7547342d537bcdcaeb7c748cfa5c0$__61045e565b61056b610566366004614565565b611440565b6040516104729190614580565b6104dd610586366004614565565b61164c565b610422610599366004614503565b611672565b6104226105ac3660046146fc565b6116a1565b6105f26105bf366004614565565b60408051602080820183525f918290526001600160a01b0393909316815260358352819020815192830190915254815290565b60405190518152602001610472565b61042261060f366004614503565b6117bf565b61045e610622366004614778565b61ffff165f908152603660205260409020546001600160a01b031690565b6104dd61064e366004614503565b6117ed565b6104dd610661366004614791565b611817565b6104226106743660046147d8565b611915565b6106b2610687366004614565565b6001600160a01b03165f90815260346020526040902060030154600160b81b900464ffffffffff1690565b60405164ffffffffff9091168152602001610472565b6104226106d6366004614804565b611a69565b6104226106e9366004614565565b611b15565b6104226106fc366004614852565b611b6b565b6104dd61070f36600461487b565b611b95565b610422610722366004614804565b611d48565b603a54600160801b90046001600160801b0316610488565b61075261074d36600461451a565b611dce565b60405161047291906148fd565b61048861076d366004614565565b6001600160a01b03165f90815260346020526040902060090154600160801b90046001600160801b031690565b603b54600160401b900461ffff166104dd565b6104226107bb366004614951565b611ef7565b6109746107ce366004614565565b60408051610240810182525f6102208201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810191909152506001600160a01b039081165f9081526034602090815260409182902082516102408101845281546102208201908152815260018201546001600160801b0380821694830194909452600160801b908190048416948201949094526002820154808416606083015284900483166080820152600382015480841660a083015264ffffffffff858204811660c084015261ffff600160a81b83041660e0840152600160b81b90910416610100820152600482015485166101208201526005820154851661014082015260068201548516610160820152600782015490941661018085015260088101548083166101a086015283900482166101c0850152600901548082166101e0850152919091041661020082015290565b60405161047291906149b0565b73__$283efb0a967bb30ce182c750a4aff98297$__61045e565b6104dd6109a9366004614503565b61203b565b73__$589bdd19231b917beb0692fb1391cc382d$__61045e565b6104dd6109d6366004614852565b612060565b6104226109e9366004614b0a565b612098565b6104226109fc366004614565565b612110565b610422610a0f366004614b74565b612148565b610422610a22366004614bb2565b612184565b610422610a35366004614565565b6123c3565b610422610a48366004614bed565b6123f8565b610422610a5b366004614ced565b612702565b610422610a6e366004614d2f565b6127ff565b610a86610a81366004614565565b612820565b604080519687526020870195909552938501929092526060840152608083015260a082015260c001610472565b6105f2610ac1366004614565565b60408051602080820183525f918290526001600160a01b0393909316815260348352819020815192830190915254815290565b610422610b02366004614565565b50565b610422610b133660046144cc565b6129f9565b610422610b26366004614d60565b612a5b565b6104dd610b39366004614565565b612ade565b610b46612afe565b6040516104729190614d9e565b73__$eb5517a650f544fa14961d696410147857$__61045e565b610422610b7b366004614e56565b612bf2565b610422610b8e366004614f67565b612cd6565b610422610ba1366004614503565b612eba565b6104dd610bb4366004614533565b612f18565b6104dd610bc7366004614503565b612f90565b73__$3176f8b4007c03a59557e1c69343378539$__61045e565b610422610bf4366004614565565b612fb0565b603b546001600160401b03166104dd565b6104dd610c18366004614565565b6001600160a01b03165f9081526038602052604090205460ff1690565b6104dd610c43366004614fc8565b612fff565b73__$65f2e84d14e08abb971fea4350599006ac$__61045e565b610422610c70366004615009565b613159565b610422610c83366004614503565b613267565b60405160808152602001610472565b610422610ca5366004615047565b613287565b73__$589bdd19231b917beb0692fb1391cc382d$__6383c1087d6034603660356037604051806101200160405280603b60089054906101000a900461ffff1661ffff1681526020018981526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160a01b0316815260200188151581526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d89573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dad9190615067565b6001600160a01b0390811682528b81165f908152603860209081526040918290205460ff16818501528151635eb88d3d60e01b8152825192909401937f000000000000000000000000000000000000000000000000000000000000000090931692635eb88d3d92600480830193928290030181865afa158015610e32573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e569190615067565b6001600160a01b03168152506040518663ffffffff1660e01b8152600401610e82959493929190615082565b5f6040518083038186803b158015610e98575f80fd5b505af4158015610eaa573d5f803e3d5ffd5b505050505050505050565b60405163d505accf60e01b81526001600160a01b0389169063d505accf90610eed90339030908c908a908a908a908a9060040161513a565b5f604051808303815f87803b158015610f04575f80fd5b505af1925050508015610f15575060015b506001600160a01b038087165f818152603560209081526040918290208251608081018452948d1685529084018b90528382019290925261ffff8816606084015251631913f16160e01b815273__$283efb0a967bb30ce182c750a4aff98297$__92631913f16192610f90926034926036929160040161517b565b5f6040518083038186803b158015610fa6575f80fd5b505af4158015610fb8573d5f803e3d5ffd5b505050505050505050505050565b610fce6132af565b604080518082019091526002815261373760f01b60208201526001600160a01b0383166110175760405162461bcd60e51b815260040161100e91906151cc565b60405180910390fd5b506001600160a01b0382165f90815260346020526040902060030154600160a81b900461ffff1615158061107f57505f805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e00546001600160a01b038381169116145b604051806040016040528060028152602001611c1960f11b815250906110b85760405162461bcd60e51b815260040161100e91906151cc565b506001600160a01b039182165f90815260346020526040902060070180546001600160a01b03191691909216179055565b5f806110f660368461337c565b915091506111048282612098565b505050565b6001600160a01b038083165f90815260346020908152604080832093851683526035909152908190209051631210e32760e11b815273__$5f76d850ac254f0697945c46b13dedf9fb$__92632421c64e9261116d9287908790600190600401615212565b5f6040518083038186803b158015611183575f80fd5b505af4158015611195573d5f803e3d5ffd5b505050505050565b73__$65f2e84d14e08abb971fea4350599006ac$__635d5dc313603460366037603860355f336001600160a01b03166001600160a01b031681526020019081526020015f206040518060600160405280603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611263573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112879190615067565b6001600160a01b031681526020018960ff168152506040518763ffffffff1660e01b81526004016113049695949392919095865260208087019590955260408087019490945260608601929092526080850152805160a0850152918201516001600160a01b031660c0840152015160ff1660e08201526101000190565b5f6040518083038186803b15801561131a575f80fd5b505af415801561132c573d5f803e3d5ffd5b5050505050565b5f73__$5f76d850ac254f0697945c46b13dedf9fb$__6340e95de66034603660355f336001600160a01b03166001600160a01b031681526020019081526020015f206040518060a001604052808a6001600160a01b031681526020018981526020018860028111156113a7576113a76151de565b60028111156113b8576113b86151de565b81523360208201526001604091820152516001600160e01b031960e087901b1681526113ea949392919060040161524e565b602060405180830381865af4158015611405573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061142991906152b4565b90505b9392505050565b61143b6132af565b603955565b61144861427d565b6001600160a01b038083165f9081526034602090815260409182902082516102408101845281546102208201908152815260018201546001600160801b0380821694830194909452600160801b908190048416948201949094526002820154808416606083015284900483166080820152600382015480841660a083015264ffffffffff858204811660c084015261ffff600160a81b83041660e0840152600160b81b90910416610100820152600482015485166101208201526005820154851661014082015260068201548516610160820152600782015490941661018085015260088101548083166101a086015283900482166101c0850152600901548082166101e0850152919091041661020082015261156361427d565b815181526020808301516001600160801b039081169183019190915260408084015182169083015260608084015182169083015260808084015182169083015260a08084015182169083015260c08084015164ffffffffff169083015260e08084015161ffff1690830152610120808401516001600160a01b03908116610100850152610140808601518216928501929092526101608086015182169285019290925261018080860151909116918401919091526101a0808501518316918401919091526101c0808501518316918401919091526101e090930151169181019190915292915050565b6001600160a01b0381165f90815260346020526040812061166c906133a8565b92915050565b61ffff81165f908152603660205260409020546001600160a01b0390811690601083901c1661110482826129f9565b5f6040518060e00160405280886001600160a01b03168152602001876001600160a01b0316815260200186815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093855250505061ffff8516602080840191909152603a546001600160801b03600160801b8204811660408087019190915291166060909401939093526001600160a01b038a16825260349052819020905163a1fe0e8d60e01b815291925073__$8adee7547342d537bcdcaeb7c748cfa5c0$__9163a1fe0e8d9161178a9185906004016152cb565b5f6040518083038186803b1580156117a0575f80fd5b505af41580156117b2573d5f803e3d5ffd5b5050505050505050505050565b61ffff81165f908152603660205260409020546001600160a01b0316601082901c6001166111048282611915565b5f805f806117fc60368661340a565b92509250925061180e83838333611817565b95945050505050565b5f73__$5f76d850ac254f0697945c46b13dedf9fb$__6340e95de66034603660355f876001600160a01b03166001600160a01b031681526020019081526020015f206040518060a001604052808b6001600160a01b031681526020018a815260200189600281111561188b5761188b6151de565b600281111561189c5761189c6151de565b81526001600160a01b03891660208201525f604091820152516001600160e01b031960e087901b1681526118d6949392919060040161524e565b602060405180830381865af41580156118f1573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061180e91906152b4565b73__$283efb0a967bb30ce182c750a4aff98297$__63bf697a2660346036603760355f336001600160a01b03166001600160a01b031681526020019081526020015f208787603b60089054906101000a900461ffff167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119c7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119eb9190615067565b335f908152603860205260409081902054905160e08b901b6001600160e01b031916815260048101999099526024890197909752604488019590955260648701939093526001600160a01b039182166084870152151560a486015261ffff90911660c48501521660e483015260ff166101048201526101240161116d565b6001600160a01b038083165f81815260356020908152604091829020825160808101845294891685529084018790528382019290925261ffff8416606084015251631913f16160e01b815273__$283efb0a967bb30ce182c750a4aff98297$__92631913f16192611ae3926034926036929160040161517b565b5f6040518083038186803b158015611af9575f80fd5b505af4158015611b0b573d5f803e3d5ffd5b5050505050505050565b611b1d6132af565b604051639cf5702360e01b815260346004820152603660248201526001600160a01b038216604482015273__$eb5517a650f544fa14961d696410147857$__90639cf5702390606401611304565b5f805f805f611b7b603689613466565b94509450945094509450611b0b8585338686868d8d610eb5565b5f73__$283efb0a967bb30ce182c750a4aff98297$__63186dea4460346036603760355f336001600160a01b03166001600160a01b031681526020019081526020015f206040518060c001604052808b6001600160a01b031681526020018a8152602001896001600160a01b03168152602001603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c7e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ca29190615067565b6001600160a01b039081168252335f908152603860209081526040918290205460ff90811694820194909452815160e08b901b6001600160e01b031916815260048101999099526024890197909752604488019590955260648701939093528151831660848701529381015160a486015291820151811660c4850152606082015160e485015260808201511661010484015260a0015116610124820152610144016113ea565b611d506134a3565b6001600160a01b038281165f81815260356020526040908190209051630413c86f60e01b81526034600482015260366024820152604481019190915291861660648301526084820185905260a482015261ffff821660c482015273__$3176f8b4007c03a59557e1c69343378539$__90630413c86f9060e401611ae3565b6040805160a0810182525f80825260208201819052918101829052606080820192909252608081019190915260ff82165f90815260376020908152604091829020825160a081018452815461ffff808216835262010000820481169483019490945264010000000081049093169381019390935266010000000000009091046001600160a01b03166060830152600181018054608084019190611e7090615347565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9c90615347565b8015611ee75780601f10611ebe57610100808354040283529160200191611ee7565b820191905f5260205f20905b815481529060010190602001808311611eca57829003601f168201915b5050505050815250509050919050565b611eff6132af565b73__$eb5517a650f544fa14961d696410147857$__6369fc1bdf603460366040518060e001604052808a6001600160a01b03168152602001896001600160a01b03168152602001886001600160a01b03168152602001876001600160a01b03168152602001866001600160a01b03168152602001603b60089054906101000a900461ffff1661ffff168152602001611f95608090565b61ffff168152506040518463ffffffff1660e01b8152600401611fba93929190615379565b602060405180830381865af4158015611fd5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ff991906153fa565b1561132c57603b8054600160401b900461ffff1690600861201983615429565b91906101000a81548161ffff021916908361ffff160217905550505050505050565b5f805f6120496036856135c3565b91509150612058828233611b95565b949350505050565b5f805f805f8061207160368a613612565b9450945094509450945061208b8585853386868e8e612fff565b9998505050505050505050565b6001600160a01b0382165f908152603460209081526040808320338085526035909352922073__$5f76d850ac254f0697945c46b13dedf9fb$__92632421c64e9290919086908660028111156120f0576120f06151de565b6040518663ffffffff1660e01b815260040161116d959493929190615212565b6121186132af565b6001600160a01b0381165f908152603460205260408120906121398261364d565b90506111048282855f80613818565b604051631230b2a360e21b815273__$eb5517a650f544fa14961d696410147857$__906348c2ca8c9061116d9060349086908690600401615449565b73__$5f76d850ac254f0697945c46b13dedf9fb$__631e6473f960346036603760355f876001600160a01b03166001600160a01b031681526020019081526020015f206040518061018001604052808c6001600160a01b03168152602001336001600160a01b03168152602001886001600160a01b031681526020018b81526020018a6002811115612218576122186151de565b6002811115612229576122296151de565b815261ffff808b166020808401919091526001604080850191909152603b546001600160401b0381166060860152600160401b900490921660808401528151631f94a27560e31b8152915160a0909301926001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263fca513a89260048083019391928290030181865afa1580156122ca573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906122ee9190615067565b6001600160a01b0390811682528981165f908152603860209081526040918290205460ff16818501528151635eb88d3d60e01b8152825192909401937f000000000000000000000000000000000000000000000000000000000000000090931692635eb88d3d92600480830193928290030181865afa158015612373573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123979190615067565b6001600160a01b03168152506040518663ffffffff1660e01b8152600401610e829594939291906154a0565b6123cb6132af565b6001600160a01b0381165f908152603460205260408120906123ec8261364d565b90506111048282613b33565b5f604051806101e001604052808d6001600160a01b031681526020018c8c808060200260200160405190810160405280939291908181526020018383602002808284375f920191909152505050908252506040805160208c810282810182019093528c82529283019290918d918d9182918501908490808284375f920191909152505050908252506040805160208a810282810182019093528a82529283019290918b918b9182918501908490808284375f920191909152505050908252506001600160a01b03871660208083019190915260408051601f880183900483028101830182528781529201919087908790819084018382808284375f92018290525093855250505061ffff808616602080850191909152603a546001600160801b03600160801b8204811660408088019190915291166060860152603b546001600160401b0381166080870152600160401b900490921660a08501526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660c086018190523060e0870152908b16845260388252928290205460ff16610100850152815163383e6b8b60e11b815291516101209094019363707cd7169260048082019392918290030181865afa1580156125dc573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126009190615067565b60405163fa50f29760e01b81523360048201526001600160a01b03919091169063fa50f29790602401602060405180830381865afa158015612644573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061266891906153fa565b151590526001600160a01b0386165f9081526035602052604090819020905163173931f560e11b815291925073__$8adee7547342d537bcdcaeb7c748cfa5c0$__91632e7263ea916126c891603491603691603791908890600401615606565b5f6040518083038186803b1580156126de575f80fd5b505af41580156126f0573d5f803e3d5ffd5b50505050505050505050505050505050565b61270a6132af565b6001600160a01b0382165f90815260346020526040902060030154600160a81b900461ffff1615158061277157505f805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e00546001600160a01b038381169116145b604051806040016040528060028152602001611c1960f11b815250906127aa5760405162461bcd60e51b815260040161100e91906151cc565b50604051636ae4381360e01b8152603460048201526001600160a01b038316602482015264ffffffffff8216604482015273__$eb5517a650f544fa14961d696410147857$__90636ae438139060640161116d565b6128076132af565b6001600160801b03908116600160801b02911617603a55565b604080516001600160a01b038381165f8181526035602090815285822060c0860187525460a086019081528552603b54600160401b900461ffff1681860152848601929092528451631f94a27560e31b8152945190948594859485948594859473__$eb5517a650f544fa14961d696410147857$__946326ec273f9460349460369460379460608501937f0000000000000000000000000000000000000000000000000000000000000000169263fca513a8926004808401938290030181865afa1580156128f0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129149190615067565b6001600160a01b0390811682528e81165f908152603860209081526040918290205460ff90811694820194909452815160e08a901b6001600160e01b0319168152600481019890985260248801969096526044870194909452825151606487015293820151608486015291810151831660a4850152606081015190921660c48401526080909101511660e48201526101040160c060405180830381865af41580156129c1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129e5919061577e565b949c939b5091995097509550909350915050565b6001600160a01b038281165f81815260346020526040908190209051631a5cfdd160e21b815260048101919091526024810191909152908216604482015273__$5f76d850ac254f0697945c46b13dedf9fb$__90636973f7449060640161116d565b612a63613b8b565b6040516343d9915960e11b81526001600160a01b038085166004830152831660248201526044810182905273__$eb5517a650f544fa14961d696410147857$__906387b322b2906064015f6040518083038186803b158015612ac3575f80fd5b505af4158015612ad5573d5f803e3d5ffd5b50505050505050565b6001600160a01b0381165f90815260346020526040812061166c90613cab565b603b54606090600160401b900461ffff165f80826001600160401b03811115612b2957612b29614dea565b604051908082528060200260200182016040528015612b52578160200160208202803683370190505b5090505f5b83811015612be8575f818152603660205260409020546001600160a01b031615612bd2575f818152603660205260409020546001600160a01b031682612b9d85846157c4565b81518110612bad57612bad6157d7565b60200260200101906001600160a01b031690816001600160a01b031681525050612be0565b82612bdc816157eb565b9350505b600101612b57565b5091038152919050565b612bfa6132af565b604080518082019091526002815261189b60f11b602082015260ff8316612c345760405162461bcd60e51b815260040161100e91906151cc565b5060ff82165f9081526037602090815260409182902083518154928501519385015160608601516001600160a01b03166601000000000000026601000000000000600160d01b031961ffff9283166401000000000216640100000000600160d01b0319968316620100000263ffffffff1990961692909316919091179390931793909316929092171781556080820151829190600182019061132c9082615847565b6001600160a01b038681165f908152603460209081526040918290206004015482518084019093526002835261313160f01b918301919091529091163314612d315760405162461bcd60e51b815260040161100e91906151cc565b5073__$283efb0a967bb30ce182c750a4aff98297$__638a5dadd160346036603760356040518061012001604052808d6001600160a01b031681526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a8152602001898152602001888152602001603b60089054906101000a900461ffff1661ffff1681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015612e15573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612e399190615067565b6001600160a01b0390811682528d165f908152603860209081526040918290205460ff16920191909152516001600160e01b031960e088901b168152612e86959493929190600401615902565b5f6040518083038186803b158015612e9c575f80fd5b505af4158015612eae573d5f803e3d5ffd5b50505050505050505050565b5f805f80612f0360368661ffff8181165f9081526020939093526040909220546001600160a01b0316926001600160801b03601083901c169260ff609084901c169260981c1690565b935093509350935061132c8484848433612184565b5f612f216134a3565b6001600160a01b0384165f818152603460205260409081902060395491516311ce864960e31b8152600481019190915260248101929092526044820185905260648201849052608482015273__$3176f8b4007c03a59557e1c69343378539$__90638e7432489060a4016113ea565b5f805f80612f9f60368661340a565b92509250925061180e838383611333565b612fb86132af565b604051631e3b414560e01b8152603460048201526001600160a01b038216602482015273__$eb5517a650f544fa14961d696410147857$__90631e3b414590604401611304565b60405163d505accf60e01b81525f906001600160a01b038a169063d505accf9061303990339030908d908b908b908b908b9060040161513a565b5f604051808303815f87803b158015613050575f80fd5b505af1925050508015613061575060015b505f6040518060a001604052808b6001600160a01b031681526020018a8152602001896002811115613095576130956151de565b60028111156130a6576130a66151de565b81526001600160a01b03891660208083018290525f6040938401819052918252603590528190209051632074aef360e11b815291925073__$5f76d850ac254f0697945c46b13dedf9fb$__916340e95de69161310c91603491603691879060040161524e565b602060405180830381865af4158015613127573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061314b91906152b4565b9a9950505050505050505050565b6131616132af565b604080518082019091526002815261373760f01b60208201526001600160a01b0383166131a15760405162461bcd60e51b815260040161100e91906151cc565b506001600160a01b0382165f90815260346020526040902060030154600160a81b900461ffff1615158061320957505f805260366020527f4cb2b152c1b54ce671907a93c300fd5aa72383a9d4ec19a81e3333632ae92e00546001600160a01b038381169116145b604051806040016040528060028152602001611c1960f11b815250906132425760405162461bcd60e51b815260040161100e91906151cc565b506001600160a01b0382165f9081526034602052604090208135815581905b50505050565b5f805f613275603685613d01565b92509250925061326183833384611a69565b5f805f805f61329860368888613d3b565b94509450945094509450612ad58585858585610caa565b336001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663631adfca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613315573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906133399190615067565b6001600160a01b03161460405180604001604052806002815260200161031360f41b81525090610b025760405162461bcd60e51b815260040161100e91906151cc565b61ffff81165f908152602083905260409020546001600160a01b0316601082901c60ff165b9250929050565b60038101545f90600160801b900464ffffffffff164281036133d6575050600201546001600160801b031690565b600283015461142c906001600160801b03808216916133fe91600160801b9091041684613dc0565b90613dcc565b50919050565b5f808061ffff8416601085901c6001600160801b0316609086901c60ff166002600160801b0319820161343c575f1991505b61ffff9092165f908152602088905260409020546001600160a01b03169450925090509250925092565b5f8080808060a086901c63ffffffff1660c087901c60ff1682808061348b8c8c613d01565b919e909d50909b509499509297509295505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156134ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906135239190615067565b604051633933006760e11b81523360048201526001600160a01b03919091169063726600ce90602401602060405180830381865afa158015613567573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061358b91906153fa565b604051806040016040528060018152602001601b60f91b81525090610b025760405162461bcd60e51b815260040161100e91906151cc565b5f8061ffff8316601084901c6001600160801b03166002600160801b031981016135eb57505f195b61ffff919091165f9081526020959095526040909420546001600160a01b03169492505050565b5f805f805f805f805f806136268c8c61340a565b919e909d50909b609881901c63ffffffff169b5060b81c60ff169950975050505050505050565b6136556142ff565b61365d6142ff565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546001600160801b03808216610100840181905260e084015260028501548082166101408501819052610120850152600160801b928390048216610160850152829004166101808301526004808501546001600160a01b039081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff166102408401526040805163b1bf962d60e01b8152905163b1bf962d928281019260209291908290030181865afa15801561374c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061377091906152b4565b8160200181815250815f0181815250508061020001516001600160a01b031663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa1580156137c1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906137e591906159a9565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b61383f60405180608001604052805f81526020015f81526020015f81526020015f81525090565b610140850151602086015161385391613dcc565b60608281019182526007880154604080516101408101825260088b01546001600160801b03600160801b918290048116835260208084018b90528385018a905260c08d810151978501979097529651608084015260a0808d0151908401526101a08c0151958301959095526001600160a01b038a811660e0840152835196870184528c5496879052600160fc1b909616151561010083015260098c01540490931661012084015251637b424dcf60e11b815292169163f6849b9e9161391a916004016159dc565b606060405180830381865afa158015613935573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906139599190615a5e565b6040840152602083015280825261396f90613e0e565b6001870180546001600160801b03928316600160801b029216919091179055602081015161399c90613e0e565b6003870180546001600160801b0319166001600160801b039290921691909117905560408101516139cc90613e0e565b6002870180546001600160801b03928316600160801b029216919091179055604080516020810190915286548152613a0a9051600160fc1b16151590565b15613abf578215613a6757613a1e83613e0e565b600987018054601090613a42908490600160801b90046001600160801b0316615a89565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b8115613abf57613a7682613e0e565b600987018054601090613a9a908490600160801b90046001600160801b0316615ab0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b80516020808301516040808501516101008a01516101408b015183519687529486019390935290840152606083015260808201526001600160a01b038516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b600382015464ffffffffff428116600160801b9092041603613b53575050565b613b5d8282613e7a565b613b678282613f57565b50600301805464ffffffffff60801b1916600160801b4264ffffffffff1602179055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa158015613be7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190613c0b9190615067565b604051637be53ca160e01b81523360048201526001600160a01b039190911690637be53ca190602401602060405180830381865afa158015613c4f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190613c7391906153fa565b604051806040016040528060018152602001603160f81b81525090610b025760405162461bcd60e51b815260040161100e91906151cc565b60038101545f90600160801b900464ffffffffff16428103613cd9575050600101546001600160801b031690565b600183015461142c906001600160801b03808216916133fe91600160801b90910416846140bb565b61ffff8181165f908152602084905260409020546001600160a01b031690601083901c6001600160801b031690609084901c169250925092565b5f8080808061ffff87811690601089901c16602089901c6001600160a01b03166001600160801b03891660808a901c6001166002600160801b03198201613d81575f1991505b61ffff9485165f90815260209d909d526040808e2054949095168d5293909b20546001600160a01b039283169c92169a90995097509095509350505050565b5f61142c8383426140f7565b5f81156b019d971e4fe8401e740000001983900484111517613dec575f80fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b5f6001600160801b03821115613e765760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b606482015260840161100e565b5090565b61016081015115613ee8575f613e9a8261016001518361024001516140bb565b9050613eb38260e0015182613dcc90919063ffffffff16565b6101008301819052613ec490613e0e565b6001840180546001600160801b0319166001600160801b0392909216919091179055505b805115613f53575f613f04826101800151836102400151613dc0565b9050613f1e82610120015182613dcc90919063ffffffff16565b6101408301819052613f2f90613e0e565b6002840180546001600160801b0319166001600160801b0392909216919091179055505b5050565b613f8a6040518060c001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b816101a001515f03613f9b57505050565b6101208201518251613fac91613dcc565b60208201526101408201518251613fc291613dcc565b60408201526060820151610260830151610240840151613fea92919064ffffffffff166140f7565b606082018190526040830151613fff91613dcc565b80825260208201516080840151604084015161401b9190615ad0565b61402591906157c4565b61402f91906157c4565b608082018190526101a0830151614046919061421c565b60a0820181905215611104576140766140718361010001518360a0015161424090919063ffffffff16565b613e0e565b6008840180545f906140929084906001600160801b0316615a89565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b5f806140ce64ffffffffff8416426157c4565b6140d89085615ae3565b6301e1338090049050612058816b033b2e3c9fd0803ce8000000615ad0565b5f8061410a64ffffffffff8516846157c4565b9050805f03614128576b033b2e3c9fd0803ce800000091505061142c565b5f1981015f80806002851161413d575f614142565b600285035b925066038882915c40006141568a80613dcc565b8161416357614163615afa565b0491506301e13380614175838b613dcc565b8161418257614182615afa565b0490505f826141918688615ae3565b61419b9190615ae3565b6002900490505f82856141ae888a615ae3565b6141b89190615ae3565b6141c29190615ae3565b60069004905080826301e133806141d98a8f615ae3565b6141e39190615b0e565b6141f9906b033b2e3c9fd0803ce8000000615ad0565b6142039190615ad0565b61420d9190615ad0565b9b9a5050505050505050505050565b5f81156113881983900484111517614232575f80fd5b506127109102611388010490565b5f81156b033b2e3c9fd0803ce800000060028404190484111715614262575f80fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b60408051610200810182525f6101e08201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081019190915290565b6040518061028001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f815260200161437460405180602001604052805f81525090565b81525f6020820181905260408201819052606082018190526080820181905260a09091015290565b6001600160a01b0381168114610b02575f80fd5b80356143bb8161439c565b919050565b8015158114610b02575f80fd5b5f805f805f60a086880312156143e1575f80fd5b85356143ec8161439c565b945060208601356143fc8161439c565b9350604086013561440c8161439c565b9250606086013591506080860135614423816143c0565b809150509295509295909350565b803561ffff811681146143bb575f80fd5b803560ff811681146143bb575f80fd5b5f805f805f805f80610100898b03121561446a575f80fd5b88356144758161439c565b975060208901359650604089013561448c8161439c565b955061449a60608a01614431565b9450608089013593506144af60a08a01614442565b925060c0890135915060e089013590509295985092959890939650565b5f80604083850312156144dd575f80fd5b82356144e88161439c565b915060208301356144f88161439c565b809150509250929050565b5f60208284031215614513575f80fd5b5035919050565b5f6020828403121561452a575f80fd5b61142c82614442565b5f805f60608486031215614545575f80fd5b83356145508161439c565b95602085013595506040909401359392505050565b5f60208284031215614575575f80fd5b813561142c8161439c565b81515181526101e0810160208301516145a460208401826001600160801b03169052565b5060408301516145bf60408401826001600160801b03169052565b5060608301516145da60608401826001600160801b03169052565b5060808301516145f560808401826001600160801b03169052565b5060a083015161461060a08401826001600160801b03169052565b5060c083015161462960c084018264ffffffffff169052565b5060e083015161463f60e084018261ffff169052565b50610100838101516001600160a01b039081169184019190915261012080850151821690840152610140808501518216908401526101608085015190911690830152610180808401516001600160801b03908116918401919091526101a0808501518216908401526101c08085015191821681850152905b505092915050565b5f8083601f8401126146cf575f80fd5b5081356001600160401b038111156146e5575f80fd5b6020830191508360208285010111156133a1575f80fd5b5f805f805f8060a08789031215614711575f80fd5b863561471c8161439c565b9550602087013561472c8161439c565b94506040870135935060608701356001600160401b0381111561474d575f80fd5b61475989828a016146bf565b909450925061476c905060808801614431565b90509295509295509295565b5f60208284031215614788575f80fd5b61142c82614431565b5f805f80608085870312156147a4575f80fd5b84356147af8161439c565b9350602085013592506040850135915060608501356147cd8161439c565b939692955090935050565b5f80604083850312156147e9575f80fd5b82356147f48161439c565b915060208301356144f8816143c0565b5f805f8060808587031215614817575f80fd5b84356148228161439c565b93506020850135925060408501356148398161439c565b915061484760608601614431565b905092959194509250565b5f805f60608486031215614864575f80fd5b505081359360208301359350604090920135919050565b5f805f6060848603121561488d575f80fd5b83356148988161439c565b92506020840135915060408401356148af8161439c565b809150509250925092565b5f81518084525f5b818110156148de576020818501810151868301820152016148c2565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f61ffff8084511660208401528060208501511660408401528060408501511660608401525060018060a01b036060840151166080830152608083015160a08084015261205860c08401826148ba565b5f805f805f60a08688031215614965575f80fd5b85356149708161439c565b945060208601356149808161439c565b935060408601356149908161439c565b925060608601356149a08161439c565b915060808601356144238161439c565b8151518152610220810160208301516149d460208401826001600160801b03169052565b5060408301516149ef60408401826001600160801b03169052565b506060830151614a0a60608401826001600160801b03169052565b506080830151614a2560808401826001600160801b03169052565b5060a0830151614a4060a08401826001600160801b03169052565b5060c0830151614a5960c084018264ffffffffff169052565b5060e0830151614a6f60e084018261ffff169052565b506101008381015164ffffffffff1690830152610120808401516001600160a01b0390811691840191909152610140808501518216908401526101608085015182169084015261018080850151909116908301526101a0808401516001600160801b03908116918401919091526101c0808501518216908401526101e0808501518216908401526102008085015191821681850152906146b7565b5f8060408385031215614b1b575f80fd5b8235614b268161439c565b946020939093013593505050565b5f8083601f840112614b44575f80fd5b5081356001600160401b03811115614b5a575f80fd5b6020830191508360208260051b85010111156133a1575f80fd5b5f8060208385031215614b85575f80fd5b82356001600160401b03811115614b9a575f80fd5b614ba685828601614b34565b90969095509350505050565b5f805f805f60a08688031215614bc6575f80fd5b8535614bd18161439c565b945060208601359350604086013592506149a060608701614431565b5f805f805f805f805f805f60e08c8e031215614c07575f80fd5b614c108c6143b0565b9a506001600160401b038060208e01351115614c2a575f80fd5b614c3a8e60208f01358f01614b34565b909b50995060408d0135811015614c4f575f80fd5b614c5f8e60408f01358f01614b34565b909950975060608d0135811015614c74575f80fd5b614c848e60608f01358f01614b34565b9097509550614c9560808e016143b0565b94508060a08e01351115614ca7575f80fd5b50614cb88d60a08e01358e016146bf565b9093509150614cc960c08d01614431565b90509295989b509295989b9093969950565b64ffffffffff81168114610b02575f80fd5b5f8060408385031215614cfe575f80fd5b8235614d098161439c565b915060208301356144f881614cdb565b80356001600160801b03811681146143bb575f80fd5b5f8060408385031215614d40575f80fd5b614d4983614d19565b9150614d5760208401614d19565b90509250929050565b5f805f60608486031215614d72575f80fd5b8335614d7d8161439c565b92506020840135614d8d8161439c565b929592945050506040919091013590565b602080825282518282018190525f9190848201906040850190845b81811015614dde5783516001600160a01b031683529284019291840191600101614db9565b50909695505050505050565b634e487b7160e01b5f52604160045260245ffd5b60405160a081016001600160401b0381118282101715614e2057614e20614dea565b60405290565b604051601f8201601f191681016001600160401b0381118282101715614e4e57614e4e614dea565b604052919050565b5f8060408385031215614e67575f80fd5b614e7083614442565b91506020808401356001600160401b0380821115614e8c575f80fd5b9085019060a08288031215614e9f575f80fd5b614ea7614dfe565b614eb083614431565b8152614ebd848401614431565b84820152614ecd60408401614431565b60408201526060830135614ee08161439c565b6060820152608083013582811115614ef6575f80fd5b80840193505087601f840112614f0a575f80fd5b823582811115614f1c57614f1c614dea565b614f2e601f8201601f19168601614e26565b92508083528885828601011115614f43575f80fd5b80858501868501375f85828501015250816080820152809450505050509250929050565b5f805f805f8060c08789031215614f7c575f80fd5b8635614f878161439c565b95506020870135614f978161439c565b94506040870135614fa78161439c565b959894975094956060810135955060808101359460a0909101359350915050565b5f805f805f805f80610100898b031215614fe0575f80fd5b8835614feb8161439c565b97506020890135965060408901359550606089013561449a8161439c565b5f80828403604081121561501b575f80fd5b83356150268161439c565b92506020601f1982011215615039575f80fd5b506020830190509250929050565b5f8060408385031215615058575f80fd5b50508035926020909101359150565b5f60208284031215615077575f80fd5b815161142c8161439c565b5f6101a08201905086825285602083015284604083015283606083015282516080830152602083015160a0830152604083015160018060a01b0380821660c08501528060608601511660e0850152505060808301516101006150ee818501836001600160a01b03169052565b60a0850151151561012085015260c08501516001600160a01b0390811661014086015260e086015160ff166101608601529085015190811661018085015290505b509695505050505050565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b93845260208085019390935260408085019290925280516001600160a01b039081166060808701919091529382015160808601529181015190911660a0840152015161ffff1660c082015260e00190565b602081525f61142c60208301846148ba565b634e487b7160e01b5f52602160045260245ffd5b6003811061520e57634e487b7160e01b5f52602160045260245ffd5b9052565b858152602081018590526001600160a01b0384811660408301528316606082015260a0810161524460808301846151f2565b9695505050505050565b8481526020808201859052604080830185905283516001600160a01b0390811660608501529184015160808401528301516101008301919061529360a08501826151f2565b5060608401511660c0830152608090920151151560e0909101529392505050565b5f602082840312156152c4575f80fd5b5051919050565b828152604060208201525f60018060a01b038084511660408401528060208501511660608401525060408301516080830152606083015160e060a08401526153176101208401826148ba565b905061ffff60808501511660c084015260a084015160e084015260c0840151610100840152809150509392505050565b600181811c9082168061535b57607f821691505b60208210810361340457634e487b7160e01b5f52602260045260245ffd5b5f6101208201905084825283602083015260018060a01b038084511660408401528060208501511660608401528060408501511660808401528060608501511660a08401528060808501511660c08401525060a08301516153e060e084018261ffff169052565b5060c083015161ffff811661010084015250949350505050565b5f6020828403121561540a575f80fd5b815161142c816143c0565b634e487b7160e01b5f52601160045260245ffd5b5f61ffff80831681810361543f5761543f615415565b6001019392505050565b838152604060208083018290529082018390525f90849060608401835b868110156154945783356154798161439c565b6001600160a01b031682529282019290820190600101615466565b50979650505050505050565b85815260208101859052604081018490526060810183905281516001600160a01b03166080820152610200810160208301516001600160a01b03811660a08401525060408301516001600160a01b03811660c084015250606083015160e08301526080830151610100615515818501836151f2565b60a0850151915061012061552e8186018461ffff169052565b60c086015192506101406155458187018515159052565b60e08701516101608781019190915292870151610180870152908601516001600160a01b039081166101a08701529086015160ff166101c0860152908501519081166101e0850152905061512f565b5f815180845260208085019450602084015f5b838110156155cc5781516001600160a01b0316875295820195908201906001016155a7565b509495945050505050565b5f815180845260208085019450602084015f5b838110156155cc578151875295820195908201906001016155ea565b85815284602082015283604082015282606082015260a0608082015261563860a0820183516001600160a01b03169052565b5f60208301516101e08060c0850152615655610280850183615594565b91506040850151609f19808685030160e087015261567384836155d7565b93506060870151915061010081878603018188015261569285846155d7565b9450608088015192506101206156b2818901856001600160a01b03169052565b60a089015193506101408389880301818a01526156cf87866148ba565b965060c08a0151945061016093506156ec848a018661ffff169052565b60e08a0151945061018085818b0152838b015195506101a0935085848b0152828b015195506101c0925085838b0152818b0151878b0152848b0151965061573f6102008b01886001600160a01b03169052565b8a01516001600160a01b0381166102208b0152955061575b9050565b9088015160ff166102408801528701518015156102608801529250615494915050565b5f805f805f8060c08789031215615793575f80fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b8181038181111561166c5761166c615415565b634e487b7160e01b5f52603260045260245ffd5b5f600182016157fc576157fc615415565b5060010190565b601f82111561110457805f5260205f20601f840160051c810160208510156158285750805b601f840160051c820191505b8181101561132c575f8155600101615834565b81516001600160401b0381111561586057615860614dea565b6158748161586e8454615347565b84615803565b602080601f8311600181146158a7575f84156158905750858301515b5f19600386901b1c1916600185901b178555611195565b5f85815260208120601f198616915b828110156158d5578886015182559484019460019091019084016158b6565b50858210156158f257878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b858152602080820186905260408083018690526060830185905283516001600160a01b03908116608085015291840151821660a084015283015190811660c08301526101a082019050606083015160e08301526080830151610100818185015260a085015161012085015260c085015161014085015260e085015191506159956101608501836001600160a01b03169052565b84015160ff8116610180850152905061512f565b5f805f80608085870312156159bc575f80fd5b84519350602085015192506040850151915060608501516147cd81614cdb565b5f61014082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151615a3e60e08401826001600160a01b03169052565b506101008381015180151584830152505061012092830151919092015290565b5f805f60608486031215615a70575f80fd5b8351925060208401519150604084015190509250925092565b6001600160801b03818116838216019080821115615aa957615aa9615415565b5092915050565b6001600160801b03828116828216039080821115615aa957615aa9615415565b8082018082111561166c5761166c615415565b808202811582820484141761166c5761166c615415565b634e487b7160e01b5f52601260045260245ffd5b5f82615b2857634e487b7160e01b5f52601260045260245ffd5b50049056fea26469706673582212204793bf1919cd1991d18e25326db47014c7d5e4809660a16fa3e2bc0504f0939f64736f6c63430008160033' as `0x${string}`,
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
