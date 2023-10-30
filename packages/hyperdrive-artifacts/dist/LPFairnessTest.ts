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
          "name": "withdrawalShareAmount",
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
    "object": "0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000194565b602990620000c09082620002f8565b5060405163f877cb1960e01b815260206004820152600e60248201526d11d3d154931257d49410d7d5549360921b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015a919081019062000194565b602a90620001699082620002f8565b503480156200017757600080fd5b50620003c4565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a857600080fd5b82516001600160401b0380821115620001c057600080fd5b818501915085601f830112620001d557600080fd5b815181811115620001ea57620001ea6200017e565b604051601f8201601f19908116603f011681019083821181831017156200021557620002156200017e565b8160405282815288868487010111156200022e57600080fd5b600093505b8284101562000252578484018601518185018701529285019262000233565b600086848301015280965050505050505092915050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f357600081815260208120601f850160051c81016020861015620002ce5750805b601f850160051c820191505b81811015620002ef57828155600101620002da565b5050505b505050565b81516001600160401b038111156200031457620003146200017e565b6200032c8162000325845462000269565b84620002a5565b602080601f8311600181146200036457600084156200034b5750858301515b600019600386901b1c1916600185901b178555620002ef565b600085815260208120601f198616915b82811015620003955788860151825594840194600190910190840162000374565b5085821015620003b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6201132280620003d56000396000f3fe60806040523480156200001157600080fd5b5060043610620001515760003560e01c8063507ffba511620000c7578063916a17c61162000086578063916a17c614620002bc578063ab75e7c314620002c6578063b5508aa914620002dd578063ba414fa614620002e7578063e20c9f711462000302578063fa7626d4146200030c57600080fd5b8063507ffba5146200022c57806351cf9a79146200025c57806366d9a9a014620002735780637949c523146200028c57806385226c8114620002a357600080fd5b80633e5e0d2611620001145780633e5e0d2614620001d35780633e5e3c2314620001ea5780633f7286f414620001f457806342aa13ae14620001fe57806348af0581146200021557600080fd5b80630a9254e414620001565780630ce4e17414620001625780631071676014620001795780631ed7831c14620001a35780633510924914620001bc575b600080fd5b620001606200031a565b005b620001606200017336600462005559565b6200035f565b620001906200018a36600462005592565b620004d6565b6040519081526020015b60405180910390f35b620001ad62000560565b6040516200019a9190620055e4565b62000160620001cd36600462005559565b620005c4565b62000190620001e436600462005633565b6200076e565b620001ad620009d1565b620001ad62000a33565b620001606200020f36600462005559565b62000a95565b620001606200022636600462005559565b62000c07565b620002436200023d366004620056f7565b62000d9d565b6040516001600160a01b0390911681526020016200019a565b620001606200026d36600462005559565b62000eb3565b6200027d62001045565b6040516200019a9190620057b2565b620001606200029d36600462005559565b62001138565b620002ad620012aa565b6040516200019a9190620058bd565b6200027d62001384565b62000160620002d736600462005923565b6200146e565b620002ad620017af565b620002f162001889565b60405190151581526020016200019a565b620001ad620019b6565b600754620002f19060ff1681565b6200032462001a18565b60006200033866b1a2bc2ec5000062001e8f565b620f424060408201526022549091506200035c906001600160a01b03168262001f55565b50565b620003758260006722b1c8c1227a0000620020c3565b9150620003a366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b839190620020c3565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620003db906001600160a01b031684846200214f565b601e549091508590600090620003fb906001600160a01b0316836200218c565b50601d549091506a0422ca8b0a00a4250000009060009062000427906001600160a01b031683620021d2565b9050620004396301e133808962002217565b60006200044682620022f1565b601d5490915060009062000464906001600160a01b0316846200288e565b509050620004768183612710620028b6565b601e546200048f906001600160a01b0316868862002a43565b506200049b87620022f1565b601c54909250620004b6906001600160a01b0316886200288e565b509050620004c88183612710620028b6565b505050505050505050505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200055691869186918216906370a0823190602401602060405180830381865afa15801562000529573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200054f91906200597c565b856200076e565b90505b9392505050565b60606014805480602002602001604051908101604052809291908181526020018280548015620005ba57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116200059b575b5050505050905090565b620005da8260006722b1c8c1227a0000620020c3565b9150620005ff66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c5490915082906a0422ca8b0a00a4250000009060009062000635906001600160a01b031667016345785d8a0000846200214f565b9050600062000650856a0422ca8b0a00a42500000062005966565b601e549091506200066b906001600160a01b0316826200218c565b506200068a90506200068360026301e13380620059ac565b8562002217565b601e548590620006a4906001600160a01b0316826200218c565b5050601d546a0422ca8b0a00a42500000090600090620006ce906001600160a01b031683620021d2565b9050620006ec620006e560026301e13380620059ac565b8862002217565b6000620006f982620022f1565b601d5490915060009062000717906001600160a01b0316846200288e565b509050620007298183612710620028b6565b6200073487620022f1565b601c549092506200074f906001600160a01b0316886200288e565b509050620007618183612710620028b6565b5050505050505050505050565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa158015620007ba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007e091906200597c565b905080841115620008045760405163188c93a560e31b815260040160405180910390fd5b6000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200085257600080fd5b505af115801562000867573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0389166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b158015620008bc57600080fd5b505af1158015620008d1573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a76400006024820152600080516020620111be833981519152925063c88a5e6d9150604401600060405180830381600087803b1580156200093457600080fd5b505af115801562000949573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af11580156200099d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009c39190620059c3565b50839150505b949350505050565b60606016805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b60606015805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62000aab8260006722b1c8c1227a0000620020c3565b915062000ad066038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c54909150829067016345785d8a0000906a0422ca8b0a00a4250000009060009062000b08906001600160a01b031684846200214f565b9050600062000b23866a0422ca8b0a00a42500000062005966565b601e5490915062000b3e906001600160a01b03168262002a6b565b5062000b5d905062000b5660026301e13380620059ac565b8662002217565b601e54869062000b77906001600160a01b03168262002a6b565b5050601d546a0422ca8b0a00a4250000009060009062000ba1906001600160a01b031683620021d2565b905062000bbf62000bb860026301e13380620059ac565b8962002217565b600062000bcc82620022f1565b601d5490915060009062000bea906001600160a01b0316846200288e565b50905062000bfc8183612710620028b6565b6200049b87620022f1565b62000c1d8260006722b1c8c1227a000062002aa7565b915062000c4266038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c549091506a0422ca8b0a00a4250000009060009062000c76906001600160a01b031667016345785d8a0000846200214f565b9050600062000c91846a0422ca8b0a00a42500000062005966565b601e5490915062000cac906001600160a01b0316826200218c565b5062000cc4905062000b5660026301e13380620059ac565b601e5462000cdc906001600160a01b03168562002a6b565b5050601d546a0422ca8b0a00a4250000009060009062000d06906001600160a01b031683620021d2565b905062000d1d620006e560026301e13380620059ac565b600062000d2a82620022f1565b601d5490915060009062000d48906001600160a01b0316846200288e565b50905062000d5a8183612710620028b6565b62000d6586620022f1565b601c5490925062000d80906001600160a01b0316876200288e565b50905062000d928183612710620028b6565b505050505050505050565b60008160405160200162000db29190620059e7565b60408051601f198184030181529082905280516020909101206318caf8e360e31b82529150600080516020620111be8339815191529063c657c7189062000e009084908690600401620059fc565b600060405180830381600087803b15801562000e1b57600080fd5b505af115801562000e30573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab24000006024820152600080516020620111be833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000e9557600080fd5b505af115801562000eaa573d6000803e3d6000fd5b50505050919050565b62000ec98260006722b1c8c1227a0000620020c3565b915062000eee66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c5490915082906a0422ca8b0a00a4250000009060009062000f24906001600160a01b031667016345785d8a0000846200214f565b9050600062000f3f856a0422ca8b0a00a42500000062005966565b601e5490915062000f5a906001600160a01b03168262002a6b565b5062000f7290506200068360026301e13380620059ac565b601e54859062000f8c906001600160a01b0316826200218c565b5050601d546a0422ca8b0a00a4250000009060009062000fb6906001600160a01b031683620021d2565b905062000fcd620006e560026301e13380620059ac565b600062000fda82620022f1565b601d5490915060009062000ff8906001600160a01b0316846200288e565b5090506200100a8183612710620028b6565b6200101587620022f1565b601c5490925060009062001033906001600160a01b0316896200288e565b509050620004c88184612710620028b6565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200111657602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620010d75790505b5050505050815250508152602001906001019062001069565b50505050905090565b6200114e8260006722b1c8c1227a0000620020c3565b91506200117366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620011ab906001600160a01b031684846200214f565b601e5490915085906000908190620011cd906001600160a01b03168462002a6b565b601d5491935091506a0422ca8b0a00a42500000090600090620011fa906001600160a01b031683620021d2565b90506200120c6301e133808a62002217565b60006200121982620022f1565b601d5490915060009062001237906001600160a01b0316846200288e565b509050620012498183612710620028b6565b601e5462001262906001600160a01b0316878762002b3e565b506200126e88620022f1565b601c5490925062001289906001600160a01b0316896200288e565b5090506200129b8183612710620028b6565b50505050505050505050505050565b60606018805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620012f09062005a22565b80601f01602080910402602001604051908101604052809291908181526020018280546200131e9062005a22565b80156200136f5780601f1062001343576101008083540402835291602001916200136f565b820191906000526020600020905b8154815290600101906020018083116200135157829003601f168201915b505050505081526020019060010190620012ce565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200145557602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620014165790505b50505050508152505081526020019060010190620013a8565b60008212801590620014a857620014a284831015604051806060016040528060368152602001620112b76036913962002b66565b620014cf565b620014cf828511604051806060016040528060278152602001620111fe6027913962002b66565b600081620014de5784620014ea565b620014ea848662005a58565b905060008215620014fc578562001513565b620015078562005a6e565b62001513908762005966565b9050808410806200152357508184115b15620015a15762001561848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002ba3565b62001599848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002be5565b505050505050565b8215620016a1576000620015b6878662005966565b905085811015620016745760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a20257300000000000060208201526200160c9062001606838962005966565b62002c22565b6200163d6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002c6b565b6200166e6040518060400160405280600d81526020016c4e65772044656c74613a20257360981b8152508262002c22565b6200169a565b6200169a8386604051806060016040528060298152602001620112256029913962002cb4565b5062001599565b6000620016af858862005966565b9050620016bc8662005a6e565b8110156200178057620017176040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200170b9062005a6e565b62001606919062005966565b620017486040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002c6b565b6200177a6040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b8152508262002c22565b620017a6565b620017a682866040518060600160405280602981526020016201124e6029913962002cb4565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620017f59062005a22565b80601f0160208091040260200160405190810160405280929190818152602001828054620018239062005a22565b8015620018745780601f10620018485761010080835404028352916020019162001874565b820191906000526020600020905b8154815290600101906020018083116200185657829003601f168201915b505050505081526020019060010190620017d3565b600754600090610100900460ff1615620018ac5750600754610100900460ff1690565b6000600080516020620111be8339815191523b15620019b15760408051600080516020620111be833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001933917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800162005a8d565b60408051601f19818403018152908290526200194f9162005ac0565b6000604051808303816000865af19150503d80600081146200198e576040519150601f19603f3d011682016040523d82523d6000602084013e62001993565b606091505b5091505080806020019051810190620019ad9190620059c3565b9150505b919050565b60606013805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62001a2262002cf0565b601c546040516303223eab60e11b81526001600160a01b039091166004820152600080516020620111be833981519152906306447d5690602401600060405180830381600087803b15801562001a7757600080fd5b505af115801562001a8c573d6000803e3d6000fd5b50505050601260008060405162001aa39062005490565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f08015801562001b19573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e13380815260200162015180815260200162001be78462002fd0565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a09092019190915251909150600090829062001c37906200549e565b62001c43919062005b99565b604051809103906000f08015801562001c60573d6000803e3d6000fd5b509050818160405162001c7390620054ac565b62001c8092919062005baa565b604051809103906000f08015801562001c9d573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001d1257600080fd5b505af115801562001d27573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b039091166004820152600080516020620111be83398151915293506306447d56925001600060405180830381600087803b15801562001d7f57600080fd5b505af115801562001d94573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b15801562001de957600080fd5b505af115801562001dfe573d6000803e3d6000fd5b5050602b5460ff16915062001e89905057600080516020620111be83398151915263e5d6bf0262001e356301e13380600362005bd4565b6040518263ffffffff1660e01b815260040162001e5491815260200190565b600060405180830381600087803b15801562001e6f57600080fd5b505af115801562001e84573d6000803e3d6000fd5b505050505b50505050565b62001e99620054ba565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c0810162001f168562002fd0565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b6000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001fa357600080fd5b505af115801562001fb8573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0385166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200200d57600080fd5b505af115801562002022573d6000803e3d6000fd5b5050505060008160405162002037906200549e565b62002043919062005b99565b604051809103906000f08015801562002060573d6000803e3d6000fd5b50905081816040516200207390620054ac565b6200208092919062005baa565b604051809103906000f0801580156200209d573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b6000818311156200210c5760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b60448201526064015b60405180910390fd5b60006200211a848462005966565b6200212790600162005a58565b9050600062002137828762005bee565b905062002145858262005a58565b9695505050505050565b6000620005568484846040518060a0016040528060011515815260200187815260200160008152602001600081526020016000198152506200301d565b600080620021c784846040518060a0016040528060011515815260200187815260200160008152602001600081526020018781525062003391565b915091509250929050565b60006200220e83836040518060a001604052806001151581526020018681526020016000815260200160008152602001600019815250620037d3565b90505b92915050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b1580156200226557600080fd5b505af11580156200227a573d6000803e3d6000fd5b50600080516020620111be833981519152925063e5d6bf029150620022a29050844262005a58565b6040518263ffffffff1660e01b8152600401620022c191815260200190565b600060405180830381600087803b158015620022dc57600080fd5b505af115801562001599573d6000803e3d6000fd5b6000806000805160206201127783398151915260001c6001600160a01b0316639711715a6040518163ffffffff1660e01b81526004016020604051808303816000875af115801562002347573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200236d91906200597c565b602c549091506001600160a01b031663ed64bab26200238c8262003b5d565b6040518263ffffffff1660e01b8152600401620023ab91815260200190565b600060405180830381600087803b158015620023c657600080fd5b505af1158015620023db573d6000803e3d6000fd5b5050602c5460009250620023f991506001600160a01b031662003be1565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002452573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002478919062005c05565b602c546080820151604051630b1b4b1760e41b81529293506000926001600160a01b039092169163b1b4b17091620024b69160040190815260200190565b602060405180830381865afa158015620024d4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620024fa91906200597c565b602c5460405163bd85b03960e01b8152600060048201529192506200257b9188916001600160a01b03169063bd85b03990602401602060405180830381865afa1580156200254c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200257291906200597c565b83919062003d9e565b602c549091506001600160a01b0316638120a3e26200259a8362005a6e565b6040518263ffffffff1660e01b8152600401620025b991815260200190565b600060405180830381600087803b158015620025d457600080fd5b505af1158015620025e9573d6000803e3d6000fd5b5050602c54600092506200260791506001600160a01b031662003be1565b602c5460405163bd85b03960e01b81526000600482018190529293506001600160a01b039091169063bd85b03990602401602060405180830381865afa15801562002656573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200267c91906200597c565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b031663fba560086040518163ffffffff1660e01b81526004016040805180830381865afa158015620026d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620026f9919062005ccb565b51602c5460405163bd85b03960e01b8152600360f81b60048201526001600160801b03909216916001600160a01b039091169063bd85b03990602401602060405180830381865afa15801562002753573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200277991906200597c565b62002785919062005966565b9050600062002795828462005a58565b90506000620027a682868a62003d9e565b9050620027b48b8362005d2e565b620027c0908262005d2e565b90506000811215620027f8576000620027e6620027dd8362005a6e565b8a908562003d9e565b9050620027f4818862005966565b9650505b604051631135fc2960e21b8152600481018a9052600080516020620111be833981519152906344d7f0a4906024016020604051808303816000875af115801562002846573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200286c9190620059c3565b5060808701516200287f90879062003dbd565b9b9a5050505050505050505050565b600080620021c784846040518060400160405280600115158152602001600081525062003dd4565b6000620028c4848462003f35565b90508181111562001e89576000805160206201119e833981519152604051620029299060208082526022908201527f4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b6060820152602081018690529051600080516020620112978339815191529181900360800190a160408051818152600a81830152690808080808149a59da1d60b21b6060820152602081018590529051600080516020620112978339815191529181900360800190a160408051818152600a8183015269204d61782044656c746160b01b6060820152602081018490529051600080516020620112978339815191529181900360800190a160408051818152600a8183015269202020202044656c746160b01b6060820152602081018390529051600080516020620112978339815191529181900360800190a162001e8962003f5d565b6000620005568484846040518060400160405280600115158152602001600081525062004066565b600080620021c784846040518060a0016040528060011515815260200187815260200160008152602001878152602001600019815250620041c8565b60008183131562002aec5760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b604482015260640162002103565b600062002afa848462005d2e565b62002b0790600162005d58565b9050600062002b17828762005d83565b9050600081121562002b325762002b2f828262005d58565b90505b62002145858262005d58565b6000620005568484846040518060400160405280600115158152602001600081525062004545565b8162002b9f57600080516020620111de8339815191528160405162002b8c919062005d9a565b60405180910390a162002b9f8262004658565b5050565b8183101562002be057600080516020620111de8339815191528160405162002bcc919062005d9a565b60405180910390a162002be08383620046bf565b505050565b8183111562002be057600080516020620111de8339815191528160405162002c0e919062005d9a565b60405180910390a162002be08383620047bb565b62002b9f828260405160240162002c3b92919062005dcb565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526200481e565b62002b9f828260405160240162002c8492919062005dcb565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b1790526200481e565b81831462002be057600080516020620111de8339815191528160405162002cdc919062005d9a565b60405180910390a162002be0838362004829565b62002d1860405180604001604052806005815260200164616c69636560d81b81525062000d9d565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b602082015262002d5d9062000d9d565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b602082015262002da59062000d9d565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b602082015262002dea9062000d9d565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b602082015262002e2f9062000d9d565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062002e80604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000d9d565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b602082015262002ec89062000d9d565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b602082015262002f169062000d9d565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b602082015262002f629062000d9d565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b602082015262002faa9062000d9d565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b6000806200300762002ff762002fe885606462005bd4565b66a5bbed86c5a0009062003dbd565b6748cd4072281e00009062004919565b905062000559670de0b6b3a76400008262004919565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200306d57600080fd5b505af115801562003082573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b158015620030d757600080fd5b505af1158015620030ec573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003151573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003177919062005e5c565b516001600160a01b03161480156200318d575081515b156200322057602c5460208301518351604051632002b33360e01b81526001600160a01b0390931692632002b3339291620031d29188918a918c919060040162005f1e565b60206040518083038185885af1158015620031f1573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200321891906200597c565b9050620009c9565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200327157600080fd5b505af115801562003286573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af1158015620032eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620033119190620059c3565b50602c548251604051632002b33360e01b81526001600160a01b0390921691632002b333916200334b91879189918b919060040162005f1e565b6020604051808303816000875af11580156200336b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200321891906200597c565b6000806000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620033e257600080fd5b505af1158015620033f7573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200344c57600080fd5b505af115801562003461573d6000803e3d6000fd5b5050602c546200347d92506001600160a01b0316905062004930565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620034f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003518919062005e5c565b516001600160a01b03161480156200352e575082515b15620035cd57602c54602084015160808501516040808701518751915163a179403b60e01b81526001600160a01b039095169463a179403b94936200357d938b9391928d919060040162005f44565b604080518083038185885af11580156200359b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620035c2919062005f72565b9092509050620037cb565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200361e57600080fd5b505af115801562003633573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003698573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620036be9190620059c3565b50602c5460808401516040808601518651915163a179403b60e01b81526001600160a01b039094169363a179403b9362003702938a9391928c919060040162005f44565b60408051808303816000875af115801562003721573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003747919062005f72565b602b54602086015192945090925061010090046001600160a01b0316906342966c68906200377790849062005966565b6040518263ffffffff1660e01b81526004016200379691815260200190565b600060405180830381600087803b158015620037b157600080fd5b505af1158015620037c6573d6000803e3d6000fd5b505050505b935093915050565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200382357600080fd5b505af115801562003838573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0387166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200388d57600080fd5b505af1158015620038a2573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003907573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200392d919062005e5c565b516001600160a01b031614801562003943575081515b15620039e157602c54602083015160608401516080850151855160405163c326a90360e01b81526001600160a01b039095169463c326a903949362003993938a93919290918c9160040162005f44565b60206040518083038185885af1158015620039b2573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620039d991906200597c565b905062000559565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562003a3257600080fd5b505af115801562003a47573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003aac573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ad29190620059c3565b50602c5460608301516080840151845160405163c326a90360e01b81526001600160a01b039094169363c326a9039362003b17938993919290918b9160040162005f44565b6020604051808303816000875af115801562003b37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620039d991906200597c565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003b9f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003bc5919062005e5c565b60a0015162003bd5904262005bee565b62002211904262005966565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003c24573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003c4a919062005e5c565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562003c8e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003cb4919062005c05565b9050620009c9816080015162003d976040518061016001604052808560000151815260200185602001518152602001856040015181526020018560800151815260200186602001518152602001866040015181526020018660c0015181526020018560a00151815260200162003d528962003d4c6ec097ce7bc90715b34b9f10000000008960c00151620049b390919063ffffffff16565b620049ca565b81526020018560e00151815260200162003d8f8962003d4c6ec097ce7bc90715b34b9f1000000000896101000151620049b390919063ffffffff16565b905262004a75565b9062003dbd565b600082600019048411830215820262003db657600080fd5b5091020490565b60006200220e8383670de0b6b3a764000062003d9e565b6000806000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562003e2557600080fd5b505af115801562003e3a573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b15801562003e8f57600080fd5b505af115801562003ea4573d6000803e3d6000fd5b5050602c546020860151865160405163c23632a760e01b81526001600160a01b03909316945063c23632a7935062003ee4928992918b9160040162005f1e565b60408051808303816000875af115801562003f03573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003f29919062005f72565b91509150935093915050565b600081831162003f515762003f4b838362005966565b6200220e565b6200220e828462005966565b600080516020620111be8339815191523b15620040555760408051600080516020620111be833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f198184030181529082905262003ff0929160200162005a8d565b60408051601f19818403018152908290526200400c9162005ac0565b6000604051808303816000865af19150503d80600081146200404b576040519150601f19603f3d011682016040523d82523d6000602084013e62004050565b606091505b505050505b6007805461ff001916610100179055565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620040b657600080fd5b505af1158015620040cb573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200412057600080fd5b505af115801562004135573d6000803e3d6000fd5b5050602c5460208501518551604051636f8c3a5b60e01b81526001600160a01b039093169450636f8c3a5b935062004179928992899290918c919060040162005f44565b6020604051808303816000875af115801562004199573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620041bf91906200597c565b95945050505050565b6000806000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200421957600080fd5b505af11580156200422e573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200428357600080fd5b505af115801562004298573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa158015620042fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004323919062005e5c565b516001600160a01b031614801562004339575082515b15620043d757602c54602084015160608501516040808701518751915163036d741560e11b81526001600160a01b03909516946306dae82a949362004388938b9391928d919060040162005f44565b604080518083038185885af1158015620043a6573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620043cd919062005f72565b91509150620037cb565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200442257600080fd5b505af115801562004437573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562004496573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620044bc9190620059c3565b50602c5460608401516040808601518651915163036d741560e11b81526001600160a01b03909416936306dae82a9362004500938a9391928c919060040162005f44565b60408051808303816000875af11580156200451f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620043cd919062005f72565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200459557600080fd5b505af1158015620045aa573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b158015620045ff57600080fd5b505af115801562004614573d6000803e3d6000fd5b5050602c546020850151855160405163fa3fcea760e01b81526001600160a01b03909316945063fa3fcea7935062004179928992899290918c919060040162005f44565b806200035c576000805160206201119e833981519152604051620046ad9060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a16200035c62003f5d565b8082101562002b9f576000805160206201119e833981519152604051620047229060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b6060820152602081018490529051600080516020620112978339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b60608201526020810182905260008051602062011297833981519152906080015b60405180910390a162002b9f62003f5d565b8082111562002b9f576000805160206201119e833981519152604051620047229060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b6200035c8162004d17565b80821462002b9f576000805160206201119e8339815191526040516200488b9060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b6060820152602081018490529051600080516020620112978339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b6060820152602081018290526000805160206201129783398151915290608001620047a9565b60006200220e83670de0b6b3a76400008462003d9e565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004972573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004998919062005e5c565b60800151620049a78362003b5d565b62002211919062005a58565b60006200220e83670de0b6b3a76400008462004d38565b6000620049d78362003b5d565b8211620049e6576000620049fd565b620049f18362003b5d565b620049fd908362005966565b90506200220e836001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004a43573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004a69919062005e5c565b60800151829062004919565b60008062004a9783610140015184610120015162003dbd90919063ffffffff16565b61010084015160e085015162004aad9162003dbd565b62004ab9919062005d2e565b9050600062004ad18460000151856020015162004d5f565b9050600082131562004b8257600062004b188286604001518760a001518860c00151670de0b6b3a764000062004b08919062005966565b89606001518a6080015162004d7f565b915062004b289050818462004e1b565b9050801562004b7b5762004b66828660400151838860c00151670de0b6b3a764000062004b56919062005966565b89606001518a6080015162004e32565b8551869062004b7790839062005966565b9052505b5062004c54565b600082121562004c545762004b978262005a6e565b9150600062004bcf8286604001518760c00151670de0b6b3a764000062004bbf919062005966565b8860600151896080015162004e74565b915062004bdf9050818462004e1b565b9050801562004c325762004c1d828660400151838860c00151670de0b6b3a764000062004c0d919062005966565b89606001518a6080015162004f0f565b8551869062004c2e90839062005a58565b9052505b62004c3e818462005966565b8551869062004c4f90839062005a58565b905250505b600062004c87856101000151670de0b6b3a764000062004c75919062005966565b606087015160e0880151919062003d9e565b62004cb9866101400151670de0b6b3a764000062004ca6919062005966565b6060880151610120890151919062003d9e565b62004cc5919062005d2e565b9050600081866000015162004cdb919062005d58565b90508560a0015181121562004d035760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015162002145908262005966565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600082600019048411830215820262004d5057600080fd5b50910281810615159190040190565b60008062004d6e838562005d2e565b905060008112156200220e57600080fd5b6000808062004d8f858562004919565b9050600062004da282868c8a8d62004fa2565b9050600062004dee62004dbe670de0b6b3a76400008a62004919565b62004de262004dda8b62004dd38b8f62003dbd565b9062004fd9565b869062003dbd565b62004dd3908562005966565b905062004dfc898c62005966565b62004e088b8362005966565b945094505050505b965096945050505050565b600081831162004e2c57826200220e565b50919050565b60008062004e458888888888886200503a565b90925090508062004e6957604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808062004e84858562004919565b9050600062004e9782868b8a8c62004fa2565b9050600062004ed362004eb3670de0b6b3a76400008a62004919565b62004dd362004ecb670de0b6b3a76400008762005a58565b859062004919565b9050600062004ee3828862004919565b905062004ef18b8262005966565b62004efd838c62005966565b95509550505050509550959350505050565b60008062004f1e848462004919565b9050600062004f3182858b898c62004fa2565b905062004f448662004dd3898b62005966565b9750600062004f7862004f60670de0b6b3a764000089620049b3565b62004dd38562004f718d8762005966565b9062004919565b905062004f86818662004919565b905062004f948a8262005966565b9a9950505050505050505050565b600062004fb0828462004fd9565b62004fcd62004fc58562004dd3898962003dbd565b889062003dbd565b62002145919062005a58565b60008160000362004ff45750670de0b6b3a764000062002211565b82600003620050065750600062002211565b8160006200501485620050ef565b90508181026200502d670de0b6b3a76400008262005f97565b9050620021458162005303565b600080806200504a858562004919565b905060006200505d82868c8a8d62004fa2565b9050620050708762004dd38a8c62005a58565b9850888110156200508a5760008093509350505062004e10565b6000620050b5620050a4670de0b6b3a76400008a620049b3565b62004dd38562004f718e8762005966565b9050620050c3818762004919565b9050808b1115620050dd57620050da818c62005966565b94505b60019350505050965096945050505050565b60008082136200511257604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136200531f57506000919050565b680755bf798b4a1bf1e58212620053495760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611daa8062005fcc83390190565b6125b18062007d7683390190565b616e77806200a32783390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016200554560405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600080604083850312156200556d57600080fd5b50508035926020909101359150565b6001600160a01b03811681146200035c57600080fd5b600080600060608486031215620055a857600080fd5b8335620055b5816200557c565b92506020840135620055c7816200557c565b91506040840135620055d9816200557c565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b81811015620056275783516001600160a01b03168352928401929184019160010162005600565b50909695505050505050565b600080600080608085870312156200564a57600080fd5b843562005657816200557c565b9350602085013562005669816200557c565b925060408501359150606085013562005682816200557c565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715620056ca57620056ca6200568d565b60405290565b604051610180810167ffffffffffffffff81118282101715620056ca57620056ca6200568d565b6000602082840312156200570a57600080fd5b813567ffffffffffffffff808211156200572357600080fd5b818401915084601f8301126200573857600080fd5b8135818111156200574d576200574d6200568d565b604051601f8201601f19908116603f011681019083821181831017156200577857620057786200568d565b816040528281528760208487010111156200579257600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156200585a57898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015620058445783516001600160e01b0319168252928b019260019290920191908b019062005818565b50978a01979550505091870191600101620057da565b50919998505050505050505050565b60005b83811015620058865781810151838201526020016200586c565b50506000910152565b60008151808452620058a981602086016020860162005869565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200591657603f19888603018452620059038583516200588f565b94509285019290850190600101620058e4565b5092979650505050505050565b6000806000606084860312156200593957600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111562002211576200221162005950565b6000602082840312156200598f57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082620059be57620059be62005996565b500490565b600060208284031215620059d657600080fd5b815180151581146200220e57600080fd5b6020815260006200220e60208301846200588f565b6001600160a01b038316815260406020820181905260009062000556908301846200588f565b600181811c9082168062005a3757607f821691505b60208210810362004e2c57634e487b7160e01b600052602260045260246000fd5b8082018082111562002211576200221162005950565b6000600160ff1b820162005a865762005a8662005950565b5060000390565b6001600160e01b031983168152815160009062005ab281600485016020870162005869565b919091016004019392505050565b6000825162005ad481846020870162005869565b9190910192915050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015162005b4260e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002211828462005ade565b6101e0810162005bbb828562005ade565b6001600160a01b03929092166101c09190910152919050565b808202811582820484141762002211576200221162005950565b60008262005c005762005c0062005996565b500690565b60006101a0828403121562005c1957600080fd5b62005c23620056a3565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b80516001600160801b0381168114620019b157600080fd5b60006040828403121562005cde57600080fd5b6040516040810181811067ffffffffffffffff8211171562005d045762005d046200568d565b60405262005d128362005cb3565b815262005d226020840162005cb3565b60208201529392505050565b818103600083128015838313168383128216171562005d515762005d5162005950565b5092915050565b808201828112600083128015821682158216171562005d7b5762005d7b62005950565b505092915050565b60008262005d955762005d9562005996565b500790565b60408152600560408201526422b93937b960d91b60608201526080602082015260006200220e60808301846200588f565b60408152600062005de060408301856200588f565b90508260208301529392505050565b8051620019b1816200557c565b60006060828403121562005e0f57600080fd5b6040516060810181811067ffffffffffffffff8211171562005e355762005e356200568d565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c0828403121562005e7057600080fd5b62005e7a620056d0565b62005e858362005def565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015262005ed160e0840162005def565b60e082015261010062005ee681850162005def565b9082015261012062005efb8585830162005dfc565b908201526101808301516101408201526101a09092015161016083015250919050565b93845260208401929092526001600160a01b031660408301521515606082015260800190565b948552602085019390935260408401919091526001600160a01b031660608301521515608082015260a00190565b6000806040838503121562005f8657600080fd5b505080516020909101519092909150565b60008262005fa95762005fa962005996565b600160ff1b82146000198414161562005fc65762005fc662005950565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a2646970667358221220dd35e8d5c8146895d6fa283b82fd923616e3696f4fba7e9a8c3fa1bb11ad5e7764736f6c63430008130033",
    "sourceMap": "343:12813:118:-:0;;;;;1572:26:50;;;1594:4;-1:-1:-1;;1572:26:50;;;;;;;;3126:44:54;;;;;;;;;;;-1:-1:-1;;;1262:31:159;;216:2:165;1262:31:159;198:21:165;255:2;235:18;228:30;-1:-1:-1;;;274:18:165;267:45;1262:12:159;;329:18:165;1262:31:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1262:31:159;;;;;;;;;;;;:::i;:::-;1237:56;;;;;;:::i;:::-;-1:-1:-1;1323:30:159;;-1:-1:-1;;;1323:30:159;;4328:2:165;1323:30:159;;;4310:21:165;4367:2;4347:18;;;4340:30;-1:-1:-1;;;4386:18:165;;;4379:44;1323:12:159;;;;4440:18:165;;1323:30:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1323:30:159;;;;;;;;;;;;:::i;:::-;1299:54;;;;;;:::i;:::-;;343:12813:118;;;;;;;;;;;;358:127:165;419:10;414:3;410:20;407:1;400:31;450:4;447:1;440:15;474:4;471:1;464:15;490:1042;570:6;601:2;644;632:9;623:7;619:23;615:32;612:52;;;660:1;657;650:12;612:52;687:16;;-1:-1:-1;;;;;752:14:165;;;749:34;;;779:1;776;769:12;749:34;817:6;806:9;802:22;792:32;;862:7;855:4;851:2;847:13;843:27;833:55;;884:1;881;874:12;833:55;913:2;907:9;935:2;931;928:10;925:36;;;941:18;;:::i;:::-;1016:2;1010:9;984:2;1070:13;;-1:-1:-1;;1066:22:165;;;1090:2;1062:31;1058:40;1046:53;;;1114:18;;;1134:22;;;1111:46;1108:72;;;1160:18;;:::i;:::-;1200:10;1196:2;1189:22;1235:2;1227:6;1220:18;1275:7;1270:2;1265;1261;1257:11;1253:20;1250:33;1247:53;;;1296:1;1293;1286:12;1247:53;1318:1;1309:10;;1328:129;1342:2;1339:1;1336:9;1328:129;;;1430:10;;;1426:19;;1420:26;1399:14;;;1395:23;;1388:59;1353:10;;;;1328:129;;;1499:1;1494:2;1489;1481:6;1477:15;1473:24;1466:35;1520:6;1510:16;;;;;;;;490:1042;;;;:::o;1537:380::-;1616:1;1612:12;;;;1659;;;1680:61;;1734:4;1726:6;1722:17;1712:27;;1680:61;1787:2;1779:6;1776:14;1756:18;1753:38;1750:161;;1833:10;1828:3;1824:20;1821:1;1814:31;1868:4;1865:1;1858:15;1896:4;1893:1;1886:15;1750:161;;1537:380;;;:::o;2048:545::-;2150:2;2145:3;2142:11;2139:448;;;2186:1;2211:5;2207:2;2200:17;2256:4;2252:2;2242:19;2326:2;2314:10;2310:19;2307:1;2303:27;2297:4;2293:38;2362:4;2350:10;2347:20;2344:47;;;-1:-1:-1;2385:4:165;2344:47;2440:2;2435:3;2431:12;2428:1;2424:20;2418:4;2414:31;2404:41;;2495:82;2513:2;2506:5;2503:13;2495:82;;;2558:17;;;2539:1;2528:13;2495:82;;;2499:3;;;2139:448;2048:545;;;:::o;2769:1352::-;2889:10;;-1:-1:-1;;;;;2911:30:165;;2908:56;;;2944:18;;:::i;:::-;2973:97;3063:6;3023:38;3055:4;3049:11;3023:38;:::i;:::-;3017:4;2973:97;:::i;:::-;3125:4;;3189:2;3178:14;;3206:1;3201:663;;;;3908:1;3925:6;3922:89;;;-1:-1:-1;3977:19:165;;;3971:26;3922:89;-1:-1:-1;;2726:1:165;2722:11;;;2718:24;2714:29;2704:40;2750:1;2746:11;;;2701:57;4024:81;;3171:944;;3201:663;1995:1;1988:14;;;2032:4;2019:18;;-1:-1:-1;;3237:20:165;;;3355:236;3369:7;3366:1;3363:14;3355:236;;;3458:19;;;3452:26;3437:42;;3550:27;;;;3518:1;3506:14;;;;3385:19;;3355:236;;;3359:3;3619:6;3610:7;3607:19;3604:201;;;3680:19;;;3674:26;-1:-1:-1;;3763:1:165;3759:14;;;3775:3;3755:24;3751:37;3747:42;3732:58;3717:74;;3604:201;-1:-1:-1;;;;;3851:1:165;3835:14;;;3831:22;3818:36;;-1:-1:-1;2769:1352:165:o;4126:338::-;343:12813:118;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040523480156200001157600080fd5b5060043610620001515760003560e01c8063507ffba511620000c7578063916a17c61162000086578063916a17c614620002bc578063ab75e7c314620002c6578063b5508aa914620002dd578063ba414fa614620002e7578063e20c9f711462000302578063fa7626d4146200030c57600080fd5b8063507ffba5146200022c57806351cf9a79146200025c57806366d9a9a014620002735780637949c523146200028c57806385226c8114620002a357600080fd5b80633e5e0d2611620001145780633e5e0d2614620001d35780633e5e3c2314620001ea5780633f7286f414620001f457806342aa13ae14620001fe57806348af0581146200021557600080fd5b80630a9254e414620001565780630ce4e17414620001625780631071676014620001795780631ed7831c14620001a35780633510924914620001bc575b600080fd5b620001606200031a565b005b620001606200017336600462005559565b6200035f565b620001906200018a36600462005592565b620004d6565b6040519081526020015b60405180910390f35b620001ad62000560565b6040516200019a9190620055e4565b62000160620001cd36600462005559565b620005c4565b62000190620001e436600462005633565b6200076e565b620001ad620009d1565b620001ad62000a33565b620001606200020f36600462005559565b62000a95565b620001606200022636600462005559565b62000c07565b620002436200023d366004620056f7565b62000d9d565b6040516001600160a01b0390911681526020016200019a565b620001606200026d36600462005559565b62000eb3565b6200027d62001045565b6040516200019a9190620057b2565b620001606200029d36600462005559565b62001138565b620002ad620012aa565b6040516200019a9190620058bd565b6200027d62001384565b62000160620002d736600462005923565b6200146e565b620002ad620017af565b620002f162001889565b60405190151581526020016200019a565b620001ad620019b6565b600754620002f19060ff1681565b6200032462001a18565b60006200033866b1a2bc2ec5000062001e8f565b620f424060408201526022549091506200035c906001600160a01b03168262001f55565b50565b620003758260006722b1c8c1227a0000620020c3565b9150620003a366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b839190620020c3565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620003db906001600160a01b031684846200214f565b601e549091508590600090620003fb906001600160a01b0316836200218c565b50601d549091506a0422ca8b0a00a4250000009060009062000427906001600160a01b031683620021d2565b9050620004396301e133808962002217565b60006200044682620022f1565b601d5490915060009062000464906001600160a01b0316846200288e565b509050620004768183612710620028b6565b601e546200048f906001600160a01b0316868862002a43565b506200049b87620022f1565b601c54909250620004b6906001600160a01b0316886200288e565b509050620004c88183612710620028b6565b505050505050505050505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200055691869186918216906370a0823190602401602060405180830381865afa15801562000529573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200054f91906200597c565b856200076e565b90505b9392505050565b60606014805480602002602001604051908101604052809291908181526020018280548015620005ba57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116200059b575b5050505050905090565b620005da8260006722b1c8c1227a0000620020c3565b9150620005ff66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c5490915082906a0422ca8b0a00a4250000009060009062000635906001600160a01b031667016345785d8a0000846200214f565b9050600062000650856a0422ca8b0a00a42500000062005966565b601e549091506200066b906001600160a01b0316826200218c565b506200068a90506200068360026301e13380620059ac565b8562002217565b601e548590620006a4906001600160a01b0316826200218c565b5050601d546a0422ca8b0a00a42500000090600090620006ce906001600160a01b031683620021d2565b9050620006ec620006e560026301e13380620059ac565b8862002217565b6000620006f982620022f1565b601d5490915060009062000717906001600160a01b0316846200288e565b509050620007298183612710620028b6565b6200073487620022f1565b601c549092506200074f906001600160a01b0316886200288e565b509050620007618183612710620028b6565b5050505050505050505050565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa158015620007ba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007e091906200597c565b905080841115620008045760405163188c93a560e31b815260040160405180910390fd5b6000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200085257600080fd5b505af115801562000867573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0389166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b158015620008bc57600080fd5b505af1158015620008d1573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a76400006024820152600080516020620111be833981519152925063c88a5e6d9150604401600060405180830381600087803b1580156200093457600080fd5b505af115801562000949573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af11580156200099d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009c39190620059c3565b50839150505b949350505050565b60606016805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b60606015805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62000aab8260006722b1c8c1227a0000620020c3565b915062000ad066038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c54909150829067016345785d8a0000906a0422ca8b0a00a4250000009060009062000b08906001600160a01b031684846200214f565b9050600062000b23866a0422ca8b0a00a42500000062005966565b601e5490915062000b3e906001600160a01b03168262002a6b565b5062000b5d905062000b5660026301e13380620059ac565b8662002217565b601e54869062000b77906001600160a01b03168262002a6b565b5050601d546a0422ca8b0a00a4250000009060009062000ba1906001600160a01b031683620021d2565b905062000bbf62000bb860026301e13380620059ac565b8962002217565b600062000bcc82620022f1565b601d5490915060009062000bea906001600160a01b0316846200288e565b50905062000bfc8183612710620028b6565b6200049b87620022f1565b62000c1d8260006722b1c8c1227a000062002aa7565b915062000c4266038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c549091506a0422ca8b0a00a4250000009060009062000c76906001600160a01b031667016345785d8a0000846200214f565b9050600062000c91846a0422ca8b0a00a42500000062005966565b601e5490915062000cac906001600160a01b0316826200218c565b5062000cc4905062000b5660026301e13380620059ac565b601e5462000cdc906001600160a01b03168562002a6b565b5050601d546a0422ca8b0a00a4250000009060009062000d06906001600160a01b031683620021d2565b905062000d1d620006e560026301e13380620059ac565b600062000d2a82620022f1565b601d5490915060009062000d48906001600160a01b0316846200288e565b50905062000d5a8183612710620028b6565b62000d6586620022f1565b601c5490925062000d80906001600160a01b0316876200288e565b50905062000d928183612710620028b6565b505050505050505050565b60008160405160200162000db29190620059e7565b60408051601f198184030181529082905280516020909101206318caf8e360e31b82529150600080516020620111be8339815191529063c657c7189062000e009084908690600401620059fc565b600060405180830381600087803b15801562000e1b57600080fd5b505af115801562000e30573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab24000006024820152600080516020620111be833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000e9557600080fd5b505af115801562000eaa573d6000803e3d6000fd5b50505050919050565b62000ec98260006722b1c8c1227a0000620020c3565b915062000eee66038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c5490915082906a0422ca8b0a00a4250000009060009062000f24906001600160a01b031667016345785d8a0000846200214f565b9050600062000f3f856a0422ca8b0a00a42500000062005966565b601e5490915062000f5a906001600160a01b03168262002a6b565b5062000f7290506200068360026301e13380620059ac565b601e54859062000f8c906001600160a01b0316826200218c565b5050601d546a0422ca8b0a00a4250000009060009062000fb6906001600160a01b031683620021d2565b905062000fcd620006e560026301e13380620059ac565b600062000fda82620022f1565b601d5490915060009062000ff8906001600160a01b0316846200288e565b5090506200100a8183612710620028b6565b6200101587620022f1565b601c5490925060009062001033906001600160a01b0316896200288e565b509050620004c88184612710620028b6565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200111657602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620010d75790505b5050505050815250508152602001906001019062001069565b50505050905090565b6200114e8260006722b1c8c1227a0000620020c3565b91506200117366038d7ea4c680006200039a816a0422ca8b0a00a42500000062005966565b601c54909150829067016345785d8a0000906a0422ca8b0a00a42500000090600090620011ab906001600160a01b031684846200214f565b601e5490915085906000908190620011cd906001600160a01b03168462002a6b565b601d5491935091506a0422ca8b0a00a42500000090600090620011fa906001600160a01b031683620021d2565b90506200120c6301e133808a62002217565b60006200121982620022f1565b601d5490915060009062001237906001600160a01b0316846200288e565b509050620012498183612710620028b6565b601e5462001262906001600160a01b0316878762002b3e565b506200126e88620022f1565b601c5490925062001289906001600160a01b0316896200288e565b5090506200129b8183612710620028b6565b50505050505050505050505050565b60606018805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620012f09062005a22565b80601f01602080910402602001604051908101604052809291908181526020018280546200131e9062005a22565b80156200136f5780601f1062001343576101008083540402835291602001916200136f565b820191906000526020600020905b8154815290600101906020018083116200135157829003601f168201915b505050505081526020019060010190620012ce565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156200112f5760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200145557602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620014165790505b50505050508152505081526020019060010190620013a8565b60008212801590620014a857620014a284831015604051806060016040528060368152602001620112b76036913962002b66565b620014cf565b620014cf828511604051806060016040528060278152602001620111fe6027913962002b66565b600081620014de5784620014ea565b620014ea848662005a58565b905060008215620014fc578562001513565b620015078562005a6e565b62001513908762005966565b9050808410806200152357508184115b15620015a15762001561848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002ba3565b62001599848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002be5565b505050505050565b8215620016a1576000620015b6878662005966565b905085811015620016745760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a20257300000000000060208201526200160c9062001606838962005966565b62002c22565b6200163d6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002c6b565b6200166e6040518060400160405280600d81526020016c4e65772044656c74613a20257360981b8152508262002c22565b6200169a565b6200169a8386604051806060016040528060298152602001620112256029913962002cb4565b5062001599565b6000620016af858862005966565b9050620016bc8662005a6e565b8110156200178057620017176040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200170b9062005a6e565b62001606919062005966565b620017486040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002c6b565b6200177a6040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b8152508262002c22565b620017a6565b620017a682866040518060600160405280602981526020016201124e6029913962002cb4565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b828210156200112f578382906000526020600020018054620017f59062005a22565b80601f0160208091040260200160405190810160405280929190818152602001828054620018239062005a22565b8015620018745780601f10620018485761010080835404028352916020019162001874565b820191906000526020600020905b8154815290600101906020018083116200185657829003601f168201915b505050505081526020019060010190620017d3565b600754600090610100900460ff1615620018ac5750600754610100900460ff1690565b6000600080516020620111be8339815191523b15620019b15760408051600080516020620111be833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001933917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800162005a8d565b60408051601f19818403018152908290526200194f9162005ac0565b6000604051808303816000865af19150503d80600081146200198e576040519150601f19603f3d011682016040523d82523d6000602084013e62001993565b606091505b5091505080806020019051810190620019ad9190620059c3565b9150505b919050565b60606013805480602002602001604051908101604052809291908181526020018280548015620005ba576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116200059b575050505050905090565b62001a2262002cf0565b601c546040516303223eab60e11b81526001600160a01b039091166004820152600080516020620111be833981519152906306447d5690602401600060405180830381600087803b15801562001a7757600080fd5b505af115801562001a8c573d6000803e3d6000fd5b50505050601260008060405162001aa39062005490565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f08015801562001b19573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e13380815260200162015180815260200162001be78462002fd0565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a09092019190915251909150600090829062001c37906200549e565b62001c43919062005b99565b604051809103906000f08015801562001c60573d6000803e3d6000fd5b509050818160405162001c7390620054ac565b62001c8092919062005baa565b604051809103906000f08015801562001c9d573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001d1257600080fd5b505af115801562001d27573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b039091166004820152600080516020620111be83398151915293506306447d56925001600060405180830381600087803b15801562001d7f57600080fd5b505af115801562001d94573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b15801562001de957600080fd5b505af115801562001dfe573d6000803e3d6000fd5b5050602b5460ff16915062001e89905057600080516020620111be83398151915263e5d6bf0262001e356301e13380600362005bd4565b6040518263ffffffff1660e01b815260040162001e5491815260200190565b600060405180830381600087803b15801562001e6f57600080fd5b505af115801562001e84573d6000803e3d6000fd5b505050505b50505050565b62001e99620054ba565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c0810162001f168562002fd0565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b6000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001fa357600080fd5b505af115801562001fb8573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0385166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200200d57600080fd5b505af115801562002022573d6000803e3d6000fd5b5050505060008160405162002037906200549e565b62002043919062005b99565b604051809103906000f08015801562002060573d6000803e3d6000fd5b50905081816040516200207390620054ac565b6200208092919062005baa565b604051809103906000f0801580156200209d573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b6000818311156200210c5760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b60448201526064015b60405180910390fd5b60006200211a848462005966565b6200212790600162005a58565b9050600062002137828762005bee565b905062002145858262005a58565b9695505050505050565b6000620005568484846040518060a0016040528060011515815260200187815260200160008152602001600081526020016000198152506200301d565b600080620021c784846040518060a0016040528060011515815260200187815260200160008152602001600081526020018781525062003391565b915091509250929050565b60006200220e83836040518060a001604052806001151581526020018681526020016000815260200160008152602001600019815250620037d3565b90505b92915050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b1580156200226557600080fd5b505af11580156200227a573d6000803e3d6000fd5b50600080516020620111be833981519152925063e5d6bf029150620022a29050844262005a58565b6040518263ffffffff1660e01b8152600401620022c191815260200190565b600060405180830381600087803b158015620022dc57600080fd5b505af115801562001599573d6000803e3d6000fd5b6000806000805160206201127783398151915260001c6001600160a01b0316639711715a6040518163ffffffff1660e01b81526004016020604051808303816000875af115801562002347573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200236d91906200597c565b602c549091506001600160a01b031663ed64bab26200238c8262003b5d565b6040518263ffffffff1660e01b8152600401620023ab91815260200190565b600060405180830381600087803b158015620023c657600080fd5b505af1158015620023db573d6000803e3d6000fd5b5050602c5460009250620023f991506001600160a01b031662003be1565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002452573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002478919062005c05565b602c546080820151604051630b1b4b1760e41b81529293506000926001600160a01b039092169163b1b4b17091620024b69160040190815260200190565b602060405180830381865afa158015620024d4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620024fa91906200597c565b602c5460405163bd85b03960e01b8152600060048201529192506200257b9188916001600160a01b03169063bd85b03990602401602060405180830381865afa1580156200254c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200257291906200597c565b83919062003d9e565b602c549091506001600160a01b0316638120a3e26200259a8362005a6e565b6040518263ffffffff1660e01b8152600401620025b991815260200190565b600060405180830381600087803b158015620025d457600080fd5b505af1158015620025e9573d6000803e3d6000fd5b5050602c54600092506200260791506001600160a01b031662003be1565b602c5460405163bd85b03960e01b81526000600482018190529293506001600160a01b039091169063bd85b03990602401602060405180830381865afa15801562002656573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200267c91906200597c565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b031663fba560086040518163ffffffff1660e01b81526004016040805180830381865afa158015620026d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620026f9919062005ccb565b51602c5460405163bd85b03960e01b8152600360f81b60048201526001600160801b03909216916001600160a01b039091169063bd85b03990602401602060405180830381865afa15801562002753573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200277991906200597c565b62002785919062005966565b9050600062002795828462005a58565b90506000620027a682868a62003d9e565b9050620027b48b8362005d2e565b620027c0908262005d2e565b90506000811215620027f8576000620027e6620027dd8362005a6e565b8a908562003d9e565b9050620027f4818862005966565b9650505b604051631135fc2960e21b8152600481018a9052600080516020620111be833981519152906344d7f0a4906024016020604051808303816000875af115801562002846573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200286c9190620059c3565b5060808701516200287f90879062003dbd565b9b9a5050505050505050505050565b600080620021c784846040518060400160405280600115158152602001600081525062003dd4565b6000620028c4848462003f35565b90508181111562001e89576000805160206201119e833981519152604051620029299060208082526022908201527f4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b6060820152602081018690529051600080516020620112978339815191529181900360800190a160408051818152600a81830152690808080808149a59da1d60b21b6060820152602081018590529051600080516020620112978339815191529181900360800190a160408051818152600a8183015269204d61782044656c746160b01b6060820152602081018490529051600080516020620112978339815191529181900360800190a160408051818152600a8183015269202020202044656c746160b01b6060820152602081018390529051600080516020620112978339815191529181900360800190a162001e8962003f5d565b6000620005568484846040518060400160405280600115158152602001600081525062004066565b600080620021c784846040518060a0016040528060011515815260200187815260200160008152602001878152602001600019815250620041c8565b60008183131562002aec5760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b604482015260640162002103565b600062002afa848462005d2e565b62002b0790600162005d58565b9050600062002b17828762005d83565b9050600081121562002b325762002b2f828262005d58565b90505b62002145858262005d58565b6000620005568484846040518060400160405280600115158152602001600081525062004545565b8162002b9f57600080516020620111de8339815191528160405162002b8c919062005d9a565b60405180910390a162002b9f8262004658565b5050565b8183101562002be057600080516020620111de8339815191528160405162002bcc919062005d9a565b60405180910390a162002be08383620046bf565b505050565b8183111562002be057600080516020620111de8339815191528160405162002c0e919062005d9a565b60405180910390a162002be08383620047bb565b62002b9f828260405160240162002c3b92919062005dcb565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526200481e565b62002b9f828260405160240162002c8492919062005dcb565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b1790526200481e565b81831462002be057600080516020620111de8339815191528160405162002cdc919062005d9a565b60405180910390a162002be0838362004829565b62002d1860405180604001604052806005815260200164616c69636560d81b81525062000d9d565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b602082015262002d5d9062000d9d565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b602082015262002da59062000d9d565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b602082015262002dea9062000d9d565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b602082015262002e2f9062000d9d565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062002e80604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000d9d565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b602082015262002ec89062000d9d565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b602082015262002f169062000d9d565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b602082015262002f629062000d9d565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b602082015262002faa9062000d9d565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b6000806200300762002ff762002fe885606462005bd4565b66a5bbed86c5a0009062003dbd565b6748cd4072281e00009062004919565b905062000559670de0b6b3a76400008262004919565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200306d57600080fd5b505af115801562003082573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b158015620030d757600080fd5b505af1158015620030ec573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003151573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003177919062005e5c565b516001600160a01b03161480156200318d575081515b156200322057602c5460208301518351604051632002b33360e01b81526001600160a01b0390931692632002b3339291620031d29188918a918c919060040162005f1e565b60206040518083038185885af1158015620031f1573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200321891906200597c565b9050620009c9565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200327157600080fd5b505af115801562003286573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af1158015620032eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620033119190620059c3565b50602c548251604051632002b33360e01b81526001600160a01b0390921691632002b333916200334b91879189918b919060040162005f1e565b6020604051808303816000875af11580156200336b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200321891906200597c565b6000806000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620033e257600080fd5b505af1158015620033f7573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200344c57600080fd5b505af115801562003461573d6000803e3d6000fd5b5050602c546200347d92506001600160a01b0316905062004930565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620034f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003518919062005e5c565b516001600160a01b03161480156200352e575082515b15620035cd57602c54602084015160808501516040808701518751915163a179403b60e01b81526001600160a01b039095169463a179403b94936200357d938b9391928d919060040162005f44565b604080518083038185885af11580156200359b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620035c2919062005f72565b9092509050620037cb565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200361e57600080fd5b505af115801562003633573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003698573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620036be9190620059c3565b50602c5460808401516040808601518651915163a179403b60e01b81526001600160a01b039094169363a179403b9362003702938a9391928c919060040162005f44565b60408051808303816000875af115801562003721573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003747919062005f72565b602b54602086015192945090925061010090046001600160a01b0316906342966c68906200377790849062005966565b6040518263ffffffff1660e01b81526004016200379691815260200190565b600060405180830381600087803b158015620037b157600080fd5b505af1158015620037c6573d6000803e3d6000fd5b505050505b935093915050565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200382357600080fd5b505af115801562003838573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0387166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200388d57600080fd5b505af1158015620038a2573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562003907573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200392d919062005e5c565b516001600160a01b031614801562003943575081515b15620039e157602c54602083015160608401516080850151855160405163c326a90360e01b81526001600160a01b039095169463c326a903949362003993938a93919290918c9160040162005f44565b60206040518083038185885af1158015620039b2573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620039d991906200597c565b905062000559565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562003a3257600080fd5b505af115801562003a47573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562003aac573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ad29190620059c3565b50602c5460608301516080840151845160405163c326a90360e01b81526001600160a01b039094169363c326a9039362003b17938993919290918b9160040162005f44565b6020604051808303816000875af115801562003b37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620039d991906200597c565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003b9f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003bc5919062005e5c565b60a0015162003bd5904262005bee565b62002211904262005966565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003c24573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003c4a919062005e5c565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562003c8e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003cb4919062005c05565b9050620009c9816080015162003d976040518061016001604052808560000151815260200185602001518152602001856040015181526020018560800151815260200186602001518152602001866040015181526020018660c0015181526020018560a00151815260200162003d528962003d4c6ec097ce7bc90715b34b9f10000000008960c00151620049b390919063ffffffff16565b620049ca565b81526020018560e00151815260200162003d8f8962003d4c6ec097ce7bc90715b34b9f1000000000896101000151620049b390919063ffffffff16565b905262004a75565b9062003dbd565b600082600019048411830215820262003db657600080fd5b5091020490565b60006200220e8383670de0b6b3a764000062003d9e565b6000806000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562003e2557600080fd5b505af115801562003e3a573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b15801562003e8f57600080fd5b505af115801562003ea4573d6000803e3d6000fd5b5050602c546020860151865160405163c23632a760e01b81526001600160a01b03909316945063c23632a7935062003ee4928992918b9160040162005f1e565b60408051808303816000875af115801562003f03573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003f29919062005f72565b91509150935093915050565b600081831162003f515762003f4b838362005966565b6200220e565b6200220e828462005966565b600080516020620111be8339815191523b15620040555760408051600080516020620111be833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f198184030181529082905262003ff0929160200162005a8d565b60408051601f19818403018152908290526200400c9162005ac0565b6000604051808303816000865af19150503d80600081146200404b576040519150601f19603f3d011682016040523d82523d6000602084013e62004050565b606091505b505050505b6007805461ff001916610100179055565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620040b657600080fd5b505af1158015620040cb573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200412057600080fd5b505af115801562004135573d6000803e3d6000fd5b5050602c5460208501518551604051636f8c3a5b60e01b81526001600160a01b039093169450636f8c3a5b935062004179928992899290918c919060040162005f44565b6020604051808303816000875af115801562004199573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620041bf91906200597c565b95945050505050565b6000806000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200421957600080fd5b505af11580156200422e573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b1580156200428357600080fd5b505af115801562004298573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa158015620042fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004323919062005e5c565b516001600160a01b031614801562004339575082515b15620043d757602c54602084015160608501516040808701518751915163036d741560e11b81526001600160a01b03909516946306dae82a949362004388938b9391928d919060040162005f44565b604080518083038185885af1158015620043a6573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620043cd919062005f72565b91509150620037cb565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200442257600080fd5b505af115801562004437573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562004496573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620044bc9190620059c3565b50602c5460608401516040808601518651915163036d741560e11b81526001600160a01b03909416936306dae82a9362004500938a9391928c919060040162005f44565b60408051808303816000875af11580156200451f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620043cd919062005f72565b60006000805160206201127783398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200459557600080fd5b505af1158015620045aa573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0388166004820152600080516020620111be83398151915292506306447d569150602401600060405180830381600087803b158015620045ff57600080fd5b505af115801562004614573d6000803e3d6000fd5b5050602c546020850151855160405163fa3fcea760e01b81526001600160a01b03909316945063fa3fcea7935062004179928992899290918c919060040162005f44565b806200035c576000805160206201119e833981519152604051620046ad9060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a16200035c62003f5d565b8082101562002b9f576000805160206201119e833981519152604051620047229060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b6060820152602081018490529051600080516020620112978339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b60608201526020810182905260008051602062011297833981519152906080015b60405180910390a162002b9f62003f5d565b8082111562002b9f576000805160206201119e833981519152604051620047229060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b6200035c8162004d17565b80821462002b9f576000805160206201119e8339815191526040516200488b9060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b6060820152602081018490529051600080516020620112978339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b6060820152602081018290526000805160206201129783398151915290608001620047a9565b60006200220e83670de0b6b3a76400008462003d9e565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004972573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004998919062005e5c565b60800151620049a78362003b5d565b62002211919062005a58565b60006200220e83670de0b6b3a76400008462004d38565b6000620049d78362003b5d565b8211620049e6576000620049fd565b620049f18362003b5d565b620049fd908362005966565b90506200220e836001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004a43573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004a69919062005e5c565b60800151829062004919565b60008062004a9783610140015184610120015162003dbd90919063ffffffff16565b61010084015160e085015162004aad9162003dbd565b62004ab9919062005d2e565b9050600062004ad18460000151856020015162004d5f565b9050600082131562004b8257600062004b188286604001518760a001518860c00151670de0b6b3a764000062004b08919062005966565b89606001518a6080015162004d7f565b915062004b289050818462004e1b565b9050801562004b7b5762004b66828660400151838860c00151670de0b6b3a764000062004b56919062005966565b89606001518a6080015162004e32565b8551869062004b7790839062005966565b9052505b5062004c54565b600082121562004c545762004b978262005a6e565b9150600062004bcf8286604001518760c00151670de0b6b3a764000062004bbf919062005966565b8860600151896080015162004e74565b915062004bdf9050818462004e1b565b9050801562004c325762004c1d828660400151838860c00151670de0b6b3a764000062004c0d919062005966565b89606001518a6080015162004f0f565b8551869062004c2e90839062005a58565b9052505b62004c3e818462005966565b8551869062004c4f90839062005a58565b905250505b600062004c87856101000151670de0b6b3a764000062004c75919062005966565b606087015160e0880151919062003d9e565b62004cb9866101400151670de0b6b3a764000062004ca6919062005966565b6060880151610120890151919062003d9e565b62004cc5919062005d2e565b9050600081866000015162004cdb919062005d58565b90508560a0015181121562004d035760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015162002145908262005966565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600082600019048411830215820262004d5057600080fd5b50910281810615159190040190565b60008062004d6e838562005d2e565b905060008112156200220e57600080fd5b6000808062004d8f858562004919565b9050600062004da282868c8a8d62004fa2565b9050600062004dee62004dbe670de0b6b3a76400008a62004919565b62004de262004dda8b62004dd38b8f62003dbd565b9062004fd9565b869062003dbd565b62004dd3908562005966565b905062004dfc898c62005966565b62004e088b8362005966565b945094505050505b965096945050505050565b600081831162004e2c57826200220e565b50919050565b60008062004e458888888888886200503a565b90925090508062004e6957604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808062004e84858562004919565b9050600062004e9782868b8a8c62004fa2565b9050600062004ed362004eb3670de0b6b3a76400008a62004919565b62004dd362004ecb670de0b6b3a76400008762005a58565b859062004919565b9050600062004ee3828862004919565b905062004ef18b8262005966565b62004efd838c62005966565b95509550505050509550959350505050565b60008062004f1e848462004919565b9050600062004f3182858b898c62004fa2565b905062004f448662004dd3898b62005966565b9750600062004f7862004f60670de0b6b3a764000089620049b3565b62004dd38562004f718d8762005966565b9062004919565b905062004f86818662004919565b905062004f948a8262005966565b9a9950505050505050505050565b600062004fb0828462004fd9565b62004fcd62004fc58562004dd3898962003dbd565b889062003dbd565b62002145919062005a58565b60008160000362004ff45750670de0b6b3a764000062002211565b82600003620050065750600062002211565b8160006200501485620050ef565b90508181026200502d670de0b6b3a76400008262005f97565b9050620021458162005303565b600080806200504a858562004919565b905060006200505d82868c8a8d62004fa2565b9050620050708762004dd38a8c62005a58565b9850888110156200508a5760008093509350505062004e10565b6000620050b5620050a4670de0b6b3a76400008a620049b3565b62004dd38562004f718e8762005966565b9050620050c3818762004919565b9050808b1115620050dd57620050da818c62005966565b94505b60019350505050965096945050505050565b60008082136200511257604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136200531f57506000919050565b680755bf798b4a1bf1e58212620053495760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611daa8062005fcc83390190565b6125b18062007d7683390190565b616e77806200a32783390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016200554560405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600080604083850312156200556d57600080fd5b50508035926020909101359150565b6001600160a01b03811681146200035c57600080fd5b600080600060608486031215620055a857600080fd5b8335620055b5816200557c565b92506020840135620055c7816200557c565b91506040840135620055d9816200557c565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b81811015620056275783516001600160a01b03168352928401929184019160010162005600565b50909695505050505050565b600080600080608085870312156200564a57600080fd5b843562005657816200557c565b9350602085013562005669816200557c565b925060408501359150606085013562005682816200557c565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715620056ca57620056ca6200568d565b60405290565b604051610180810167ffffffffffffffff81118282101715620056ca57620056ca6200568d565b6000602082840312156200570a57600080fd5b813567ffffffffffffffff808211156200572357600080fd5b818401915084601f8301126200573857600080fd5b8135818111156200574d576200574d6200568d565b604051601f8201601f19908116603f011681019083821181831017156200577857620057786200568d565b816040528281528760208487010111156200579257600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156200585a57898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015620058445783516001600160e01b0319168252928b019260019290920191908b019062005818565b50978a01979550505091870191600101620057da565b50919998505050505050505050565b60005b83811015620058865781810151838201526020016200586c565b50506000910152565b60008151808452620058a981602086016020860162005869565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200591657603f19888603018452620059038583516200588f565b94509285019290850190600101620058e4565b5092979650505050505050565b6000806000606084860312156200593957600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111562002211576200221162005950565b6000602082840312156200598f57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082620059be57620059be62005996565b500490565b600060208284031215620059d657600080fd5b815180151581146200220e57600080fd5b6020815260006200220e60208301846200588f565b6001600160a01b038316815260406020820181905260009062000556908301846200588f565b600181811c9082168062005a3757607f821691505b60208210810362004e2c57634e487b7160e01b600052602260045260246000fd5b8082018082111562002211576200221162005950565b6000600160ff1b820162005a865762005a8662005950565b5060000390565b6001600160e01b031983168152815160009062005ab281600485016020870162005869565b919091016004019392505050565b6000825162005ad481846020870162005869565b9190910192915050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015162005b4260e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002211828462005ade565b6101e0810162005bbb828562005ade565b6001600160a01b03929092166101c09190910152919050565b808202811582820484141762002211576200221162005950565b60008262005c005762005c0062005996565b500690565b60006101a0828403121562005c1957600080fd5b62005c23620056a3565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b80516001600160801b0381168114620019b157600080fd5b60006040828403121562005cde57600080fd5b6040516040810181811067ffffffffffffffff8211171562005d045762005d046200568d565b60405262005d128362005cb3565b815262005d226020840162005cb3565b60208201529392505050565b818103600083128015838313168383128216171562005d515762005d5162005950565b5092915050565b808201828112600083128015821682158216171562005d7b5762005d7b62005950565b505092915050565b60008262005d955762005d9562005996565b500790565b60408152600560408201526422b93937b960d91b60608201526080602082015260006200220e60808301846200588f565b60408152600062005de060408301856200588f565b90508260208301529392505050565b8051620019b1816200557c565b60006060828403121562005e0f57600080fd5b6040516060810181811067ffffffffffffffff8211171562005e355762005e356200568d565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c0828403121562005e7057600080fd5b62005e7a620056d0565b62005e858362005def565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015262005ed160e0840162005def565b60e082015261010062005ee681850162005def565b9082015261012062005efb8585830162005dfc565b908201526101808301516101408201526101a09092015161016083015250919050565b93845260208401929092526001600160a01b031660408301521515606082015260800190565b948552602085019390935260408401919091526001600160a01b031660608301521515608082015260a00190565b6000806040838503121562005f8657600080fd5b505080516020909101519092909150565b60008262005fa95762005fa962005996565b600160ff1b82146000198414161562005fc65762005fc662005950565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a2646970667358221220dd35e8d5c8146895d6fa283b82fd923616e3696f4fba7e9a8c3fa1bb11ad5e7764736f6c63430008130033",
    "sourceMap": "343:12813:118:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;484:344;;;:::i;:::-;;834:1996;;;;;;:::i;:::-;;:::i;2545:198:159:-;;;;;;:::i;:::-;;:::i;:::-;;;1098:25:165;;;1086:2;1071:18;2545:198:159;;;;;;;;2170:134:57;;;:::i;:::-;;;;;;;:::i;2836:2023:118:-;;;;;;:::i;:::-;;:::i;2749:417:159:-;;;;;;:::i;:::-;;:::i;2939:133:57:-;;;:::i;2640:141::-;;;:::i;6956:2112:118:-;;;;;;:::i;:::-;;:::i;9074:1870::-;;;;;;:::i;:::-;;:::i;2321:218:159:-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;4511:32:165;;;4493:51;;4481:2;4466:18;2321:218:159;4347:203:165;10950:2204:118;;;;;;:::i;:::-;;:::i;2456:178:57:-;;;:::i;:::-;;;;;;;:::i;4865:2085:118:-;;;;;;:::i;:::-;;:::i;2310:140:57:-;;;:::i;:::-;;;;;;;:::i;2787:146::-;;;:::i;3830:2306:159:-;;;;;;:::i;:::-;;:::i;1875:141:57:-;;;:::i;1819:584:50:-;;;:::i;:::-;;;7953:14:165;;7946:22;7928:41;;7916:2;7901:18;1819:584:50;7788:187:165;2022:142:57;;;:::i;1572:26:50:-;;;;;;;;;484:344:118;527:13;:11;:13::i;:::-;686:36;725:19;736:7;725:10;:19::i;:::-;784:3;754:27;;;:33;804:8;;686:58;;-1:-1:-1;797:24:118;;-1:-1:-1;;;;;804:8:118;686:58;797:6;:24::i;:::-;517:311;484:344::o;834:1996::-;1060:45;:17;1095:1;1098:6;1060:34;:45::i;:::-;1040:65;-1:-1:-1;1173:136:118;1536:8:162;1258:41:118;1536:8:162;1258:12:118;:41;:::i;:::-;1173:14;;:136;:31;:136::i;:::-;1653:5;;1156:153;;-1:-1:-1;1402:17:118;;1506:7;;1596:12;;1373:19;;1642:46;;-1:-1:-1;;;;;1653:5:118;1506:7;1596:12;1642:10;:46::i;:::-;1816:6;;1618:70;;-1:-1:-1;1755:14:118;;1732:20;;1806:31;;-1:-1:-1;;;;;1816:6:118;1755:14;1806:9;:31::i;:::-;-1:-1:-1;1959:3:118;;1779:58;;-1:-1:-1;1902:12:118;;1879:20;;1946:31;;-1:-1:-1;;;;;1959:3:118;1902:12;1946;:31::i;:::-;1924:53;;2016:44;1656:8:162;2047:12:118;2016:11;:44::i;:::-;2125:34;2162:58;2199:11;2162:23;:58::i;:::-;2313:3;;2125:95;;-1:-1:-1;2265:26:118;;2297:33;;-1:-1:-1;;;;;2313:3:118;2318:11;2297:15;:33::i;:::-;2264:66;;;2340:70;2358:18;2378:26;2406:3;2340:17;:70::i;:::-;2468:6;;2457:46;;-1:-1:-1;;;;;2468:6:118;2476:12;2490;2457:10;:46::i;:::-;;2597:38;2621:13;2597:23;:38::i;:::-;2722:5;;2568:67;;-1:-1:-1;2706:37:118;;-1:-1:-1;;;;;2722:5:118;2729:13;2706:15;:37::i;:::-;-1:-1:-1;2681:62:118;-1:-1:-1;2753:70:118;2681:62;2791:26;2819:3;2753:17;:70::i;:::-;951:1879;;;;;;;;;;834:1996;;:::o;2545:198:159:-;2709:22;;-1:-1:-1;;;2709:22:159;;-1:-1:-1;;;;;4511:32:165;;;2709:22:159;;;4493:51:165;2655:7:159;;2681:55;;2695:5;;2702;;2709:15;;;;;4466:18:165;;2709:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2733:2;2681:13;:55::i;:::-;2674:62;;2545:198;;;;;;:::o;2170:134:57:-;2217:33;2281:16;2262:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2262:35:57;;;;;;;;;;;;;;;;;;;;;;;2170:134;:::o;2836:2023:118:-;3068:45;:17;3103:1;3106:6;3068:34;:45::i;:::-;3048:65;-1:-1:-1;3181:136:118;1536:8:162;3266:41:118;1536:8:162;3266:12:118;:41;:::i;3181:136::-;3568:5;;3164:153;;-1:-1:-1;3410:17:118;;3511:12;;3381:19;;3557:44;;-1:-1:-1;;;;;3568:5:118;3575:7;3511:12;3557:10;:44::i;:::-;3533:68;-1:-1:-1;3645:20:118;3668:29;3683:14;3668:12;:29;:::i;:::-;3717:6;;3645:52;;-1:-1:-1;3707:31:118;;-1:-1:-1;;;;;3717:6:118;3645:52;3707:9;:31::i;:::-;-1:-1:-1;3777:48:118;;-1:-1:-1;3789:21:118;3809:1;1656:8:162;3789:21:118;:::i;:::-;3812:12;3777:11;:48::i;:::-;3933:6;;3899:14;;3923:32;;-1:-1:-1;;;;;3933:6:118;3899:14;3923:9;:32::i;:::-;-1:-1:-1;;4077:3:118;;4020:12;;3997:20;;4064:31;;-1:-1:-1;;;;;4077:3:118;4020:12;4064;:31::i;:::-;4042:53;-1:-1:-1;4134:48:118;4146:21;4166:1;1656:8:162;4146:21:118;:::i;:::-;4169:12;4134:11;:48::i;:::-;4247:34;4284:58;4321:11;4284:23;:58::i;:::-;4435:3;;4247:95;;-1:-1:-1;4387:26:118;;4419:33;;-1:-1:-1;;;;;4435:3:118;4440:11;4419:15;:33::i;:::-;4386:66;;;4462:70;4480:18;4500:26;4528:3;4462:17;:70::i;:::-;4626:38;4650:13;4626:23;:38::i;:::-;4751:5;;4597:67;;-1:-1:-1;4735:37:118;;-1:-1:-1;;;;;4751:5:118;4758:13;4735:15;:37::i;:::-;-1:-1:-1;4710:62:118;-1:-1:-1;4782:70:118;4710:62;4820:26;4848:3;4782:17;:70::i;:::-;2959:1900;;;;;;;;;2836:2023;;:::o;2749:417:159:-;2925:22;;-1:-1:-1;;;2925:22:159;;-1:-1:-1;;;;;4511:32:165;;;2925:22:159;;;4493:51:165;2883:7:159;;;;2925:15;;;;;4466:18:165;;2925:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2902:45;;2970:12;2961:6;:21;2957:56;;;2991:22;;-1:-1:-1;;;2991:22:159;;;;;;;;;;;2957:56;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3023:12:159;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3047:20:159;;-1:-1:-1;;;3047:20:159;;-1:-1:-1;;;;;4511:32:165;;3047:20:159;;;4493:51:165;-1:-1:-1;;;;;;;;;;;3047:13:159;-1:-1:-1;3047:13:159;;-1:-1:-1;4466:18:165;;3047:20:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:23:159;;-1:-1:-1;;;3077:23:159;;-1:-1:-1;;;;;8909:32:165;;3077:23:159;;;8891:51:165;3092:7:159;8958:18:165;;;8951:34;-1:-1:-1;;;;;;;;;;;3077:7:159;-1:-1:-1;3077:7:159;;-1:-1:-1;8864:18:165;;3077:23:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3110:26:159;;-1:-1:-1;;;3110:26:159;;-1:-1:-1;;;;;8909:32:165;;;3110:26:159;;;8891:51:165;8958:18;;;8951:34;;;3110:14:159;;;-1:-1:-1;3110:14:159;;-1:-1:-1;8864:18:165;;3110:26:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3153:6;3146:13;;;2749:417;;;;;;;:::o;2939:133:57:-;2985:33;3049:16;3030:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3030:35:57;;;;;;;;;;;;;;;;;;;;;;2939:133;:::o;2640:141::-;2688:35;2756:18;2735:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2735:39:57;;;;;;;;;;;;;;;;;;;;;;2640:141;:::o;6956:2112:118:-;7186:45;:17;7221:1;7224:6;7186:34;:45::i;:::-;7166:65;-1:-1:-1;7299:136:118;1536:8:162;7384:41:118;1536:8:162;7384:12:118;:41;:::i;7299:136::-;7779:5;;7282:153;;-1:-1:-1;7528:17:118;;7632:7;;7722:12;;7499:19;;7768:46;;-1:-1:-1;;;;;7779:5:118;7632:7;7722:12;7768:10;:46::i;:::-;7744:70;-1:-1:-1;7857:17:118;7877:29;7892:14;7877:12;:29;:::i;:::-;7925:6;;7857:49;;-1:-1:-1;7916:27:118;;-1:-1:-1;;;;;7925:6:118;7857:49;7916:8;:27::i;:::-;-1:-1:-1;7986:48:118;;-1:-1:-1;7998:21:118;8018:1;1656:8:162;7998:21:118;:::i;:::-;8021:12;7986:11;:48::i;:::-;8137:6;;8104:14;;8128:28;;-1:-1:-1;;;;;8137:6:118;8104:14;8128:8;:28::i;:::-;-1:-1:-1;;8278:3:118;;8221:12;;8198:20;;8265:31;;-1:-1:-1;;;;;8278:3:118;8221:12;8265;:31::i;:::-;8243:53;-1:-1:-1;8339:48:118;8351:21;8371:1;1656:8:162;8351:21:118;:::i;:::-;8374:12;8339:11;:48::i;:::-;8452:34;8489:58;8526:11;8489:23;:58::i;:::-;8640:3;;8452:95;;-1:-1:-1;8592:26:118;;8624:33;;-1:-1:-1;;;;;8640:3:118;8645:11;8624:15;:33::i;:::-;8591:66;;;8667:70;8685:18;8705:26;8733:3;8667:17;:70::i;:::-;8835:38;8859:13;8835:23;:38::i;9074:1870::-;9304:45;:17;9339:1;9342:6;9304:34;:45::i;:::-;9284:65;-1:-1:-1;9417:136:118;1536:8:162;9502:41:118;1536:8:162;9502:12:118;:41;:::i;9417:136::-;9693:5;;9400:153;;-1:-1:-1;9636:12:118;;9609:24;;9682:43;;-1:-1:-1;;;;;9693:5:118;9700:6;9636:12;9682:10;:43::i;:::-;9658:67;-1:-1:-1;9769:20:118;9792:29;9807:14;9792:12;:29;:::i;:::-;9841:6;;9769:52;;-1:-1:-1;9831:31:118;;-1:-1:-1;;;;;9841:6:118;9769:52;9831:9;:31::i;:::-;-1:-1:-1;9901:53:118;;-1:-1:-1;9913:21:118;9933:1;1656:8:162;9913:21:118;:::i;9901:53::-;10012:6;;10003:32;;-1:-1:-1;;;;;10012:6:118;10020:14;10003:8;:32::i;:::-;-1:-1:-1;;10157:3:118;;10100:12;;10077:20;;10144:31;;-1:-1:-1;;;;;10157:3:118;10100:12;10144;:31::i;:::-;10122:53;-1:-1:-1;10214:53:118;10226:21;10246:1;1656:8:162;10226:21:118;:::i;10214:53::-;10332:34;10369:58;10406:11;10369:23;:58::i;:::-;10520:3;;10332:95;;-1:-1:-1;10472:26:118;;10504:33;;-1:-1:-1;;;;;10520:3:118;10525:11;10504:15;:33::i;:::-;10471:66;;;10547:70;10565:18;10585:26;10613:3;10547:17;:70::i;:::-;10711:38;10735:13;10711:23;:38::i;:::-;10836:5;;10682:67;;-1:-1:-1;10820:37:118;;-1:-1:-1;;;;;10836:5:118;10843:13;10820:15;:37::i;:::-;-1:-1:-1;10795:62:118;-1:-1:-1;10867:70:118;10795:62;10905:26;10933:3;10867:17;:70::i;:::-;9195:1749;;;;;;;9074:1870;;:::o;2321:218:159:-;2377:13;2455:4;2444:16;;;;;;;;:::i;:::-;;;;-1:-1:-1;;2444:16:159;;;;;;;;;;2434:27;;2444:16;2434:27;;;;-1:-1:-1;;;2474:21:159;;2434:27;-1:-1:-1;;;;;;;;;;;;2474:8:159;;;:21;;2434:27;;2490:4;;2474:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2505:27:159;;-1:-1:-1;;;2505:27:159;;-1:-1:-1;;;;;8909:32:165;;2505:27:159;;;8891:51:165;2520:11:159;8958:18:165;;;8951:34;-1:-1:-1;;;;;;;;;;;2505:7:159;-1:-1:-1;2505:7:159;;-1:-1:-1;8864:18:165;;2505:27:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:218;;;:::o;10950:2204:118:-;11181:45;:17;11216:1;11219:6;11181:34;:45::i;:::-;11161:65;-1:-1:-1;11294:136:118;1536:8:162;11379:41:118;1536:8:162;11379:12:118;:41;:::i;11294:136::-;11681:5;;11277:153;;-1:-1:-1;11523:17:118;;11624:12;;11494:19;;11670:44;;-1:-1:-1;;;;;11681:5:118;11688:7;11624:12;11670:10;:44::i;:::-;11646:68;-1:-1:-1;11757:17:118;11777:29;11792:14;11777:12;:29;:::i;:::-;11825:6;;11757:49;;-1:-1:-1;11816:27:118;;-1:-1:-1;;;;;11825:6:118;11757:49;11816:8;:27::i;:::-;-1:-1:-1;11886:48:118;;-1:-1:-1;11898:21:118;11918:1;1656:8:162;11898:21:118;:::i;11886:48::-;12035:6;;12001:14;;12025:31;;-1:-1:-1;;;;;12035:6:118;12001:14;12025:9;:31::i;:::-;-1:-1:-1;;12178:3:118;;12121:12;;12098:20;;12165:31;;-1:-1:-1;;;;;12178:3:118;12121:12;12165;:31::i;:::-;12143:53;-1:-1:-1;12239:48:118;12251:21;12271:1;1656:8:162;12251:21:118;:::i;12239:48::-;12352:34;12389:58;12426:11;12389:23;:58::i;:::-;12543:3;;12352:95;;-1:-1:-1;12492:29:118;;12527:33;;-1:-1:-1;;;;;12543:3:118;12548:11;12527:15;:33::i;:::-;12491:69;;;12570:119;12601:21;12636:26;12676:3;12570:17;:119::i;:::-;12783:38;12807:13;12783:23;:38::i;:::-;12974:5;;12754:67;;-1:-1:-1;12908:31:118;;12945:71;;-1:-1:-1;;;;;12974:5:118;12993:13;12945:15;:71::i;:::-;12907:109;;;13026:121;13057:23;13094:26;13134:3;13026:17;:121::i;2456:178:57:-;2512:48;2601:26;2572:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:178;:::o;4865:2085:118:-;5090:45;:17;5125:1;5128:6;5090:34;:45::i;:::-;5070:65;-1:-1:-1;5203:136:118;1536:8:162;5288:41:118;1536:8:162;5288:12:118;:41;:::i;5203:136::-;5683:5;;5186:153;;-1:-1:-1;5432:17:118;;5536:7;;5626:12;;5403:19;;5672:46;;-1:-1:-1;;;;;5683:5:118;5536:7;5626:12;5672:10;:46::i;:::-;5876:6;;5648:70;;-1:-1:-1;5781:14:118;;5761:17;;;;5854:61;;-1:-1:-1;;;;;5876:6:118;5781:14;5854:8;:61::i;:::-;6037:3;;5805:110;;-1:-1:-1;5805:110:118;-1:-1:-1;5980:12:118;;5957:20;;6024:31;;-1:-1:-1;;;;;6037:3:118;5980:12;6024;:31::i;:::-;6002:53;;6094:44;1656:8:162;6125:12:118;6094:11;:44::i;:::-;6203:34;6240:58;6277:11;6240:23;:58::i;:::-;6433:3;;6203:95;;-1:-1:-1;6385:26:118;;6417:33;;-1:-1:-1;;;;;6433:3:118;6438:11;6417:15;:33::i;:::-;6384:66;;;6460:70;6478:18;6498:26;6526:3;6460:17;:70::i;:::-;6586:6;;6576:47;;-1:-1:-1;;;;;6586:6:118;6594:12;6608:14;6576:9;:47::i;:::-;;6717:38;6741:13;6717:23;:38::i;:::-;6842:5;;6688:67;;-1:-1:-1;6826:37:118;;-1:-1:-1;;;;;6842:5:118;6849:13;6826:15;:37::i;:::-;-1:-1:-1;6801:62:118;-1:-1:-1;6873:70:118;6801:62;6911:26;6939:3;6873:17;:70::i;:::-;4981:1969;;;;;;;;;;;4865:2085;;:::o;2310:140:57:-;2358:34;2425:18;2404:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2787:146;2835:40;2908:18;2887:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3830:2306:159;3955:18;3976:11;;;;;3998:335;;4031:138;4075:6;4059:12;:22;;4031:138;;;;;;;;;;;;;;;;;:10;:138::i;:::-;3998:335;;;4200:122;4237:12;4228:6;:21;4200:122;;;;;;;;;;;;;;;;;:10;:122::i;:::-;4343:18;4364:13;:49;;4407:6;4364:49;;;4380:24;4397:6;4380;:24;:::i;:::-;4343:70;;4423:18;4445:13;4444:14;:75;;4513:6;4444:75;;;4490:7;4491:6;4490:7;:::i;:::-;4473:25;;:6;:25;:::i;:::-;4423:96;;4597:10;4582:12;:25;:54;;;;4626:10;4611:12;:25;4582:54;4578:233;;;4652:57;4661:12;4675:10;4652:57;;;;;;;;;;;;;-1:-1:-1;;;4652:57:159;;;:8;:57::i;:::-;4723;4732:12;4746:10;4723:57;;;;;;;;;;;;;-1:-1:-1;;;4723:57:159;;;:8;:57::i;:::-;4794:7;;;3830:2306;;;:::o;4578:233::-;4908:13;4904:1226;;;4937:21;4961;4976:6;4961:12;:21;:::i;:::-;4937:45;;5024:6;5000:13;:31;4996:516;;;5051:133;;;;;;;;;;;;;;;;;;;5135:31;5153:13;5143:6;5135:31;:::i;:::-;5051:12;:133::i;:::-;5202:37;;;;;;;;;;;;;;-1:-1:-1;;;5202:37:159;;;5232:6;5202:12;:37::i;:::-;5257:44;;;;;;;;;;;;;;-1:-1:-1;;;5257:44:159;;;5287:13;5257:12;:44::i;:::-;4996:516;;;5340:157;5370:10;5402:12;5340:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;4923:599;4904:1226;;;5542:21;5566;5575:12;5566:6;:21;:::i;:::-;5542:45;-1:-1:-1;5629:7:159;5630:6;5629:7;:::i;:::-;5605:13;:32;5601:519;;;5657:134;;;;;;;;;;;;;;;;;;5760:13;5750:6;5749:7;;;:::i;:::-;5741:32;;;;:::i;5657:134::-;5809:37;;;;;;;;;;;;;;-1:-1:-1;;;5809:37:159;;;5839:6;5809:12;:37::i;:::-;5864:45;;;;;;;;;;;;;;-1:-1:-1;;;5864:45:159;;;5895:13;5864:12;:45::i;:::-;5601:519;;;5948:157;5978:10;6010:12;5948:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;5528:602;3945:2191;;;3830:2306;;;:::o;1875:141:57:-;1924:34;1991:18;1970:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1819:584:50;1873:7;;1853:4;;1873:7;;;;;1869:528;;;-1:-1:-1;1903:7:50;;;;;;;;1819:584::o;1869:528::-;1941:17;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;1980:374;;2196:43;;;-1:-1:-1;;;;;;;;;;;2196:43:50;;;8891:51:165;;;-1:-1:-1;;;8958:18:165;;;8951:34;2196:43:50;;;;;;;;;8864:18:165;;;2196:43:50;;;-1:-1:-1;;1671:64:50;;2086:175;;2135:34;;2086:175;;;:::i;:::-;;;;-1:-1:-1;;2086:175:50;;;;;;;;;;2047:232;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2020:259;;;2323:7;2312:27;;;;;;;;;;;;:::i;:::-;2297:42;;2002:352;1980:374;2374:12;1819:584;-1:-1:-1;1819:584:50:o;2022:142:57:-;2071:35;2139:18;2118:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2118:39:57;;;;;;;;;;;;;;;;;;;;;;2022:142;:::o;1767:1696:162:-;1818:13;:11;:13::i;:::-;1855:5;;1841:20;;-1:-1:-1;;;1841:20:162;;-1:-1:-1;;;;;1855:5:162;;;1841:20;;;4493:51:165;-1:-1:-1;;;;;;;;;;;1841:13:162;;;4466:18:165;;1841:20:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:2;1969:1;1973:5;1923:56;;;;;:::i;:::-;12417:3:165;12399:22;;;12458:1;12437:19;;;12430:30;;;-1:-1:-1;;;12491:3:165;12476:19;;12469:35;12542:3;12535:4;12520:20;;12513:33;;;12562:19;;12555:30;-1:-1:-1;;;12616:3:165;12601:19;;12594:35;12713:4;12701:17;;;12696:2;12681:18;;12674:45;-1:-1:-1;;;;;12755:32:165;;;-1:-1:-1;12735:18:165;;12728:60;12832:14;12825:22;-1:-1:-1;12804:19:165;;12797:51;12661:3;12646:19;1923:56:162;;;;;;;;;;;;;;;;;;;;;;;1911:9;;:68;;;;;-1:-1:-1;;;;;1911:68:162;;;;;-1:-1:-1;;;;;1911:68:162;;;;;;1989:28;2020:98;;;;;;;;2058:1;2020:98;;;;2079:1;2020:98;;;;2106:1;2020:98;;;1989:129;;2163:11;2177:7;2163:21;;2194:36;2233:603;;;;;;;;2296:9;;;;;;;;;-1:-1:-1;;;;;2296:9:162;-1:-1:-1;;;;;2233:603:162;;;;;565:4:32;2233:603:162;;;;565:4:32;2233:603:162;;;;1536:8;2233:603;;;;1656:8;2233:603;;;;1598:6;2233:603;;;;2612:41;2649:3;2612:36;:41::i;:::-;2233:603;;2679:10;;-1:-1:-1;;;;;2679:10:162;;;2233:603;;;;2717:12;;;2233:603;;;;;;;;;;;;;;1710:1;2233:603;;;;1756:4;2233:603;;;;;;;;2877:38;2194:642;;-1:-1:-1;2679:10:162;;2194:642;;2877:38;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2846:70;;2991:6;2999:12;2972:40;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2926:10;;:97;;;;;-1:-1:-1;;;;;2926:97:162;;;;;-1:-1:-1;;;;;2926:97:162;;;;;;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3033:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3071:10:162;;;3057:25;;-1:-1:-1;;;3057:25:162;;-1:-1:-1;;;;;3071:10:162;;;3057:25;;;4493:51:165;-1:-1:-1;;;;;;;;;;;3057:13:162;-1:-1:-1;3057:13:162;;-1:-1:-1;4466:18:165;3057:25:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3092:10:162;;3113:6;;3092:34;;-1:-1:-1;;;3092:34:162;;-1:-1:-1;;;;;3113:6:162;;;3092:34;;;14802:51:165;3092:10:162;14869:18:165;;;14862:50;3092:10:162;;;-1:-1:-1;3092:20:162;;-1:-1:-1;14775:18:165;;3092:34:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3392:8:162;;;;;-1:-1:-1;3387:70:162;;-1:-1:-1;3387:70:162;-1:-1:-1;;;;;;;;;;;3416:7:162;3424:21;1656:8;3444:1;3424:21;:::i;:::-;3416:30;;;;;;;;;;;;;1098:25:165;;1086:2;1071:18;;952:177;3416:30:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3387:70;1808:1655;;;;1767:1696::o;5229:945::-;5305:29;;:::i;:::-;5377:98;;;;;;;;;-1:-1:-1;5377:98:162;;;;;;;;;;;;;;;;;5504:663;;;;;;;5571:9;;;;;-1:-1:-1;;;;;5571:9:162;5504:663;;565:4:32;5504:663:162;;;;;;;;;;1536:8;5504:663;;;;1656:8;5504:663;;;;1598:6;5504:663;;;;5377:98;5504:663;;;5913:47;5950:9;5913:36;:47::i;:::-;5504:663;;5990:10;;-1:-1:-1;;;;;5990:10:162;;;5504:663;;;;6032:12;;;5504:663;;;;;;;;;;;1710:1;5504:663;;;;1756:4;5504:663;;;;;;;;5485:682;5229:945;-1:-1:-1;;5229:945:162:o;3469:357::-;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3583:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3607:23:162;;-1:-1:-1;;;3607:23:162;;-1:-1:-1;;;;;4511:32:165;;3607:23:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;3607:13:162;-1:-1:-1;3607:13:162;;-1:-1:-1;4466:18:165;;3607:23:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3640:20;3702:7;3671:39;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;3640:71;;3786:7;3795:12;3767:41;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3721:10:162;:98;;-1:-1:-1;;;;;;3721:98:162;-1:-1:-1;;;;;3721:98:162;;;;;;;;;;-1:-1:-1;;;3469:357:162:o;6266:333:164:-;6394:7;6432;6421;:18;;6413:45;;;;-1:-1:-1;;;6413:45:164;;15298:2:165;6413:45:164;;;15280:21:165;15337:2;15317:18;;;15310:30;-1:-1:-1;;;15356:18:165;;;15349:44;15410:18;;6413:45:164;;;;;;;;;6469:17;6489;6499:7;6489;:17;:::i;:::-;:21;;6509:1;6489:21;:::i;:::-;6469:41;-1:-1:-1;6520:16:164;6539:17;6469:41;6539:5;:17;:::i;:::-;6520:36;-1:-1:-1;6574:18:164;6585:7;6520:36;6574:18;:::i;:::-;6567:25;6266:333;-1:-1:-1;;;;;;6266:333:164:o;8686:563:162:-;8801:16;8848:394;8876:2;8896:3;8917:12;8947:281;;;;;;;;9000:4;8947:281;;;;;;9041:12;8947:281;;;;9090:1;8947:281;;;;9136:1;8947:281;;;;-1:-1:-1;;8947:281:162;;;8848:10;:394::i;20236:576::-;20331:20;20353:18;20402:403;20429:6;20453:10;20481:310;;;;;;;;20534:4;20481:310;;;;;;20575:10;20481:310;;;;20622:1;20481:310;;;;20682:1;20481:310;;;;20728:10;20481:310;;;20402:9;:403::i;:::-;20383:422;;;;20236:576;;;;;:::o;11047:559::-;11143:16;11190:409;11220:2;11240:12;11270:315;;;;;;;;11323:4;11270:315;;;;;;11364:12;11270:315;;;;11413:1;11270:315;;;;11459:1;11270:315;;;;-1:-1:-1;;11270:315:162;;;11190:12;:409::i;:::-;11171:428;;11047:559;;;;;:::o;22930:175::-;23027:10;;23004:53;;-1:-1:-1;;;23004:53:162;;;;;15728:25:165;;;15769:18;;;15762:34;;;-1:-1:-1;;;;;23027:10:162;;;;23004:42;;15701:18:165;;23004:53:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;23067:7:162;-1:-1:-1;23067:7:162;;-1:-1:-1;23075:22:162;;-1:-1:-1;23093:4:162;23075:15;:22;:::i;:::-;23067:31;;;;;;;;;;;;;1098:25:165;;1086:2;1071:18;;952:177;23067:31:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;25700:2033;25782:7;25801:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;25822:11:162;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;26050:10;;25801:34;;-1:-1:-1;;;;;;26050:10:162;:21;26072:44;26050:10;26072:32;:44::i;:::-;26050:67;;;;;;;;;;;;;1098:25:165;;1086:2;1071:18;;952:177;26050:67:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;26158:10:162;;26127:28;;-1:-1:-1;26158:25:162;;-1:-1:-1;;;;;;26158:10:162;:23;:25::i;:::-;26127:56;;26193:36;26232:10;;;;;;;;;-1:-1:-1;;;;;26232:10:162;-1:-1:-1;;;;;26232:22:162;;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;26313:10;;26366:19;;;;26290:96;;-1:-1:-1;;;26290:96:162;;26193:63;;-1:-1:-1;26266:21:162;;-1:-1:-1;;;;;26313:10:162;;;;26290:75;;:96;;;;1098:25:165;;;1086:2;1071:18;;952:177;26290:96:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;26471:10;;:44;;-1:-1:-1;;;26471:44:162;;:10;:44;;;1098:25:165;26266:120:162;;-1:-1:-1;26412:113:162;;26450:7;;-1:-1:-1;;;;;26471:10:162;;:22;;1071:18:165;;26471:44:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;26412:13;;:113;:24;:113::i;:::-;26654:10;;26396:129;;-1:-1:-1;;;;;;26654:10:162;26631:51;26696:22;26396:129;26696:22;:::i;:::-;26631:97;;;;;;;;;;;;;1098:25:165;;1086:2;1071:18;;952:177;26631:97:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;26767:10:162;;26738:26;;-1:-1:-1;26767:25:162;;-1:-1:-1;;;;;;26767:10:162;:23;:25::i;:::-;26832:10;;:66;;-1:-1:-1;;;26832:66:162;;26802:27;26832:66;;;1098:25:165;;;26738:54:162;;-1:-1:-1;;;;;;26832:10:162;;;;:22;;1071:18:165;;26832:66:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;26802:96;;26908:35;27029:10;;;;;;;;;-1:-1:-1;;;;;27029:10:162;-1:-1:-1;;;;;27029:26:162;;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;26946:10;;:80;;-1:-1:-1;;;26946:80:162;;-1:-1:-1;;;26946:80:162;;;1098:25:165;-1:-1:-1;;;;;26946:127:162;;;;-1:-1:-1;;;;;26946:10:162;;;;:22;;1071:18:165;;26946:80:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:127;;;;:::i;:::-;26908:165;-1:-1:-1;27083:21:162;27107:61;26908:165;27107:19;:61;:::i;:::-;27083:85;-1:-1:-1;27178:23:162;27224:66;27083:85;27249:18;27269:20;27224:24;:66::i;:::-;27178:122;-1:-1:-1;27330:39:162;27361:7;27337:13;27330:39;:::i;:::-;27310:59;;;;:::i;:::-;;;27402:1;27383:16;:20;27379:255;;;27419:29;27451:120;27508:17;27509:16;27508:17;:::i;:::-;27451:20;;27544:13;27451:31;:120::i;:::-;27419:152;-1:-1:-1;27585:38:162;27419:152;27585:38;;:::i;:::-;;;27405:229;27379:255;27643:23;;-1:-1:-1;;;27643:23:162;;;;;1098:25:165;;;-1:-1:-1;;;;;;;;;;;27643:11:162;;;1071:18:165;;27643:23:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;27706:19:162;;;;27684:42;;:13;;:21;:42::i;:::-;27677:49;25700:2033;-1:-1:-1;;;;;;;;;;;25700:2033:162:o;12720:409::-;12813:20;12835:24;12890:232;12923:2;12943:6;12967:141;;;;;;;;13023:4;12967:141;;;;;;13062:1;12967:141;;;12890:15;:232::i;3504:470:53:-;3598:13;3614:19;3628:1;3631;3614:13;:19::i;:::-;3598:35;;3656:8;3648:5;:16;3644:324;;;-1:-1:-1;;;;;;;;;;;3685:41:53;;;;18385:2:165;18367:21;;;18424:2;18404:18;;;18397:30;18463:34;18458:2;18443:18;;18436:62;-1:-1:-1;;;18529:2:165;18514:18;;18507:32;18571:3;18556:19;;18183:398;3685:41:53;;;;;;;;3745:31;;;18798:21:165;;;18855:2;18835:18;;;18828:30;-1:-1:-1;;;18889:2:165;18874:18;;18867:40;18974:4;18959:20;;18952:36;;;3745:31:53;;-1:-1:-1;;;;;;;;;;;3745:31:53;;;;18939:3:165;3745:31:53;;;3795;;;19211:21:165;;;19268:2;19248:18;;;19241:30;-1:-1:-1;;;19302:2:165;19287:18;;19280:40;19387:4;19372:20;;19365:36;;;3795:31:53;;-1:-1:-1;;;;;;;;;;;3795:31:53;;;;19352:3:165;3795:31:53;;;3845:38;;;19624:21:165;;;19681:2;19661:18;;;19654:30;-1:-1:-1;;;19715:2:165;19700:18;;19693:40;19800:4;19785:20;;19778:36;;;3845:38:53;;-1:-1:-1;;;;;;;;;;;3845:38:53;;;;19765:3:165;3845:38:53;;;3902:35;;;20037:21:165;;;20094:2;20074:18;;;20067:30;-1:-1:-1;;;20128:2:165;20113:18;;20106:40;20213:4;20198:20;;20191:36;;;3902:35:53;;-1:-1:-1;;;;;;;;;;;3902:35:53;;;;20178:3:165;3902:35:53;;;3951:6;:4;:6::i;21970:447:162:-;22096:18;22145:265;22173:6;22197:12;22227:10;22255:141;;;;;;;;22311:4;22255:141;;;;;;22350:1;22255:141;;;22145:10;:265::i;16153:591::-;16247:20;16269:18;16318:419;16344:6;16368:10;16396:327;;;;;;;;16449:4;16396:327;;;;;;16490:10;16396:327;;;;16537:1;16396:327;;;;16597:10;16396:327;;;;-1:-1:-1;;16396:327:162;;;16318:8;:419::i;6605:401:164:-;6730:6;6767:7;6756;:18;;6748:45;;;;-1:-1:-1;;;6748:45:164;;15298:2:165;6748:45:164;;;15280:21:165;15337:2;15317:18;;;15310:30;-1:-1:-1;;;15356:18:165;;;15349:44;15410:18;;6748:45:164;15096:338:165;6748:45:164;6804:16;6823:17;6833:7;6823;:17;:::i;:::-;:21;;6843:1;6823:21;:::i;:::-;6804:40;-1:-1:-1;6854:15:164;6872:17;6804:40;6872:5;:17;:::i;:::-;6854:35;;6915:1;6904:8;:12;6900:64;;;6932:21;6944:9;6932:21;;:::i;:::-;;;6900:64;6981:18;6992:7;6981:8;:18;:::i;17914:445:162:-;18039:18;18088:264;18115:6;18139:12;18169:10;18197:141;;;;;;;;18253:4;18197:141;;;;;;18292:1;18197:141;;;18088:9;:264::i;3425:191:50:-;3504:9;3499:111;;-1:-1:-1;;;;;;;;;;;3560:3:50;3534:30;;;;;;:::i;:::-;;;;;;;;3578:21;3589:9;3578:10;:21::i;:::-;3425:191;;:::o;12219:177::-;12299:1;12295;:5;12291:99;;;-1:-1:-1;;;;;;;;;;;12347:3:50;12321:30;;;;;;:::i;:::-;;;;;;;;12365:14;12374:1;12377;12365:8;:14::i;:::-;12219:177;;;:::o;16185:::-;16265:1;16261;:5;16257:99;;;-1:-1:-1;;;;;;;;;;;16313:3:50;16287:30;;;;;;:::i;:::-;;;;;;;;16331:14;16340:1;16343;16331:8;:14::i;7546:145:66:-;7613:71;7676:2;7680;7629:54;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7629:54:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7629:54:66;-1:-1:-1;;;7629:54:66;;;7613:15;:71::i;7697:143::-;7763:70;7825:2;7829;7779:53;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7779:53:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7779:53:66;-1:-1:-1;;;7779:53:66;;;7763:15;:70::i;5476:178:50:-;5557:1;5552;:6;5548:100;;-1:-1:-1;;;;;;;;;;;5605:3:50;5579:30;;;;;;:::i;:::-;;;;;;;;5623:14;5632:1;5635;5623:8;:14::i;1380:471:159:-;1430:19;;;;;;;;;;;;;;-1:-1:-1;;;1430:19:159;;;:10;:19::i;:::-;1422:5;:27;;-1:-1:-1;;;;;;1422:27:159;-1:-1:-1;;;;;1422:27:159;;;;;;;;;;1465:17;;;;;;;;;;;;-1:-1:-1;;;1465:17:159;;;;;;:10;:17::i;:::-;1459:3;:23;;-1:-1:-1;;;;;;1459:23:159;-1:-1:-1;;;;;1459:23:159;;;;;;;;;;1501:20;;;;;;;;;;;;-1:-1:-1;;;1501:20:159;;;;;;:10;:20::i;:::-;1492:6;:29;;-1:-1:-1;;;;;;1492:29:159;-1:-1:-1;;;;;1492:29:159;;;;;;;;;;1537:17;;;;;;;;;;;;-1:-1:-1;;;1537:17:159;;;;;;:10;:17::i;:::-;1531:3;:23;;-1:-1:-1;;;;;;1531:23:159;-1:-1:-1;;;;;1531:23:159;;;;;;;;;;1570:17;;;;;;;;;;;;-1:-1:-1;;;1570:17:159;;;;;;:10;:17::i;:::-;1564:3;;:23;;;;;-1:-1:-1;;;;;1564:23:159;;;;;-1:-1:-1;;;;;1564:23:159;;;;;;1609:22;;;;;;;;;;;;;;-1:-1:-1;;;1609:22:159;;;:10;:22::i;:::-;1598:8;:33;;-1:-1:-1;;;;;;1598:33:159;-1:-1:-1;;;;;1598:33:159;;;;;;;;;;1650:20;;;;;;;;;;;;-1:-1:-1;;;1650:20:159;;;;;;:10;:20::i;:::-;1641:6;:29;;-1:-1:-1;;;;;;1641:29:159;-1:-1:-1;;;;;1641:29:159;;;;;;;;;;1695:26;;;;;;;;;;;;-1:-1:-1;;;1695:26:159;;;;;;:10;:26::i;:::-;1680:12;:41;;-1:-1:-1;;;;;;1680:41:159;-1:-1:-1;;;;;1680:41:159;;;;;;;;;;1744:24;;;;;;;;;;;;-1:-1:-1;;;1744:24:159;;;;;;:10;:24::i;:::-;1731:10;:37;;-1:-1:-1;;;;;;1731:37:159;-1:-1:-1;;;;;1731:37:159;;;;;;;;;;1787:20;;;;;;;;;;;;-1:-1:-1;;;1787:20:159;;;;;;:10;:20::i;:::-;1778:6;:29;;-1:-1:-1;;;;;;1778:29:159;-1:-1:-1;;;;;1778:29:159;;;;;;;;;;1829:15;1818:8;:26;1380:471::o;9725:262:163:-;9791:7;;9832:89;9873:38;9901:9;:3;9907;9901:9;:::i;:::-;9881:10;;9873:27;:38::i;:::-;9840:10;;9832:27;:89::i;:::-;9810:111;-1:-1:-1;9938:42:163;565:4:32;9810:111:163;9938:29;:42::i;7679:1001:162:-;7837:16;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;7865:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7889:17:162;;-1:-1:-1;;;7889:17:162;;-1:-1:-1;;;;;4511:32:165;;7889:17:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;7889:13:162;-1:-1:-1;7889:13:162;;-1:-1:-1;4466:18:165;;7889:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7974:10:162;;:26;;;-1:-1:-1;;;7974:26:162;;;;87:42:161;;-1:-1:-1;;;;;;7974:10:162;;;;-1:-1:-1;7974:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;7966:61:162;;:99;;;;-1:-1:-1;8043:22:162;;7966:99;7949:725;;;8113:10;;8143:23;;;;8273:22;;8113:200;;-1:-1:-1;;;8113:200:162;;-1:-1:-1;;;;;8113:10:162;;;;:21;;8143:23;8113:200;;8190:12;;8224:3;;8249:2;;8273:22;8113:200;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8090:223;;;;7949:725;8344:9;;8359:23;;;;8344:39;;-1:-1:-1;;;8344:39:162;;;;;1098:25:165;;;;8344:9:162;;;;-1:-1:-1;;;;;8344:9:162;;:14;;1071:18:165;;8344:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8397:9:162;;8423:10;;8436:23;;;;8397:63;;-1:-1:-1;;;8397:63:162;;-1:-1:-1;;;;;8423:10:162;;;8397:63;;;8891:51:165;8958:18;;;8951:34;;;;8397:9:162;;;;;;-1:-1:-1;8397:17:162;;-1:-1:-1;8864:18:165;;8397:63:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;8497:10:162;;8623:22;;8497:166;;-1:-1:-1;;;8497:166:162;;-1:-1:-1;;;;;8497:10:162;;;;:21;;:166;;8540:12;;8574:3;;8599:2;;8623:22;8497:166;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;18851:1379::-;18989:20;19011:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;19041:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19065:21:162;;-1:-1:-1;;;19065:21:162;;-1:-1:-1;;;;;4511:32:165;;19065:21:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;19065:13:162;-1:-1:-1;19065:13:162;;-1:-1:-1;4466:18:165;;19065:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19201:10:162;;19139:82;;-1:-1:-1;;;;;;19201:10:162;;-1:-1:-1;19139:48:162;:82::i;:::-;19124:97;;87:42:161;-1:-1:-1;;;;;19248:61:162;19256:10;;;;;;;;;-1:-1:-1;;;;;19256:10:162;-1:-1:-1;;;;;19256:24:162;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;19248:61:162;;:99;;;;-1:-1:-1;19325:22:162;;19248:99;19231:949;;;19401:10;;19446:23;;;;19529:21;;;;19588:23;;;;;19653:22;;19401:288;;-1:-1:-1;;;19401:288:162;;-1:-1:-1;;;;;19401:10:162;;;;:20;;19446:23;19401:288;;19501:10;;19529:21;;19629:6;;19653:22;19401:288;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;19372:317;;-1:-1:-1;19372:317:162;-1:-1:-1;19231:949:162;;;19720:9;;19735:23;;;;19720:39;;-1:-1:-1;;;19720:39:162;;;;;1098:25:165;;;;19720:9:162;;;;-1:-1:-1;;;;;19720:9:162;;:14;;1071:18:165;;19720:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19773:9:162;;19799:10;;19812:21;;;;19773:61;;-1:-1:-1;;;19773:61:162;;-1:-1:-1;;;;;19799:10:162;;;19773:61;;;8891:51:165;8958:18;;;8951:34;;;;19773:9:162;;;;;;-1:-1:-1;19773:17:162;;-1:-1:-1;8864:18:165;;19773:61:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;19877:10:162;;19943:21;;;;20002:23;;;;;20067:22;;19877:226;;-1:-1:-1;;;19877:226:162;;-1:-1:-1;;;;;19877:10:162;;;;:20;;:226;;19915:10;;19943:21;;20043:6;;20067:22;19877:226;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;20117:9;;20132:23;;;;19848:255;;-1:-1:-1;19848:255:162;;-1:-1:-1;20117:9:162;;;-1:-1:-1;;;;;20117:9:162;;:14;;20132:36;;19848:255;;20132:36;:::i;:::-;20117:52;;;;;;;;;;;;;1098:25:165;;1086:2;1071:18;;952:177;20117:52:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19231:949;18851:1379;;;;;;:::o;9859:1182::-;9998:16;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;10026:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10050:17:162;;-1:-1:-1;;;10050:17:162;;-1:-1:-1;;;;;4511:32:165;;10050:17:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;10050:13:162;-1:-1:-1;10050:13:162;;-1:-1:-1;4466:18:165;;10050:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10141:10:162;;:26;;;-1:-1:-1;;;10141:26:162;;;;87:42:161;;-1:-1:-1;;;;;;10141:10:162;;;;-1:-1:-1;10141:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;10133:61:162;;:99;;;;-1:-1:-1;10210:22:162;;10133:99;10116:919;;;10280:10;;10312:23;;;;10393:21;;;;10453;;;;10537:22;;10280:297;;-1:-1:-1;;;10280:297:162;;-1:-1:-1;;;;;10280:10:162;;;;:23;;10312;10280:297;;10359:12;;10393:21;;10453;;10513:2;;10280:297;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10257:320;;;;10116:919;10608:9;;10623:23;;;;10608:39;;-1:-1:-1;;;10608:39:162;;;;;1098:25:165;;;;10608:9:162;;;;-1:-1:-1;;;;;10608:9:162;;:14;;1071:18:165;;10608:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10661:9:162;;10687:10;;10700:23;;;;10661:63;;-1:-1:-1;;;10661:63:162;;-1:-1:-1;;;;;10687:10:162;;;10661:63;;;8891:51:165;8958:18;;;8951:34;;;;10661:9:162;;;;;;-1:-1:-1;10661:17:162;;-1:-1:-1;8864:18:165;;10661:63:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;10761:10:162;;10840:21;;;;10900;;;;10984:22;;10761:263;;-1:-1:-1;;;10761:263:162;;-1:-1:-1;;;;;10761:10:162;;;;:23;;:263;;10806:12;;10840:21;;10900;;10960:2;;10761:263;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;538:227:163:-;625:7;712:10;-1:-1:-1;;;;;712:24:163;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:45;;;694:63;;:15;:63;:::i;:::-;663:95;;:15;:95;:::i;12465:1649::-;12548:7;12567:40;12610:10;-1:-1:-1;;;;;12610:24:163;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12567:69;;12646:36;12685:10;-1:-1:-1;;;;;12685:22:163;;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12646:63;;12738:1369;14087:8;:19;;;12738:1323;12813:1230;;;;;;;;12888:8;:22;;;12813:1230;;;;12953:8;:24;;;12813:1230;;;;13017:8;:21;;;12813:1230;;;;13076:8;:19;;;12813:1230;;;;13140:10;:28;;;12813:1230;;;;13216:10;:31;;;12813:1230;;;;13286:10;:22;;;12813:1230;;;;13352:8;:25;;;12813:1230;;;;13429:233;13481:10;13521:115;13602:4;13529:8;:32;;;13521:47;;:115;;;;:::i;:::-;13429:22;:233::i;:::-;12813:1230;;;;13707:8;:26;;;12813:1230;;;;13786:234;13838:10;13878:116;13960:4;13886:8;:33;;;13878:48;;:116;;;;:::i;13786:234::-;12813:1230;;12738:53;:1323::i;:::-;:1348;;:1369::i;984:556:32:-;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;1814:119::-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;12212:502:162:-;12351:20;12373:24;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;12409:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12433:17:162;;-1:-1:-1;;;12433:17:162;;-1:-1:-1;;;;;4511:32:165;;12433:17:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;12433:13:162;-1:-1:-1;12433:13:162;;-1:-1:-1;4466:18:165;;12433:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12523:10:162;;12591:21;;;;12671:22;;12523:184;;-1:-1:-1;;;12523:184:162;;-1:-1:-1;;;;;12523:10:162;;;;-1:-1:-1;12523:26:162;;-1:-1:-1;12523:184:162;;12567:6;;12591:21;12651:2;;12523:184;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12504:203;;;;12212:502;;;;;;:::o;521:114:59:-;581:7;611:1;607;:5;:21;;623:5;627:1;623;:5;:::i;:::-;607:21;;;615:5;619:1;615;:5;:::i;2409:432:50:-;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;2452:359;;2652:67;;;-1:-1:-1;;;;;;;;;;;2652:67:50;;;24808:51:165;;;-1:-1:-1;;;24875:18:165;;;24868:34;;;;2712:4:50;24918:18:165;;;24911:34;2489:11:50;;1671:64;2586:43;;24781:18:165;;2652:67:50;;;-1:-1:-1;;2652:67:50;;;;;;;;;;2541:196;;;2652:67;2541:196;;:::i;:::-;;;;-1:-1:-1;;2541:196:50;;;;;;;;;;2506:245;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;2452:359:50;2820:7;:14;;-1:-1:-1;;2820:14:50;;;;;2409:432::o;21435:529:162:-;21607:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;21637:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21661:21:162;;-1:-1:-1;;;21661:21:162;;-1:-1:-1;;;;;4511:32:165;;21661:21:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;21661:13:162;-1:-1:-1;21661:13:162;;-1:-1:-1;4466:18:165;;21661:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21740:10:162;;21837:21;;;;21921:22;;21740:217;;-1:-1:-1;;;21740:217:162;;-1:-1:-1;;;;;21740:10:162;;;;-1:-1:-1;21740:21:162;;-1:-1:-1;21740:217:162;;21779:12;;21809:10;;21837:21;;21897:6;;21921:22;21740:217;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21721:236;21435:529;-1:-1:-1;;;;;21435:529:162:o;15001:1146::-;15138:20;15160;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;15192:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15216:21:162;;-1:-1:-1;;;15216:21:162;;-1:-1:-1;;;;;4511:32:165;;15216:21:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;15216:13:162;-1:-1:-1;15216:13:162;;-1:-1:-1;4466:18:165;;15216:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15299:10:162;;:26;;;-1:-1:-1;;;15299:26:162;;;;87:42:161;;-1:-1:-1;;;;;;15299:10:162;;;;-1:-1:-1;15299:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;15291:61:162;;:99;;;;-1:-1:-1;15368:22:162;;15291:99;15274:867;;;15438:10;;15466:23;;;;15545:21;;;;15609:23;;;;;15682:22;;15438:284;;-1:-1:-1;;;15438:284:162;;-1:-1:-1;;;;;15438:10:162;;;;:19;;15466:23;15438:284;;15513:10;;15545:21;;15654:6;;15682:22;15438:284;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;15415:307;;;;;;15274:867;15753:9;;:26;;-1:-1:-1;;;15753:26:162;;;;;1098:25:165;;;15753:9:162;;;;-1:-1:-1;;;;;15753:9:162;;:14;;1071:18:165;;15753:26:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15793:9:162;;15819:10;;15793:50;;-1:-1:-1;;;15793:50:162;;-1:-1:-1;;;;;15819:10:162;;;15793:50;;;8891:51:165;8958:18;;;8951:34;;;15793:9:162;;;;;;-1:-1:-1;15793:17:162;;-1:-1:-1;8864:18:165;;15793:50:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;15880:10:162;;15953:21;;;;16017:23;;;;;16090:22;;15880:250;;-1:-1:-1;;;15880:250:162;;-1:-1:-1;;;;;15880:10:162;;;;:19;;:250;;15921:10;;15953:21;;16062:6;;16090:22;15880:250;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;17382:526::-;17553:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;17583:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;17607:21:162;;-1:-1:-1;;;17607:21:162;;-1:-1:-1;;;;;4511:32:165;;17607:21:162;;;4493:51:165;-1:-1:-1;;;;;;;;;;;17607:13:162;-1:-1:-1;17607:13:162;;-1:-1:-1;4466:18:165;;17607:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;17685:10:162;;17781:21;;;;17865:22;;17685:216;;-1:-1:-1;;;17685:216:162;;-1:-1:-1;;;;;17685:10:162;;;;-1:-1:-1;17685:20:162;;-1:-1:-1;17685:216:162;;17723:12;;17753:10;;17781:21;;17841:6;;17865:22;17685:216;;;:::i;3262:157:50:-;3322:9;3317:96;;-1:-1:-1;;;;;;;;;;;3352:30:50;;;;25158:2:165;25140:21;;;25197:2;25177:18;;;25170:30;25236:25;25231:2;25216:18;;25209:53;25294:2;25279:18;;24956:347;3352:30:50;;;;;;;;3396:6;:4;:6::i;11955:259::-;12016:1;12012;:5;12008:200;;;-1:-1:-1;;;;;;;;;;;12038:41:50;;;;25510:2:165;25492:21;;;25549:2;25529:18;;;25522:30;25588:34;25583:2;25568:18;;25561:62;-1:-1:-1;;;25654:2:165;25639:18;;25632:32;25696:3;25681:19;;25308:398;12038:41:50;;;;;;;;12098:30;;;25923:21:165;;;25980:1;25960:18;;;25953:29;-1:-1:-1;;;26013:2:165;25998:18;;25991:39;26097:4;26082:20;;26075:36;;;12098:30:50;;-1:-1:-1;;;;;;;;;;;12098:30:50;;;;26062:3:165;12098:30:50;;;12147;;;26334:21:165;;;26391:1;26371:18;;;26364:29;;;;-1:-1:-1;;;26424:2:165;26409:18;;26402:39;26508:4;26493:20;;26486:36;;;-1:-1:-1;;;;;;;;;;;12147:30:50;26473:3:165;26458:19;12147:30:50;;;;;;;;12191:6;:4;:6::i;15921:259::-;15982:1;15978;:5;15974:200;;;-1:-1:-1;;;;;;;;;;;16004:41:50;;;;26735:2:165;26717:21;;;26774:2;26754:18;;;26747:30;26813:34;26808:2;26793:18;;26786:62;-1:-1:-1;;;26879:2:165;26864:18;;26857:32;26921:3;26906:19;;26533:398;868:133:66;939:55;986:7;965:19;939:55::i;5209:262:50:-;5271:1;5266;:6;5262:203;;-1:-1:-1;;;;;;;;;;;5293:41:50;;;;27138:2:165;27120:21;;;27177:2;27157:18;;;27150:30;27216:34;27211:2;27196:18;;27189:62;-1:-1:-1;;;27282:2:165;27267:18;;27260:32;27324:3;27309:19;;26936:398;5293:41:50;;;;;;;;5353:31;;;18798:21:165;;;18855:2;18835:18;;;18828:30;-1:-1:-1;;;18889:2:165;18874:18;;18867:40;18974:4;18959:20;;18952:36;;;5353:31:50;;-1:-1:-1;;;;;;;;;;;5353:31:50;;;;18939:3:165;5353:31:50;;;5403;;;19211:21:165;;;19268:2;19248:18;;;19241:30;;;;-1:-1:-1;;;19302:2:165;19287:18;;19280:40;19387:4;19372:20;;19365:36;;;-1:-1:-1;;;;;;;;;;;5403:31:50;19352:3:165;19337:19;5403:31:50;18999:408:165;2207:165:32;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;1226:237:163:-;1330:7;1412:11;-1:-1:-1;;;;;1412:25:163;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;;1368:29;1385:11;1368:16;:29::i;:::-;:88;;;;:::i;4141:115:32:-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;771:449:163:-;896:21;961:29;978:11;961:16;:29::i;:::-;945:13;:45;:121;;1065:1;945:121;;;1021:29;1038:11;1021:16;:29::i;:::-;1005:45;;:13;:45;:::i;:::-;929:137;;1092:91;1129:11;-1:-1:-1;;;;;1129:25:163;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;;1093:13;;1092:23;:91::i;58989:5242:33:-;59092:7;59242:20;59400:106;59455:7;:33;;;59400:7;:25;;;:33;;:106;;;;:::i;:::-;59318:32;;;;59285:24;;;;:66;;:32;:66::i;:::-;59265:255;;;;:::i;:::-;59242:278;;59530:30;59563:113;59608:7;:21;;;59643:7;:23;;;59563:31;:113::i;:::-;59530:146;;59706:1;59690:13;:17;59686:3447;;;60378:21;60403:291;60452:22;60492:7;:20;;;60530:7;:28;;;60582:7;:19;;;150:4:32;60576:25:33;;;;:::i;:::-;60619:7;:18;;;60655:7;:25;;;60403:31;:291::i;:::-;60375:319;-1:-1:-1;60724:41:33;;-1:-1:-1;60375:319:33;60750:13;60724:17;:41::i;:::-;60708:57;-1:-1:-1;60834:17:33;;60830:448;;60896:367;60988:22;61036:7;:20;;;61082:13;61127:7;:19;;;150:4:32;61121:25:33;;;;:::i;:::-;61172:7;:18;;;61216:7;:25;;;60896:66;:367::i;:::-;60871:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;60830:448:33;59709:1579;59686:3447;;;61314:1;61298:13;:17;61294:1839;;;62119:14;62120:13;62119:14;:::i;:::-;62103:30;;62197:21;62222:244;62270:22;62310:7;:20;;;62354:7;:19;;;150:4:32;62348:25:33;;;;:::i;:::-;62391:7;:18;;;62427:7;:25;;;62222:30;:244::i;:::-;62194:272;-1:-1:-1;62496:41:33;;-1:-1:-1;62194:272:33;62522:13;62496:17;:41::i;:::-;62480:57;-1:-1:-1;62602:17:33;;62598:448;;62664:367;62756:22;62804:7;:20;;;62850:13;62895:7;:19;;;150:4:32;62889:25:33;;;;:::i;:::-;62940:7;:18;;;62984:7;:25;;;62664:66;:367::i;:::-;62639:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;62598:448:33;63084:38;63109:13;63092;63084:38;:::i;:::-;63059:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;61294:1839:33;63266:19;63500:153;63563:7;:32;;;150:4:32;63557:38:33;;;;:::i;:::-;63617:18;;;;63500:24;;;;;:153;:35;:153::i;:::-;63308:143;63368:7;:33;;;150:4:32;63362:39:33;;;;:::i;:::-;63419:18;;;;63308:25;;;;;:143;:36;:143::i;:::-;63288:379;;;;:::i;:::-;63266:401;;63677:27;63751:12;63714:7;:21;;;63707:56;;;;:::i;:::-;63677:86;;63807:7;:28;;;63777:20;:59;63773:131;;;63859:34;;-1:-1:-1;;;63859:34:33;;;;;;;;;;;63773:131;63913:53;;;64196:28;;;;64172:52;;63945:20;64172:52;:::i;1007:380:66:-;1105:14;;591:42;1278:2;1265:16;;1081:21;;1105:14;1265:16;591:42;1314:5;1303:68;1294:77;;1231:150;;1007:380;:::o;2726:748:32:-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;68721:340:33:-;68856:7;;68907:53;68944:16;68914:14;68907:53;:::i;:::-;68875:85;;69004:1;68978:22;:27;;68970:36;;;;;9241:983:35;9414:7;;;9880:13;:1;9890:2;9880:9;:13::i;:::-;9863:30;;9903:9;9915:47;9942:6;9950:2;9954:1;9957;9960;9915:26;:47::i;:::-;9903:59;-1:-1:-1;9972:16:35;9991:105;10054:32;565:4:32;10084:1:35;10054:29;:32::i;:::-;9996:39;10011:23;10032:1;10011:16;:2;10022:4;10011:10;:16::i;:::-;:20;;:23::i;:::-;9996:6;;:14;:39::i;:::-;9992:43;;:1;:43;:::i;9991:105::-;9972:124;-1:-1:-1;10194:8:35;10198:4;10194:1;:8;:::i;:::-;10204:12;10215:1;10204:8;:12;:::i;:::-;10186:31;;;;;;;9241:983;;;;;;;;;;:::o;14433:104:32:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;;-1:-1:-1;14525:1:32;14433:104;-1:-1:-1;14433:104:32:o;4871:481:35:-;5056:14;5082:12;5124:136;5172:1;5187;5202:2;5218:1;5233;5248:2;5124:34;:136::i;:::-;5104:156;;-1:-1:-1;5104:156:35;-1:-1:-1;5104:156:35;5270:76;;5305:30;;-1:-1:-1;;;5305:30:35;;;;;;;;;;;5270:76;5072:280;4871:481;;;;;;;;:::o;7623:1046::-;7773:7;;;8276:13;:1;8286:2;8276:9;:13::i;:::-;8259:30;;8299:9;8311:47;8338:6;8346:2;8350:1;8353;8356;8311:26;:47::i;:::-;8299:59;-1:-1:-1;8368:16:35;8387:103;8448:32;565:4:32;8478:1:35;8448:29;:32::i;:::-;8388:41;8398:30;565:4:32;8398:6:35;:30;:::i;:::-;8388:1;;:9;:41::i;8387:103::-;8368:122;-1:-1:-1;8500:16:35;8519:20;8368:122;8536:2;8519:16;:20::i;:::-;8500:39;-1:-1:-1;8635:12:35;8646:1;8500:39;8635:12;:::i;:::-;8649;8653:8;8649:1;:12;:::i;:::-;8627:35;;;;;;;;7623:1046;;;;;;;;:::o;3358:892::-;3543:7;;3595:13;:1;3605:2;3595:9;:13::i;:::-;3578:30;;3669:9;3681:47;3708:6;3716:2;3720:1;3723;3726;3681:26;:47::i;:::-;3669:59;-1:-1:-1;3770:15:35;3783:1;3771:6;3775:2;3771:1;:6;:::i;3770:15::-;3766:19;-1:-1:-1;3884:10:35;3897:81;3938:30;565:4:32;3966:1:35;3938:27;:30::i;:::-;3897:23;3913:6;3898:5;3902:1;3898;:5;:::i;:::-;3897:15;;:23::i;:81::-;3884:94;-1:-1:-1;4088:14:35;3884:94;4099:2;4088:10;:14::i;:::-;4083:19;-1:-1:-1;4237:6:35;4242:1;4083:19;4237:6;:::i;:::-;4230:13;3358:892;-1:-1:-1;;;;;;;;;;3358:892:35:o;10669:302::-;10835:7;10956:8;:1;10962;10956:5;:8::i;:::-;10917:36;10932:20;10950:1;10932:13;:2;10943:1;10932:10;:13::i;:20::-;10917:6;;:14;:36::i;:::-;:47;;;;:::i;4671:846:32:-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;6050:1039:35:-;6239:14;;;6312:13;:1;6322:2;6312:9;:13::i;:::-;6295:30;;6386:9;6398:47;6425:6;6433:2;6437:1;6440;6443;6398:26;:47::i;:::-;6386:59;-1:-1:-1;6487:15:35;6500:1;6488:6;6492:2;6488:1;:6;:::i;6487:15::-;6483:19;;6520:1;6516;:5;6512:53;;;6545:1;6548:5;6537:17;;;;;;;;6512:53;6663:10;6676:81;6717:30;565:4:32;6745:1:35;6717:27;:30::i;:::-;6676:23;6692:6;6677:5;6681:1;6677;:5;:::i;6676:81::-;6663:94;-1:-1:-1;6867:14:35;6663:94;6878:2;6867:10;:14::i;:::-;6862:19;;7015:2;7011:1;:6;7007:52;;;7042:6;7046:2;7042:1;:6;:::i;:::-;7033:15;;7007:52;7078:4;7068:14;;6269:820;;;6050:1039;;;;;;;;;:::o;9632:3592:32:-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;-1:-1:-1;;;;;;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;-1:-1:-1:-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:248:165:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:165;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:165:o;267:131::-;-1:-1:-1;;;;;342:31:165;;332:42;;322:70;;388:1;385;378:12;403:544;495:6;503;511;564:2;552:9;543:7;539:23;535:32;532:52;;;580:1;577;570:12;532:52;619:9;606:23;638:31;663:5;638:31;:::i;:::-;688:5;-1:-1:-1;745:2:165;730:18;;717:32;758:33;717:32;758:33;:::i;:::-;810:7;-1:-1:-1;869:2:165;854:18;;841:32;882:33;841:32;882:33;:::i;:::-;934:7;924:17;;;403:544;;;;;:::o;1243:658::-;1414:2;1466:21;;;1536:13;;1439:18;;;1558:22;;;1385:4;;1414:2;1637:15;;;;1611:2;1596:18;;;1385:4;1680:195;1694:6;1691:1;1688:13;1680:195;;;1759:13;;-1:-1:-1;;;;;1755:39:165;1743:52;;1850:15;;;;1815:12;;;;1791:1;1709:9;1680:195;;;-1:-1:-1;1892:3:165;;1243:658;-1:-1:-1;;;;;;1243:658:165:o;1906:613::-;2007:6;2015;2023;2031;2084:3;2072:9;2063:7;2059:23;2055:33;2052:53;;;2101:1;2098;2091:12;2052:53;2140:9;2127:23;2159:31;2184:5;2159:31;:::i;:::-;2209:5;-1:-1:-1;2266:2:165;2251:18;;2238:32;2279:33;2238:32;2279:33;:::i;:::-;2331:7;-1:-1:-1;2385:2:165;2370:18;;2357:32;;-1:-1:-1;2441:2:165;2426:18;;2413:32;2454:33;2413:32;2454:33;:::i;:::-;1906:613;;;;-1:-1:-1;1906:613:165;;-1:-1:-1;;1906:613:165:o;2776:127::-;2837:10;2832:3;2828:20;2825:1;2818:31;2868:4;2865:1;2858:15;2892:4;2889:1;2882:15;2908:252;2980:2;2974:9;3022:3;3010:16;;3056:18;3041:34;;3077:22;;;3038:62;3035:88;;;3103:18;;:::i;:::-;3139:2;3132:22;2908:252;:::o;3165:250::-;3232:2;3226:9;3274:6;3262:19;;3311:18;3296:34;;3332:22;;;3293:62;3290:88;;;3358:18;;:::i;3420:922::-;3489:6;3542:2;3530:9;3521:7;3517:23;3513:32;3510:52;;;3558:1;3555;3548:12;3510:52;3598:9;3585:23;3627:18;3668:2;3660:6;3657:14;3654:34;;;3684:1;3681;3674:12;3654:34;3722:6;3711:9;3707:22;3697:32;;3767:7;3760:4;3756:2;3752:13;3748:27;3738:55;;3789:1;3786;3779:12;3738:55;3825:2;3812:16;3847:2;3843;3840:10;3837:36;;;3853:18;;:::i;:::-;3928:2;3922:9;3896:2;3982:13;;-1:-1:-1;;3978:22:165;;;4002:2;3974:31;3970:40;3958:53;;;4026:18;;;4046:22;;;4023:46;4020:72;;;4072:18;;:::i;:::-;4112:10;4108:2;4101:22;4147:2;4139:6;4132:18;4187:7;4182:2;4177;4173;4169:11;4165:20;4162:33;4159:53;;;4208:1;4205;4198:12;4159:53;4264:2;4259;4255;4251:11;4246:2;4238:6;4234:15;4221:46;4309:1;4287:15;;;4304:2;4283:24;4276:35;;;;-1:-1:-1;4291:6:165;3420:922;-1:-1:-1;;;;;3420:922:165:o;4555:1569::-;4759:4;4788:2;4828;4817:9;4813:18;4858:2;4847:9;4840:21;4881:6;4916;4910:13;4947:6;4939;4932:22;4973:2;4963:12;;5006:2;4995:9;4991:18;4984:25;;5068:2;5058:6;5055:1;5051:14;5040:9;5036:30;5032:39;5106:2;5098:6;5094:15;5127:1;5148;5158:937;5174:6;5169:3;5166:15;5158:937;;;5243:22;;;-1:-1:-1;;5239:36:165;5227:49;;5299:13;;5386:9;;-1:-1:-1;;;;;5382:35:165;5367:51;;5457:11;;5451:18;5489:15;;;5482:27;;;5570:19;;5339:15;;;5602:24;;;5692:21;;;;5737:1;;5660:2;5648:15;;;5751:236;5767:8;5762:3;5759:17;5751:236;;;5848:15;;-1:-1:-1;;;;;;5844:42:165;5830:57;;5956:17;;;;5795:1;5786:11;;;;;5913:14;;;;5751:236;;;-1:-1:-1;6073:12:165;;;;6010:5;-1:-1:-1;;;6038:15:165;;;;5200:1;5191:11;5158:937;;;-1:-1:-1;6112:6:165;;4555:1569;-1:-1:-1;;;;;;;;;4555:1569:165:o;6129:250::-;6214:1;6224:113;6238:6;6235:1;6232:13;6224:113;;;6314:11;;;6308:18;6295:11;;;6288:39;6260:2;6253:10;6224:113;;;-1:-1:-1;;6371:1:165;6353:16;;6346:27;6129:250::o;6384:271::-;6426:3;6464:5;6458:12;6491:6;6486:3;6479:19;6507:76;6576:6;6569:4;6564:3;6560:14;6553:4;6546:5;6542:16;6507:76;:::i;:::-;6637:2;6616:15;-1:-1:-1;;6612:29:165;6603:39;;;;6644:4;6599:50;;6384:271;-1:-1:-1;;6384:271:165:o;6660:803::-;6822:4;6851:2;6891;6880:9;6876:18;6921:2;6910:9;6903:21;6944:6;6979;6973:13;7010:6;7002;6995:22;7048:2;7037:9;7033:18;7026:25;;7110:2;7100:6;7097:1;7093:14;7082:9;7078:30;7074:39;7060:53;;7148:2;7140:6;7136:15;7169:1;7179:255;7193:6;7190:1;7187:13;7179:255;;;7286:2;7282:7;7270:9;7262:6;7258:22;7254:36;7249:3;7242:49;7314:40;7347:6;7338;7332:13;7314:40;:::i;:::-;7304:50;-1:-1:-1;7412:12:165;;;;7377:15;;;;7215:1;7208:9;7179:255;;;-1:-1:-1;7451:6:165;;6660:803;-1:-1:-1;;;;;;;6660:803:165:o;7468:315::-;7544:6;7552;7560;7613:2;7601:9;7592:7;7588:23;7584:32;7581:52;;;7629:1;7626;7619:12;7581:52;-1:-1:-1;;7652:23:165;;;7722:2;7707:18;;7694:32;;-1:-1:-1;7773:2:165;7758:18;;;7745:32;;7468:315;-1:-1:-1;7468:315:165:o;7980:127::-;8041:10;8036:3;8032:20;8029:1;8022:31;8072:4;8069:1;8062:15;8096:4;8093:1;8086:15;8112:128;8179:9;;;8200:11;;;8197:37;;;8214:18;;:::i;8245:184::-;8315:6;8368:2;8356:9;8347:7;8343:23;8339:32;8336:52;;;8384:1;8381;8374:12;8336:52;-1:-1:-1;8407:16:165;;8245:184;-1:-1:-1;8245:184:165:o;8434:127::-;8495:10;8490:3;8486:20;8483:1;8476:31;8526:4;8523:1;8516:15;8550:4;8547:1;8540:15;8566:120;8606:1;8632;8622:35;;8637:18;;:::i;:::-;-1:-1:-1;8671:9:165;;8566:120::o;9275:277::-;9342:6;9395:2;9383:9;9374:7;9370:23;9366:32;9363:52;;;9411:1;9408;9401:12;9363:52;9443:9;9437:16;9496:5;9489:13;9482:21;9475:5;9472:32;9462:60;;9518:1;9515;9508:12;9557:220;9706:2;9695:9;9688:21;9669:4;9726:45;9767:2;9756:9;9752:18;9744:6;9726:45;:::i;9782:317::-;-1:-1:-1;;;;;9959:32:165;;9941:51;;10028:2;10023;10008:18;;10001:30;;;-1:-1:-1;;10048:45:165;;10074:18;;10066:6;10048:45;:::i;10413:380::-;10492:1;10488:12;;;;10535;;;10556:61;;10610:4;10602:6;10598:17;10588:27;;10556:61;10663:2;10655:6;10652:14;10632:18;10629:38;10626:161;;10709:10;10704:3;10700:20;10697:1;10690:31;10744:4;10741:1;10734:15;10772:4;10769:1;10762:15;10798:125;10863:9;;;10884:10;;;10881:36;;;10897:18;;:::i;10928:136::-;10963:3;-1:-1:-1;;;10984:22:165;;10981:48;;11009:18;;:::i;:::-;-1:-1:-1;11049:1:165;11045:13;;10928:136::o;11348:384::-;-1:-1:-1;;;;;;11533:33:165;;11521:46;;11590:13;;11503:3;;11612:74;11590:13;11675:1;11666:11;;11659:4;11647:17;;11612:74;:::i;:::-;11706:16;;;;11724:1;11702:24;;11348:384;-1:-1:-1;;;11348:384:165:o;11737:287::-;11866:3;11904:6;11898:13;11920:66;11979:6;11974:3;11967:4;11959:6;11955:17;11920:66;:::i;:::-;12002:16;;;;;11737:287;-1:-1:-1;;11737:287:165:o;13065:944::-;13148:12;;-1:-1:-1;;;;;1200:31:165;1188:44;;13215:4;13208:5;13204:16;13198:23;13191:4;13186:3;13182:14;13175:47;13271:4;13264:5;13260:16;13254:23;13247:4;13242:3;13238:14;13231:47;13327:4;13320:5;13316:16;13310:23;13303:4;13298:3;13294:14;13287:47;13383:4;13376:5;13372:16;13366:23;13359:4;13354:3;13350:14;13343:47;13439:4;13432:5;13428:16;13422:23;13415:4;13410:3;13406:14;13399:47;13495:4;13488:5;13484:16;13478:23;13471:4;13466:3;13462:14;13455:47;13548:4;13541:5;13537:16;13531:23;13563:48;13605:4;13600:3;13596:14;13582:12;-1:-1:-1;;;;;1200:31:165;1188:44;;1134:104;13563:48;-1:-1:-1;13630:6:165;13673:14;;;13667:21;-1:-1:-1;;;;;1200:31:165;;13732:12;;;1188:44;-1:-1:-1;;13764:6:165;13807:14;;;13801:21;12929:12;;13870;;;12917:25;12991:4;12980:16;;12974:23;12958:14;;;12951:47;13047:4;13036:16;;13030:23;13014:14;;;13007:47;-1:-1:-1;;13934:6:165;13923:18;;13917:25;13908:6;13899:16;;13892:51;13994:6;13983:18;13977:25;13968:6;13959:16;;;13952:51;13065:944::o;14014:256::-;14204:3;14189:19;;14217:47;14193:9;14246:6;14217:47;:::i;14275:354::-;14493:3;14478:19;;14506:47;14482:9;14535:6;14506:47;:::i;:::-;-1:-1:-1;;;;;14590:32:165;;;;14584:3;14569:19;;;;14562:61;14275:354;;-1:-1:-1;14275:354:165:o;14923:168::-;14996:9;;;15027;;15044:15;;;15038:22;;15024:37;15014:71;;15065:18;;:::i;15439:112::-;15471:1;15497;15487:35;;15502:18;;:::i;:::-;-1:-1:-1;15536:9:165;;15439:112::o;15807:1098::-;15903:6;15956:3;15944:9;15935:7;15931:23;15927:33;15924:53;;;15973:1;15970;15963:12;15924:53;15999:22;;:::i;:::-;16050:9;16044:16;16037:5;16030:31;16114:2;16103:9;16099:18;16093:25;16088:2;16081:5;16077:14;16070:49;16172:2;16161:9;16157:18;16151:25;16146:2;16139:5;16135:14;16128:49;16230:2;16219:9;16215:18;16209:25;16204:2;16197:5;16193:14;16186:49;16289:3;16278:9;16274:19;16268:26;16262:3;16255:5;16251:15;16244:51;16349:3;16338:9;16334:19;16328:26;16322:3;16315:5;16311:15;16304:51;16409:3;16398:9;16394:19;16388:26;16382:3;16375:5;16371:15;16364:51;16469:3;16458:9;16454:19;16448:26;16442:3;16435:5;16431:15;16424:51;16494:3;16550:2;16539:9;16535:18;16529:25;16524:2;16517:5;16513:14;16506:49;;16574:3;16630:2;16619:9;16615:18;16609:25;16604:2;16597:5;16593:14;16586:49;;16654:3;16710:2;16699:9;16695:18;16689:25;16684:2;16677:5;16673:14;16666:49;;16734:3;16790:2;16779:9;16775:18;16769:25;16764:2;16757:5;16753:14;16746:49;;16814:3;16870:2;16859:9;16855:18;16849:25;16844:2;16837:5;16833:14;16826:49;;16894:5;16884:15;;;15807:1098;;;;:::o;17090:192::-;17169:13;;-1:-1:-1;;;;;17211:46:165;;17201:57;;17191:85;;17272:1;17269;17262:12;17287:554;17387:6;17440:2;17428:9;17419:7;17415:23;17411:32;17408:52;;;17456:1;17453;17446:12;17408:52;17489:2;17483:9;17531:2;17523:6;17519:15;17600:6;17588:10;17585:22;17564:18;17552:10;17549:34;17546:62;17543:88;;;17611:18;;:::i;:::-;17647:2;17640:22;17686:40;17716:9;17686:40;:::i;:::-;17678:6;17671:56;17760:49;17805:2;17794:9;17790:18;17760:49;:::i;:::-;17755:2;17743:15;;17736:74;17747:6;17287:554;-1:-1:-1;;;17287:554:165:o;17978:200::-;18044:9;;;18017:4;18072:9;;18100:10;;18112:12;;;18096:29;18135:12;;;18127:21;;18093:56;18090:82;;;18152:18;;:::i;:::-;18090:82;17978:200;;;;:::o;20238:216::-;20302:9;;;20330:11;;;20277:3;20360:9;;20388:10;;20384:19;;20413:10;;20405:19;;20381:44;20378:70;;;20428:18;;:::i;:::-;20378:70;;20238:216;;;;:::o;20459:112::-;20490:1;20516;20506:35;;20521:18;;:::i;:::-;-1:-1:-1;20555:10:165;;20459:112::o;20576:446::-;20826:2;20815:9;20808:21;20865:1;20860:2;20849:9;20845:18;20838:29;-1:-1:-1;;;20898:2:165;20887:9;20883:18;20876:35;20949:3;20942:4;20931:9;20927:20;20920:33;20789:4;20970:46;21011:3;21000:9;20996:19;20988:6;20970:46;:::i;21027:291::-;21204:2;21193:9;21186:21;21167:4;21224:45;21265:2;21254:9;21250:18;21242:6;21224:45;:::i;:::-;21216:53;;21305:6;21300:2;21289:9;21285:18;21278:34;21027:291;;;;;:::o;21617:146::-;21704:13;;21726:31;21704:13;21726:31;:::i;21768:525::-;21830:5;21878:4;21866:9;21861:3;21857:19;21853:30;21850:50;;;21896:1;21893;21886:12;21850:50;21929:2;21923:9;21971:4;21963:6;21959:17;22042:6;22030:10;22027:22;22006:18;21994:10;21991:34;21988:62;21985:88;;;22053:18;;:::i;:::-;22093:10;22089:2;22082:22;;22122:6;22113:15;;22158:9;22152:16;22144:6;22137:32;22223:2;22212:9;22208:18;22202:25;22197:2;22189:6;22185:15;22178:50;22282:2;22271:9;22267:18;22261:25;22256:2;22248:6;22244:15;22237:50;;21768:525;;;;:::o;22298:1117::-;22396:6;22449:3;22437:9;22428:7;22424:23;22420:33;22417:53;;;22466:1;22463;22456:12;22417:53;22492:17;;:::i;:::-;22532:48;22570:9;22532:48;:::i;:::-;22525:5;22518:63;22634:2;22623:9;22619:18;22613:25;22608:2;22601:5;22597:14;22590:49;22692:2;22681:9;22677:18;22671:25;22666:2;22659:5;22655:14;22648:49;22750:2;22739:9;22735:18;22729:25;22724:2;22717:5;22713:14;22706:49;22809:3;22798:9;22794:19;22788:26;22782:3;22775:5;22771:15;22764:51;22869:3;22858:9;22854:19;22848:26;22842:3;22835:5;22831:15;22824:51;22929:3;22918:9;22914:19;22908:26;22902:3;22895:5;22891:15;22884:51;22968:58;23021:3;23010:9;23006:19;22968:58;:::i;:::-;22962:3;22955:5;22951:15;22944:83;23046:3;23081:57;23134:2;23123:9;23119:18;23081:57;:::i;:::-;23065:14;;;23058:81;23158:3;23193:62;23247:7;23227:18;;;23193:62;:::i;:::-;23177:14;;;23170:86;23313:6;23298:22;;23292:29;23283:6;23272:18;;23265:57;23379:3;23364:19;;;23358:26;23349:6;23338:18;;23331:54;-1:-1:-1;23181:5:165;22298:1117;-1:-1:-1;22298:1117:165:o;23420:427::-;23645:25;;;23701:2;23686:18;;23679:34;;;;-1:-1:-1;;;;;23749:32:165;23744:2;23729:18;;23722:60;23825:14;23818:22;23813:2;23798:18;;23791:50;23632:3;23617:19;;23420:427::o;23852:499::-;24105:25;;;24161:2;24146:18;;24139:34;;;;24204:2;24189:18;;24182:34;;;;-1:-1:-1;;;;;24252:32:165;24247:2;24232:18;;24225:60;24329:14;24322:22;24316:3;24301:19;;24294:51;24092:3;24077:19;;23852:499::o;24356:245::-;24435:6;24443;24496:2;24484:9;24475:7;24471:23;24467:32;24464:52;;;24512:1;24509;24502:12;24464:52;-1:-1:-1;;24535:16:165;;24591:2;24576:18;;;24570:25;24535:16;;24570:25;;-1:-1:-1;24356:245:165:o;27339:193::-;27378:1;27404;27394:35;;27409:18;;:::i;:::-;-1:-1:-1;;;27445:18:165;;-1:-1:-1;;27465:13:165;;27441:38;27438:64;;;27482:18;;:::i;:::-;-1:-1:-1;27516:10:165;;27339:193::o",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WhaleBalanceExceeded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WhaleIsContract\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32[]\",\"name\":\"extraData\",\"type\":\"bytes32[]\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_delta\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_targetValue\",\"type\":\"uint256\"}],\"name\":\"assertWithDelta\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"createUser\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_long_long_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_long_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_long_short_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"variableRateParam\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_short_long_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_short_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"variableRateParam\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tradeSizeParam\",\"type\":\"uint256\"}],\"name\":\"test_lp_fairness_short_short_lp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"whale\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"whaleTransfer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"whale\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"whaleTransfer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}]},\"events\":{\"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])\":{\"notice\":\"Event Utils ///\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/integrations/hyperdrive/LpFairnessTest.sol\":\"LPFairnessTest\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212\",\"dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7\"]},\"contracts/src/Hyperdrive.sol\":{\"keccak256\":\"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e\",\"dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e\",\"dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn\"]},\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5\",\"dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e\",\"dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f\",\"dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8\",\"dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/factory/HyperdriveFactory.sol\":{\"keccak256\":\"0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1\",\"dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IForwarderFactory.sol\":{\"keccak256\":\"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3\",\"dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveDeployer.sol\":{\"keccak256\":\"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587\",\"dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806\",\"dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"contracts/src/token/ERC20Forwarder.sol\":{\"keccak256\":\"0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034\",\"dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p\"]},\"contracts/src/token/ForwarderFactory.sol\":{\"keccak256\":\"0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e\",\"dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef\",\"dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65\",\"dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui\"]},\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/StdCheats.sol\":{\"keccak256\":\"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a\",\"dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe\"]},\"lib/forge-std/src/StdError.sol\":{\"keccak256\":\"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6\",\"dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj\"]},\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]},\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Test.sol\":{\"keccak256\":\"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765\",\"dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]},\"lib/forge-std/src/safeconsole.sol\":{\"keccak256\":\"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae\",\"dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88\",\"dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol\":{\"keccak256\":\"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b\",\"dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276\",\"dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2\"]},\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df\",\"dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol\":{\"keccak256\":\"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790\",\"dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol\":{\"keccak256\":\"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3\",\"dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol\":{\"keccak256\":\"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b\",\"dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf\",\"dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72\",\"dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"test/integrations/hyperdrive/LpFairnessTest.sol\":{\"keccak256\":\"0x21ddce15849d7847820c6a872b44ff7c7880b7f1f7a2418748d301f66b5d79da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f48f81ae967b62d172e88b73c866a3f00639946591c5048a5c204b9445d9ad8\",\"dweb:/ipfs/QmNvxLf71ionSSmtGtQwFFTAw3Lec7FVS7etzKDhZDufPf\"]},\"test/mocks/MockHyperdrive.sol\":{\"keccak256\":\"0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378\",\"dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn\"]},\"test/utils/BaseTest.sol\":{\"keccak256\":\"0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd\",\"dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0\",\"dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1\"]},\"test/utils/HyperdriveTest.sol\":{\"keccak256\":\"0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b\",\"dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82\",\"dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171\",\"dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu\"]}},\"version\":1}",
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
              "name": "withdrawalShareAmount",
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
        "test/integrations/hyperdrive/LpFairnessTest.sol": "LPFairnessTest"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/DataProvider.sol": {
        "keccak256": "0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30",
        "urls": [
          "bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212",
          "dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/Hyperdrive.sol": {
        "keccak256": "0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5",
        "urls": [
          "bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e",
          "dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveBase.sol": {
        "keccak256": "0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95",
        "urls": [
          "bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e",
          "dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveDataProvider.sol": {
        "keccak256": "0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d",
        "urls": [
          "bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5",
          "dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLP.sol": {
        "keccak256": "0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a",
        "urls": [
          "bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e",
          "dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLong.sol": {
        "keccak256": "0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188",
        "urls": [
          "bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f",
          "dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveShort.sol": {
        "keccak256": "0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa",
        "urls": [
          "bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8",
          "dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"
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
        "keccak256": "0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde",
        "urls": [
          "bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1",
          "dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2"
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
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
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
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
        "keccak256": "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        "urls": [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"
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
        "keccak256": "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        "urls": [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"
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
        "keccak256": "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        "urls": [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"
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
        "keccak256": "0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f",
        "urls": [
          "bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef",
          "dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"
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
        "keccak256": "0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389",
        "urls": [
          "bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65",
          "dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui"
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
      "test/mocks/MockHyperdrive.sol": {
        "keccak256": "0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465",
        "urls": [
          "bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378",
          "dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn"
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
        "keccak256": "0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16",
        "urls": [
          "bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b",
          "dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/HyperdriveUtils.sol": {
        "keccak256": "0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c",
        "urls": [
          "bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82",
          "dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN"
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
    "id": 77887,
    "exportedSymbols": {
      "AssetId": [
        7731
      ],
      "FixedPointMath": [
        8486
      ],
      "HyperdriveTest": [
        120941
      ],
      "HyperdriveUtils": [
        122442
      ],
      "IHyperdrive": [
        7103
      ],
      "LPFairnessTest": [
        77886
      ],
      "Lib": [
        123044
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:13118:118",
    "nodes": [
      {
        "id": 77084,
        "nodeType": "PragmaDirective",
        "src": "39:23:118",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 77086,
        "nodeType": "ImportDirective",
        "src": "64:62:118",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 77887,
        "sourceUnit": 7732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 77085,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7731,
              "src": "73:7:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 77088,
        "nodeType": "ImportDirective",
        "src": "127:76:118",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 77887,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 77087,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "136:14:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 77092,
        "nodeType": "ImportDirective",
        "src": "204:94:118",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveTest.sol",
        "file": "../../utils/HyperdriveTest.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 77887,
        "sourceUnit": 120942,
        "symbolAliases": [
          {
            "foreign": {
              "id": 77089,
              "name": "HyperdriveTest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 120941,
              "src": "213:14:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 77090,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 122442,
              "src": "229:15:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 77091,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "246:11:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 77094,
        "nodeType": "ImportDirective",
        "src": "299:42:118",
        "nodes": [],
        "absolutePath": "test/utils/Lib.sol",
        "file": "../../utils/Lib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 77887,
        "sourceUnit": 123045,
        "symbolAliases": [
          {
            "foreign": {
              "id": 77093,
              "name": "Lib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 123044,
              "src": "308:3:118",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 77886,
        "nodeType": "ContractDefinition",
        "src": "343:12813:118",
        "nodes": [
          {
            "id": 77099,
            "nodeType": "UsingForDirective",
            "src": "391:33:118",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 77097,
              "name": "FixedPointMath",
              "nameLocations": [
                "397:14:118"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "397:14:118"
            },
            "typeName": {
              "id": 77098,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "416:7:118",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 77101,
            "nodeType": "UsingForDirective",
            "src": "429:28:118",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 77100,
              "name": "HyperdriveUtils",
              "nameLocations": [
                "435:15:118"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 122442,
              "src": "435:15:118"
            }
          },
          {
            "id": 77103,
            "nodeType": "UsingForDirective",
            "src": "462:16:118",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 77102,
              "name": "Lib",
              "nameLocations": [
                "468:3:118"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 123044,
              "src": "468:3:118"
            }
          },
          {
            "id": 77133,
            "nodeType": "FunctionDefinition",
            "src": "484:344:118",
            "nodes": [],
            "body": {
              "id": 77132,
              "nodeType": "Block",
              "src": "517:311:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 77107,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "527:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LPFairnessTest_$77886_$",
                          "typeString": "type(contract super LPFairnessTest)"
                        }
                      },
                      "id": 77109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "533:5:118",
                      "memberName": "setUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 119048,
                      "src": "527:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 77110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "527:13:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77111,
                  "nodeType": "ExpressionStatement",
                  "src": "527:13:118"
                },
                {
                  "assignments": [
                    77116
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77116,
                      "mutability": "mutable",
                      "name": "config",
                      "nameLocation": "716:6:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77132,
                      "src": "686:36:118",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 77115,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 77114,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "686:11:118",
                            "698:10:118"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "686:22:118"
                        },
                        "referencedDeclaration": 6924,
                        "src": "686:22:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77120,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "302e3035653138",
                        "id": 77118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "736:7:118",
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
                      "id": 77117,
                      "name": "testConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119224,
                      "src": "725:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function (uint256) view returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 77119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "725:19:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "686:58:118"
                },
                {
                  "expression": {
                    "id": 77125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 77121,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77116,
                        "src": "754:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 77123,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "761:20:118",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6895,
                      "src": "754:27:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "316536",
                      "id": 77124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "784:3:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000_by_1",
                        "typeString": "int_const 1000000"
                      },
                      "value": "1e6"
                    },
                    "src": "754:33:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77126,
                  "nodeType": "ExpressionStatement",
                  "src": "754:33:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77128,
                        "name": "deployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116807,
                        "src": "804:8:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77129,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77116,
                        "src": "814:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
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
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      ],
                      "id": 77127,
                      "name": "deploy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119093,
                        119116,
                        119178
                      ],
                      "referencedDeclaration": 119093,
                      "src": "797:6:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_struct$_PoolConfig_$6924_memory_ptr_$returns$__$",
                        "typeString": "function (address,struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 77130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "797:24:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77131,
                  "nodeType": "ExpressionStatement",
                  "src": "797:24:118"
                }
              ]
            },
            "baseFunctions": [
              119048
            ],
            "functionSelector": "0a9254e4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setUp",
            "nameLocation": "493:5:118",
            "overrides": {
              "id": 77105,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "508:8:118"
            },
            "parameters": {
              "id": 77104,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "498:2:118"
            },
            "returnParameters": {
              "id": 77106,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "517:0:118"
            },
            "scope": 77886,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 77254,
            "nodeType": "FunctionDefinition",
            "src": "834:1996:118",
            "nodes": [],
            "body": {
              "id": 77253,
              "nodeType": "Block",
              "src": "951:1879:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 77146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77140,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77135,
                      "src": "1040:17:118",
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
                          "id": 77143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1095:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 77144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1098:6:118",
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
                          "id": 77141,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77135,
                          "src": "1060:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1078:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "1060:34:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1060:45:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1040:65:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77147,
                  "nodeType": "ExpressionStatement",
                  "src": "1040:65:118"
                },
                {
                  "expression": {
                    "id": 77156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77148,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77137,
                      "src": "1156:14:118",
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
                          "id": 77151,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118905,
                          "src": "1218:26:118",
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
                          "id": 77154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 77152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1258:12:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 77153,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118905,
                            "src": "1273:26:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1258:41:118",
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
                          "id": 77149,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77137,
                          "src": "1173:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1188:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "1173:31:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77155,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1173:136:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1156:153:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77157,
                  "nodeType": "ExpressionStatement",
                  "src": "1156:153:118"
                },
                {
                  "assignments": [
                    77159
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77159,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "1380:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1373:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 77158,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1373:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77164,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77162,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77135,
                        "src": "1402:17:118",
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
                      "id": 77161,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1395:6:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 77160,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1395:6:118",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 77163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1395:25:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1373:47:118"
                },
                {
                  "assignments": [
                    77166
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77166,
                      "mutability": "mutable",
                      "name": "fixedRate",
                      "nameLocation": "1494:9:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1486:17:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77165,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1486:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77168,
                  "initialValue": {
                    "hexValue": "302e3130653138",
                    "id": 77167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1506:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000000_by_1",
                      "typeString": "int_const 100000000000000000"
                    },
                    "value": "0.10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1486:27:118"
                },
                {
                  "assignments": [
                    77170
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77170,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "1577:16:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1569:24:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77169,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1569:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77172,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1596:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1569:39:118"
                },
                {
                  "assignments": [
                    77174
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77174,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "1626:13:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1618:21:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77173,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1618:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77180,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77176,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116795,
                        "src": "1653:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77177,
                        "name": "fixedRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77166,
                        "src": "1660:9:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77178,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77170,
                        "src": "1671:16:118",
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
                      "id": 77175,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119323,
                        119352,
                        119383
                      ],
                      "referencedDeclaration": 119352,
                      "src": "1642:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1642:46:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1618:70:118"
                },
                {
                  "assignments": [
                    77182
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77182,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "1740:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1732:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77181,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1732:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77184,
                  "initialValue": {
                    "id": 77183,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 77137,
                    "src": "1755:14:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1732:37:118"
                },
                {
                  "assignments": [
                    77186,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77186,
                      "mutability": "mutable",
                      "name": "maturityTime",
                      "nameLocation": "1788:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1780:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77185,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1780:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77191,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77188,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "1816:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77189,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77182,
                        "src": "1824:12:118",
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
                      "id": 77187,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120029,
                        120053,
                        120079
                      ],
                      "referencedDeclaration": 120053,
                      "src": "1806:9:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1806:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1779:58:118"
                },
                {
                  "assignments": [
                    77193
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77193,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "1887:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1879:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77192,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1879:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77195,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1902:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1879:35:118"
                },
                {
                  "assignments": [
                    77197
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77197,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "1932:11:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "1924:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77196,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1924:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77202,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77199,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "1959:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77200,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77193,
                        "src": "1964:12:118",
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
                      "id": 77198,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119470,
                        119496,
                        119524
                      ],
                      "referencedDeclaration": 119496,
                      "src": "1946:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 77201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1946:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1924:53:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77204,
                        "name": "POSITION_DURATION",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118911,
                        "src": "2028:17:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77205,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77159,
                        "src": "2047:12:118",
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
                      "id": 77203,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "2016:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2016:44:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77207,
                  "nodeType": "ExpressionStatement",
                  "src": "2016:44:118"
                },
                {
                  "assignments": [
                    77209
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77209,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "2133:26:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "2125:34:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77208,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2125:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77213,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77211,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77197,
                        "src": "2199:11:118",
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
                      "id": 77210,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120574,
                      "src": "2162:23:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 77212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2162:58:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2125:95:118"
                },
                {
                  "assignments": [
                    77215,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77215,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "2273:18:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77253,
                      "src": "2265:26:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77214,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2265:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77220,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77217,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "2313:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77218,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77197,
                        "src": "2318:11:118",
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
                      "id": 77216,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119560,
                        119581,
                        119604
                      ],
                      "referencedDeclaration": 119581,
                      "src": "2297:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2297:33:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2264:66:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77222,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77215,
                        "src": "2358:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77223,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77209,
                        "src": "2378:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2406:3:118",
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
                      "id": 77221,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "2340:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2340:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77226,
                  "nodeType": "ExpressionStatement",
                  "src": "2340:70:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77228,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "2468:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77229,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77186,
                        "src": "2476:12:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77230,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77182,
                        "src": "2490:12:118",
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
                      "id": 77227,
                      "name": "closeShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120116,
                        120138,
                        120162
                      ],
                      "referencedDeclaration": 120138,
                      "src": "2457:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2457:46:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77232,
                  "nodeType": "ExpressionStatement",
                  "src": "2457:46:118"
                },
                {
                  "expression": {
                    "id": 77237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77233,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77209,
                      "src": "2568:26:118",
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
                          "id": 77235,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77174,
                          "src": "2621:13:118",
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
                        "id": 77234,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120574,
                        "src": "2597:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 77236,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2597:38:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2568:67:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77238,
                  "nodeType": "ExpressionStatement",
                  "src": "2568:67:118"
                },
                {
                  "expression": {
                    "id": 77245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 77239,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77215,
                          "src": "2682:18:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 77240,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2681:22:118",
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
                          "id": 77242,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 116795,
                          "src": "2722:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 77243,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77174,
                          "src": "2729:13:118",
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
                        "id": 77241,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          119560,
                          119581,
                          119604
                        ],
                        "referencedDeclaration": 119581,
                        "src": "2706:15:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 77244,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2706:37:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "2681:62:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77246,
                  "nodeType": "ExpressionStatement",
                  "src": "2681:62:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77248,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77215,
                        "src": "2771:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77249,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77209,
                        "src": "2791:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77250,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2819:3:118",
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
                      "id": 77247,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "2753:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2753:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77252,
                  "nodeType": "ExpressionStatement",
                  "src": "2753:70:118"
                }
              ]
            },
            "functionSelector": "0ce4e174",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_short_lp",
            "nameLocation": "843:25:118",
            "parameters": {
              "id": 77138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77135,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "886:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77254,
                  "src": "878:25:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "878:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77137,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "921:14:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77254,
                  "src": "913:22:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77136,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "913:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "868:73:118"
            },
            "returnParameters": {
              "id": 77139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "951:0:118"
            },
            "scope": 77886,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 77383,
            "nodeType": "FunctionDefinition",
            "src": "2836:2023:118",
            "nodes": [],
            "body": {
              "id": 77382,
              "nodeType": "Block",
              "src": "2959:1900:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 77267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77261,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77256,
                      "src": "3048:17:118",
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
                          "id": 77264,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3103:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 77265,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3106:6:118",
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
                          "id": 77262,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77256,
                          "src": "3068:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3086:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "3068:34:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3068:45:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3048:65:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77268,
                  "nodeType": "ExpressionStatement",
                  "src": "3048:65:118"
                },
                {
                  "expression": {
                    "id": 77277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77269,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77258,
                      "src": "3164:14:118",
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
                          "id": 77272,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118905,
                          "src": "3226:26:118",
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
                          "id": 77275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 77273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3266:12:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 77274,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118905,
                            "src": "3281:26:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3266:41:118",
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
                          "id": 77270,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77258,
                          "src": "3181:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3196:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "3181:31:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3181:136:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3164:153:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77278,
                  "nodeType": "ExpressionStatement",
                  "src": "3164:153:118"
                },
                {
                  "assignments": [
                    77280
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77280,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "3388:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "3381:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 77279,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3381:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77285,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77283,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77256,
                        "src": "3410:17:118",
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
                      "id": 77282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3403:6:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 77281,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3403:6:118",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 77284,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3403:25:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3381:47:118"
                },
                {
                  "assignments": [
                    77287
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77287,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "3492:16:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "3484:24:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77286,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3484:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77289,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3511:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3484:39:118"
                },
                {
                  "assignments": [
                    77291
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77291,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "3541:13:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "3533:21:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77290,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3533:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77297,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77293,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116795,
                        "src": "3568:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "302e3130653138",
                        "id": 77294,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3575:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        "value": "0.10e18"
                      },
                      {
                        "id": 77295,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77287,
                        "src": "3584:16:118",
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
                      "id": 77292,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119323,
                        119352,
                        119383
                      ],
                      "referencedDeclaration": 119352,
                      "src": "3557:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3557:44:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3533:68:118"
                },
                {
                  "assignments": [
                    77299
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77299,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "3653:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "3645:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77298,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3645:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77303,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 77302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 77300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3668:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 77301,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77258,
                      "src": "3683:14:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3668:29:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3645:52:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77305,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "3717:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77306,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77299,
                        "src": "3725:12:118",
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
                      "id": 77304,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120029,
                        120053,
                        120079
                      ],
                      "referencedDeclaration": 120053,
                      "src": "3707:9:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3707:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77308,
                  "nodeType": "ExpressionStatement",
                  "src": "3707:31:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77312,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77310,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "3789:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77311,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3809:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "3789:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77313,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77280,
                        "src": "3812:12:118",
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
                      "id": 77309,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "3777:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3777:48:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77315,
                  "nodeType": "ExpressionStatement",
                  "src": "3777:48:118"
                },
                {
                  "assignments": [
                    77317
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77317,
                      "mutability": "mutable",
                      "name": "bondsShorted2",
                      "nameLocation": "3883:13:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "3875:21:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77316,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3875:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77319,
                  "initialValue": {
                    "id": 77318,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 77258,
                    "src": "3899:14:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3875:38:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77321,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "3933:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77322,
                        "name": "bondsShorted2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77317,
                        "src": "3941:13:118",
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
                      "id": 77320,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120029,
                        120053,
                        120079
                      ],
                      "referencedDeclaration": 120053,
                      "src": "3923:9:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3923:32:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77324,
                  "nodeType": "ExpressionStatement",
                  "src": "3923:32:118"
                },
                {
                  "assignments": [
                    77326
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77326,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "4005:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "3997:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77325,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3997:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77328,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4020:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3997:35:118"
                },
                {
                  "assignments": [
                    77330
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77330,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "4050:11:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "4042:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77329,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4042:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77335,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77332,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "4077:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77333,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77326,
                        "src": "4082:12:118",
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
                      "id": 77331,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119470,
                        119496,
                        119524
                      ],
                      "referencedDeclaration": 119496,
                      "src": "4064:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 77334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4064:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4042:53:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77337,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "4146:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77338,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4166:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4146:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77340,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77280,
                        "src": "4169:12:118",
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
                      "id": 77336,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "4134:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4134:48:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77342,
                  "nodeType": "ExpressionStatement",
                  "src": "4134:48:118"
                },
                {
                  "assignments": [
                    77344
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77344,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "4255:26:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "4247:34:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77343,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4247:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77348,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77346,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77330,
                        "src": "4321:11:118",
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
                      "id": 77345,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120574,
                      "src": "4284:23:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 77347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4284:58:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4247:95:118"
                },
                {
                  "assignments": [
                    77350,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77350,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "4395:18:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77382,
                      "src": "4387:26:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77349,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4387:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77355,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77352,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "4435:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77353,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77330,
                        "src": "4440:11:118",
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
                      "id": 77351,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119560,
                        119581,
                        119604
                      ],
                      "referencedDeclaration": 119581,
                      "src": "4419:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4419:33:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4386:66:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77357,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77350,
                        "src": "4480:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77358,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77344,
                        "src": "4500:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4528:3:118",
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
                      "id": 77356,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "4462:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4462:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77361,
                  "nodeType": "ExpressionStatement",
                  "src": "4462:70:118"
                },
                {
                  "expression": {
                    "id": 77366,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77362,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77344,
                      "src": "4597:26:118",
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
                          "id": 77364,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77291,
                          "src": "4650:13:118",
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
                        "id": 77363,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120574,
                        "src": "4626:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 77365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4626:38:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4597:67:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77367,
                  "nodeType": "ExpressionStatement",
                  "src": "4597:67:118"
                },
                {
                  "expression": {
                    "id": 77374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 77368,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77350,
                          "src": "4711:18:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 77369,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4710:22:118",
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
                          "id": 77371,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 116795,
                          "src": "4751:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 77372,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77291,
                          "src": "4758:13:118",
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
                        "id": 77370,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          119560,
                          119581,
                          119604
                        ],
                        "referencedDeclaration": 119581,
                        "src": "4735:15:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 77373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4735:37:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4710:62:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77375,
                  "nodeType": "ExpressionStatement",
                  "src": "4710:62:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77377,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77350,
                        "src": "4800:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77378,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77344,
                        "src": "4820:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4848:3:118",
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
                      "id": 77376,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "4782:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4782:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77381,
                  "nodeType": "ExpressionStatement",
                  "src": "4782:70:118"
                }
              ]
            },
            "functionSelector": "35109249",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_short_short_lp",
            "nameLocation": "2845:31:118",
            "parameters": {
              "id": 77259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77256,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "2894:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77383,
                  "src": "2886:25:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77255,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2886:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77258,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "2929:14:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77383,
                  "src": "2921:22:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77257,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2921:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2876:73:118"
            },
            "returnParameters": {
              "id": 77260,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2959:0:118"
            },
            "scope": 77886,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 77506,
            "nodeType": "FunctionDefinition",
            "src": "4865:2085:118",
            "nodes": [],
            "body": {
              "id": 77505,
              "nodeType": "Block",
              "src": "4981:1969:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 77396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77390,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77385,
                      "src": "5070:17:118",
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
                          "id": 77393,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5125:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 77394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5128:6:118",
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
                          "id": 77391,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77385,
                          "src": "5090:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5108:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "5090:34:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5090:45:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5070:65:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77397,
                  "nodeType": "ExpressionStatement",
                  "src": "5070:65:118"
                },
                {
                  "expression": {
                    "id": 77406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77398,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77387,
                      "src": "5186:14:118",
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
                          "id": 77401,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118905,
                          "src": "5248:26:118",
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
                          "id": 77404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 77402,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5288:12:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 77403,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118905,
                            "src": "5303:26:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5288:41:118",
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
                          "id": 77399,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77387,
                          "src": "5203:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77400,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5218:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "5203:31:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77405,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5203:136:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5186:153:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77407,
                  "nodeType": "ExpressionStatement",
                  "src": "5186:153:118"
                },
                {
                  "assignments": [
                    77409
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77409,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "5410:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5403:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 77408,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5403:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77414,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77412,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77385,
                        "src": "5432:17:118",
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
                      "id": 77411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5425:6:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 77410,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5425:6:118",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 77413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5425:25:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5403:47:118"
                },
                {
                  "assignments": [
                    77416
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77416,
                      "mutability": "mutable",
                      "name": "fixedRate",
                      "nameLocation": "5524:9:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5516:17:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77415,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5516:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77418,
                  "initialValue": {
                    "hexValue": "302e3130653138",
                    "id": 77417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5536:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000000_by_1",
                      "typeString": "int_const 100000000000000000"
                    },
                    "value": "0.10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5516:27:118"
                },
                {
                  "assignments": [
                    77420
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77420,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "5607:16:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5599:24:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77419,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5599:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77422,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5626:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5599:39:118"
                },
                {
                  "assignments": [
                    77424
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77424,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "5656:13:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5648:21:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77423,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5648:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77430,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77426,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116795,
                        "src": "5683:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77427,
                        "name": "fixedRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77416,
                        "src": "5690:9:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77428,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77420,
                        "src": "5701:16:118",
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
                      "id": 77425,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119323,
                        119352,
                        119383
                      ],
                      "referencedDeclaration": 119352,
                      "src": "5672:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77429,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5672:46:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5648:70:118"
                },
                {
                  "assignments": [
                    77432
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77432,
                      "mutability": "mutable",
                      "name": "baseSpent",
                      "nameLocation": "5769:9:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5761:17:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77431,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5761:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77434,
                  "initialValue": {
                    "id": 77433,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 77387,
                    "src": "5781:14:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5761:34:118"
                },
                {
                  "assignments": [
                    77436,
                    77438
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77436,
                      "mutability": "mutable",
                      "name": "maturityTime",
                      "nameLocation": "5814:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5806:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77435,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5806:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 77438,
                      "mutability": "mutable",
                      "name": "bondsPurchased",
                      "nameLocation": "5836:14:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5828:22:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77437,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5828:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77443,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77440,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "5876:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77441,
                        "name": "baseSpent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77432,
                        "src": "5896:9:118",
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
                      "id": 77439,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119771,
                        119799,
                        119829
                      ],
                      "referencedDeclaration": 119799,
                      "src": "5854:8:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5854:61:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5805:110:118"
                },
                {
                  "assignments": [
                    77445
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77445,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "5965:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "5957:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77444,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5957:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77447,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5980:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5957:35:118"
                },
                {
                  "assignments": [
                    77449
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77449,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "6010:11:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "6002:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77448,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6002:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77454,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77451,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "6037:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77452,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77445,
                        "src": "6042:12:118",
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
                      "id": 77450,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119470,
                        119496,
                        119524
                      ],
                      "referencedDeclaration": 119496,
                      "src": "6024:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 77453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6024:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6002:53:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77456,
                        "name": "POSITION_DURATION",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118911,
                        "src": "6106:17:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77457,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77409,
                        "src": "6125:12:118",
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
                      "id": 77455,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "6094:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6094:44:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77459,
                  "nodeType": "ExpressionStatement",
                  "src": "6094:44:118"
                },
                {
                  "assignments": [
                    77461
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77461,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "6211:26:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "6203:34:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77460,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6203:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77465,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77463,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77449,
                        "src": "6277:11:118",
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
                      "id": 77462,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120574,
                      "src": "6240:23:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 77464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6240:58:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6203:95:118"
                },
                {
                  "assignments": [
                    77467,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77467,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "6393:18:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77505,
                      "src": "6385:26:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77466,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6385:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77472,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77469,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "6433:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77470,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77449,
                        "src": "6438:11:118",
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
                      "id": 77468,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119560,
                        119581,
                        119604
                      ],
                      "referencedDeclaration": 119581,
                      "src": "6417:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6417:33:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6384:66:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77474,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77467,
                        "src": "6478:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77475,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77461,
                        "src": "6498:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6526:3:118",
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
                      "id": 77473,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "6460:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6460:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77478,
                  "nodeType": "ExpressionStatement",
                  "src": "6460:70:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77480,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "6586:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77481,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77436,
                        "src": "6594:12:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77482,
                        "name": "bondsPurchased",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77438,
                        "src": "6608:14:118",
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
                      "id": 77479,
                      "name": "closeLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119866,
                        119888,
                        119912
                      ],
                      "referencedDeclaration": 119888,
                      "src": "6576:9:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6576:47:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77484,
                  "nodeType": "ExpressionStatement",
                  "src": "6576:47:118"
                },
                {
                  "expression": {
                    "id": 77489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77485,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77461,
                      "src": "6688:26:118",
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
                          "id": 77487,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77424,
                          "src": "6741:13:118",
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
                        "id": 77486,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120574,
                        "src": "6717:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 77488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6717:38:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6688:67:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77490,
                  "nodeType": "ExpressionStatement",
                  "src": "6688:67:118"
                },
                {
                  "expression": {
                    "id": 77497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 77491,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77467,
                          "src": "6802:18:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 77492,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "6801:22:118",
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
                          "id": 77494,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 116795,
                          "src": "6842:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 77495,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77424,
                          "src": "6849:13:118",
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
                        "id": 77493,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          119560,
                          119581,
                          119604
                        ],
                        "referencedDeclaration": 119581,
                        "src": "6826:15:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 77496,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6826:37:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "6801:62:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77498,
                  "nodeType": "ExpressionStatement",
                  "src": "6801:62:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77500,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77467,
                        "src": "6891:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77501,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77461,
                        "src": "6911:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77502,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6939:3:118",
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
                      "id": 77499,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "6873:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6873:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77504,
                  "nodeType": "ExpressionStatement",
                  "src": "6873:70:118"
                }
              ]
            },
            "functionSelector": "7949c523",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_long_lp",
            "nameLocation": "4874:24:118",
            "parameters": {
              "id": 77388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77385,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "4916:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77506,
                  "src": "4908:25:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77384,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4908:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77387,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "4951:14:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77506,
                  "src": "4943:22:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4943:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4898:73:118"
            },
            "returnParameters": {
              "id": 77389,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4981:0:118"
            },
            "scope": 77886,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 77639,
            "nodeType": "FunctionDefinition",
            "src": "6956:2112:118",
            "nodes": [],
            "body": {
              "id": 77638,
              "nodeType": "Block",
              "src": "7077:1991:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 77519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77513,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77508,
                      "src": "7166:17:118",
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
                          "id": 77516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7221:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 77517,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7224:6:118",
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
                          "id": 77514,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77508,
                          "src": "7186:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77515,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7204:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "7186:34:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77518,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7186:45:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7166:65:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77520,
                  "nodeType": "ExpressionStatement",
                  "src": "7166:65:118"
                },
                {
                  "expression": {
                    "id": 77529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77521,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77510,
                      "src": "7282:14:118",
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
                          "id": 77524,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118905,
                          "src": "7344:26:118",
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
                          "id": 77527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 77525,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7384:12:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 77526,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118905,
                            "src": "7399:26:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7384:41:118",
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
                          "id": 77522,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77510,
                          "src": "7299:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77523,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7314:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "7299:31:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77528,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7299:136:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7282:153:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77530,
                  "nodeType": "ExpressionStatement",
                  "src": "7282:153:118"
                },
                {
                  "assignments": [
                    77532
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77532,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "7506:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "7499:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 77531,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7499:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77537,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77535,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77508,
                        "src": "7528:17:118",
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
                      "id": 77534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7521:6:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 77533,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7521:6:118",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 77536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7521:25:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7499:47:118"
                },
                {
                  "assignments": [
                    77539
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77539,
                      "mutability": "mutable",
                      "name": "fixedRate",
                      "nameLocation": "7620:9:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "7612:17:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77538,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7612:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77541,
                  "initialValue": {
                    "hexValue": "302e3130653138",
                    "id": 77540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "7632:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000000_by_1",
                      "typeString": "int_const 100000000000000000"
                    },
                    "value": "0.10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7612:27:118"
                },
                {
                  "assignments": [
                    77543
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77543,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "7703:16:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "7695:24:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77542,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7695:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77545,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77544,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "7722:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7695:39:118"
                },
                {
                  "assignments": [
                    77547
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77547,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "7752:13:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "7744:21:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77546,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7744:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77553,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77549,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116795,
                        "src": "7779:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77550,
                        "name": "fixedRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77539,
                        "src": "7786:9:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77551,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77543,
                        "src": "7797:16:118",
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
                      "id": 77548,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119323,
                        119352,
                        119383
                      ],
                      "referencedDeclaration": 119352,
                      "src": "7768:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7768:46:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7744:70:118"
                },
                {
                  "assignments": [
                    77555
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77555,
                      "mutability": "mutable",
                      "name": "baseSpent",
                      "nameLocation": "7865:9:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "7857:17:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77554,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7857:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77559,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 77558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 77556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7877:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 77557,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77510,
                      "src": "7892:14:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7877:29:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7857:49:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77561,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "7925:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77562,
                        "name": "baseSpent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77555,
                        "src": "7933:9:118",
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
                      "id": 77560,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119771,
                        119799,
                        119829
                      ],
                      "referencedDeclaration": 119799,
                      "src": "7916:8:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7916:27:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77564,
                  "nodeType": "ExpressionStatement",
                  "src": "7916:27:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77568,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77566,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "7998:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77567,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8018:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "7998:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77569,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77532,
                        "src": "8021:12:118",
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
                      "id": 77565,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "7986:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7986:48:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77571,
                  "nodeType": "ExpressionStatement",
                  "src": "7986:48:118"
                },
                {
                  "assignments": [
                    77573
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77573,
                      "mutability": "mutable",
                      "name": "baseSpent2",
                      "nameLocation": "8091:10:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "8083:18:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77572,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8083:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77575,
                  "initialValue": {
                    "id": 77574,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 77510,
                    "src": "8104:14:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8083:35:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77577,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "8137:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77578,
                        "name": "baseSpent2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77573,
                        "src": "8145:10:118",
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
                      "id": 77576,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119771,
                        119799,
                        119829
                      ],
                      "referencedDeclaration": 119799,
                      "src": "8128:8:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8128:28:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77580,
                  "nodeType": "ExpressionStatement",
                  "src": "8128:28:118"
                },
                {
                  "assignments": [
                    77582
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77582,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "8206:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "8198:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77581,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8198:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77584,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "8221:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8198:35:118"
                },
                {
                  "assignments": [
                    77586
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77586,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "8251:11:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "8243:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77585,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8243:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77591,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77588,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "8278:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77589,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77582,
                        "src": "8283:12:118",
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
                      "id": 77587,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119470,
                        119496,
                        119524
                      ],
                      "referencedDeclaration": 119496,
                      "src": "8265:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 77590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8265:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8243:53:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77593,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "8351:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8371:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "8351:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77596,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77532,
                        "src": "8374:12:118",
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
                      "id": 77592,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "8339:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8339:48:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77598,
                  "nodeType": "ExpressionStatement",
                  "src": "8339:48:118"
                },
                {
                  "assignments": [
                    77600
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77600,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "8460:26:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "8452:34:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77599,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8452:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77604,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77602,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77586,
                        "src": "8526:11:118",
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
                      "id": 77601,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120574,
                      "src": "8489:23:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 77603,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8489:58:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8452:95:118"
                },
                {
                  "assignments": [
                    77606,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77606,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "8600:18:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77638,
                      "src": "8592:26:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77605,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8592:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77611,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77608,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "8640:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77609,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77586,
                        "src": "8645:11:118",
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
                      "id": 77607,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119560,
                        119581,
                        119604
                      ],
                      "referencedDeclaration": 119581,
                      "src": "8624:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8624:33:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8591:66:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77613,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77606,
                        "src": "8685:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77614,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77600,
                        "src": "8705:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8733:3:118",
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
                      "id": 77612,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "8667:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8667:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77617,
                  "nodeType": "ExpressionStatement",
                  "src": "8667:70:118"
                },
                {
                  "expression": {
                    "id": 77622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77618,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77600,
                      "src": "8806:26:118",
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
                          "id": 77620,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77547,
                          "src": "8859:13:118",
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
                        "id": 77619,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120574,
                        "src": "8835:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 77621,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8835:38:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8806:67:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77623,
                  "nodeType": "ExpressionStatement",
                  "src": "8806:67:118"
                },
                {
                  "expression": {
                    "id": 77630,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 77624,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77606,
                          "src": "8920:18:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 77625,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "8919:22:118",
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
                          "id": 77627,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 116795,
                          "src": "8960:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 77628,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77547,
                          "src": "8967:13:118",
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
                        "id": 77626,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          119560,
                          119581,
                          119604
                        ],
                        "referencedDeclaration": 119581,
                        "src": "8944:15:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 77629,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8944:37:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "8919:62:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77631,
                  "nodeType": "ExpressionStatement",
                  "src": "8919:62:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77633,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77606,
                        "src": "9009:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77634,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77600,
                        "src": "9029:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77635,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9057:3:118",
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
                      "id": 77632,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "8991:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77636,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8991:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77637,
                  "nodeType": "ExpressionStatement",
                  "src": "8991:70:118"
                }
              ]
            },
            "functionSelector": "42aa13ae",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_long_long_lp",
            "nameLocation": "6965:29:118",
            "parameters": {
              "id": 77511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77508,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "7012:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77639,
                  "src": "7004:25:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7004:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77510,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "7047:14:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77639,
                  "src": "7039:22:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77509,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7039:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6994:73:118"
            },
            "returnParameters": {
              "id": 77512,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7077:0:118"
            },
            "scope": 77886,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 77757,
            "nodeType": "FunctionDefinition",
            "src": "9074:1870:118",
            "nodes": [],
            "body": {
              "id": 77756,
              "nodeType": "Block",
              "src": "9195:1749:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 77652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77646,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77641,
                      "src": "9284:17:118",
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
                          "id": 77649,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9339:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 77650,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9342:6:118",
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
                          "id": 77647,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77641,
                          "src": "9304:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 77648,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9322:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122947,
                        "src": "9304:34:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                          "typeString": "function (int256,int256,int256) pure returns (int256)"
                        }
                      },
                      "id": 77651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9304:45:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "9284:65:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 77653,
                  "nodeType": "ExpressionStatement",
                  "src": "9284:65:118"
                },
                {
                  "expression": {
                    "id": 77662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77654,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77643,
                      "src": "9400:14:118",
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
                          "id": 77657,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118905,
                          "src": "9462:26:118",
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
                          "id": 77660,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 77658,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9502:12:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 77659,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118905,
                            "src": "9517:26:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9502:41:118",
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
                          "id": 77655,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77643,
                          "src": "9417:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77656,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9432:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "9417:31:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77661,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9417:136:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9400:153:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77663,
                  "nodeType": "ExpressionStatement",
                  "src": "9400:153:118"
                },
                {
                  "assignments": [
                    77665
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77665,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "9617:16:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77756,
                      "src": "9609:24:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77664,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9609:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77667,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "9636:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9609:39:118"
                },
                {
                  "assignments": [
                    77669
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77669,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "9666:13:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77756,
                      "src": "9658:21:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77668,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9658:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77675,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77671,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116795,
                        "src": "9693:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "302e31653138",
                        "id": 77672,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9700:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        "value": "0.1e18"
                      },
                      {
                        "id": 77673,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77665,
                        "src": "9708:16:118",
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
                      "id": 77670,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119323,
                        119352,
                        119383
                      ],
                      "referencedDeclaration": 119352,
                      "src": "9682:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9682:43:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9658:67:118"
                },
                {
                  "assignments": [
                    77677
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77677,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "9777:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77756,
                      "src": "9769:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77676,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9769:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77681,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 77680,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 77678,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9792:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 77679,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77643,
                      "src": "9807:14:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9792:29:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9769:52:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77683,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "9841:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77684,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77677,
                        "src": "9849:12:118",
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
                      "id": 77682,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120029,
                        120053,
                        120079
                      ],
                      "referencedDeclaration": 120053,
                      "src": "9831:9:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9831:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77686,
                  "nodeType": "ExpressionStatement",
                  "src": "9831:31:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77690,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77688,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "9913:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9933:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "9913:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77691,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77641,
                        "src": "9936:17:118",
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
                      "id": 77687,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "9901:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77692,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9901:53:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77693,
                  "nodeType": "ExpressionStatement",
                  "src": "9901:53:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77695,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "10012:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77696,
                        "name": "tradeSizeParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77643,
                        "src": "10020:14:118",
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
                      "id": 77694,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119771,
                        119799,
                        119829
                      ],
                      "referencedDeclaration": 119799,
                      "src": "10003:8:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10003:32:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77698,
                  "nodeType": "ExpressionStatement",
                  "src": "10003:32:118"
                },
                {
                  "assignments": [
                    77700
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77700,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "10085:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77756,
                      "src": "10077:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77699,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10077:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77702,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "10100:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10077:35:118"
                },
                {
                  "assignments": [
                    77704
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77704,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "10130:11:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77756,
                      "src": "10122:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77703,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10122:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77709,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77706,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "10157:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77707,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77700,
                        "src": "10162:12:118",
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
                      "id": 77705,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119470,
                        119496,
                        119524
                      ],
                      "referencedDeclaration": 119496,
                      "src": "10144:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 77708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10144:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10122:53:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77713,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77711,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "10226:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77712,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10246:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "10226:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77714,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77641,
                        "src": "10249:17:118",
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
                      "id": 77710,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "10214:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77715,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10214:53:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77716,
                  "nodeType": "ExpressionStatement",
                  "src": "10214:53:118"
                },
                {
                  "assignments": [
                    77718
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77718,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "10340:26:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77756,
                      "src": "10332:34:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77717,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10332:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77722,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77720,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77704,
                        "src": "10406:11:118",
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
                      "id": 77719,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120574,
                      "src": "10369:23:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 77721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10369:58:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10332:95:118"
                },
                {
                  "assignments": [
                    77724,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77724,
                      "mutability": "mutable",
                      "name": "withdrawalProceeds",
                      "nameLocation": "10480:18:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77756,
                      "src": "10472:26:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77723,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10472:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77729,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77726,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "10520:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77727,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77704,
                        "src": "10525:11:118",
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
                      "id": 77725,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119560,
                        119581,
                        119604
                      ],
                      "referencedDeclaration": 119581,
                      "src": "10504:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10504:33:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10471:66:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77731,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77724,
                        "src": "10565:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77732,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77718,
                        "src": "10585:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77733,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10613:3:118",
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
                      "id": 77730,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "10547:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10547:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77735,
                  "nodeType": "ExpressionStatement",
                  "src": "10547:70:118"
                },
                {
                  "expression": {
                    "id": 77740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77736,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77718,
                      "src": "10682:26:118",
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
                          "id": 77738,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77669,
                          "src": "10735:13:118",
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
                        "id": 77737,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120574,
                        "src": "10711:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 77739,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10711:38:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10682:67:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77741,
                  "nodeType": "ExpressionStatement",
                  "src": "10682:67:118"
                },
                {
                  "expression": {
                    "id": 77748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 77742,
                          "name": "withdrawalProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77724,
                          "src": "10796:18:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 77743,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "10795:22:118",
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
                          "id": 77745,
                          "name": "alice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 116795,
                          "src": "10836:5:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 77746,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77669,
                          "src": "10843:13:118",
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
                        "id": 77744,
                        "name": "removeLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          119560,
                          119581,
                          119604
                        ],
                        "referencedDeclaration": 119581,
                        "src": "10820:15:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (address,uint256) returns (uint256,uint256)"
                        }
                      },
                      "id": 77747,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10820:37:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "10795:62:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77749,
                  "nodeType": "ExpressionStatement",
                  "src": "10795:62:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77751,
                        "name": "withdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77724,
                        "src": "10885:18:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77752,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77718,
                        "src": "10905:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10933:3:118",
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
                      "id": 77750,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "10867:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10867:70:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77755,
                  "nodeType": "ExpressionStatement",
                  "src": "10867:70:118"
                }
              ]
            },
            "functionSelector": "48af0581",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_short_long_lp",
            "nameLocation": "9083:30:118",
            "parameters": {
              "id": 77644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77641,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "9130:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77757,
                  "src": "9123:24:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 77640,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9123:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77643,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "9165:14:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77757,
                  "src": "9157:22:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77642,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9157:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9113:72:118"
            },
            "returnParameters": {
              "id": 77645,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9195:0:118"
            },
            "scope": 77886,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 77885,
            "nodeType": "FunctionDefinition",
            "src": "10950:2204:118",
            "nodes": [],
            "body": {
              "id": 77884,
              "nodeType": "Block",
              "src": "11072:2082:118",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 77770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77764,
                      "name": "variableRateParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77759,
                      "src": "11161:17:118",
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
                          "id": 77767,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11216:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "322e35653138",
                          "id": 77768,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11219:6:118",
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
                          "id": 77765,
                          "name": "variableRateParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77759,
                          "src": "11181:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77766,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11199:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "11181:34:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11181:45:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11161:65:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77771,
                  "nodeType": "ExpressionStatement",
                  "src": "11161:65:118"
                },
                {
                  "expression": {
                    "id": 77780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77772,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77761,
                      "src": "11277:14:118",
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
                          "id": 77775,
                          "name": "MINIMUM_TRANSACTION_AMOUNT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118905,
                          "src": "11339:26:118",
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
                          "id": 77778,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "355f3030305f303030653138",
                            "id": 77776,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11379:12:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                              "typeString": "int_const 5000000000000000000000000"
                            },
                            "value": "5_000_000e18"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 77777,
                            "name": "MINIMUM_TRANSACTION_AMOUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118905,
                            "src": "11394:26:118",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11379:41:118",
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
                          "id": 77773,
                          "name": "tradeSizeParam",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77761,
                          "src": "11294:14:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 77774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11309:16:118",
                        "memberName": "normalizeToRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 122901,
                        "src": "11294:31:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 77779,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11294:136:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11277:153:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77781,
                  "nodeType": "ExpressionStatement",
                  "src": "11277:153:118"
                },
                {
                  "assignments": [
                    77783
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77783,
                      "mutability": "mutable",
                      "name": "variableRate",
                      "nameLocation": "11501:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "11494:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 77782,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11494:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77788,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77786,
                        "name": "variableRateParam",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77759,
                        "src": "11523:17:118",
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
                      "id": 77785,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11516:6:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 77784,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11516:6:118",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 77787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11516:25:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11494:47:118"
                },
                {
                  "assignments": [
                    77790
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77790,
                      "mutability": "mutable",
                      "name": "initialLiquidity",
                      "nameLocation": "11605:16:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "11597:24:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77789,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11597:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77792,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "11624:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11597:39:118"
                },
                {
                  "assignments": [
                    77794
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77794,
                      "mutability": "mutable",
                      "name": "aliceLpShares",
                      "nameLocation": "11654:13:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "11646:21:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77793,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11646:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77800,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77796,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116795,
                        "src": "11681:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "302e3130653138",
                        "id": 77797,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11688:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000_by_1",
                          "typeString": "int_const 100000000000000000"
                        },
                        "value": "0.10e18"
                      },
                      {
                        "id": 77798,
                        "name": "initialLiquidity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77790,
                        "src": "11697:16:118",
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
                      "id": 77795,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119323,
                        119352,
                        119383
                      ],
                      "referencedDeclaration": 119352,
                      "src": "11670:10:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 77799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11670:44:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11646:68:118"
                },
                {
                  "assignments": [
                    77802
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77802,
                      "mutability": "mutable",
                      "name": "baseSpent",
                      "nameLocation": "11765:9:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "11757:17:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77801,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11757:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77806,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 77805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "355f3030305f303030653138",
                      "id": 77803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11777:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                        "typeString": "int_const 5000000000000000000000000"
                      },
                      "value": "5_000_000e18"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 77804,
                      "name": "tradeSizeParam",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77761,
                      "src": "11792:14:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11777:29:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11757:49:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77808,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "11825:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77809,
                        "name": "baseSpent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77802,
                        "src": "11833:9:118",
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
                      "id": 77807,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119771,
                        119799,
                        119829
                      ],
                      "referencedDeclaration": 119799,
                      "src": "11816:8:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11816:27:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77811,
                  "nodeType": "ExpressionStatement",
                  "src": "11816:27:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77815,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77813,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "11898:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77814,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11918:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "11898:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77816,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77783,
                        "src": "11921:12:118",
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
                      "id": 77812,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "11886:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11886:48:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77818,
                  "nodeType": "ExpressionStatement",
                  "src": "11886:48:118"
                },
                {
                  "assignments": [
                    77820
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77820,
                      "mutability": "mutable",
                      "name": "bondsShorted",
                      "nameLocation": "11986:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "11978:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77819,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11978:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77822,
                  "initialValue": {
                    "id": 77821,
                    "name": "tradeSizeParam",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 77761,
                    "src": "12001:14:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11978:37:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77824,
                        "name": "celine",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116799,
                        "src": "12035:6:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77825,
                        "name": "bondsShorted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77820,
                        "src": "12043:12:118",
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
                      "id": 77823,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120029,
                        120053,
                        120079
                      ],
                      "referencedDeclaration": 120053,
                      "src": "12025:9:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12025:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 77827,
                  "nodeType": "ExpressionStatement",
                  "src": "12025:31:118"
                },
                {
                  "assignments": [
                    77829
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77829,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "12106:12:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "12098:20:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77828,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12098:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77831,
                  "initialValue": {
                    "hexValue": "355f3030305f303030653138",
                    "id": 77830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "12121:12:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_5000000000000000000000000_by_1",
                      "typeString": "int_const 5000000000000000000000000"
                    },
                    "value": "5_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12098:35:118"
                },
                {
                  "assignments": [
                    77833
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77833,
                      "mutability": "mutable",
                      "name": "bobLpShares",
                      "nameLocation": "12151:11:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "12143:19:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77832,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12143:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77838,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77835,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "12178:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77836,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77829,
                        "src": "12183:12:118",
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
                      "id": 77834,
                      "name": "addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119470,
                        119496,
                        119524
                      ],
                      "referencedDeclaration": 119496,
                      "src": "12165:12:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256)"
                      }
                    },
                    "id": 77837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12165:31:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12143:53:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 77842,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 77840,
                          "name": "POSITION_DURATION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118911,
                          "src": "12251:17:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 77841,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12271:1:118",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "12251:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77843,
                        "name": "variableRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77783,
                        "src": "12274:12:118",
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
                      "id": 77839,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120191,
                      "src": "12239:11:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 77844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12239:48:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77845,
                  "nodeType": "ExpressionStatement",
                  "src": "12239:48:118"
                },
                {
                  "assignments": [
                    77847
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77847,
                      "mutability": "mutable",
                      "name": "expectedWithdrawalProceeds",
                      "nameLocation": "12360:26:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "12352:34:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77846,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12352:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 77851,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77849,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77833,
                        "src": "12426:11:118",
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
                      "id": 77848,
                      "name": "calculateBaseLpProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120574,
                      "src": "12389:23:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 77850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12389:58:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12352:95:118"
                },
                {
                  "assignments": [
                    77853,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77853,
                      "mutability": "mutable",
                      "name": "bobWithdrawalProceeds",
                      "nameLocation": "12500:21:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "12492:29:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77852,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12492:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77858,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77855,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116797,
                        "src": "12543:3:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77856,
                        "name": "bobLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77833,
                        "src": "12548:11:118",
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
                      "id": 77854,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119560,
                        119581,
                        119604
                      ],
                      "referencedDeclaration": 119581,
                      "src": "12527:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12527:33:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12491:69:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77860,
                        "name": "bobWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77853,
                        "src": "12601:21:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77861,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77847,
                        "src": "12636:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77862,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12676:3:118",
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
                      "id": 77859,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "12570:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12570:119:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77864,
                  "nodeType": "ExpressionStatement",
                  "src": "12570:119:118"
                },
                {
                  "expression": {
                    "id": 77869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 77865,
                      "name": "expectedWithdrawalProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77847,
                      "src": "12754:26:118",
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
                          "id": 77867,
                          "name": "aliceLpShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77794,
                          "src": "12807:13:118",
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
                        "id": 77866,
                        "name": "calculateBaseLpProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120574,
                        "src": "12783:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) returns (uint256)"
                        }
                      },
                      "id": 77868,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12783:38:118",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12754:67:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 77870,
                  "nodeType": "ExpressionStatement",
                  "src": "12754:67:118"
                },
                {
                  "assignments": [
                    77872,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 77872,
                      "mutability": "mutable",
                      "name": "aliceWithdrawalProceeds",
                      "nameLocation": "12916:23:118",
                      "nodeType": "VariableDeclaration",
                      "scope": 77884,
                      "src": "12908:31:118",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 77871,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12908:7:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 77877,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 77874,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116795,
                        "src": "12974:5:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 77875,
                        "name": "aliceLpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77794,
                        "src": "12993:13:118",
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
                      "id": 77873,
                      "name": "removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        119560,
                        119581,
                        119604
                      ],
                      "referencedDeclaration": 119581,
                      "src": "12945:15:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 77876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12945:71:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12907:109:118"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 77879,
                        "name": "aliceWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77872,
                        "src": "13057:23:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 77880,
                        "name": "expectedWithdrawalProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77847,
                        "src": "13094:26:118",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "316534",
                        "id": 77881,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13134:3:118",
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
                      "id": 77878,
                      "name": "assertApproxEqAbs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17624,
                        17660,
                        17805,
                        17841
                      ],
                      "referencedDeclaration": 17624,
                      "src": "13026:17:118",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 77882,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13026:121:118",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77883,
                  "nodeType": "ExpressionStatement",
                  "src": "13026:121:118"
                }
              ]
            },
            "functionSelector": "51cf9a79",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_lp_fairness_long_short_lp",
            "nameLocation": "10959:30:118",
            "parameters": {
              "id": 77762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77759,
                  "mutability": "mutable",
                  "name": "variableRateParam",
                  "nameLocation": "11007:17:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77885,
                  "src": "10999:25:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10999:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77761,
                  "mutability": "mutable",
                  "name": "tradeSizeParam",
                  "nameLocation": "11042:14:118",
                  "nodeType": "VariableDeclaration",
                  "scope": 77885,
                  "src": "11034:22:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11034:7:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10989:73:118"
            },
            "returnParameters": {
              "id": 77763,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11072:0:118"
            },
            "scope": 77886,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 77095,
              "name": "HyperdriveTest",
              "nameLocations": [
                "370:14:118"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 120941,
              "src": "370:14:118"
            },
            "id": 77096,
            "nodeType": "InheritanceSpecifier",
            "src": "370:14:118"
          }
        ],
        "canonicalName": "LPFairnessTest",
        "contractDependencies": [
          13321,
          92554,
          92630
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          77886,
          120941,
          117331,
          26704,
          26653,
          22391,
          22101,
          21337,
          19283,
          18563,
          17031,
          17097,
          17094
        ],
        "name": "LPFairnessTest",
        "nameLocation": "352:14:118",
        "scope": 77887,
        "usedErrors": [
          7004,
          7088,
          7090,
          7097,
          116815,
          116817
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 118
}