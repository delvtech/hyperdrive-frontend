export const LpFairnessTest = 
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
      "inputs": [],
      "name": "WhaleBalanceExceeded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "WhaleIsContract",
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
          "name": "sharePrice",
          "type": "uint256"
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
          "name": "sharePrice",
          "type": "uint256"
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
          "name": "sharePrice",
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
          "name": "baseFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "hyperdrive",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "contract IERC20",
              "name": "baseToken",
              "type": "address"
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
                  "name": "governance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "oracleSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updateGap",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "config",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "linkerFactory",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "linkerCodeHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32[]",
          "name": "extraData",
          "type": "bytes32[]"
        }
      ],
      "name": "Deployed",
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
          "name": "sharePrice",
          "type": "uint256"
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
          "name": "sharePrice",
          "type": "uint256"
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
          "name": "sharePrice",
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
          "indexed": true,
          "internalType": "address",
          "name": "provider",
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
          "name": "sharePrice",
          "type": "uint256"
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
          "name": "sharePrice",
          "type": "uint256"
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
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "log",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "log_address",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "val",
          "type": "uint256[]"
        }
      ],
      "name": "log_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "int256[]",
          "name": "val",
          "type": "int256[]"
        }
      ],
      "name": "log_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "val",
          "type": "address[]"
        }
      ],
      "name": "log_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "log_bytes",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "log_bytes32",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "name": "log_int",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "val",
          "type": "address"
        }
      ],
      "name": "log_named_address",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "val",
          "type": "uint256[]"
        }
      ],
      "name": "log_named_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "int256[]",
          "name": "val",
          "type": "int256[]"
        }
      ],
      "name": "log_named_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "val",
          "type": "address[]"
        }
      ],
      "name": "log_named_array",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "val",
          "type": "bytes"
        }
      ],
      "name": "log_named_bytes",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "val",
          "type": "bytes32"
        }
      ],
      "name": "log_named_bytes32",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "val",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "decimals",
          "type": "uint256"
        }
      ],
      "name": "log_named_decimal_int",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "decimals",
          "type": "uint256"
        }
      ],
      "name": "log_named_decimal_uint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "val",
          "type": "int256"
        }
      ],
      "name": "log_named_int",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "val",
          "type": "string"
        }
      ],
      "name": "log_named_string",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        }
      ],
      "name": "log_named_uint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "log_string",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "log_uint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "logs",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "IS_TEST",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "_delta",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "_targetValue",
          "type": "uint256"
        }
      ],
      "name": "assertWithDelta",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "createUser",
      "outputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "excludeArtifacts",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "excludedArtifacts_",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "excludeContracts",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "excludedContracts_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "excludeSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "excludedSenders_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "failed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setUp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetArtifactSelectors",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "selectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct StdInvariant.FuzzSelector[]",
          "name": "targetedArtifactSelectors_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetArtifacts",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "targetedArtifacts_",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetContracts",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "targetedContracts_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetSelectors",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "selectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct StdInvariant.FuzzSelector[]",
          "name": "targetedSelectors_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "targetedSenders_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "variableRateParam",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tradeSizeParam",
          "type": "uint256"
        }
      ],
      "name": "test_lp_fairness_long_long_lp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "variableRateParam",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tradeSizeParam",
          "type": "uint256"
        }
      ],
      "name": "test_lp_fairness_long_lp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "variableRateParam",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tradeSizeParam",
          "type": "uint256"
        }
      ],
      "name": "test_lp_fairness_long_short_lp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "variableRateParam",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "tradeSizeParam",
          "type": "uint256"
        }
      ],
      "name": "test_lp_fairness_short_long_lp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "variableRateParam",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tradeSizeParam",
          "type": "uint256"
        }
      ],
      "name": "test_lp_fairness_short_lp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "variableRateParam",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tradeSizeParam",
          "type": "uint256"
        }
      ],
      "name": "test_lp_fairness_short_short_lp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "whale",
          "type": "address"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "whaleTransfer",
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
          "internalType": "address",
          "name": "whale",
          "type": "address"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "whaleTransfer",
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
    "object": "0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000194565b602990620000c09082620002f8565b5060405163f877cb1960e01b815260206004820152600e60248201526d11d3d154931257d49410d7d5549360921b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015a919081019062000194565b602a90620001699082620002f8565b503480156200017757600080fd5b50620003c4565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a857600080fd5b82516001600160401b0380821115620001c057600080fd5b818501915085601f830112620001d557600080fd5b815181811115620001ea57620001ea6200017e565b604051601f8201601f19908116603f011681019083821181831017156200021557620002156200017e565b8160405282815288868487010111156200022e57600080fd5b600093505b8284101562000252578484018601518185018701529285019262000233565b600086848301015280965050505050505092915050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f357600081815260208120601f850160051c81016020861015620002ce5750805b601f850160051c820191505b81811015620002ef57828155600101620002da565b5050505b505050565b81516001600160401b038111156200031457620003146200017e565b6200032c8162000325845462000269565b84620002a5565b602080601f8311600181146200036457600084156200034b5750858301515b600019600386901b1c1916600185901b178555620002ef565b600085815260208120601f198616915b82811015620003955788860151825594840194600190910190840162000374565b5085821015620003b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6201203f80620003d56000396000f3fe60806040523480156200001157600080fd5b5060043610620001515760003560e01c8063507ffba511620000c7578063916a17c61162000086578063916a17c614620002bc578063ab75e7c314620002c6578063b5508aa914620002dd578063ba414fa614620002e7578063e20c9f711462000302578063fa7626d4146200030c57600080fd5b8063507ffba5146200022c57806351cf9a79146200025c57806366d9a9a014620002735780637949c523146200028c57806385226c8114620002a357600080fd5b80633e5e0d2611620001145780633e5e0d2614620001d35780633e5e3c2314620001ea5780633f7286f414620001f457806342aa13ae14620001fe57806348af0581146200021557600080fd5b80630a9254e414620001565780630ce4e17414620001625780631071676014620001795780631ed7831c14620001a35780633510924914620001bc575b600080fd5b620001606200031a565b005b62000160620001733660046200594f565b6200035f565b620001906200018a36600462005988565b620004d6565b6040519081526020015b60405180910390f35b620001ad62000560565b6040516200019a9190620059da565b62000160620001cd3660046200594f565b620005c4565b62000190620001e436600462005a29565b6200076e565b620001ad620009d1565b620001ad62000a33565b620001606200020f3660046200594f565b62000a95565b62000160620002263660046200594f565b62000c07565b620002436200023d36600462005aeb565b62000d9d565b6040516001600160a01b0390911681526020016200019a565b620001606200026d3660046200594f565b62000eb3565b6200027d62001045565b6040516200019a919062005ba5565b620001606200029d3660046200594f565b62001138565b620002ad620012aa565b6040516200019a919062005cb0565b6200027d62001384565b62000160620002d736600462005d16565b6200146e565b620002ad620017af565b620002f162001889565b60405190151581526020016200019a565b620001ad620019b6565b600754620002f19060ff1681565b6200032462001a18565b60006200033866b1a2bc2ec5000062001e8f565b620f424060408201526022549091506200035c906001600160a01b03168262001f55565b50565b620003758260006722b1c8c1227a0000620020c3565b9150620003a366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b839190620020c3565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620003db906001600160a01b031684846200214f565b601e549091508590600090620003fb906001600160a01b031683620021d8565b50601d549091506a0422ca8b0a00a4250000009060009062000427906001600160a01b0316836200226a565b9050620004396301e1338089620022fb565b60006200044682620023d5565b601d5490915060009062000464906001600160a01b03168462002972565b509050620004768183612710620029e6565b601e546200048f906001600160a01b0316868862002b73565b506200049b87620023d5565b601c54909250620004b6906001600160a01b03168862002972565b509050620004c88183612710620029e6565b505050505050505050505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200055691869186918216906370a0823190602401602060405180830381865afa15801562000529573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200054f919062005d6f565b856200076e565b90505b9392505050565b60606014805480602002602001604051908101604052809291908181526020018280548015620005ba57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116200059b575b5050505050905090565b620005da8260006722b1c8c1227a0000620020c3565b9150620005ff66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c5490915082906a0422ca8b0a00a4250000009060009062000635906001600160a01b031667016345785d8a0000846200214f565b9050600062000650856a0422ca8b0a00a42500000062005d59565b601e549091506200066b906001600160a01b031682620021d8565b506200068a90506200068360026301e1338062005d9f565b85620022fb565b601e548590620006a4906001600160a01b031682620021d8565b5050601d546a0422ca8b0a00a42500000090600090620006ce906001600160a01b0316836200226a565b9050620006ec620006e560026301e1338062005d9f565b88620022fb565b6000620006f982620023d5565b601d5490915060009062000717906001600160a01b03168462002972565b509050620007298183612710620029e6565b6200073487620023d5565b601c549092506200074f906001600160a01b03168862002972565b509050620007618183612710620029e6565b5050505050505050505050565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa158015620007ba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007e0919062005d6f565b905080841115620008045760405163188c93a560e31b815260040160405180910390fd5b60008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200085257600080fd5b505af115801562000867573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038916600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b158015620008bc57600080fd5b505af1158015620008d1573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a7640000602482015260008051602062011edb833981519152925063c88a5e6d9150604401600060405180830381600087803b1580156200093457600080fd5b505af115801562000949573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af11580156200099d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009c3919062005db6565b50839150505b949350505050565b60606016805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b60606015805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62000aab8260006722b1c8c1227a0000620020c3565b915062000ad066038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c54909150829067016345785d8a0000906a0422ca8b0a00a4250000009060009062000b08906001600160a01b031684846200214f565b9050600062000b23866a0422ca8b0a00a42500000062005d59565b601e5490915062000b3e906001600160a01b03168262002be7565b5062000b5d905062000b5660026301e1338062005d9f565b86620022fb565b601e54869062000b77906001600160a01b03168262002be7565b5050601d546a0422ca8b0a00a4250000009060009062000ba1906001600160a01b0316836200226a565b905062000bbf62000bb860026301e1338062005d9f565b89620022fb565b600062000bcc82620023d5565b601d5490915060009062000bea906001600160a01b03168462002972565b50905062000bfc8183612710620029e6565b6200049b87620023d5565b62000c1d8260006722b1c8c1227a000062002c6f565b915062000c4266038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c549091506a0422ca8b0a00a4250000009060009062000c76906001600160a01b031667016345785d8a0000846200214f565b9050600062000c91846a0422ca8b0a00a42500000062005d59565b601e5490915062000cac906001600160a01b031682620021d8565b5062000cc4905062000b5660026301e1338062005d9f565b601e5462000cdc906001600160a01b03168562002be7565b5050601d546a0422ca8b0a00a4250000009060009062000d06906001600160a01b0316836200226a565b905062000d1d620006e560026301e1338062005d9f565b600062000d2a82620023d5565b601d5490915060009062000d48906001600160a01b03168462002972565b50905062000d5a8183612710620029e6565b62000d6586620023d5565b601c5490925062000d80906001600160a01b03168762002972565b50905062000d928183612710620029e6565b505050505050505050565b60008160405160200162000db2919062005dda565b60408051601f198184030181529082905280516020909101206318caf8e360e31b8252915060008051602062011edb8339815191529063c657c7189062000e00908490869060040162005def565b600060405180830381600087803b15801562000e1b57600080fd5b505af115801562000e30573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab2400000602482015260008051602062011edb833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000e9557600080fd5b505af115801562000eaa573d6000803e3d6000fd5b50505050919050565b62000ec98260006722b1c8c1227a0000620020c3565b915062000eee66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c5490915082906a0422ca8b0a00a4250000009060009062000f24906001600160a01b031667016345785d8a0000846200214f565b9050600062000f3f856a0422ca8b0a00a42500000062005d59565b601e5490915062000f5a906001600160a01b03168262002be7565b5062000f7290506200068360026301e1338062005d9f565b601e54859062000f8c906001600160a01b031682620021d8565b5050601d546a0422ca8b0a00a4250000009060009062000fb6906001600160a01b0316836200226a565b905062000fcd620006e560026301e1338062005d9f565b600062000fda82620023d5565b601d5490915060009062000ff8906001600160a01b03168462002972565b5090506200100a8183612710620029e6565b6200101587620023d5565b601c5490925060009062001033906001600160a01b03168962002972565b509050620004c88184612710620029e6565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200111657602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620010d75790505b5050505050815250508152602001906001019062001069565b50505050905090565b6200114e8260006722b1c8c1227a0000620020c3565b91506200117366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620011ab906001600160a01b031684846200214f565b601e5490915085906000908190620011cd906001600160a01b03168462002be7565b601d5491935091506a0422ca8b0a00a42500000090600090620011fa906001600160a01b0316836200226a565b90506200120c6301e133808a620022fb565b60006200121982620023d5565b601d5490915060009062001237906001600160a01b03168462002972565b509050620012498183612710620029e6565b601e5462001262906001600160a01b0316878762002d06565b506200126e88620023d5565b601c5490925062001289906001600160a01b03168962002972565b5090506200129b8183612710620029e6565b50505050505050505050505050565b60606018805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620012f09062005e15565b80601f01602080910402602001604051908101604052809291908181526020018280546200131e9062005e15565b80156200136f5780601f1062001343576101008083540402835291602001916200136f565b820191906000526020600020905b8154815290600101906020018083116200135157829003601f168201915b505050505081526020019060010190620012ce565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200145557602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620014165790505b50505050508152505081526020019060010190620013a8565b60008212801590620014a857620014a28483101560405180606001604052806036815260200162011fd46036913962002d7a565b620014cf565b620014cf82851160405180606001604052806027815260200162011f1b6027913962002d7a565b600081620014de5784620014ea565b620014ea848662005e4b565b905060008215620014fc578562001513565b620015078562005e61565b62001513908762005d59565b9050808410806200152357508184115b15620015a15762001561848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002db7565b62001599848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002df9565b505050505050565b8215620016a1576000620015b6878662005d59565b905085811015620016745760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a20257300000000000060208201526200160c9062001606838962005d59565b62002e36565b6200163d6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002e7f565b6200166e6040518060400160405280600d81526020016c4e65772044656c74613a20257360981b8152508262002e36565b6200169a565b6200169a838660405180606001604052806029815260200162011f426029913962002ec8565b5062001599565b6000620016af858862005d59565b9050620016bc8662005e61565b8110156200178057620017176040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200170b9062005e61565b62001606919062005d59565b620017486040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002e7f565b6200177a6040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b8152508262002e36565b620017a6565b620017a6828660405180606001604052806029815260200162011f6b6029913962002ec8565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620017f59062005e15565b80601f0160208091040260200160405190810160405280929190818152602001828054620018239062005e15565b8015620018745780601f10620018485761010080835404028352916020019162001874565b820191906000526020600020905b8154815290600101906020018083116200185657829003601f168201915b505050505081526020019060010190620017d3565b600754600090610100900460ff1615620018ac5750600754610100900460ff1690565b600060008051602062011edb8339815191523b15620019b1576040805160008051602062011edb833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001933917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800162005e80565b60408051601f19818403018152908290526200194f9162005eb3565b6000604051808303816000865af19150503d80600081146200198e576040519150601f19603f3d011682016040523d82523d6000602084013e62001993565b606091505b5091505080806020019051810190620019ad919062005db6565b9150505b919050565b60606013805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62001a2262002f04565b601c546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062011edb833981519152906306447d5690602401600060405180830381600087803b15801562001a7757600080fd5b505af115801562001a8c573d6000803e3d6000fd5b50505050601260008060405162001aa39062005886565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f08015801562001b19573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e13380815260200162015180815260200162001be784620031e4565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a09092019190915251909150600090829062001c379062005894565b62001c43919062005f8c565b604051809103906000f08015801562001c60573d6000803e3d6000fd5b509050818160405162001c7390620058a2565b62001c8092919062005f9d565b604051809103906000f08015801562001c9d573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001d1257600080fd5b505af115801562001d27573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062011edb83398151915293506306447d56925001600060405180830381600087803b15801562001d7f57600080fd5b505af115801562001d94573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b15801562001de957600080fd5b505af115801562001dfe573d6000803e3d6000fd5b5050602b5460ff16915062001e8990505760008051602062011edb83398151915263e5d6bf0262001e356301e13380600362005fc7565b6040518263ffffffff1660e01b815260040162001e5491815260200190565b600060405180830381600087803b15801562001e6f57600080fd5b505af115801562001e84573d6000803e3d6000fd5b505050505b50505050565b62001e99620058b0565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c0810162001f1685620031e4565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b60008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001fa357600080fd5b505af115801562001fb8573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038516600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200200d57600080fd5b505af115801562002022573d6000803e3d6000fd5b50505050600081604051620020379062005894565b62002043919062005f8c565b604051809103906000f08015801562002060573d6000803e3d6000fd5b50905081816040516200207390620058a2565b6200208092919062005f9d565b604051809103906000f0801580156200209d573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b6000818311156200210c5760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b60448201526064015b60405180910390fd5b60006200211a848462005d59565b6200212790600162005e4b565b9050600062002137828762005fe1565b905062002145858262005e4b565b9695505050505050565b6000620005568484846040518060c001604052806001151581526020018781526020016000815260200160008152602001600019815260200160006001600160401b03811115620021a457620021a462005a83565b6040519080825280601f01601f191660200182016040528015620021cf576020820181803683370190505b50905262003231565b6000806200225f84846040518060c00160405280600115158152602001878152602001600081526020016000815260200187815260200160006001600160401b038111156200222b576200222b62005a83565b6040519080825280601f01601f19166020018201604052801562002256576020820181803683370190505b509052620035e1565b915091509250929050565b6000620022f283836040518060c001604052806001151581526020018681526020016000815260200160008152602001600019815260200160006001600160401b03811115620022be57620022be62005a83565b6040519080825280601f01601f191660200182016040528015620022e9576020820181803683370190505b50905262003a5d565b90505b92915050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b1580156200234957600080fd5b505af11580156200235e573d6000803e3d6000fd5b5060008051602062011edb833981519152925063e5d6bf029150620023869050844262005e4b565b6040518263ffffffff1660e01b8152600401620023a591815260200190565b600060405180830381600087803b158015620023c057600080fd5b505af115801562001599573d6000803e3d6000fd5b60008060008051602062011f9483398151915260001c6001600160a01b0316639711715a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156200242b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002451919062005d6f565b602c549091506001600160a01b031663ed64bab2620024708262003e1f565b6040518263ffffffff1660e01b81526004016200248f91815260200190565b600060405180830381600087803b158015620024aa57600080fd5b505af1158015620024bf573d6000803e3d6000fd5b5050602c5460009250620024dd91506001600160a01b031662003ea3565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002536573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200255c919062005ff8565b602c546080820151604051630b1b4b1760e41b81529293506000926001600160a01b039092169163b1b4b170916200259a9160040190815260200190565b602060405180830381865afa158015620025b8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620025de919062005d6f565b602c5460405163bd85b03960e01b8152600060048201529192506200265f9188916001600160a01b03169063bd85b03990602401602060405180830381865afa15801562002630573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002656919062005d6f565b83919062004060565b602c549091506001600160a01b0316638120a3e26200267e8362005e61565b6040518263ffffffff1660e01b81526004016200269d91815260200190565b600060405180830381600087803b158015620026b857600080fd5b505af1158015620026cd573d6000803e3d6000fd5b5050602c5460009250620026eb91506001600160a01b031662003ea3565b602c5460405163bd85b03960e01b81526000600482018190529293506001600160a01b039091169063bd85b03990602401602060405180830381865afa1580156200273a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002760919062005d6f565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b031663fba560086040518163ffffffff1660e01b81526004016040805180830381865afa158015620027b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620027dd9190620060be565b51602c5460405163bd85b03960e01b8152600360f81b60048201526001600160801b03909216916001600160a01b039091169063bd85b03990602401602060405180830381865afa15801562002837573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200285d919062005d6f565b62002869919062005d59565b9050600062002879828462005e4b565b905060006200288a82868a62004060565b9050620028988b8362006120565b620028a4908262006120565b90506000811215620028dc576000620028ca620028c18362005e61565b8a908562004060565b9050620028d8818862005d59565b9650505b604051631135fc2960e21b8152600481018a905260008051602062011edb833981519152906344d7f0a4906024016020604051808303816000875af11580156200292a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002950919062005db6565b506080870151620029639087906200407f565b9b9a5050505050505050505050565b6000806200225f848460405180606001604052806001151581526020016000815260200160006001600160401b03811115620029b257620029b262005a83565b6040519080825280601f01601f191660200182016040528015620029dd576020820181803683370190505b50905262004096565b6000620029f4848462004215565b90508181111562001e895760008051602062011ebb83398151915260405162002a599060208082526022908201527f4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b606082015260208101869052905160008051602062011fb48339815191529181900360800190a160408051818152600a81830152690808080808149a59da1d60b21b606082015260208101859052905160008051602062011fb48339815191529181900360800190a160408051818152600a8183015269204d61782044656c746160b01b606082015260208101849052905160008051602062011fb48339815191529181900360800190a160408051818152600a8183015269202020202044656c746160b01b606082015260208101839052905160008051602062011fb48339815191529181900360800190a162001e896200423d565b60006200055684848460405180606001604052806001151581526020016000815260200160006001600160401b0381111562002bb35762002bb362005a83565b6040519080825280601f01601f19166020018201604052801562002bde576020820181803683370190505b50905262004346565b6000806200225f84846040518060c0016040528060011515815260200187815260200160008152602001878152602001600019815260200160006001600160401b0381111562002c3b5762002c3b62005a83565b6040519080825280601f01601f19166020018201604052801562002c66576020820181803683370190505b509052620044c6565b60008183131562002cb45760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b604482015260640162002103565b600062002cc2848462006120565b62002ccf9060016200614a565b9050600062002cdf828762006175565b9050600081121562002cfa5762002cf782826200614a565b90505b6200214585826200614a565b60006200055684848460405180606001604052806001151581526020016000815260200160006001600160401b0381111562002d465762002d4662005a83565b6040519080825280601f01601f19166020018201604052801562002d71576020820181803683370190505b5090526200487d565b8162002db35760008051602062011efb8339815191528160405162002da091906200618c565b60405180910390a162002db382620049ae565b5050565b8183101562002df45760008051602062011efb8339815191528160405162002de091906200618c565b60405180910390a162002df4838362004a15565b505050565b8183111562002df45760008051602062011efb8339815191528160405162002e2291906200618c565b60405180910390a162002df4838362004b11565b62002db3828260405160240162002e4f929190620061bd565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262004b74565b62002db3828260405160240162002e98929190620061bd565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262004b74565b81831462002df45760008051602062011efb8339815191528160405162002ef091906200618c565b60405180910390a162002df4838362004b7f565b62002f2c60405180604001604052806005815260200164616c69636560d81b81525062000d9d565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b602082015262002f719062000d9d565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b602082015262002fb99062000d9d565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b602082015262002ffe9062000d9d565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620030439062000d9d565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062003094604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000d9d565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b6020820152620030dc9062000d9d565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b60208201526200312a9062000d9d565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620031769062000d9d565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b6020820152620031be9062000d9d565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b6000806200321b6200320b620031fc85606462005fc7565b66a5bbed86c5a000906200407f565b6748cd4072281e00009062004c6f565b905062000559670de0b6b3a76400008262004c6f565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200328157600080fd5b505af115801562003296573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b158015620032eb57600080fd5b505af115801562003300573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003365573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200338b91906200624d565b516001600160a01b0316148015620033a1575081515b156200345357602c54602080840151604080516060810182526001600160a01b038a81168252875115159482019490945260a0870151818301529051631df417fd60e21b815292909316926377d05ff492620034059188918a919060040162006344565b60206040518083038185885af115801562003424573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200344b919062005d6f565b9050620009c9565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b158015620034a457600080fd5b505af1158015620034b9573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af11580156200351e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003544919062005db6565b50602c54604080516060810182526001600160a01b03888116825285511515602083015260a0860151828401529151631df417fd60e21b815291909216916377d05ff4916200359b91879189919060040162006344565b6020604051808303816000875af1158015620035bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200344b919062005d6f565b60008060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200363257600080fd5b505af115801562003647573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200369c57600080fd5b505af1158015620036b1573d6000803e3d6000fd5b5050602c54620036cd92506001600160a01b0316905062004c86565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003742573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200376891906200624d565b516001600160a01b03161480156200377e575082515b156200383b57602c54602080850151608086015160408088015181516060810183526001600160a01b038c811682528a5115159682019690965260a08a0151818401529151630dbbe80760e41b8152949095169463dbbe807094620037eb938b9390929160040162006365565b604080518083038185885af115801562003809573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200383091906200638c565b909250905062003a55565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200388c57600080fd5b505af1158015620038a1573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003906573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200392c919062005db6565b50602c54608084015160408086015181516060810183526001600160a01b038a8116825288511515602083015260a0890151828501529251630dbbe80760e41b8152929094169363dbbe8070936200398c938a9391929060040162006365565b60408051808303816000875af1158015620039ab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620039d191906200638c565b602b54602086015192945090925061010090046001600160a01b0316906342966c689062003a0190849062005d59565b6040518263ffffffff1660e01b815260040162003a2091815260200190565b600060405180830381600087803b15801562003a3b57600080fd5b505af115801562003a50573d6000803e3d6000fd5b505050505b935093915050565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562003aad57600080fd5b505af115801562003ac2573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038716600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b15801562003b1757600080fd5b505af115801562003b2c573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003b91573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003bb791906200624d565b516001600160a01b031614801562003bcd575081515b1562003c8757602c5460208084015160608086015160808701516040805193840181526001600160a01b038b81168552895115159685019690965260a08901518482015251634d53423160e11b81529490951694639aa684629462003c39938a93929160040162006365565b60206040518083038185885af115801562003c58573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062003c7f919062005d6f565b905062000559565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562003cd857600080fd5b505af115801562003ced573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003d52573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003d78919062005db6565b50602c5460608084015160808501516040805193840181526001600160a01b03898116855287511515602086015260a0880151858301529051634d53423160e11b8152941693639aa684629362003dd9938993909290919060040162006365565b6020604051808303816000875af115801562003df9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003c7f919062005d6f565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003e61573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003e8791906200624d565b60a0015162003e97904262005fe1565b620022f5904262005d59565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003ee6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003f0c91906200624d565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562003f50573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003f76919062005ff8565b9050620009c98160800151620040596040518061016001604052808560000151815260200185602001518152602001856040015181526020018560800151815260200186602001518152602001866040015181526020018660c0015181526020018560a00151815260200162004014896200400e6ec097ce7bc90715b34b9f10000000008960c0015162004d0990919063ffffffff16565b62004d20565b81526020018560e00151815260200162004051896200400e6ec097ce7bc90715b34b9f100000000089610100015162004d0990919063ffffffff16565b905262004dcb565b906200407f565b60008260001904841183021582026200407857600080fd5b5091020490565b6000620022f28383670de0b6b3a764000062004060565b60008060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620040e757600080fd5b505af1158015620040fc573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200415157600080fd5b505af115801562004166573d6000803e3d6000fd5b5050602c54602080870151604080516060810182526001600160a01b038c811682528a51151594820194909452818a01518183015290516332f04d0d60e21b815292909316945063cbc134349350620041c492899260040162006344565b60408051808303816000875af1158015620041e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200420991906200638c565b91509150935093915050565b600081831162004231576200422b838362005d59565b620022f2565b620022f2828462005d59565b60008051602062011edb8339815191523b1562004335576040805160008051602062011edb833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620042d0929160200162005e80565b60408051601f1981840301815290829052620042ec9162005eb3565b6000604051808303816000865af19150503d80600081146200432b576040519150601f19603f3d011682016040523d82523d6000602084013e62004330565b606091505b505050505b6007805461ff001916610100179055565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200439657600080fd5b505af1158015620043ab573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200440057600080fd5b505af115801562004415573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c811682528951151594820194909452818901518183015290516329b23fc160e01b81529290931694506329b23fc19350620044779289928992919060040162006365565b6020604051808303816000875af115801562004497573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620044bd919062005d6f565b95945050505050565b60008060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200451757600080fd5b505af11580156200452c573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200458157600080fd5b505af115801562004596573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa158015620045fb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200462191906200624d565b516001600160a01b031614801562004637575082515b15620046f257602c54602080850151606080870151604080890151815193840182526001600160a01b038c811685528a5115159685019690965260a08a015184830152905163cba2e58d60e01b8152949095169463cba2e58d94620046a3938b93929160040162006365565b604080518083038185885af1158015620046c1573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620046e891906200638c565b9150915062003a55565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200473d57600080fd5b505af115801562004752573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af1158015620047b1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620047d7919062005db6565b50602c54606080850151604080870151815193840182526001600160a01b038a8116855288511515602086015260a089015185840152915163cba2e58d60e01b8152919094169363cba2e58d9362004838938a939092919060040162006365565b60408051808303816000875af115801562004857573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620046e891906200638c565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620048cd57600080fd5b505af1158015620048e2573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200493757600080fd5b505af11580156200494c573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c8116825289511515948201949094528189015181830152905163ded0623160e01b815292909316945063ded062319350620044779289928992919060040162006365565b806200035c5760008051602062011ebb83398151915260405162004a039060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a16200035c6200423d565b8082101562002db35760008051602062011ebb83398151915260405162004a789060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b606082015260208101849052905160008051602062011fb48339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b60608201526020810182905260008051602062011fb4833981519152906080015b60405180910390a162002db36200423d565b8082111562002db35760008051602062011ebb83398151915260405162004a789060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b6200035c8162005069565b80821462002db35760008051602062011ebb83398151915260405162004be19060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b606082015260208101849052905160008051602062011fb48339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b60608201526020810182905260008051602062011fb48339815191529060800162004aff565b6000620022f283670de0b6b3a76400008462004060565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004cc8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004cee91906200624d565b6080015162004cfd8362003e1f565b620022f5919062005e4b565b6000620022f283670de0b6b3a7640000846200508a565b600062004d2d8362003e1f565b821162004d3c57600062004d53565b62004d478362003e1f565b62004d53908362005d59565b9050620022f2836001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004d99573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004dbf91906200624d565b60800151829062004c6f565b60008062004ded8361014001518461012001516200407f90919063ffffffff16565b61010084015160e085015162004e03916200407f565b62004e0f919062006120565b9050600062004e2784600001518560200151620050b1565b9050600082131562004ed657600062004e6e8286604001518760a001518860c00151670de0b6b3a764000062004e5e919062005d59565b89606001518a60800151620050d1565b905062004e7c818462005186565b9050801562004ecf5762004eba828660400151838860c00151670de0b6b3a764000062004eaa919062005d59565b89606001518a608001516200519d565b8551869062004ecb90839062005d59565b9052505b5062004fa6565b600082121562004fa65762004eeb8262005e61565b9150600062004f238286604001518760c00151670de0b6b3a764000062004f13919062005d59565b88606001518960800151620051df565b905062004f31818462005186565b9050801562004f845762004f6f828660400151838860c00151670de0b6b3a764000062004f5f919062005d59565b89606001518a6080015162005287565b8551869062004f8090839062005e4b565b9052505b62004f90818462005d59565b8551869062004fa190839062005e4b565b905250505b600062004fd9856101000151670de0b6b3a764000062004fc7919062005d59565b606087015160e0880151919062004060565b6200500b866101400151670de0b6b3a764000062004ff8919062005d59565b6060880151610120890151919062004060565b62005017919062006120565b905060008186600001516200502d91906200614a565b90508560a00151811215620050555760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015162002145908262005d59565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000826000190484118302158202620050a257600080fd5b50910281810615159190040190565b600080620050c0838562006120565b90506000811215620022f257600080fd5b600080620050e3888887878762005331565b905060006200510c6200510387620050fc878b62005369565b9062005380565b8690866200508a565b62005118908362005d59565b9050670de0b6b3a7640000811062005152576200514a62005142670de0b6b3a76400008862004c6f565b829062005380565b90506200516d565b6200516a62005142670de0b6b3a76400008862004d09565b90505b62005179888262005d59565b9998505050505050505050565b6000818311620051975782620022f2565b50919050565b600080620051b0888888888888620053e1565b909250905080620051d457604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b600080620051f18787878787620054ba565b9050600062005222670de0b6b3a76400006200520e878762004c6f565b6200521a919062005e4b565b839062004d09565b9050670de0b6b3a7640000811062005254576200524c62005142670de0b6b3a76400008862004d09565b90506200526f565b6200526c62005142670de0b6b3a76400008862004c6f565b90505b6200527b818862005d59565b98975050505050505050565b600080620052998888878787620054ba565b9050620052ac85620050fc888a62005d59565b96506000620052ca8486620052c28b8662005d59565b91906200508a565b9050670de0b6b3a76400008110620052fc57620052f462005142670de0b6b3a76400008862004d09565b905062005317565b6200531462005142670de0b6b3a76400008862004c6f565b90505b62005323818562004d09565b905062005179898262005d59565b60006200533f858562005380565b6200535d6200535486620050fc868b6200407f565b85908562004060565b62002145919062005e4b565b6000620022f28383670de0b6b3a76400006200508a565b6000816000036200539b5750670de0b6b3a7640000620022f5565b82600003620053ad57506000620022f5565b816000620053bb85620054e6565b9050818102620053d4670de0b6b3a764000082620063b1565b90506200214581620056f9565b6000806000620053f58989888888620054ba565b90506200540886620050fc898b62005e4b565b97508781101562005421576000809250925050620054af565b6000620054358587620052c28c8662005d59565b9050670de0b6b3a7640000811062005467576200545f62005142670de0b6b3a76400008962004d09565b905062005482565b6200547f62005142670de0b6b3a76400008962004c6f565b90505b6200548e818662004d09565b9050808a1115620054a857620054a5818b62005d59565b93505b6001925050505b965096945050505050565b6000620054c8858562005380565b6200535d620054dd86620050fc868b62005369565b8590856200508a565b60008082136200550957604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c6001600160401b031060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136200571557506000919050565b680755bf798b4a1bf1e582126200573f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611de380620063e683390190565b6129ad80620081c983390190565b617345806200ab7683390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016200593b60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600080604083850312156200596357600080fd5b50508035926020909101359150565b6001600160a01b03811681146200035c57600080fd5b6000806000606084860312156200599e57600080fd5b8335620059ab8162005972565b92506020840135620059bd8162005972565b91506040840135620059cf8162005972565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b8181101562005a1d5783516001600160a01b031683529284019291840191600101620059f6565b50909695505050505050565b6000806000806080858703121562005a4057600080fd5b843562005a4d8162005972565b9350602085013562005a5f8162005972565b925060408501359150606085013562005a788162005972565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a081016001600160401b038111828210171562005abf5762005abf62005a83565b60405290565b60405161018081016001600160401b038111828210171562005abf5762005abf62005a83565b60006020828403121562005afe57600080fd5b81356001600160401b038082111562005b1657600080fd5b818401915084601f83011262005b2b57600080fd5b81358181111562005b405762005b4062005a83565b604051601f8201601f19908116603f0116810190838211818310171562005b6b5762005b6b62005a83565b8160405282815287602084870101111562005b8557600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101562005c4d57898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101562005c375783516001600160e01b0319168252928b019260019290920191908b019062005c0b565b50978a0197955050509187019160010162005bcd565b50919998505050505050505050565b60005b8381101562005c7957818101518382015260200162005c5f565b50506000910152565b6000815180845262005c9c81602086016020860162005c5c565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101562005d0957603f1988860301845262005cf685835162005c82565b9450928501929085019060010162005cd7565b5092979650505050505050565b60008060006060848603121562005d2c57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115620022f557620022f562005d43565b60006020828403121562005d8257600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008262005db15762005db162005d89565b500490565b60006020828403121562005dc957600080fd5b81518015158114620022f257600080fd5b602081526000620022f2602083018462005c82565b6001600160a01b0383168152604060208201819052600090620005569083018462005c82565b600181811c9082168062005e2a57607f821691505b6020821081036200519757634e487b7160e01b600052602260045260246000fd5b80820180821115620022f557620022f562005d43565b6000600160ff1b820162005e795762005e7962005d43565b5060000390565b6001600160e01b031983168152815160009062005ea581600485016020870162005c5c565b919091016004019392505050565b6000825162005ec781846020870162005c5c565b9190910192915050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015162005f3560e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c08101620022f5828462005ed1565b6101e0810162005fae828562005ed1565b6001600160a01b03929092166101c09190910152919050565b8082028115828204841417620022f557620022f562005d43565b60008262005ff35762005ff362005d89565b500690565b60006101a082840312156200600c57600080fd5b6200601662005a99565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b80516001600160801b0381168114620019b157600080fd5b600060408284031215620060d157600080fd5b604051604081018181106001600160401b0382111715620060f657620060f662005a83565b6040526200610483620060a6565b81526200611460208401620060a6565b60208201529392505050565b818103600083128015838313168383128216171562006143576200614362005d43565b5092915050565b80820182811260008312801582168215821617156200616d576200616d62005d43565b505092915050565b60008262006187576200618762005d89565b500790565b60408152600560408201526422b93937b960d91b6060820152608060208201526000620022f2608083018462005c82565b604081526000620061d2604083018562005c82565b90508260208301529392505050565b8051620019b18162005972565b6000606082840312156200620157600080fd5b604051606081018181106001600160401b038211171562006226576200622662005a83565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200626157600080fd5b6200626b62005ac5565b6200627683620061e1565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620062c260e08401620061e1565b60e0820152610100620062d7818501620061e1565b90820152610120620062ec85858301620061ee565b908201526101808301516101408201526101a09092015161016083015250919050565b60018060a01b0381511682526020810151151560208301526000604082015160606040850152620009c9606085018262005c82565b838152826020820152606060408201526000620044bd60608301846200630f565b8481528360208201528260408201526080606082015260006200214560808301846200630f565b60008060408385031215620063a057600080fd5b505080516020909101519092909150565b600082620063c357620063c362005d89565b600160ff1b821460001984141615620063e057620063e062005d43565b50059056fe6101006040523480156200001257600080fd5b5060405162001de338038062001de3833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161186c620005776000396000818161037901528181610882015281816108e801528181610c270152610c890152600061085e01526000610829015260006102b9015261186c6000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b146104c7578063ea7ca276146104fd578063ed0d0efb14610534578063f2fde38b1461055457600080fd5b8063bf7e214f1461044d578063c53a398514610460578063d505accf14610489578063dd62ed3e1461049c57600080fd5b80639dc29fac116100de5780639dc29fac14610401578063a0712d6814610414578063a9059cbb14610427578063b70096131461043a57600080fd5b80637a9e5e4b1461039b5780637ecebe00146103ae5780638da5cb5b146103ce57806395d89b41146103f957600080fd5b80633644e5151161018757806367aff4841161015657806367aff4841461032e57806370a0823114610341578063728b952b146103615780637a8c63b51461037457600080fd5b80633644e515146102ed57806340c10f19146102f557806342966c68146103085780634b5159da1461031b57600080fd5b80630ea9b75b116101c35780630ea9b75b1461028357806318160ddd1461029857806323b872dd146102a1578063313ce567146102b457600080fd5b806306a36aee146101f557806306fdde0314610228578063095ea7b31461023d5780630bade8a414610260575b600080fd5b610215610203366004611324565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610230610567565b60405161021f9190611341565b61025061024b36600461138f565b6105f5565b604051901515815260200161021f565b61025061026e3660046113d8565b600a6020526000908152604090205460ff1681565b610296610291366004611412565b610662565b005b61021560025481565b6102506102af366004611459565b610743565b6102db7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161021f565b610215610825565b61029661030336600461138f565b610880565b61029661031636600461149a565b6108e6565b6102966103293660046114b3565b61094b565b61029661033c3660046114ea565b6109dd565b61021561034f366004611324565b60036020526000908152604090205481565b61029661036f366004611518565b610aa5565b6102507f000000000000000000000000000000000000000000000000000000000000000081565b6102966103a9366004611324565b610b2e565b6102156103bc366004611324565b60056020526000908152604090205481565b6006546103e1906001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b610230610c18565b61029661040f36600461138f565b610c25565b61029661042236600461149a565b610c87565b61025061043536600461138f565b610ce9565b610250610448366004611546565b610d4f565b6007546103e1906001600160a01b031681565b6103e161046e366004611324565b6008602052600090815260409020546001600160a01b031681565b61029661049736600461158d565b610e4d565b6102156104aa366004611518565b600460209081526000928352604080842090915290825290205481565b6102506104d53660046115fb565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025061050b36600461162e565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102156105423660046113d8565b600b6020526000908152604090205481565b610296610562366004611324565b611091565b600080546105749061165a565b80601f01602080910402602001604051908101604052809291908181526020018280546105a09061165a565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106509086815260200190565b60405180910390a35060015b92915050565b610678336000356001600160e01b03191661110f565b61069d5760405162461bcd60e51b815260040161069490611694565b60405180910390fd5b80156106cd576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106f4565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610736911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461079f5761077a83826116d0565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107c79084906116d0565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611817833981519152906108109087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461085b576108566111b9565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108d8576108bc336000356001600160e01b03191661110f565b6108d85760405162461bcd60e51b8152600401610694906116e3565b6108e28282611253565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561093e57610922336000356001600160e01b03191661110f565b61093e5760405162461bcd60e51b8152600401610694906116e3565b61094833826112ad565b50565b610961336000356001600160e01b03191661110f565b61097d5760405162461bcd60e51b815260040161069490611694565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109f3336000356001600160e01b03191661110f565b610a0f5760405162461bcd60e51b815260040161069490611694565b8015610a3e576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a64565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610736911515815260200190565b610abb336000356001600160e01b03191661110f565b610ad75760405162461bcd60e51b815260040161069490611694565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610bc3575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b8290339030906001600160e01b0319600035169060040161171a565b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611747565b610bcc57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105749061165a565b7f000000000000000000000000000000000000000000000000000000000000000015610c7d57610c61336000356001600160e01b03191661110f565b610c7d5760405162461bcd60e51b8152600401610694906116e3565b6108e282826112ad565b7f000000000000000000000000000000000000000000000000000000000000000015610cdf57610cc3336000356001600160e01b03191661110f565b610cdf5760405162461bcd60e51b8152600401610694906116e3565b6109483382611253565b33600090815260036020526040812080548391908390610d0a9084906116d0565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611817833981519152906106509086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610deb5760405163b700961360e01b81526001600160a01b0382169063b700961390610da29088908890889060040161171a565b602060405180830381865afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de39190611747565b91505061081e565b6001600160e01b031983166000908152600a602052604090205460ff1680610e4457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e9d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610694565b60006001610ea9610825565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610fb5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610feb5750876001600160a01b0316816001600160a01b0316145b6110285760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610694565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6110a7336000356001600160e01b03191661110f565b6110c35760405162461bcd60e51b815260040161069490611694565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611199575060405163b700961360e01b81526001600160a01b0382169063b7009613906111589087903090889060040161171a565b602060405180830381865afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190611747565b806111b157506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111eb9190611764565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546112659190611803565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061181783398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112d59084906116d0565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611817833981519152906020016112a1565b6001600160a01b038116811461094857600080fd5b60006020828403121561133657600080fd5b813561081e8161130f565b600060208083528351808285015260005b8181101561136e57858101830151858201604001528201611352565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156113a257600080fd5b82356113ad8161130f565b946020939093013593505050565b80356001600160e01b0319811681146113d357600080fd5b919050565b6000602082840312156113ea57600080fd5b61081e826113bb565b803560ff811681146113d357600080fd5b801515811461094857600080fd5b60008060006060848603121561142757600080fd5b611430846113f3565b925061143e602085016113bb565b9150604084013561144e81611404565b809150509250925092565b60008060006060848603121561146e57600080fd5b83356114798161130f565b925060208401356114898161130f565b929592945050506040919091013590565b6000602082840312156114ac57600080fd5b5035919050565b600080604083850312156114c657600080fd5b6114cf836113bb565b915060208301356114df81611404565b809150509250929050565b6000806000606084860312156114ff57600080fd5b833561150a8161130f565b925061143e602085016113f3565b6000806040838503121561152b57600080fd5b82356115368161130f565b915060208301356114df8161130f565b60008060006060848603121561155b57600080fd5b83356115668161130f565b925060208401356115768161130f565b9150611584604085016113bb565b90509250925092565b600080600080600080600060e0888a0312156115a857600080fd5b87356115b38161130f565b965060208801356115c38161130f565b955060408801359450606088013593506115df608089016113f3565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561160e57600080fd5b611617836113f3565b9150611625602084016113bb565b90509250929050565b6000806040838503121561164157600080fd5b823561164c8161130f565b9150611625602084016113f3565b600181811c9082168061166e57607f821691505b60208210810361168e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561065c5761065c6116ba565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561175957600080fd5b815161081e81611404565b600080835481600182811c91508083168061178057607f831692505b6020808410820361179f57634e487b7160e01b86526022600452602486fd5b8180156117b357600181146117c8576117f5565b60ff19861689528415158502890196506117f5565b60008a81526020902060005b868110156117ed5781548b8201529085019083016117d4565b505084890196505b509498975050505050505050565b8082018082111561065c5761065c6116ba56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212207b350da756a5d3a5eb9152ae21ad0e195fbe0e3936d747265c23328ee95417eb64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620029ad380380620029ad8339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516125426200046b6000396000610a1701526000610967015260006109e0015260006109bb01526000610998015260006108c101526000818161089c01526110a6015260008181610872015261108001526000818161093701526110cc0152600081816108eb015261153901526000818161091101526117c501526000818161084d01528181610b780152610f5101526000610bb101526000610b3801526125426000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611df2565b6102f1565b6040516101459190611e5b565b60405180910390f35b61016161015c366004611df2565b610328565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611e85565b61037a565b604051908152602001610145565b61019b6101b7366004611ec1565b6103c0565b6101386101ca366004611df2565b6103f9565b6101d7610407565b6040516101459190611eed565b61019b6101f2366004611f78565b610601565b61019b61062d565b61019b61020d366004611df2565b61064a565b61021a610830565b6040516101459190611f93565b61019b610235366004611df2565b610a4d565b61024d610248366004612055565b610a6f565b60405161014591906120ca565b610262610b2a565b6040516001600160a01b039091168152602001610145565b610262610b6a565b61019b610baa565b610292610be2565b604051610145919061210e565b6102b26102ad3660046121fb565b610c48565b6040519015158152602001610145565b6102ca610c8c565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b60606103236102ff83610ceb565b60405160200161030f9190611e5b565b604051602081830303815290604052610e19565b919050565b6040805180820190915260008082526020820152610323600e600084815260200190815260200160002060405160200161030f91546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103b9910161030f565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103f3910161030f565b92915050565b60606103236102ff83610e3d565b610472604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061047c610f2f565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b03909216916104e79190612251565b6104f19190612264565b9050600080831161050357600061051e565b61051e8361051861051386610fe3565b611149565b906113b7565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105c6576105c184866113cc565b6105c9565b60005b8152600954600160801b90046001600160801b03166020918201526040519192506105fa9161030f91849101611eed565b5050505090565b6001600160a01b038116600090815260076020908152604080832054815192830152610323910161030f565b600061064760105460405160200161030f91815260200190565b90565b601354601280546000926001600160801b03600160801b82048116939116918491908390811061067c5761067c612277565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106bd8685612264565b9050600083156106d7576106d2600185612264565b6106e6565b6012546106e690600190612264565b60408051808201909152600080825260208201529091505b8482146107955760006012838154811061071a5761071a612277565b6000918252602090912001805490915063ffffffff1684106107685760408051808201909152905463ffffffff8116825264010000000090046001600160e01b031660208201529050610795565b821561077e57610779600184612264565b61078d565b60125461078d90600190612264565b9250506106fe565b805163ffffffff166000036107bd57604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166107e59190612264565b825186519192506000916108029163ffffffff9081169116612264565b905061082361081182846122a3565b60405160200161030f91815260200190565b5050505050505050919050565b610838611d54565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f000000000000000000000000000000000000000000000000000000000000000061016083015291516106479261030f929101611f93565b600081815260026020908152604080832054815192830152610323910161030f565b606060008267ffffffffffffffff811115610a8c57610a8c6122b7565b604051908082528060200260200182016040528015610ab5578160200160208202803683370190505b50905060005b83811015610b0e576000858583818110610ad757610ad7612277565b90506020020135905060008154905080848481518110610af957610af9612277565b60209081029190910101525050600101610abb565b50610b238160405160200161030f91906120ca565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b60006106477f000000000000000000000000000000000000000000000000000000000000000060405160200161030f91815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610647600860405160200161030f91906122cd565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103f3910161030f565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526106479060600161030f565b606060f882901c6001600160f81b0383166000610d07826113e1565b90506000836003811115610d1d57610d1d612225565b03610d4f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610e11565b6001836003811115610d6357610d63612225565b03610d8f5780604051602001610d79919061234e565b6040516020818303038152906040529350610e11565b6002836003811115610da357610da3612225565b03610db95780604051602001610d799190612387565b6003836003811115610dcd57610dcd612225565b03610e11576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610e349190611e5b565b60405180910390fd5b606060f882901c6001600160f81b0383166000610e59826113e1565b90506000836003811115610e6f57610e6f612225565b03610ea1576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610e11565b6001836003811115610eb557610eb5612225565b03610ecb5780604051602001610d7991906123c1565b6002836003811115610edf57610edf612225565b03610ef55780604051602001610d7991906123f9565b6003836003811115610f0957610f09612225565b03610e11576040516c485950455244524956452d575360981b6020820152602d01610dff565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc9190612425565b9050601454600003610fcf576000610fdd565b601454610fdd9082906113cc565b91505090565b61104060405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b54909161010083019161110f91166114ee565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192611141929004166114ee565b905292915050565b6000806111698361014001518461012001516113b790919063ffffffff16565b61010084015160e085015161117d916113b7565b611187919061243e565b9050600061119d84600001518560200151611564565b9050600082131561123d5760006111df8286604001518760a001518860c00151670de0b6b3a76400006111d09190612264565b89606001518a60800151611581565b90506111eb8184611621565b9050801561123757611224828660400151838860c00151670de0b6b3a76400006112159190612264565b89606001518a60800151611636565b85518690611233908390612264565b9052505b506112f9565b60008212156112f95761124f8261245e565b915060006112838286604001518760c00151670de0b6b3a76400006112749190612264565b88606001518960800151611675565b905061128f8184611621565b905080156112db576112c8828660400151838860c00151670de0b6b3a76400006112b99190612264565b89606001518a6080015161170b565b855186906112d7908390612251565b9052505b6112e58184612264565b855186906112f4908390612251565b905250505b6000611328856101000151670de0b6b3a76400006113179190612264565b606087015160e088015191906117a0565b611356866101400151670de0b6b3a76400006113449190612264565b606088015161012089015191906117a0565b611360919061243e565b90506000818660000151611374919061247a565b90508560a0015181121561139b5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516113ad9082612264565b9695505050505050565b60006103b98383670de0b6b3a76400006117a0565b60006103b983670de0b6b3a7640000846117a0565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611413600a8561249a565b61141e906030612251565b60f81b8161142d600185612264565b8151811061143d5761143d612277565b60200101906001600160f81b031916908160001a90535061145f600a856122a3565b935060015b84156114e057611475600a8661249a565b611480906030612251565b60f81b8260016114908487612264565b61149a9190612264565b815181106114aa576114aa612277565b60200101906001600160f81b031916908160001a9053506114cc600a866122a3565b9450806114d8816124ae565b915050611464565b918290030190815292915050565b600080670de0b6b3a76400006115026117be565b61150c91906124c7565b905080831161151c576000611526565b6115268184612264565b91506103b961155d670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006124c7565b83906113cc565b600080611571838561243e565b905060008112156103b957600080fd5b60008061159188888787876117f9565b905060006115b46115ac876115a6878b611828565b9061183d565b869086611894565b6115be9083612264565b9050670de0b6b3a764000081106115f2576115eb6115e4670de0b6b3a7640000886113cc565b829061183d565b905061160a565b6116076115e4670de0b6b3a7640000886118ba565b90505b6116148882612264565b9998505050505050505050565b600081831161163057826103b9565b50919050565b6000806116478888888888886118cf565b90925090508061166a57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806116858787878787611991565b905060006116b0670de0b6b3a764000061169f87876113cc565b6116a99190612251565b83906118ba565b9050670de0b6b3a764000081106116dd576116d66115e4670de0b6b3a7640000886118ba565b90506116f5565b6116f26115e4670de0b6b3a7640000886113cc565b90505b6116ff8188612264565b98975050505050505050565b60008061171b8888878787611991565b905061172b856115a6888a612264565b96506000611745848661173e8b86612264565b9190611894565b9050670de0b6b3a764000081106117725761176b6115e4670de0b6b3a7640000886118ba565b905061178a565b6117876115e4670de0b6b3a7640000886113cc565b90505b61179481856118ba565b90506116148982612264565b60008260001904841183021582026117b757600080fd5b5091020490565b60006117ea7f00000000000000000000000000000000000000000000000000000000000000004261249a565b6117f49042612264565b905090565b6000611805858561183d565b61181e611816866115a6868b6113b7565b8590856117a0565b6113ad9190612251565b60006103b98383670de0b6b3a7640000611894565b6000816000036118565750670de0b6b3a76400006103f3565b82600003611866575060006103f3565b816000611872856119b6565b9050818102611889670de0b6b3a7640000826124de565b90506113ad81611bc9565b60008260001904841183021582026118ab57600080fd5b50910281810615159190040190565b60006103b983670de0b6b3a764000084611894565b60008060006118e18989888888611991565b90506118f1866115a6898b612251565b975087811015611908576000809250925050611986565b6000611919858761173e8c86612264565b9050670de0b6b3a764000081106119465761193f6115e4670de0b6b3a7640000896118ba565b905061195e565b61195b6115e4670de0b6b3a7640000896113cc565b90505b61196881866118ba565b9050808a111561197f5761197c818b612264565b93505b6001925050505b965096945050505050565b600061199d858561183d565b61181e6119ae866115a6868b611828565b859085611894565b60008082136119d857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611be457506000919050565b680755bf798b4a1bf1e58212611c0d5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611dde60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611e0457600080fd5b5035919050565b60005b83811015611e26578181015183820152602001611e0e565b50506000910152565b60008151808452611e47816020860160208601611e0b565b601f01601f19169290920160200192915050565b6020815260006103b96020830184611e2f565b80356001600160a01b038116811461032357600080fd5b600080600060608486031215611e9a57600080fd5b83359250611eaa60208501611e6e565b9150611eb860408501611e6e565b90509250925092565b60008060408385031215611ed457600080fd5b82359150611ee460208401611e6e565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611f8a57600080fd5b6103b982611e6e565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611ffb60e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b6000806020838503121561206857600080fd5b823567ffffffffffffffff8082111561208057600080fd5b818501915085601f83011261209457600080fd5b8135818111156120a357600080fd5b8660208260051b85010111156120b857600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015612102578351835292840192918401916001016120e6565b50909695505050505050565b81516001600160801b031681526101408101602083015161213a60208401826001600160801b03169052565b50604083015161214f6040840182600f0b9052565b50606083015161216a60608401826001600160801b03169052565b50608083015161218560808401826001600160801b03169052565b5060a08301516121a060a08401826001600160801b03169052565b5060c08301516121bb60c08401826001600160801b03169052565b5060e08301516121d660e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b6000806040838503121561220e57600080fd5b61221783611e6e565b9150611ee460208401611e6e565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156103f3576103f361223b565b818103818111156103f3576103f361223b565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826122b2576122b261228d565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b23565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161237a816011850160208701611e0b565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516123b4816012850160208701611e0b565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516123ec816010850160208701611e0b565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161237a816011850160208701611e0b565b60006020828403121561243757600080fd5b5051919050565b8181036000831280158383131683831282161715610b2357610b2361223b565b6000600160ff1b82016124735761247361223b565b5060000390565b80820182811260008312801582168215821617156121f3576121f361223b565b6000826124a9576124a961228d565b500690565b6000600182016124c0576124c061223b565b5060010190565b80820281158282048414176103f3576103f361223b565b6000826124ed576124ed61228d565b600160ff1b8214600019841416156125075761250761223b565b50059056fea264697066735822122098d3cb643d30d4a5eb36d49d62c7e609053d3537d545bf995646b265fdde713364736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162007345380380620073458339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051616bb4620007916000396000613a9f015260008181610f3701528181610fb1015261101f01526000818161317f015281816131f801528181613d1a01526153c60152600081816131cc0152818161348701528181614da1015261539a0152600081816131520152818161336401528181613cd601526147f4015260008181610ce9015281816118f001528181611d3101528181611f010152818161212e015261232f0152600081816114190152818161146401528181611566015281816141bd0152818161420c01528181614445015281816148b8015281816148f4015281816153220152615cd50152600081816114d501528181611951015281816132c50152818161331201528181614007015281816140340152818161441f015281816147b401528181614ce601528181615094015261562401526000818161151801528181611993015281816132a3015281816133330152818161446b0152818161479201528181614cc4015281816150720152615645015260008181610dae015281816114f70152818161197201528181611dff015281816121bb015281816123ec0152818161282c015281816129480152818161340d0152818161366001528181613ca40152818161498301526151310152600081816125b50152818161265e01526127940152600081816111820152818161121c0152818161128f015281816126a9015281816126f201528181612c9401528181612cdd01528181612db701528181612e5501528181613d4a01528181613e0401528181613ec90152613f610152600081816104a30152611711015260006139d401526000613997015260008181610252015261083d0152616bb46000f3fe60806040526004361061023b5760003560e01c80638fca1f7b1161012e578063b334ed86116100ab578063d5002f2e1161006f578063d5002f2e14610904578063dbbe807014610919578063ded062311461092c578063e44808bc1461094c578063ed64bab21461096c5761023b565b8063b334ed861461082b578063b4f8da3914610877578063ca6d38f7146108b1578063cba2e58d146108d1578063cbc13434146108e45761023b565b80639cd241af116100f25780639cd241af1461078b578063a22cb465146107ab578063a77384c1146107cb578063ab033ea9146107eb578063b1b4b1701461080b5761023b565b80638fca1f7b146106da5780639032c72614610703578063907c0f92146107235780639aa68462146107385780639bd334981461074b5761023b565b80634ed2d6ac116101bc5780637180c8ca116101805780637180c8ca146105b957806371f88b7c146105d957806377d05ff4146105f95780638120a3e21461060c578063883483971461062c5761023b565b80634ed2d6ac146105055780635a1a3e7c14610525578063680962391461054557806368c2ecb814610565578063702db0eb146105855761023b565b806329b23fc11161020357806329b23fc11461042f57806330adf81f1461045d5780633644e515146104915780633e691db9146104c55780634daa8b8f146104e55761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806322d5506b146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a9291906161cc565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f9826161dc565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401616284565b80519650602001945050505050f35b34801561035757600080fd5b5061036b61036636600461634e565b61098c565b005b34801561037957600080fd5b5061038d61038836600461637d565b6109d5565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c2366004616429565b610bcf565b3480156103d357600080fd5b5061036b6103e23660046164ba565b610c83565b3480156103f357600080fd5b506104076104023660046164fe565b610c96565b604080519586526020860194909452928401919091526060830152608082015260a00161039e565b34801561043b57600080fd5b5061044f61044a366004616530565b610cbf565b60405190815260200161039e565b34801561046957600080fd5b5061044f7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561049d57600080fd5b5061044f7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b5061044f6104e036600461658a565b610f05565b3480156104f157600080fd5b5061038d6105003660046165bf565b611094565b34801561051157600080fd5b5061036b6105203660046165d8565b611104565b34801561053157600080fd5b5061036b6105403660046165bf565b611152565b34801561055157600080fd5b5061036b61056036600461661e565b61115e565b34801561057157600080fd5b5061044f6105803660046165bf565b611309565b34801561059157600080fd5b5061036b6105a0366004616657565b6001600160801b03908116600160801b02911617600855565b3480156105c557600080fd5b5061036b6105d436600461668a565b61131a565b3480156105e557600080fd5b5061038d6105f43660046166c1565b611392565b61044f61060736600461637d565b6113ae565b34801561061857600080fd5b5061036b6106273660046165bf565b61162e565b34801561063857600080fd5b5061036b6106473660046166ff565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106e657600080fd5b506013546001600160801b0380821691600160801b90041661038d565b34801561070f57600080fd5b5061036b61071e3660046167c7565b611637565b34801561072f57600080fd5b5061044f611886565b61044f610746366004616530565b611895565b34801561075757600080fd5b5061076b61076636600461661e565b611b92565b60408051948552602085019390935291830152606082015260800161039e565b34801561079757600080fd5b5061036b6107a6366004616843565b611bb2565b3480156107b757600080fd5b5061036b6107c636600461668a565b611bbe565b3480156107d757600080fd5b5061036b6107e63660046165bf565b601455565b3480156107f757600080fd5b5061036b610806366004616878565b611c2a565b34801561081757600080fd5b5061044f6108263660046165bf565b611c9e565b34801561083757600080fd5b5061085f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561088357600080fd5b5061036b610892366004616893565b600980546001600160801b03928316600160801b029216919091179055565b3480156108bd57600080fd5b5061044f6108cc3660046165bf565b611ca9565b61038d6108df366004616530565b611cb4565b3480156108f057600080fd5b5061038d6108ff36600461637d565b611ed5565b34801561091057600080fd5b5060145461044f565b61038d610927366004616530565b6120d1565b34801561093857600080fd5b5061044f610947366004616530565b612305565b34801561095857600080fd5b5061036b6109673660046168ae565b612534565b34801561097857600080fd5b5061036b6109873660046165bf565b612584565b336000908152600f602052604090205460ff166109bb576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b600080600054600114610a035760405162461bcd60e51b81526004016109fa90616905565b60405180910390fd5b60026000908155610a1261268e565b9050610a25610a1f61278d565b826127c3565b50610a2f81612aaf565b600d548692506001600160801b031680831115610a5357806001600160801b031692505b82600003610a6957600080935093505050610bc0565b610a78600360f81b3385612b72565b600d546001600160801b03600160801b909104811690600090610aa090869084908616612c1b565b9050610aab85612c39565b610ab5908461693f565b600d80546001600160801b0319166001600160801b0392909216919091179055610ade81612c39565b600d8054601090610b00908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b2e8188612c63565b955085610b3b8987612f4f565b1115610b5a5760405163c972651760e01b815260040160405180910390fd5b610b676020880188616878565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610b9c8488612f4f565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b0386161580610bec57506001600160a01b038516155b15610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c2a5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610c7a57610c72858583818110610c4a57610c4a616966565b905060200201358888868686818110610c6557610c65616966565b9050602002013533612f6b565b600101610c2d565b50505050505050565b610c908484848433612f6b565b50505050565b6000806000806000610caa8989898961312c565b939d929c50909a509850909650945050505050565b60008054600114610ce25760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610d285760405163211ddda360e11b815260040160405180910390fd5b6000610d3261268e565b9050610d3e86826127c3565b50610d54610d4d600288613236565b3387612b72565b600080600080600080610d688b888e61326b565b949a509298509096509450925090508a8c8842821115610e39578360106000828254610d94919061697c565b90915550610da79050838a8988866134df565b6000610dd37f00000000000000000000000000000000000000000000000000000000000000008461698f565b6000818152600e6020526040812054919250600160801b909104600f0b90610e069086908a908e908d9089908990613659565b6000828152600e6020526040902054610e2d90600f83810b91600160801b9004900b613802565b610e3683612aaf565b50505b6000610e45898e612c63565b90508c6000610e55838e84613929565b90508f811015610e785760405163c972651760e01b815260040160405180910390fd5b610e83600286613236565b8f6000016020810190610e969190616878565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610f285760405162461bcd60e51b81526004016109fa90616905565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610f646020840184616878565b6001600160a01b031614610f8b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610fd45750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610feb57506011546001600160a01b03163314155b15611008576040516282b42960e81b815260040160405180910390fd5b60108054600090915561101b8184612c63565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee8361107161268e565b6040805192835260208301919091520160405180910390a2506001600055919050565b600080601283815481106110aa576110aa616966565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b0316601284815481106110e7576110e7616966565b600091825260209091200154909463ffffffff9091169350915050565b8361110e81613959565b6001600160a01b0316336001600160a01b03161461113f57604051632aab8bd360e01b815260040160405180910390fd5b61114b85858585613a16565b5050505050565b61115b81613a83565b50565b6040516370a0823160e01b81523060048201526000906111f4906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed91906169a2565b8385613bdd565b915050600081131561127c576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561126857600080fd5b505af1158015610c7a573d6000803e3d6000fd5b6000811215611304576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac306112be846169bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561126857600080fd5b505050565b600061131482613c77565b92915050565b6011546001600160a01b03163314611344576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6000806113a0858585613cc8565b90925090505b935093915050565b600080546001146113d15760405162461bcd60e51b81526004016109fa90616905565b60026000556113de613d48565b600c5460ff161561140257604051637983c05160e01b815260040160405180910390fd5b60008061140f8685613db5565b909250905061143f7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b82101561145f57604051632afb507160e21b815260040160405180910390fd5b61148a7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b611494908361698f565b600c805460ff1916600117905592506114ac82612c39565b600880546001600160801b0319166001600160801b039290921691909117905561154161153c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006140a2565b612c39565b600880546001600160801b03928316600160801b02921691909117905561158a6000807f0000000000000000000000000000000000000000000000000000000000000000614104565b6115a2600061159c6020870187616878565b85614104565b6115ad610a1f61278d565b5060006115bb878387613929565b90506115ca6020860186616878565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b61115b816141a4565b834211156116585760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661167f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117ab573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061180f906169ee565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061189061278d565b905090565b600080546001146118b85760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff16156118e6576040516313d0ff5960e31b815260040160405180910390fd5b6118ee613d48565b7f000000000000000000000000000000000000000000000000000000000000000085101561192f5760405163211ddda360e11b815260040160405180910390fd5b60006119b761193c614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614347565b9050848110806119c657508381115b156119e457604051633b61151160e11b815260040160405180910390fd5b6000806119f18886613db5565b91509150611a00610a1f61278d565b50600d54600360f81b60009081526002602052600080516020616b3f833981519152549091611a3a916001600160801b039091169061698f565b60008080526002602052600080516020616b5f8339815191525491925090611a6390839061697c565b90506000806000611a7386614382565b9050611a7e816144e8565b9150611a89876141a4565b6008546001600160801b038082168352600954600f0b6020840152600160801b909104166040820152611abb816144e8565b9250611ad38483611acc818761698f565b9190612c1b565b9850611aef90506000611ae960208c018c616878565b8a614104565b611af885612aaf565b60008315611b0f57611b0a8285614756565b611b12565b60005b9050611b2160208b018b616878565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a611b568a8a612f4f565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b600080600080611ba2868661476b565b9299919850965090945092505050565b61130483838333613a16565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611c54576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006113148261488f565b600061131482614938565b600080600054600114611cd95760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615611d07576040516313d0ff5960e31b815260040160405180910390fd5b611d0f613d48565b600080611d1c8886613db5565b915091506000611d2d898388613929565b90507f0000000000000000000000000000000000000000000000000000000000000000811015611d705760405163211ddda360e11b815260040160405180910390fd5b86821015611d91576040516342af972b60e01b815260040160405180910390fd5b6000611d9b61278d565b9050611da781846127c3565b506000806000611db7878761476b565b909a5091945092509050878c1115611de25760405163c972651760e01b815260040160405180910390fd5b8060106000828254611df4919061697c565b90915550611e2490507f00000000000000000000000000000000000000000000000000000000000000008561697c565b9850611e3483898489888e6149ae565b6000611e4160018b613236565b9050611e5a81611e5460208e018e616878565b8b614104565b80611e6860208d018d616878565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b600080600054600114611efa5760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611f405760405163211ddda360e11b815260040160405180910390fd5b6000611f4a61268e565b9050611f57610a1f61278d565b50611f6181612aaf565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091611faa916001600160801b039091169061698f565b90506000611fb8828461697c565b9050611fc66000338b612b72565b600080611fd68b87858888614b9c565b9098509092509050611ff9600360f81b611ff360208c018c616878565b89614104565b612003828a612c63565b9750600061201289888c613929565b9050888b11156120355760405163c972651760e01b815260040160405180910390fd5b6000841561204c576120478386614756565b61204f565b60005b905061205e60208c018c616878565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b6000806000546001146120f65760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615612124576040516313d0ff5960e31b815260040160405180910390fd5b61212c613d48565b7f000000000000000000000000000000000000000000000000000000000000000086101561216d5760405163211ddda360e11b815260040160405180910390fd5b600061217761268e565b90508481101561219a576040516342af972b60e01b815260040160405180910390fd5b60006121a461278d565b905060006121b282846127c3565b905060006121e07f00000000000000000000000000000000000000000000000000000000000000008461697c565b905060008060006121f28d8887614c9e565b909450909250905061220582888c614dd4565b91508060106000828254612219919061697c565b909155505050808b10156122405760405163c972651760e01b815260040160405180910390fd5b600061224c828b613db5565b50905061225b8d848987614dfc565b6000612268600286613236565b90508d6122828261227c60208f018f616878565b83614104565b8161229060208e018e616878565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95886122c5878e612f4f565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b600080546001146123285760405162461bcd60e51b81526004016109fa90616905565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561236e5760405163211ddda360e11b815260040160405180910390fd5b600061237861268e565b905061238486826127c3565b50612393610d4d600188613236565b6000806000806000806123a78b888e61503a565b95509550955095509550955060008c90508c4210156124705781601060008282546123d2919061697c565b909155506123e590508c888786856151b6565b60006124117f00000000000000000000000000000000000000000000000000000000000000008361698f565b6000818152600e6020526040902054909150600160801b9004600f0b61243d8e878b8a878f6001613659565b6000828152600e602052604090205461246490600f83810b91600160801b9004900b613802565b61246d8a612aaf565b50505b600061247c878c612c63565b9050600061248b828b8e613929565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600185613236565b6124c760208f018f616878565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b8461253e81613959565b6001600160a01b0316336001600160a01b03161461256f57604051632aab8bd360e01b815260040160405180910390fd5b61257c8686868686612f6b565b505050505050565b6000818152600e60205260409020546001600160801b0316156125a45750565b60006125ae61278d565b90506125da7f000000000000000000000000000000000000000000000000000000000000000083616a1d565b1515806125e657508181105b156126045760405163ecd29e8160e01b815260040160405180910390fd5b80820361261c576113048161261761268e565b6127c3565b815b6000818152600e60205260409020546001600160801b03168282036126485761264561268e565b90505b80156126585761114b84826127c3565b506126837f00000000000000000000000000000000000000000000000000000000000000008261697c565b905061261e565b5050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126dd575047612768565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612741573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276591906169a2565b90505b601454600003612779576000612787565b601454612787908290614756565b91505090565b60006127b97f000000000000000000000000000000000000000000000000000000000000000042616a1d565b611890904261698f565b6000828152600e6020526040812080546001600160801b03161515806127e857504284115b156127fe57546001600160801b03169050611314565b61280783612c39565b81546001600160801b0319166001600160801b03919091161781556000600e816128517f00000000000000000000000000000000000000000000000000000000000000008861698f565b815260208101919091526040016000908120546001600160801b0316915061287a600287613236565b60008181526002602052604081205491925081156128d3576000806128a2848a886000615383565b9150915080601060008282546128b8919061697c565b909155506128cc905084600084808e6134df565b6001925050505b60006128e060018a613236565b600081815260026020526040902054909150801561293b57600080612908838c8a6001615383565b91509150806010600082825461291e919061697c565b909155508c90506129338460008580856151b6565b600195505050505b82156129b957600061296d7f00000000000000000000000000000000000000000000000000000000000000008c61698f565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926129ad928492919004900b613802565b6129b68b612aaf565b50505b6000808a116129c95760006129e4565b6129e48a6129de6129d98d614382565b6144e8565b90612f4f565b600d546002602052600080516020616b3f833981519152546000808052600080516020616b5f83398151915254939450926001600160801b0390921691612a2b919061697c565b612a35919061698f565b905060008115612a4e57612a498383614756565b612a51565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091612af8916001600160801b039091169061698f565b90506000612b06828461697c565b90506000612b166129d986614382565b90506000612b25858385612c1b565b9050600080612b338861488f565b905082811115612b4a57612b47838261698f565b91505b6000821180612b57575083155b15612b6857612b6882858789615451565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612ba490849061698f565b909155505060008381526002602052604081208054839290612bc790849061698f565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000826000190484118302158202612c3257600080fd5b5091020490565b6000600160801b8210612c5f57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006014548311612c745782612c78565b6014545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cc8575047612d53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5091906169a2565b90505b601454600003612d64576000612d83565b612d83612d7c6014548361475690919063ffffffff16565b8590612f4f565b91508360146000828254612d97919061698f565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e4b57612df16020850185616878565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114612e3b576040519150601f19603f3d011682016040523d82523d6000602084013e612e40565b606091505b505080915050612efb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb612e876020870187616878565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015612ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef89190616a31565b90505b80612f19576040516312171d8360e31b815260040160405180910390fd5b612f29604085016020860161634e565b612f4457612f3f612f3861268e565b8490614756565b612f46565b825b95945050505050565b6000612f648383670de0b6b3a7640000612c1b565b9392505050565b6001600160a01b0384161580612f8857506001600160a01b038316155b15612fa65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461306a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff1661306a5760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146130685760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061306290849061698f565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061309c90849061698f565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130d390849061697c565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000808080806131778887611acc8c6129de6131508d670de0b6b3a764000061698f565b7f000000000000000000000000000000000000000000000000000000000000000090612f4f565b94506131a3857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b925060006131c46131bc8a670de0b6b3a764000061698f565b8b9089612c1b565b90506131f0817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b945061321c857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9250613228838561697c565b915050945094509450945094565b60006001600160f81b038211156132605760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080600080600080600061327f88613c77565b90506132e961328c614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061553a565b9098509550935060006133576132fd614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b905061338d8589613388847f00000000000000000000000000000000000000000000000000000000000000006155bb565b6155eb565b156133ab5760405163512095c760e01b815260040160405180910390fd5b6133b481613a83565b8a8a600080806133c68588888761312c565b9b5092955090935091506133dc9050818461698f565b6133e6908b61697c565b99506133f2828461697c565b6133fc908c61697c565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613437919061698f565b815260208101919091526040016000908120546001600160801b03169150428911613479576000898152600e60205260409020546001600160801b031661347b565b895b90506134ab8b8784848e7f0000000000000000000000000000000000000000000000000000000000000000615674565b96506134b7838761698f565b95506134c987878786868660006156c6565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b031661352861153c8261350b85670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b031691908a6000615741565b600b80546001600160801b03928316600160801b02921691909117905561354e86612c39565b613558908261693f565b600a80546001600160801b03928316600160801b0292169190911790555061357f83612c39565b6008805460009061359a9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506135c7826157bb565b600980546000906135dc908490600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061360c84612c39565b6008805460109061362e908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006136857f00000000000000000000000000000000000000000000000000000000000000008561698f565b9050600060026000613698600188613236565b81526020019081526020016000205490506000600260006136ba600289613236565b81526020019081526020016000205490508160001480156136d9575080155b156136fe576000838152600e6020526040902080546001600160801b031690556137f6565b60006137428b61370e8c89612f4f565b6137199060026169d7565b8b6137248c8b612f4f565b61372e919061697c565b613738919061698f565b61153c919061697c565b905084156137a1576000848152600e602052604090208054829190601090613775908490600160801b9004600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506137f4565b6000848152600e6020526040902080548291906010906137cc908490600160801b9004600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015613812575060008212155b156138a557600061382382826157f9565b61382d9084616ac8565b60095490915061385a90613855908390600160801b90046001600160801b0316600f0b61580f565b6157bb565b6009805460109061387c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561268a576000821261391b576138be826157bb565b6138c7826157bb565b6138d19190616a9b565b600980546010906138f3908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6138d16138558260006157f9565b600061393b604083016020840161634e565b15613947575082612f64565b6139518484612f4f565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b82048116911642613ac47f00000000000000000000000000000000000000000000000000000000000000008461697c565b1115613acf57505050565b600060128281548110613ae457613ae4616966565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690613b18834261698f565b601254909150878202830190600090613b3288600161697c565b613b3c9190616a1d565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110613b7557613b75616966565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008080613bef846301e13380614756565b90506000613c0e8260008812613c0557876129de565b6129de886169bb565b90506000861315613c4157613c2c613c258261581e565b8890612f4f565b9350613c38878561698f565b925050506113a6565b6000861215613c6957613c5d613c568261581e565b8890614756565b9350613c388785616ac8565b509495600095509350505050565b600080613c8261278d565b9050808311613c92576000613c9c565b613c9c818461698f565b9150612f64827f0000000000000000000000000000000000000000000000000000000000000000614756565b600080613d12856129de85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613d08818c614756565b6129de919061698f565b9150613d3e827f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9050935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590613d955750600034115b15613db357604051631574f9f360e01b815260040160405180910390fd5b565b60008080613dc9604085016020860161634e565b613de457613ddf613dd861268e565b8690612f4f565b613de6565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613eb45747915082341015613e55576040516312171d8360e31b815260040160405180910390fd5b82341115613eaf5733613e68843461698f565b604051600081818185875af1925050503d8060008114613ea4576040519150601f19603f3d011682016040523d82523d6000602084013e613ea9565b606091505b50909150505b613fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f3c91906169a2565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613fd69190616a31565b90505b80613ff7576040516312171d8360e31b815260040160405180910390fd5b60145460000361405e5761402b837f0000000000000000000000000000000000000000000000000000000000000000614756565b601481905594507f0000000000000000000000000000000000000000000000000000000000000000935061409b92505050565b60145460009061406f908585612c1b565b90508060146000828254614083919061697c565b9091555081905061409261268e565b95509550505050505b9250929050565b6000806140b3846301e13380614756565b90506140f96140ef6140cd670de0b6b3a7640000866159a9565b6140d78885612f4f565b6140e990670de0b6b3a764000061697c565b906159be565b6129de888a612f4f565b979650505050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061413690849061697c565b90915550506000838152600260205260408120805483929061415990849061697c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612c0e565b806000036141af5750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156141fc5760405163585fe6df60e11b815260040160405180910390fd5b60006142088383616ae8565b90507f000000000000000000000000000000000000000000000000000000000000000081121561424b5760405163585fe6df60e11b815260040160405180910390fd5b61425481612c39565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126142965761428f838286612c1b565b91506142b6565b6142aa6142a2826169bb565b849086612c1b565b6142b3906169bb565b91505b6142bf826157bb565b600980546001600160801b0319166001600160801b039283161790556008546143029161153c91600160801b9004166142f88785615a15565b611acc8787615a15565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600854600954600091611890916001600160801b0390911690600f0b615a15565b600080614356878787866155aa565b90506140f961436a82866301e13380615a32565b61437c83670de0b6b3a764000061698f565b90614756565b6143df60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916144ae9116614938565b8152600a546001600160801b03600160801b9182900481166020840152600b546040909301926144e092900416614938565b905292915050565b600080614508836101400151846101200151612f4f90919063ffffffff16565b61010084015160e085015161451c91612f4f565b6145269190616ac8565b9050600061453c84600001518560200151615a15565b905060008213156145dc57600061457e8286604001518760a001518860c00151670de0b6b3a764000061456f919061698f565b89606001518a60800151615a58565b905061458a8184615af2565b905080156145d6576145c3828660400151838860c00151670de0b6b3a76400006145b4919061698f565b89606001518a60800151615b01565b855186906145d290839061698f565b9052505b50614698565b6000821215614698576145ee826169bb565b915060006146228286604001518760c00151670de0b6b3a7640000614613919061698f565b88606001518960800151615b35565b905061462e8184615af2565b9050801561467a57614667828660400151838860c00151670de0b6b3a7640000614658919061698f565b89606001518a60800151615bcb565b8551869061467690839061697c565b9052505b614684818461698f565b8551869061469390839061697c565b905250505b60006146c7856101000151670de0b6b3a76400006146b6919061698f565b606087015160e08801519190612c1b565b6146f5866101400151670de0b6b3a76400006146e3919061698f565b60608801516101208901519190612c1b565b6146ff9190616ac8565b905060008186600001516147139190616ae8565b90508560a0015181121561473a5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161474c908261698f565b9695505050505050565b6000612f6483670de0b6b3a764000084612c1b565b6000806000806147d861477c614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615c60565b925060006147e76132fd614326565b90506148188785613388847f0000000000000000000000000000000000000000000000000000000000000000615c81565b156148365760405163512095c760e01b815260040160405180910390fd5b61483f81613a83565b60008061484d89848a613cc8565b909250905061485c828761698f565b9450614868818661697c565b955061487581848a612c1b565b9350614881848a61698f565b965050505092959194509250565b60095460009081906148b190600160801b90046001600160801b031684614756565b90506148dd7f00000000000000000000000000000000000000000000000000000000000000008261697c565b6008546001600160801b03161115614932576008547f0000000000000000000000000000000000000000000000000000000000000000906149289083906001600160801b031661698f565b612f64919061698f565b50919050565b600080670de0b6b3a764000061494c61278d565b61495691906169d7565b9050808311614966576000614970565b614970818461698f565b9150612f646149a7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006169d7565b8390614756565b600a546001600160801b03166149e961153c826149d385670de0b6b3a76400006169d7565b600b546001600160801b031691908a6001615741565b600b80546001600160801b0319166001600160801b0392909216919091179055614a1287612c39565b60088054600090614a2d9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a5a85612c39565b60088054601090614a7c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614aa986612c39565b614ab39082616a4e565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90614b0f614afa8b89612f4f565b614b058b60026169d7565b61153c919061698f565b835490915081908490601090614b30908490600160801b9004600f0b616a6e565b82546001600160801b039182166101009390930a9283029190920219909116179055508254614b6d90600f84810b91600160801b9004900b613802565b614b7687615cce565b614b93576040516318846de960e01b815260040160405180910390fd5b6137f687612aaf565b600080600080614bab88614382565b90506000614bb8826144e8565b9050614bca614bc561268e565b61488f565b9450614bd7858b89612c1b565b9450614bea614be5866169bb565b6141a4565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000614c1e836144e8565b90506000614c2d8a8385612c1b565b9050614c398c8b616ac8565b614c439082616ac8565b90506000811215614c8c576000614c64614c5c836169bb565b85908d612c1b565b9050614c70818961698f565b9750614c7b816141a4565b614c86818a8e615d40565b60009150505b94509092505050955095509592505050565b6000806000614d0a614cae614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615d85565b915085614d178387612f4f565b1115614d365760405163512095c760e01b815260040160405180910390fd5b6000614d436132fd614326565b9050614d4e81613a83565b600080614d6589670de0b6b3a7640000858b61312c565b509294509250614d7991508290508361698f565b614d83908661698f565b9450614dc589614d93838861698f565b89614d9e8c82615da6565b8c7f0000000000000000000000000000000000000000000000000000000000000000615674565b95509250505093509350939050565b6000614de6604083016020840161634e565b15614df5576139518484612f4f565b5082612f64565b600a54614e469061153c90600160801b90046001600160801b0316614e2984670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b03169190886001615741565b600b80546001600160801b03928316600160801b0292169190911790556000614e6e84612c39565b600854614e8491906001600160801b031661693f565b600880546001600160801b0319166001600160801b0383161790559050614eaa85612c39565b60088054601090614ecc908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614ef985612c39565b600a8054601090614f1b908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b911612159050614f6a5760405163585fe6df60e11b815260040160405180910390fd5b6000614f7461278d565b6000818152600e6020526040902054909150600160801b9004600f0b614f9987612c39565b6000838152600e602052604090208054601090614fc1908490600160801b9004600f0b616a9b565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461500b90600f83810b91600160801b9004900b613802565b61501485615cce565b615031576040516318846de960e01b815260040160405180910390fd5b610c7a85612aaf565b600080600080600080600061504e88613c77565b90506150b861505b614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615db5565b9098509650935060006150cc6132fd614326565b90506150d781613a83565b6000806150e68d85858f61312c565b98509294509092506150fc91508390508861698f565b9650615108818361697c565b615112908a61698f565b985061511e858a61697c565b9750505050506151a285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61515b919061698f565b81526020810191909152604001600020546001600160801b0316428d116151995760008d8152600e60205260409020546001600160801b031661519b565b8d5b60016156c6565b999d939c50919a5098509695509350505050565b600a546001600160801b03166151f161153c826151db85670de0b6b3a76400006169d7565b600b546001600160801b031691908a6000615741565b600b80546001600160801b0319166001600160801b039290921691909117905561521a86612c39565b615224908261693f565b600a80546001600160801b0319166001600160801b03929092169190911790555061524e83612c39565b600880546000906152699084906001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550615296826157bb565b600980546000906152ab908490600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506152db84612c39565b600880546010906152fd908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806153655750600954600854600f9190910b6001600160801b03909116125b1561114b5760405163585fe6df60e11b815260040160405180910390fd5b6000806153908686614756565b915060006153be837f0000000000000000000000000000000000000000000000000000000000000000612f4f565b90506153ea817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9150831561540d576153fc828261698f565b615406908461698f565b9250615424565b615417828261698f565b615421908461697c565b92505b8486101561544757615437838787612c1b565b9250615444828787612c1b565b91505b5094509492505050565b6000808411615460578261546b565b61546b838686612c1b565b90508060000361547b5750610c90565b80858382111561549657839150615493878385612c1b565b90505b61549f82612c39565b600d80546000906154ba9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506154e781612c39565b600d8054601090615509908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c7a81614be5906169bb565b6000808061555b61555388670de0b6b3a764000061698f565b899087612c1b565b90506155678888612f4f565b9150811561559d5761558e8a8a846155878a670de0b6b3a764000061698f565b8989615bcb565b925061559a838261697c565b90505b9750975097945050505050565b6000612f46826140e9858888612c1b565b60006155d96155d284670de0b6b3a764000061698f565b8390615e01565b612f6490670de0b6b3a764000061698f565b600080615669856155fa614326565b615604919061697c565b600854615622908790600160801b90046001600160801b031661698f565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b909210949350505050565b60008061568d856156858887615e01565b8a9190612c1b565b905061569a888486612c1b565b6156a4908261697c565b9050868111156156bb576156b8878261698f565b91505b509695505050505050565b600080600080600080888810156157235786156156eb576156e88d898b612c1b565b9c505b6156f68c898b612c1b565b9b506157028b8d616ac8565b905061570f8b898b612c1b565b9a5061571c8a898b612c1b565b9950615730565b61572d8b8d616ac8565b90505b9b9c9a9b999a975050505050505050565b600081156157815761577a615756848761697c565b6157608587612f4f565b61576a888a612f4f565b615774919061697c565b906159a9565b9050612f46565b82850361579057506000612f46565b61474c61579d848761698f565b6157a78587612f4f565b6157b1888a612f4f565b615774919061698f565b600060016001607f1b031982128015906157dc575060016001607f1b038213155b612c5f5760405163a5353be560e01b815260040160405180910390fd5b60008183136158085781612f64565b5090919050565b60008183136149325782612f64565b6000680248ce36a70cb26b3e19821361583957506000919050565b680755bf798b4a1bf1e582126158625760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000612f6483670de0b6b3a764000084615a32565b6000816000036159d75750670de0b6b3a7640000611314565b826000036159e757506000611314565b8160006159f385615e16565b9050818102615a0a670de0b6b3a764000082616b10565b905061474c8161581e565b600080615a228385616ac8565b90506000811215612f6457600080fd5b6000826000190484118302158202615a4957600080fd5b50910281810615159190040190565b600080615a688888878787616029565b90506000615a85615a7d876140e9878b615e01565b869086615a32565b615a8f908361698f565b9050670de0b6b3a76400008110615ac357615abc615ab5670de0b6b3a764000088614756565b82906159be565b9050615adb565b615ad8615ab5670de0b6b3a7640000886159a9565b90505b615ae5888261698f565b9998505050505050505050565b60008183116149325782612f64565b600080615b12888888888888616058565b9092509050806156bb57604051637ac17d2560e01b815260040160405180910390fd5b600080615b45878787878761611a565b90506000615b70670de0b6b3a7640000615b5f8787614756565b615b69919061697c565b83906159a9565b9050670de0b6b3a76400008110615b9d57615b96615ab5670de0b6b3a7640000886159a9565b9050615bb5565b615bb2615ab5670de0b6b3a764000088614756565b90505b615bbf818861698f565b98975050505050505050565b600080615bdb888887878761611a565b9050615beb856140e9888a61698f565b96506000615c058486615bfe8b8661698f565b9190615a32565b9050670de0b6b3a76400008110615c3257615c2b615ab5670de0b6b3a7640000886159a9565b9050615c4a565b615c47615ab5670de0b6b3a764000088614756565b90505b615c5481856159a9565b9050615ae5898261698f565b60006140f9878787615c7a88670de0b6b3a764000061698f565b878761613f565b6000612f64615cad670de0b6b3a7640000615c9c81876159a9565b615ca6919061698f565b8490615e01565b615cbf90670de0b6b3a764000061697c565b670de0b6b3a764000090614756565b6000615cfa7f000000000000000000000000000000000000000000000000000000000000000083612f4f565b600954600854615d38916000916001600160801b03600160801b9092048216600f0b91615d28911687612f4f565b615d329190616ac8565b906157f9565b121592915050565b6000615d4e6129d983614382565b60008080526002602052600080516020616b5f8339815191525491925090615d7790859061697c565b905061114b85838387615451565b60006140f9878787615d9f88670de0b6b3a764000061698f565b8787615b01565b60008183116158085781612f64565b60008080615dce61555388670de0b6b3a764000061698f565b9050861561559d57615de08888612f4f565b915061558e8a8a84615dfa8a670de0b6b3a764000061698f565b8989615b01565b6000612f648383670de0b6b3a7640000615a32565b6000808213615e3857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600061603585856159be565b61604e616046866140e9868b612f4f565b859085612c1b565b61474c919061697c565b600080600061606a898988888861611a565b905061607a866140e9898b61697c565b97508781101561609157600080925092505061610f565b60006160a28587615bfe8c8661698f565b9050670de0b6b3a764000081106160cf576160c8615ab5670de0b6b3a7640000896159a9565b90506160e7565b6160e4615ab5670de0b6b3a764000089614756565b90505b6160f181866159a9565b9050808a111561610857616105818b61698f565b93505b6001925050505b965096945050505050565b600061612685856159be565b61604e616137866140e9868b615e01565b859085615a32565b60008061614f888887878761611a565b9050616162856140e9613dd8898c61697c565b975061616f848985612c1b565b9750600061617d898361698f565b9050670de0b6b3a764000081106161aa576161a3615ab5670de0b6b3a7640000886159a9565b90506161c2565b6161bf615ab5670de0b6b3a764000088614756565b90505b615ae5818961698f565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561620b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561624d5761624d616213565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561627c5761627c616213565b604052919050565b6000602080838503121561629757600080fd5b825167ffffffffffffffff808211156162af57600080fd5b818501915085601f8301126162c357600080fd5b8151818111156162d5576162d5616213565b6162e7601f8201601f19168501616253565b915080825286848285010111156162fd57600080fd5b60005b8181101561631b578381018501518382018601528401616300565b50600090820190930192909252509392505050565b801515811461115b57600080fd5b803561634981616330565b919050565b60006020828403121561636057600080fd5b8135612f6481616330565b60006060828403121561493257600080fd5b60008060006060848603121561639257600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156163b757600080fd5b6163c38682870161636b565b9150509250925092565b80356001600160a01b038116811461634957600080fd5b60008083601f8401126163f657600080fd5b50813567ffffffffffffffff81111561640e57600080fd5b6020830191508360208260051b850101111561409b57600080fd5b6000806000806000806080878903121561644257600080fd5b61644b876163cd565b9550616459602088016163cd565b9450604087013567ffffffffffffffff8082111561647657600080fd5b6164828a838b016163e4565b9096509450606089013591508082111561649b57600080fd5b506164a889828a016163e4565b979a9699509497509295939492505050565b600080600080608085870312156164d057600080fd5b843593506164e0602086016163cd565b92506164ee604086016163cd565b9396929550929360600135925050565b6000806000806080858703121561651457600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561654657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561657257600080fd5b61657e8782880161636b565b91505092959194509250565b60006020828403121561659c57600080fd5b813567ffffffffffffffff8111156165b357600080fd5b6139518482850161636b565b6000602082840312156165d157600080fd5b5035919050565b600080600080608085870312156165ee57600080fd5b843593506165fe602086016163cd565b925060408501359150616613606086016163cd565b905092959194509250565b6000806040838503121561663157600080fd5b50508035926020909101359150565b80356001600160801b038116811461634957600080fd5b6000806040838503121561666a57600080fd5b61667383616640565b915061668160208401616640565b90509250929050565b6000806040838503121561669d57600080fd5b6166a6836163cd565b915060208301356166b681616330565b809150509250929050565b6000806000606084860312156166d657600080fd5b505081359360208301359350604090920135919050565b8035600f81900b811461634957600080fd5b6000610140828403121561671257600080fd5b61671a616229565b61672383616640565b815261673160208401616640565b6020820152616742604084016166ed565b604082015261675360608401616640565b606082015261676460808401616640565b608082015261677560a08401616640565b60a082015261678660c08401616640565b60c082015261679760e08401616640565b60e08201526101006167aa81850161633e565b908201526101206167bc84820161633e565b908201529392505050565b600080600080600080600060e0888a0312156167e257600080fd5b6167eb886163cd565b96506167f9602089016163cd565b9550604088013561680981616330565b945060608801359350608088013560ff8116811461682657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561685857600080fd5b83359250616868602085016163cd565b9150604084013590509250925092565b60006020828403121561688a57600080fd5b612f64826163cd565b6000602082840312156168a557600080fd5b612f6482616640565b600080600080600060a086880312156168c657600080fd5b853594506168d6602087016163cd565b93506168e4604087016163cd565b9250606086013591506168f9608087016163cd565b90509295509295909350565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b0382811682821603908082111561695f5761695f616929565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561131457611314616929565b8181038181111561131457611314616929565b6000602082840312156169b457600080fd5b5051919050565b6000600160ff1b82016169d0576169d0616929565b5060000390565b808202811582820484141761131457611314616929565b600060018201616a0057616a00616929565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082616a2c57616a2c616a07565b500690565b600060208284031215616a4357600080fd5b8151612f6481616330565b6001600160801b0381811683821601908082111561695f5761695f616929565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131457611314616929565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561131457611314616929565b818103600083128015838313168383128216171561695f5761695f616929565b8082018281126000831280158216821582161715616b0857616b08616929565b505092915050565b600082616b1f57616b1f616a07565b600160ff1b821460001984141615616b3957616b39616929565b50059056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220d5c2afef71732e7893d44182fd276be29c213009625e7858d823283afa2e93bc64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a26469706673582212204c6596a7ab6d6602a62f8d183eedf02f06c8c09b1401672c9f58cc9d71a6385864736f6c63430008130033",
    "sourceMap": "343:12813:125:-:0;;;;;1572:26:56;;;1594:4;-1:-1:-1;;1572:26:56;;;;;;;;3126:44:60;;;;;;;;;;;-1:-1:-1;;;1262:31:161;;216:2:167;1262:31:161;198:21:167;255:2;235:18;228:30;-1:-1:-1;;;274:18:167;267:45;1262:12:161;;329:18:167;1262:31:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1262:31:161;;;;;;;;;;;;:::i;:::-;1237:56;;;;;;:::i;:::-;-1:-1:-1;1323:30:161;;-1:-1:-1;;;1323:30:161;;4328:2:167;1323:30:161;;;4310:21:167;4367:2;4347:18;;;4340:30;-1:-1:-1;;;4386:18:167;;;4379:44;1323:12:161;;;;4440:18:167;;1323:30:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1323:30:161;;;;;;;;;;;;:::i;:::-;1299:54;;;;;;:::i;:::-;;343:12813:125;;;;;;;;;;;;358:127:167;419:10;414:3;410:20;407:1;400:31;450:4;447:1;440:15;474:4;471:1;464:15;490:1042;570:6;601:2;644;632:9;623:7;619:23;615:32;612:52;;;660:1;657;650:12;612:52;687:16;;-1:-1:-1;;;;;752:14:167;;;749:34;;;779:1;776;769:12;749:34;817:6;806:9;802:22;792:32;;862:7;855:4;851:2;847:13;843:27;833:55;;884:1;881;874:12;833:55;913:2;907:9;935:2;931;928:10;925:36;;;941:18;;:::i;:::-;1016:2;1010:9;984:2;1070:13;;-1:-1:-1;;1066:22:167;;;1090:2;1062:31;1058:40;1046:53;;;1114:18;;;1134:22;;;1111:46;1108:72;;;1160:18;;:::i;:::-;1200:10;1196:2;1189:22;1235:2;1227:6;1220:18;1275:7;1270:2;1265;1261;1257:11;1253:20;1250:33;1247:53;;;1296:1;1293;1286:12;1247:53;1318:1;1309:10;;1328:129;1342:2;1339:1;1336:9;1328:129;;;1430:10;;;1426:19;;1420:26;1399:14;;;1395:23;;1388:59;1353:10;;;;1328:129;;;1499:1;1494:2;1489;1481:6;1477:15;1473:24;1466:35;1520:6;1510:16;;;;;;;;490:1042;;;;:::o;1537:380::-;1616:1;1612:12;;;;1659;;;1680:61;;1734:4;1726:6;1722:17;1712:27;;1680:61;1787:2;1779:6;1776:14;1756:18;1753:38;1750:161;;1833:10;1828:3;1824:20;1821:1;1814:31;1868:4;1865:1;1858:15;1896:4;1893:1;1886:15;1750:161;;1537:380;;;:::o;2048:545::-;2150:2;2145:3;2142:11;2139:448;;;2186:1;2211:5;2207:2;2200:17;2256:4;2252:2;2242:19;2326:2;2314:10;2310:19;2307:1;2303:27;2297:4;2293:38;2362:4;2350:10;2347:20;2344:47;;;-1:-1:-1;2385:4:167;2344:47;2440:2;2435:3;2431:12;2428:1;2424:20;2418:4;2414:31;2404:41;;2495:82;2513:2;2506:5;2503:13;2495:82;;;2558:17;;;2539:1;2528:13;2495:82;;;2499:3;;;2139:448;2048:545;;;:::o;2769:1352::-;2889:10;;-1:-1:-1;;;;;2911:30:167;;2908:56;;;2944:18;;:::i;:::-;2973:97;3063:6;3023:38;3055:4;3049:11;3023:38;:::i;:::-;3017:4;2973:97;:::i;:::-;3125:4;;3189:2;3178:14;;3206:1;3201:663;;;;3908:1;3925:6;3922:89;;;-1:-1:-1;3977:19:167;;;3971:26;3922:89;-1:-1:-1;;2726:1:167;2722:11;;;2718:24;2714:29;2704:40;2750:1;2746:11;;;2701:57;4024:81;;3171:944;;3201:663;1995:1;1988:14;;;2032:4;2019:18;;-1:-1:-1;;3237:20:167;;;3355:236;3369:7;3366:1;3363:14;3355:236;;;3458:19;;;3452:26;3437:42;;3550:27;;;;3518:1;3506:14;;;;3385:19;;3355:236;;;3359:3;3619:6;3610:7;3607:19;3604:201;;;3680:19;;;3674:26;-1:-1:-1;;3763:1:167;3759:14;;;3775:3;3755:24;3751:37;3747:42;3732:58;3717:74;;3604:201;-1:-1:-1;;;;;3851:1:167;3835:14;;;3831:22;3818:36;;-1:-1:-1;2769:1352:167:o;4126:338::-;343:12813:125;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040523480156200001157600080fd5b5060043610620001515760003560e01c8063507ffba511620000c7578063916a17c61162000086578063916a17c614620002bc578063ab75e7c314620002c6578063b5508aa914620002dd578063ba414fa614620002e7578063e20c9f711462000302578063fa7626d4146200030c57600080fd5b8063507ffba5146200022c57806351cf9a79146200025c57806366d9a9a014620002735780637949c523146200028c57806385226c8114620002a357600080fd5b80633e5e0d2611620001145780633e5e0d2614620001d35780633e5e3c2314620001ea5780633f7286f414620001f457806342aa13ae14620001fe57806348af0581146200021557600080fd5b80630a9254e414620001565780630ce4e17414620001625780631071676014620001795780631ed7831c14620001a35780633510924914620001bc575b600080fd5b620001606200031a565b005b62000160620001733660046200594f565b6200035f565b620001906200018a36600462005988565b620004d6565b6040519081526020015b60405180910390f35b620001ad62000560565b6040516200019a9190620059da565b62000160620001cd3660046200594f565b620005c4565b62000190620001e436600462005a29565b6200076e565b620001ad620009d1565b620001ad62000a33565b620001606200020f3660046200594f565b62000a95565b62000160620002263660046200594f565b62000c07565b620002436200023d36600462005aeb565b62000d9d565b6040516001600160a01b0390911681526020016200019a565b620001606200026d3660046200594f565b62000eb3565b6200027d62001045565b6040516200019a919062005ba5565b620001606200029d3660046200594f565b62001138565b620002ad620012aa565b6040516200019a919062005cb0565b6200027d62001384565b62000160620002d736600462005d16565b6200146e565b620002ad620017af565b620002f162001889565b60405190151581526020016200019a565b620001ad620019b6565b600754620002f19060ff1681565b6200032462001a18565b60006200033866b1a2bc2ec5000062001e8f565b620f424060408201526022549091506200035c906001600160a01b03168262001f55565b50565b620003758260006722b1c8c1227a0000620020c3565b9150620003a366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b839190620020c3565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620003db906001600160a01b031684846200214f565b601e549091508590600090620003fb906001600160a01b031683620021d8565b50601d549091506a0422ca8b0a00a4250000009060009062000427906001600160a01b0316836200226a565b9050620004396301e1338089620022fb565b60006200044682620023d5565b601d5490915060009062000464906001600160a01b03168462002972565b509050620004768183612710620029e6565b601e546200048f906001600160a01b0316868862002b73565b506200049b87620023d5565b601c54909250620004b6906001600160a01b03168862002972565b509050620004c88183612710620029e6565b505050505050505050505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200055691869186918216906370a0823190602401602060405180830381865afa15801562000529573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200054f919062005d6f565b856200076e565b90505b9392505050565b60606014805480602002602001604051908101604052809291908181526020018280548015620005ba57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116200059b575b5050505050905090565b620005da8260006722b1c8c1227a0000620020c3565b9150620005ff66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c5490915082906a0422ca8b0a00a4250000009060009062000635906001600160a01b031667016345785d8a0000846200214f565b9050600062000650856a0422ca8b0a00a42500000062005d59565b601e549091506200066b906001600160a01b031682620021d8565b506200068a90506200068360026301e1338062005d9f565b85620022fb565b601e548590620006a4906001600160a01b031682620021d8565b5050601d546a0422ca8b0a00a42500000090600090620006ce906001600160a01b0316836200226a565b9050620006ec620006e560026301e1338062005d9f565b88620022fb565b6000620006f982620023d5565b601d5490915060009062000717906001600160a01b03168462002972565b509050620007298183612710620029e6565b6200073487620023d5565b601c549092506200074f906001600160a01b03168862002972565b509050620007618183612710620029e6565b5050505050505050505050565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa158015620007ba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007e0919062005d6f565b905080841115620008045760405163188c93a560e31b815260040160405180910390fd5b60008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200085257600080fd5b505af115801562000867573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038916600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b158015620008bc57600080fd5b505af1158015620008d1573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a7640000602482015260008051602062011edb833981519152925063c88a5e6d9150604401600060405180830381600087803b1580156200093457600080fd5b505af115801562000949573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af11580156200099d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009c3919062005db6565b50839150505b949350505050565b60606016805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b60606015805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62000aab8260006722b1c8c1227a0000620020c3565b915062000ad066038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c54909150829067016345785d8a0000906a0422ca8b0a00a4250000009060009062000b08906001600160a01b031684846200214f565b9050600062000b23866a0422ca8b0a00a42500000062005d59565b601e5490915062000b3e906001600160a01b03168262002be7565b5062000b5d905062000b5660026301e1338062005d9f565b86620022fb565b601e54869062000b77906001600160a01b03168262002be7565b5050601d546a0422ca8b0a00a4250000009060009062000ba1906001600160a01b0316836200226a565b905062000bbf62000bb860026301e1338062005d9f565b89620022fb565b600062000bcc82620023d5565b601d5490915060009062000bea906001600160a01b03168462002972565b50905062000bfc8183612710620029e6565b6200049b87620023d5565b62000c1d8260006722b1c8c1227a000062002c6f565b915062000c4266038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c549091506a0422ca8b0a00a4250000009060009062000c76906001600160a01b031667016345785d8a0000846200214f565b9050600062000c91846a0422ca8b0a00a42500000062005d59565b601e5490915062000cac906001600160a01b031682620021d8565b5062000cc4905062000b5660026301e1338062005d9f565b601e5462000cdc906001600160a01b03168562002be7565b5050601d546a0422ca8b0a00a4250000009060009062000d06906001600160a01b0316836200226a565b905062000d1d620006e560026301e1338062005d9f565b600062000d2a82620023d5565b601d5490915060009062000d48906001600160a01b03168462002972565b50905062000d5a8183612710620029e6565b62000d6586620023d5565b601c5490925062000d80906001600160a01b03168762002972565b50905062000d928183612710620029e6565b505050505050505050565b60008160405160200162000db2919062005dda565b60408051601f198184030181529082905280516020909101206318caf8e360e31b8252915060008051602062011edb8339815191529063c657c7189062000e00908490869060040162005def565b600060405180830381600087803b15801562000e1b57600080fd5b505af115801562000e30573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab2400000602482015260008051602062011edb833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000e9557600080fd5b505af115801562000eaa573d6000803e3d6000fd5b50505050919050565b62000ec98260006722b1c8c1227a0000620020c3565b915062000eee66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c5490915082906a0422ca8b0a00a4250000009060009062000f24906001600160a01b031667016345785d8a0000846200214f565b9050600062000f3f856a0422ca8b0a00a42500000062005d59565b601e5490915062000f5a906001600160a01b03168262002be7565b5062000f7290506200068360026301e1338062005d9f565b601e54859062000f8c906001600160a01b031682620021d8565b5050601d546a0422ca8b0a00a4250000009060009062000fb6906001600160a01b0316836200226a565b905062000fcd620006e560026301e1338062005d9f565b600062000fda82620023d5565b601d5490915060009062000ff8906001600160a01b03168462002972565b5090506200100a8183612710620029e6565b6200101587620023d5565b601c5490925060009062001033906001600160a01b03168962002972565b509050620004c88184612710620029e6565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200111657602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620010d75790505b5050505050815250508152602001906001019062001069565b50505050905090565b6200114e8260006722b1c8c1227a0000620020c3565b91506200117366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005d59565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620011ab906001600160a01b031684846200214f565b601e5490915085906000908190620011cd906001600160a01b03168462002be7565b601d5491935091506a0422ca8b0a00a42500000090600090620011fa906001600160a01b0316836200226a565b90506200120c6301e133808a620022fb565b60006200121982620023d5565b601d5490915060009062001237906001600160a01b03168462002972565b509050620012498183612710620029e6565b601e5462001262906001600160a01b0316878762002d06565b506200126e88620023d5565b601c5490925062001289906001600160a01b03168962002972565b5090506200129b8183612710620029e6565b50505050505050505050505050565b60606018805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620012f09062005e15565b80601f01602080910402602001604051908101604052809291908181526020018280546200131e9062005e15565b80156200136f5780601f1062001343576101008083540402835291602001916200136f565b820191906000526020600020905b8154815290600101906020018083116200135157829003601f168201915b505050505081526020019060010190620012ce565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200145557602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620014165790505b50505050508152505081526020019060010190620013a8565b60008212801590620014a857620014a28483101560405180606001604052806036815260200162011fd46036913962002d7a565b620014cf565b620014cf82851160405180606001604052806027815260200162011f1b6027913962002d7a565b600081620014de5784620014ea565b620014ea848662005e4b565b905060008215620014fc578562001513565b620015078562005e61565b62001513908762005d59565b9050808410806200152357508184115b15620015a15762001561848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002db7565b62001599848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002df9565b505050505050565b8215620016a1576000620015b6878662005d59565b905085811015620016745760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a20257300000000000060208201526200160c9062001606838962005d59565b62002e36565b6200163d6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002e7f565b6200166e6040518060400160405280600d81526020016c4e65772044656c74613a20257360981b8152508262002e36565b6200169a565b6200169a838660405180606001604052806029815260200162011f426029913962002ec8565b5062001599565b6000620016af858862005d59565b9050620016bc8662005e61565b8110156200178057620017176040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200170b9062005e61565b62001606919062005d59565b620017486040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002e7f565b6200177a6040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b8152508262002e36565b620017a6565b620017a6828660405180606001604052806029815260200162011f6b6029913962002ec8565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620017f59062005e15565b80601f0160208091040260200160405190810160405280929190818152602001828054620018239062005e15565b8015620018745780601f10620018485761010080835404028352916020019162001874565b820191906000526020600020905b8154815290600101906020018083116200185657829003601f168201915b505050505081526020019060010190620017d3565b600754600090610100900460ff1615620018ac5750600754610100900460ff1690565b600060008051602062011edb8339815191523b15620019b1576040805160008051602062011edb833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001933917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800162005e80565b60408051601f19818403018152908290526200194f9162005eb3565b6000604051808303816000865af19150503d80600081146200198e576040519150601f19603f3d011682016040523d82523d6000602084013e62001993565b606091505b5091505080806020019051810190620019ad919062005db6565b9150505b919050565b60606013805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62001a2262002f04565b601c546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062011edb833981519152906306447d5690602401600060405180830381600087803b15801562001a7757600080fd5b505af115801562001a8c573d6000803e3d6000fd5b50505050601260008060405162001aa39062005886565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f08015801562001b19573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e13380815260200162015180815260200162001be784620031e4565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a09092019190915251909150600090829062001c379062005894565b62001c43919062005f8c565b604051809103906000f08015801562001c60573d6000803e3d6000fd5b509050818160405162001c7390620058a2565b62001c8092919062005f9d565b604051809103906000f08015801562001c9d573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001d1257600080fd5b505af115801562001d27573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062011edb83398151915293506306447d56925001600060405180830381600087803b15801562001d7f57600080fd5b505af115801562001d94573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b15801562001de957600080fd5b505af115801562001dfe573d6000803e3d6000fd5b5050602b5460ff16915062001e8990505760008051602062011edb83398151915263e5d6bf0262001e356301e13380600362005fc7565b6040518263ffffffff1660e01b815260040162001e5491815260200190565b600060405180830381600087803b15801562001e6f57600080fd5b505af115801562001e84573d6000803e3d6000fd5b505050505b50505050565b62001e99620058b0565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c0810162001f1685620031e4565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b60008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001fa357600080fd5b505af115801562001fb8573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038516600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200200d57600080fd5b505af115801562002022573d6000803e3d6000fd5b50505050600081604051620020379062005894565b62002043919062005f8c565b604051809103906000f08015801562002060573d6000803e3d6000fd5b50905081816040516200207390620058a2565b6200208092919062005f9d565b604051809103906000f0801580156200209d573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b6000818311156200210c5760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b60448201526064015b60405180910390fd5b60006200211a848462005d59565b6200212790600162005e4b565b9050600062002137828762005fe1565b905062002145858262005e4b565b9695505050505050565b6000620005568484846040518060c001604052806001151581526020018781526020016000815260200160008152602001600019815260200160006001600160401b03811115620021a457620021a462005a83565b6040519080825280601f01601f191660200182016040528015620021cf576020820181803683370190505b50905262003231565b6000806200225f84846040518060c00160405280600115158152602001878152602001600081526020016000815260200187815260200160006001600160401b038111156200222b576200222b62005a83565b6040519080825280601f01601f19166020018201604052801562002256576020820181803683370190505b509052620035e1565b915091509250929050565b6000620022f283836040518060c001604052806001151581526020018681526020016000815260200160008152602001600019815260200160006001600160401b03811115620022be57620022be62005a83565b6040519080825280601f01601f191660200182016040528015620022e9576020820181803683370190505b50905262003a5d565b90505b92915050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b1580156200234957600080fd5b505af11580156200235e573d6000803e3d6000fd5b5060008051602062011edb833981519152925063e5d6bf029150620023869050844262005e4b565b6040518263ffffffff1660e01b8152600401620023a591815260200190565b600060405180830381600087803b158015620023c057600080fd5b505af115801562001599573d6000803e3d6000fd5b60008060008051602062011f9483398151915260001c6001600160a01b0316639711715a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156200242b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002451919062005d6f565b602c549091506001600160a01b031663ed64bab2620024708262003e1f565b6040518263ffffffff1660e01b81526004016200248f91815260200190565b600060405180830381600087803b158015620024aa57600080fd5b505af1158015620024bf573d6000803e3d6000fd5b5050602c5460009250620024dd91506001600160a01b031662003ea3565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002536573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200255c919062005ff8565b602c546080820151604051630b1b4b1760e41b81529293506000926001600160a01b039092169163b1b4b170916200259a9160040190815260200190565b602060405180830381865afa158015620025b8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620025de919062005d6f565b602c5460405163bd85b03960e01b8152600060048201529192506200265f9188916001600160a01b03169063bd85b03990602401602060405180830381865afa15801562002630573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002656919062005d6f565b83919062004060565b602c549091506001600160a01b0316638120a3e26200267e8362005e61565b6040518263ffffffff1660e01b81526004016200269d91815260200190565b600060405180830381600087803b158015620026b857600080fd5b505af1158015620026cd573d6000803e3d6000fd5b5050602c5460009250620026eb91506001600160a01b031662003ea3565b602c5460405163bd85b03960e01b81526000600482018190529293506001600160a01b039091169063bd85b03990602401602060405180830381865afa1580156200273a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002760919062005d6f565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b031663fba560086040518163ffffffff1660e01b81526004016040805180830381865afa158015620027b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620027dd9190620060be565b51602c5460405163bd85b03960e01b8152600360f81b60048201526001600160801b03909216916001600160a01b039091169063bd85b03990602401602060405180830381865afa15801562002837573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200285d919062005d6f565b62002869919062005d59565b9050600062002879828462005e4b565b905060006200288a82868a62004060565b9050620028988b8362006120565b620028a4908262006120565b90506000811215620028dc576000620028ca620028c18362005e61565b8a908562004060565b9050620028d8818862005d59565b9650505b604051631135fc2960e21b8152600481018a905260008051602062011edb833981519152906344d7f0a4906024016020604051808303816000875af11580156200292a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002950919062005db6565b506080870151620029639087906200407f565b9b9a5050505050505050505050565b6000806200225f848460405180606001604052806001151581526020016000815260200160006001600160401b03811115620029b257620029b262005a83565b6040519080825280601f01601f191660200182016040528015620029dd576020820181803683370190505b50905262004096565b6000620029f4848462004215565b90508181111562001e895760008051602062011ebb83398151915260405162002a599060208082526022908201527f4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b606082015260208101869052905160008051602062011fb48339815191529181900360800190a160408051818152600a81830152690808080808149a59da1d60b21b606082015260208101859052905160008051602062011fb48339815191529181900360800190a160408051818152600a8183015269204d61782044656c746160b01b606082015260208101849052905160008051602062011fb48339815191529181900360800190a160408051818152600a8183015269202020202044656c746160b01b606082015260208101839052905160008051602062011fb48339815191529181900360800190a162001e896200423d565b60006200055684848460405180606001604052806001151581526020016000815260200160006001600160401b0381111562002bb35762002bb362005a83565b6040519080825280601f01601f19166020018201604052801562002bde576020820181803683370190505b50905262004346565b6000806200225f84846040518060c0016040528060011515815260200187815260200160008152602001878152602001600019815260200160006001600160401b0381111562002c3b5762002c3b62005a83565b6040519080825280601f01601f19166020018201604052801562002c66576020820181803683370190505b509052620044c6565b60008183131562002cb45760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b604482015260640162002103565b600062002cc2848462006120565b62002ccf9060016200614a565b9050600062002cdf828762006175565b9050600081121562002cfa5762002cf782826200614a565b90505b6200214585826200614a565b60006200055684848460405180606001604052806001151581526020016000815260200160006001600160401b0381111562002d465762002d4662005a83565b6040519080825280601f01601f19166020018201604052801562002d71576020820181803683370190505b5090526200487d565b8162002db35760008051602062011efb8339815191528160405162002da091906200618c565b60405180910390a162002db382620049ae565b5050565b8183101562002df45760008051602062011efb8339815191528160405162002de091906200618c565b60405180910390a162002df4838362004a15565b505050565b8183111562002df45760008051602062011efb8339815191528160405162002e2291906200618c565b60405180910390a162002df4838362004b11565b62002db3828260405160240162002e4f929190620061bd565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262004b74565b62002db3828260405160240162002e98929190620061bd565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262004b74565b81831462002df45760008051602062011efb8339815191528160405162002ef091906200618c565b60405180910390a162002df4838362004b7f565b62002f2c60405180604001604052806005815260200164616c69636560d81b81525062000d9d565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b602082015262002f719062000d9d565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b602082015262002fb99062000d9d565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b602082015262002ffe9062000d9d565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620030439062000d9d565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062003094604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000d9d565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b6020820152620030dc9062000d9d565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b60208201526200312a9062000d9d565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620031769062000d9d565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b6020820152620031be9062000d9d565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b6000806200321b6200320b620031fc85606462005fc7565b66a5bbed86c5a000906200407f565b6748cd4072281e00009062004c6f565b905062000559670de0b6b3a76400008262004c6f565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200328157600080fd5b505af115801562003296573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b158015620032eb57600080fd5b505af115801562003300573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003365573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200338b91906200624d565b516001600160a01b0316148015620033a1575081515b156200345357602c54602080840151604080516060810182526001600160a01b038a81168252875115159482019490945260a0870151818301529051631df417fd60e21b815292909316926377d05ff492620034059188918a919060040162006344565b60206040518083038185885af115801562003424573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200344b919062005d6f565b9050620009c9565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b158015620034a457600080fd5b505af1158015620034b9573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af11580156200351e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003544919062005db6565b50602c54604080516060810182526001600160a01b03888116825285511515602083015260a0860151828401529151631df417fd60e21b815291909216916377d05ff4916200359b91879189919060040162006344565b6020604051808303816000875af1158015620035bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200344b919062005d6f565b60008060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200363257600080fd5b505af115801562003647573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200369c57600080fd5b505af1158015620036b1573d6000803e3d6000fd5b5050602c54620036cd92506001600160a01b0316905062004c86565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003742573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200376891906200624d565b516001600160a01b03161480156200377e575082515b156200383b57602c54602080850151608086015160408088015181516060810183526001600160a01b038c811682528a5115159682019690965260a08a0151818401529151630dbbe80760e41b8152949095169463dbbe807094620037eb938b9390929160040162006365565b604080518083038185885af115801562003809573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200383091906200638c565b909250905062003a55565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200388c57600080fd5b505af1158015620038a1573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003906573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200392c919062005db6565b50602c54608084015160408086015181516060810183526001600160a01b038a8116825288511515602083015260a0890151828501529251630dbbe80760e41b8152929094169363dbbe8070936200398c938a9391929060040162006365565b60408051808303816000875af1158015620039ab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620039d191906200638c565b602b54602086015192945090925061010090046001600160a01b0316906342966c689062003a0190849062005d59565b6040518263ffffffff1660e01b815260040162003a2091815260200190565b600060405180830381600087803b15801562003a3b57600080fd5b505af115801562003a50573d6000803e3d6000fd5b505050505b935093915050565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562003aad57600080fd5b505af115801562003ac2573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038716600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b15801562003b1757600080fd5b505af115801562003b2c573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003b91573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003bb791906200624d565b516001600160a01b031614801562003bcd575081515b1562003c8757602c5460208084015160608086015160808701516040805193840181526001600160a01b038b81168552895115159685019690965260a08901518482015251634d53423160e11b81529490951694639aa684629462003c39938a93929160040162006365565b60206040518083038185885af115801562003c58573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062003c7f919062005d6f565b905062000559565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562003cd857600080fd5b505af115801562003ced573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003d52573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003d78919062005db6565b50602c5460608084015160808501516040805193840181526001600160a01b03898116855287511515602086015260a0880151858301529051634d53423160e11b8152941693639aa684629362003dd9938993909290919060040162006365565b6020604051808303816000875af115801562003df9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003c7f919062005d6f565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003e61573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003e8791906200624d565b60a0015162003e97904262005fe1565b620022f5904262005d59565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003ee6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003f0c91906200624d565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562003f50573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003f76919062005ff8565b9050620009c98160800151620040596040518061016001604052808560000151815260200185602001518152602001856040015181526020018560800151815260200186602001518152602001866040015181526020018660c0015181526020018560a00151815260200162004014896200400e6ec097ce7bc90715b34b9f10000000008960c0015162004d0990919063ffffffff16565b62004d20565b81526020018560e00151815260200162004051896200400e6ec097ce7bc90715b34b9f100000000089610100015162004d0990919063ffffffff16565b905262004dcb565b906200407f565b60008260001904841183021582026200407857600080fd5b5091020490565b6000620022f28383670de0b6b3a764000062004060565b60008060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620040e757600080fd5b505af1158015620040fc573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200415157600080fd5b505af115801562004166573d6000803e3d6000fd5b5050602c54602080870151604080516060810182526001600160a01b038c811682528a51151594820194909452818a01518183015290516332f04d0d60e21b815292909316945063cbc134349350620041c492899260040162006344565b60408051808303816000875af1158015620041e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200420991906200638c565b91509150935093915050565b600081831162004231576200422b838362005d59565b620022f2565b620022f2828462005d59565b60008051602062011edb8339815191523b1562004335576040805160008051602062011edb833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620042d0929160200162005e80565b60408051601f1981840301815290829052620042ec9162005eb3565b6000604051808303816000865af19150503d80600081146200432b576040519150601f19603f3d011682016040523d82523d6000602084013e62004330565b606091505b505050505b6007805461ff001916610100179055565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200439657600080fd5b505af1158015620043ab573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200440057600080fd5b505af115801562004415573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c811682528951151594820194909452818901518183015290516329b23fc160e01b81529290931694506329b23fc19350620044779289928992919060040162006365565b6020604051808303816000875af115801562004497573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620044bd919062005d6f565b95945050505050565b60008060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200451757600080fd5b505af11580156200452c573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200458157600080fd5b505af115801562004596573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa158015620045fb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200462191906200624d565b516001600160a01b031614801562004637575082515b15620046f257602c54602080850151606080870151604080890151815193840182526001600160a01b038c811685528a5115159685019690965260a08a015184830152905163cba2e58d60e01b8152949095169463cba2e58d94620046a3938b93929160040162006365565b604080518083038185885af1158015620046c1573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620046e891906200638c565b9150915062003a55565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200473d57600080fd5b505af115801562004752573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af1158015620047b1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620047d7919062005db6565b50602c54606080850151604080870151815193840182526001600160a01b038a8116855288511515602086015260a089015185840152915163cba2e58d60e01b8152919094169363cba2e58d9362004838938a939092919060040162006365565b60408051808303816000875af115801562004857573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620046e891906200638c565b600060008051602062011f9483398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620048cd57600080fd5b505af1158015620048e2573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062011edb83398151915292506306447d569150602401600060405180830381600087803b1580156200493757600080fd5b505af11580156200494c573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c8116825289511515948201949094528189015181830152905163ded0623160e01b815292909316945063ded062319350620044779289928992919060040162006365565b806200035c5760008051602062011ebb83398151915260405162004a039060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a16200035c6200423d565b8082101562002db35760008051602062011ebb83398151915260405162004a789060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b606082015260208101849052905160008051602062011fb48339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b60608201526020810182905260008051602062011fb4833981519152906080015b60405180910390a162002db36200423d565b8082111562002db35760008051602062011ebb83398151915260405162004a789060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b6200035c8162005069565b80821462002db35760008051602062011ebb83398151915260405162004be19060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b606082015260208101849052905160008051602062011fb48339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b60608201526020810182905260008051602062011fb48339815191529060800162004aff565b6000620022f283670de0b6b3a76400008462004060565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004cc8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004cee91906200624d565b6080015162004cfd8362003e1f565b620022f5919062005e4b565b6000620022f283670de0b6b3a7640000846200508a565b600062004d2d8362003e1f565b821162004d3c57600062004d53565b62004d478362003e1f565b62004d53908362005d59565b9050620022f2836001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004d99573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004dbf91906200624d565b60800151829062004c6f565b60008062004ded8361014001518461012001516200407f90919063ffffffff16565b61010084015160e085015162004e03916200407f565b62004e0f919062006120565b9050600062004e2784600001518560200151620050b1565b9050600082131562004ed657600062004e6e8286604001518760a001518860c00151670de0b6b3a764000062004e5e919062005d59565b89606001518a60800151620050d1565b905062004e7c818462005186565b9050801562004ecf5762004eba828660400151838860c00151670de0b6b3a764000062004eaa919062005d59565b89606001518a608001516200519d565b8551869062004ecb90839062005d59565b9052505b5062004fa6565b600082121562004fa65762004eeb8262005e61565b9150600062004f238286604001518760c00151670de0b6b3a764000062004f13919062005d59565b88606001518960800151620051df565b905062004f31818462005186565b9050801562004f845762004f6f828660400151838860c00151670de0b6b3a764000062004f5f919062005d59565b89606001518a6080015162005287565b8551869062004f8090839062005e4b565b9052505b62004f90818462005d59565b8551869062004fa190839062005e4b565b905250505b600062004fd9856101000151670de0b6b3a764000062004fc7919062005d59565b606087015160e0880151919062004060565b6200500b866101400151670de0b6b3a764000062004ff8919062005d59565b6060880151610120890151919062004060565b62005017919062006120565b905060008186600001516200502d91906200614a565b90508560a00151811215620050555760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015162002145908262005d59565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000826000190484118302158202620050a257600080fd5b50910281810615159190040190565b600080620050c0838562006120565b90506000811215620022f257600080fd5b600080620050e3888887878762005331565b905060006200510c6200510387620050fc878b62005369565b9062005380565b8690866200508a565b62005118908362005d59565b9050670de0b6b3a7640000811062005152576200514a62005142670de0b6b3a76400008862004c6f565b829062005380565b90506200516d565b6200516a62005142670de0b6b3a76400008862004d09565b90505b62005179888262005d59565b9998505050505050505050565b6000818311620051975782620022f2565b50919050565b600080620051b0888888888888620053e1565b909250905080620051d457604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b600080620051f18787878787620054ba565b9050600062005222670de0b6b3a76400006200520e878762004c6f565b6200521a919062005e4b565b839062004d09565b9050670de0b6b3a7640000811062005254576200524c62005142670de0b6b3a76400008862004d09565b90506200526f565b6200526c62005142670de0b6b3a76400008862004c6f565b90505b6200527b818862005d59565b98975050505050505050565b600080620052998888878787620054ba565b9050620052ac85620050fc888a62005d59565b96506000620052ca8486620052c28b8662005d59565b91906200508a565b9050670de0b6b3a76400008110620052fc57620052f462005142670de0b6b3a76400008862004d09565b905062005317565b6200531462005142670de0b6b3a76400008862004c6f565b90505b62005323818562004d09565b905062005179898262005d59565b60006200533f858562005380565b6200535d6200535486620050fc868b6200407f565b85908562004060565b62002145919062005e4b565b6000620022f28383670de0b6b3a76400006200508a565b6000816000036200539b5750670de0b6b3a7640000620022f5565b82600003620053ad57506000620022f5565b816000620053bb85620054e6565b9050818102620053d4670de0b6b3a764000082620063b1565b90506200214581620056f9565b6000806000620053f58989888888620054ba565b90506200540886620050fc898b62005e4b565b97508781101562005421576000809250925050620054af565b6000620054358587620052c28c8662005d59565b9050670de0b6b3a7640000811062005467576200545f62005142670de0b6b3a76400008962004d09565b905062005482565b6200547f62005142670de0b6b3a76400008962004c6f565b90505b6200548e818662004d09565b9050808a1115620054a857620054a5818b62005d59565b93505b6001925050505b965096945050505050565b6000620054c8858562005380565b6200535d620054dd86620050fc868b62005369565b8590856200508a565b60008082136200550957604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c6001600160401b031060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136200571557506000919050565b680755bf798b4a1bf1e582126200573f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611de380620063e683390190565b6129ad80620081c983390190565b617345806200ab7683390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016200593b60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600080604083850312156200596357600080fd5b50508035926020909101359150565b6001600160a01b03811681146200035c57600080fd5b6000806000606084860312156200599e57600080fd5b8335620059ab8162005972565b92506020840135620059bd8162005972565b91506040840135620059cf8162005972565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b8181101562005a1d5783516001600160a01b031683529284019291840191600101620059f6565b50909695505050505050565b6000806000806080858703121562005a4057600080fd5b843562005a4d8162005972565b9350602085013562005a5f8162005972565b925060408501359150606085013562005a788162005972565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a081016001600160401b038111828210171562005abf5762005abf62005a83565b60405290565b60405161018081016001600160401b038111828210171562005abf5762005abf62005a83565b60006020828403121562005afe57600080fd5b81356001600160401b038082111562005b1657600080fd5b818401915084601f83011262005b2b57600080fd5b81358181111562005b405762005b4062005a83565b604051601f8201601f19908116603f0116810190838211818310171562005b6b5762005b6b62005a83565b8160405282815287602084870101111562005b8557600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101562005c4d57898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101562005c375783516001600160e01b0319168252928b019260019290920191908b019062005c0b565b50978a0197955050509187019160010162005bcd565b50919998505050505050505050565b60005b8381101562005c7957818101518382015260200162005c5f565b50506000910152565b6000815180845262005c9c81602086016020860162005c5c565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101562005d0957603f1988860301845262005cf685835162005c82565b9450928501929085019060010162005cd7565b5092979650505050505050565b60008060006060848603121562005d2c57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115620022f557620022f562005d43565b60006020828403121562005d8257600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008262005db15762005db162005d89565b500490565b60006020828403121562005dc957600080fd5b81518015158114620022f257600080fd5b602081526000620022f2602083018462005c82565b6001600160a01b0383168152604060208201819052600090620005569083018462005c82565b600181811c9082168062005e2a57607f821691505b6020821081036200519757634e487b7160e01b600052602260045260246000fd5b80820180821115620022f557620022f562005d43565b6000600160ff1b820162005e795762005e7962005d43565b5060000390565b6001600160e01b031983168152815160009062005ea581600485016020870162005c5c565b919091016004019392505050565b6000825162005ec781846020870162005c5c565b9190910192915050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015162005f3560e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c08101620022f5828462005ed1565b6101e0810162005fae828562005ed1565b6001600160a01b03929092166101c09190910152919050565b8082028115828204841417620022f557620022f562005d43565b60008262005ff35762005ff362005d89565b500690565b60006101a082840312156200600c57600080fd5b6200601662005a99565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b80516001600160801b0381168114620019b157600080fd5b600060408284031215620060d157600080fd5b604051604081018181106001600160401b0382111715620060f657620060f662005a83565b6040526200610483620060a6565b81526200611460208401620060a6565b60208201529392505050565b818103600083128015838313168383128216171562006143576200614362005d43565b5092915050565b80820182811260008312801582168215821617156200616d576200616d62005d43565b505092915050565b60008262006187576200618762005d89565b500790565b60408152600560408201526422b93937b960d91b6060820152608060208201526000620022f2608083018462005c82565b604081526000620061d2604083018562005c82565b90508260208301529392505050565b8051620019b18162005972565b6000606082840312156200620157600080fd5b604051606081018181106001600160401b038211171562006226576200622662005a83565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200626157600080fd5b6200626b62005ac5565b6200627683620061e1565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620062c260e08401620061e1565b60e0820152610100620062d7818501620061e1565b90820152610120620062ec85858301620061ee565b908201526101808301516101408201526101a09092015161016083015250919050565b60018060a01b0381511682526020810151151560208301526000604082015160606040850152620009c9606085018262005c82565b838152826020820152606060408201526000620044bd60608301846200630f565b8481528360208201528260408201526080606082015260006200214560808301846200630f565b60008060408385031215620063a057600080fd5b505080516020909101519092909150565b600082620063c357620063c362005d89565b600160ff1b821460001984141615620063e057620063e062005d43565b50059056fe6101006040523480156200001257600080fd5b5060405162001de338038062001de3833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161186c620005776000396000818161037901528181610882015281816108e801528181610c270152610c890152600061085e01526000610829015260006102b9015261186c6000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b146104c7578063ea7ca276146104fd578063ed0d0efb14610534578063f2fde38b1461055457600080fd5b8063bf7e214f1461044d578063c53a398514610460578063d505accf14610489578063dd62ed3e1461049c57600080fd5b80639dc29fac116100de5780639dc29fac14610401578063a0712d6814610414578063a9059cbb14610427578063b70096131461043a57600080fd5b80637a9e5e4b1461039b5780637ecebe00146103ae5780638da5cb5b146103ce57806395d89b41146103f957600080fd5b80633644e5151161018757806367aff4841161015657806367aff4841461032e57806370a0823114610341578063728b952b146103615780637a8c63b51461037457600080fd5b80633644e515146102ed57806340c10f19146102f557806342966c68146103085780634b5159da1461031b57600080fd5b80630ea9b75b116101c35780630ea9b75b1461028357806318160ddd1461029857806323b872dd146102a1578063313ce567146102b457600080fd5b806306a36aee146101f557806306fdde0314610228578063095ea7b31461023d5780630bade8a414610260575b600080fd5b610215610203366004611324565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610230610567565b60405161021f9190611341565b61025061024b36600461138f565b6105f5565b604051901515815260200161021f565b61025061026e3660046113d8565b600a6020526000908152604090205460ff1681565b610296610291366004611412565b610662565b005b61021560025481565b6102506102af366004611459565b610743565b6102db7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161021f565b610215610825565b61029661030336600461138f565b610880565b61029661031636600461149a565b6108e6565b6102966103293660046114b3565b61094b565b61029661033c3660046114ea565b6109dd565b61021561034f366004611324565b60036020526000908152604090205481565b61029661036f366004611518565b610aa5565b6102507f000000000000000000000000000000000000000000000000000000000000000081565b6102966103a9366004611324565b610b2e565b6102156103bc366004611324565b60056020526000908152604090205481565b6006546103e1906001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b610230610c18565b61029661040f36600461138f565b610c25565b61029661042236600461149a565b610c87565b61025061043536600461138f565b610ce9565b610250610448366004611546565b610d4f565b6007546103e1906001600160a01b031681565b6103e161046e366004611324565b6008602052600090815260409020546001600160a01b031681565b61029661049736600461158d565b610e4d565b6102156104aa366004611518565b600460209081526000928352604080842090915290825290205481565b6102506104d53660046115fb565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025061050b36600461162e565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102156105423660046113d8565b600b6020526000908152604090205481565b610296610562366004611324565b611091565b600080546105749061165a565b80601f01602080910402602001604051908101604052809291908181526020018280546105a09061165a565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106509086815260200190565b60405180910390a35060015b92915050565b610678336000356001600160e01b03191661110f565b61069d5760405162461bcd60e51b815260040161069490611694565b60405180910390fd5b80156106cd576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106f4565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610736911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461079f5761077a83826116d0565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107c79084906116d0565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611817833981519152906108109087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461085b576108566111b9565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108d8576108bc336000356001600160e01b03191661110f565b6108d85760405162461bcd60e51b8152600401610694906116e3565b6108e28282611253565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561093e57610922336000356001600160e01b03191661110f565b61093e5760405162461bcd60e51b8152600401610694906116e3565b61094833826112ad565b50565b610961336000356001600160e01b03191661110f565b61097d5760405162461bcd60e51b815260040161069490611694565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109f3336000356001600160e01b03191661110f565b610a0f5760405162461bcd60e51b815260040161069490611694565b8015610a3e576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a64565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610736911515815260200190565b610abb336000356001600160e01b03191661110f565b610ad75760405162461bcd60e51b815260040161069490611694565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610bc3575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b8290339030906001600160e01b0319600035169060040161171a565b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611747565b610bcc57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105749061165a565b7f000000000000000000000000000000000000000000000000000000000000000015610c7d57610c61336000356001600160e01b03191661110f565b610c7d5760405162461bcd60e51b8152600401610694906116e3565b6108e282826112ad565b7f000000000000000000000000000000000000000000000000000000000000000015610cdf57610cc3336000356001600160e01b03191661110f565b610cdf5760405162461bcd60e51b8152600401610694906116e3565b6109483382611253565b33600090815260036020526040812080548391908390610d0a9084906116d0565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611817833981519152906106509086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610deb5760405163b700961360e01b81526001600160a01b0382169063b700961390610da29088908890889060040161171a565b602060405180830381865afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de39190611747565b91505061081e565b6001600160e01b031983166000908152600a602052604090205460ff1680610e4457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e9d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610694565b60006001610ea9610825565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610fb5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610feb5750876001600160a01b0316816001600160a01b0316145b6110285760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610694565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6110a7336000356001600160e01b03191661110f565b6110c35760405162461bcd60e51b815260040161069490611694565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611199575060405163b700961360e01b81526001600160a01b0382169063b7009613906111589087903090889060040161171a565b602060405180830381865afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190611747565b806111b157506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111eb9190611764565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546112659190611803565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061181783398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112d59084906116d0565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611817833981519152906020016112a1565b6001600160a01b038116811461094857600080fd5b60006020828403121561133657600080fd5b813561081e8161130f565b600060208083528351808285015260005b8181101561136e57858101830151858201604001528201611352565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156113a257600080fd5b82356113ad8161130f565b946020939093013593505050565b80356001600160e01b0319811681146113d357600080fd5b919050565b6000602082840312156113ea57600080fd5b61081e826113bb565b803560ff811681146113d357600080fd5b801515811461094857600080fd5b60008060006060848603121561142757600080fd5b611430846113f3565b925061143e602085016113bb565b9150604084013561144e81611404565b809150509250925092565b60008060006060848603121561146e57600080fd5b83356114798161130f565b925060208401356114898161130f565b929592945050506040919091013590565b6000602082840312156114ac57600080fd5b5035919050565b600080604083850312156114c657600080fd5b6114cf836113bb565b915060208301356114df81611404565b809150509250929050565b6000806000606084860312156114ff57600080fd5b833561150a8161130f565b925061143e602085016113f3565b6000806040838503121561152b57600080fd5b82356115368161130f565b915060208301356114df8161130f565b60008060006060848603121561155b57600080fd5b83356115668161130f565b925060208401356115768161130f565b9150611584604085016113bb565b90509250925092565b600080600080600080600060e0888a0312156115a857600080fd5b87356115b38161130f565b965060208801356115c38161130f565b955060408801359450606088013593506115df608089016113f3565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561160e57600080fd5b611617836113f3565b9150611625602084016113bb565b90509250929050565b6000806040838503121561164157600080fd5b823561164c8161130f565b9150611625602084016113f3565b600181811c9082168061166e57607f821691505b60208210810361168e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561065c5761065c6116ba565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561175957600080fd5b815161081e81611404565b600080835481600182811c91508083168061178057607f831692505b6020808410820361179f57634e487b7160e01b86526022600452602486fd5b8180156117b357600181146117c8576117f5565b60ff19861689528415158502890196506117f5565b60008a81526020902060005b868110156117ed5781548b8201529085019083016117d4565b505084890196505b509498975050505050505050565b8082018082111561065c5761065c6116ba56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212207b350da756a5d3a5eb9152ae21ad0e195fbe0e3936d747265c23328ee95417eb64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620029ad380380620029ad8339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516125426200046b6000396000610a1701526000610967015260006109e0015260006109bb01526000610998015260006108c101526000818161089c01526110a6015260008181610872015261108001526000818161093701526110cc0152600081816108eb015261153901526000818161091101526117c501526000818161084d01528181610b780152610f5101526000610bb101526000610b3801526125426000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611df2565b6102f1565b6040516101459190611e5b565b60405180910390f35b61016161015c366004611df2565b610328565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611e85565b61037a565b604051908152602001610145565b61019b6101b7366004611ec1565b6103c0565b6101386101ca366004611df2565b6103f9565b6101d7610407565b6040516101459190611eed565b61019b6101f2366004611f78565b610601565b61019b61062d565b61019b61020d366004611df2565b61064a565b61021a610830565b6040516101459190611f93565b61019b610235366004611df2565b610a4d565b61024d610248366004612055565b610a6f565b60405161014591906120ca565b610262610b2a565b6040516001600160a01b039091168152602001610145565b610262610b6a565b61019b610baa565b610292610be2565b604051610145919061210e565b6102b26102ad3660046121fb565b610c48565b6040519015158152602001610145565b6102ca610c8c565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b60606103236102ff83610ceb565b60405160200161030f9190611e5b565b604051602081830303815290604052610e19565b919050565b6040805180820190915260008082526020820152610323600e600084815260200190815260200160002060405160200161030f91546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103b9910161030f565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103f3910161030f565b92915050565b60606103236102ff83610e3d565b610472604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061047c610f2f565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b03909216916104e79190612251565b6104f19190612264565b9050600080831161050357600061051e565b61051e8361051861051386610fe3565b611149565b906113b7565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105c6576105c184866113cc565b6105c9565b60005b8152600954600160801b90046001600160801b03166020918201526040519192506105fa9161030f91849101611eed565b5050505090565b6001600160a01b038116600090815260076020908152604080832054815192830152610323910161030f565b600061064760105460405160200161030f91815260200190565b90565b601354601280546000926001600160801b03600160801b82048116939116918491908390811061067c5761067c612277565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106bd8685612264565b9050600083156106d7576106d2600185612264565b6106e6565b6012546106e690600190612264565b60408051808201909152600080825260208201529091505b8482146107955760006012838154811061071a5761071a612277565b6000918252602090912001805490915063ffffffff1684106107685760408051808201909152905463ffffffff8116825264010000000090046001600160e01b031660208201529050610795565b821561077e57610779600184612264565b61078d565b60125461078d90600190612264565b9250506106fe565b805163ffffffff166000036107bd57604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166107e59190612264565b825186519192506000916108029163ffffffff9081169116612264565b905061082361081182846122a3565b60405160200161030f91815260200190565b5050505050505050919050565b610838611d54565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f000000000000000000000000000000000000000000000000000000000000000061016083015291516106479261030f929101611f93565b600081815260026020908152604080832054815192830152610323910161030f565b606060008267ffffffffffffffff811115610a8c57610a8c6122b7565b604051908082528060200260200182016040528015610ab5578160200160208202803683370190505b50905060005b83811015610b0e576000858583818110610ad757610ad7612277565b90506020020135905060008154905080848481518110610af957610af9612277565b60209081029190910101525050600101610abb565b50610b238160405160200161030f91906120ca565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b60006106477f000000000000000000000000000000000000000000000000000000000000000060405160200161030f91815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610647600860405160200161030f91906122cd565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103f3910161030f565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526106479060600161030f565b606060f882901c6001600160f81b0383166000610d07826113e1565b90506000836003811115610d1d57610d1d612225565b03610d4f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610e11565b6001836003811115610d6357610d63612225565b03610d8f5780604051602001610d79919061234e565b6040516020818303038152906040529350610e11565b6002836003811115610da357610da3612225565b03610db95780604051602001610d799190612387565b6003836003811115610dcd57610dcd612225565b03610e11576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610e349190611e5b565b60405180910390fd5b606060f882901c6001600160f81b0383166000610e59826113e1565b90506000836003811115610e6f57610e6f612225565b03610ea1576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610e11565b6001836003811115610eb557610eb5612225565b03610ecb5780604051602001610d7991906123c1565b6002836003811115610edf57610edf612225565b03610ef55780604051602001610d7991906123f9565b6003836003811115610f0957610f09612225565b03610e11576040516c485950455244524956452d575360981b6020820152602d01610dff565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc9190612425565b9050601454600003610fcf576000610fdd565b601454610fdd9082906113cc565b91505090565b61104060405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b54909161010083019161110f91166114ee565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192611141929004166114ee565b905292915050565b6000806111698361014001518461012001516113b790919063ffffffff16565b61010084015160e085015161117d916113b7565b611187919061243e565b9050600061119d84600001518560200151611564565b9050600082131561123d5760006111df8286604001518760a001518860c00151670de0b6b3a76400006111d09190612264565b89606001518a60800151611581565b90506111eb8184611621565b9050801561123757611224828660400151838860c00151670de0b6b3a76400006112159190612264565b89606001518a60800151611636565b85518690611233908390612264565b9052505b506112f9565b60008212156112f95761124f8261245e565b915060006112838286604001518760c00151670de0b6b3a76400006112749190612264565b88606001518960800151611675565b905061128f8184611621565b905080156112db576112c8828660400151838860c00151670de0b6b3a76400006112b99190612264565b89606001518a6080015161170b565b855186906112d7908390612251565b9052505b6112e58184612264565b855186906112f4908390612251565b905250505b6000611328856101000151670de0b6b3a76400006113179190612264565b606087015160e088015191906117a0565b611356866101400151670de0b6b3a76400006113449190612264565b606088015161012089015191906117a0565b611360919061243e565b90506000818660000151611374919061247a565b90508560a0015181121561139b5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516113ad9082612264565b9695505050505050565b60006103b98383670de0b6b3a76400006117a0565b60006103b983670de0b6b3a7640000846117a0565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611413600a8561249a565b61141e906030612251565b60f81b8161142d600185612264565b8151811061143d5761143d612277565b60200101906001600160f81b031916908160001a90535061145f600a856122a3565b935060015b84156114e057611475600a8661249a565b611480906030612251565b60f81b8260016114908487612264565b61149a9190612264565b815181106114aa576114aa612277565b60200101906001600160f81b031916908160001a9053506114cc600a866122a3565b9450806114d8816124ae565b915050611464565b918290030190815292915050565b600080670de0b6b3a76400006115026117be565b61150c91906124c7565b905080831161151c576000611526565b6115268184612264565b91506103b961155d670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006124c7565b83906113cc565b600080611571838561243e565b905060008112156103b957600080fd5b60008061159188888787876117f9565b905060006115b46115ac876115a6878b611828565b9061183d565b869086611894565b6115be9083612264565b9050670de0b6b3a764000081106115f2576115eb6115e4670de0b6b3a7640000886113cc565b829061183d565b905061160a565b6116076115e4670de0b6b3a7640000886118ba565b90505b6116148882612264565b9998505050505050505050565b600081831161163057826103b9565b50919050565b6000806116478888888888886118cf565b90925090508061166a57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806116858787878787611991565b905060006116b0670de0b6b3a764000061169f87876113cc565b6116a99190612251565b83906118ba565b9050670de0b6b3a764000081106116dd576116d66115e4670de0b6b3a7640000886118ba565b90506116f5565b6116f26115e4670de0b6b3a7640000886113cc565b90505b6116ff8188612264565b98975050505050505050565b60008061171b8888878787611991565b905061172b856115a6888a612264565b96506000611745848661173e8b86612264565b9190611894565b9050670de0b6b3a764000081106117725761176b6115e4670de0b6b3a7640000886118ba565b905061178a565b6117876115e4670de0b6b3a7640000886113cc565b90505b61179481856118ba565b90506116148982612264565b60008260001904841183021582026117b757600080fd5b5091020490565b60006117ea7f00000000000000000000000000000000000000000000000000000000000000004261249a565b6117f49042612264565b905090565b6000611805858561183d565b61181e611816866115a6868b6113b7565b8590856117a0565b6113ad9190612251565b60006103b98383670de0b6b3a7640000611894565b6000816000036118565750670de0b6b3a76400006103f3565b82600003611866575060006103f3565b816000611872856119b6565b9050818102611889670de0b6b3a7640000826124de565b90506113ad81611bc9565b60008260001904841183021582026118ab57600080fd5b50910281810615159190040190565b60006103b983670de0b6b3a764000084611894565b60008060006118e18989888888611991565b90506118f1866115a6898b612251565b975087811015611908576000809250925050611986565b6000611919858761173e8c86612264565b9050670de0b6b3a764000081106119465761193f6115e4670de0b6b3a7640000896118ba565b905061195e565b61195b6115e4670de0b6b3a7640000896113cc565b90505b61196881866118ba565b9050808a111561197f5761197c818b612264565b93505b6001925050505b965096945050505050565b600061199d858561183d565b61181e6119ae866115a6868b611828565b859085611894565b60008082136119d857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611be457506000919050565b680755bf798b4a1bf1e58212611c0d5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611dde60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611e0457600080fd5b5035919050565b60005b83811015611e26578181015183820152602001611e0e565b50506000910152565b60008151808452611e47816020860160208601611e0b565b601f01601f19169290920160200192915050565b6020815260006103b96020830184611e2f565b80356001600160a01b038116811461032357600080fd5b600080600060608486031215611e9a57600080fd5b83359250611eaa60208501611e6e565b9150611eb860408501611e6e565b90509250925092565b60008060408385031215611ed457600080fd5b82359150611ee460208401611e6e565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611f8a57600080fd5b6103b982611e6e565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611ffb60e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b6000806020838503121561206857600080fd5b823567ffffffffffffffff8082111561208057600080fd5b818501915085601f83011261209457600080fd5b8135818111156120a357600080fd5b8660208260051b85010111156120b857600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015612102578351835292840192918401916001016120e6565b50909695505050505050565b81516001600160801b031681526101408101602083015161213a60208401826001600160801b03169052565b50604083015161214f6040840182600f0b9052565b50606083015161216a60608401826001600160801b03169052565b50608083015161218560808401826001600160801b03169052565b5060a08301516121a060a08401826001600160801b03169052565b5060c08301516121bb60c08401826001600160801b03169052565b5060e08301516121d660e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b6000806040838503121561220e57600080fd5b61221783611e6e565b9150611ee460208401611e6e565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156103f3576103f361223b565b818103818111156103f3576103f361223b565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826122b2576122b261228d565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b23565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161237a816011850160208701611e0b565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516123b4816012850160208701611e0b565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516123ec816010850160208701611e0b565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161237a816011850160208701611e0b565b60006020828403121561243757600080fd5b5051919050565b8181036000831280158383131683831282161715610b2357610b2361223b565b6000600160ff1b82016124735761247361223b565b5060000390565b80820182811260008312801582168215821617156121f3576121f361223b565b6000826124a9576124a961228d565b500690565b6000600182016124c0576124c061223b565b5060010190565b80820281158282048414176103f3576103f361223b565b6000826124ed576124ed61228d565b600160ff1b8214600019841416156125075761250761223b565b50059056fea264697066735822122098d3cb643d30d4a5eb36d49d62c7e609053d3537d545bf995646b265fdde713364736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162007345380380620073458339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051616bb4620007916000396000613a9f015260008181610f3701528181610fb1015261101f01526000818161317f015281816131f801528181613d1a01526153c60152600081816131cc0152818161348701528181614da1015261539a0152600081816131520152818161336401528181613cd601526147f4015260008181610ce9015281816118f001528181611d3101528181611f010152818161212e015261232f0152600081816114190152818161146401528181611566015281816141bd0152818161420c01528181614445015281816148b8015281816148f4015281816153220152615cd50152600081816114d501528181611951015281816132c50152818161331201528181614007015281816140340152818161441f015281816147b401528181614ce601528181615094015261562401526000818161151801528181611993015281816132a3015281816133330152818161446b0152818161479201528181614cc4015281816150720152615645015260008181610dae015281816114f70152818161197201528181611dff015281816121bb015281816123ec0152818161282c015281816129480152818161340d0152818161366001528181613ca40152818161498301526151310152600081816125b50152818161265e01526127940152600081816111820152818161121c0152818161128f015281816126a9015281816126f201528181612c9401528181612cdd01528181612db701528181612e5501528181613d4a01528181613e0401528181613ec90152613f610152600081816104a30152611711015260006139d401526000613997015260008181610252015261083d0152616bb46000f3fe60806040526004361061023b5760003560e01c80638fca1f7b1161012e578063b334ed86116100ab578063d5002f2e1161006f578063d5002f2e14610904578063dbbe807014610919578063ded062311461092c578063e44808bc1461094c578063ed64bab21461096c5761023b565b8063b334ed861461082b578063b4f8da3914610877578063ca6d38f7146108b1578063cba2e58d146108d1578063cbc13434146108e45761023b565b80639cd241af116100f25780639cd241af1461078b578063a22cb465146107ab578063a77384c1146107cb578063ab033ea9146107eb578063b1b4b1701461080b5761023b565b80638fca1f7b146106da5780639032c72614610703578063907c0f92146107235780639aa68462146107385780639bd334981461074b5761023b565b80634ed2d6ac116101bc5780637180c8ca116101805780637180c8ca146105b957806371f88b7c146105d957806377d05ff4146105f95780638120a3e21461060c578063883483971461062c5761023b565b80634ed2d6ac146105055780635a1a3e7c14610525578063680962391461054557806368c2ecb814610565578063702db0eb146105855761023b565b806329b23fc11161020357806329b23fc11461042f57806330adf81f1461045d5780633644e515146104915780633e691db9146104c55780634daa8b8f146104e55761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806322d5506b146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a9291906161cc565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f9826161dc565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401616284565b80519650602001945050505050f35b34801561035757600080fd5b5061036b61036636600461634e565b61098c565b005b34801561037957600080fd5b5061038d61038836600461637d565b6109d5565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c2366004616429565b610bcf565b3480156103d357600080fd5b5061036b6103e23660046164ba565b610c83565b3480156103f357600080fd5b506104076104023660046164fe565b610c96565b604080519586526020860194909452928401919091526060830152608082015260a00161039e565b34801561043b57600080fd5b5061044f61044a366004616530565b610cbf565b60405190815260200161039e565b34801561046957600080fd5b5061044f7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561049d57600080fd5b5061044f7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b5061044f6104e036600461658a565b610f05565b3480156104f157600080fd5b5061038d6105003660046165bf565b611094565b34801561051157600080fd5b5061036b6105203660046165d8565b611104565b34801561053157600080fd5b5061036b6105403660046165bf565b611152565b34801561055157600080fd5b5061036b61056036600461661e565b61115e565b34801561057157600080fd5b5061044f6105803660046165bf565b611309565b34801561059157600080fd5b5061036b6105a0366004616657565b6001600160801b03908116600160801b02911617600855565b3480156105c557600080fd5b5061036b6105d436600461668a565b61131a565b3480156105e557600080fd5b5061038d6105f43660046166c1565b611392565b61044f61060736600461637d565b6113ae565b34801561061857600080fd5b5061036b6106273660046165bf565b61162e565b34801561063857600080fd5b5061036b6106473660046166ff565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106e657600080fd5b506013546001600160801b0380821691600160801b90041661038d565b34801561070f57600080fd5b5061036b61071e3660046167c7565b611637565b34801561072f57600080fd5b5061044f611886565b61044f610746366004616530565b611895565b34801561075757600080fd5b5061076b61076636600461661e565b611b92565b60408051948552602085019390935291830152606082015260800161039e565b34801561079757600080fd5b5061036b6107a6366004616843565b611bb2565b3480156107b757600080fd5b5061036b6107c636600461668a565b611bbe565b3480156107d757600080fd5b5061036b6107e63660046165bf565b601455565b3480156107f757600080fd5b5061036b610806366004616878565b611c2a565b34801561081757600080fd5b5061044f6108263660046165bf565b611c9e565b34801561083757600080fd5b5061085f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561088357600080fd5b5061036b610892366004616893565b600980546001600160801b03928316600160801b029216919091179055565b3480156108bd57600080fd5b5061044f6108cc3660046165bf565b611ca9565b61038d6108df366004616530565b611cb4565b3480156108f057600080fd5b5061038d6108ff36600461637d565b611ed5565b34801561091057600080fd5b5060145461044f565b61038d610927366004616530565b6120d1565b34801561093857600080fd5b5061044f610947366004616530565b612305565b34801561095857600080fd5b5061036b6109673660046168ae565b612534565b34801561097857600080fd5b5061036b6109873660046165bf565b612584565b336000908152600f602052604090205460ff166109bb576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b600080600054600114610a035760405162461bcd60e51b81526004016109fa90616905565b60405180910390fd5b60026000908155610a1261268e565b9050610a25610a1f61278d565b826127c3565b50610a2f81612aaf565b600d548692506001600160801b031680831115610a5357806001600160801b031692505b82600003610a6957600080935093505050610bc0565b610a78600360f81b3385612b72565b600d546001600160801b03600160801b909104811690600090610aa090869084908616612c1b565b9050610aab85612c39565b610ab5908461693f565b600d80546001600160801b0319166001600160801b0392909216919091179055610ade81612c39565b600d8054601090610b00908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b2e8188612c63565b955085610b3b8987612f4f565b1115610b5a5760405163c972651760e01b815260040160405180910390fd5b610b676020880188616878565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610b9c8488612f4f565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b0386161580610bec57506001600160a01b038516155b15610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c2a5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610c7a57610c72858583818110610c4a57610c4a616966565b905060200201358888868686818110610c6557610c65616966565b9050602002013533612f6b565b600101610c2d565b50505050505050565b610c908484848433612f6b565b50505050565b6000806000806000610caa8989898961312c565b939d929c50909a509850909650945050505050565b60008054600114610ce25760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610d285760405163211ddda360e11b815260040160405180910390fd5b6000610d3261268e565b9050610d3e86826127c3565b50610d54610d4d600288613236565b3387612b72565b600080600080600080610d688b888e61326b565b949a509298509096509450925090508a8c8842821115610e39578360106000828254610d94919061697c565b90915550610da79050838a8988866134df565b6000610dd37f00000000000000000000000000000000000000000000000000000000000000008461698f565b6000818152600e6020526040812054919250600160801b909104600f0b90610e069086908a908e908d9089908990613659565b6000828152600e6020526040902054610e2d90600f83810b91600160801b9004900b613802565b610e3683612aaf565b50505b6000610e45898e612c63565b90508c6000610e55838e84613929565b90508f811015610e785760405163c972651760e01b815260040160405180910390fd5b610e83600286613236565b8f6000016020810190610e969190616878565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610f285760405162461bcd60e51b81526004016109fa90616905565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610f646020840184616878565b6001600160a01b031614610f8b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610fd45750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610feb57506011546001600160a01b03163314155b15611008576040516282b42960e81b815260040160405180910390fd5b60108054600090915561101b8184612c63565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee8361107161268e565b6040805192835260208301919091520160405180910390a2506001600055919050565b600080601283815481106110aa576110aa616966565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b0316601284815481106110e7576110e7616966565b600091825260209091200154909463ffffffff9091169350915050565b8361110e81613959565b6001600160a01b0316336001600160a01b03161461113f57604051632aab8bd360e01b815260040160405180910390fd5b61114b85858585613a16565b5050505050565b61115b81613a83565b50565b6040516370a0823160e01b81523060048201526000906111f4906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed91906169a2565b8385613bdd565b915050600081131561127c576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561126857600080fd5b505af1158015610c7a573d6000803e3d6000fd5b6000811215611304576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac306112be846169bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561126857600080fd5b505050565b600061131482613c77565b92915050565b6011546001600160a01b03163314611344576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6000806113a0858585613cc8565b90925090505b935093915050565b600080546001146113d15760405162461bcd60e51b81526004016109fa90616905565b60026000556113de613d48565b600c5460ff161561140257604051637983c05160e01b815260040160405180910390fd5b60008061140f8685613db5565b909250905061143f7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b82101561145f57604051632afb507160e21b815260040160405180910390fd5b61148a7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b611494908361698f565b600c805460ff1916600117905592506114ac82612c39565b600880546001600160801b0319166001600160801b039290921691909117905561154161153c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006140a2565b612c39565b600880546001600160801b03928316600160801b02921691909117905561158a6000807f0000000000000000000000000000000000000000000000000000000000000000614104565b6115a2600061159c6020870187616878565b85614104565b6115ad610a1f61278d565b5060006115bb878387613929565b90506115ca6020860186616878565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b61115b816141a4565b834211156116585760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661167f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117ab573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061180f906169ee565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061189061278d565b905090565b600080546001146118b85760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff16156118e6576040516313d0ff5960e31b815260040160405180910390fd5b6118ee613d48565b7f000000000000000000000000000000000000000000000000000000000000000085101561192f5760405163211ddda360e11b815260040160405180910390fd5b60006119b761193c614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614347565b9050848110806119c657508381115b156119e457604051633b61151160e11b815260040160405180910390fd5b6000806119f18886613db5565b91509150611a00610a1f61278d565b50600d54600360f81b60009081526002602052600080516020616b3f833981519152549091611a3a916001600160801b039091169061698f565b60008080526002602052600080516020616b5f8339815191525491925090611a6390839061697c565b90506000806000611a7386614382565b9050611a7e816144e8565b9150611a89876141a4565b6008546001600160801b038082168352600954600f0b6020840152600160801b909104166040820152611abb816144e8565b9250611ad38483611acc818761698f565b9190612c1b565b9850611aef90506000611ae960208c018c616878565b8a614104565b611af885612aaf565b60008315611b0f57611b0a8285614756565b611b12565b60005b9050611b2160208b018b616878565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a611b568a8a612f4f565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b600080600080611ba2868661476b565b9299919850965090945092505050565b61130483838333613a16565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611c54576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006113148261488f565b600061131482614938565b600080600054600114611cd95760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615611d07576040516313d0ff5960e31b815260040160405180910390fd5b611d0f613d48565b600080611d1c8886613db5565b915091506000611d2d898388613929565b90507f0000000000000000000000000000000000000000000000000000000000000000811015611d705760405163211ddda360e11b815260040160405180910390fd5b86821015611d91576040516342af972b60e01b815260040160405180910390fd5b6000611d9b61278d565b9050611da781846127c3565b506000806000611db7878761476b565b909a5091945092509050878c1115611de25760405163c972651760e01b815260040160405180910390fd5b8060106000828254611df4919061697c565b90915550611e2490507f00000000000000000000000000000000000000000000000000000000000000008561697c565b9850611e3483898489888e6149ae565b6000611e4160018b613236565b9050611e5a81611e5460208e018e616878565b8b614104565b80611e6860208d018d616878565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b600080600054600114611efa5760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611f405760405163211ddda360e11b815260040160405180910390fd5b6000611f4a61268e565b9050611f57610a1f61278d565b50611f6181612aaf565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091611faa916001600160801b039091169061698f565b90506000611fb8828461697c565b9050611fc66000338b612b72565b600080611fd68b87858888614b9c565b9098509092509050611ff9600360f81b611ff360208c018c616878565b89614104565b612003828a612c63565b9750600061201289888c613929565b9050888b11156120355760405163c972651760e01b815260040160405180910390fd5b6000841561204c576120478386614756565b61204f565b60005b905061205e60208c018c616878565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b6000806000546001146120f65760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615612124576040516313d0ff5960e31b815260040160405180910390fd5b61212c613d48565b7f000000000000000000000000000000000000000000000000000000000000000086101561216d5760405163211ddda360e11b815260040160405180910390fd5b600061217761268e565b90508481101561219a576040516342af972b60e01b815260040160405180910390fd5b60006121a461278d565b905060006121b282846127c3565b905060006121e07f00000000000000000000000000000000000000000000000000000000000000008461697c565b905060008060006121f28d8887614c9e565b909450909250905061220582888c614dd4565b91508060106000828254612219919061697c565b909155505050808b10156122405760405163c972651760e01b815260040160405180910390fd5b600061224c828b613db5565b50905061225b8d848987614dfc565b6000612268600286613236565b90508d6122828261227c60208f018f616878565b83614104565b8161229060208e018e616878565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95886122c5878e612f4f565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b600080546001146123285760405162461bcd60e51b81526004016109fa90616905565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561236e5760405163211ddda360e11b815260040160405180910390fd5b600061237861268e565b905061238486826127c3565b50612393610d4d600188613236565b6000806000806000806123a78b888e61503a565b95509550955095509550955060008c90508c4210156124705781601060008282546123d2919061697c565b909155506123e590508c888786856151b6565b60006124117f00000000000000000000000000000000000000000000000000000000000000008361698f565b6000818152600e6020526040902054909150600160801b9004600f0b61243d8e878b8a878f6001613659565b6000828152600e602052604090205461246490600f83810b91600160801b9004900b613802565b61246d8a612aaf565b50505b600061247c878c612c63565b9050600061248b828b8e613929565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600185613236565b6124c760208f018f616878565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b8461253e81613959565b6001600160a01b0316336001600160a01b03161461256f57604051632aab8bd360e01b815260040160405180910390fd5b61257c8686868686612f6b565b505050505050565b6000818152600e60205260409020546001600160801b0316156125a45750565b60006125ae61278d565b90506125da7f000000000000000000000000000000000000000000000000000000000000000083616a1d565b1515806125e657508181105b156126045760405163ecd29e8160e01b815260040160405180910390fd5b80820361261c576113048161261761268e565b6127c3565b815b6000818152600e60205260409020546001600160801b03168282036126485761264561268e565b90505b80156126585761114b84826127c3565b506126837f00000000000000000000000000000000000000000000000000000000000000008261697c565b905061261e565b5050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126dd575047612768565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612741573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276591906169a2565b90505b601454600003612779576000612787565b601454612787908290614756565b91505090565b60006127b97f000000000000000000000000000000000000000000000000000000000000000042616a1d565b611890904261698f565b6000828152600e6020526040812080546001600160801b03161515806127e857504284115b156127fe57546001600160801b03169050611314565b61280783612c39565b81546001600160801b0319166001600160801b03919091161781556000600e816128517f00000000000000000000000000000000000000000000000000000000000000008861698f565b815260208101919091526040016000908120546001600160801b0316915061287a600287613236565b60008181526002602052604081205491925081156128d3576000806128a2848a886000615383565b9150915080601060008282546128b8919061697c565b909155506128cc905084600084808e6134df565b6001925050505b60006128e060018a613236565b600081815260026020526040902054909150801561293b57600080612908838c8a6001615383565b91509150806010600082825461291e919061697c565b909155508c90506129338460008580856151b6565b600195505050505b82156129b957600061296d7f00000000000000000000000000000000000000000000000000000000000000008c61698f565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926129ad928492919004900b613802565b6129b68b612aaf565b50505b6000808a116129c95760006129e4565b6129e48a6129de6129d98d614382565b6144e8565b90612f4f565b600d546002602052600080516020616b3f833981519152546000808052600080516020616b5f83398151915254939450926001600160801b0390921691612a2b919061697c565b612a35919061698f565b905060008115612a4e57612a498383614756565b612a51565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091612af8916001600160801b039091169061698f565b90506000612b06828461697c565b90506000612b166129d986614382565b90506000612b25858385612c1b565b9050600080612b338861488f565b905082811115612b4a57612b47838261698f565b91505b6000821180612b57575083155b15612b6857612b6882858789615451565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612ba490849061698f565b909155505060008381526002602052604081208054839290612bc790849061698f565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000826000190484118302158202612c3257600080fd5b5091020490565b6000600160801b8210612c5f57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006014548311612c745782612c78565b6014545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cc8575047612d53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5091906169a2565b90505b601454600003612d64576000612d83565b612d83612d7c6014548361475690919063ffffffff16565b8590612f4f565b91508360146000828254612d97919061698f565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e4b57612df16020850185616878565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114612e3b576040519150601f19603f3d011682016040523d82523d6000602084013e612e40565b606091505b505080915050612efb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb612e876020870187616878565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015612ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef89190616a31565b90505b80612f19576040516312171d8360e31b815260040160405180910390fd5b612f29604085016020860161634e565b612f4457612f3f612f3861268e565b8490614756565b612f46565b825b95945050505050565b6000612f648383670de0b6b3a7640000612c1b565b9392505050565b6001600160a01b0384161580612f8857506001600160a01b038316155b15612fa65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461306a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff1661306a5760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146130685760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061306290849061698f565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061309c90849061698f565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130d390849061697c565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000808080806131778887611acc8c6129de6131508d670de0b6b3a764000061698f565b7f000000000000000000000000000000000000000000000000000000000000000090612f4f565b94506131a3857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b925060006131c46131bc8a670de0b6b3a764000061698f565b8b9089612c1b565b90506131f0817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b945061321c857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9250613228838561697c565b915050945094509450945094565b60006001600160f81b038211156132605760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080600080600080600061327f88613c77565b90506132e961328c614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061553a565b9098509550935060006133576132fd614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b905061338d8589613388847f00000000000000000000000000000000000000000000000000000000000000006155bb565b6155eb565b156133ab5760405163512095c760e01b815260040160405180910390fd5b6133b481613a83565b8a8a600080806133c68588888761312c565b9b5092955090935091506133dc9050818461698f565b6133e6908b61697c565b99506133f2828461697c565b6133fc908c61697c565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613437919061698f565b815260208101919091526040016000908120546001600160801b03169150428911613479576000898152600e60205260409020546001600160801b031661347b565b895b90506134ab8b8784848e7f0000000000000000000000000000000000000000000000000000000000000000615674565b96506134b7838761698f565b95506134c987878786868660006156c6565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b031661352861153c8261350b85670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b031691908a6000615741565b600b80546001600160801b03928316600160801b02921691909117905561354e86612c39565b613558908261693f565b600a80546001600160801b03928316600160801b0292169190911790555061357f83612c39565b6008805460009061359a9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506135c7826157bb565b600980546000906135dc908490600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061360c84612c39565b6008805460109061362e908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006136857f00000000000000000000000000000000000000000000000000000000000000008561698f565b9050600060026000613698600188613236565b81526020019081526020016000205490506000600260006136ba600289613236565b81526020019081526020016000205490508160001480156136d9575080155b156136fe576000838152600e6020526040902080546001600160801b031690556137f6565b60006137428b61370e8c89612f4f565b6137199060026169d7565b8b6137248c8b612f4f565b61372e919061697c565b613738919061698f565b61153c919061697c565b905084156137a1576000848152600e602052604090208054829190601090613775908490600160801b9004600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506137f4565b6000848152600e6020526040902080548291906010906137cc908490600160801b9004600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015613812575060008212155b156138a557600061382382826157f9565b61382d9084616ac8565b60095490915061385a90613855908390600160801b90046001600160801b0316600f0b61580f565b6157bb565b6009805460109061387c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561268a576000821261391b576138be826157bb565b6138c7826157bb565b6138d19190616a9b565b600980546010906138f3908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6138d16138558260006157f9565b600061393b604083016020840161634e565b15613947575082612f64565b6139518484612f4f565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b82048116911642613ac47f00000000000000000000000000000000000000000000000000000000000000008461697c565b1115613acf57505050565b600060128281548110613ae457613ae4616966565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690613b18834261698f565b601254909150878202830190600090613b3288600161697c565b613b3c9190616a1d565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110613b7557613b75616966565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008080613bef846301e13380614756565b90506000613c0e8260008812613c0557876129de565b6129de886169bb565b90506000861315613c4157613c2c613c258261581e565b8890612f4f565b9350613c38878561698f565b925050506113a6565b6000861215613c6957613c5d613c568261581e565b8890614756565b9350613c388785616ac8565b509495600095509350505050565b600080613c8261278d565b9050808311613c92576000613c9c565b613c9c818461698f565b9150612f64827f0000000000000000000000000000000000000000000000000000000000000000614756565b600080613d12856129de85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613d08818c614756565b6129de919061698f565b9150613d3e827f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9050935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590613d955750600034115b15613db357604051631574f9f360e01b815260040160405180910390fd5b565b60008080613dc9604085016020860161634e565b613de457613ddf613dd861268e565b8690612f4f565b613de6565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613eb45747915082341015613e55576040516312171d8360e31b815260040160405180910390fd5b82341115613eaf5733613e68843461698f565b604051600081818185875af1925050503d8060008114613ea4576040519150601f19603f3d011682016040523d82523d6000602084013e613ea9565b606091505b50909150505b613fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f3c91906169a2565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613fd69190616a31565b90505b80613ff7576040516312171d8360e31b815260040160405180910390fd5b60145460000361405e5761402b837f0000000000000000000000000000000000000000000000000000000000000000614756565b601481905594507f0000000000000000000000000000000000000000000000000000000000000000935061409b92505050565b60145460009061406f908585612c1b565b90508060146000828254614083919061697c565b9091555081905061409261268e565b95509550505050505b9250929050565b6000806140b3846301e13380614756565b90506140f96140ef6140cd670de0b6b3a7640000866159a9565b6140d78885612f4f565b6140e990670de0b6b3a764000061697c565b906159be565b6129de888a612f4f565b979650505050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061413690849061697c565b90915550506000838152600260205260408120805483929061415990849061697c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612c0e565b806000036141af5750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156141fc5760405163585fe6df60e11b815260040160405180910390fd5b60006142088383616ae8565b90507f000000000000000000000000000000000000000000000000000000000000000081121561424b5760405163585fe6df60e11b815260040160405180910390fd5b61425481612c39565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126142965761428f838286612c1b565b91506142b6565b6142aa6142a2826169bb565b849086612c1b565b6142b3906169bb565b91505b6142bf826157bb565b600980546001600160801b0319166001600160801b039283161790556008546143029161153c91600160801b9004166142f88785615a15565b611acc8787615a15565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600854600954600091611890916001600160801b0390911690600f0b615a15565b600080614356878787866155aa565b90506140f961436a82866301e13380615a32565b61437c83670de0b6b3a764000061698f565b90614756565b6143df60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916144ae9116614938565b8152600a546001600160801b03600160801b9182900481166020840152600b546040909301926144e092900416614938565b905292915050565b600080614508836101400151846101200151612f4f90919063ffffffff16565b61010084015160e085015161451c91612f4f565b6145269190616ac8565b9050600061453c84600001518560200151615a15565b905060008213156145dc57600061457e8286604001518760a001518860c00151670de0b6b3a764000061456f919061698f565b89606001518a60800151615a58565b905061458a8184615af2565b905080156145d6576145c3828660400151838860c00151670de0b6b3a76400006145b4919061698f565b89606001518a60800151615b01565b855186906145d290839061698f565b9052505b50614698565b6000821215614698576145ee826169bb565b915060006146228286604001518760c00151670de0b6b3a7640000614613919061698f565b88606001518960800151615b35565b905061462e8184615af2565b9050801561467a57614667828660400151838860c00151670de0b6b3a7640000614658919061698f565b89606001518a60800151615bcb565b8551869061467690839061697c565b9052505b614684818461698f565b8551869061469390839061697c565b905250505b60006146c7856101000151670de0b6b3a76400006146b6919061698f565b606087015160e08801519190612c1b565b6146f5866101400151670de0b6b3a76400006146e3919061698f565b60608801516101208901519190612c1b565b6146ff9190616ac8565b905060008186600001516147139190616ae8565b90508560a0015181121561473a5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161474c908261698f565b9695505050505050565b6000612f6483670de0b6b3a764000084612c1b565b6000806000806147d861477c614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615c60565b925060006147e76132fd614326565b90506148188785613388847f0000000000000000000000000000000000000000000000000000000000000000615c81565b156148365760405163512095c760e01b815260040160405180910390fd5b61483f81613a83565b60008061484d89848a613cc8565b909250905061485c828761698f565b9450614868818661697c565b955061487581848a612c1b565b9350614881848a61698f565b965050505092959194509250565b60095460009081906148b190600160801b90046001600160801b031684614756565b90506148dd7f00000000000000000000000000000000000000000000000000000000000000008261697c565b6008546001600160801b03161115614932576008547f0000000000000000000000000000000000000000000000000000000000000000906149289083906001600160801b031661698f565b612f64919061698f565b50919050565b600080670de0b6b3a764000061494c61278d565b61495691906169d7565b9050808311614966576000614970565b614970818461698f565b9150612f646149a7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006169d7565b8390614756565b600a546001600160801b03166149e961153c826149d385670de0b6b3a76400006169d7565b600b546001600160801b031691908a6001615741565b600b80546001600160801b0319166001600160801b0392909216919091179055614a1287612c39565b60088054600090614a2d9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a5a85612c39565b60088054601090614a7c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614aa986612c39565b614ab39082616a4e565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90614b0f614afa8b89612f4f565b614b058b60026169d7565b61153c919061698f565b835490915081908490601090614b30908490600160801b9004600f0b616a6e565b82546001600160801b039182166101009390930a9283029190920219909116179055508254614b6d90600f84810b91600160801b9004900b613802565b614b7687615cce565b614b93576040516318846de960e01b815260040160405180910390fd5b6137f687612aaf565b600080600080614bab88614382565b90506000614bb8826144e8565b9050614bca614bc561268e565b61488f565b9450614bd7858b89612c1b565b9450614bea614be5866169bb565b6141a4565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000614c1e836144e8565b90506000614c2d8a8385612c1b565b9050614c398c8b616ac8565b614c439082616ac8565b90506000811215614c8c576000614c64614c5c836169bb565b85908d612c1b565b9050614c70818961698f565b9750614c7b816141a4565b614c86818a8e615d40565b60009150505b94509092505050955095509592505050565b6000806000614d0a614cae614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615d85565b915085614d178387612f4f565b1115614d365760405163512095c760e01b815260040160405180910390fd5b6000614d436132fd614326565b9050614d4e81613a83565b600080614d6589670de0b6b3a7640000858b61312c565b509294509250614d7991508290508361698f565b614d83908661698f565b9450614dc589614d93838861698f565b89614d9e8c82615da6565b8c7f0000000000000000000000000000000000000000000000000000000000000000615674565b95509250505093509350939050565b6000614de6604083016020840161634e565b15614df5576139518484612f4f565b5082612f64565b600a54614e469061153c90600160801b90046001600160801b0316614e2984670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b03169190886001615741565b600b80546001600160801b03928316600160801b0292169190911790556000614e6e84612c39565b600854614e8491906001600160801b031661693f565b600880546001600160801b0319166001600160801b0383161790559050614eaa85612c39565b60088054601090614ecc908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614ef985612c39565b600a8054601090614f1b908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b911612159050614f6a5760405163585fe6df60e11b815260040160405180910390fd5b6000614f7461278d565b6000818152600e6020526040902054909150600160801b9004600f0b614f9987612c39565b6000838152600e602052604090208054601090614fc1908490600160801b9004600f0b616a9b565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461500b90600f83810b91600160801b9004900b613802565b61501485615cce565b615031576040516318846de960e01b815260040160405180910390fd5b610c7a85612aaf565b600080600080600080600061504e88613c77565b90506150b861505b614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615db5565b9098509650935060006150cc6132fd614326565b90506150d781613a83565b6000806150e68d85858f61312c565b98509294509092506150fc91508390508861698f565b9650615108818361697c565b615112908a61698f565b985061511e858a61697c565b9750505050506151a285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61515b919061698f565b81526020810191909152604001600020546001600160801b0316428d116151995760008d8152600e60205260409020546001600160801b031661519b565b8d5b60016156c6565b999d939c50919a5098509695509350505050565b600a546001600160801b03166151f161153c826151db85670de0b6b3a76400006169d7565b600b546001600160801b031691908a6000615741565b600b80546001600160801b0319166001600160801b039290921691909117905561521a86612c39565b615224908261693f565b600a80546001600160801b0319166001600160801b03929092169190911790555061524e83612c39565b600880546000906152699084906001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550615296826157bb565b600980546000906152ab908490600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506152db84612c39565b600880546010906152fd908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806153655750600954600854600f9190910b6001600160801b03909116125b1561114b5760405163585fe6df60e11b815260040160405180910390fd5b6000806153908686614756565b915060006153be837f0000000000000000000000000000000000000000000000000000000000000000612f4f565b90506153ea817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9150831561540d576153fc828261698f565b615406908461698f565b9250615424565b615417828261698f565b615421908461697c565b92505b8486101561544757615437838787612c1b565b9250615444828787612c1b565b91505b5094509492505050565b6000808411615460578261546b565b61546b838686612c1b565b90508060000361547b5750610c90565b80858382111561549657839150615493878385612c1b565b90505b61549f82612c39565b600d80546000906154ba9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506154e781612c39565b600d8054601090615509908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c7a81614be5906169bb565b6000808061555b61555388670de0b6b3a764000061698f565b899087612c1b565b90506155678888612f4f565b9150811561559d5761558e8a8a846155878a670de0b6b3a764000061698f565b8989615bcb565b925061559a838261697c565b90505b9750975097945050505050565b6000612f46826140e9858888612c1b565b60006155d96155d284670de0b6b3a764000061698f565b8390615e01565b612f6490670de0b6b3a764000061698f565b600080615669856155fa614326565b615604919061697c565b600854615622908790600160801b90046001600160801b031661698f565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b909210949350505050565b60008061568d856156858887615e01565b8a9190612c1b565b905061569a888486612c1b565b6156a4908261697c565b9050868111156156bb576156b8878261698f565b91505b509695505050505050565b600080600080600080888810156157235786156156eb576156e88d898b612c1b565b9c505b6156f68c898b612c1b565b9b506157028b8d616ac8565b905061570f8b898b612c1b565b9a5061571c8a898b612c1b565b9950615730565b61572d8b8d616ac8565b90505b9b9c9a9b999a975050505050505050565b600081156157815761577a615756848761697c565b6157608587612f4f565b61576a888a612f4f565b615774919061697c565b906159a9565b9050612f46565b82850361579057506000612f46565b61474c61579d848761698f565b6157a78587612f4f565b6157b1888a612f4f565b615774919061698f565b600060016001607f1b031982128015906157dc575060016001607f1b038213155b612c5f5760405163a5353be560e01b815260040160405180910390fd5b60008183136158085781612f64565b5090919050565b60008183136149325782612f64565b6000680248ce36a70cb26b3e19821361583957506000919050565b680755bf798b4a1bf1e582126158625760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000612f6483670de0b6b3a764000084615a32565b6000816000036159d75750670de0b6b3a7640000611314565b826000036159e757506000611314565b8160006159f385615e16565b9050818102615a0a670de0b6b3a764000082616b10565b905061474c8161581e565b600080615a228385616ac8565b90506000811215612f6457600080fd5b6000826000190484118302158202615a4957600080fd5b50910281810615159190040190565b600080615a688888878787616029565b90506000615a85615a7d876140e9878b615e01565b869086615a32565b615a8f908361698f565b9050670de0b6b3a76400008110615ac357615abc615ab5670de0b6b3a764000088614756565b82906159be565b9050615adb565b615ad8615ab5670de0b6b3a7640000886159a9565b90505b615ae5888261698f565b9998505050505050505050565b60008183116149325782612f64565b600080615b12888888888888616058565b9092509050806156bb57604051637ac17d2560e01b815260040160405180910390fd5b600080615b45878787878761611a565b90506000615b70670de0b6b3a7640000615b5f8787614756565b615b69919061697c565b83906159a9565b9050670de0b6b3a76400008110615b9d57615b96615ab5670de0b6b3a7640000886159a9565b9050615bb5565b615bb2615ab5670de0b6b3a764000088614756565b90505b615bbf818861698f565b98975050505050505050565b600080615bdb888887878761611a565b9050615beb856140e9888a61698f565b96506000615c058486615bfe8b8661698f565b9190615a32565b9050670de0b6b3a76400008110615c3257615c2b615ab5670de0b6b3a7640000886159a9565b9050615c4a565b615c47615ab5670de0b6b3a764000088614756565b90505b615c5481856159a9565b9050615ae5898261698f565b60006140f9878787615c7a88670de0b6b3a764000061698f565b878761613f565b6000612f64615cad670de0b6b3a7640000615c9c81876159a9565b615ca6919061698f565b8490615e01565b615cbf90670de0b6b3a764000061697c565b670de0b6b3a764000090614756565b6000615cfa7f000000000000000000000000000000000000000000000000000000000000000083612f4f565b600954600854615d38916000916001600160801b03600160801b9092048216600f0b91615d28911687612f4f565b615d329190616ac8565b906157f9565b121592915050565b6000615d4e6129d983614382565b60008080526002602052600080516020616b5f8339815191525491925090615d7790859061697c565b905061114b85838387615451565b60006140f9878787615d9f88670de0b6b3a764000061698f565b8787615b01565b60008183116158085781612f64565b60008080615dce61555388670de0b6b3a764000061698f565b9050861561559d57615de08888612f4f565b915061558e8a8a84615dfa8a670de0b6b3a764000061698f565b8989615b01565b6000612f648383670de0b6b3a7640000615a32565b6000808213615e3857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600061603585856159be565b61604e616046866140e9868b612f4f565b859085612c1b565b61474c919061697c565b600080600061606a898988888861611a565b905061607a866140e9898b61697c565b97508781101561609157600080925092505061610f565b60006160a28587615bfe8c8661698f565b9050670de0b6b3a764000081106160cf576160c8615ab5670de0b6b3a7640000896159a9565b90506160e7565b6160e4615ab5670de0b6b3a764000089614756565b90505b6160f181866159a9565b9050808a111561610857616105818b61698f565b93505b6001925050505b965096945050505050565b600061612685856159be565b61604e616137866140e9868b615e01565b859085615a32565b60008061614f888887878761611a565b9050616162856140e9613dd8898c61697c565b975061616f848985612c1b565b9750600061617d898361698f565b9050670de0b6b3a764000081106161aa576161a3615ab5670de0b6b3a7640000886159a9565b90506161c2565b6161bf615ab5670de0b6b3a764000088614756565b90505b615ae5818961698f565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561620b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561624d5761624d616213565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561627c5761627c616213565b604052919050565b6000602080838503121561629757600080fd5b825167ffffffffffffffff808211156162af57600080fd5b818501915085601f8301126162c357600080fd5b8151818111156162d5576162d5616213565b6162e7601f8201601f19168501616253565b915080825286848285010111156162fd57600080fd5b60005b8181101561631b578381018501518382018601528401616300565b50600090820190930192909252509392505050565b801515811461115b57600080fd5b803561634981616330565b919050565b60006020828403121561636057600080fd5b8135612f6481616330565b60006060828403121561493257600080fd5b60008060006060848603121561639257600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156163b757600080fd5b6163c38682870161636b565b9150509250925092565b80356001600160a01b038116811461634957600080fd5b60008083601f8401126163f657600080fd5b50813567ffffffffffffffff81111561640e57600080fd5b6020830191508360208260051b850101111561409b57600080fd5b6000806000806000806080878903121561644257600080fd5b61644b876163cd565b9550616459602088016163cd565b9450604087013567ffffffffffffffff8082111561647657600080fd5b6164828a838b016163e4565b9096509450606089013591508082111561649b57600080fd5b506164a889828a016163e4565b979a9699509497509295939492505050565b600080600080608085870312156164d057600080fd5b843593506164e0602086016163cd565b92506164ee604086016163cd565b9396929550929360600135925050565b6000806000806080858703121561651457600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561654657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561657257600080fd5b61657e8782880161636b565b91505092959194509250565b60006020828403121561659c57600080fd5b813567ffffffffffffffff8111156165b357600080fd5b6139518482850161636b565b6000602082840312156165d157600080fd5b5035919050565b600080600080608085870312156165ee57600080fd5b843593506165fe602086016163cd565b925060408501359150616613606086016163cd565b905092959194509250565b6000806040838503121561663157600080fd5b50508035926020909101359150565b80356001600160801b038116811461634957600080fd5b6000806040838503121561666a57600080fd5b61667383616640565b915061668160208401616640565b90509250929050565b6000806040838503121561669d57600080fd5b6166a6836163cd565b915060208301356166b681616330565b809150509250929050565b6000806000606084860312156166d657600080fd5b505081359360208301359350604090920135919050565b8035600f81900b811461634957600080fd5b6000610140828403121561671257600080fd5b61671a616229565b61672383616640565b815261673160208401616640565b6020820152616742604084016166ed565b604082015261675360608401616640565b606082015261676460808401616640565b608082015261677560a08401616640565b60a082015261678660c08401616640565b60c082015261679760e08401616640565b60e08201526101006167aa81850161633e565b908201526101206167bc84820161633e565b908201529392505050565b600080600080600080600060e0888a0312156167e257600080fd5b6167eb886163cd565b96506167f9602089016163cd565b9550604088013561680981616330565b945060608801359350608088013560ff8116811461682657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561685857600080fd5b83359250616868602085016163cd565b9150604084013590509250925092565b60006020828403121561688a57600080fd5b612f64826163cd565b6000602082840312156168a557600080fd5b612f6482616640565b600080600080600060a086880312156168c657600080fd5b853594506168d6602087016163cd565b93506168e4604087016163cd565b9250606086013591506168f9608087016163cd565b90509295509295909350565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b0382811682821603908082111561695f5761695f616929565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561131457611314616929565b8181038181111561131457611314616929565b6000602082840312156169b457600080fd5b5051919050565b6000600160ff1b82016169d0576169d0616929565b5060000390565b808202811582820484141761131457611314616929565b600060018201616a0057616a00616929565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082616a2c57616a2c616a07565b500690565b600060208284031215616a4357600080fd5b8151612f6481616330565b6001600160801b0381811683821601908082111561695f5761695f616929565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131457611314616929565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561131457611314616929565b818103600083128015838313168383128216171561695f5761695f616929565b8082018281126000831280158216821582161715616b0857616b08616929565b505092915050565b600082616b1f57616b1f616a07565b600160ff1b821460001984141615616b3957616b39616929565b50059056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220d5c2afef71732e7893d44182fd276be29c213009625e7858d823283afa2e93bc64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a26469706673582212204c6596a7ab6d6602a62f8d183eedf02f06c8c09b1401672c9f58cc9d71a6385864736f6c63430008130033",
    "sourceMap": "343:12813:125:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;484:344;;;:::i;:::-;;834:1996;;;;;;:::i;:::-;;:::i;2545:198:161:-;;;;;;:::i;:::-;;:::i;:::-;;;1098:25:167;;;1086:2;1071:18;2545:198:161;;;;;;;;2170:134:63;;;:::i;:::-;;;;;;;:::i;2836:2023:125:-;;;;;;:::i;:::-;;:::i;2749:417:161:-;;;;;;:::i;:::-;;:::i;2939:133:63:-;;;:::i;2640:141::-;;;:::i;6956:2112:125:-;;;;;;:::i;:::-;;:::i;9074:1870::-;;;;;;:::i;:::-;;:::i;2321:218:161:-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;4511:32:167;;;4493:51;;4481:2;4466:18;2321:218:161;4347:203:167;10950:2204:125;;;;;;:::i;:::-;;:::i;2456:178:63:-;;;:::i;:::-;;;;;;;:::i;4865:2085:125:-;;;;;;:::i;:::-;;:::i;2310:140:63:-;;;:::i;:::-;;;;;;;:::i;2787:146::-;;;:::i;3830:2306:161:-;;;;;;:::i;:::-;;:::i;1875:141:63:-;;;:::i;1819:584:56:-;;;:::i;:::-;;;7953:14:167;;7946:22;7928:41;;7916:2;7901:18;1819:584:56;7788:187:167;2022:142:63;;;:::i;1572:26:56:-;;;;;;;;;484:344:125;527:13;:11;:13::i;:::-;686:36;725:19;736:7;725:10;:19::i;:::-;784:3;754:27;;;:33;804:8;;686:58;;-1:-1:-1;797:24:125;;-1:-1:-1;;;;;804:8:125;686:58;797:6;:24::i;:::-;517:311;484:344::o;834:1996::-;1060:45;:17;1095:1;1098:6;1060:34;:45::i;:::-;1040:65;-1:-1:-1;1173:136:125;1542:8:164;1258:41:125;1542:8:164;1258:12:125;:41;:::i;:::-;1173:14;;:136;:31;:136::i;:::-;1653:5;;1156:153;;-1:-1:-1;1402:17:125;;1506:7;;1596:12;;1373:19;;1642:46;;-1:-1:-1;;;;;1653:5:125;1506:7;1596:12;1642:10;:46::i;:::-;1816:6;;1618:70;;-1:-1:-1;1755:14:125;;1732:20;;1806:31;;-1:-1:-1;;;;;1816:6:125;1755:14;1806:9;:31::i;:::-;-1:-1:-1;1959:3:125;;1779:58;;-1:-1:-1;1902:12:125;;1879:20;;1946:31;;-1:-1:-1;;;;;1959:3:125;1902:12;1946;:31::i;:::-;1924:53;;2016:44;1662:8:164;2047:12:125;2016:11;:44::i;:::-;2125:34;2162:58;2199:11;2162:23;:58::i;:::-;2313:3;;2125:95;;-1:-1:-1;2265:26:125;;2297:33;;-1:-1:-1;;;;;2313:3:125;2318:11;2297:15;:33::i;:::-;2264:66;;;2340:70;2358:18;2378:26;2406:3;2340:17;:70::i;:::-;2468:6;;2457:46;;-1:-1:-1;;;;;2468:6:125;2476:12;2490;2457:10;:46::i;:::-;;2597:38;2621:13;2597:23;:38::i;:::-;2722:5;;2568:67;;-1:-1:-1;2706:37:125;;-1:-1:-1;;;;;2722:5:125;2729:13;2706:15;:37::i;:::-;-1:-1:-1;2681:62:125;-1:-1:-1;2753:70:125;2681:62;2791:26;2819:3;2753:17;:70::i;:::-;951:1879;;;;;;;;;;834:1996;;:::o;2545:198:161:-;2709:22;;-1:-1:-1;;;2709:22:161;;-1:-1:-1;;;;;4511:32:167;;;2709:22:161;;;4493:51:167;2655:7:161;;2681:55;;2695:5;;2702;;2709:15;;;;;4466:18:167;;2709:22:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2733:2;2681:13;:55::i;:::-;2674:62;;2545:198;;;;;;:::o;2170:134:63:-;2217:33;2281:16;2262:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2262:35:63;;;;;;;;;;;;;;;;;;;;;;;2170:134;:::o;2836:2023:125:-;3068:45;:17;3103:1;3106:6;3068:34;:45::i;:::-;3048:65;-1:-1:-1;3181:136:125;1542:8:164;3266:41:125;1542:8:164;3266:12:125;:41;:::i;3181:136::-;3568:5;;3164:153;;-1:-1:-1;3410:17:125;;3511:12;;3381:19;;3557:44;;-1:-1:-1;;;;;3568:5:125;3575:7;3511:12;3557:10;:44::i;:::-;3533:68;-1:-1:-1;3645:20:125;3668:29;3683:14;3668:12;:29;:::i;:::-;3717:6;;3645:52;;-1:-1:-1;3707:31:125;;-1:-1:-1;;;;;3717:6:125;3645:52;3707:9;:31::i;:::-;-1:-1:-1;3777:48:125;;-1:-1:-1;3789:21:125;3809:1;1662:8:164;3789:21:125;:::i;:::-;3812:12;3777:11;:48::i;:::-;3933:6;;3899:14;;3923:32;;-1:-1:-1;;;;;3933:6:125;3899:14;3923:9;:32::i;:::-;-1:-1:-1;;4077:3:125;;4020:12;;3997:20;;4064:31;;-1:-1:-1;;;;;4077:3:125;4020:12;4064;:31::i;:::-;4042:53;-1:-1:-1;4134:48:125;4146:21;4166:1;1662:8:164;4146:21:125;:::i;:::-;4169:12;4134:11;:48::i;:::-;4247:34;4284:58;4321:11;4284:23;:58::i;:::-;4435:3;;4247:95;;-1:-1:-1;4387:26:125;;4419:33;;-1:-1:-1;;;;;4435:3:125;4440:11;4419:15;:33::i;:::-;4386:66;;;4462:70;4480:18;4500:26;4528:3;4462:17;:70::i;:::-;4626:38;4650:13;4626:23;:38::i;:::-;4751:5;;4597:67;;-1:-1:-1;4735:37:125;;-1:-1:-1;;;;;4751:5:125;4758:13;4735:15;:37::i;:::-;-1:-1:-1;4710:62:125;-1:-1:-1;4782:70:125;4710:62;4820:26;4848:3;4782:17;:70::i;:::-;2959:1900;;;;;;;;;2836:2023;;:::o;2749:417:161:-;2925:22;;-1:-1:-1;;;2925:22:161;;-1:-1:-1;;;;;4511:32:167;;;2925:22:161;;;4493:51:167;2883:7:161;;;;2925:15;;;;;4466:18:167;;2925:22:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2902:45;;2970:12;2961:6;:21;2957:56;;;2991:22;;-1:-1:-1;;;2991:22:161;;;;;;;;;;;2957:56;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;3023:12:161;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3047:20:161;;-1:-1:-1;;;3047:20:161;;-1:-1:-1;;;;;4511:32:167;;3047:20:161;;;4493:51:167;-1:-1:-1;;;;;;;;;;;3047:13:161;-1:-1:-1;3047:13:161;;-1:-1:-1;4466:18:167;;3047:20:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:23:161;;-1:-1:-1;;;3077:23:161;;-1:-1:-1;;;;;8909:32:167;;3077:23:161;;;8891:51:167;3092:7:161;8958:18:167;;;8951:34;-1:-1:-1;;;;;;;;;;;3077:7:161;-1:-1:-1;3077:7:161;;-1:-1:-1;8864:18:167;;3077:23:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3110:26:161;;-1:-1:-1;;;3110:26:161;;-1:-1:-1;;;;;8909:32:167;;;3110:26:161;;;8891:51:167;8958:18;;;8951:34;;;3110:14:161;;;-1:-1:-1;3110:14:161;;-1:-1:-1;8864:18:167;;3110:26:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3153:6;3146:13;;;2749:417;;;;;;;:::o;2939:133:63:-;2985:33;3049:16;3030:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3030:35:63;;;;;;;;;;;;;;;;;;;;;;2939:133;:::o;2640:141::-;2688:35;2756:18;2735:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2735:39:63;;;;;;;;;;;;;;;;;;;;;;2640:141;:::o;6956:2112:125:-;7186:45;:17;7221:1;7224:6;7186:34;:45::i;:::-;7166:65;-1:-1:-1;7299:136:125;1542:8:164;7384:41:125;1542:8:164;7384:12:125;:41;:::i;7299:136::-;7779:5;;7282:153;;-1:-1:-1;7528:17:125;;7632:7;;7722:12;;7499:19;;7768:46;;-1:-1:-1;;;;;7779:5:125;7632:7;7722:12;7768:10;:46::i;:::-;7744:70;-1:-1:-1;7857:17:125;7877:29;7892:14;7877:12;:29;:::i;:::-;7925:6;;7857:49;;-1:-1:-1;7916:27:125;;-1:-1:-1;;;;;7925:6:125;7857:49;7916:8;:27::i;:::-;-1:-1:-1;7986:48:125;;-1:-1:-1;7998:21:125;8018:1;1662:8:164;7998:21:125;:::i;:::-;8021:12;7986:11;:48::i;:::-;8137:6;;8104:14;;8128:28;;-1:-1:-1;;;;;8137:6:125;8104:14;8128:8;:28::i;:::-;-1:-1:-1;;8278:3:125;;8221:12;;8198:20;;8265:31;;-1:-1:-1;;;;;8278:3:125;8221:12;8265;:31::i;:::-;8243:53;-1:-1:-1;8339:48:125;8351:21;8371:1;1662:8:164;8351:21:125;:::i;:::-;8374:12;8339:11;:48::i;:::-;8452:34;8489:58;8526:11;8489:23;:58::i;:::-;8640:3;;8452:95;;-1:-1:-1;8592:26:125;;8624:33;;-1:-1:-1;;;;;8640:3:125;8645:11;8624:15;:33::i;:::-;8591:66;;;8667:70;8685:18;8705:26;8733:3;8667:17;:70::i;:::-;8835:38;8859:13;8835:23;:38::i;9074:1870::-;9304:45;:17;9339:1;9342:6;9304:34;:45::i;:::-;9284:65;-1:-1:-1;9417:136:125;1542:8:164;9502:41:125;1542:8:164;9502:12:125;:41;:::i;9417:136::-;9693:5;;9400:153;;-1:-1:-1;9636:12:125;;9609:24;;9682:43;;-1:-1:-1;;;;;9693:5:125;9700:6;9636:12;9682:10;:43::i;:::-;9658:67;-1:-1:-1;9769:20:125;9792:29;9807:14;9792:12;:29;:::i;:::-;9841:6;;9769:52;;-1:-1:-1;9831:31:125;;-1:-1:-1;;;;;9841:6:125;9769:52;9831:9;:31::i;:::-;-1:-1:-1;9901:53:125;;-1:-1:-1;9913:21:125;9933:1;1662:8:164;9913:21:125;:::i;9901:53::-;10012:6;;10003:32;;-1:-1:-1;;;;;10012:6:125;10020:14;10003:8;:32::i;:::-;-1:-1:-1;;10157:3:125;;10100:12;;10077:20;;10144:31;;-1:-1:-1;;;;;10157:3:125;10100:12;10144;:31::i;:::-;10122:53;-1:-1:-1;10214:53:125;10226:21;10246:1;1662:8:164;10226:21:125;:::i;10214:53::-;10332:34;10369:58;10406:11;10369:23;:58::i;:::-;10520:3;;10332:95;;-1:-1:-1;10472:26:125;;10504:33;;-1:-1:-1;;;;;10520:3:125;10525:11;10504:15;:33::i;:::-;10471:66;;;10547:70;10565:18;10585:26;10613:3;10547:17;:70::i;:::-;10711:38;10735:13;10711:23;:38::i;:::-;10836:5;;10682:67;;-1:-1:-1;10820:37:125;;-1:-1:-1;;;;;10836:5:125;10843:13;10820:15;:37::i;:::-;-1:-1:-1;10795:62:125;-1:-1:-1;10867:70:125;10795:62;10905:26;10933:3;10867:17;:70::i;:::-;9195:1749;;;;;;;9074:1870;;:::o;2321:218:161:-;2377:13;2455:4;2444:16;;;;;;;;:::i;:::-;;;;-1:-1:-1;;2444:16:161;;;;;;;;;;2434:27;;2444:16;2434:27;;;;-1:-1:-1;;;2474:21:161;;2434:27;-1:-1:-1;;;;;;;;;;;;2474:8:161;;;:21;;2434:27;;2490:4;;2474:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2505:27:161;;-1:-1:-1;;;2505:27:161;;-1:-1:-1;;;;;8909:32:167;;2505:27:161;;;8891:51:167;2520:11:161;8958:18:167;;;8951:34;-1:-1:-1;;;;;;;;;;;2505:7:161;-1:-1:-1;2505:7:161;;-1:-1:-1;8864:18:167;;2505:27:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:218;;;:::o;10950:2204:125:-;11181:45;:17;11216:1;11219:6;11181:34;:45::i;:::-;11161:65;-1:-1:-1;11294:136:125;1542:8:164;11379:41:125;1542:8:164;11379:12:125;:41;:::i;11294:136::-;11681:5;;11277:153;;-1:-1:-1;11523:17:125;;11624:12;;11494:19;;11670:44;;-1:-1:-1;;;;;11681:5:125;11688:7;11624:12;11670:10;:44::i;:::-;11646:68;-1:-1:-1;11757:17:125;11777:29;11792:14;11777:12;:29;:::i;:::-;11825:6;;11757:49;;-1:-1:-1;11816:27:125;;-1:-1:-1;;;;;11825:6:125;11757:49;11816:8;:27::i;:::-;-1:-1:-1;11886:48:125;;-1:-1:-1;11898:21:125;11918:1;1662:8:164;11898:21:125;:::i;11886:48::-;12035:6;;12001:14;;12025:31;;-1:-1:-1;;;;;12035:6:125;12001:14;12025:9;:31::i;:::-;-1:-1:-1;;12178:3:125;;12121:12;;12098:20;;12165:31;;-1:-1:-1;;;;;12178:3:125;12121:12;12165;:31::i;:::-;12143:53;-1:-1:-1;12239:48:125;12251:21;12271:1;1662:8:164;12251:21:125;:::i;12239:48::-;12352:34;12389:58;12426:11;12389:23;:58::i;:::-;12543:3;;12352:95;;-1:-1:-1;12492:29:125;;12527:33;;-1:-1:-1;;;;;12543:3:125;12548:11;12527:15;:33::i;:::-;12491:69;;;12570:119;12601:21;12636:26;12676:3;12570:17;:119::i;:::-;12783:38;12807:13;12783:23;:38::i;:::-;12974:5;;12754:67;;-1:-1:-1;12908:31:125;;12945:71;;-1:-1:-1;;;;;12974:5:125;12993:13;12945:15;:71::i;:::-;12907:109;;;13026:121;13057:23;13094:26;13134:3;13026:17;:121::i;2456:178:63:-;2512:48;2601:26;2572:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:178;:::o;4865:2085:125:-;5090:45;:17;5125:1;5128:6;5090:34;:45::i;:::-;5070:65;-1:-1:-1;5203:136:125;1542:8:164;5288:41:125;1542:8:164;5288:12:125;:41;:::i;5203:136::-;5683:5;;5186:153;;-1:-1:-1;5432:17:125;;5536:7;;5626:12;;5403:19;;5672:46;;-1:-1:-1;;;;;5683:5:125;5536:7;5626:12;5672:10;:46::i;:::-;5876:6;;5648:70;;-1:-1:-1;5781:14:125;;5761:17;;;;5854:61;;-1:-1:-1;;;;;5876:6:125;5781:14;5854:8;:61::i;:::-;6037:3;;5805:110;;-1:-1:-1;5805:110:125;-1:-1:-1;5980:12:125;;5957:20;;6024:31;;-1:-1:-1;;;;;6037:3:125;5980:12;6024;:31::i;:::-;6002:53;;6094:44;1662:8:164;6125:12:125;6094:11;:44::i;:::-;6203:34;6240:58;6277:11;6240:23;:58::i;:::-;6433:3;;6203:95;;-1:-1:-1;6385:26:125;;6417:33;;-1:-1:-1;;;;;6433:3:125;6438:11;6417:15;:33::i;:::-;6384:66;;;6460:70;6478:18;6498:26;6526:3;6460:17;:70::i;:::-;6586:6;;6576:47;;-1:-1:-1;;;;;6586:6:125;6594:12;6608:14;6576:9;:47::i;:::-;;6717:38;6741:13;6717:23;:38::i;:::-;6842:5;;6688:67;;-1:-1:-1;6826:37:125;;-1:-1:-1;;;;;6842:5:125;6849:13;6826:15;:37::i;:::-;-1:-1:-1;6801:62:125;-1:-1:-1;6873:70:125;6801:62;6911:26;6939:3;6873:17;:70::i;:::-;4981:1969;;;;;;;;;;;4865:2085;;:::o;2310:140:63:-;2358:34;2425:18;2404:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2787:146;2835:40;2908:18;2887:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3830:2306:161;3955:18;3976:11;;;;;3998:335;;4031:138;4075:6;4059:12;:22;;4031:138;;;;;;;;;;;;;;;;;:10;:138::i;:::-;3998:335;;;4200:122;4237:12;4228:6;:21;4200:122;;;;;;;;;;;;;;;;;:10;:122::i;:::-;4343:18;4364:13;:49;;4407:6;4364:49;;;4380:24;4397:6;4380;:24;:::i;:::-;4343:70;;4423:18;4445:13;4444:14;:75;;4513:6;4444:75;;;4490:7;4491:6;4490:7;:::i;:::-;4473:25;;:6;:25;:::i;:::-;4423:96;;4597:10;4582:12;:25;:54;;;;4626:10;4611:12;:25;4582:54;4578:233;;;4652:57;4661:12;4675:10;4652:57;;;;;;;;;;;;;-1:-1:-1;;;4652:57:161;;;:8;:57::i;:::-;4723;4732:12;4746:10;4723:57;;;;;;;;;;;;;-1:-1:-1;;;4723:57:161;;;:8;:57::i;:::-;4794:7;;;3830:2306;;;:::o;4578:233::-;4908:13;4904:1226;;;4937:21;4961;4976:6;4961:12;:21;:::i;:::-;4937:45;;5024:6;5000:13;:31;4996:516;;;5051:133;;;;;;;;;;;;;;;;;;;5135:31;5153:13;5143:6;5135:31;:::i;:::-;5051:12;:133::i;:::-;5202:37;;;;;;;;;;;;;;-1:-1:-1;;;5202:37:161;;;5232:6;5202:12;:37::i;:::-;5257:44;;;;;;;;;;;;;;-1:-1:-1;;;5257:44:161;;;5287:13;5257:12;:44::i;:::-;4996:516;;;5340:157;5370:10;5402:12;5340:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;4923:599;4904:1226;;;5542:21;5566;5575:12;5566:6;:21;:::i;:::-;5542:45;-1:-1:-1;5629:7:161;5630:6;5629:7;:::i;:::-;5605:13;:32;5601:519;;;5657:134;;;;;;;;;;;;;;;;;;5760:13;5750:6;5749:7;;;:::i;:::-;5741:32;;;;:::i;5657:134::-;5809:37;;;;;;;;;;;;;;-1:-1:-1;;;5809:37:161;;;5839:6;5809:12;:37::i;:::-;5864:45;;;;;;;;;;;;;;-1:-1:-1;;;5864:45:161;;;5895:13;5864:12;:45::i;:::-;5601:519;;;5948:157;5978:10;6010:12;5948:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;5528:602;3945:2191;;;3830:2306;;;:::o;1875:141:63:-;1924:34;1991:18;1970:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1819:584:56;1873:7;;1853:4;;1873:7;;;;;1869:528;;;-1:-1:-1;1903:7:56;;;;;;;;1819:584::o;1869:528::-;1941:17;-1:-1:-1;;;;;;;;;;;2985:55:56;3066:16;1980:374;;2196:43;;;-1:-1:-1;;;;;;;;;;;2196:43:56;;;8891:51:167;;;-1:-1:-1;;;8958:18:167;;;8951:34;2196:43:56;;;;;;;;;8864:18:167;;;2196:43:56;;;-1:-1:-1;;1671:64:56;;2086:175;;2135:34;;2086:175;;;:::i;:::-;;;;-1:-1:-1;;2086:175:56;;;;;;;;;;2047:232;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2020:259;;;2323:7;2312:27;;;;;;;;;;;;:::i;:::-;2297:42;;2002:352;1980:374;2374:12;1819:584;-1:-1:-1;1819:584:56:o;2022:142:63:-;2071:35;2139:18;2118:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2118:39:63;;;;;;;;;;;;;;;;;;;;;;2022:142;:::o;1773:1696:164:-;1824:13;:11;:13::i;:::-;1861:5;;1847:20;;-1:-1:-1;;;1847:20:164;;-1:-1:-1;;;;;1861:5:164;;;1847:20;;;4493:51:167;-1:-1:-1;;;;;;;;;;;1847:13:164;;;4466:18:167;;1847:20:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1963:2;1975:1;1979:5;1929:56;;;;;:::i;:::-;12417:3:167;12399:22;;;12458:1;12437:19;;;12430:30;;;-1:-1:-1;;;12491:3:167;12476:19;;12469:35;12542:3;12535:4;12520:20;;12513:33;;;12562:19;;12555:30;-1:-1:-1;;;12616:3:167;12601:19;;12594:35;12713:4;12701:17;;;12696:2;12681:18;;12674:45;-1:-1:-1;;;;;12755:32:167;;;-1:-1:-1;12735:18:167;;12728:60;12832:14;12825:22;-1:-1:-1;12804:19:167;;12797:51;12661:3;12646:19;1929:56:164;;;;;;;;;;;;;;;;;;;;;;;1917:9;;:68;;;;;-1:-1:-1;;;;;1917:68:164;;;;;-1:-1:-1;;;;;1917:68:164;;;;;;1995:28;2026:98;;;;;;;;2064:1;2026:98;;;;2085:1;2026:98;;;;2112:1;2026:98;;;1995:129;;2169:11;2183:7;2169:21;;2200:36;2239:603;;;;;;;;2302:9;;;;;;;;;-1:-1:-1;;;;;2302:9:164;-1:-1:-1;;;;;2239:603:164;;;;;565:4:33;2239:603:164;;;;565:4:33;2239:603:164;;;;1542:8;2239:603;;;;1662:8;2239:603;;;;1604:6;2239:603;;;;2618:41;2655:3;2618:36;:41::i;:::-;2239:603;;2685:10;;-1:-1:-1;;;;;2685:10:164;;;2239:603;;;;2723:12;;;2239:603;;;;;;;;;;;;;;1716:1;2239:603;;;;1762:4;2239:603;;;;;;;;2883:38;2200:642;;-1:-1:-1;2685:10:164;;2200:642;;2883:38;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2852:70;;2997:6;3005:12;2978:40;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2932:10;;:97;;;;;-1:-1:-1;;;;;2932:97:164;;;;;-1:-1:-1;;;;;2932:97:164;;;;;;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;3039:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:10:164;;;3063:25;;-1:-1:-1;;;3063:25:164;;-1:-1:-1;;;;;3077:10:164;;;3063:25;;;4493:51:167;-1:-1:-1;;;;;;;;;;;3063:13:164;-1:-1:-1;3063:13:164;;-1:-1:-1;4466:18:167;3063:25:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3098:10:164;;3119:6;;3098:34;;-1:-1:-1;;;3098:34:164;;-1:-1:-1;;;;;3119:6:164;;;3098:34;;;14802:51:167;3098:10:164;14869:18:167;;;14862:50;3098:10:164;;;-1:-1:-1;3098:20:164;;-1:-1:-1;14775:18:167;;3098:34:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3398:8:164;;;;;-1:-1:-1;3393:70:164;;-1:-1:-1;3393:70:164;-1:-1:-1;;;;;;;;;;;3422:7:164;3430:21;1662:8;3450:1;3430:21;:::i;:::-;3422:30;;;;;;;;;;;;;1098:25:167;;1086:2;1071:18;;952:177;3422:30:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3393:70;1814:1655;;;;1773:1696::o;5235:945::-;5311:29;;:::i;:::-;5383:98;;;;;;;;;-1:-1:-1;5383:98:164;;;;;;;;;;;;;;;;;5510:663;;;;;;;5577:9;;;;;-1:-1:-1;;;;;5577:9:164;5510:663;;565:4:33;5510:663:164;;;;;;;;;;1542:8;5510:663;;;;1662:8;5510:663;;;;1604:6;5510:663;;;;5383:98;5510:663;;;5919:47;5956:9;5919:36;:47::i;:::-;5510:663;;5996:10;;-1:-1:-1;;;;;5996:10:164;;;5510:663;;;;6038:12;;;5510:663;;;;;;;;;;;1716:1;5510:663;;;;1762:4;5510:663;;;;;;;;5491:682;5235:945;-1:-1:-1;;5235:945:164:o;3475:357::-;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;3589:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3613:23:164;;-1:-1:-1;;;3613:23:164;;-1:-1:-1;;;;;4511:32:167;;3613:23:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;3613:13:164;-1:-1:-1;3613:13:164;;-1:-1:-1;4466:18:167;;3613:23:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:20;3708:7;3677:39;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;3646:71;;3792:7;3801:12;3773:41;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3727:10:164;:98;;-1:-1:-1;;;;;;3727:98:164;-1:-1:-1;;;;;3727:98:164;;;;;;;;;;-1:-1:-1;;;3475:357:164:o;6266:333:166:-;6394:7;6432;6421;:18;;6413:45;;;;-1:-1:-1;;;6413:45:166;;15298:2:167;6413:45:166;;;15280:21:167;15337:2;15317:18;;;15310:30;-1:-1:-1;;;15356:18:167;;;15349:44;15410:18;;6413:45:166;;;;;;;;;6469:17;6489;6499:7;6489;:17;:::i;:::-;:21;;6509:1;6489:21;:::i;:::-;6469:41;-1:-1:-1;6520:16:166;6539:17;6469:41;6539:5;:17;:::i;:::-;6520:36;-1:-1:-1;6574:18:166;6585:7;6520:36;6574:18;:::i;:::-;6567:25;6266:333;-1:-1:-1;;;;;;6266:333:166:o;9122:612:164:-;9237:16;9284:443;9312:2;9332:3;9353:12;9383:330;;;;;;;;9430:4;9383:330;;;;;;9471:12;9383:330;;;;9520:1;9383:330;;;;9566:1;9383:330;;;;-1:-1:-1;;9383:330:164;;;;9682:1;-1:-1:-1;;;;;9672:12:164;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;9672:12:164;-1:-1:-1;9383:330:164;;9284:10;:443::i;22406:625::-;22501:20;22523:18;22572:452;22599:6;22623:10;22651:359;;;;;;;;22698:4;22651:359;;;;;;22739:10;22651:359;;;;22786:1;22651:359;;;;22846:1;22651:359;;;;22892:10;22651:359;;;;22979:1;-1:-1:-1;;;;;22969:12:164;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;22969:12:164;-1:-1:-1;22651:359:164;;22572:9;:452::i;:::-;22553:471;;;;22406:625;;;;;:::o;11851:608::-;11947:16;11994:458;12024:2;12044:12;12074:364;;;;;;;;12121:4;12074:364;;;;;;12162:12;12074:364;;;;12211:1;12074:364;;;;12257:1;12074:364;;;;-1:-1:-1;;12074:364:164;;;;12407:1;-1:-1:-1;;;;;12397:12:164;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;12397:12:164;-1:-1:-1;12074:364:164;;11994:12;:458::i;:::-;11975:477;;11851:608;;;;;:::o;25404:175::-;25501:10;;25478:53;;-1:-1:-1;;;25478:53:164;;;;;15728:25:167;;;15769:18;;;15762:34;;;-1:-1:-1;;;;;25501:10:164;;;;25478:42;;15701:18:167;;25478:53:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;25541:7:164;-1:-1:-1;25541:7:164;;-1:-1:-1;25549:22:164;;-1:-1:-1;25567:4:164;25549:15;:22;:::i;:::-;25541:31;;;;;;;;;;;;;1098:25:167;;1086:2;1071:18;;952:177;25541:31:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;28174:2033;28256:7;28275:18;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;28296:11:164;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;28524:10;;28275:34;;-1:-1:-1;;;;;;28524:10:164;:21;28546:44;28524:10;28546:32;:44::i;:::-;28524:67;;;;;;;;;;;;;1098:25:167;;1086:2;1071:18;;952:177;28524:67:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;28632:10:164;;28601:28;;-1:-1:-1;28632:25:164;;-1:-1:-1;;;;;;28632:10:164;:23;:25::i;:::-;28601:56;;28667:36;28706:10;;;;;;;;;-1:-1:-1;;;;;28706:10:164;-1:-1:-1;;;;;28706:22:164;;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;28787:10;;28840:19;;;;28764:96;;-1:-1:-1;;;28764:96:164;;28667:63;;-1:-1:-1;28740:21:164;;-1:-1:-1;;;;;28787:10:164;;;;28764:75;;:96;;;;1098:25:167;;;1086:2;1071:18;;952:177;28764:96:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;28945:10;;:44;;-1:-1:-1;;;28945:44:164;;:10;:44;;;1098:25:167;28740:120:164;;-1:-1:-1;28886:113:164;;28924:7;;-1:-1:-1;;;;;28945:10:164;;:22;;1071:18:167;;28945:44:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;28886:13;;:113;:24;:113::i;:::-;29128:10;;28870:129;;-1:-1:-1;;;;;;29128:10:164;29105:51;29170:22;28870:129;29170:22;:::i;:::-;29105:97;;;;;;;;;;;;;1098:25:167;;1086:2;1071:18;;952:177;29105:97:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;29241:10:164;;29212:26;;-1:-1:-1;29241:25:164;;-1:-1:-1;;;;;;29241:10:164;:23;:25::i;:::-;29306:10;;:66;;-1:-1:-1;;;29306:66:164;;29276:27;29306:66;;;1098:25:167;;;29212:54:164;;-1:-1:-1;;;;;;29306:10:164;;;;:22;;1071:18:167;;29306:66:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;29276:96;;29382:35;29503:10;;;;;;;;;-1:-1:-1;;;;;29503:10:164;-1:-1:-1;;;;;29503:26:164;;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;29420:10;;:80;;-1:-1:-1;;;29420:80:164;;-1:-1:-1;;;29420:80:164;;;1098:25:167;-1:-1:-1;;;;;29420:127:164;;;;-1:-1:-1;;;;;29420:10:164;;;;:22;;1071:18:167;;29420:80:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:127;;;;:::i;:::-;29382:165;-1:-1:-1;29557:21:164;29581:61;29382:165;29581:19;:61;:::i;:::-;29557:85;-1:-1:-1;29652:23:164;29698:66;29557:85;29723:18;29743:20;29698:24;:66::i;:::-;29652:122;-1:-1:-1;29804:39:164;29835:7;29811:13;29804:39;:::i;:::-;29784:59;;;;:::i;:::-;;;29876:1;29857:16;:20;29853:255;;;29893:29;29925:120;29982:17;29983:16;29982:17;:::i;:::-;29925:20;;30018:13;29925:31;:120::i;:::-;29893:152;-1:-1:-1;30059:38:164;29893:152;30059:38;;:::i;:::-;;;29879:229;29853:255;30117:23;;-1:-1:-1;;;30117:23:164;;;;;1098:25:167;;;-1:-1:-1;;;;;;;;;;;30117:11:164;;;1071:18:167;;30117:23:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;30180:19:164;;;;30158:42;;:13;;:21;:42::i;:::-;30151:49;28174:2033;-1:-1:-1;;;;;;;;;;;28174:2033:164:o;13742:458::-;13835:20;13857:24;13912:281;13945:2;13965:6;13989:190;;;;;;;;14039:4;13989:190;;;;;;14078:1;13989:190;;;;14148:1;-1:-1:-1;;;;;14138:12:164;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;14138:12:164;-1:-1:-1;13989:190:164;;13912:15;:281::i;3504:470:59:-;3598:13;3614:19;3628:1;3631;3614:13;:19::i;:::-;3598:35;;3656:8;3648:5;:16;3644:324;;;-1:-1:-1;;;;;;;;;;;3685:41:59;;;;18385:2:167;18367:21;;;18424:2;18404:18;;;18397:30;18463:34;18458:2;18443:18;;18436:62;-1:-1:-1;;;18529:2:167;18514:18;;18507:32;18571:3;18556:19;;18183:398;3685:41:59;;;;;;;;3745:31;;;18798:21:167;;;18855:2;18835:18;;;18828:30;-1:-1:-1;;;18889:2:167;18874:18;;18867:40;18974:4;18959:20;;18952:36;;;3745:31:59;;-1:-1:-1;;;;;;;;;;;3745:31:59;;;;18939:3:167;3745:31:59;;;3795;;;19211:21:167;;;19268:2;19248:18;;;19241:30;-1:-1:-1;;;19302:2:167;19287:18;;19280:40;19387:4;19372:20;;19365:36;;;3795:31:59;;-1:-1:-1;;;;;;;;;;;3795:31:59;;;;19352:3:167;3795:31:59;;;3845:38;;;19624:21:167;;;19681:2;19661:18;;;19654:30;-1:-1:-1;;;19715:2:167;19700:18;;19693:40;19800:4;19785:20;;19778:36;;;3845:38:59;;-1:-1:-1;;;;;;;;;;;3845:38:59;;;;19765:3:167;3845:38:59;;;3902:35;;;20037:21:167;;;20094:2;20074:18;;;20067:30;-1:-1:-1;;;20128:2:167;20113:18;;20106:40;20213:4;20198:20;;20191:36;;;3902:35:59;;-1:-1:-1;;;;;;;;;;;3902:35:59;;;;20178:3:167;3902:35:59;;;3951:6;:4;:6::i;24358:496:164:-;24484:18;24533:314;24561:6;24585:12;24615:10;24643:190;;;;;;;;24693:4;24643:190;;;;;;24732:1;24643:190;;;;24802:1;-1:-1:-1;;;;;24792:12:164;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;24792:12:164;-1:-1:-1;24643:190:164;;24533:10;:314::i;17761:640::-;17855:20;17877:18;17926:468;17952:6;17976:10;18004:376;;;;;;;;18051:4;18004:376;;;;;;18092:10;18004:376;;;;18139:1;18004:376;;;;18199:10;18004:376;;;;-1:-1:-1;;18004:376:164;;;;18349:1;-1:-1:-1;;;;;18339:12:164;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;18339:12:164;-1:-1:-1;18004:376:164;;17926:8;:468::i;6605:401:166:-;6730:6;6767:7;6756;:18;;6748:45;;;;-1:-1:-1;;;6748:45:166;;15298:2:167;6748:45:166;;;15280:21:167;15337:2;15317:18;;;15310:30;-1:-1:-1;;;15356:18:167;;;15349:44;15410:18;;6748:45:166;15096:338:167;6748:45:166;6804:16;6823:17;6833:7;6823;:17;:::i;:::-;:21;;6843:1;6823:21;:::i;:::-;6804:40;-1:-1:-1;6854:15:166;6872:17;6804:40;6872:5;:17;:::i;:::-;6854:35;;6915:1;6904:8;:12;6900:64;;;6932:21;6944:9;6932:21;;:::i;:::-;;;6900:64;6981:18;6992:7;6981:8;:18;:::i;19740:494:164:-;19865:18;19914:313;19941:6;19965:12;19995:10;20023:190;;;;;;;;20073:4;20023:190;;;;;;20112:1;20023:190;;;;20182:1;-1:-1:-1;;;;;20172:12:164;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;20172:12:164;-1:-1:-1;20023:190:164;;19914:9;:313::i;3425:191:56:-;3504:9;3499:111;;-1:-1:-1;;;;;;;;;;;3560:3:56;3534:30;;;;;;:::i;:::-;;;;;;;;3578:21;3589:9;3578:10;:21::i;:::-;3425:191;;:::o;12219:177::-;12299:1;12295;:5;12291:99;;;-1:-1:-1;;;;;;;;;;;12347:3:56;12321:30;;;;;;:::i;:::-;;;;;;;;12365:14;12374:1;12377;12365:8;:14::i;:::-;12219:177;;;:::o;16185:::-;16265:1;16261;:5;16257:99;;;-1:-1:-1;;;;;;;;;;;16313:3:56;16287:30;;;;;;:::i;:::-;;;;;;;;16331:14;16340:1;16343;16331:8;:14::i;7546:145:72:-;7613:71;7676:2;7680;7629:54;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7629:54:72;;;;;;;;;;;;;;-1:-1:-1;;;;;7629:54:72;-1:-1:-1;;;7629:54:72;;;7613:15;:71::i;7697:143::-;7763:70;7825:2;7829;7779:53;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7779:53:72;;;;;;;;;;;;;;-1:-1:-1;;;;;7779:53:72;-1:-1:-1;;;7779:53:72;;;7763:15;:70::i;5476:178:56:-;5557:1;5552;:6;5548:100;;-1:-1:-1;;;;;;;;;;;5605:3:56;5579:30;;;;;;:::i;:::-;;;;;;;;5623:14;5632:1;5635;5623:8;:14::i;1380:471:161:-;1430:19;;;;;;;;;;;;;;-1:-1:-1;;;1430:19:161;;;:10;:19::i;:::-;1422:5;:27;;-1:-1:-1;;;;;;1422:27:161;-1:-1:-1;;;;;1422:27:161;;;;;;;;;;1465:17;;;;;;;;;;;;-1:-1:-1;;;1465:17:161;;;;;;:10;:17::i;:::-;1459:3;:23;;-1:-1:-1;;;;;;1459:23:161;-1:-1:-1;;;;;1459:23:161;;;;;;;;;;1501:20;;;;;;;;;;;;-1:-1:-1;;;1501:20:161;;;;;;:10;:20::i;:::-;1492:6;:29;;-1:-1:-1;;;;;;1492:29:161;-1:-1:-1;;;;;1492:29:161;;;;;;;;;;1537:17;;;;;;;;;;;;-1:-1:-1;;;1537:17:161;;;;;;:10;:17::i;:::-;1531:3;:23;;-1:-1:-1;;;;;;1531:23:161;-1:-1:-1;;;;;1531:23:161;;;;;;;;;;1570:17;;;;;;;;;;;;-1:-1:-1;;;1570:17:161;;;;;;:10;:17::i;:::-;1564:3;;:23;;;;;-1:-1:-1;;;;;1564:23:161;;;;;-1:-1:-1;;;;;1564:23:161;;;;;;1609:22;;;;;;;;;;;;;;-1:-1:-1;;;1609:22:161;;;:10;:22::i;:::-;1598:8;:33;;-1:-1:-1;;;;;;1598:33:161;-1:-1:-1;;;;;1598:33:161;;;;;;;;;;1650:20;;;;;;;;;;;;-1:-1:-1;;;1650:20:161;;;;;;:10;:20::i;:::-;1641:6;:29;;-1:-1:-1;;;;;;1641:29:161;-1:-1:-1;;;;;1641:29:161;;;;;;;;;;1695:26;;;;;;;;;;;;-1:-1:-1;;;1695:26:161;;;;;;:10;:26::i;:::-;1680:12;:41;;-1:-1:-1;;;;;;1680:41:161;-1:-1:-1;;;;;1680:41:161;;;;;;;;;;1744:24;;;;;;;;;;;;-1:-1:-1;;;1744:24:161;;;;;;:10;:24::i;:::-;1731:10;:37;;-1:-1:-1;;;;;;1731:37:161;-1:-1:-1;;;;;1731:37:161;;;;;;;;;;1787:20;;;;;;;;;;;;-1:-1:-1;;;1787:20:161;;;;;;:10;:20::i;:::-;1778:6;:29;;-1:-1:-1;;;;;;1778:29:161;-1:-1:-1;;;;;1778:29:161;;;;;;;;;;1829:15;1818:8;:26;1380:471::o;5965:262:165:-;6031:7;;6072:89;6113:38;6141:9;:3;6147;6141:9;:::i;:::-;6121:10;;6113:27;:38::i;:::-;6080:10;;6072:27;:89::i;:::-;6050:111;-1:-1:-1;6178:42:165;565:4:33;6050:111:165;6178:29;:42::i;7833:1283:164:-;7991:16;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;8019:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8043:17:164;;-1:-1:-1;;;8043:17:164;;-1:-1:-1;;;;;4511:32:167;;8043:17:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;8043:13:164;-1:-1:-1;8043:13:164;;-1:-1:-1;4466:18:167;;8043:17:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8128:10:164;;:26;;;-1:-1:-1;;;8128:26:164;;;;87:42:163;;-1:-1:-1;;;;;;8128:10:164;;;;-1:-1:-1;8128:24:164;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;8120:61:164;;:93;;;;-1:-1:-1;8197:16:164;;8120:93;8103:1007;;;8261:10;;8291:23;;;;;8397:190;;;;;;;;-1:-1:-1;;;;;8397:190:164;;;;;8492:16;;8397:190;;;;;;;;;8545:19;;;;8397:190;;;;8261:344;;-1:-1:-1;;;8261:344:164;;:10;;;;;:21;;:344;;8338:12;;8372:3;;8397:190;8261:344;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8238:367;;;;8103:1007;8636:9;;8651:23;;;;8636:39;;-1:-1:-1;;;8636:39:164;;;;;1098:25:167;;;;8636:9:164;;;;-1:-1:-1;;;;;8636:9:164;;:14;;1071:18:167;;8636:39:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8689:9:164;;8715:10;;8728:23;;;;8689:63;;-1:-1:-1;;;8689:63:164;;-1:-1:-1;;;;;8715:10:164;;;8689:63;;;8891:51:167;8958:18;;;8951:34;;;;8689:9:164;;;;;;-1:-1:-1;8689:17:164;;-1:-1:-1;8864:18:167;;8689:63:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;8789:10:164;;8891:190;;;;;;;;-1:-1:-1;;;;;8891:190:164;;;;;8986:16;;8891:190;;;;;;9039:19;;;;8891:190;;;;8789:310;;-1:-1:-1;;;8789:310:164;;:10;;;;;:21;;:310;;8832:12;;8866:3;;8891:190;8789:310;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;20763:1637::-;20901:20;20923:18;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;20953:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;20977:21:164;;-1:-1:-1;;;20977:21:164;;-1:-1:-1;;;;;4511:32:167;;20977:21:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;20977:13:164;-1:-1:-1;20977:13:164;;-1:-1:-1;4466:18:167;;20977:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21113:10:164;;21051:82;;-1:-1:-1;;;;;;21113:10:164;;-1:-1:-1;21051:48:164;:82::i;:::-;21036:97;;87:42:163;-1:-1:-1;;;;;21160:61:164;21168:10;;;;;;;;;-1:-1:-1;;;;;21168:10:164;-1:-1:-1;;;;;21168:24:164;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;21160:61:164;;:93;;;;-1:-1:-1;21237:16:164;;21160:93;21143:1207;;;21307:10;;21352:23;;;;;21435:21;;;;21494:23;;;;;21535:178;;;;;;;-1:-1:-1;;;;;21535:178:164;;;;;21626:16;;21535:178;;;;;;;;;21675:19;;;;21535:178;;;;21307:420;;-1:-1:-1;;;21307:420:164;;:10;;;;;:20;;:420;;21407:10;;21435:21;;21494:23;21307:420;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21278:449;;-1:-1:-1;21278:449:164;-1:-1:-1;21143:1207:164;;;21758:9;;21773:23;;;;21758:39;;-1:-1:-1;;;21758:39:164;;;;;1098:25:167;;;;21758:9:164;;;;-1:-1:-1;;;;;21758:9:164;;:14;;1071:18:167;;21758:39:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21811:9:164;;21837:10;;21850:21;;;;21811:61;;-1:-1:-1;;;21811:61:164;;-1:-1:-1;;;;;21837:10:164;;;21811:61;;;8891:51:167;8958:18;;;8951:34;;;;21811:9:164;;;;;;-1:-1:-1;21811:17:164;;-1:-1:-1;8864:18:167;;21811:61:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;21915:10:164;;21981:21;;;;22040:23;;;;;22081:178;;;;;;;-1:-1:-1;;;;;22081:178:164;;;;;22172:16;;22081:178;;;;;;22221:19;;;;22081:178;;;;21915:358;;-1:-1:-1;;;21915:358:164;;:10;;;;;:20;;:358;;21953:10;;21981:21;;22081:178;21915:358;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;22287:9;;22302:23;;;;21886:387;;-1:-1:-1;21886:387:164;;-1:-1:-1;22287:9:164;;;-1:-1:-1;;;;;22287:9:164;;:14;;22302:36;;21886:387;;22302:36;:::i;:::-;22287:52;;;;;;;;;;;;;1098:25:167;;1086:2;1071:18;;952:177;22287:52:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21143:1207;20763:1637;;;;;;:::o;10381:1464::-;10520:16;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;10548:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10572:17:164;;-1:-1:-1;;;10572:17:164;;-1:-1:-1;;;;;4511:32:167;;10572:17:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;10572:13:164;-1:-1:-1;10572:13:164;;-1:-1:-1;4466:18:167;;10572:17:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10663:10:164;;:26;;;-1:-1:-1;;;10663:26:164;;;;87:42:163;;-1:-1:-1;;;;;;10663:10:164;;;;-1:-1:-1;10663:24:164;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;10655:61:164;;:93;;;;-1:-1:-1;10732:16:164;;10655:93;10638:1201;;;10796:10;;10828:23;;;;;10909:21;;;;;10969;;;;11029:190;;;;;;;;-1:-1:-1;;;;;11029:190:164;;;;;11124:16;;11029:190;;;;;;;;;11177:19;;;;11029:190;;;;10796:441;-1:-1:-1;;;10796:441:164;;:10;;;;;:23;;:441;;10875:12;;10909:21;10969;10796:441;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10773:464;;;;10638:1201;11268:9;;11283:23;;;;11268:39;;-1:-1:-1;;;11268:39:164;;;;;1098:25:167;;;;11268:9:164;;;;-1:-1:-1;;;;;11268:9:164;;:14;;1071:18:167;;11268:39:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;11321:9:164;;11347:10;;11360:23;;;;11321:63;;-1:-1:-1;;;11321:63:164;;-1:-1:-1;;;;;11347:10:164;;;11321:63;;;8891:51:167;8958:18;;;8951:34;;;;11321:9:164;;;;;;-1:-1:-1;11321:17:164;;-1:-1:-1;8864:18:167;;11321:63:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;11421:10:164;;11500:21;;;;;11560;;;;11620:190;;;;;;;;-1:-1:-1;;;;;11620:190:164;;;;;11715:16;;11620:190;;-1:-1:-1;11620:190:164;;;11768:19;;;;11620:190;;;;11421:407;;-1:-1:-1;;;11421:407:164;;:10;;;:23;;:407;;11466:12;;11500:21;;11560;;11620:190;11421:407;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;603:227:165:-;690:7;777:10;-1:-1:-1;;;;;777:24:165;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:45;;;759:63;;:15;:63;:::i;:::-;728:95;;:15;:95;:::i;54728:1649::-;54811:7;54830:40;54873:10;-1:-1:-1;;;;;54873:24:165;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;54830:69;;54909:36;54948:10;-1:-1:-1;;;;;54948:22:165;;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;54909:63;;55001:1369;56350:8;:19;;;55001:1323;55076:1230;;;;;;;;55151:8;:22;;;55076:1230;;;;55216:8;:24;;;55076:1230;;;;55280:8;:21;;;55076:1230;;;;55339:8;:19;;;55076:1230;;;;55403:10;:28;;;55076:1230;;;;55479:10;:31;;;55076:1230;;;;55549:10;:22;;;55076:1230;;;;55615:8;:25;;;55076:1230;;;;55692:233;55744:10;55784:115;55865:4;55792:8;:32;;;55784:47;;:115;;;;:::i;:::-;55692:22;:233::i;:::-;55076:1230;;;;55970:8;:26;;;55076:1230;;;;56049:234;56101:10;56141:116;56223:4;56149:8;:33;;;56141:48;;:116;;;;:::i;56049:234::-;55076:1230;;55001:53;:1323::i;:::-;:1348;;:1369::i;984:556:33:-;1100:9;1365:1;-1:-1:-1;;1348:19:33;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:33;;1497:27;;984:556::o;1814:119::-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;13102:634:164:-;13241:20;13263:24;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;13299:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;13323:17:164;;-1:-1:-1;;;13323:17:164;;-1:-1:-1;;;;;4511:32:167;;13323:17:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;13323:13:164;-1:-1:-1;13323:13:164;;-1:-1:-1;4466:18:167;;13323:17:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;13413:10:164;;13481:21;;;;;13541:174;;;;;;;;-1:-1:-1;;;;;13541:174:164;;;;;13628:16;;13541:174;;;;;;;;;13677:19;;;;13541:174;;;;13413:316;;-1:-1:-1;;;13413:316:164;;:10;;;;;-1:-1:-1;13413:26:164;;-1:-1:-1;13413:316:164;;13457:6;;13413:316;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;13394:335;;;;13102:634;;;;;;:::o;521:114:65:-;581:7;611:1;607;:5;:21;;623:5;627:1;623;:5;:::i;:::-;607:21;;;615:5;619:1;615;:5;:::i;2409:432:56:-;-1:-1:-1;;;;;;;;;;;2985:55:56;3066:16;2452:359;;2652:67;;;-1:-1:-1;;;;;;;;;;;2652:67:56;;;25109:51:167;;;-1:-1:-1;;;25176:18:167;;;25169:34;;;;2712:4:56;25219:18:167;;;25212:34;2489:11:56;;1671:64;2586:43;;25082:18:167;;2652:67:56;;;-1:-1:-1;;2652:67:56;;;;;;;;;;2541:196;;;2652:67;2541:196;;:::i;:::-;;;;-1:-1:-1;;2541:196:56;;;;;;;;;;2506:245;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;2452:359:56;2820:7;:14;;-1:-1:-1;;2820:14:56;;;;;2409:432::o;23691:661:164:-;23863:18;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;23893:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23917:21:164;;-1:-1:-1;;;23917:21:164;;-1:-1:-1;;;;;4511:32:167;;23917:21:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;23917:13:164;-1:-1:-1;23917:13:164;;-1:-1:-1;4466:18:167;;23917:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23996:10:164;;24093:21;;;;;24153:178;;;;;;;;-1:-1:-1;;;;;24153:178:164;;;;;24244:16;;24153:178;;;;;;;;;24293:19;;;;24153:178;;;;23996:349;;-1:-1:-1;;;23996:349:164;;:10;;;;;-1:-1:-1;23996:21:164;;-1:-1:-1;23996:349:164;;24035:12;;24065:10;;24093:21;24153:178;23996:349;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;23977:368;23691:661;-1:-1:-1;;;;;23691:661:164:o;16327:1428::-;16464:20;16486;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;16518:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;16542:21:164;;-1:-1:-1;;;16542:21:164;;-1:-1:-1;;;;;4511:32:167;;16542:21:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;16542:13:164;-1:-1:-1;16542:13:164;;-1:-1:-1;4466:18:167;;16542:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;16625:10:164;;:26;;;-1:-1:-1;;;16625:26:164;;;;87:42:163;;-1:-1:-1;;;;;;16625:10:164;;;;-1:-1:-1;16625:24:164;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;16617:61:164;;:93;;;;-1:-1:-1;16694:16:164;;16617:93;16600:1149;;;16758:10;;16786:23;;;;;16865:21;;;;;16929:23;;;;;16974:194;;;;;;;-1:-1:-1;;;;;16974:194:164;;;;;17073:16;;16974:194;;;;;;;;;17126:19;;;;16974:194;;;;16758:428;;-1:-1:-1;;;16758:428:164;;:10;;;;;:19;;:428;;16833:10;;16865:21;16929:23;16758:428;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16735:451;;;;;;16600:1149;17217:9;;:26;;-1:-1:-1;;;17217:26:164;;;;;1098:25:167;;;17217:9:164;;;;-1:-1:-1;;;;;17217:9:164;;:14;;1071:18:167;;17217:26:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;17257:9:164;;17283:10;;17257:50;;-1:-1:-1;;;17257:50:164;;-1:-1:-1;;;;;17283:10:164;;;17257:50;;;8891:51:167;8958:18;;;8951:34;;;17257:9:164;;;;;;-1:-1:-1;17257:17:164;;-1:-1:-1;8864:18:167;;17257:50:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;17344:10:164;;17417:21;;;;;17481:23;;;;;17526:194;;;;;;;-1:-1:-1;;;;;17526:194:164;;;;;17625:16;;17526:194;;-1:-1:-1;17526:194:164;;;17678:19;;;;17526:194;;;;17344:394;;-1:-1:-1;;;17344:394:164;;:10;;;;;:19;;:394;;17385:10;;17417:21;;17481:23;17526:194;17344:394;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;19076:658::-;19247:18;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;19277:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19301:21:164;;-1:-1:-1;;;19301:21:164;;-1:-1:-1;;;;;4511:32:167;;19301:21:164;;;4493:51:167;-1:-1:-1;;;;;;;;;;;19301:13:164;-1:-1:-1;19301:13:164;;-1:-1:-1;4466:18:167;;19301:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19379:10:164;;19475:21;;;;;19535:178;;;;;;;;-1:-1:-1;;;;;19535:178:164;;;;;19626:16;;19535:178;;;;;;;;;19675:19;;;;19535:178;;;;19379:348;;-1:-1:-1;;;19379:348:164;;:10;;;;;-1:-1:-1;19379:20:164;;-1:-1:-1;19379:348:164;;19417:12;;19447:10;;19475:21;19535:178;19379:348;;;:::i;3262:157:56:-;3322:9;3317:96;;-1:-1:-1;;;;;;;;;;;3352:30:56;;;;25459:2:167;25441:21;;;25498:2;25478:18;;;25471:30;25537:25;25532:2;25517:18;;25510:53;25595:2;25580:18;;25257:347;3352:30:56;;;;;;;;3396:6;:4;:6::i;11955:259::-;12016:1;12012;:5;12008:200;;;-1:-1:-1;;;;;;;;;;;12038:41:56;;;;25811:2:167;25793:21;;;25850:2;25830:18;;;25823:30;25889:34;25884:2;25869:18;;25862:62;-1:-1:-1;;;25955:2:167;25940:18;;25933:32;25997:3;25982:19;;25609:398;12038:41:56;;;;;;;;12098:30;;;26224:21:167;;;26281:1;26261:18;;;26254:29;-1:-1:-1;;;26314:2:167;26299:18;;26292:39;26398:4;26383:20;;26376:36;;;12098:30:56;;-1:-1:-1;;;;;;;;;;;12098:30:56;;;;26363:3:167;12098:30:56;;;12147;;;26635:21:167;;;26692:1;26672:18;;;26665:29;;;;-1:-1:-1;;;26725:2:167;26710:18;;26703:39;26809:4;26794:20;;26787:36;;;-1:-1:-1;;;;;;;;;;;12147:30:56;26774:3:167;26759:19;12147:30:56;;;;;;;;12191:6;:4;:6::i;15921:259::-;15982:1;15978;:5;15974:200;;;-1:-1:-1;;;;;;;;;;;16004:41:56;;;;27036:2:167;27018:21;;;27075:2;27055:18;;;27048:30;27114:34;27109:2;27094:18;;27087:62;-1:-1:-1;;;27180:2:167;27165:18;;27158:32;27222:3;27207:19;;26834:398;868:133:72;939:55;986:7;965:19;939:55::i;5209:262:56:-;5271:1;5266;:6;5262:203;;-1:-1:-1;;;;;;;;;;;5293:41:56;;;;27439:2:167;27421:21;;;27478:2;27458:18;;;27451:30;27517:34;27512:2;27497:18;;27490:62;-1:-1:-1;;;27583:2:167;27568:18;;27561:32;27625:3;27610:19;;27237:398;5293:41:56;;;;;;;;5353:31;;;18798:21:167;;;18855:2;18835:18;;;18828:30;-1:-1:-1;;;18889:2:167;18874:18;;18867:40;18974:4;18959:20;;18952:36;;;5353:31:56;;-1:-1:-1;;;;;;;;;;;5353:31:56;;;;18939:3:167;5353:31:56;;;5403;;;19211:21:167;;;19268:2;19248:18;;;19241:30;;;;-1:-1:-1;;;19302:2:167;19287:18;;19280:40;19387:4;19372:20;;19365:36;;;-1:-1:-1;;;;;;;;;;;5403:31:56;19352:3:167;19337:19;5403:31:56;18999:408:167;2207:165:33;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;1291:237:165:-;1395:7;1477:11;-1:-1:-1;;;;;1477:25:165;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;;1433:29;1450:11;1433:16;:29::i;:::-;:88;;;;:::i;4141:115:33:-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;836:449:165:-;961:21;1026:29;1043:11;1026:16;:29::i;:::-;1010:13;:45;:121;;1130:1;1010:121;;;1086:29;1103:11;1086:16;:29::i;:::-;1070:45;;:13;:45;:::i;:::-;994:137;;1157:91;1194:11;-1:-1:-1;;;;;1194:25:165;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;;1158:13;;1157:23;:91::i;20164:5466:34:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:33;21747:25:34;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:34;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:34;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:33;22409:25:34;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:34;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:33;23632:25:34;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:34;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:34;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:33;24288:25:34;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:34;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:34;24665:19;24899:153;24962:7;:32;;;150:4:33;24956:38:34;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:33;24761:39:34;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:34;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;1007:380:72:-;1105:14;;591:42;1278:2;1265:16;;1081:21;;1105:14;1265:16;591:42;1314:5;1303:68;1294:77;;1231:150;;1007:380;:::o;2726:748:33:-;2840:9;3105:1;-1:-1:-1;;3088:19:33;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:33;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;30120:340:34:-;30255:7;;30306:53;30343:16;30313:14;30306:53;:::i;:::-;30274:85;;30403:1;30377:22;:27;;30369:36;;;;;12091:1116:36;12264:7;12704:9;12716:21;12722:1;12725;12728;12731;12734:2;12716:5;:21::i;:::-;12704:33;-1:-1:-1;12747:16:36;12770:37;12781:21;12800:1;12781:14;:2;12790:4;12781:8;:14::i;:::-;:18;;:21::i;:::-;12770:1;;12804:2;12770:10;:37::i;:::-;12766:41;;:1;:41;:::i;:::-;12747:60;;150:4:33;12821:8:36;:15;12817:295;;12935:28;12948:14;150:4:33;12960:1:36;12948:11;:14::i;:::-;12935:8;;:12;:28::i;:::-;12924:39;;12817:295;;;13075:26;13088:12;150:4:33;13098:1:36;13088:9;:12::i;13075:26::-;13064:37;;12817:295;13188:12;13199:1;13188:8;:12;:::i;:::-;13181:19;12091:1116;-1:-1:-1;;;;;;;;;12091:1116:36:o;14433:104:33:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;;-1:-1:-1;14525:1:33;14433:104;-1:-1:-1;14433:104:33:o;7297:489:36:-;7486:14;7512:12;7554:140;7606:1;7621;7636:2;7652:1;7667;7682:2;7554:38;:140::i;:::-;7534:160;;-1:-1:-1;7534:160:36;-1:-1:-1;7534:160:36;7704:76;;7739:30;;-1:-1:-1;;;7739:30:36;;;;;;;;;;;7704:76;7502:284;7297:489;;;;;;;;:::o;10391:1124::-;10541:7;11029:9;11041:19;11045:1;11048;11051;11054;11057:2;11041:3;:19::i;:::-;11029:31;-1:-1:-1;11070:16:36;11089:28;150:4:33;11097:13:36;:1;11107:2;11097:9;:13::i;:::-;:19;;;;:::i;:::-;11089:1;;:7;:28::i;:::-;11070:47;;150:4:33;11131:8:36;:15;11127:293;;11242:26;11255:12;150:4:33;11265:1:36;11255:9;:12::i;11242:26::-;11231:37;;11127:293;;;11381:28;11394:14;150:4:33;11406:1:36;11394:11;:14::i;11381:28::-;11370:39;;11127:293;11496:12;11500:8;11496:1;:12;:::i;:::-;11489:19;10391:1124;-1:-1:-1;;;;;;;;10391:1124:36:o;3827:1099::-;4014:7;4170:9;4182:19;4186:1;4189;4192;4195;4198:2;4182:3;:19::i;:::-;4170:31;-1:-1:-1;4244:15:36;4257:1;4245:6;4249:2;4245:1;:6;:::i;4244:15::-;4240:19;-1:-1:-1;4415:10:36;4428:23;4445:2;4449:1;4429:5;4240:19;4429:1;:5;:::i;:::-;4428:16;:23;:16;:23::i;:::-;4415:36;;150:4:33;4465:2:36;:9;4461:261;;4563:20;4570:12;150:4:33;4580:1:36;4570:9;:12::i;4563:20::-;4558:25;;4461:261;;;4689:22;4696:14;150:4:33;4708:1:36;4696:11;:14::i;4689:22::-;4684:27;;4461:261;4804:12;:2;4813;4804:8;:12::i;:::-;4799:17;-1:-1:-1;4913:6:36;4918:1;4799:17;4913:6;:::i;14610:278::-;14750:7;14873:8;:1;14879;14873:5;:8::i;:::-;14832:38;14845:20;14863:1;14845:13;:2;14856:1;14845:10;:13::i;:20::-;14832:1;;14867:2;14832:12;:38::i;:::-;:49;;;;:::i;3750:115:33:-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:33;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:33;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:33;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;8540:1314:36:-;8733:14;8749:12;8910:9;8922:19;8926:1;8929;8932;8935;8938:2;8922:3;:19::i;:::-;8910:31;-1:-1:-1;8984:15:36;8997:1;8985:6;8989:2;8985:1;:6;:::i;8984:15::-;8980:19;;9081:1;9077;:5;9073:53;;;9106:1;9109:5;9098:17;;;;;;;9073:53;9281:10;9294:23;9311:2;9315:1;9295:5;9299:1;9295;:5;:::i;9294:23::-;9281:36;;150:4:33;9331:2:36;:9;9327:263;;9430:20;9437:12;150:4:33;9447:1:36;9437:9;:12::i;9430:20::-;9425:25;;9327:263;;;9557:22;9564:14;150:4:33;9576:1:36;9564:11;:14::i;9557:22::-;9552:27;;9327:263;9672:12;:2;9681;9672:8;:12::i;:::-;9667:17;;9780:2;9776:1;:6;9772:52;;;9807:6;9811:2;9807:1;:6;:::i;:::-;9798:15;;9772:52;9843:4;9833:14;;8763:1091;;8540:1314;;;;;;;;;;:::o;13772:272::-;13910:7;14029:8;:1;14035;14029:5;:8::i;:::-;13992:34;14003:18;14019:1;14003:11;:2;14012:1;14003:8;:11::i;:18::-;13992:1;;14023:2;13992:10;:34::i;9632:3592:33:-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:33;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:33;-1:-1:-1;;;;;;;10158:1:33;10154:49;10261:9;;;-1:-1:-1;;;;;10238:33:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:33;11255:5;;11254:13;;-1:-1:-1;;11253:50:33;11323:5;;11322:13;;;-1:-1:-1;;11321:50:33;11389:5;-1:-1:-1;;11389:46:33;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:33;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:33;:26;5992:40;;-1:-1:-1;6031:1:33;;5773:3347;-1:-1:-1;5773:3347:33:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:33;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:33;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:33;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:33;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:33;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:33;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:33;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:33;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:33:o;-1:-1:-1:-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:248:167:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:167;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:167:o;267:131::-;-1:-1:-1;;;;;342:31:167;;332:42;;322:70;;388:1;385;378:12;403:544;495:6;503;511;564:2;552:9;543:7;539:23;535:32;532:52;;;580:1;577;570:12;532:52;619:9;606:23;638:31;663:5;638:31;:::i;:::-;688:5;-1:-1:-1;745:2:167;730:18;;717:32;758:33;717:32;758:33;:::i;:::-;810:7;-1:-1:-1;869:2:167;854:18;;841:32;882:33;841:32;882:33;:::i;:::-;934:7;924:17;;;403:544;;;;;:::o;1243:658::-;1414:2;1466:21;;;1536:13;;1439:18;;;1558:22;;;1385:4;;1414:2;1637:15;;;;1611:2;1596:18;;;1385:4;1680:195;1694:6;1691:1;1688:13;1680:195;;;1759:13;;-1:-1:-1;;;;;1755:39:167;1743:52;;1850:15;;;;1815:12;;;;1791:1;1709:9;1680:195;;;-1:-1:-1;1892:3:167;;1243:658;-1:-1:-1;;;;;;1243:658:167:o;1906:613::-;2007:6;2015;2023;2031;2084:3;2072:9;2063:7;2059:23;2055:33;2052:53;;;2101:1;2098;2091:12;2052:53;2140:9;2127:23;2159:31;2184:5;2159:31;:::i;:::-;2209:5;-1:-1:-1;2266:2:167;2251:18;;2238:32;2279:33;2238:32;2279:33;:::i;:::-;2331:7;-1:-1:-1;2385:2:167;2370:18;;2357:32;;-1:-1:-1;2441:2:167;2426:18;;2413:32;2454:33;2413:32;2454:33;:::i;:::-;1906:613;;;;-1:-1:-1;1906:613:167;;-1:-1:-1;;1906:613:167:o;2776:127::-;2837:10;2832:3;2828:20;2825:1;2818:31;2868:4;2865:1;2858:15;2892:4;2889:1;2882:15;2908:252;2980:2;2974:9;3022:3;3010:16;;-1:-1:-1;;;;;3041:34:167;;3077:22;;;3038:62;3035:88;;;3103:18;;:::i;:::-;3139:2;3132:22;2908:252;:::o;3165:250::-;3232:2;3226:9;3274:6;3262:19;;-1:-1:-1;;;;;3296:34:167;;3332:22;;;3293:62;3290:88;;;3358:18;;:::i;3420:922::-;3489:6;3542:2;3530:9;3521:7;3517:23;3513:32;3510:52;;;3558:1;3555;3548:12;3510:52;3598:9;3585:23;-1:-1:-1;;;;;3668:2:167;3660:6;3657:14;3654:34;;;3684:1;3681;3674:12;3654:34;3722:6;3711:9;3707:22;3697:32;;3767:7;3760:4;3756:2;3752:13;3748:27;3738:55;;3789:1;3786;3779:12;3738:55;3825:2;3812:16;3847:2;3843;3840:10;3837:36;;;3853:18;;:::i;:::-;3928:2;3922:9;3896:2;3982:13;;-1:-1:-1;;3978:22:167;;;4002:2;3974:31;3970:40;3958:53;;;4026:18;;;4046:22;;;4023:46;4020:72;;;4072:18;;:::i;:::-;4112:10;4108:2;4101:22;4147:2;4139:6;4132:18;4187:7;4182:2;4177;4173;4169:11;4165:20;4162:33;4159:53;;;4208:1;4205;4198:12;4159:53;4264:2;4259;4255;4251:11;4246:2;4238:6;4234:15;4221:46;4309:1;4287:15;;;4304:2;4283:24;4276:35;;;;-1:-1:-1;4291:6:167;3420:922;-1:-1:-1;;;;;3420:922:167:o;4555:1569::-;4759:4;4788:2;4828;4817:9;4813:18;4858:2;4847:9;4840:21;4881:6;4916;4910:13;4947:6;4939;4932:22;4973:2;4963:12;;5006:2;4995:9;4991:18;4984:25;;5068:2;5058:6;5055:1;5051:14;5040:9;5036:30;5032:39;5106:2;5098:6;5094:15;5127:1;5148;5158:937;5174:6;5169:3;5166:15;5158:937;;;5243:22;;;-1:-1:-1;;5239:36:167;5227:49;;5299:13;;5386:9;;-1:-1:-1;;;;;5382:35:167;5367:51;;5457:11;;5451:18;5489:15;;;5482:27;;;5570:19;;5339:15;;;5602:24;;;5692:21;;;;5737:1;;5660:2;5648:15;;;5751:236;5767:8;5762:3;5759:17;5751:236;;;5848:15;;-1:-1:-1;;;;;;5844:42:167;5830:57;;5956:17;;;;5795:1;5786:11;;;;;5913:14;;;;5751:236;;;-1:-1:-1;6073:12:167;;;;6010:5;-1:-1:-1;;;6038:15:167;;;;5200:1;5191:11;5158:937;;;-1:-1:-1;6112:6:167;;4555:1569;-1:-1:-1;;;;;;;;;4555:1569:167:o;6129:250::-;6214:1;6224:113;6238:6;6235:1;6232:13;6224:113;;;6314:11;;;6308:18;6295:11;;;6288:39;6260:2;6253:10;6224:113;;;-1:-1:-1;;6371:1:167;6353:16;;6346:27;6129:250::o;6384:271::-;6426:3;6464:5;6458:12;6491:6;6486:3;6479:19;6507:76;6576:6;6569:4;6564:3;6560:14;6553:4;6546:5;6542:16;6507:76;:::i;:::-;6637:2;6616:15;-1:-1:-1;;6612:29:167;6603:39;;;;6644:4;6599:50;;6384:271;-1:-1:-1;;6384:271:167:o;6660:803::-;6822:4;6851:2;6891;6880:9;6876:18;6921:2;6910:9;6903:21;6944:6;6979;6973:13;7010:6;7002;6995:22;7048:2;7037:9;7033:18;7026:25;;7110:2;7100:6;7097:1;7093:14;7082:9;7078:30;7074:39;7060:53;;7148:2;7140:6;7136:15;7169:1;7179:255;7193:6;7190:1;7187:13;7179:255;;;7286:2;7282:7;7270:9;7262:6;7258:22;7254:36;7249:3;7242:49;7314:40;7347:6;7338;7332:13;7314:40;:::i;:::-;7304:50;-1:-1:-1;7412:12:167;;;;7377:15;;;;7215:1;7208:9;7179:255;;;-1:-1:-1;7451:6:167;;6660:803;-1:-1:-1;;;;;;;6660:803:167:o;7468:315::-;7544:6;7552;7560;7613:2;7601:9;7592:7;7588:23;7584:32;7581:52;;;7629:1;7626;7619:12;7581:52;-1:-1:-1;;7652:23:167;;;7722:2;7707:18;;7694:32;;-1:-1:-1;7773:2:167;7758:18;;;7745:32;;7468:315;-1:-1:-1;7468:315:167:o;7980:127::-;8041:10;8036:3;8032:20;8029:1;8022:31;8072:4;8069:1;8062:15;8096:4;8093:1;8086:15;8112:128;8179:9;;;8200:11;;;8197:37;;;8214:18;;:::i;8245:184::-;8315:6;8368:2;8356:9;8347:7;8343:23;8339:32;8336:52;;;8384:1;8381;8374:12;8336:52;-1:-1:-1;8407:16:167;;8245:184;-1:-1:-1;8245:184:167:o;8434:127::-;8495:10;8490:3;8486:20;8483:1;8476:31;8526:4;8523:1;8516:15;8550:4;8547:1;8540:15;8566:120;8606:1;8632;8622:35;;8637:18;;:::i;:::-;-1:-1:-1;8671:9:167;;8566:120::o;9275:277::-;9342:6;9395:2;9383:9;9374:7;9370:23;9366:32;9363:52;;;9411:1;9408;9401:12;9363:52;9443:9;9437:16;9496:5;9489:13;9482:21;9475:5;9472:32;9462:60;;9518:1;9515;9508:12;9557:220;9706:2;9695:9;9688:21;9669:4;9726:45;9767:2;9756:9;9752:18;9744:6;9726:45;:::i;9782:317::-;-1:-1:-1;;;;;9959:32:167;;9941:51;;10028:2;10023;10008:18;;10001:30;;;-1:-1:-1;;10048:45:167;;10074:18;;10066:6;10048:45;:::i;10413:380::-;10492:1;10488:12;;;;10535;;;10556:61;;10610:4;10602:6;10598:17;10588:27;;10556:61;10663:2;10655:6;10652:14;10632:18;10629:38;10626:161;;10709:10;10704:3;10700:20;10697:1;10690:31;10744:4;10741:1;10734:15;10772:4;10769:1;10762:15;10798:125;10863:9;;;10884:10;;;10881:36;;;10897:18;;:::i;10928:136::-;10963:3;-1:-1:-1;;;10984:22:167;;10981:48;;11009:18;;:::i;:::-;-1:-1:-1;11049:1:167;11045:13;;10928:136::o;11348:384::-;-1:-1:-1;;;;;;11533:33:167;;11521:46;;11590:13;;11503:3;;11612:74;11590:13;11675:1;11666:11;;11659:4;11647:17;;11612:74;:::i;:::-;11706:16;;;;11724:1;11702:24;;11348:384;-1:-1:-1;;;11348:384:167:o;11737:287::-;11866:3;11904:6;11898:13;11920:66;11979:6;11974:3;11967:4;11959:6;11955:17;11920:66;:::i;:::-;12002:16;;;;;11737:287;-1:-1:-1;;11737:287:167:o;13065:944::-;13148:12;;-1:-1:-1;;;;;1200:31:167;1188:44;;13215:4;13208:5;13204:16;13198:23;13191:4;13186:3;13182:14;13175:47;13271:4;13264:5;13260:16;13254:23;13247:4;13242:3;13238:14;13231:47;13327:4;13320:5;13316:16;13310:23;13303:4;13298:3;13294:14;13287:47;13383:4;13376:5;13372:16;13366:23;13359:4;13354:3;13350:14;13343:47;13439:4;13432:5;13428:16;13422:23;13415:4;13410:3;13406:14;13399:47;13495:4;13488:5;13484:16;13478:23;13471:4;13466:3;13462:14;13455:47;13548:4;13541:5;13537:16;13531:23;13563:48;13605:4;13600:3;13596:14;13582:12;-1:-1:-1;;;;;1200:31:167;1188:44;;1134:104;13563:48;-1:-1:-1;13630:6:167;13673:14;;;13667:21;-1:-1:-1;;;;;1200:31:167;;13732:12;;;1188:44;-1:-1:-1;;13764:6:167;13807:14;;;13801:21;12929:12;;13870;;;12917:25;12991:4;12980:16;;12974:23;12958:14;;;12951:47;13047:4;13036:16;;13030:23;13014:14;;;13007:47;-1:-1:-1;;13934:6:167;13923:18;;13917:25;13908:6;13899:16;;13892:51;13994:6;13983:18;13977:25;13968:6;13959:16;;;13952:51;13065:944::o;14014:256::-;14204:3;14189:19;;14217:47;14193:9;14246:6;14217:47;:::i;14275:354::-;14493:3;14478:19;;14506:47;14482:9;14535:6;14506:47;:::i;:::-;-1:-1:-1;;;;;14590:32:167;;;;14584:3;14569:19;;;;14562:61;14275:354;;-1:-1:-1;14275:354:167:o;14923:168::-;14996:9;;;15027;;15044:15;;;15038:22;;15024:37;15014:71;;15065:18;;:::i;15439:112::-;15471:1;15497;15487:35;;15502:18;;:::i;:::-;-1:-1:-1;15536:9:167;;15439:112::o;15807:1098::-;15903:6;15956:3;15944:9;15935:7;15931:23;15927:33;15924:53;;;15973:1;15970;15963:12;15924:53;15999:22;;:::i;:::-;16050:9;16044:16;16037:5;16030:31;16114:2;16103:9;16099:18;16093:25;16088:2;16081:5;16077:14;16070:49;16172:2;16161:9;16157:18;16151:25;16146:2;16139:5;16135:14;16128:49;16230:2;16219:9;16215:18;16209:25;16204:2;16197:5;16193:14;16186:49;16289:3;16278:9;16274:19;16268:26;16262:3;16255:5;16251:15;16244:51;16349:3;16338:9;16334:19;16328:26;16322:3;16315:5;16311:15;16304:51;16409:3;16398:9;16394:19;16388:26;16382:3;16375:5;16371:15;16364:51;16469:3;16458:9;16454:19;16448:26;16442:3;16435:5;16431:15;16424:51;16494:3;16550:2;16539:9;16535:18;16529:25;16524:2;16517:5;16513:14;16506:49;;16574:3;16630:2;16619:9;16615:18;16609:25;16604:2;16597:5;16593:14;16586:49;;16654:3;16710:2;16699:9;16695:18;16689:25;16684:2;16677:5;16673:14;16666:49;;16734:3;16790:2;16779:9;16775:18;16769:25;16764:2;16757:5;16753:14;16746:49;;16814:3;16870:2;16859:9;16855:18;16849:25;16844:2;16837:5;16833:14;16826:49;;16894:5;16884:15;;;15807:1098;;;;:::o;17090:192::-;17169:13;;-1:-1:-1;;;;;17211:46:167;;17201:57;;17191:85;;17272:1;17269;17262:12;17287:554;17387:6;17440:2;17428:9;17419:7;17415:23;17411:32;17408:52;;;17456:1;17453;17446:12;17408:52;17489:2;17483:9;17531:2;17523:6;17519:15;17600:6;17588:10;17585:22;-1:-1:-1;;;;;17552:10:167;17549:34;17546:62;17543:88;;;17611:18;;:::i;:::-;17647:2;17640:22;17686:40;17716:9;17686:40;:::i;:::-;17678:6;17671:56;17760:49;17805:2;17794:9;17790:18;17760:49;:::i;:::-;17755:2;17743:15;;17736:74;17747:6;17287:554;-1:-1:-1;;;17287:554:167:o;17978:200::-;18044:9;;;18017:4;18072:9;;18100:10;;18112:12;;;18096:29;18135:12;;;18127:21;;18093:56;18090:82;;;18152:18;;:::i;:::-;18090:82;17978:200;;;;:::o;20238:216::-;20302:9;;;20330:11;;;20277:3;20360:9;;20388:10;;20384:19;;20413:10;;20405:19;;20381:44;20378:70;;;20428:18;;:::i;:::-;20378:70;;20238:216;;;;:::o;20459:112::-;20490:1;20516;20506:35;;20521:18;;:::i;:::-;-1:-1:-1;20555:10:167;;20459:112::o;20576:446::-;20826:2;20815:9;20808:21;20865:1;20860:2;20849:9;20845:18;20838:29;-1:-1:-1;;;20898:2:167;20887:9;20883:18;20876:35;20949:3;20942:4;20931:9;20927:20;20920:33;20789:4;20970:46;21011:3;21000:9;20996:19;20988:6;20970:46;:::i;21027:291::-;21204:2;21193:9;21186:21;21167:4;21224:45;21265:2;21254:9;21250:18;21242:6;21224:45;:::i;:::-;21216:53;;21305:6;21300:2;21289:9;21285:18;21278:34;21027:291;;;;;:::o;21617:146::-;21704:13;;21726:31;21704:13;21726:31;:::i;21768:525::-;21830:5;21878:4;21866:9;21861:3;21857:19;21853:30;21850:50;;;21896:1;21893;21886:12;21850:50;21929:2;21923:9;21971:4;21963:6;21959:17;22042:6;22030:10;22027:22;-1:-1:-1;;;;;21994:10:167;21991:34;21988:62;21985:88;;;22053:18;;:::i;:::-;22093:10;22089:2;22082:22;;22122:6;22113:15;;22158:9;22152:16;22144:6;22137:32;22223:2;22212:9;22208:18;22202:25;22197:2;22189:6;22185:15;22178:50;22282:2;22271:9;22267:18;22261:25;22256:2;22248:6;22244:15;22237:50;;21768:525;;;;:::o;22298:1117::-;22396:6;22449:3;22437:9;22428:7;22424:23;22420:33;22417:53;;;22466:1;22463;22456:12;22417:53;22492:17;;:::i;:::-;22532:48;22570:9;22532:48;:::i;:::-;22525:5;22518:63;22634:2;22623:9;22619:18;22613:25;22608:2;22601:5;22597:14;22590:49;22692:2;22681:9;22677:18;22671:25;22666:2;22659:5;22655:14;22648:49;22750:2;22739:9;22735:18;22729:25;22724:2;22717:5;22713:14;22706:49;22809:3;22798:9;22794:19;22788:26;22782:3;22775:5;22771:15;22764:51;22869:3;22858:9;22854:19;22848:26;22842:3;22835:5;22831:15;22824:51;22929:3;22918:9;22914:19;22908:26;22902:3;22895:5;22891:15;22884:51;22968:58;23021:3;23010:9;23006:19;22968:58;:::i;:::-;22962:3;22955:5;22951:15;22944:83;23046:3;23081:57;23134:2;23123:9;23119:18;23081:57;:::i;:::-;23065:14;;;23058:81;23158:3;23193:62;23247:7;23227:18;;;23193:62;:::i;:::-;23177:14;;;23170:86;23313:6;23298:22;;23292:29;23283:6;23272:18;;23265:57;23379:3;23364:19;;;23358:26;23349:6;23338:18;;23331:54;-1:-1:-1;23181:5:167;22298:1117;-1:-1:-1;22298:1117:167:o;23420:349::-;23535:1;23531;23526:3;23522:11;23518:19;23510:5;23504:12;23500:38;23495:3;23488:51;23602:4;23595:5;23591:16;23585:23;23578:31;23571:39;23564:4;23559:3;23555:14;23548:63;23470:3;23657:4;23650:5;23646:16;23640:23;23695:4;23688;23683:3;23679:14;23672:28;23716:47;23757:4;23752:3;23748:14;23734:12;23716:47;:::i;23774:400::-;24009:6;23998:9;23991:25;24052:6;24047:2;24036:9;24032:18;24025:34;24095:2;24090;24079:9;24075:18;24068:30;23972:4;24115:53;24164:2;24153:9;24149:18;24141:6;24115:53;:::i;24179:473::-;24442:6;24431:9;24424:25;24485:6;24480:2;24469:9;24465:18;24458:34;24528:6;24523:2;24512:9;24508:18;24501:34;24571:3;24566:2;24555:9;24551:18;24544:31;24405:4;24592:54;24641:3;24630:9;24626:19;24618:6;24592:54;:::i;24657:245::-;24736:6;24744;24797:2;24785:9;24776:7;24772:23;24768:32;24765:52;;;24813:1;24810;24803:12;24765:52;-1:-1:-1;;24836:16:167;;24892:2;24877:18;;;24871:25;24836:16;;24871:25;;-1:-1:-1;24657:245:167:o;27640:193::-;27679:1;27705;27695:35;;27710:18;;:::i;:::-;-1:-1:-1;;;27746:18:167;;-1:-1:-1;;27766:13:167;;27742:38;27739:64;;;27783:18;;:::i;:::-;-1:-1:-1;27817:10:167;;27640:193::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "IS_TEST()": "fa7626d4",
    "assertWithDelta(uint256,int256,uint256)": "ab75e7c3",
    "createUser(string)": "507ffba5",
    "excludeArtifacts()": "b5508aa9",
    "excludeContracts()": "e20c9f71",
    "excludeSenders()": "1ed7831c",
    "failed()": "ba414fa6",
    "setUp()": "0a9254e4",
    "targetArtifactSelectors()": "66d9a9a0",
    "targetArtifacts()": "85226c81",
    "targetContracts()": "3f7286f4",
    "targetSelectors()": "916a17c6",
    "targetSenders()": "3e5e3c23",
    "test_lp_fairness_long_long_lp(uint256,uint256)": "42aa13ae",
    "test_lp_fairness_long_lp(uint256,uint256)": "7949c523",
    "test_lp_fairness_long_short_lp(uint256,uint256)": "51cf9a79",
    "test_lp_fairness_short_long_lp(int256,uint256)": "48af0581",
    "test_lp_fairness_short_lp(uint256,uint256)": "0ce4e174",
    "test_lp_fairness_short_short_lp(uint256,uint256)": "35109249",
    "whaleTransfer(address,address,address)": "10716760",
    "whaleTransfer(address,address,uint256,address)": "3e5e0d26"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WhaleBalanceExceeded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WhaleIsContract\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32[]\",\"name\":\"extraData\",\"type\":\"bytes32[]\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_delta\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_targetValue\",\"type\":\"uint256\"}],\"name\":\"assertWithDelta\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"createUser\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_long_long_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_long_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_long_short_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"variableRateParam\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_short_long_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_short_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_short_short_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"whale\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"whaleTransfer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"whale\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"whaleTransfer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}]},\"events\":{\"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])\":{\"notice\":\"Event Utils ///\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/integrations/hyperdrive/LpFairnessTest.sol\":\"LPFairnessTest\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/Hyperdrive.sol\":{\"keccak256\":\"0x2a4cbe095d6b6818959ba078ba32a3d71b06bee714193a92431e0ee56ae714bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31bad624349a8efd7f0d1ada9e8635b7d4191e0f80174b861ae76e63279917f6\",\"dweb:/ipfs/QmVBWfcxpNQLegXVLmoGYy1H5rwGaaAmkRwaLJiaxAaJmX\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd\",\"dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu\"]},\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6\",\"dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669\",\"dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x7dda4c0437e908336901192a3ac4290dfd27a8afc618f4dd787c517ffe608d9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://70133e63ca643fce51ac8eac8cadb96910fcabde98362e8c3cf91c0b629779f0\",\"dweb:/ipfs/QmTqAFsCvvA2X43oLfbmUFqvaj7eMLLHZ9odREFsBtzdmf\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x0330ca18326c2da2cfd29a6433e15dc8fb6213ef5b70717ef02a4fa17f69e64a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c23b142bc142472a47c6e739d008c90471dbcf8ec5b9415fd0e86f5920ef5dc1\",\"dweb:/ipfs/QmdnW3Kk4R7kQ1FQBuQNV5M9VUdHSkEvvvsjNBDoVi5geX\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/factory/HyperdriveFactory.sol\":{\"keccak256\":\"0x13e6d5551115a4a90e97bb36547093d8e1b7e13ce1ea88f398e105e5425c8f64\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6b07d242a96333f5c1e100b9c181dd5a0ef651b6f6faf294981fb35ad7510f85\",\"dweb:/ipfs/QmV4vfxMzFqFEYaJNgisWY4sdHSYuhnVkEW3Wn3ASoVdzN\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IForwarderFactory.sol\":{\"keccak256\":\"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3\",\"dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveDeployer.sol\":{\"keccak256\":\"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587\",\"dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/ERC20Forwarder.sol\":{\"keccak256\":\"0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034\",\"dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p\"]},\"contracts/src/token/ForwarderFactory.sol\":{\"keccak256\":\"0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e\",\"dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0\",\"dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d\",\"dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x180bd1e125dc35405886e74abf66d48d98802e42ff80e48edcc9931b6c38ee5e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62261e811c9cc6187a4cb8108d3f364707a1f2ce84090c055103d280e590577a\",\"dweb:/ipfs/QmW4nzqcDuKstJJ8FEziGFJf2XZnjkvsj2bbWzJAPNngKP\"]},\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/StdCheats.sol\":{\"keccak256\":\"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a\",\"dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe\"]},\"lib/forge-std/src/StdError.sol\":{\"keccak256\":\"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6\",\"dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj\"]},\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]},\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Test.sol\":{\"keccak256\":\"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765\",\"dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]},\"lib/forge-std/src/safeconsole.sol\":{\"keccak256\":\"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae\",\"dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88\",\"dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol\":{\"keccak256\":\"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b\",\"dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276\",\"dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2\"]},\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df\",\"dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol\":{\"keccak256\":\"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790\",\"dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol\":{\"keccak256\":\"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3\",\"dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol\":{\"keccak256\":\"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b\",\"dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf\",\"dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72\",\"dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"test/integrations/hyperdrive/LpFairnessTest.sol\":{\"keccak256\":\"0x21ddce15849d7847820c6a872b44ff7c7880b7f1f7a2418748d301f66b5d79da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f48f81ae967b62d172e88b73c866a3f00639946591c5048a5c204b9445d9ad8\",\"dweb:/ipfs/QmNvxLf71ionSSmtGtQwFFTAw3Lec7FVS7etzKDhZDufPf\"]},\"test/utils/BaseTest.sol\":{\"keccak256\":\"0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd\",\"dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0\",\"dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1\"]},\"test/utils/HyperdriveTest.sol\":{\"keccak256\":\"0x5d45ae03e8ec8955de5f744975de55cf5df5cdf89e496c45a0915a9de5f42280\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e84fca62745b74f64e2586d9f3d6f6ddf4b7cc1cda6b94c7603ae00529fe53e\",\"dweb:/ipfs/QmQtag6LwsmUye4hjBB6798r9Ci7JstUYFhu52TtqZErLN\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x5861db03144fda3f71c21354d8a639396bacb85acaca8804f6dbaf600428cf9a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c01ebbc32504f67bb4eaf65ef613431a0afc05530dbbc9a0489c342f722904b7\",\"dweb:/ipfs/QmZEVPaEqhD4p13yzfrKf1K5MFrvNaeF9pn7hSZxs9YfmQ\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171\",\"dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu\"]}},\"version\":1}",
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
          "inputs": [],
          "type": "error",
          "name": "WhaleBalanceExceeded"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "WhaleIsContract"
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
              "name": "sharePrice",
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
          "name": "AddLiquidity",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "baseFees",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "internalType": "uint256",
              "name": "version",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "hyperdrive",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "config",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
                  "type": "address"
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
                      "name": "governance",
                      "type": "uint256"
                    }
                  ]
                },
                {
                  "internalType": "uint256",
                  "name": "oracleSize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updateGap",
                  "type": "uint256"
                }
              ],
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "linkerFactory",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "bytes32",
              "name": "linkerCodeHash",
              "type": "bytes32",
              "indexed": false
            },
            {
              "internalType": "bytes32[]",
              "name": "extraData",
              "type": "bytes32[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Deployed",
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
              "name": "sharePrice",
              "type": "uint256",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "internalType": "address",
              "name": "provider",
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
              "name": "sharePrice",
              "type": "uint256",
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
              "name": "sharePrice",
              "type": "uint256",
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
              "internalType": "string",
              "name": "",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_address",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "val",
              "type": "uint256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "int256[]",
              "name": "val",
              "type": "int256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "val",
              "type": "address[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_bytes",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_bytes32",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_int",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "val",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_address",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256[]",
              "name": "val",
              "type": "uint256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "int256[]",
              "name": "val",
              "type": "int256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "address[]",
              "name": "val",
              "type": "address[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_array",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "bytes",
              "name": "val",
              "type": "bytes",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_bytes",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "bytes32",
              "name": "val",
              "type": "bytes32",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_bytes32",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "int256",
              "name": "val",
              "type": "int256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "decimals",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_decimal_int",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "decimals",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_decimal_uint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "int256",
              "name": "val",
              "type": "int256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_int",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "string",
              "name": "val",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_string",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_named_uint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_string",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "log_uint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "logs",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "IS_TEST",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "_delta",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "_targetValue",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "assertWithDelta"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createUser",
          "outputs": [
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeArtifacts",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "excludedArtifacts_",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeContracts",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "excludedContracts_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeSenders",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "excludedSenders_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "failed",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setUp"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetArtifactSelectors",
          "outputs": [
            {
              "internalType": "struct StdInvariant.FuzzSelector[]",
              "name": "targetedArtifactSelectors_",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "bytes4[]",
                  "name": "selectors",
                  "type": "bytes4[]"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetArtifacts",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "targetedArtifacts_",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetContracts",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targetedContracts_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetSelectors",
          "outputs": [
            {
              "internalType": "struct StdInvariant.FuzzSelector[]",
              "name": "targetedSelectors_",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "bytes4[]",
                  "name": "selectors",
                  "type": "bytes4[]"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetSenders",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targetedSenders_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "variableRateParam",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tradeSizeParam",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_lp_fairness_long_long_lp"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "variableRateParam",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tradeSizeParam",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_lp_fairness_long_lp"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "variableRateParam",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tradeSizeParam",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_lp_fairness_long_short_lp"
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "variableRateParam",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "tradeSizeParam",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_lp_fairness_short_long_lp"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "variableRateParam",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tradeSizeParam",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_lp_fairness_short_lp"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "variableRateParam",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tradeSizeParam",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_lp_fairness_short_short_lp"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "whale",
              "type": "address"
            },
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "whaleTransfer",
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
              "internalType": "address",
              "name": "whale",
              "type": "address"
            },
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "whaleTransfer",
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
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "test/integrations/hyperdrive/LpFairnessTest.sol": "LPFairnessTest"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/DataProvider.sol": {
        "keccak256": "0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6",
        "urls": [
          "bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b",
          "dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/Hyperdrive.sol": {
        "keccak256": "0x2a4cbe095d6b6818959ba078ba32a3d71b06bee714193a92431e0ee56ae714bf",
        "urls": [
          "bzz-raw://31bad624349a8efd7f0d1ada9e8635b7d4191e0f80174b861ae76e63279917f6",
          "dweb:/ipfs/QmVBWfcxpNQLegXVLmoGYy1H5rwGaaAmkRwaLJiaxAaJmX"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveBase.sol": {
        "keccak256": "0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32",
        "urls": [
          "bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd",
          "dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveDataProvider.sol": {
        "keccak256": "0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c",
        "urls": [
          "bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6",
          "dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLP.sol": {
        "keccak256": "0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02",
        "urls": [
          "bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669",
          "dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLong.sol": {
        "keccak256": "0x7dda4c0437e908336901192a3ac4290dfd27a8afc618f4dd787c517ffe608d9c",
        "urls": [
          "bzz-raw://70133e63ca643fce51ac8eac8cadb96910fcabde98362e8c3cf91c0b629779f0",
          "dweb:/ipfs/QmTqAFsCvvA2X43oLfbmUFqvaj7eMLLHZ9odREFsBtzdmf"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveShort.sol": {
        "keccak256": "0x0330ca18326c2da2cfd29a6433e15dc8fb6213ef5b70717ef02a4fa17f69e64a",
        "urls": [
          "bzz-raw://c23b142bc142472a47c6e739d008c90471dbcf8ec5b9415fd0e86f5920ef5dc1",
          "dweb:/ipfs/QmdnW3Kk4R7kQ1FQBuQNV5M9VUdHSkEvvvsjNBDoVi5geX"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveStorage.sol": {
        "keccak256": "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        "urls": [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveTWAP.sol": {
        "keccak256": "0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b",
        "urls": [
          "bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc",
          "dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/factory/HyperdriveFactory.sol": {
        "keccak256": "0x13e6d5551115a4a90e97bb36547093d8e1b7e13ce1ea88f398e105e5425c8f64",
        "urls": [
          "bzz-raw://6b07d242a96333f5c1e100b9c181dd5a0ef651b6f6faf294981fb35ad7510f85",
          "dweb:/ipfs/QmV4vfxMzFqFEYaJNgisWY4sdHSYuhnVkEW3Wn3ASoVdzN"
        ],
        "license": "Apache-2.0"
      },
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
      "contracts/src/interfaces/IForwarderFactory.sol": {
        "keccak256": "0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af",
        "urls": [
          "bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3",
          "dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveDeployer.sol": {
        "keccak256": "0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0",
        "urls": [
          "bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587",
          "dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB"
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
      "contracts/src/token/ERC20Forwarder.sol": {
        "keccak256": "0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158",
        "urls": [
          "bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034",
          "dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/ForwarderFactory.sol": {
        "keccak256": "0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b",
        "urls": [
          "bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e",
          "dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiToken.sol": {
        "keccak256": "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        "urls": [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenDataProvider.sol": {
        "keccak256": "0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57",
        "urls": [
          "bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0",
          "dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/ERC20Mintable.sol": {
        "keccak256": "0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01",
        "urls": [
          "bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d",
          "dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockHyperdrive.sol": {
        "keccak256": "0x180bd1e125dc35405886e74abf66d48d98802e42ff80e48edcc9931b6c38ee5e",
        "urls": [
          "bzz-raw://62261e811c9cc6187a4cb8108d3f364707a1f2ce84090c055103d280e590577a",
          "dweb:/ipfs/QmW4nzqcDuKstJJ8FEziGFJf2XZnjkvsj2bbWzJAPNngKP"
        ],
        "license": "Apache-2.0"
      },
      "lib/forge-std/lib/ds-test/src/test.sol": {
        "keccak256": "0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b",
        "urls": [
          "bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240",
          "dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"
        ],
        "license": "GPL-3.0-or-later"
      },
      "lib/forge-std/src/Base.sol": {
        "keccak256": "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c",
        "urls": [
          "bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224",
          "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdAssertions.sol": {
        "keccak256": "0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60",
        "urls": [
          "bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b",
          "dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdChains.sol": {
        "keccak256": "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
        "urls": [
          "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
          "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdCheats.sol": {
        "keccak256": "0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5",
        "urls": [
          "bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a",
          "dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdError.sol": {
        "keccak256": "0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77",
        "urls": [
          "bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6",
          "dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdInvariant.sol": {
        "keccak256": "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1",
        "urls": [
          "bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c",
          "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdJson.sol": {
        "keccak256": "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b",
        "urls": [
          "bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c",
          "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdMath.sol": {
        "keccak256": "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
        "urls": [
          "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
          "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdStorage.sol": {
        "keccak256": "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d",
        "urls": [
          "bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26",
          "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdStyle.sol": {
        "keccak256": "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
        "urls": [
          "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
          "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/StdUtils.sol": {
        "keccak256": "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1",
        "urls": [
          "bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140",
          "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/Test.sol": {
        "keccak256": "0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0",
        "urls": [
          "bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765",
          "dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/Vm.sol": {
        "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        "urls": [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/console.sol": {
        "keccak256": "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
        "urls": [
          "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
          "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/console2.sol": {
        "keccak256": "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea",
        "urls": [
          "bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973",
          "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/interfaces/IMulticall3.sol": {
        "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
        "urls": [
          "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
          "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/safeconsole.sol": {
        "keccak256": "0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381",
        "urls": [
          "bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae",
          "dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
        "keccak256": "0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c",
        "urls": [
          "bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88",
          "dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol": {
        "keccak256": "0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247",
        "urls": [
          "bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b",
          "dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        "keccak256": "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
        "urls": [
          "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
          "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol": {
        "keccak256": "0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676",
        "urls": [
          "bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276",
          "dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/security/Pausable.sol": {
        "keccak256": "0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773",
        "urls": [
          "bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004",
          "dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b",
        "urls": [
          "bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df",
          "dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol": {
        "keccak256": "0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b",
        "urls": [
          "bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f",
          "dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol": {
        "keccak256": "0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a",
        "urls": [
          "bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790",
          "dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca",
        "urls": [
          "bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd",
          "dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"
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
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol": {
        "keccak256": "0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec",
        "urls": [
          "bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3",
          "dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol": {
        "keccak256": "0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa",
        "urls": [
          "bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b",
          "dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF"
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
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        "urls": [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        "keccak256": "0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f",
        "urls": [
          "bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf",
          "dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        "urls": [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        "urls": [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858",
        "urls": [
          "bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4",
          "dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        "urls": [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        "keccak256": "0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598",
        "urls": [
          "bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72",
          "dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"
        ],
        "license": "MIT"
      },
      "lib/solmate/src/auth/Auth.sol": {
        "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
        "urls": [
          "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
          "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
        "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
        "urls": [
          "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
          "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      },
      "test/integrations/hyperdrive/LpFairnessTest.sol": {
        "keccak256": "0x21ddce15849d7847820c6a872b44ff7c7880b7f1f7a2418748d301f66b5d79da",
        "urls": [
          "bzz-raw://7f48f81ae967b62d172e88b73c866a3f00639946591c5048a5c204b9445d9ad8",
          "dweb:/ipfs/QmNvxLf71ionSSmtGtQwFFTAw3Lec7FVS7etzKDhZDufPf"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/BaseTest.sol": {
        "keccak256": "0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6",
        "urls": [
          "bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd",
          "dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/Constants.sol": {
        "keccak256": "0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b",
        "urls": [
          "bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0",
          "dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/HyperdriveTest.sol": {
        "keccak256": "0x5d45ae03e8ec8955de5f744975de55cf5df5cdf89e496c45a0915a9de5f42280",
        "urls": [
          "bzz-raw://0e84fca62745b74f64e2586d9f3d6f6ddf4b7cc1cda6b94c7603ae00529fe53e",
          "dweb:/ipfs/QmQtag6LwsmUye4hjBB6798r9Ci7JstUYFhu52TtqZErLN"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/HyperdriveUtils.sol": {
        "keccak256": "0x5861db03144fda3f71c21354d8a639396bacb85acaca8804f6dbaf600428cf9a",
        "urls": [
          "bzz-raw://c01ebbc32504f67bb4eaf65ef613431a0afc05530dbbc9a0489c342f722904b7",
          "dweb:/ipfs/QmZEVPaEqhD4p13yzfrKf1K5MFrvNaeF9pn7hSZxs9YfmQ"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/Lib.sol": {
        "keccak256": "0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2",
        "urls": [
          "bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171",
          "dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/integrations/hyperdrive/LpFairnessTest.sol",
    "id": 79331,
    "exportedSymbols": {
      "AssetId": [
        8311
      ],
      "FixedPointMath": [
        9066
      ],
      "HyperdriveTest": [
        121861
      ],
      "HyperdriveUtils": [
        124790
      ],
      "IHyperdrive": [
        7431
      ],
      "LPFairnessTest": [
        79330
      ],
      "Lib": [
        125392
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:13118:125",
    "nodes": [
      {
        "id": 78528,
        "nodeType": "PragmaDirective",
        "src": "39:23:125",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 78530,
        "nodeType": "ImportDirective",
        "src": "64:62:125",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 79331,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 78529,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "73:7:125",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 78532,
        "nodeType": "ImportDirective",
        "src": "127:76:125",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 79331,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 78531,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "136:14:125",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 78536,
        "nodeType": "ImportDirective",
        "src": "204:94:125",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveTest.sol",
        "file": "../../utils/HyperdriveTest.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 79331,
        "sourceUnit": 121862,
        "symbolAliases": [
          {
            "foreign": {
              "id": 78533,
              "name": "HyperdriveTest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 121861,
              "src": "213:14:125",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 78534,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 124790,
              "src": "229:15:125",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 78535,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "246:11:125",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 78538,
        "nodeType": "ImportDirective",
        "src": "299:42:125",
        "nodes": [],
        "absolutePath": "test/utils/Lib.sol",
        "file": "../../utils/Lib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 79331,
        "sourceUnit": 125393,
        "symbolAliases": [
          {
            "foreign": {
              "id": 78537,
              "name": "Lib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 125392,
              "src": "308:3:125",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 79330,
        "nodeType": "ContractDefinition",
        "src": "343:12813:125",
        "nodes": [
          {
            "id": 78543,
            "nodeType": "UsingForDirective",
            "src": "391:33:125",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 78541,
              "name": "FixedPointMath",
              "nameLocations": [
                "397:14:125"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "397:14:125"
            },
            "typeName": {
              "id": 78542,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "416:7:125",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 78545,
            "nodeType": "UsingForDirective",
            "src": "429:28:125",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 78544,
              "name": "HyperdriveUtils",
              "nameLocations": [
                "435:15:125"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 124790,
              "src": "435:15:125"
            }
          },
          {
            "id": 78547,
            "nodeType": "UsingForDirective",
            "src": "462:16:125",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 78546,
              "name": "Lib",
              "nameLocations": [
                "468:3:125"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 125392,
              "src": "468:3:125"
            }
          },
          {
            "id": 78577,
            "nodeType": "FunctionDefinition",
            "src": "484:344:125",
            "nodes": [],
            "body": {
              "id": 78576,
              "nodeType": "Block",
              "src": "517:311:125",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 78551,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "527:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LPFairnessTest_$79330_$",
                          "typeString": "type(contract super LPFairnessTest)"
                        }
                      },
                      "id": 78553,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "533:5:125",
                      "memberName": "setUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 119784,
                      "src": "527:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 78554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "527:13:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78555,
                  "nodeType": "ExpressionStatement",
                  "src": "527:13:125"
                },
                {
                  "assignments": [
                    78560
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78560,
                      "mutability": "mutable",
                      "name": "config",
                      "nameLocation": "716:6:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78576,
                      "src": "686:36:125",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 78559,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 78558,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "686:11:125",
                            "698:10:125"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7245,
                          "src": "686:22:125"
                        },
                        "referencedDeclaration": 7245,
                        "src": "686:22:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78564,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "302e3035653138",
                        "id": 78562,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "736:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_50000000000000000_by_1",
                          "typeString": "int_const 50000000000000000"
                        },
                        "value": "0.05e18"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_50000000000000000_by_1",
                          "typeString": "int_const 50000000000000000"
                        }
                      ],
                      "id": 78561,
                      "name": "testConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119960,
                      "src": "725:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PoolConfig_$7245_memory_ptr_$",
                        "typeString": "function (uint256) view returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 78563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "725:19:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "686:58:125"
                },
                {
                  "expression": {
                    "id": 78569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 78565,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78560,
                        "src": "754:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 78567,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "761:20:125",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7216,
                      "src": "754:27:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "316536",
                      "id": 78568,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "784:3:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000_by_1",
                        "typeString": "int_const 1000000"
                      },
                      "value": "1e6"
                    },
                    "src": "754:33:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78570,
                  "nodeType": "ExpressionStatement",
                  "src": "754:33:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78572,
                        "name": "deployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117543,
                        "src": "804:8:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78573,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78560,
                        "src": "814:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      ],
                      "id": 78571,
                      "name": "deploy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119829,
                        119852,
                        119914
                      ],
                      "referencedDeclaration": 119829,
                      "src": "797:6:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_struct$_PoolConfig_$7245_memory_ptr_$returns$__$",
                        "typeString": "function (address,struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 78574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "797:24:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78575,
                  "nodeType": "ExpressionStatement",
                  "src": "797:24:125"
                }
              ]
            },
            "baseFunctions": [
              119784
            ],
            "functionSelector": "0a9254e4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setUp",
            "nameLocation": "493:5:125",
            "overrides": {
              "id": 78549,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "508:8:125"
            },
            "parameters": {
              "id": 78548,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "498:2:125"
            },
            "returnParameters": {
              "id": 78550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "517:0:125"
            },
            "scope": 79330,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 78698,
            "nodeType": "FunctionDefinition",
            "src": "834:1996:125",
            "nodes": [],
            "body": {
              "id": 78697,
              "nodeType": "Block",
              "src": "951:1879:125",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 78590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78584,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78579,
                      "src": "1040:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 78587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1095:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 78588,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1098:6:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          },
                          "value": "2.5e18"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          }
                        ],
                        "expression": {
                          "id": 78585,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78579,
                          "src": "1060:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1078:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "1060:34:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1060:45:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1040:65:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78591,
                  "nodeType": "ExpressionStatement",
                  "src": "1040:65:125"
                },
                {
                  "expression": {
                    "id": 78600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78592,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78581,
                      "src": "1156:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78595,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119641,
                          "src": "1218:26:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 78598,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 78596,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1258:12:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 78597,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119641,
                            "src": "1273:26:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1258:41:125",
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
                          }
                        ],
                        "expression": {
                          "id": 78593,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78581,
                          "src": "1173:14:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1188:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "1173:31:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1173:136:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1156:153:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78601,
                  "nodeType": "ExpressionStatement",
                  "src": "1156:153:125"
                },
                {
                  "assignments": [
                    78603
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78603,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "1380:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1373:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 78602,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1373:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78608,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78606,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78579,
                        "src": "1402:17:125",
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
                        }
                      ],
                      "id": 78605,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1395:6:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 78604,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1395:6:125",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 78607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1395:25:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1373:47:125"
                },
                {
                  "assignments": [
                    78610
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78610,
                      "mutability": "mutable",
                      "name": "fixedRate",
                      "nameLocation": "1494:9:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1486:17:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78609,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1486:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78612,
                  "initialValue": {
                    "hexValue": "302e3130653138",
                    "id": 78611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1506:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000000_by_1",
                      "typeString": "int_const 100000000000000000"
                    },
                    "value": "0.10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1486:27:125"
                },
                {
                  "assignments": [
                    78614
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78614,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "1577:16:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1569:24:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78613,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1569:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78616,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 78615,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1596:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1569:39:125"
                },
                {
                  "assignments": [
                    78618
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78618,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "1626:13:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1618:21:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78617,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1618:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78624,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78620,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "1653:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78621,
                        "name": "fixedRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78610,
                        "src": "1660:9:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78622,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78614,
                        "src": "1671:16:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                      "id": 78619,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "1642:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 78623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1642:46:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1618:70:125"
                },
                {
                  "assignments": [
                    78626
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78626,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "1740:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1732:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78625,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1732:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78628,
                  "initialValue": {
                    "id": 78627,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 78581,
                    "src": "1755:14:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1732:37:125"
                },
                {
                  "assignments": [
                    78630,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78630,
                      "mutability": "mutable",
                      "name": "maturityTime",
                      "nameLocation": "1788:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1780:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78629,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1780:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 78635,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78632,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "1816:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78633,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78626,
                        "src": "1824:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78631,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "1806:9:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 78634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1806:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1779:58:125"
                },
                {
                  "assignments": [
                    78637
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78637,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "1887:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1879:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78636,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1879:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78639,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 78638,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1902:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1879:35:125"
                },
                {
                  "assignments": [
                    78641
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78641,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "1932:11:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "1924:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78640,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1924:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78646,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78643,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "1959:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78644,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78637,
                        "src": "1964:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78642,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120238,
                        120268,
                        120300
                      ],
                      "referencedDeclaration": 120268,
                      "src": "1946:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 78645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1946:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1924:53:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78648,
                        "name": "POSITION_DURATION",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119647,
                        "src": "2028:17:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78649,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78603,
                        "src": "2047:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 78647,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "2016:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 78650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2016:44:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78651,
                  "nodeType": "ExpressionStatement",
                  "src": "2016:44:125"
                },
                {
                  "assignments": [
                    78653
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78653,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "2133:26:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "2125:34:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78652,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2125:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78657,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78655,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78641,
                        "src": "2199:11:125",
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
                        }
                      ],
                      "id": 78654,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121438,
                      "src": "2162:23:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 78656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2162:58:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2125:95:125"
                },
                {
                  "assignments": [
                    78659,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78659,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "2273:18:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78697,
                      "src": "2265:26:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78658,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2265:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 78664,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78661,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "2313:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78662,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78641,
                        "src": "2318:11:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78660,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120341,
                        120366,
                        120393
                      ],
                      "referencedDeclaration": 120366,
                      "src": "2297:15:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 78663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2297:33:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2264:66:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78666,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78659,
                        "src": "2358:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78667,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78653,
                        "src": "2378:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 78668,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2406:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 78665,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "2340:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 78669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2340:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78670,
                  "nodeType": "ExpressionStatement",
                  "src": "2340:70:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78672,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "2468:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78673,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78630,
                        "src": "2476:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78674,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78626,
                        "src": "2490:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                      "id": 78671,
                      "name": "closeShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120972,
                        120998,
                        121026
                      ],
                      "referencedDeclaration": 120998,
                      "src": "2457:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 78675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2457:46:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78676,
                  "nodeType": "ExpressionStatement",
                  "src": "2457:46:125"
                },
                {
                  "expression": {
                    "id": 78681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78677,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78653,
                      "src": "2568:26:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78679,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78618,
                          "src": "2621:13:125",
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
                          }
                        ],
                        "id": 78678,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121438,
                        "src": "2597:23:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 78680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2597:38:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2568:67:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78682,
                  "nodeType": "ExpressionStatement",
                  "src": "2568:67:125"
                },
                {
                  "expression": {
                    "id": 78689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 78683,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78659,
                          "src": "2682:18:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 78684,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2681:22:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$",
                        "typeString": "tuple(uint256,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78686,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117531,
                          "src": "2722:5:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 78687,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78618,
                          "src": "2729:13:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 78685,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120341,
                          120366,
                          120393
                        ],
                        "referencedDeclaration": 120366,
                        "src": "2706:15:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 78688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2706:37:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "2681:62:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78690,
                  "nodeType": "ExpressionStatement",
                  "src": "2681:62:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78692,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78659,
                        "src": "2771:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78693,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78653,
                        "src": "2791:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 78694,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2819:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 78691,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "2753:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 78695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2753:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78696,
                  "nodeType": "ExpressionStatement",
                  "src": "2753:70:125"
                }
              ]
            },
            "functionSelector": "0ce4e174",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_short_lp",
            "nameLocation": "843:25:125",
            "parameters": {
              "id": 78582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 78579,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "886:17:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 78698,
                  "src": "878:25:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "878:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78581,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "921:14:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 78698,
                  "src": "913:22:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "913:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "868:73:125"
            },
            "returnParameters": {
              "id": 78583,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "951:0:125"
            },
            "scope": 79330,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 78827,
            "nodeType": "FunctionDefinition",
            "src": "2836:2023:125",
            "nodes": [],
            "body": {
              "id": 78826,
              "nodeType": "Block",
              "src": "2959:1900:125",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 78711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78705,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78700,
                      "src": "3048:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 78708,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3103:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 78709,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3106:6:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          },
                          "value": "2.5e18"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          }
                        ],
                        "expression": {
                          "id": 78706,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78700,
                          "src": "3068:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78707,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3086:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "3068:34:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78710,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3068:45:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3048:65:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78712,
                  "nodeType": "ExpressionStatement",
                  "src": "3048:65:125"
                },
                {
                  "expression": {
                    "id": 78721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78713,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78702,
                      "src": "3164:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78716,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119641,
                          "src": "3226:26:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 78719,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 78717,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3266:12:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 78718,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119641,
                            "src": "3281:26:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3266:41:125",
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
                          }
                        ],
                        "expression": {
                          "id": 78714,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78702,
                          "src": "3181:14:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78715,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3196:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "3181:31:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78720,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3181:136:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3164:153:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78722,
                  "nodeType": "ExpressionStatement",
                  "src": "3164:153:125"
                },
                {
                  "assignments": [
                    78724
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78724,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "3388:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "3381:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 78723,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3381:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78729,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78727,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78700,
                        "src": "3410:17:125",
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
                        }
                      ],
                      "id": 78726,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3403:6:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 78725,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3403:6:125",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 78728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3403:25:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3381:47:125"
                },
                {
                  "assignments": [
                    78731
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78731,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "3492:16:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "3484:24:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78730,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3484:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78733,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 78732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3511:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3484:39:125"
                },
                {
                  "assignments": [
                    78735
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78735,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "3541:13:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "3533:21:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78734,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3533:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78741,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78737,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "3568:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "302e3130653138",
                        "id": 78738,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3575:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        "value": "0.10e18"
                      },
                      {
                        "id": 78739,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78731,
                        "src": "3584:16:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78736,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "3557:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 78740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3557:44:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3533:68:125"
                },
                {
                  "assignments": [
                    78743
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78743,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "3653:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "3645:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78742,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3645:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78747,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 78746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 78744,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3668:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 78745,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78702,
                      "src": "3683:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3668:29:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3645:52:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78749,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "3717:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78750,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78743,
                        "src": "3725:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78748,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "3707:9:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 78751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3707:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 78752,
                  "nodeType": "ExpressionStatement",
                  "src": "3707:31:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 78756,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 78754,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "3789:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 78755,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3809:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "3789:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78757,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78724,
                        "src": "3812:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 78753,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "3777:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 78758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3777:48:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78759,
                  "nodeType": "ExpressionStatement",
                  "src": "3777:48:125"
                },
                {
                  "assignments": [
                    78761
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78761,
                      "mutability": "mutable",
                      "name": "bondsShorted2",
                      "nameLocation": "3883:13:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "3875:21:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78760,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3875:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78763,
                  "initialValue": {
                    "id": 78762,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 78702,
                    "src": "3899:14:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3875:38:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78765,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "3933:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78766,
                        "name": "bondsShorted2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78761,
                        "src": "3941:13:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78764,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "3923:9:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 78767,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3923:32:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 78768,
                  "nodeType": "ExpressionStatement",
                  "src": "3923:32:125"
                },
                {
                  "assignments": [
                    78770
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78770,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "4005:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "3997:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78769,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3997:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78772,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 78771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4020:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3997:35:125"
                },
                {
                  "assignments": [
                    78774
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78774,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "4050:11:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "4042:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78773,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4042:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78779,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78776,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "4077:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78777,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78770,
                        "src": "4082:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78775,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120238,
                        120268,
                        120300
                      ],
                      "referencedDeclaration": 120268,
                      "src": "4064:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 78778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4064:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4042:53:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 78783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 78781,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "4146:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 78782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4166:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4146:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78784,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78724,
                        "src": "4169:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 78780,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "4134:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 78785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4134:48:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78786,
                  "nodeType": "ExpressionStatement",
                  "src": "4134:48:125"
                },
                {
                  "assignments": [
                    78788
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78788,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "4255:26:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "4247:34:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78787,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4247:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78792,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78790,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78774,
                        "src": "4321:11:125",
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
                        }
                      ],
                      "id": 78789,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121438,
                      "src": "4284:23:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 78791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4284:58:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4247:95:125"
                },
                {
                  "assignments": [
                    78794,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78794,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "4395:18:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78826,
                      "src": "4387:26:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78793,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4387:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 78799,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78796,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "4435:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78797,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78774,
                        "src": "4440:11:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78795,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120341,
                        120366,
                        120393
                      ],
                      "referencedDeclaration": 120366,
                      "src": "4419:15:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 78798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4419:33:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4386:66:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78801,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78794,
                        "src": "4480:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78802,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78788,
                        "src": "4500:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 78803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4528:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 78800,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "4462:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 78804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4462:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78805,
                  "nodeType": "ExpressionStatement",
                  "src": "4462:70:125"
                },
                {
                  "expression": {
                    "id": 78810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78806,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78788,
                      "src": "4597:26:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78808,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78735,
                          "src": "4650:13:125",
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
                          }
                        ],
                        "id": 78807,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121438,
                        "src": "4626:23:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 78809,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4626:38:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4597:67:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78811,
                  "nodeType": "ExpressionStatement",
                  "src": "4597:67:125"
                },
                {
                  "expression": {
                    "id": 78818,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 78812,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78794,
                          "src": "4711:18:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 78813,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4710:22:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$",
                        "typeString": "tuple(uint256,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78815,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117531,
                          "src": "4751:5:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 78816,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78735,
                          "src": "4758:13:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 78814,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120341,
                          120366,
                          120393
                        ],
                        "referencedDeclaration": 120366,
                        "src": "4735:15:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 78817,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4735:37:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4710:62:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78819,
                  "nodeType": "ExpressionStatement",
                  "src": "4710:62:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78821,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78794,
                        "src": "4800:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78822,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78788,
                        "src": "4820:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 78823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4848:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 78820,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "4782:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 78824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4782:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78825,
                  "nodeType": "ExpressionStatement",
                  "src": "4782:70:125"
                }
              ]
            },
            "functionSelector": "35109249",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_short_short_lp",
            "nameLocation": "2845:31:125",
            "parameters": {
              "id": 78703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 78700,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "2894:17:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 78827,
                  "src": "2886:25:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78699,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2886:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78702,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "2929:14:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 78827,
                  "src": "2921:22:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2921:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2876:73:125"
            },
            "returnParameters": {
              "id": 78704,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2959:0:125"
            },
            "scope": 79330,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 78950,
            "nodeType": "FunctionDefinition",
            "src": "4865:2085:125",
            "nodes": [],
            "body": {
              "id": 78949,
              "nodeType": "Block",
              "src": "4981:1969:125",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 78840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78834,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78829,
                      "src": "5070:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 78837,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5125:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 78838,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5128:6:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          },
                          "value": "2.5e18"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          }
                        ],
                        "expression": {
                          "id": 78835,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78829,
                          "src": "5090:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5108:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "5090:34:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78839,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5090:45:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5070:65:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78841,
                  "nodeType": "ExpressionStatement",
                  "src": "5070:65:125"
                },
                {
                  "expression": {
                    "id": 78850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78842,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78831,
                      "src": "5186:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78845,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119641,
                          "src": "5248:26:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 78848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 78846,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5288:12:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 78847,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119641,
                            "src": "5303:26:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5288:41:125",
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
                          }
                        ],
                        "expression": {
                          "id": 78843,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78831,
                          "src": "5203:14:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78844,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5218:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "5203:31:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5203:136:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5186:153:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78851,
                  "nodeType": "ExpressionStatement",
                  "src": "5186:153:125"
                },
                {
                  "assignments": [
                    78853
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78853,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "5410:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5403:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 78852,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5403:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78858,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78856,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78829,
                        "src": "5432:17:125",
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
                        }
                      ],
                      "id": 78855,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5425:6:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 78854,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5425:6:125",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 78857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5425:25:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5403:47:125"
                },
                {
                  "assignments": [
                    78860
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78860,
                      "mutability": "mutable",
                      "name": "fixedRate",
                      "nameLocation": "5524:9:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5516:17:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78859,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5516:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78862,
                  "initialValue": {
                    "hexValue": "302e3130653138",
                    "id": 78861,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5536:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000000_by_1",
                      "typeString": "int_const 100000000000000000"
                    },
                    "value": "0.10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5516:27:125"
                },
                {
                  "assignments": [
                    78864
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78864,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "5607:16:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5599:24:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78863,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5599:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78866,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 78865,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5626:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5599:39:125"
                },
                {
                  "assignments": [
                    78868
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78868,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "5656:13:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5648:21:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78867,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5648:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78874,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78870,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "5683:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78871,
                        "name": "fixedRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78860,
                        "src": "5690:9:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78872,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78864,
                        "src": "5701:16:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                      "id": 78869,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "5672:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 78873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5672:46:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5648:70:125"
                },
                {
                  "assignments": [
                    78876
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78876,
                      "mutability": "mutable",
                      "name": "baseSpent",
                      "nameLocation": "5769:9:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5761:17:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78875,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5761:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78878,
                  "initialValue": {
                    "id": 78877,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 78831,
                    "src": "5781:14:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5761:34:125"
                },
                {
                  "assignments": [
                    78880,
                    78882
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78880,
                      "mutability": "mutable",
                      "name": "maturityTime",
                      "nameLocation": "5814:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5806:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78879,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5806:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 78882,
                      "mutability": "mutable",
                      "name": "bondsPurchased",
                      "nameLocation": "5836:14:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5828:22:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78881,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5828:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78887,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78884,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "5876:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78885,
                        "name": "baseSpent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78876,
                        "src": "5896:9:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78883,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "5854:8:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 78886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5854:61:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5805:110:125"
                },
                {
                  "assignments": [
                    78889
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78889,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "5965:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "5957:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78888,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5957:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78891,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 78890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5980:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5957:35:125"
                },
                {
                  "assignments": [
                    78893
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78893,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "6010:11:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "6002:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78892,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6002:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78898,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78895,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "6037:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78896,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78889,
                        "src": "6042:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78894,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120238,
                        120268,
                        120300
                      ],
                      "referencedDeclaration": 120268,
                      "src": "6024:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 78897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6024:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6002:53:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78900,
                        "name": "POSITION_DURATION",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119647,
                        "src": "6106:17:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78901,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78853,
                        "src": "6125:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 78899,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "6094:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 78902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6094:44:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78903,
                  "nodeType": "ExpressionStatement",
                  "src": "6094:44:125"
                },
                {
                  "assignments": [
                    78905
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78905,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "6211:26:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "6203:34:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78904,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6203:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78909,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78907,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78893,
                        "src": "6277:11:125",
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
                        }
                      ],
                      "id": 78906,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121438,
                      "src": "6240:23:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 78908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6240:58:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6203:95:125"
                },
                {
                  "assignments": [
                    78911,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78911,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "6393:18:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 78949,
                      "src": "6385:26:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78910,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6385:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 78916,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78913,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "6433:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78914,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78893,
                        "src": "6438:11:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 78912,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120341,
                        120366,
                        120393
                      ],
                      "referencedDeclaration": 120366,
                      "src": "6417:15:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 78915,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6417:33:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6384:66:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78918,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78911,
                        "src": "6478:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78919,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78905,
                        "src": "6498:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 78920,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6526:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 78917,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "6460:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 78921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6460:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78922,
                  "nodeType": "ExpressionStatement",
                  "src": "6460:70:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78924,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "6586:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78925,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78880,
                        "src": "6594:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78926,
                        "name": "bondsPurchased",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78882,
                        "src": "6608:14:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                      "id": 78923,
                      "name": "closeLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120691,
                        120717,
                        120745
                      ],
                      "referencedDeclaration": 120717,
                      "src": "6576:9:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 78927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6576:47:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78928,
                  "nodeType": "ExpressionStatement",
                  "src": "6576:47:125"
                },
                {
                  "expression": {
                    "id": 78933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78929,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78905,
                      "src": "6688:26:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78931,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78868,
                          "src": "6741:13:125",
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
                          }
                        ],
                        "id": 78930,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121438,
                        "src": "6717:23:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 78932,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6717:38:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6688:67:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78934,
                  "nodeType": "ExpressionStatement",
                  "src": "6688:67:125"
                },
                {
                  "expression": {
                    "id": 78941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 78935,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78911,
                          "src": "6802:18:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 78936,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "6801:22:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$",
                        "typeString": "tuple(uint256,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78938,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117531,
                          "src": "6842:5:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 78939,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78868,
                          "src": "6849:13:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 78937,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120341,
                          120366,
                          120393
                        ],
                        "referencedDeclaration": 120366,
                        "src": "6826:15:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 78940,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6826:37:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "6801:62:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78942,
                  "nodeType": "ExpressionStatement",
                  "src": "6801:62:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 78944,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78911,
                        "src": "6891:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78945,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78905,
                        "src": "6911:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 78946,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6939:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 78943,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "6873:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 78947,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6873:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 78948,
                  "nodeType": "ExpressionStatement",
                  "src": "6873:70:125"
                }
              ]
            },
            "functionSelector": "7949c523",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_long_lp",
            "nameLocation": "4874:24:125",
            "parameters": {
              "id": 78832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 78829,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "4916:17:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 78950,
                  "src": "4908:25:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78828,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4908:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78831,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "4951:14:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 78950,
                  "src": "4943:22:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78830,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4943:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4898:73:125"
            },
            "returnParameters": {
              "id": 78833,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4981:0:125"
            },
            "scope": 79330,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 79083,
            "nodeType": "FunctionDefinition",
            "src": "6956:2112:125",
            "nodes": [],
            "body": {
              "id": 79082,
              "nodeType": "Block",
              "src": "7077:1991:125",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 78963,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78957,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78952,
                      "src": "7166:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 78960,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7221:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 78961,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7224:6:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          },
                          "value": "2.5e18"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          }
                        ],
                        "expression": {
                          "id": 78958,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78952,
                          "src": "7186:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7204:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "7186:34:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78962,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7186:45:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7166:65:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78964,
                  "nodeType": "ExpressionStatement",
                  "src": "7166:65:125"
                },
                {
                  "expression": {
                    "id": 78973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 78965,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78954,
                      "src": "7282:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 78968,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119641,
                          "src": "7344:26:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 78971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 78969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7384:12:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 78970,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119641,
                            "src": "7399:26:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7384:41:125",
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
                          }
                        ],
                        "expression": {
                          "id": 78966,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78954,
                          "src": "7299:14:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 78967,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7314:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "7299:31:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 78972,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7299:136:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7282:153:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 78974,
                  "nodeType": "ExpressionStatement",
                  "src": "7282:153:125"
                },
                {
                  "assignments": [
                    78976
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78976,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "7506:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "7499:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 78975,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7499:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78981,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78979,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78952,
                        "src": "7528:17:125",
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
                        }
                      ],
                      "id": 78978,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7521:6:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 78977,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7521:6:125",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 78980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7521:25:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7499:47:125"
                },
                {
                  "assignments": [
                    78983
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78983,
                      "mutability": "mutable",
                      "name": "fixedRate",
                      "nameLocation": "7620:9:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "7612:17:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78982,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7612:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78985,
                  "initialValue": {
                    "hexValue": "302e3130653138",
                    "id": 78984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "7632:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000000_by_1",
                      "typeString": "int_const 100000000000000000"
                    },
                    "value": "0.10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7612:27:125"
                },
                {
                  "assignments": [
                    78987
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78987,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "7703:16:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "7695:24:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78986,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7695:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78989,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 78988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "7722:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7695:39:125"
                },
                {
                  "assignments": [
                    78991
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78991,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "7752:13:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "7744:21:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78990,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7744:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 78997,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 78993,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "7779:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 78994,
                        "name": "fixedRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78983,
                        "src": "7786:9:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 78995,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78987,
                        "src": "7797:16:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                      "id": 78992,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "7768:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 78996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7768:46:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7744:70:125"
                },
                {
                  "assignments": [
                    78999
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78999,
                      "mutability": "mutable",
                      "name": "baseSpent",
                      "nameLocation": "7865:9:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "7857:17:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 78998,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7857:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79003,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 79002,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 79000,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7877:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 79001,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 78954,
                      "src": "7892:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7877:29:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7857:49:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79005,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "7925:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79006,
                        "name": "baseSpent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78999,
                        "src": "7933:9:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79004,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "7916:8:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79007,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7916:27:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 79008,
                  "nodeType": "ExpressionStatement",
                  "src": "7916:27:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79012,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 79010,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "7998:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 79011,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8018:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "7998:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79013,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78976,
                        "src": "8021:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 79009,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "7986:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 79014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7986:48:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79015,
                  "nodeType": "ExpressionStatement",
                  "src": "7986:48:125"
                },
                {
                  "assignments": [
                    79017
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79017,
                      "mutability": "mutable",
                      "name": "baseSpent2",
                      "nameLocation": "8091:10:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "8083:18:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79016,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8083:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79019,
                  "initialValue": {
                    "id": 79018,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 78954,
                    "src": "8104:14:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8083:35:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79021,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "8137:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79022,
                        "name": "baseSpent2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79017,
                        "src": "8145:10:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79020,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "8128:8:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8128:28:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 79024,
                  "nodeType": "ExpressionStatement",
                  "src": "8128:28:125"
                },
                {
                  "assignments": [
                    79026
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79026,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "8206:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "8198:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79025,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8198:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79028,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 79027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "8221:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8198:35:125"
                },
                {
                  "assignments": [
                    79030
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79030,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "8251:11:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "8243:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79029,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8243:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79035,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79032,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "8278:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79033,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79026,
                        "src": "8283:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79031,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120238,
                        120268,
                        120300
                      ],
                      "referencedDeclaration": 120268,
                      "src": "8265:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 79034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8265:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8243:53:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 79037,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "8351:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 79038,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8371:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "8351:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79040,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78976,
                        "src": "8374:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 79036,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "8339:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 79041,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8339:48:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79042,
                  "nodeType": "ExpressionStatement",
                  "src": "8339:48:125"
                },
                {
                  "assignments": [
                    79044
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79044,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "8460:26:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "8452:34:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79043,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8452:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79048,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79046,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79030,
                        "src": "8526:11:125",
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
                        }
                      ],
                      "id": 79045,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121438,
                      "src": "8489:23:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 79047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8489:58:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8452:95:125"
                },
                {
                  "assignments": [
                    79050,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79050,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "8600:18:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79082,
                      "src": "8592:26:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79049,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8592:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 79055,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79052,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "8640:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79053,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79030,
                        "src": "8645:11:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79051,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120341,
                        120366,
                        120393
                      ],
                      "referencedDeclaration": 120366,
                      "src": "8624:15:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8624:33:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8591:66:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79057,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79050,
                        "src": "8685:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79058,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79044,
                        "src": "8705:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 79059,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8733:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 79056,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "8667:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 79060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8667:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79061,
                  "nodeType": "ExpressionStatement",
                  "src": "8667:70:125"
                },
                {
                  "expression": {
                    "id": 79066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 79062,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79044,
                      "src": "8806:26:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 79064,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78991,
                          "src": "8859:13:125",
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
                          }
                        ],
                        "id": 79063,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121438,
                        "src": "8835:23:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 79065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8835:38:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8806:67:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 79067,
                  "nodeType": "ExpressionStatement",
                  "src": "8806:67:125"
                },
                {
                  "expression": {
                    "id": 79074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 79068,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79050,
                          "src": "8920:18:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 79069,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "8919:22:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$",
                        "typeString": "tuple(uint256,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 79071,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117531,
                          "src": "8960:5:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 79072,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78991,
                          "src": "8967:13:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 79070,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120341,
                          120366,
                          120393
                        ],
                        "referencedDeclaration": 120366,
                        "src": "8944:15:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 79073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8944:37:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "8919:62:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79075,
                  "nodeType": "ExpressionStatement",
                  "src": "8919:62:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79077,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79050,
                        "src": "9009:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79078,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79044,
                        "src": "9029:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 79079,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9057:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 79076,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "8991:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 79080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8991:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79081,
                  "nodeType": "ExpressionStatement",
                  "src": "8991:70:125"
                }
              ]
            },
            "functionSelector": "42aa13ae",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_long_long_lp",
            "nameLocation": "6965:29:125",
            "parameters": {
              "id": 78955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 78952,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "7012:17:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 79083,
                  "src": "7004:25:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7004:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78954,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "7047:14:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 79083,
                  "src": "7039:22:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78953,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7039:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6994:73:125"
            },
            "returnParameters": {
              "id": 78956,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7077:0:125"
            },
            "scope": 79330,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 79201,
            "nodeType": "FunctionDefinition",
            "src": "9074:1870:125",
            "nodes": [],
            "body": {
              "id": 79200,
              "nodeType": "Block",
              "src": "9195:1749:125",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 79096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 79090,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79085,
                      "src": "9284:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 79093,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9339:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 79094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9342:6:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          },
                          "value": "2.5e18"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          }
                        ],
                        "expression": {
                          "id": 79091,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79085,
                          "src": "9304:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 79092,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9322:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125295,
                        "src": "9304:34:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                          "typeString": "function (int256,int256,int256) pure returns (int256)"
                        }
                      },
                      "id": 79095,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9304:45:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "9284:65:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 79097,
                  "nodeType": "ExpressionStatement",
                  "src": "9284:65:125"
                },
                {
                  "expression": {
                    "id": 79106,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 79098,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79087,
                      "src": "9400:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 79101,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119641,
                          "src": "9462:26:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 79104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 79102,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9502:12:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 79103,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119641,
                            "src": "9517:26:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9502:41:125",
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
                          }
                        ],
                        "expression": {
                          "id": 79099,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79087,
                          "src": "9417:14:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 79100,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9432:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "9417:31:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 79105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9417:136:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9400:153:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 79107,
                  "nodeType": "ExpressionStatement",
                  "src": "9400:153:125"
                },
                {
                  "assignments": [
                    79109
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79109,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "9617:16:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79200,
                      "src": "9609:24:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79108,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9609:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79111,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 79110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "9636:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9609:39:125"
                },
                {
                  "assignments": [
                    79113
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79113,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "9666:13:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79200,
                      "src": "9658:21:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79112,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9658:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79119,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79115,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "9693:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "302e31653138",
                        "id": 79116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9700:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        "value": "0.1e18"
                      },
                      {
                        "id": 79117,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79109,
                        "src": "9708:16:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79114,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "9682:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 79118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9682:43:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9658:67:125"
                },
                {
                  "assignments": [
                    79121
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79121,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "9777:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79200,
                      "src": "9769:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79120,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9769:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79125,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 79124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 79122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9792:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 79123,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79087,
                      "src": "9807:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9792:29:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9769:52:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79127,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "9841:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79128,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79121,
                        "src": "9849:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79126,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "9831:9:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9831:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 79130,
                  "nodeType": "ExpressionStatement",
                  "src": "9831:31:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 79132,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "9913:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 79133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9933:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "9913:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79135,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79085,
                        "src": "9936:17:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 79131,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "9901:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 79136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9901:53:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79137,
                  "nodeType": "ExpressionStatement",
                  "src": "9901:53:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79139,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "10012:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79140,
                        "name": "tradeSizeParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79087,
                        "src": "10020:14:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79138,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "10003:8:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10003:32:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 79142,
                  "nodeType": "ExpressionStatement",
                  "src": "10003:32:125"
                },
                {
                  "assignments": [
                    79144
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79144,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "10085:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79200,
                      "src": "10077:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79143,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10077:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79146,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 79145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "10100:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10077:35:125"
                },
                {
                  "assignments": [
                    79148
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79148,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "10130:11:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79200,
                      "src": "10122:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79147,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10122:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79153,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79150,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "10157:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79151,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79144,
                        "src": "10162:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79149,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120238,
                        120268,
                        120300
                      ],
                      "referencedDeclaration": 120268,
                      "src": "10144:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 79152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10144:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10122:53:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 79155,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "10226:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 79156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10246:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "10226:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79158,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79085,
                        "src": "10249:17:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 79154,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "10214:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 79159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10214:53:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79160,
                  "nodeType": "ExpressionStatement",
                  "src": "10214:53:125"
                },
                {
                  "assignments": [
                    79162
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79162,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "10340:26:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79200,
                      "src": "10332:34:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79161,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10332:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79166,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79164,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79148,
                        "src": "10406:11:125",
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
                        }
                      ],
                      "id": 79163,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121438,
                      "src": "10369:23:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 79165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10369:58:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10332:95:125"
                },
                {
                  "assignments": [
                    79168,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79168,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "10480:18:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79200,
                      "src": "10472:26:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79167,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10472:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 79173,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79170,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "10520:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79171,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79148,
                        "src": "10525:11:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79169,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120341,
                        120366,
                        120393
                      ],
                      "referencedDeclaration": 120366,
                      "src": "10504:15:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10504:33:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10471:66:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79175,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79168,
                        "src": "10565:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79176,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79162,
                        "src": "10585:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 79177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10613:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 79174,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "10547:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 79178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10547:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79179,
                  "nodeType": "ExpressionStatement",
                  "src": "10547:70:125"
                },
                {
                  "expression": {
                    "id": 79184,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 79180,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79162,
                      "src": "10682:26:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 79182,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79113,
                          "src": "10735:13:125",
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
                          }
                        ],
                        "id": 79181,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121438,
                        "src": "10711:23:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 79183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10711:38:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10682:67:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 79185,
                  "nodeType": "ExpressionStatement",
                  "src": "10682:67:125"
                },
                {
                  "expression": {
                    "id": 79192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 79186,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79168,
                          "src": "10796:18:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 79187,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "10795:22:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$",
                        "typeString": "tuple(uint256,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 79189,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117531,
                          "src": "10836:5:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 79190,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79113,
                          "src": "10843:13:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 79188,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          120341,
                          120366,
                          120393
                        ],
                        "referencedDeclaration": 120366,
                        "src": "10820:15:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 79191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10820:37:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "10795:62:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79193,
                  "nodeType": "ExpressionStatement",
                  "src": "10795:62:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79195,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79168,
                        "src": "10885:18:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79196,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79162,
                        "src": "10905:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 79197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10933:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 79194,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "10867:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 79198,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10867:70:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79199,
                  "nodeType": "ExpressionStatement",
                  "src": "10867:70:125"
                }
              ]
            },
            "functionSelector": "48af0581",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_short_long_lp",
            "nameLocation": "9083:30:125",
            "parameters": {
              "id": 79088,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79085,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "9130:17:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 79201,
                  "src": "9123:24:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 79084,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9123:6:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 79087,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "9165:14:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 79201,
                  "src": "9157:22:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79086,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9157:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9113:72:125"
            },
            "returnParameters": {
              "id": 79089,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9195:0:125"
            },
            "scope": 79330,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 79329,
            "nodeType": "FunctionDefinition",
            "src": "10950:2204:125",
            "nodes": [],
            "body": {
              "id": 79328,
              "nodeType": "Block",
              "src": "11072:2082:125",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 79214,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 79208,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79203,
                      "src": "11161:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 79211,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11216:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 79212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11219:6:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          },
                          "value": "2.5e18"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_2500000000000000000_by_1",
                            "typeString": "int_const 2500000000000000000"
                          }
                        ],
                        "expression": {
                          "id": 79209,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79203,
                          "src": "11181:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 79210,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11199:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "11181:34:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 79213,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11181:45:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11161:65:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 79215,
                  "nodeType": "ExpressionStatement",
                  "src": "11161:65:125"
                },
                {
                  "expression": {
                    "id": 79224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 79216,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79205,
                      "src": "11277:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 79219,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119641,
                          "src": "11339:26:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 79222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 79220,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11379:12:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 79221,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119641,
                            "src": "11394:26:125",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11379:41:125",
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
                          }
                        ],
                        "expression": {
                          "id": 79217,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79205,
                          "src": "11294:14:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 79218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11309:16:125",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 125249,
                        "src": "11294:31:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 79223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11294:136:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11277:153:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 79225,
                  "nodeType": "ExpressionStatement",
                  "src": "11277:153:125"
                },
                {
                  "assignments": [
                    79227
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79227,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "11501:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "11494:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 79226,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11494:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79232,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79230,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79203,
                        "src": "11523:17:125",
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
                        }
                      ],
                      "id": 79229,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11516:6:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 79228,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11516:6:125",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 79231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11516:25:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11494:47:125"
                },
                {
                  "assignments": [
                    79234
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79234,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "11605:16:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "11597:24:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79233,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11597:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79236,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 79235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "11624:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11597:39:125"
                },
                {
                  "assignments": [
                    79238
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79238,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "11654:13:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "11646:21:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79237,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11646:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79244,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79240,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "11681:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "302e3130653138",
                        "id": 79241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11688:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        "value": "0.10e18"
                      },
                      {
                        "id": 79242,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79234,
                        "src": "11697:16:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79239,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "11670:10:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 79243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11670:44:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11646:68:125"
                },
                {
                  "assignments": [
                    79246
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79246,
                      "mutability": "mutable",
                      "name": "baseSpent",
                      "nameLocation": "11765:9:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "11757:17:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79245,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11757:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79250,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 79249,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 79247,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11777:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 79248,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79205,
                      "src": "11792:14:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11777:29:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11757:49:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79252,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "11825:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79253,
                        "name": "baseSpent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79246,
                        "src": "11833:9:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79251,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "11816:8:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11816:27:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 79255,
                  "nodeType": "ExpressionStatement",
                  "src": "11816:27:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 79257,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "11898:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 79258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11918:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "11898:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79260,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79227,
                        "src": "11921:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 79256,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "11886:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 79261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11886:48:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79262,
                  "nodeType": "ExpressionStatement",
                  "src": "11886:48:125"
                },
                {
                  "assignments": [
                    79264
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79264,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "11986:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "11978:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79263,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11978:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79266,
                  "initialValue": {
                    "id": 79265,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 79205,
                    "src": "12001:14:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11978:37:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79268,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117535,
                        "src": "12035:6:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79269,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79264,
                        "src": "12043:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79267,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "12025:9:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12025:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 79271,
                  "nodeType": "ExpressionStatement",
                  "src": "12025:31:125"
                },
                {
                  "assignments": [
                    79273
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79273,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "12106:12:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "12098:20:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79272,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12098:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79275,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 79274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "12121:12:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12098:35:125"
                },
                {
                  "assignments": [
                    79277
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79277,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "12151:11:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "12143:19:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79276,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12143:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79282,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79279,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "12178:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79280,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79273,
                        "src": "12183:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79278,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120238,
                        120268,
                        120300
                      ],
                      "referencedDeclaration": 120268,
                      "src": "12165:12:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 79281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12165:31:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12143:53:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79286,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 79284,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119647,
                          "src": "12251:17:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 79285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12271:1:125",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "12251:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79287,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79227,
                        "src": "12274:12:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 79283,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "12239:11:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 79288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12239:48:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79289,
                  "nodeType": "ExpressionStatement",
                  "src": "12239:48:125"
                },
                {
                  "assignments": [
                    79291
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79291,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "12360:26:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "12352:34:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79290,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12352:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 79295,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79293,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79277,
                        "src": "12426:11:125",
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
                        }
                      ],
                      "id": 79292,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121438,
                      "src": "12389:23:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 79294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12389:58:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12352:95:125"
                },
                {
                  "assignments": [
                    79297,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79297,
                      "mutability": "mutable",
                      "name": "bobWithdrawalProceeds",
                      "nameLocation": "12500:21:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "12492:29:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79296,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12492:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 79302,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79299,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "12543:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79300,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79277,
                        "src": "12548:11:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79298,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120341,
                        120366,
                        120393
                      ],
                      "referencedDeclaration": 120366,
                      "src": "12527:15:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12527:33:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12491:69:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79304,
                        "name": "bobWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79297,
                        "src": "12601:21:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79305,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79291,
                        "src": "12636:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 79306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12676:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 79303,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "12570:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 79307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12570:119:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79308,
                  "nodeType": "ExpressionStatement",
                  "src": "12570:119:125"
                },
                {
                  "expression": {
                    "id": 79313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 79309,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79291,
                      "src": "12754:26:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 79311,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79238,
                          "src": "12807:13:125",
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
                          }
                        ],
                        "id": 79310,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121438,
                        "src": "12783:23:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 79312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12783:38:125",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12754:67:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 79314,
                  "nodeType": "ExpressionStatement",
                  "src": "12754:67:125"
                },
                {
                  "assignments": [
                    79316,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79316,
                      "mutability": "mutable",
                      "name": "aliceWithdrawalProceeds",
                      "nameLocation": "12916:23:125",
                      "nodeType": "VariableDeclaration",
                      "scope": 79328,
                      "src": "12908:31:125",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 79315,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12908:7:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 79321,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 79318,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "12974:5:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 79319,
                        "name": "aliceLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79238,
                        "src": "12993:13:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 79317,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120341,
                        120366,
                        120393
                      ],
                      "referencedDeclaration": 120366,
                      "src": "12945:15:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 79320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12945:71:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12907:109:125"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 79323,
                        "name": "aliceWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79316,
                        "src": "13057:23:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 79324,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79291,
                        "src": "13094:26:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 79325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13134:3:125",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        },
                        "value": "1e4"
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
                          "typeIdentifier": "t_rational_10000_by_1",
                          "typeString": "int_const 10000"
                        }
                      ],
                      "id": 79322,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        18330,
                        18366,
                        18511,
                        18547
                      ],
                      "referencedDeclaration": 18330,
                      "src": "13026:17:125",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 79326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13026:121:125",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79327,
                  "nodeType": "ExpressionStatement",
                  "src": "13026:121:125"
                }
              ]
            },
            "functionSelector": "51cf9a79",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_long_short_lp",
            "nameLocation": "10959:30:125",
            "parameters": {
              "id": 79206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 79203,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "11007:17:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 79329,
                  "src": "10999:25:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79202,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10999:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 79205,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "11042:14:125",
                  "nodeType": "VariableDeclaration",
                  "scope": 79329,
                  "src": "11034:22:125",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79204,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11034:7:125",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10989:73:125"
            },
            "returnParameters": {
              "id": 79207,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11072:0:125"
            },
            "scope": 79330,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 78539,
              "name": "HyperdriveTest",
              "nameLocations": [
                "370:14:125"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 121861,
              "src": "370:14:125"
            },
            "id": 78540,
            "nodeType": "InheritanceSpecifier",
            "src": "370:14:125"
          }
        ],
        "canonicalName": "LPFairnessTest",
        "contractDependencies": [
          12669,
          14346,
          14422
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          79330,
          121861,
          118067,
          27410,
          27359,
          23097,
          22807,
          22043,
          19989,
          19269,
          17737,
          17803,
          17800
        ],
        "name": "LPFairnessTest",
        "nameLocation": "352:14:125",
        "scope": 79331,
        "usedErrors": [
          7330,
          7416,
          7418,
          7425,
          117551,
          117553
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 125
} as const;
