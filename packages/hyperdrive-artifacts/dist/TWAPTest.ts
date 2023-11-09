export const TWAPTest = 
{
  "abi": [
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
      "inputs": [],
      "name": "test_oracle_data_recordings",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "test_oracle_query_reverts",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "test_oracle_write_long",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "test_oracle_write_short",
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
    "object": "0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000194565b602990620000c09082620002f8565b5060405163f877cb1960e01b815260206004820152600e60248201526d11d3d154931257d49410d7d5549360921b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015a919081019062000194565b602a90620001699082620002f8565b503480156200017757600080fd5b50620003c4565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a857600080fd5b82516001600160401b0380821115620001c057600080fd5b818501915085601f830112620001d557600080fd5b815181811115620001ea57620001ea6200017e565b604051601f8201601f19908116603f011681019083821181831017156200021557620002156200017e565b8160405282815288868487010111156200022e57600080fd5b600093505b8284101562000252578484018601518185018701529285019262000233565b600086848301015280965050505050505092915050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f357600081815260208120601f850160051c81016020861015620002ce5750805b601f850160051c820191505b81811015620002ef57828155600101620002da565b5050505b505050565b81516001600160401b038111156200031457620003146200017e565b6200032c8162000325845462000269565b84620002a5565b602080601f8311600181146200036457600084156200034b5750858301515b600019600386901b1c1916600185901b178555620002ef565b600085815260208120601f198616915b82811015620003955788860151825594840194600190910190840162000374565b5085821015620003b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6201010980620003d56000396000f3fe60806040523480156200001157600080fd5b5060043610620001395760003560e01c806366d9a9a011620000bb578063b5508aa9116200007a578063b5508aa91462000259578063ba414fa61462000263578063d4dbd48f146200027e578063e20c9f711462000288578063fa7626d4146200029257600080fd5b806366d9a9a014620001fc5780636b3992c7146200021557806385226c81146200021f578063916a17c61462000238578063ab75e7c3146200024257600080fd5b80633e5e0d2611620001085780633e5e0d2614620001975780633e5e3c2314620001ae5780633f7286f414620001b8578063507ffba514620001c25780636239c5ef14620001f257600080fd5b80630a9254e4146200013e57806310716760146200014a5780631885dd6a14620001745780631ed7831c146200017e575b600080fd5b62000148620002a0565b005b620001616200015b36600462003c11565b62000717565b6040519081526020015b60405180910390f35b620001486200079f565b6200018862000b64565b6040516200016b919062003c63565b62000161620001a836600462003cb2565b62000bc8565b6200018862000e28565b6200018862000e8a565b620001d9620001d336600462003d4f565b62000eec565b6040516001600160a01b0390911681526020016200016b565b6200014862001002565b62000206620010f2565b6040516200016b919062003e0a565b62000148620011e5565b6200022962001511565b6040516200016b919062003f15565b62000206620015eb565b620001486200025336600462003f7b565b620016d5565b6200022962001a16565b6200026d62001af0565b60405190151581526020016200016b565b6200014862001c1d565b6200018862001eb5565b6007546200026d9060ff1681565b620002aa62001f17565b601c546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200ffa5833981519152906306447d5690602401600060405180830381600087803b158015620002ff57600080fd5b505af115801562000314573d6000803e3d6000fd5b5050505060126000806040516200032b9062003bd1565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f080158015620003a1573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e1338081526020016201518081526020016200046f84620021f7565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a090920191909152519091506000908290620004bf9062003bdf565b620004cb919062004063565b604051809103906000f080158015620004e8573d6000803e3d6000fd5b5090508181604051620004fb9062003bed565b6200050892919062004074565b604051809103906000f08015801562000525573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200059a57600080fd5b505af1158015620005af573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200ffa583398151915293506306447d56925001600060405180830381600087803b1580156200060757600080fd5b505af11580156200061c573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b1580156200067157600080fd5b505af115801562000686573d6000803e3d6000fd5b5050602b5460ff169150620007119050576000805160206200ffa583398151915263e5d6bf02620006bd6301e133806003620040b4565b6040518263ffffffff1660e01b8152600401620006dc91815260200190565b600060405180830381600087803b158015620006f757600080fd5b505af11580156200070c573d6000803e3d6000fd5b505050505b50505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200079791869186918216906370a0823190602401602060405180830381865afa1580156200076a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007909190620040ce565b8562000bc8565b949350505050565b601c5466b1a2bc2ec50000906b019d971e4fe8401e7400000090620007cf906001600160a01b031683836200224b565b50601d54678ac7230489e800009042906000908190620007f9906001600160a01b031685620022d5565b91509150600080602c60009054906101000a90046001600160a01b03166001600160a01b0316638fca1f7b6040518163ffffffff1660e01b81526004016040805180830381865afa15801562000853573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008799190620040e8565b915091506200088a82600162002369565b62000896818662002369565b601d546000908190620008b3906001600160a01b031689620022d5565b602c5460408051638fca1f7b60e01b815281519496509294506001600160a01b0390911692638fca1f7b9260048082019392918290030181865afa15801562000900573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009269190620040e8565b90945092506200093884600162002369565b62000944838862002369565b620009526103e88b6200246a565b601d544297506200096d906001600160a01b031689620022d5565b5050602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa158015620009b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009dd9190620040e8565b9094509250620009ef84600262002369565b620009fb838862002369565b601d5462000a14906001600160a01b0316878762002544565b50602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa15801562000a5d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a839190620040e8565b909450925062000a9584600262002369565b62000aa1838862002369565b62000aaf6103e88b6200246a565b601d5442975062000acb906001600160a01b0316838362002544565b50602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa15801562000b14573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b3a9190620040e8565b909450925062000b4c84600362002369565b62000b58838862002369565b50505050505050505050565b6060601480548060200260200160405190810160405280929190818152602001828054801562000bbe57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831162000b9f575b5050505050905090565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa15801562000c14573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c3a9190620040ce565b90508084111562000c5e5760405163188c93a560e31b815260040160405180910390fd5b6000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562000cac57600080fd5b505af115801562000cc1573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03891660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b15801562000d1657600080fd5b505af115801562000d2b573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a764000060248201526000805160206200ffa5833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000d8e57600080fd5b505af115801562000da3573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000df7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e1d91906200410d565b509295945050505050565b6060601680548060200260200160405190810160405280929190818152602001828054801562000bbe576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000b9f575050505050905090565b6060601580548060200260200160405190810160405280929190818152602001828054801562000bbe576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000b9f575050505050905090565b60008160405160200162000f01919062004131565b60408051601f198184030181529082905280516020909101206318caf8e360e31b825291506000805160206200ffa58339815191529063c657c7189062000f4f908490869060040162004146565b600060405180830381600087803b15801562000f6a57600080fd5b505af115801562000f7f573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab240000060248201526000805160206200ffa5833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000fe457600080fd5b505af115801562000ff9573d6000803e3d6000fd5b50505050919050565b6000805160206201005e83398151915260001c6001600160a01b031663f48448146040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200105057600080fd5b505af115801562001065573d6000803e3d6000fd5b5050602c546001600160a01b0316915063afdac68d90506200108c426301e133806200416c565b6040518263ffffffff1660e01b8152600401620010ab91815260200190565b602060405180830381865afa158015620010c9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620010ef9190620040ce565b50565b60606019805480602002602001604051908101604052809291908181526020016000905b82821015620011dc5760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015620011c357602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620011845790505b5050505050815250508152602001906001019062001116565b50505050905090565b601c5466b1a2bc2ec50000906b019d971e4fe8401e740000009062001215906001600160a01b031683836200224b565b50601d54678ac7230489e8000090429060009081906200123f906001600160a01b031685620025b9565b91509150600080602c60009054906101000a90046001600160a01b03166001600160a01b0316638fca1f7b6040518163ffffffff1660e01b81526004016040805180830381865afa15801562001299573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012bf9190620040e8565b91509150620012d082600162002369565b620012dc818662002369565b601d546000908190620012f9906001600160a01b031689620025b9565b602c5460408051638fca1f7b60e01b815281519496509294506001600160a01b0390911692638fca1f7b9260048082019392918290030181865afa15801562001346573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200136c9190620040e8565b90945092506200137e84600162002369565b6200138a838862002369565b620013986103e88b6200246a565b601d54429750620013b3906001600160a01b031689620025b9565b5050602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa158015620013fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620014239190620040e8565b90945092506200143584600262002369565b62001441838862002369565b601d546200145a906001600160a01b0316878762002641565b50602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa158015620014a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620014c99190620040e8565b9094509250620014db84600262002369565b620014e7838862002369565b620014f56103e88b6200246a565b601d5442975062000acb906001600160a01b0316838362002641565b60606018805480602002602001604051908101604052809291908181526020016000905b82821015620011dc578382906000526020600020018054620015579062004182565b80601f0160208091040260200160405190810160405280929190818152602001828054620015859062004182565b8015620015d65780601f10620015aa57610100808354040283529160200191620015d6565b820191906000526020600020905b815481529060010190602001808311620015b857829003601f168201915b50505050508152602001906001019062001535565b6060601a805480602002602001604051908101604052809291908181526020016000905b82821015620011dc5760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015620016bc57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116200167d5790505b505050505081525050815260200190600101906200160f565b600082128015906200170f5762001709848310156040518060600160405280603681526020016201009e60369139620026b6565b62001736565b620017368285116040518060600160405280602781526020016200ffe560279139620026b6565b60008162001745578462001751565b6200175184866200416c565b9050600082156200176357856200177a565b6200176e85620041be565b6200177a9087620041dd565b9050808410806200178a57508184115b156200180857620017c8848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b815250620026ef565b62001800848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002731565b505050505050565b8215620019085760006200181d8786620041dd565b905085811015620018db5760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a202573000000000000602082015262001873906200186d8389620041dd565b6200276e565b620018a46040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b81525087620027b7565b620018d56040518060400160405280600d81526020016c4e65772044656c74613a20257360981b815250826200276e565b62001901565b6200190183866040518060600160405280602981526020016201000c6029913962002800565b5062001800565b6000620019168588620041dd565b90506200192386620041be565b811015620019e7576200197e6040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200197290620041be565b6200186d9190620041dd565b620019af6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b81525087620027b7565b620019e16040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b815250826200276e565b62001a0d565b62001a0d8286604051806060016040528060298152602001620100356029913962002800565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b82821015620011dc57838290600052602060002001805462001a5c9062004182565b80601f016020809104026020016040519081016040528092919081815260200182805462001a8a9062004182565b801562001adb5780601f1062001aaf5761010080835404028352916020019162001adb565b820191906000526020600020905b81548152906001019060200180831162001abd57829003601f168201915b50505050508152602001906001019062001a3a565b600754600090610100900460ff161562001b135750600754610100900460ff1690565b60006000805160206200ffa58339815191523b1562001c1857604080516000805160206200ffa5833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001b9a917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001620041f3565b60408051601f198184030181529082905262001bb69162004226565b6000604051808303816000865af19150503d806000811462001bf5576040519150601f19603f3d011682016040523d82523d6000602084013e62001bfa565b606091505b509150508080602001905181019062001c1491906200410d565b9150505b919050565b62001c276200283c565b600062001c376103e842620041dd565b602c5460408051638fca1f7b60e01b8152815193945060009384936001600160a01b031692638fca1f7b92600480820193918290030181865afa15801562001c83573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001ca99190620040e8565b909250905062001cc78262001cc16005600c6200425a565b62002369565b62001cd3818462002369565b8260025b8060031462001d9557602c54604051634daa8b8f60e01b8152600481018390526000916001600160a01b031690634daa8b8f906024016040805180830381865afa15801562001d2a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001d509190620040e8565b91505062001d5f818462002369565b62001d6d6103e884620041dd565b925050801562001d8a5762001d84600182620041dd565b62001d8d565b60045b905062001cd7565b50600062001da760016103e8620041dd565b9050600c8060005b62001dbd60016005620041dd565b8110156200070c57602c5460405163afdac68d60e01b8152600481018690526000916001600160a01b03169063afdac68d90602401602060405180830381865afa15801562001e10573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001e369190620040ce565b905062001e7f81600262001e5386670de0b6b3a7640000620040b4565b62001e6788670de0b6b3a7640000620040b4565b62001e7391906200416c565b62001cc1919062004271565b62001e8c600184620041dd565b925062001e9c6103e8866200416c565b945050808062001eac9062004288565b91505062001daf565b6060601380548060200260200160405190810160405280929190818152602001828054801562000bbe576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000b9f575050505050905090565b62001f3f60405180604001604052806005815260200164616c69636560d81b81525062000eec565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b602082015262001f849062000eec565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b602082015262001fcc9062000eec565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b6020820152620020119062000eec565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620020569062000eec565b602060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550620020a7604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000eec565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b6020820152620020ef9062000eec565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b60208201526200213d9062000eec565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620021899062000eec565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b6020820152620021d19062000eec565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b6000806200222e6200221e6200220f856064620040b4565b66a5bbed86c5a00090620028eb565b6748cd4072281e0000906200290b565b905062002244670de0b6b3a7640000826200290b565b9392505050565b6000620007978484846040518060c0016040528060011515815260200187815260200160008152602001600081526020016000198152602001600067ffffffffffffffff811115620022a157620022a162003d0c565b6040519080825280601f01601f191660200182016040528015620022cc576020820181803683370190505b50905262002922565b6000806200235e84846040518060c00160405280600115158152602001878152602001600081526020018781526020016000198152602001600067ffffffffffffffff8111156200232a576200232a62003d0c565b6040519080825280601f01601f19166020018201604052801562002355576020820181803683370190505b50905262002cd2565b915091509250929050565b80821462002466576000805160206200ff85833981519152604051620023cb9060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b60608201526020810184905290516000805160206201007e8339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b6060820152602081018290526000805160206201007e833981519152906080015b60405180910390a16200246662003091565b5050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b158015620024b857600080fd5b505af1158015620024cd573d6000803e3d6000fd5b506000805160206200ffa5833981519152925063e5d6bf029150620024f5905084426200416c565b6040518263ffffffff1660e01b81526004016200251491815260200190565b600060405180830381600087803b1580156200252f57600080fd5b505af115801562001800573d6000803e3d6000fd5b600062000797848484604051806060016040528060011515815260200160008152602001600067ffffffffffffffff81111562002585576200258562003d0c565b6040519080825280601f01601f191660200182016040528015620025b0576020820181803683370190505b5090526200319a565b6000806200235e84846040518060c001604052806001151581526020018781526020016000815260200160008152602001878152602001600067ffffffffffffffff8111156200260d576200260d62003d0c565b6040519080825280601f01601f19166020018201604052801562002638576020820181803683370190505b5090526200331a565b600062000797848484604051806060016040528060011515815260200160008152602001600067ffffffffffffffff81111562002682576200268262003d0c565b6040519080825280601f01601f191660200182016040528015620026ad576020820181803683370190505b50905262003795565b8162002466576000805160206200ffc583398151915281604051620026dc9190620042a4565b60405180910390a16200246682620038c6565b818310156200272c576000805160206200ffc583398151915281604051620027189190620042a4565b60405180910390a16200272c83836200392d565b505050565b818311156200272c576000805160206200ffc5833981519152816040516200275a9190620042a4565b60405180910390a16200272c838362003a1c565b62002466828260405160240162002787929190620042d5565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262003a7f565b620024668282604051602401620027d0929190620042d5565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262003a7f565b8183146200272c576000805160206200ffc583398151915281604051620028289190620042a4565b60405180910390a16200272c838362002369565b66b1a2bc2ec5000060015b600c81116200246657602c546001600160a01b0316635a1a3e7c6200287583670de0b6b3a7640000620040b4565b6040518263ffffffff1660e01b81526004016200289491815260200190565b600060405180830381600087803b158015620028af57600080fd5b505af1158015620028c4573d6000803e3d6000fd5b50505050620028d66103e8836200246a565b80620028e28162004288565b91505062002847565b6000620029028383670de0b6b3a764000062003a8a565b90505b92915050565b60006200290283670de0b6b3a76400008462003a8a565b60006000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200297257600080fd5b505af115801562002987573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b158015620029dc57600080fd5b505af1158015620029f1573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002a56573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002a7c919062004366565b516001600160a01b031614801562002a92575081515b1562002b4457602c54602080840151604080516060810182526001600160a01b038a81168252875115159482019490945260a0870151818301529051631df417fd60e21b815292909316926377d05ff49262002af69188918a91906004016200445d565b60206040518083038185885af115801562002b15573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002b3c9190620040ce565b905062000797565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002b9557600080fd5b505af115801562002baa573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002c0f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c3591906200410d565b50602c54604080516060810182526001600160a01b03888116825285511515602083015260a0860151828401529151631df417fd60e21b815291909216916377d05ff49162002c8c9187918991906004016200445d565b6020604051808303816000875af115801562002cac573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002b3c9190620040ce565b6000806000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002d2357600080fd5b505af115801562002d38573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b15801562002d8d57600080fd5b505af115801562002da2573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002e07573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e2d919062004366565b516001600160a01b031614801562002e43575082515b1562002efe57602c54602080850151606080870151604080890151815193840182526001600160a01b038c811685528a5115159685019690965260a08a015184830152905163cba2e58d60e01b8152949095169463cba2e58d9462002eaf938b9392916004016200447e565b604080518083038185885af115801562002ecd573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002ef49190620040e8565b9150915062003089565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002f4957600080fd5b505af115801562002f5e573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562002fbd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002fe391906200410d565b50602c54606080850151604080870151815193840182526001600160a01b038a8116855288511515602086015260a089015185840152915163cba2e58d60e01b8152919094169363cba2e58d9362003044938a93909291906004016200447e565b60408051808303816000875af115801562003063573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002ef49190620040e8565b935093915050565b6000805160206200ffa58339815191523b156200318957604080516000805160206200ffa5833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620031249291602001620041f3565b60408051601f1981840301815290829052620031409162004226565b6000604051808303816000865af19150503d80600081146200317f576040519150601f19603f3d011682016040523d82523d6000602084013e62003184565b606091505b505050505b6007805461ff001916610100179055565b60006000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620031ea57600080fd5b505af1158015620031ff573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b1580156200325457600080fd5b505af115801562003269573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c8116825289511515948201949094528189015181830152905163ded0623160e01b815292909316945063ded062319350620032cb928992899291906004016200447e565b6020604051808303816000875af1158015620032eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620033119190620040ce565b95945050505050565b6000806000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200336b57600080fd5b505af115801562003380573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b158015620033d557600080fd5b505af1158015620033ea573d6000803e3d6000fd5b5050602c546200340692506001600160a01b0316905062003aa9565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156200347b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620034a1919062004366565b516001600160a01b0316148015620034b7575082515b156200357457602c54602080850151608086015160408088015181516060810183526001600160a01b038c811682528a5115159682019690965260a08a0151818401529151630dbbe80760e41b8152949095169463dbbe80709462003524938b939092916004016200447e565b604080518083038185885af115801562003542573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620035699190620040e8565b909250905062003089565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b158015620035c557600080fd5b505af1158015620035da573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af11580156200363f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200366591906200410d565b50602c54608084015160408086015181516060810183526001600160a01b038a8116825288511515602083015260a0890151828501529251630dbbe80760e41b8152929094169363dbbe807093620036c5938a939192906004016200447e565b60408051808303816000875af1158015620036e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200370a9190620040e8565b602b54602086015192945090925061010090046001600160a01b0316906342966c68906200373a908490620041dd565b6040518263ffffffff1660e01b81526004016200375991815260200190565b600060405180830381600087803b1580156200377457600080fd5b505af115801562003789573d6000803e3d6000fd5b50505050935093915050565b60006000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620037e557600080fd5b505af1158015620037fa573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b1580156200384f57600080fd5b505af115801562003864573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c811682528951151594820194909452818901518183015290516329b23fc160e01b81529290931694506329b23fc19350620032cb928992899291906004016200447e565b80620010ef576000805160206200ff858339815191526040516200391b9060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a1620010ef62003091565b8082101562002466576000805160206200ff85833981519152604051620039909060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b60608201526020810184905290516000805160206201007e8339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b6060820152602081018290526000805160206201007e8339815191529060800162002454565b8082111562002466576000805160206200ff85833981519152604051620039909060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620010ef8162003b2c565b600082600019048411830215820262003aa257600080fd5b5091020490565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003aeb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003b11919062004366565b6080015162003b208362003b4d565b6200290591906200416c565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003b8f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003bb5919062004366565b60a0015162003bc590426200425a565b620029059042620041dd565b611de380620044b083390190565b6129ad806200629383390190565b6173458062008c4083390190565b6001600160a01b0381168114620010ef57600080fd5b60008060006060848603121562003c2757600080fd5b833562003c348162003bfb565b9250602084013562003c468162003bfb565b9150604084013562003c588162003bfb565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b8181101562003ca65783516001600160a01b03168352928401929184019160010162003c7f565b50909695505050505050565b6000806000806080858703121562003cc957600080fd5b843562003cd68162003bfb565b9350602085013562003ce88162003bfb565b925060408501359150606085013562003d018162003bfb565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171562003d495762003d4962003d0c565b60405290565b60006020828403121562003d6257600080fd5b813567ffffffffffffffff8082111562003d7b57600080fd5b818401915084601f83011262003d9057600080fd5b81358181111562003da55762003da562003d0c565b604051601f8201601f19908116603f0116810190838211818310171562003dd05762003dd062003d0c565b8160405282815287602084870101111562003dea57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101562003eb257898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101562003e9c5783516001600160e01b0319168252928b019260019290920191908b019062003e70565b50978a0197955050509187019160010162003e32565b50919998505050505050505050565b60005b8381101562003ede57818101518382015260200162003ec4565b50506000910152565b6000815180845262003f0181602086016020860162003ec1565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101562003f6e57603f1988860301845262003f5b85835162003ee7565b9450928501929085019060010162003f3c565b5092979650505050505050565b60008060006060848603121562003f9157600080fd5b505081359360208301359350604090920135919050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e08101516200400c60e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002905828462003fa8565b6101e0810162004085828562003fa8565b6001600160a01b03929092166101c09190910152919050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200290557620029056200409e565b600060208284031215620040e157600080fd5b5051919050565b60008060408385031215620040fc57600080fd5b505080516020909101519092909150565b6000602082840312156200412057600080fd5b815180151581146200224457600080fd5b60208152600062002902602083018462003ee7565b6001600160a01b0383168152604060208201819052600090620007979083018462003ee7565b808201808211156200290557620029056200409e565b600181811c908216806200419757607f821691505b602082108103620041b857634e487b7160e01b600052602260045260246000fd5b50919050565b6000600160ff1b8201620041d657620041d66200409e565b5060000390565b818103818111156200290557620029056200409e565b6001600160e01b03198316815281516000906200421881600485016020870162003ec1565b919091016004019392505050565b600082516200423a81846020870162003ec1565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b6000826200426c576200426c62004244565b500690565b60008262004283576200428362004244565b500490565b6000600182016200429d576200429d6200409e565b5060010190565b60408152600560408201526422b93937b960d91b606082015260806020820152600062002902608083018462003ee7565b604081526000620042ea604083018562003ee7565b90508260208301529392505050565b805162001c188162003bfb565b6000606082840312156200431957600080fd5b6040516060810181811067ffffffffffffffff821117156200433f576200433f62003d0c565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200437a57600080fd5b6200438462003d22565b6200438f83620042f9565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620043db60e08401620042f9565b60e0820152610100620043f0818501620042f9565b90820152610120620044058585830162004306565b908201526101808301516101408201526101a09092015161016083015250919050565b60018060a01b038151168252602081015115156020830152600060408201516060604085015262000797606085018262003ee7565b83815282602082015260606040820152600062003311606083018462004428565b848152836020820152826040820152608060608201526000620044a5608083018462004428565b969550505050505056fe6101006040523480156200001257600080fd5b5060405162001de338038062001de3833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161186c620005776000396000818161037901528181610882015281816108e801528181610c270152610c890152600061085e01526000610829015260006102b9015261186c6000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b146104c7578063ea7ca276146104fd578063ed0d0efb14610534578063f2fde38b1461055457600080fd5b8063bf7e214f1461044d578063c53a398514610460578063d505accf14610489578063dd62ed3e1461049c57600080fd5b80639dc29fac116100de5780639dc29fac14610401578063a0712d6814610414578063a9059cbb14610427578063b70096131461043a57600080fd5b80637a9e5e4b1461039b5780637ecebe00146103ae5780638da5cb5b146103ce57806395d89b41146103f957600080fd5b80633644e5151161018757806367aff4841161015657806367aff4841461032e57806370a0823114610341578063728b952b146103615780637a8c63b51461037457600080fd5b80633644e515146102ed57806340c10f19146102f557806342966c68146103085780634b5159da1461031b57600080fd5b80630ea9b75b116101c35780630ea9b75b1461028357806318160ddd1461029857806323b872dd146102a1578063313ce567146102b457600080fd5b806306a36aee146101f557806306fdde0314610228578063095ea7b31461023d5780630bade8a414610260575b600080fd5b610215610203366004611324565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610230610567565b60405161021f9190611341565b61025061024b36600461138f565b6105f5565b604051901515815260200161021f565b61025061026e3660046113d8565b600a6020526000908152604090205460ff1681565b610296610291366004611412565b610662565b005b61021560025481565b6102506102af366004611459565b610743565b6102db7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161021f565b610215610825565b61029661030336600461138f565b610880565b61029661031636600461149a565b6108e6565b6102966103293660046114b3565b61094b565b61029661033c3660046114ea565b6109dd565b61021561034f366004611324565b60036020526000908152604090205481565b61029661036f366004611518565b610aa5565b6102507f000000000000000000000000000000000000000000000000000000000000000081565b6102966103a9366004611324565b610b2e565b6102156103bc366004611324565b60056020526000908152604090205481565b6006546103e1906001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b610230610c18565b61029661040f36600461138f565b610c25565b61029661042236600461149a565b610c87565b61025061043536600461138f565b610ce9565b610250610448366004611546565b610d4f565b6007546103e1906001600160a01b031681565b6103e161046e366004611324565b6008602052600090815260409020546001600160a01b031681565b61029661049736600461158d565b610e4d565b6102156104aa366004611518565b600460209081526000928352604080842090915290825290205481565b6102506104d53660046115fb565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025061050b36600461162e565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102156105423660046113d8565b600b6020526000908152604090205481565b610296610562366004611324565b611091565b600080546105749061165a565b80601f01602080910402602001604051908101604052809291908181526020018280546105a09061165a565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106509086815260200190565b60405180910390a35060015b92915050565b610678336000356001600160e01b03191661110f565b61069d5760405162461bcd60e51b815260040161069490611694565b60405180910390fd5b80156106cd576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106f4565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610736911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461079f5761077a83826116d0565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107c79084906116d0565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611817833981519152906108109087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461085b576108566111b9565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108d8576108bc336000356001600160e01b03191661110f565b6108d85760405162461bcd60e51b8152600401610694906116e3565b6108e28282611253565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561093e57610922336000356001600160e01b03191661110f565b61093e5760405162461bcd60e51b8152600401610694906116e3565b61094833826112ad565b50565b610961336000356001600160e01b03191661110f565b61097d5760405162461bcd60e51b815260040161069490611694565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109f3336000356001600160e01b03191661110f565b610a0f5760405162461bcd60e51b815260040161069490611694565b8015610a3e576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a64565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610736911515815260200190565b610abb336000356001600160e01b03191661110f565b610ad75760405162461bcd60e51b815260040161069490611694565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610bc3575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b8290339030906001600160e01b0319600035169060040161171a565b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611747565b610bcc57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105749061165a565b7f000000000000000000000000000000000000000000000000000000000000000015610c7d57610c61336000356001600160e01b03191661110f565b610c7d5760405162461bcd60e51b8152600401610694906116e3565b6108e282826112ad565b7f000000000000000000000000000000000000000000000000000000000000000015610cdf57610cc3336000356001600160e01b03191661110f565b610cdf5760405162461bcd60e51b8152600401610694906116e3565b6109483382611253565b33600090815260036020526040812080548391908390610d0a9084906116d0565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611817833981519152906106509086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610deb5760405163b700961360e01b81526001600160a01b0382169063b700961390610da29088908890889060040161171a565b602060405180830381865afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de39190611747565b91505061081e565b6001600160e01b031983166000908152600a602052604090205460ff1680610e4457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e9d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610694565b60006001610ea9610825565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610fb5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610feb5750876001600160a01b0316816001600160a01b0316145b6110285760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610694565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6110a7336000356001600160e01b03191661110f565b6110c35760405162461bcd60e51b815260040161069490611694565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611199575060405163b700961360e01b81526001600160a01b0382169063b7009613906111589087903090889060040161171a565b602060405180830381865afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190611747565b806111b157506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111eb9190611764565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546112659190611803565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061181783398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112d59084906116d0565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611817833981519152906020016112a1565b6001600160a01b038116811461094857600080fd5b60006020828403121561133657600080fd5b813561081e8161130f565b600060208083528351808285015260005b8181101561136e57858101830151858201604001528201611352565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156113a257600080fd5b82356113ad8161130f565b946020939093013593505050565b80356001600160e01b0319811681146113d357600080fd5b919050565b6000602082840312156113ea57600080fd5b61081e826113bb565b803560ff811681146113d357600080fd5b801515811461094857600080fd5b60008060006060848603121561142757600080fd5b611430846113f3565b925061143e602085016113bb565b9150604084013561144e81611404565b809150509250925092565b60008060006060848603121561146e57600080fd5b83356114798161130f565b925060208401356114898161130f565b929592945050506040919091013590565b6000602082840312156114ac57600080fd5b5035919050565b600080604083850312156114c657600080fd5b6114cf836113bb565b915060208301356114df81611404565b809150509250929050565b6000806000606084860312156114ff57600080fd5b833561150a8161130f565b925061143e602085016113f3565b6000806040838503121561152b57600080fd5b82356115368161130f565b915060208301356114df8161130f565b60008060006060848603121561155b57600080fd5b83356115668161130f565b925060208401356115768161130f565b9150611584604085016113bb565b90509250925092565b600080600080600080600060e0888a0312156115a857600080fd5b87356115b38161130f565b965060208801356115c38161130f565b955060408801359450606088013593506115df608089016113f3565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561160e57600080fd5b611617836113f3565b9150611625602084016113bb565b90509250929050565b6000806040838503121561164157600080fd5b823561164c8161130f565b9150611625602084016113f3565b600181811c9082168061166e57607f821691505b60208210810361168e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561065c5761065c6116ba565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561175957600080fd5b815161081e81611404565b600080835481600182811c91508083168061178057607f831692505b6020808410820361179f57634e487b7160e01b86526022600452602486fd5b8180156117b357600181146117c8576117f5565b60ff19861689528415158502890196506117f5565b60008a81526020902060005b868110156117ed5781548b8201529085019083016117d4565b505084890196505b509498975050505050505050565b8082018082111561065c5761065c6116ba56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220117bf66eed90e97e74b4fd19222cc1bd7a2bc245ad92cd2dcf2d782fea57c03664736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620029ad380380620029ad8339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516125426200046b6000396000610a1701526000610967015260006109e0015260006109bb01526000610998015260006108c101526000818161089c01526110a6015260008181610872015261108001526000818161093701526110cc0152600081816108eb015261153901526000818161091101526117c501526000818161084d01528181610b780152610f5101526000610bb101526000610b3801526125426000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611df2565b6102f1565b6040516101459190611e5b565b60405180910390f35b61016161015c366004611df2565b610328565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611e85565b61037a565b604051908152602001610145565b61019b6101b7366004611ec1565b6103c0565b6101386101ca366004611df2565b6103f9565b6101d7610407565b6040516101459190611eed565b61019b6101f2366004611f78565b610601565b61019b61062d565b61019b61020d366004611df2565b61064a565b61021a610830565b6040516101459190611f93565b61019b610235366004611df2565b610a4d565b61024d610248366004612055565b610a6f565b60405161014591906120ca565b610262610b2a565b6040516001600160a01b039091168152602001610145565b610262610b6a565b61019b610baa565b610292610be2565b604051610145919061210e565b6102b26102ad3660046121fb565b610c48565b6040519015158152602001610145565b6102ca610c8c565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b60606103236102ff83610ceb565b60405160200161030f9190611e5b565b604051602081830303815290604052610e19565b919050565b6040805180820190915260008082526020820152610323600e600084815260200190815260200160002060405160200161030f91546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103b9910161030f565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103f3910161030f565b92915050565b60606103236102ff83610e3d565b610472604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061047c610f2f565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b03909216916104e79190612251565b6104f19190612264565b9050600080831161050357600061051e565b61051e8361051861051386610fe3565b611149565b906113b7565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105c6576105c184866113cc565b6105c9565b60005b8152600954600160801b90046001600160801b03166020918201526040519192506105fa9161030f91849101611eed565b5050505090565b6001600160a01b038116600090815260076020908152604080832054815192830152610323910161030f565b600061064760105460405160200161030f91815260200190565b90565b601354601280546000926001600160801b03600160801b82048116939116918491908390811061067c5761067c612277565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106bd8685612264565b9050600083156106d7576106d2600185612264565b6106e6565b6012546106e690600190612264565b60408051808201909152600080825260208201529091505b8482146107955760006012838154811061071a5761071a612277565b6000918252602090912001805490915063ffffffff1684106107685760408051808201909152905463ffffffff8116825264010000000090046001600160e01b031660208201529050610795565b821561077e57610779600184612264565b61078d565b60125461078d90600190612264565b9250506106fe565b805163ffffffff166000036107bd57604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166107e59190612264565b825186519192506000916108029163ffffffff9081169116612264565b905061082361081182846122a3565b60405160200161030f91815260200190565b5050505050505050919050565b610838611d54565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f000000000000000000000000000000000000000000000000000000000000000061016083015291516106479261030f929101611f93565b600081815260026020908152604080832054815192830152610323910161030f565b606060008267ffffffffffffffff811115610a8c57610a8c6122b7565b604051908082528060200260200182016040528015610ab5578160200160208202803683370190505b50905060005b83811015610b0e576000858583818110610ad757610ad7612277565b90506020020135905060008154905080848481518110610af957610af9612277565b60209081029190910101525050600101610abb565b50610b238160405160200161030f91906120ca565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b60006106477f000000000000000000000000000000000000000000000000000000000000000060405160200161030f91815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610647600860405160200161030f91906122cd565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103f3910161030f565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526106479060600161030f565b606060f882901c6001600160f81b0383166000610d07826113e1565b90506000836003811115610d1d57610d1d612225565b03610d4f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610e11565b6001836003811115610d6357610d63612225565b03610d8f5780604051602001610d79919061234e565b6040516020818303038152906040529350610e11565b6002836003811115610da357610da3612225565b03610db95780604051602001610d799190612387565b6003836003811115610dcd57610dcd612225565b03610e11576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610e349190611e5b565b60405180910390fd5b606060f882901c6001600160f81b0383166000610e59826113e1565b90506000836003811115610e6f57610e6f612225565b03610ea1576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610e11565b6001836003811115610eb557610eb5612225565b03610ecb5780604051602001610d7991906123c1565b6002836003811115610edf57610edf612225565b03610ef55780604051602001610d7991906123f9565b6003836003811115610f0957610f09612225565b03610e11576040516c485950455244524956452d575360981b6020820152602d01610dff565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc9190612425565b9050601454600003610fcf576000610fdd565b601454610fdd9082906113cc565b91505090565b61104060405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b54909161010083019161110f91166114ee565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192611141929004166114ee565b905292915050565b6000806111698361014001518461012001516113b790919063ffffffff16565b61010084015160e085015161117d916113b7565b611187919061243e565b9050600061119d84600001518560200151611564565b9050600082131561123d5760006111df8286604001518760a001518860c00151670de0b6b3a76400006111d09190612264565b89606001518a60800151611581565b90506111eb8184611621565b9050801561123757611224828660400151838860c00151670de0b6b3a76400006112159190612264565b89606001518a60800151611636565b85518690611233908390612264565b9052505b506112f9565b60008212156112f95761124f8261245e565b915060006112838286604001518760c00151670de0b6b3a76400006112749190612264565b88606001518960800151611675565b905061128f8184611621565b905080156112db576112c8828660400151838860c00151670de0b6b3a76400006112b99190612264565b89606001518a6080015161170b565b855186906112d7908390612251565b9052505b6112e58184612264565b855186906112f4908390612251565b905250505b6000611328856101000151670de0b6b3a76400006113179190612264565b606087015160e088015191906117a0565b611356866101400151670de0b6b3a76400006113449190612264565b606088015161012089015191906117a0565b611360919061243e565b90506000818660000151611374919061247a565b90508560a0015181121561139b5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516113ad9082612264565b9695505050505050565b60006103b98383670de0b6b3a76400006117a0565b60006103b983670de0b6b3a7640000846117a0565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611413600a8561249a565b61141e906030612251565b60f81b8161142d600185612264565b8151811061143d5761143d612277565b60200101906001600160f81b031916908160001a90535061145f600a856122a3565b935060015b84156114e057611475600a8661249a565b611480906030612251565b60f81b8260016114908487612264565b61149a9190612264565b815181106114aa576114aa612277565b60200101906001600160f81b031916908160001a9053506114cc600a866122a3565b9450806114d8816124ae565b915050611464565b918290030190815292915050565b600080670de0b6b3a76400006115026117be565b61150c91906124c7565b905080831161151c576000611526565b6115268184612264565b91506103b961155d670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006124c7565b83906113cc565b600080611571838561243e565b905060008112156103b957600080fd5b60008061159188888787876117f9565b905060006115b46115ac876115a6878b611828565b9061183d565b869086611894565b6115be9083612264565b9050670de0b6b3a764000081106115f2576115eb6115e4670de0b6b3a7640000886113cc565b829061183d565b905061160a565b6116076115e4670de0b6b3a7640000886118ba565b90505b6116148882612264565b9998505050505050505050565b600081831161163057826103b9565b50919050565b6000806116478888888888886118cf565b90925090508061166a57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806116858787878787611991565b905060006116b0670de0b6b3a764000061169f87876113cc565b6116a99190612251565b83906118ba565b9050670de0b6b3a764000081106116dd576116d66115e4670de0b6b3a7640000886118ba565b90506116f5565b6116f26115e4670de0b6b3a7640000886113cc565b90505b6116ff8188612264565b98975050505050505050565b60008061171b8888878787611991565b905061172b856115a6888a612264565b96506000611745848661173e8b86612264565b9190611894565b9050670de0b6b3a764000081106117725761176b6115e4670de0b6b3a7640000886118ba565b905061178a565b6117876115e4670de0b6b3a7640000886113cc565b90505b61179481856118ba565b90506116148982612264565b60008260001904841183021582026117b757600080fd5b5091020490565b60006117ea7f00000000000000000000000000000000000000000000000000000000000000004261249a565b6117f49042612264565b905090565b6000611805858561183d565b61181e611816866115a6868b6113b7565b8590856117a0565b6113ad9190612251565b60006103b98383670de0b6b3a7640000611894565b6000816000036118565750670de0b6b3a76400006103f3565b82600003611866575060006103f3565b816000611872856119b6565b9050818102611889670de0b6b3a7640000826124de565b90506113ad81611bc9565b60008260001904841183021582026118ab57600080fd5b50910281810615159190040190565b60006103b983670de0b6b3a764000084611894565b60008060006118e18989888888611991565b90506118f1866115a6898b612251565b975087811015611908576000809250925050611986565b6000611919858761173e8c86612264565b9050670de0b6b3a764000081106119465761193f6115e4670de0b6b3a7640000896118ba565b905061195e565b61195b6115e4670de0b6b3a7640000896113cc565b90505b61196881866118ba565b9050808a111561197f5761197c818b612264565b93505b6001925050505b965096945050505050565b600061199d858561183d565b61181e6119ae866115a6868b611828565b859085611894565b60008082136119d857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611be457506000919050565b680755bf798b4a1bf1e58212611c0d5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611dde60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611e0457600080fd5b5035919050565b60005b83811015611e26578181015183820152602001611e0e565b50506000910152565b60008151808452611e47816020860160208601611e0b565b601f01601f19169290920160200192915050565b6020815260006103b96020830184611e2f565b80356001600160a01b038116811461032357600080fd5b600080600060608486031215611e9a57600080fd5b83359250611eaa60208501611e6e565b9150611eb860408501611e6e565b90509250925092565b60008060408385031215611ed457600080fd5b82359150611ee460208401611e6e565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611f8a57600080fd5b6103b982611e6e565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611ffb60e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b6000806020838503121561206857600080fd5b823567ffffffffffffffff8082111561208057600080fd5b818501915085601f83011261209457600080fd5b8135818111156120a357600080fd5b8660208260051b85010111156120b857600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015612102578351835292840192918401916001016120e6565b50909695505050505050565b81516001600160801b031681526101408101602083015161213a60208401826001600160801b03169052565b50604083015161214f6040840182600f0b9052565b50606083015161216a60608401826001600160801b03169052565b50608083015161218560808401826001600160801b03169052565b5060a08301516121a060a08401826001600160801b03169052565b5060c08301516121bb60c08401826001600160801b03169052565b5060e08301516121d660e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b6000806040838503121561220e57600080fd5b61221783611e6e565b9150611ee460208401611e6e565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156103f3576103f361223b565b818103818111156103f3576103f361223b565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826122b2576122b261228d565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b23565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161237a816011850160208701611e0b565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516123b4816012850160208701611e0b565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516123ec816010850160208701611e0b565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161237a816011850160208701611e0b565b60006020828403121561243757600080fd5b5051919050565b8181036000831280158383131683831282161715610b2357610b2361223b565b6000600160ff1b82016124735761247361223b565b5060000390565b80820182811260008312801582168215821617156121f3576121f361223b565b6000826124a9576124a961228d565b500690565b6000600182016124c0576124c061223b565b5060010190565b80820281158282048414176103f3576103f361223b565b6000826124ed576124ed61228d565b600160ff1b8214600019841416156125075761250761223b565b50059056fea264697066735822122049cf330d0e5e37231e586b80e7d860480d41fee7e51873f0c71815501ef482ea64736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162007345380380620073458339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051616bb4620007916000396000613a9f015260008181610f3701528181610fb1015261101f01526000818161317f015281816131f801528181613d1a01526153c60152600081816131cc0152818161348701528181614da1015261539a0152600081816131520152818161336401528181613cd601526147f4015260008181610ce9015281816118f001528181611d3101528181611f010152818161212e015261232f0152600081816114190152818161146401528181611566015281816141bd0152818161420c01528181614445015281816148b8015281816148f4015281816153220152615cd50152600081816114d501528181611951015281816132c50152818161331201528181614007015281816140340152818161441f015281816147b401528181614ce601528181615094015261562401526000818161151801528181611993015281816132a3015281816133330152818161446b0152818161479201528181614cc4015281816150720152615645015260008181610dae015281816114f70152818161197201528181611dff015281816121bb015281816123ec0152818161282c015281816129480152818161340d0152818161366001528181613ca40152818161498301526151310152600081816125b50152818161265e01526127940152600081816111820152818161121c0152818161128f015281816126a9015281816126f201528181612c9401528181612cdd01528181612db701528181612e5501528181613d4a01528181613e0401528181613ec90152613f610152600081816104a30152611711015260006139d401526000613997015260008181610252015261083d0152616bb46000f3fe60806040526004361061023b5760003560e01c80638fca1f7b1161012e578063b334ed86116100ab578063d5002f2e1161006f578063d5002f2e14610904578063dbbe807014610919578063ded062311461092c578063e44808bc1461094c578063ed64bab21461096c5761023b565b8063b334ed861461082b578063b4f8da3914610877578063ca6d38f7146108b1578063cba2e58d146108d1578063cbc13434146108e45761023b565b80639cd241af116100f25780639cd241af1461078b578063a22cb465146107ab578063a77384c1146107cb578063ab033ea9146107eb578063b1b4b1701461080b5761023b565b80638fca1f7b146106da5780639032c72614610703578063907c0f92146107235780639aa68462146107385780639bd334981461074b5761023b565b80634ed2d6ac116101bc5780637180c8ca116101805780637180c8ca146105b957806371f88b7c146105d957806377d05ff4146105f95780638120a3e21461060c578063883483971461062c5761023b565b80634ed2d6ac146105055780635a1a3e7c14610525578063680962391461054557806368c2ecb814610565578063702db0eb146105855761023b565b806329b23fc11161020357806329b23fc11461042f57806330adf81f1461045d5780633644e515146104915780633e691db9146104c55780634daa8b8f146104e55761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806322d5506b146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a9291906161cc565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f9826161dc565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401616284565b80519650602001945050505050f35b34801561035757600080fd5b5061036b61036636600461634e565b61098c565b005b34801561037957600080fd5b5061038d61038836600461637d565b6109d5565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c2366004616429565b610bcf565b3480156103d357600080fd5b5061036b6103e23660046164ba565b610c83565b3480156103f357600080fd5b506104076104023660046164fe565b610c96565b604080519586526020860194909452928401919091526060830152608082015260a00161039e565b34801561043b57600080fd5b5061044f61044a366004616530565b610cbf565b60405190815260200161039e565b34801561046957600080fd5b5061044f7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561049d57600080fd5b5061044f7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b5061044f6104e036600461658a565b610f05565b3480156104f157600080fd5b5061038d6105003660046165bf565b611094565b34801561051157600080fd5b5061036b6105203660046165d8565b611104565b34801561053157600080fd5b5061036b6105403660046165bf565b611152565b34801561055157600080fd5b5061036b61056036600461661e565b61115e565b34801561057157600080fd5b5061044f6105803660046165bf565b611309565b34801561059157600080fd5b5061036b6105a0366004616657565b6001600160801b03908116600160801b02911617600855565b3480156105c557600080fd5b5061036b6105d436600461668a565b61131a565b3480156105e557600080fd5b5061038d6105f43660046166c1565b611392565b61044f61060736600461637d565b6113ae565b34801561061857600080fd5b5061036b6106273660046165bf565b61162e565b34801561063857600080fd5b5061036b6106473660046166ff565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106e657600080fd5b506013546001600160801b0380821691600160801b90041661038d565b34801561070f57600080fd5b5061036b61071e3660046167c7565b611637565b34801561072f57600080fd5b5061044f611886565b61044f610746366004616530565b611895565b34801561075757600080fd5b5061076b61076636600461661e565b611b92565b60408051948552602085019390935291830152606082015260800161039e565b34801561079757600080fd5b5061036b6107a6366004616843565b611bb2565b3480156107b757600080fd5b5061036b6107c636600461668a565b611bbe565b3480156107d757600080fd5b5061036b6107e63660046165bf565b601455565b3480156107f757600080fd5b5061036b610806366004616878565b611c2a565b34801561081757600080fd5b5061044f6108263660046165bf565b611c9e565b34801561083757600080fd5b5061085f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561088357600080fd5b5061036b610892366004616893565b600980546001600160801b03928316600160801b029216919091179055565b3480156108bd57600080fd5b5061044f6108cc3660046165bf565b611ca9565b61038d6108df366004616530565b611cb4565b3480156108f057600080fd5b5061038d6108ff36600461637d565b611ed5565b34801561091057600080fd5b5060145461044f565b61038d610927366004616530565b6120d1565b34801561093857600080fd5b5061044f610947366004616530565b612305565b34801561095857600080fd5b5061036b6109673660046168ae565b612534565b34801561097857600080fd5b5061036b6109873660046165bf565b612584565b336000908152600f602052604090205460ff166109bb576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b600080600054600114610a035760405162461bcd60e51b81526004016109fa90616905565b60405180910390fd5b60026000908155610a1261268e565b9050610a25610a1f61278d565b826127c3565b50610a2f81612aaf565b600d548692506001600160801b031680831115610a5357806001600160801b031692505b82600003610a6957600080935093505050610bc0565b610a78600360f81b3385612b72565b600d546001600160801b03600160801b909104811690600090610aa090869084908616612c1b565b9050610aab85612c39565b610ab5908461693f565b600d80546001600160801b0319166001600160801b0392909216919091179055610ade81612c39565b600d8054601090610b00908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b2e8188612c63565b955085610b3b8987612f4f565b1115610b5a5760405163c972651760e01b815260040160405180910390fd5b610b676020880188616878565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610b9c8488612f4f565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b0386161580610bec57506001600160a01b038516155b15610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c2a5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610c7a57610c72858583818110610c4a57610c4a616966565b905060200201358888868686818110610c6557610c65616966565b9050602002013533612f6b565b600101610c2d565b50505050505050565b610c908484848433612f6b565b50505050565b6000806000806000610caa8989898961312c565b939d929c50909a509850909650945050505050565b60008054600114610ce25760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610d285760405163211ddda360e11b815260040160405180910390fd5b6000610d3261268e565b9050610d3e86826127c3565b50610d54610d4d600288613236565b3387612b72565b600080600080600080610d688b888e61326b565b949a509298509096509450925090508a8c8842821115610e39578360106000828254610d94919061697c565b90915550610da79050838a8988866134df565b6000610dd37f00000000000000000000000000000000000000000000000000000000000000008461698f565b6000818152600e6020526040812054919250600160801b909104600f0b90610e069086908a908e908d9089908990613659565b6000828152600e6020526040902054610e2d90600f83810b91600160801b9004900b613802565b610e3683612aaf565b50505b6000610e45898e612c63565b90508c6000610e55838e84613929565b90508f811015610e785760405163c972651760e01b815260040160405180910390fd5b610e83600286613236565b8f6000016020810190610e969190616878565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610f285760405162461bcd60e51b81526004016109fa90616905565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610f646020840184616878565b6001600160a01b031614610f8b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610fd45750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610feb57506011546001600160a01b03163314155b15611008576040516282b42960e81b815260040160405180910390fd5b60108054600090915561101b8184612c63565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee8361107161268e565b6040805192835260208301919091520160405180910390a2506001600055919050565b600080601283815481106110aa576110aa616966565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b0316601284815481106110e7576110e7616966565b600091825260209091200154909463ffffffff9091169350915050565b8361110e81613959565b6001600160a01b0316336001600160a01b03161461113f57604051632aab8bd360e01b815260040160405180910390fd5b61114b85858585613a16565b5050505050565b61115b81613a83565b50565b6040516370a0823160e01b81523060048201526000906111f4906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed91906169a2565b8385613bdd565b915050600081131561127c576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561126857600080fd5b505af1158015610c7a573d6000803e3d6000fd5b6000811215611304576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac306112be846169bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561126857600080fd5b505050565b600061131482613c77565b92915050565b6011546001600160a01b03163314611344576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6000806113a0858585613cc8565b90925090505b935093915050565b600080546001146113d15760405162461bcd60e51b81526004016109fa90616905565b60026000556113de613d48565b600c5460ff161561140257604051637983c05160e01b815260040160405180910390fd5b60008061140f8685613db5565b909250905061143f7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b82101561145f57604051632afb507160e21b815260040160405180910390fd5b61148a7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b611494908361698f565b600c805460ff1916600117905592506114ac82612c39565b600880546001600160801b0319166001600160801b039290921691909117905561154161153c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006140a2565b612c39565b600880546001600160801b03928316600160801b02921691909117905561158a6000807f0000000000000000000000000000000000000000000000000000000000000000614104565b6115a2600061159c6020870187616878565b85614104565b6115ad610a1f61278d565b5060006115bb878387613929565b90506115ca6020860186616878565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b61115b816141a4565b834211156116585760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661167f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117ab573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061180f906169ee565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061189061278d565b905090565b600080546001146118b85760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff16156118e6576040516313d0ff5960e31b815260040160405180910390fd5b6118ee613d48565b7f000000000000000000000000000000000000000000000000000000000000000085101561192f5760405163211ddda360e11b815260040160405180910390fd5b60006119b761193c614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614347565b9050848110806119c657508381115b156119e457604051633b61151160e11b815260040160405180910390fd5b6000806119f18886613db5565b91509150611a00610a1f61278d565b50600d54600360f81b60009081526002602052600080516020616b3f833981519152549091611a3a916001600160801b039091169061698f565b60008080526002602052600080516020616b5f8339815191525491925090611a6390839061697c565b90506000806000611a7386614382565b9050611a7e816144e8565b9150611a89876141a4565b6008546001600160801b038082168352600954600f0b6020840152600160801b909104166040820152611abb816144e8565b9250611ad38483611acc818761698f565b9190612c1b565b9850611aef90506000611ae960208c018c616878565b8a614104565b611af885612aaf565b60008315611b0f57611b0a8285614756565b611b12565b60005b9050611b2160208b018b616878565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a611b568a8a612f4f565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b600080600080611ba2868661476b565b9299919850965090945092505050565b61130483838333613a16565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611c54576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006113148261488f565b600061131482614938565b600080600054600114611cd95760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615611d07576040516313d0ff5960e31b815260040160405180910390fd5b611d0f613d48565b600080611d1c8886613db5565b915091506000611d2d898388613929565b90507f0000000000000000000000000000000000000000000000000000000000000000811015611d705760405163211ddda360e11b815260040160405180910390fd5b86821015611d91576040516342af972b60e01b815260040160405180910390fd5b6000611d9b61278d565b9050611da781846127c3565b506000806000611db7878761476b565b909a5091945092509050878c1115611de25760405163c972651760e01b815260040160405180910390fd5b8060106000828254611df4919061697c565b90915550611e2490507f00000000000000000000000000000000000000000000000000000000000000008561697c565b9850611e3483898489888e6149ae565b6000611e4160018b613236565b9050611e5a81611e5460208e018e616878565b8b614104565b80611e6860208d018d616878565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b600080600054600114611efa5760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611f405760405163211ddda360e11b815260040160405180910390fd5b6000611f4a61268e565b9050611f57610a1f61278d565b50611f6181612aaf565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091611faa916001600160801b039091169061698f565b90506000611fb8828461697c565b9050611fc66000338b612b72565b600080611fd68b87858888614b9c565b9098509092509050611ff9600360f81b611ff360208c018c616878565b89614104565b612003828a612c63565b9750600061201289888c613929565b9050888b11156120355760405163c972651760e01b815260040160405180910390fd5b6000841561204c576120478386614756565b61204f565b60005b905061205e60208c018c616878565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b6000806000546001146120f65760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615612124576040516313d0ff5960e31b815260040160405180910390fd5b61212c613d48565b7f000000000000000000000000000000000000000000000000000000000000000086101561216d5760405163211ddda360e11b815260040160405180910390fd5b600061217761268e565b90508481101561219a576040516342af972b60e01b815260040160405180910390fd5b60006121a461278d565b905060006121b282846127c3565b905060006121e07f00000000000000000000000000000000000000000000000000000000000000008461697c565b905060008060006121f28d8887614c9e565b909450909250905061220582888c614dd4565b91508060106000828254612219919061697c565b909155505050808b10156122405760405163c972651760e01b815260040160405180910390fd5b600061224c828b613db5565b50905061225b8d848987614dfc565b6000612268600286613236565b90508d6122828261227c60208f018f616878565b83614104565b8161229060208e018e616878565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95886122c5878e612f4f565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b600080546001146123285760405162461bcd60e51b81526004016109fa90616905565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561236e5760405163211ddda360e11b815260040160405180910390fd5b600061237861268e565b905061238486826127c3565b50612393610d4d600188613236565b6000806000806000806123a78b888e61503a565b95509550955095509550955060008c90508c4210156124705781601060008282546123d2919061697c565b909155506123e590508c888786856151b6565b60006124117f00000000000000000000000000000000000000000000000000000000000000008361698f565b6000818152600e6020526040902054909150600160801b9004600f0b61243d8e878b8a878f6001613659565b6000828152600e602052604090205461246490600f83810b91600160801b9004900b613802565b61246d8a612aaf565b50505b600061247c878c612c63565b9050600061248b828b8e613929565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600185613236565b6124c760208f018f616878565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b8461253e81613959565b6001600160a01b0316336001600160a01b03161461256f57604051632aab8bd360e01b815260040160405180910390fd5b61257c8686868686612f6b565b505050505050565b6000818152600e60205260409020546001600160801b0316156125a45750565b60006125ae61278d565b90506125da7f000000000000000000000000000000000000000000000000000000000000000083616a1d565b1515806125e657508181105b156126045760405163ecd29e8160e01b815260040160405180910390fd5b80820361261c576113048161261761268e565b6127c3565b815b6000818152600e60205260409020546001600160801b03168282036126485761264561268e565b90505b80156126585761114b84826127c3565b506126837f00000000000000000000000000000000000000000000000000000000000000008261697c565b905061261e565b5050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126dd575047612768565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612741573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276591906169a2565b90505b601454600003612779576000612787565b601454612787908290614756565b91505090565b60006127b97f000000000000000000000000000000000000000000000000000000000000000042616a1d565b611890904261698f565b6000828152600e6020526040812080546001600160801b03161515806127e857504284115b156127fe57546001600160801b03169050611314565b61280783612c39565b81546001600160801b0319166001600160801b03919091161781556000600e816128517f00000000000000000000000000000000000000000000000000000000000000008861698f565b815260208101919091526040016000908120546001600160801b0316915061287a600287613236565b60008181526002602052604081205491925081156128d3576000806128a2848a886000615383565b9150915080601060008282546128b8919061697c565b909155506128cc905084600084808e6134df565b6001925050505b60006128e060018a613236565b600081815260026020526040902054909150801561293b57600080612908838c8a6001615383565b91509150806010600082825461291e919061697c565b909155508c90506129338460008580856151b6565b600195505050505b82156129b957600061296d7f00000000000000000000000000000000000000000000000000000000000000008c61698f565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926129ad928492919004900b613802565b6129b68b612aaf565b50505b6000808a116129c95760006129e4565b6129e48a6129de6129d98d614382565b6144e8565b90612f4f565b600d546002602052600080516020616b3f833981519152546000808052600080516020616b5f83398151915254939450926001600160801b0390921691612a2b919061697c565b612a35919061698f565b905060008115612a4e57612a498383614756565b612a51565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091612af8916001600160801b039091169061698f565b90506000612b06828461697c565b90506000612b166129d986614382565b90506000612b25858385612c1b565b9050600080612b338861488f565b905082811115612b4a57612b47838261698f565b91505b6000821180612b57575083155b15612b6857612b6882858789615451565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612ba490849061698f565b909155505060008381526002602052604081208054839290612bc790849061698f565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000826000190484118302158202612c3257600080fd5b5091020490565b6000600160801b8210612c5f57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006014548311612c745782612c78565b6014545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cc8575047612d53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5091906169a2565b90505b601454600003612d64576000612d83565b612d83612d7c6014548361475690919063ffffffff16565b8590612f4f565b91508360146000828254612d97919061698f565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e4b57612df16020850185616878565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114612e3b576040519150601f19603f3d011682016040523d82523d6000602084013e612e40565b606091505b505080915050612efb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb612e876020870187616878565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015612ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef89190616a31565b90505b80612f19576040516312171d8360e31b815260040160405180910390fd5b612f29604085016020860161634e565b612f4457612f3f612f3861268e565b8490614756565b612f46565b825b95945050505050565b6000612f648383670de0b6b3a7640000612c1b565b9392505050565b6001600160a01b0384161580612f8857506001600160a01b038316155b15612fa65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461306a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff1661306a5760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146130685760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061306290849061698f565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061309c90849061698f565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130d390849061697c565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000808080806131778887611acc8c6129de6131508d670de0b6b3a764000061698f565b7f000000000000000000000000000000000000000000000000000000000000000090612f4f565b94506131a3857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b925060006131c46131bc8a670de0b6b3a764000061698f565b8b9089612c1b565b90506131f0817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b945061321c857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9250613228838561697c565b915050945094509450945094565b60006001600160f81b038211156132605760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080600080600080600061327f88613c77565b90506132e961328c614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061553a565b9098509550935060006133576132fd614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b905061338d8589613388847f00000000000000000000000000000000000000000000000000000000000000006155bb565b6155eb565b156133ab5760405163512095c760e01b815260040160405180910390fd5b6133b481613a83565b8a8a600080806133c68588888761312c565b9b5092955090935091506133dc9050818461698f565b6133e6908b61697c565b99506133f2828461697c565b6133fc908c61697c565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613437919061698f565b815260208101919091526040016000908120546001600160801b03169150428911613479576000898152600e60205260409020546001600160801b031661347b565b895b90506134ab8b8784848e7f0000000000000000000000000000000000000000000000000000000000000000615674565b96506134b7838761698f565b95506134c987878786868660006156c6565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b031661352861153c8261350b85670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b031691908a6000615741565b600b80546001600160801b03928316600160801b02921691909117905561354e86612c39565b613558908261693f565b600a80546001600160801b03928316600160801b0292169190911790555061357f83612c39565b6008805460009061359a9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506135c7826157bb565b600980546000906135dc908490600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061360c84612c39565b6008805460109061362e908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006136857f00000000000000000000000000000000000000000000000000000000000000008561698f565b9050600060026000613698600188613236565b81526020019081526020016000205490506000600260006136ba600289613236565b81526020019081526020016000205490508160001480156136d9575080155b156136fe576000838152600e6020526040902080546001600160801b031690556137f6565b60006137428b61370e8c89612f4f565b6137199060026169d7565b8b6137248c8b612f4f565b61372e919061697c565b613738919061698f565b61153c919061697c565b905084156137a1576000848152600e602052604090208054829190601090613775908490600160801b9004600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506137f4565b6000848152600e6020526040902080548291906010906137cc908490600160801b9004600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015613812575060008212155b156138a557600061382382826157f9565b61382d9084616ac8565b60095490915061385a90613855908390600160801b90046001600160801b0316600f0b61580f565b6157bb565b6009805460109061387c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561268a576000821261391b576138be826157bb565b6138c7826157bb565b6138d19190616a9b565b600980546010906138f3908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6138d16138558260006157f9565b600061393b604083016020840161634e565b15613947575082612f64565b6139518484612f4f565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b82048116911642613ac47f00000000000000000000000000000000000000000000000000000000000000008461697c565b1115613acf57505050565b600060128281548110613ae457613ae4616966565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690613b18834261698f565b601254909150878202830190600090613b3288600161697c565b613b3c9190616a1d565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110613b7557613b75616966565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008080613bef846301e13380614756565b90506000613c0e8260008812613c0557876129de565b6129de886169bb565b90506000861315613c4157613c2c613c258261581e565b8890612f4f565b9350613c38878561698f565b925050506113a6565b6000861215613c6957613c5d613c568261581e565b8890614756565b9350613c388785616ac8565b509495600095509350505050565b600080613c8261278d565b9050808311613c92576000613c9c565b613c9c818461698f565b9150612f64827f0000000000000000000000000000000000000000000000000000000000000000614756565b600080613d12856129de85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613d08818c614756565b6129de919061698f565b9150613d3e827f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9050935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590613d955750600034115b15613db357604051631574f9f360e01b815260040160405180910390fd5b565b60008080613dc9604085016020860161634e565b613de457613ddf613dd861268e565b8690612f4f565b613de6565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613eb45747915082341015613e55576040516312171d8360e31b815260040160405180910390fd5b82341115613eaf5733613e68843461698f565b604051600081818185875af1925050503d8060008114613ea4576040519150601f19603f3d011682016040523d82523d6000602084013e613ea9565b606091505b50909150505b613fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f3c91906169a2565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613fd69190616a31565b90505b80613ff7576040516312171d8360e31b815260040160405180910390fd5b60145460000361405e5761402b837f0000000000000000000000000000000000000000000000000000000000000000614756565b601481905594507f0000000000000000000000000000000000000000000000000000000000000000935061409b92505050565b60145460009061406f908585612c1b565b90508060146000828254614083919061697c565b9091555081905061409261268e565b95509550505050505b9250929050565b6000806140b3846301e13380614756565b90506140f96140ef6140cd670de0b6b3a7640000866159a9565b6140d78885612f4f565b6140e990670de0b6b3a764000061697c565b906159be565b6129de888a612f4f565b979650505050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061413690849061697c565b90915550506000838152600260205260408120805483929061415990849061697c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612c0e565b806000036141af5750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156141fc5760405163585fe6df60e11b815260040160405180910390fd5b60006142088383616ae8565b90507f000000000000000000000000000000000000000000000000000000000000000081121561424b5760405163585fe6df60e11b815260040160405180910390fd5b61425481612c39565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126142965761428f838286612c1b565b91506142b6565b6142aa6142a2826169bb565b849086612c1b565b6142b3906169bb565b91505b6142bf826157bb565b600980546001600160801b0319166001600160801b039283161790556008546143029161153c91600160801b9004166142f88785615a15565b611acc8787615a15565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600854600954600091611890916001600160801b0390911690600f0b615a15565b600080614356878787866155aa565b90506140f961436a82866301e13380615a32565b61437c83670de0b6b3a764000061698f565b90614756565b6143df60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916144ae9116614938565b8152600a546001600160801b03600160801b9182900481166020840152600b546040909301926144e092900416614938565b905292915050565b600080614508836101400151846101200151612f4f90919063ffffffff16565b61010084015160e085015161451c91612f4f565b6145269190616ac8565b9050600061453c84600001518560200151615a15565b905060008213156145dc57600061457e8286604001518760a001518860c00151670de0b6b3a764000061456f919061698f565b89606001518a60800151615a58565b905061458a8184615af2565b905080156145d6576145c3828660400151838860c00151670de0b6b3a76400006145b4919061698f565b89606001518a60800151615b01565b855186906145d290839061698f565b9052505b50614698565b6000821215614698576145ee826169bb565b915060006146228286604001518760c00151670de0b6b3a7640000614613919061698f565b88606001518960800151615b35565b905061462e8184615af2565b9050801561467a57614667828660400151838860c00151670de0b6b3a7640000614658919061698f565b89606001518a60800151615bcb565b8551869061467690839061697c565b9052505b614684818461698f565b8551869061469390839061697c565b905250505b60006146c7856101000151670de0b6b3a76400006146b6919061698f565b606087015160e08801519190612c1b565b6146f5866101400151670de0b6b3a76400006146e3919061698f565b60608801516101208901519190612c1b565b6146ff9190616ac8565b905060008186600001516147139190616ae8565b90508560a0015181121561473a5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161474c908261698f565b9695505050505050565b6000612f6483670de0b6b3a764000084612c1b565b6000806000806147d861477c614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615c60565b925060006147e76132fd614326565b90506148188785613388847f0000000000000000000000000000000000000000000000000000000000000000615c81565b156148365760405163512095c760e01b815260040160405180910390fd5b61483f81613a83565b60008061484d89848a613cc8565b909250905061485c828761698f565b9450614868818661697c565b955061487581848a612c1b565b9350614881848a61698f565b965050505092959194509250565b60095460009081906148b190600160801b90046001600160801b031684614756565b90506148dd7f00000000000000000000000000000000000000000000000000000000000000008261697c565b6008546001600160801b03161115614932576008547f0000000000000000000000000000000000000000000000000000000000000000906149289083906001600160801b031661698f565b612f64919061698f565b50919050565b600080670de0b6b3a764000061494c61278d565b61495691906169d7565b9050808311614966576000614970565b614970818461698f565b9150612f646149a7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006169d7565b8390614756565b600a546001600160801b03166149e961153c826149d385670de0b6b3a76400006169d7565b600b546001600160801b031691908a6001615741565b600b80546001600160801b0319166001600160801b0392909216919091179055614a1287612c39565b60088054600090614a2d9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a5a85612c39565b60088054601090614a7c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614aa986612c39565b614ab39082616a4e565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90614b0f614afa8b89612f4f565b614b058b60026169d7565b61153c919061698f565b835490915081908490601090614b30908490600160801b9004600f0b616a6e565b82546001600160801b039182166101009390930a9283029190920219909116179055508254614b6d90600f84810b91600160801b9004900b613802565b614b7687615cce565b614b93576040516318846de960e01b815260040160405180910390fd5b6137f687612aaf565b600080600080614bab88614382565b90506000614bb8826144e8565b9050614bca614bc561268e565b61488f565b9450614bd7858b89612c1b565b9450614bea614be5866169bb565b6141a4565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000614c1e836144e8565b90506000614c2d8a8385612c1b565b9050614c398c8b616ac8565b614c439082616ac8565b90506000811215614c8c576000614c64614c5c836169bb565b85908d612c1b565b9050614c70818961698f565b9750614c7b816141a4565b614c86818a8e615d40565b60009150505b94509092505050955095509592505050565b6000806000614d0a614cae614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615d85565b915085614d178387612f4f565b1115614d365760405163512095c760e01b815260040160405180910390fd5b6000614d436132fd614326565b9050614d4e81613a83565b600080614d6589670de0b6b3a7640000858b61312c565b509294509250614d7991508290508361698f565b614d83908661698f565b9450614dc589614d93838861698f565b89614d9e8c82615da6565b8c7f0000000000000000000000000000000000000000000000000000000000000000615674565b95509250505093509350939050565b6000614de6604083016020840161634e565b15614df5576139518484612f4f565b5082612f64565b600a54614e469061153c90600160801b90046001600160801b0316614e2984670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b03169190886001615741565b600b80546001600160801b03928316600160801b0292169190911790556000614e6e84612c39565b600854614e8491906001600160801b031661693f565b600880546001600160801b0319166001600160801b0383161790559050614eaa85612c39565b60088054601090614ecc908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614ef985612c39565b600a8054601090614f1b908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b911612159050614f6a5760405163585fe6df60e11b815260040160405180910390fd5b6000614f7461278d565b6000818152600e6020526040902054909150600160801b9004600f0b614f9987612c39565b6000838152600e602052604090208054601090614fc1908490600160801b9004600f0b616a9b565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461500b90600f83810b91600160801b9004900b613802565b61501485615cce565b615031576040516318846de960e01b815260040160405180910390fd5b610c7a85612aaf565b600080600080600080600061504e88613c77565b90506150b861505b614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615db5565b9098509650935060006150cc6132fd614326565b90506150d781613a83565b6000806150e68d85858f61312c565b98509294509092506150fc91508390508861698f565b9650615108818361697c565b615112908a61698f565b985061511e858a61697c565b9750505050506151a285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61515b919061698f565b81526020810191909152604001600020546001600160801b0316428d116151995760008d8152600e60205260409020546001600160801b031661519b565b8d5b60016156c6565b999d939c50919a5098509695509350505050565b600a546001600160801b03166151f161153c826151db85670de0b6b3a76400006169d7565b600b546001600160801b031691908a6000615741565b600b80546001600160801b0319166001600160801b039290921691909117905561521a86612c39565b615224908261693f565b600a80546001600160801b0319166001600160801b03929092169190911790555061524e83612c39565b600880546000906152699084906001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550615296826157bb565b600980546000906152ab908490600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506152db84612c39565b600880546010906152fd908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806153655750600954600854600f9190910b6001600160801b03909116125b1561114b5760405163585fe6df60e11b815260040160405180910390fd5b6000806153908686614756565b915060006153be837f0000000000000000000000000000000000000000000000000000000000000000612f4f565b90506153ea817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9150831561540d576153fc828261698f565b615406908461698f565b9250615424565b615417828261698f565b615421908461697c565b92505b8486101561544757615437838787612c1b565b9250615444828787612c1b565b91505b5094509492505050565b6000808411615460578261546b565b61546b838686612c1b565b90508060000361547b5750610c90565b80858382111561549657839150615493878385612c1b565b90505b61549f82612c39565b600d80546000906154ba9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506154e781612c39565b600d8054601090615509908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c7a81614be5906169bb565b6000808061555b61555388670de0b6b3a764000061698f565b899087612c1b565b90506155678888612f4f565b9150811561559d5761558e8a8a846155878a670de0b6b3a764000061698f565b8989615bcb565b925061559a838261697c565b90505b9750975097945050505050565b6000612f46826140e9858888612c1b565b60006155d96155d284670de0b6b3a764000061698f565b8390615e01565b612f6490670de0b6b3a764000061698f565b600080615669856155fa614326565b615604919061697c565b600854615622908790600160801b90046001600160801b031661698f565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b909210949350505050565b60008061568d856156858887615e01565b8a9190612c1b565b905061569a888486612c1b565b6156a4908261697c565b9050868111156156bb576156b8878261698f565b91505b509695505050505050565b600080600080600080888810156157235786156156eb576156e88d898b612c1b565b9c505b6156f68c898b612c1b565b9b506157028b8d616ac8565b905061570f8b898b612c1b565b9a5061571c8a898b612c1b565b9950615730565b61572d8b8d616ac8565b90505b9b9c9a9b999a975050505050505050565b600081156157815761577a615756848761697c565b6157608587612f4f565b61576a888a612f4f565b615774919061697c565b906159a9565b9050612f46565b82850361579057506000612f46565b61474c61579d848761698f565b6157a78587612f4f565b6157b1888a612f4f565b615774919061698f565b600060016001607f1b031982128015906157dc575060016001607f1b038213155b612c5f5760405163a5353be560e01b815260040160405180910390fd5b60008183136158085781612f64565b5090919050565b60008183136149325782612f64565b6000680248ce36a70cb26b3e19821361583957506000919050565b680755bf798b4a1bf1e582126158625760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000612f6483670de0b6b3a764000084615a32565b6000816000036159d75750670de0b6b3a7640000611314565b826000036159e757506000611314565b8160006159f385615e16565b9050818102615a0a670de0b6b3a764000082616b10565b905061474c8161581e565b600080615a228385616ac8565b90506000811215612f6457600080fd5b6000826000190484118302158202615a4957600080fd5b50910281810615159190040190565b600080615a688888878787616029565b90506000615a85615a7d876140e9878b615e01565b869086615a32565b615a8f908361698f565b9050670de0b6b3a76400008110615ac357615abc615ab5670de0b6b3a764000088614756565b82906159be565b9050615adb565b615ad8615ab5670de0b6b3a7640000886159a9565b90505b615ae5888261698f565b9998505050505050505050565b60008183116149325782612f64565b600080615b12888888888888616058565b9092509050806156bb57604051637ac17d2560e01b815260040160405180910390fd5b600080615b45878787878761611a565b90506000615b70670de0b6b3a7640000615b5f8787614756565b615b69919061697c565b83906159a9565b9050670de0b6b3a76400008110615b9d57615b96615ab5670de0b6b3a7640000886159a9565b9050615bb5565b615bb2615ab5670de0b6b3a764000088614756565b90505b615bbf818861698f565b98975050505050505050565b600080615bdb888887878761611a565b9050615beb856140e9888a61698f565b96506000615c058486615bfe8b8661698f565b9190615a32565b9050670de0b6b3a76400008110615c3257615c2b615ab5670de0b6b3a7640000886159a9565b9050615c4a565b615c47615ab5670de0b6b3a764000088614756565b90505b615c5481856159a9565b9050615ae5898261698f565b60006140f9878787615c7a88670de0b6b3a764000061698f565b878761613f565b6000612f64615cad670de0b6b3a7640000615c9c81876159a9565b615ca6919061698f565b8490615e01565b615cbf90670de0b6b3a764000061697c565b670de0b6b3a764000090614756565b6000615cfa7f000000000000000000000000000000000000000000000000000000000000000083612f4f565b600954600854615d38916000916001600160801b03600160801b9092048216600f0b91615d28911687612f4f565b615d329190616ac8565b906157f9565b121592915050565b6000615d4e6129d983614382565b60008080526002602052600080516020616b5f8339815191525491925090615d7790859061697c565b905061114b85838387615451565b60006140f9878787615d9f88670de0b6b3a764000061698f565b8787615b01565b60008183116158085781612f64565b60008080615dce61555388670de0b6b3a764000061698f565b9050861561559d57615de08888612f4f565b915061558e8a8a84615dfa8a670de0b6b3a764000061698f565b8989615b01565b6000612f648383670de0b6b3a7640000615a32565b6000808213615e3857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600061603585856159be565b61604e616046866140e9868b612f4f565b859085612c1b565b61474c919061697c565b600080600061606a898988888861611a565b905061607a866140e9898b61697c565b97508781101561609157600080925092505061610f565b60006160a28587615bfe8c8661698f565b9050670de0b6b3a764000081106160cf576160c8615ab5670de0b6b3a7640000896159a9565b90506160e7565b6160e4615ab5670de0b6b3a764000089614756565b90505b6160f181866159a9565b9050808a111561610857616105818b61698f565b93505b6001925050505b965096945050505050565b600061612685856159be565b61604e616137866140e9868b615e01565b859085615a32565b60008061614f888887878761611a565b9050616162856140e9613dd8898c61697c565b975061616f848985612c1b565b9750600061617d898361698f565b9050670de0b6b3a764000081106161aa576161a3615ab5670de0b6b3a7640000886159a9565b90506161c2565b6161bf615ab5670de0b6b3a764000088614756565b90505b615ae5818961698f565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561620b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561624d5761624d616213565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561627c5761627c616213565b604052919050565b6000602080838503121561629757600080fd5b825167ffffffffffffffff808211156162af57600080fd5b818501915085601f8301126162c357600080fd5b8151818111156162d5576162d5616213565b6162e7601f8201601f19168501616253565b915080825286848285010111156162fd57600080fd5b60005b8181101561631b578381018501518382018601528401616300565b50600090820190930192909252509392505050565b801515811461115b57600080fd5b803561634981616330565b919050565b60006020828403121561636057600080fd5b8135612f6481616330565b60006060828403121561493257600080fd5b60008060006060848603121561639257600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156163b757600080fd5b6163c38682870161636b565b9150509250925092565b80356001600160a01b038116811461634957600080fd5b60008083601f8401126163f657600080fd5b50813567ffffffffffffffff81111561640e57600080fd5b6020830191508360208260051b850101111561409b57600080fd5b6000806000806000806080878903121561644257600080fd5b61644b876163cd565b9550616459602088016163cd565b9450604087013567ffffffffffffffff8082111561647657600080fd5b6164828a838b016163e4565b9096509450606089013591508082111561649b57600080fd5b506164a889828a016163e4565b979a9699509497509295939492505050565b600080600080608085870312156164d057600080fd5b843593506164e0602086016163cd565b92506164ee604086016163cd565b9396929550929360600135925050565b6000806000806080858703121561651457600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561654657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561657257600080fd5b61657e8782880161636b565b91505092959194509250565b60006020828403121561659c57600080fd5b813567ffffffffffffffff8111156165b357600080fd5b6139518482850161636b565b6000602082840312156165d157600080fd5b5035919050565b600080600080608085870312156165ee57600080fd5b843593506165fe602086016163cd565b925060408501359150616613606086016163cd565b905092959194509250565b6000806040838503121561663157600080fd5b50508035926020909101359150565b80356001600160801b038116811461634957600080fd5b6000806040838503121561666a57600080fd5b61667383616640565b915061668160208401616640565b90509250929050565b6000806040838503121561669d57600080fd5b6166a6836163cd565b915060208301356166b681616330565b809150509250929050565b6000806000606084860312156166d657600080fd5b505081359360208301359350604090920135919050565b8035600f81900b811461634957600080fd5b6000610140828403121561671257600080fd5b61671a616229565b61672383616640565b815261673160208401616640565b6020820152616742604084016166ed565b604082015261675360608401616640565b606082015261676460808401616640565b608082015261677560a08401616640565b60a082015261678660c08401616640565b60c082015261679760e08401616640565b60e08201526101006167aa81850161633e565b908201526101206167bc84820161633e565b908201529392505050565b600080600080600080600060e0888a0312156167e257600080fd5b6167eb886163cd565b96506167f9602089016163cd565b9550604088013561680981616330565b945060608801359350608088013560ff8116811461682657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561685857600080fd5b83359250616868602085016163cd565b9150604084013590509250925092565b60006020828403121561688a57600080fd5b612f64826163cd565b6000602082840312156168a557600080fd5b612f6482616640565b600080600080600060a086880312156168c657600080fd5b853594506168d6602087016163cd565b93506168e4604087016163cd565b9250606086013591506168f9608087016163cd565b90509295509295909350565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b0382811682821603908082111561695f5761695f616929565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561131457611314616929565b8181038181111561131457611314616929565b6000602082840312156169b457600080fd5b5051919050565b6000600160ff1b82016169d0576169d0616929565b5060000390565b808202811582820484141761131457611314616929565b600060018201616a0057616a00616929565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082616a2c57616a2c616a07565b500690565b600060208284031215616a4357600080fd5b8151612f6481616330565b6001600160801b0381811683821601908082111561695f5761695f616929565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131457611314616929565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561131457611314616929565b818103600083128015838313168383128216171561695f5761695f616929565b8082018281126000831280158216821582161715616b0857616b08616929565b505092915050565b600082616b1f57616b1f616a07565b600160ff1b821460001984141615616b3957616b39616929565b50059056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220eda965e5fa99de157c3ca2b64570a81df567b9870f13771fa1c82b816774af0664736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a2646970667358221220c376f9eb0ff3d4b00ac80b280f5f92106c268d9af55f674c9391465110c12f1164736f6c63430008130033",
    "sourceMap": "650:6241:154:-:0;;;;;1572:26:56;;;1594:4;-1:-1:-1;;1572:26:56;;;;;;;;3126:44:60;;;;;;;;;;;-1:-1:-1;;;1262:31:161;;216:2:167;1262:31:161;198:21:167;255:2;235:18;228:30;-1:-1:-1;;;274:18:167;267:45;1262:12:161;;329:18:167;1262:31:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1262:31:161;;;;;;;;;;;;:::i;:::-;1237:56;;;;;;:::i;:::-;-1:-1:-1;1323:30:161;;-1:-1:-1;;;1323:30:161;;4328:2:167;1323:30:161;;;4310:21:167;4367:2;4347:18;;;4340:30;-1:-1:-1;;;4386:18:167;;;4379:44;1323:12:161;;;;4440:18:167;;1323:30:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1323:30:161;;;;;;;;;;;;:::i;:::-;1299:54;;;;;;:::i;:::-;;650:6241:154;;;;;;;;;;;;358:127:167;419:10;414:3;410:20;407:1;400:31;450:4;447:1;440:15;474:4;471:1;464:15;490:1042;570:6;601:2;644;632:9;623:7;619:23;615:32;612:52;;;660:1;657;650:12;612:52;687:16;;-1:-1:-1;;;;;752:14:167;;;749:34;;;779:1;776;769:12;749:34;817:6;806:9;802:22;792:32;;862:7;855:4;851:2;847:13;843:27;833:55;;884:1;881;874:12;833:55;913:2;907:9;935:2;931;928:10;925:36;;;941:18;;:::i;:::-;1016:2;1010:9;984:2;1070:13;;-1:-1:-1;;1066:22:167;;;1090:2;1062:31;1058:40;1046:53;;;1114:18;;;1134:22;;;1111:46;1108:72;;;1160:18;;:::i;:::-;1200:10;1196:2;1189:22;1235:2;1227:6;1220:18;1275:7;1270:2;1265;1261;1257:11;1253:20;1250:33;1247:53;;;1296:1;1293;1286:12;1247:53;1318:1;1309:10;;1328:129;1342:2;1339:1;1336:9;1328:129;;;1430:10;;;1426:19;;1420:26;1399:14;;;1395:23;;1388:59;1353:10;;;;1328:129;;;1499:1;1494:2;1489;1481:6;1477:15;1473:24;1466:35;1520:6;1510:16;;;;;;;;490:1042;;;;:::o;1537:380::-;1616:1;1612:12;;;;1659;;;1680:61;;1734:4;1726:6;1722:17;1712:27;;1680:61;1787:2;1779:6;1776:14;1756:18;1753:38;1750:161;;1833:10;1828:3;1824:20;1821:1;1814:31;1868:4;1865:1;1858:15;1896:4;1893:1;1886:15;1750:161;;1537:380;;;:::o;2048:545::-;2150:2;2145:3;2142:11;2139:448;;;2186:1;2211:5;2207:2;2200:17;2256:4;2252:2;2242:19;2326:2;2314:10;2310:19;2307:1;2303:27;2297:4;2293:38;2362:4;2350:10;2347:20;2344:47;;;-1:-1:-1;2385:4:167;2344:47;2440:2;2435:3;2431:12;2428:1;2424:20;2418:4;2414:31;2404:41;;2495:82;2513:2;2506:5;2503:13;2495:82;;;2558:17;;;2539:1;2528:13;2495:82;;;2499:3;;;2139:448;2048:545;;;:::o;2769:1352::-;2889:10;;-1:-1:-1;;;;;2911:30:167;;2908:56;;;2944:18;;:::i;:::-;2973:97;3063:6;3023:38;3055:4;3049:11;3023:38;:::i;:::-;3017:4;2973:97;:::i;:::-;3125:4;;3189:2;3178:14;;3206:1;3201:663;;;;3908:1;3925:6;3922:89;;;-1:-1:-1;3977:19:167;;;3971:26;3922:89;-1:-1:-1;;2726:1:167;2722:11;;;2718:24;2714:29;2704:40;2750:1;2746:11;;;2701:57;4024:81;;3171:944;;3201:663;1995:1;1988:14;;;2032:4;2019:18;;-1:-1:-1;;3237:20:167;;;3355:236;3369:7;3366:1;3363:14;3355:236;;;3458:19;;;3452:26;3437:42;;3550:27;;;;3518:1;3506:14;;;;3385:19;;3355:236;;;3359:3;3619:6;3610:7;3607:19;3604:201;;;3680:19;;;3674:26;-1:-1:-1;;3763:1:167;3759:14;;;3775:3;3755:24;3751:37;3747:42;3732:58;3717:74;;3604:201;-1:-1:-1;;;;;3851:1:167;3835:14;;;3831:22;3818:36;;-1:-1:-1;2769:1352:167:o;4126:338::-;650:6241:154;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040523480156200001157600080fd5b5060043610620001395760003560e01c806366d9a9a011620000bb578063b5508aa9116200007a578063b5508aa91462000259578063ba414fa61462000263578063d4dbd48f146200027e578063e20c9f711462000288578063fa7626d4146200029257600080fd5b806366d9a9a014620001fc5780636b3992c7146200021557806385226c81146200021f578063916a17c61462000238578063ab75e7c3146200024257600080fd5b80633e5e0d2611620001085780633e5e0d2614620001975780633e5e3c2314620001ae5780633f7286f414620001b8578063507ffba514620001c25780636239c5ef14620001f257600080fd5b80630a9254e4146200013e57806310716760146200014a5780631885dd6a14620001745780631ed7831c146200017e575b600080fd5b62000148620002a0565b005b620001616200015b36600462003c11565b62000717565b6040519081526020015b60405180910390f35b620001486200079f565b6200018862000b64565b6040516200016b919062003c63565b62000161620001a836600462003cb2565b62000bc8565b6200018862000e28565b6200018862000e8a565b620001d9620001d336600462003d4f565b62000eec565b6040516001600160a01b0390911681526020016200016b565b6200014862001002565b62000206620010f2565b6040516200016b919062003e0a565b62000148620011e5565b6200022962001511565b6040516200016b919062003f15565b62000206620015eb565b620001486200025336600462003f7b565b620016d5565b6200022962001a16565b6200026d62001af0565b60405190151581526020016200016b565b6200014862001c1d565b6200018862001eb5565b6007546200026d9060ff1681565b620002aa62001f17565b601c546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200ffa5833981519152906306447d5690602401600060405180830381600087803b158015620002ff57600080fd5b505af115801562000314573d6000803e3d6000fd5b5050505060126000806040516200032b9062003bd1565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f080158015620003a1573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e1338081526020016201518081526020016200046f84620021f7565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a090920191909152519091506000908290620004bf9062003bdf565b620004cb919062004063565b604051809103906000f080158015620004e8573d6000803e3d6000fd5b5090508181604051620004fb9062003bed565b6200050892919062004074565b604051809103906000f08015801562000525573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200059a57600080fd5b505af1158015620005af573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200ffa583398151915293506306447d56925001600060405180830381600087803b1580156200060757600080fd5b505af11580156200061c573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b1580156200067157600080fd5b505af115801562000686573d6000803e3d6000fd5b5050602b5460ff169150620007119050576000805160206200ffa583398151915263e5d6bf02620006bd6301e133806003620040b4565b6040518263ffffffff1660e01b8152600401620006dc91815260200190565b600060405180830381600087803b158015620006f757600080fd5b505af11580156200070c573d6000803e3d6000fd5b505050505b50505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200079791869186918216906370a0823190602401602060405180830381865afa1580156200076a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007909190620040ce565b8562000bc8565b949350505050565b601c5466b1a2bc2ec50000906b019d971e4fe8401e7400000090620007cf906001600160a01b031683836200224b565b50601d54678ac7230489e800009042906000908190620007f9906001600160a01b031685620022d5565b91509150600080602c60009054906101000a90046001600160a01b03166001600160a01b0316638fca1f7b6040518163ffffffff1660e01b81526004016040805180830381865afa15801562000853573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008799190620040e8565b915091506200088a82600162002369565b62000896818662002369565b601d546000908190620008b3906001600160a01b031689620022d5565b602c5460408051638fca1f7b60e01b815281519496509294506001600160a01b0390911692638fca1f7b9260048082019392918290030181865afa15801562000900573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009269190620040e8565b90945092506200093884600162002369565b62000944838862002369565b620009526103e88b6200246a565b601d544297506200096d906001600160a01b031689620022d5565b5050602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa158015620009b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009dd9190620040e8565b9094509250620009ef84600262002369565b620009fb838862002369565b601d5462000a14906001600160a01b0316878762002544565b50602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa15801562000a5d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a839190620040e8565b909450925062000a9584600262002369565b62000aa1838862002369565b62000aaf6103e88b6200246a565b601d5442975062000acb906001600160a01b0316838362002544565b50602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa15801562000b14573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b3a9190620040e8565b909450925062000b4c84600362002369565b62000b58838862002369565b50505050505050505050565b6060601480548060200260200160405190810160405280929190818152602001828054801562000bbe57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831162000b9f575b5050505050905090565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa15801562000c14573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c3a9190620040ce565b90508084111562000c5e5760405163188c93a560e31b815260040160405180910390fd5b6000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562000cac57600080fd5b505af115801562000cc1573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03891660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b15801562000d1657600080fd5b505af115801562000d2b573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a764000060248201526000805160206200ffa5833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000d8e57600080fd5b505af115801562000da3573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000df7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e1d91906200410d565b509295945050505050565b6060601680548060200260200160405190810160405280929190818152602001828054801562000bbe576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000b9f575050505050905090565b6060601580548060200260200160405190810160405280929190818152602001828054801562000bbe576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000b9f575050505050905090565b60008160405160200162000f01919062004131565b60408051601f198184030181529082905280516020909101206318caf8e360e31b825291506000805160206200ffa58339815191529063c657c7189062000f4f908490869060040162004146565b600060405180830381600087803b15801562000f6a57600080fd5b505af115801562000f7f573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab240000060248201526000805160206200ffa5833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000fe457600080fd5b505af115801562000ff9573d6000803e3d6000fd5b50505050919050565b6000805160206201005e83398151915260001c6001600160a01b031663f48448146040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200105057600080fd5b505af115801562001065573d6000803e3d6000fd5b5050602c546001600160a01b0316915063afdac68d90506200108c426301e133806200416c565b6040518263ffffffff1660e01b8152600401620010ab91815260200190565b602060405180830381865afa158015620010c9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620010ef9190620040ce565b50565b60606019805480602002602001604051908101604052809291908181526020016000905b82821015620011dc5760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015620011c357602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620011845790505b5050505050815250508152602001906001019062001116565b50505050905090565b601c5466b1a2bc2ec50000906b019d971e4fe8401e740000009062001215906001600160a01b031683836200224b565b50601d54678ac7230489e8000090429060009081906200123f906001600160a01b031685620025b9565b91509150600080602c60009054906101000a90046001600160a01b03166001600160a01b0316638fca1f7b6040518163ffffffff1660e01b81526004016040805180830381865afa15801562001299573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012bf9190620040e8565b91509150620012d082600162002369565b620012dc818662002369565b601d546000908190620012f9906001600160a01b031689620025b9565b602c5460408051638fca1f7b60e01b815281519496509294506001600160a01b0390911692638fca1f7b9260048082019392918290030181865afa15801562001346573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200136c9190620040e8565b90945092506200137e84600162002369565b6200138a838862002369565b620013986103e88b6200246a565b601d54429750620013b3906001600160a01b031689620025b9565b5050602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa158015620013fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620014239190620040e8565b90945092506200143584600262002369565b62001441838862002369565b601d546200145a906001600160a01b0316878762002641565b50602c5460408051638fca1f7b60e01b815281516001600160a01b0390931692638fca1f7b926004808401939192918290030181865afa158015620014a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620014c99190620040e8565b9094509250620014db84600262002369565b620014e7838862002369565b620014f56103e88b6200246a565b601d5442975062000acb906001600160a01b0316838362002641565b60606018805480602002602001604051908101604052809291908181526020016000905b82821015620011dc578382906000526020600020018054620015579062004182565b80601f0160208091040260200160405190810160405280929190818152602001828054620015859062004182565b8015620015d65780601f10620015aa57610100808354040283529160200191620015d6565b820191906000526020600020905b815481529060010190602001808311620015b857829003601f168201915b50505050508152602001906001019062001535565b6060601a805480602002602001604051908101604052809291908181526020016000905b82821015620011dc5760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015620016bc57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116200167d5790505b505050505081525050815260200190600101906200160f565b600082128015906200170f5762001709848310156040518060600160405280603681526020016201009e60369139620026b6565b62001736565b620017368285116040518060600160405280602781526020016200ffe560279139620026b6565b60008162001745578462001751565b6200175184866200416c565b9050600082156200176357856200177a565b6200176e85620041be565b6200177a9087620041dd565b9050808410806200178a57508184115b156200180857620017c8848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b815250620026ef565b62001800848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002731565b505050505050565b8215620019085760006200181d8786620041dd565b905085811015620018db5760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a202573000000000000602082015262001873906200186d8389620041dd565b6200276e565b620018a46040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b81525087620027b7565b620018d56040518060400160405280600d81526020016c4e65772044656c74613a20257360981b815250826200276e565b62001901565b6200190183866040518060600160405280602981526020016201000c6029913962002800565b5062001800565b6000620019168588620041dd565b90506200192386620041be565b811015620019e7576200197e6040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200197290620041be565b6200186d9190620041dd565b620019af6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b81525087620027b7565b620019e16040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b815250826200276e565b62001a0d565b62001a0d8286604051806060016040528060298152602001620100356029913962002800565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b82821015620011dc57838290600052602060002001805462001a5c9062004182565b80601f016020809104026020016040519081016040528092919081815260200182805462001a8a9062004182565b801562001adb5780601f1062001aaf5761010080835404028352916020019162001adb565b820191906000526020600020905b81548152906001019060200180831162001abd57829003601f168201915b50505050508152602001906001019062001a3a565b600754600090610100900460ff161562001b135750600754610100900460ff1690565b60006000805160206200ffa58339815191523b1562001c1857604080516000805160206200ffa5833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001b9a917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001620041f3565b60408051601f198184030181529082905262001bb69162004226565b6000604051808303816000865af19150503d806000811462001bf5576040519150601f19603f3d011682016040523d82523d6000602084013e62001bfa565b606091505b509150508080602001905181019062001c1491906200410d565b9150505b919050565b62001c276200283c565b600062001c376103e842620041dd565b602c5460408051638fca1f7b60e01b8152815193945060009384936001600160a01b031692638fca1f7b92600480820193918290030181865afa15801562001c83573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001ca99190620040e8565b909250905062001cc78262001cc16005600c6200425a565b62002369565b62001cd3818462002369565b8260025b8060031462001d9557602c54604051634daa8b8f60e01b8152600481018390526000916001600160a01b031690634daa8b8f906024016040805180830381865afa15801562001d2a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001d509190620040e8565b91505062001d5f818462002369565b62001d6d6103e884620041dd565b925050801562001d8a5762001d84600182620041dd565b62001d8d565b60045b905062001cd7565b50600062001da760016103e8620041dd565b9050600c8060005b62001dbd60016005620041dd565b8110156200070c57602c5460405163afdac68d60e01b8152600481018690526000916001600160a01b03169063afdac68d90602401602060405180830381865afa15801562001e10573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001e369190620040ce565b905062001e7f81600262001e5386670de0b6b3a7640000620040b4565b62001e6788670de0b6b3a7640000620040b4565b62001e7391906200416c565b62001cc1919062004271565b62001e8c600184620041dd565b925062001e9c6103e8866200416c565b945050808062001eac9062004288565b91505062001daf565b6060601380548060200260200160405190810160405280929190818152602001828054801562000bbe576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000b9f575050505050905090565b62001f3f60405180604001604052806005815260200164616c69636560d81b81525062000eec565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b602082015262001f849062000eec565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b602082015262001fcc9062000eec565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b6020820152620020119062000eec565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620020569062000eec565b602060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550620020a7604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000eec565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b6020820152620020ef9062000eec565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b60208201526200213d9062000eec565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620021899062000eec565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b6020820152620021d19062000eec565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b6000806200222e6200221e6200220f856064620040b4565b66a5bbed86c5a00090620028eb565b6748cd4072281e0000906200290b565b905062002244670de0b6b3a7640000826200290b565b9392505050565b6000620007978484846040518060c0016040528060011515815260200187815260200160008152602001600081526020016000198152602001600067ffffffffffffffff811115620022a157620022a162003d0c565b6040519080825280601f01601f191660200182016040528015620022cc576020820181803683370190505b50905262002922565b6000806200235e84846040518060c00160405280600115158152602001878152602001600081526020018781526020016000198152602001600067ffffffffffffffff8111156200232a576200232a62003d0c565b6040519080825280601f01601f19166020018201604052801562002355576020820181803683370190505b50905262002cd2565b915091509250929050565b80821462002466576000805160206200ff85833981519152604051620023cb9060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b60608201526020810184905290516000805160206201007e8339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b6060820152602081018290526000805160206201007e833981519152906080015b60405180910390a16200246662003091565b5050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b158015620024b857600080fd5b505af1158015620024cd573d6000803e3d6000fd5b506000805160206200ffa5833981519152925063e5d6bf029150620024f5905084426200416c565b6040518263ffffffff1660e01b81526004016200251491815260200190565b600060405180830381600087803b1580156200252f57600080fd5b505af115801562001800573d6000803e3d6000fd5b600062000797848484604051806060016040528060011515815260200160008152602001600067ffffffffffffffff81111562002585576200258562003d0c565b6040519080825280601f01601f191660200182016040528015620025b0576020820181803683370190505b5090526200319a565b6000806200235e84846040518060c001604052806001151581526020018781526020016000815260200160008152602001878152602001600067ffffffffffffffff8111156200260d576200260d62003d0c565b6040519080825280601f01601f19166020018201604052801562002638576020820181803683370190505b5090526200331a565b600062000797848484604051806060016040528060011515815260200160008152602001600067ffffffffffffffff81111562002682576200268262003d0c565b6040519080825280601f01601f191660200182016040528015620026ad576020820181803683370190505b50905262003795565b8162002466576000805160206200ffc583398151915281604051620026dc9190620042a4565b60405180910390a16200246682620038c6565b818310156200272c576000805160206200ffc583398151915281604051620027189190620042a4565b60405180910390a16200272c83836200392d565b505050565b818311156200272c576000805160206200ffc5833981519152816040516200275a9190620042a4565b60405180910390a16200272c838362003a1c565b62002466828260405160240162002787929190620042d5565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262003a7f565b620024668282604051602401620027d0929190620042d5565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262003a7f565b8183146200272c576000805160206200ffc583398151915281604051620028289190620042a4565b60405180910390a16200272c838362002369565b66b1a2bc2ec5000060015b600c81116200246657602c546001600160a01b0316635a1a3e7c6200287583670de0b6b3a7640000620040b4565b6040518263ffffffff1660e01b81526004016200289491815260200190565b600060405180830381600087803b158015620028af57600080fd5b505af1158015620028c4573d6000803e3d6000fd5b50505050620028d66103e8836200246a565b80620028e28162004288565b91505062002847565b6000620029028383670de0b6b3a764000062003a8a565b90505b92915050565b60006200290283670de0b6b3a76400008462003a8a565b60006000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200297257600080fd5b505af115801562002987573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b158015620029dc57600080fd5b505af1158015620029f1573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002a56573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002a7c919062004366565b516001600160a01b031614801562002a92575081515b1562002b4457602c54602080840151604080516060810182526001600160a01b038a81168252875115159482019490945260a0870151818301529051631df417fd60e21b815292909316926377d05ff49262002af69188918a91906004016200445d565b60206040518083038185885af115801562002b15573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002b3c9190620040ce565b905062000797565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002b9557600080fd5b505af115801562002baa573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002c0f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c3591906200410d565b50602c54604080516060810182526001600160a01b03888116825285511515602083015260a0860151828401529151631df417fd60e21b815291909216916377d05ff49162002c8c9187918991906004016200445d565b6020604051808303816000875af115801562002cac573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002b3c9190620040ce565b6000806000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002d2357600080fd5b505af115801562002d38573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b15801562002d8d57600080fd5b505af115801562002da2573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002e07573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e2d919062004366565b516001600160a01b031614801562002e43575082515b1562002efe57602c54602080850151606080870151604080890151815193840182526001600160a01b038c811685528a5115159685019690965260a08a015184830152905163cba2e58d60e01b8152949095169463cba2e58d9462002eaf938b9392916004016200447e565b604080518083038185885af115801562002ecd573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002ef49190620040e8565b9150915062003089565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002f4957600080fd5b505af115801562002f5e573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562002fbd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002fe391906200410d565b50602c54606080850151604080870151815193840182526001600160a01b038a8116855288511515602086015260a089015185840152915163cba2e58d60e01b8152919094169363cba2e58d9362003044938a93909291906004016200447e565b60408051808303816000875af115801562003063573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002ef49190620040e8565b935093915050565b6000805160206200ffa58339815191523b156200318957604080516000805160206200ffa5833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620031249291602001620041f3565b60408051601f1981840301815290829052620031409162004226565b6000604051808303816000865af19150503d80600081146200317f576040519150601f19603f3d011682016040523d82523d6000602084013e62003184565b606091505b505050505b6007805461ff001916610100179055565b60006000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620031ea57600080fd5b505af1158015620031ff573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b1580156200325457600080fd5b505af115801562003269573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c8116825289511515948201949094528189015181830152905163ded0623160e01b815292909316945063ded062319350620032cb928992899291906004016200447e565b6020604051808303816000875af1158015620032eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620033119190620040ce565b95945050505050565b6000806000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200336b57600080fd5b505af115801562003380573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b158015620033d557600080fd5b505af1158015620033ea573d6000803e3d6000fd5b5050602c546200340692506001600160a01b0316905062003aa9565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156200347b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620034a1919062004366565b516001600160a01b0316148015620034b7575082515b156200357457602c54602080850151608086015160408088015181516060810183526001600160a01b038c811682528a5115159682019690965260a08a0151818401529151630dbbe80760e41b8152949095169463dbbe80709462003524938b939092916004016200447e565b604080518083038185885af115801562003542573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620035699190620040e8565b909250905062003089565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b158015620035c557600080fd5b505af1158015620035da573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af11580156200363f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200366591906200410d565b50602c54608084015160408086015181516060810183526001600160a01b038a8116825288511515602083015260a0890151828501529251630dbbe80760e41b8152929094169363dbbe807093620036c5938a939192906004016200447e565b60408051808303816000875af1158015620036e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200370a9190620040e8565b602b54602086015192945090925061010090046001600160a01b0316906342966c68906200373a908490620041dd565b6040518263ffffffff1660e01b81526004016200375991815260200190565b600060405180830381600087803b1580156200377457600080fd5b505af115801562003789573d6000803e3d6000fd5b50505050935093915050565b60006000805160206201005e83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620037e557600080fd5b505af1158015620037fa573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200ffa583398151915292506306447d569150602401600060405180830381600087803b1580156200384f57600080fd5b505af115801562003864573d6000803e3d6000fd5b5050602c54602080860151604080516060810182526001600160a01b038c811682528951151594820194909452818901518183015290516329b23fc160e01b81529290931694506329b23fc19350620032cb928992899291906004016200447e565b80620010ef576000805160206200ff858339815191526040516200391b9060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a1620010ef62003091565b8082101562002466576000805160206200ff85833981519152604051620039909060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b60608201526020810184905290516000805160206201007e8339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b6060820152602081018290526000805160206201007e8339815191529060800162002454565b8082111562002466576000805160206200ff85833981519152604051620039909060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620010ef8162003b2c565b600082600019048411830215820262003aa257600080fd5b5091020490565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003aeb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003b11919062004366565b6080015162003b208362003b4d565b6200290591906200416c565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003b8f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003bb5919062004366565b60a0015162003bc590426200425a565b620029059042620041dd565b611de380620044b083390190565b6129ad806200629383390190565b6173458062008c4083390190565b6001600160a01b0381168114620010ef57600080fd5b60008060006060848603121562003c2757600080fd5b833562003c348162003bfb565b9250602084013562003c468162003bfb565b9150604084013562003c588162003bfb565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b8181101562003ca65783516001600160a01b03168352928401929184019160010162003c7f565b50909695505050505050565b6000806000806080858703121562003cc957600080fd5b843562003cd68162003bfb565b9350602085013562003ce88162003bfb565b925060408501359150606085013562003d018162003bfb565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171562003d495762003d4962003d0c565b60405290565b60006020828403121562003d6257600080fd5b813567ffffffffffffffff8082111562003d7b57600080fd5b818401915084601f83011262003d9057600080fd5b81358181111562003da55762003da562003d0c565b604051601f8201601f19908116603f0116810190838211818310171562003dd05762003dd062003d0c565b8160405282815287602084870101111562003dea57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101562003eb257898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101562003e9c5783516001600160e01b0319168252928b019260019290920191908b019062003e70565b50978a0197955050509187019160010162003e32565b50919998505050505050505050565b60005b8381101562003ede57818101518382015260200162003ec4565b50506000910152565b6000815180845262003f0181602086016020860162003ec1565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101562003f6e57603f1988860301845262003f5b85835162003ee7565b9450928501929085019060010162003f3c565b5092979650505050505050565b60008060006060848603121562003f9157600080fd5b505081359360208301359350604090920135919050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e08101516200400c60e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002905828462003fa8565b6101e0810162004085828562003fa8565b6001600160a01b03929092166101c09190910152919050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200290557620029056200409e565b600060208284031215620040e157600080fd5b5051919050565b60008060408385031215620040fc57600080fd5b505080516020909101519092909150565b6000602082840312156200412057600080fd5b815180151581146200224457600080fd5b60208152600062002902602083018462003ee7565b6001600160a01b0383168152604060208201819052600090620007979083018462003ee7565b808201808211156200290557620029056200409e565b600181811c908216806200419757607f821691505b602082108103620041b857634e487b7160e01b600052602260045260246000fd5b50919050565b6000600160ff1b8201620041d657620041d66200409e565b5060000390565b818103818111156200290557620029056200409e565b6001600160e01b03198316815281516000906200421881600485016020870162003ec1565b919091016004019392505050565b600082516200423a81846020870162003ec1565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b6000826200426c576200426c62004244565b500690565b60008262004283576200428362004244565b500490565b6000600182016200429d576200429d6200409e565b5060010190565b60408152600560408201526422b93937b960d91b606082015260806020820152600062002902608083018462003ee7565b604081526000620042ea604083018562003ee7565b90508260208301529392505050565b805162001c188162003bfb565b6000606082840312156200431957600080fd5b6040516060810181811067ffffffffffffffff821117156200433f576200433f62003d0c565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200437a57600080fd5b6200438462003d22565b6200438f83620042f9565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620043db60e08401620042f9565b60e0820152610100620043f0818501620042f9565b90820152610120620044058585830162004306565b908201526101808301516101408201526101a09092015161016083015250919050565b60018060a01b038151168252602081015115156020830152600060408201516060604085015262000797606085018262003ee7565b83815282602082015260606040820152600062003311606083018462004428565b848152836020820152826040820152608060608201526000620044a5608083018462004428565b969550505050505056fe6101006040523480156200001257600080fd5b5060405162001de338038062001de3833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161186c620005776000396000818161037901528181610882015281816108e801528181610c270152610c890152600061085e01526000610829015260006102b9015261186c6000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b146104c7578063ea7ca276146104fd578063ed0d0efb14610534578063f2fde38b1461055457600080fd5b8063bf7e214f1461044d578063c53a398514610460578063d505accf14610489578063dd62ed3e1461049c57600080fd5b80639dc29fac116100de5780639dc29fac14610401578063a0712d6814610414578063a9059cbb14610427578063b70096131461043a57600080fd5b80637a9e5e4b1461039b5780637ecebe00146103ae5780638da5cb5b146103ce57806395d89b41146103f957600080fd5b80633644e5151161018757806367aff4841161015657806367aff4841461032e57806370a0823114610341578063728b952b146103615780637a8c63b51461037457600080fd5b80633644e515146102ed57806340c10f19146102f557806342966c68146103085780634b5159da1461031b57600080fd5b80630ea9b75b116101c35780630ea9b75b1461028357806318160ddd1461029857806323b872dd146102a1578063313ce567146102b457600080fd5b806306a36aee146101f557806306fdde0314610228578063095ea7b31461023d5780630bade8a414610260575b600080fd5b610215610203366004611324565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610230610567565b60405161021f9190611341565b61025061024b36600461138f565b6105f5565b604051901515815260200161021f565b61025061026e3660046113d8565b600a6020526000908152604090205460ff1681565b610296610291366004611412565b610662565b005b61021560025481565b6102506102af366004611459565b610743565b6102db7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161021f565b610215610825565b61029661030336600461138f565b610880565b61029661031636600461149a565b6108e6565b6102966103293660046114b3565b61094b565b61029661033c3660046114ea565b6109dd565b61021561034f366004611324565b60036020526000908152604090205481565b61029661036f366004611518565b610aa5565b6102507f000000000000000000000000000000000000000000000000000000000000000081565b6102966103a9366004611324565b610b2e565b6102156103bc366004611324565b60056020526000908152604090205481565b6006546103e1906001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b610230610c18565b61029661040f36600461138f565b610c25565b61029661042236600461149a565b610c87565b61025061043536600461138f565b610ce9565b610250610448366004611546565b610d4f565b6007546103e1906001600160a01b031681565b6103e161046e366004611324565b6008602052600090815260409020546001600160a01b031681565b61029661049736600461158d565b610e4d565b6102156104aa366004611518565b600460209081526000928352604080842090915290825290205481565b6102506104d53660046115fb565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025061050b36600461162e565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102156105423660046113d8565b600b6020526000908152604090205481565b610296610562366004611324565b611091565b600080546105749061165a565b80601f01602080910402602001604051908101604052809291908181526020018280546105a09061165a565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106509086815260200190565b60405180910390a35060015b92915050565b610678336000356001600160e01b03191661110f565b61069d5760405162461bcd60e51b815260040161069490611694565b60405180910390fd5b80156106cd576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106f4565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610736911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461079f5761077a83826116d0565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107c79084906116d0565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611817833981519152906108109087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461085b576108566111b9565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108d8576108bc336000356001600160e01b03191661110f565b6108d85760405162461bcd60e51b8152600401610694906116e3565b6108e28282611253565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561093e57610922336000356001600160e01b03191661110f565b61093e5760405162461bcd60e51b8152600401610694906116e3565b61094833826112ad565b50565b610961336000356001600160e01b03191661110f565b61097d5760405162461bcd60e51b815260040161069490611694565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109f3336000356001600160e01b03191661110f565b610a0f5760405162461bcd60e51b815260040161069490611694565b8015610a3e576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a64565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610736911515815260200190565b610abb336000356001600160e01b03191661110f565b610ad75760405162461bcd60e51b815260040161069490611694565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610bc3575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b8290339030906001600160e01b0319600035169060040161171a565b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611747565b610bcc57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105749061165a565b7f000000000000000000000000000000000000000000000000000000000000000015610c7d57610c61336000356001600160e01b03191661110f565b610c7d5760405162461bcd60e51b8152600401610694906116e3565b6108e282826112ad565b7f000000000000000000000000000000000000000000000000000000000000000015610cdf57610cc3336000356001600160e01b03191661110f565b610cdf5760405162461bcd60e51b8152600401610694906116e3565b6109483382611253565b33600090815260036020526040812080548391908390610d0a9084906116d0565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611817833981519152906106509086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610deb5760405163b700961360e01b81526001600160a01b0382169063b700961390610da29088908890889060040161171a565b602060405180830381865afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de39190611747565b91505061081e565b6001600160e01b031983166000908152600a602052604090205460ff1680610e4457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e9d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610694565b60006001610ea9610825565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610fb5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610feb5750876001600160a01b0316816001600160a01b0316145b6110285760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610694565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6110a7336000356001600160e01b03191661110f565b6110c35760405162461bcd60e51b815260040161069490611694565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611199575060405163b700961360e01b81526001600160a01b0382169063b7009613906111589087903090889060040161171a565b602060405180830381865afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190611747565b806111b157506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111eb9190611764565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546112659190611803565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061181783398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112d59084906116d0565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611817833981519152906020016112a1565b6001600160a01b038116811461094857600080fd5b60006020828403121561133657600080fd5b813561081e8161130f565b600060208083528351808285015260005b8181101561136e57858101830151858201604001528201611352565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156113a257600080fd5b82356113ad8161130f565b946020939093013593505050565b80356001600160e01b0319811681146113d357600080fd5b919050565b6000602082840312156113ea57600080fd5b61081e826113bb565b803560ff811681146113d357600080fd5b801515811461094857600080fd5b60008060006060848603121561142757600080fd5b611430846113f3565b925061143e602085016113bb565b9150604084013561144e81611404565b809150509250925092565b60008060006060848603121561146e57600080fd5b83356114798161130f565b925060208401356114898161130f565b929592945050506040919091013590565b6000602082840312156114ac57600080fd5b5035919050565b600080604083850312156114c657600080fd5b6114cf836113bb565b915060208301356114df81611404565b809150509250929050565b6000806000606084860312156114ff57600080fd5b833561150a8161130f565b925061143e602085016113f3565b6000806040838503121561152b57600080fd5b82356115368161130f565b915060208301356114df8161130f565b60008060006060848603121561155b57600080fd5b83356115668161130f565b925060208401356115768161130f565b9150611584604085016113bb565b90509250925092565b600080600080600080600060e0888a0312156115a857600080fd5b87356115b38161130f565b965060208801356115c38161130f565b955060408801359450606088013593506115df608089016113f3565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561160e57600080fd5b611617836113f3565b9150611625602084016113bb565b90509250929050565b6000806040838503121561164157600080fd5b823561164c8161130f565b9150611625602084016113f3565b600181811c9082168061166e57607f821691505b60208210810361168e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561065c5761065c6116ba565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561175957600080fd5b815161081e81611404565b600080835481600182811c91508083168061178057607f831692505b6020808410820361179f57634e487b7160e01b86526022600452602486fd5b8180156117b357600181146117c8576117f5565b60ff19861689528415158502890196506117f5565b60008a81526020902060005b868110156117ed5781548b8201529085019083016117d4565b505084890196505b509498975050505050505050565b8082018082111561065c5761065c6116ba56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220117bf66eed90e97e74b4fd19222cc1bd7a2bc245ad92cd2dcf2d782fea57c03664736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620029ad380380620029ad8339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516125426200046b6000396000610a1701526000610967015260006109e0015260006109bb01526000610998015260006108c101526000818161089c01526110a6015260008181610872015261108001526000818161093701526110cc0152600081816108eb015261153901526000818161091101526117c501526000818161084d01528181610b780152610f5101526000610bb101526000610b3801526125426000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611df2565b6102f1565b6040516101459190611e5b565b60405180910390f35b61016161015c366004611df2565b610328565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611e85565b61037a565b604051908152602001610145565b61019b6101b7366004611ec1565b6103c0565b6101386101ca366004611df2565b6103f9565b6101d7610407565b6040516101459190611eed565b61019b6101f2366004611f78565b610601565b61019b61062d565b61019b61020d366004611df2565b61064a565b61021a610830565b6040516101459190611f93565b61019b610235366004611df2565b610a4d565b61024d610248366004612055565b610a6f565b60405161014591906120ca565b610262610b2a565b6040516001600160a01b039091168152602001610145565b610262610b6a565b61019b610baa565b610292610be2565b604051610145919061210e565b6102b26102ad3660046121fb565b610c48565b6040519015158152602001610145565b6102ca610c8c565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b60606103236102ff83610ceb565b60405160200161030f9190611e5b565b604051602081830303815290604052610e19565b919050565b6040805180820190915260008082526020820152610323600e600084815260200190815260200160002060405160200161030f91546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103b9910161030f565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103f3910161030f565b92915050565b60606103236102ff83610e3d565b610472604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061047c610f2f565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b03909216916104e79190612251565b6104f19190612264565b9050600080831161050357600061051e565b61051e8361051861051386610fe3565b611149565b906113b7565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105c6576105c184866113cc565b6105c9565b60005b8152600954600160801b90046001600160801b03166020918201526040519192506105fa9161030f91849101611eed565b5050505090565b6001600160a01b038116600090815260076020908152604080832054815192830152610323910161030f565b600061064760105460405160200161030f91815260200190565b90565b601354601280546000926001600160801b03600160801b82048116939116918491908390811061067c5761067c612277565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106bd8685612264565b9050600083156106d7576106d2600185612264565b6106e6565b6012546106e690600190612264565b60408051808201909152600080825260208201529091505b8482146107955760006012838154811061071a5761071a612277565b6000918252602090912001805490915063ffffffff1684106107685760408051808201909152905463ffffffff8116825264010000000090046001600160e01b031660208201529050610795565b821561077e57610779600184612264565b61078d565b60125461078d90600190612264565b9250506106fe565b805163ffffffff166000036107bd57604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166107e59190612264565b825186519192506000916108029163ffffffff9081169116612264565b905061082361081182846122a3565b60405160200161030f91815260200190565b5050505050505050919050565b610838611d54565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f000000000000000000000000000000000000000000000000000000000000000061016083015291516106479261030f929101611f93565b600081815260026020908152604080832054815192830152610323910161030f565b606060008267ffffffffffffffff811115610a8c57610a8c6122b7565b604051908082528060200260200182016040528015610ab5578160200160208202803683370190505b50905060005b83811015610b0e576000858583818110610ad757610ad7612277565b90506020020135905060008154905080848481518110610af957610af9612277565b60209081029190910101525050600101610abb565b50610b238160405160200161030f91906120ca565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610647910161030f565b60006106477f000000000000000000000000000000000000000000000000000000000000000060405160200161030f91815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610647600860405160200161030f91906122cd565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103f3910161030f565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526106479060600161030f565b606060f882901c6001600160f81b0383166000610d07826113e1565b90506000836003811115610d1d57610d1d612225565b03610d4f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610e11565b6001836003811115610d6357610d63612225565b03610d8f5780604051602001610d79919061234e565b6040516020818303038152906040529350610e11565b6002836003811115610da357610da3612225565b03610db95780604051602001610d799190612387565b6003836003811115610dcd57610dcd612225565b03610e11576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610e349190611e5b565b60405180910390fd5b606060f882901c6001600160f81b0383166000610e59826113e1565b90506000836003811115610e6f57610e6f612225565b03610ea1576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610e11565b6001836003811115610eb557610eb5612225565b03610ecb5780604051602001610d7991906123c1565b6002836003811115610edf57610edf612225565b03610ef55780604051602001610d7991906123f9565b6003836003811115610f0957610f09612225565b03610e11576040516c485950455244524956452d575360981b6020820152602d01610dff565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc9190612425565b9050601454600003610fcf576000610fdd565b601454610fdd9082906113cc565b91505090565b61104060405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b54909161010083019161110f91166114ee565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192611141929004166114ee565b905292915050565b6000806111698361014001518461012001516113b790919063ffffffff16565b61010084015160e085015161117d916113b7565b611187919061243e565b9050600061119d84600001518560200151611564565b9050600082131561123d5760006111df8286604001518760a001518860c00151670de0b6b3a76400006111d09190612264565b89606001518a60800151611581565b90506111eb8184611621565b9050801561123757611224828660400151838860c00151670de0b6b3a76400006112159190612264565b89606001518a60800151611636565b85518690611233908390612264565b9052505b506112f9565b60008212156112f95761124f8261245e565b915060006112838286604001518760c00151670de0b6b3a76400006112749190612264565b88606001518960800151611675565b905061128f8184611621565b905080156112db576112c8828660400151838860c00151670de0b6b3a76400006112b99190612264565b89606001518a6080015161170b565b855186906112d7908390612251565b9052505b6112e58184612264565b855186906112f4908390612251565b905250505b6000611328856101000151670de0b6b3a76400006113179190612264565b606087015160e088015191906117a0565b611356866101400151670de0b6b3a76400006113449190612264565b606088015161012089015191906117a0565b611360919061243e565b90506000818660000151611374919061247a565b90508560a0015181121561139b5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516113ad9082612264565b9695505050505050565b60006103b98383670de0b6b3a76400006117a0565b60006103b983670de0b6b3a7640000846117a0565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611413600a8561249a565b61141e906030612251565b60f81b8161142d600185612264565b8151811061143d5761143d612277565b60200101906001600160f81b031916908160001a90535061145f600a856122a3565b935060015b84156114e057611475600a8661249a565b611480906030612251565b60f81b8260016114908487612264565b61149a9190612264565b815181106114aa576114aa612277565b60200101906001600160f81b031916908160001a9053506114cc600a866122a3565b9450806114d8816124ae565b915050611464565b918290030190815292915050565b600080670de0b6b3a76400006115026117be565b61150c91906124c7565b905080831161151c576000611526565b6115268184612264565b91506103b961155d670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006124c7565b83906113cc565b600080611571838561243e565b905060008112156103b957600080fd5b60008061159188888787876117f9565b905060006115b46115ac876115a6878b611828565b9061183d565b869086611894565b6115be9083612264565b9050670de0b6b3a764000081106115f2576115eb6115e4670de0b6b3a7640000886113cc565b829061183d565b905061160a565b6116076115e4670de0b6b3a7640000886118ba565b90505b6116148882612264565b9998505050505050505050565b600081831161163057826103b9565b50919050565b6000806116478888888888886118cf565b90925090508061166a57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806116858787878787611991565b905060006116b0670de0b6b3a764000061169f87876113cc565b6116a99190612251565b83906118ba565b9050670de0b6b3a764000081106116dd576116d66115e4670de0b6b3a7640000886118ba565b90506116f5565b6116f26115e4670de0b6b3a7640000886113cc565b90505b6116ff8188612264565b98975050505050505050565b60008061171b8888878787611991565b905061172b856115a6888a612264565b96506000611745848661173e8b86612264565b9190611894565b9050670de0b6b3a764000081106117725761176b6115e4670de0b6b3a7640000886118ba565b905061178a565b6117876115e4670de0b6b3a7640000886113cc565b90505b61179481856118ba565b90506116148982612264565b60008260001904841183021582026117b757600080fd5b5091020490565b60006117ea7f00000000000000000000000000000000000000000000000000000000000000004261249a565b6117f49042612264565b905090565b6000611805858561183d565b61181e611816866115a6868b6113b7565b8590856117a0565b6113ad9190612251565b60006103b98383670de0b6b3a7640000611894565b6000816000036118565750670de0b6b3a76400006103f3565b82600003611866575060006103f3565b816000611872856119b6565b9050818102611889670de0b6b3a7640000826124de565b90506113ad81611bc9565b60008260001904841183021582026118ab57600080fd5b50910281810615159190040190565b60006103b983670de0b6b3a764000084611894565b60008060006118e18989888888611991565b90506118f1866115a6898b612251565b975087811015611908576000809250925050611986565b6000611919858761173e8c86612264565b9050670de0b6b3a764000081106119465761193f6115e4670de0b6b3a7640000896118ba565b905061195e565b61195b6115e4670de0b6b3a7640000896113cc565b90505b61196881866118ba565b9050808a111561197f5761197c818b612264565b93505b6001925050505b965096945050505050565b600061199d858561183d565b61181e6119ae866115a6868b611828565b859085611894565b60008082136119d857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213611be457506000919050565b680755bf798b4a1bf1e58212611c0d5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611dde60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611e0457600080fd5b5035919050565b60005b83811015611e26578181015183820152602001611e0e565b50506000910152565b60008151808452611e47816020860160208601611e0b565b601f01601f19169290920160200192915050565b6020815260006103b96020830184611e2f565b80356001600160a01b038116811461032357600080fd5b600080600060608486031215611e9a57600080fd5b83359250611eaa60208501611e6e565b9150611eb860408501611e6e565b90509250925092565b60008060408385031215611ed457600080fd5b82359150611ee460208401611e6e565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611f8a57600080fd5b6103b982611e6e565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611ffb60e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b6000806020838503121561206857600080fd5b823567ffffffffffffffff8082111561208057600080fd5b818501915085601f83011261209457600080fd5b8135818111156120a357600080fd5b8660208260051b85010111156120b857600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015612102578351835292840192918401916001016120e6565b50909695505050505050565b81516001600160801b031681526101408101602083015161213a60208401826001600160801b03169052565b50604083015161214f6040840182600f0b9052565b50606083015161216a60608401826001600160801b03169052565b50608083015161218560808401826001600160801b03169052565b5060a08301516121a060a08401826001600160801b03169052565b5060c08301516121bb60c08401826001600160801b03169052565b5060e08301516121d660e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b6000806040838503121561220e57600080fd5b61221783611e6e565b9150611ee460208401611e6e565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156103f3576103f361223b565b818103818111156103f3576103f361223b565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826122b2576122b261228d565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b23565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161237a816011850160208701611e0b565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516123b4816012850160208701611e0b565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516123ec816010850160208701611e0b565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161237a816011850160208701611e0b565b60006020828403121561243757600080fd5b5051919050565b8181036000831280158383131683831282161715610b2357610b2361223b565b6000600160ff1b82016124735761247361223b565b5060000390565b80820182811260008312801582168215821617156121f3576121f361223b565b6000826124a9576124a961228d565b500690565b6000600182016124c0576124c061223b565b5060010190565b80820281158282048414176103f3576103f361223b565b6000826124ed576124ed61228d565b600160ff1b8214600019841416156125075761250761223b565b50059056fea264697066735822122049cf330d0e5e37231e586b80e7d860480d41fee7e51873f0c71815501ef482ea64736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162007345380380620073458339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051616bb4620007916000396000613a9f015260008181610f3701528181610fb1015261101f01526000818161317f015281816131f801528181613d1a01526153c60152600081816131cc0152818161348701528181614da1015261539a0152600081816131520152818161336401528181613cd601526147f4015260008181610ce9015281816118f001528181611d3101528181611f010152818161212e015261232f0152600081816114190152818161146401528181611566015281816141bd0152818161420c01528181614445015281816148b8015281816148f4015281816153220152615cd50152600081816114d501528181611951015281816132c50152818161331201528181614007015281816140340152818161441f015281816147b401528181614ce601528181615094015261562401526000818161151801528181611993015281816132a3015281816133330152818161446b0152818161479201528181614cc4015281816150720152615645015260008181610dae015281816114f70152818161197201528181611dff015281816121bb015281816123ec0152818161282c015281816129480152818161340d0152818161366001528181613ca40152818161498301526151310152600081816125b50152818161265e01526127940152600081816111820152818161121c0152818161128f015281816126a9015281816126f201528181612c9401528181612cdd01528181612db701528181612e5501528181613d4a01528181613e0401528181613ec90152613f610152600081816104a30152611711015260006139d401526000613997015260008181610252015261083d0152616bb46000f3fe60806040526004361061023b5760003560e01c80638fca1f7b1161012e578063b334ed86116100ab578063d5002f2e1161006f578063d5002f2e14610904578063dbbe807014610919578063ded062311461092c578063e44808bc1461094c578063ed64bab21461096c5761023b565b8063b334ed861461082b578063b4f8da3914610877578063ca6d38f7146108b1578063cba2e58d146108d1578063cbc13434146108e45761023b565b80639cd241af116100f25780639cd241af1461078b578063a22cb465146107ab578063a77384c1146107cb578063ab033ea9146107eb578063b1b4b1701461080b5761023b565b80638fca1f7b146106da5780639032c72614610703578063907c0f92146107235780639aa68462146107385780639bd334981461074b5761023b565b80634ed2d6ac116101bc5780637180c8ca116101805780637180c8ca146105b957806371f88b7c146105d957806377d05ff4146105f95780638120a3e21461060c578063883483971461062c5761023b565b80634ed2d6ac146105055780635a1a3e7c14610525578063680962391461054557806368c2ecb814610565578063702db0eb146105855761023b565b806329b23fc11161020357806329b23fc11461042f57806330adf81f1461045d5780633644e515146104915780633e691db9146104c55780634daa8b8f146104e55761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806322d5506b146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a9291906161cc565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f9826161dc565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401616284565b80519650602001945050505050f35b34801561035757600080fd5b5061036b61036636600461634e565b61098c565b005b34801561037957600080fd5b5061038d61038836600461637d565b6109d5565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c2366004616429565b610bcf565b3480156103d357600080fd5b5061036b6103e23660046164ba565b610c83565b3480156103f357600080fd5b506104076104023660046164fe565b610c96565b604080519586526020860194909452928401919091526060830152608082015260a00161039e565b34801561043b57600080fd5b5061044f61044a366004616530565b610cbf565b60405190815260200161039e565b34801561046957600080fd5b5061044f7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561049d57600080fd5b5061044f7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b5061044f6104e036600461658a565b610f05565b3480156104f157600080fd5b5061038d6105003660046165bf565b611094565b34801561051157600080fd5b5061036b6105203660046165d8565b611104565b34801561053157600080fd5b5061036b6105403660046165bf565b611152565b34801561055157600080fd5b5061036b61056036600461661e565b61115e565b34801561057157600080fd5b5061044f6105803660046165bf565b611309565b34801561059157600080fd5b5061036b6105a0366004616657565b6001600160801b03908116600160801b02911617600855565b3480156105c557600080fd5b5061036b6105d436600461668a565b61131a565b3480156105e557600080fd5b5061038d6105f43660046166c1565b611392565b61044f61060736600461637d565b6113ae565b34801561061857600080fd5b5061036b6106273660046165bf565b61162e565b34801561063857600080fd5b5061036b6106473660046166ff565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106e657600080fd5b506013546001600160801b0380821691600160801b90041661038d565b34801561070f57600080fd5b5061036b61071e3660046167c7565b611637565b34801561072f57600080fd5b5061044f611886565b61044f610746366004616530565b611895565b34801561075757600080fd5b5061076b61076636600461661e565b611b92565b60408051948552602085019390935291830152606082015260800161039e565b34801561079757600080fd5b5061036b6107a6366004616843565b611bb2565b3480156107b757600080fd5b5061036b6107c636600461668a565b611bbe565b3480156107d757600080fd5b5061036b6107e63660046165bf565b601455565b3480156107f757600080fd5b5061036b610806366004616878565b611c2a565b34801561081757600080fd5b5061044f6108263660046165bf565b611c9e565b34801561083757600080fd5b5061085f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561088357600080fd5b5061036b610892366004616893565b600980546001600160801b03928316600160801b029216919091179055565b3480156108bd57600080fd5b5061044f6108cc3660046165bf565b611ca9565b61038d6108df366004616530565b611cb4565b3480156108f057600080fd5b5061038d6108ff36600461637d565b611ed5565b34801561091057600080fd5b5060145461044f565b61038d610927366004616530565b6120d1565b34801561093857600080fd5b5061044f610947366004616530565b612305565b34801561095857600080fd5b5061036b6109673660046168ae565b612534565b34801561097857600080fd5b5061036b6109873660046165bf565b612584565b336000908152600f602052604090205460ff166109bb576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b600080600054600114610a035760405162461bcd60e51b81526004016109fa90616905565b60405180910390fd5b60026000908155610a1261268e565b9050610a25610a1f61278d565b826127c3565b50610a2f81612aaf565b600d548692506001600160801b031680831115610a5357806001600160801b031692505b82600003610a6957600080935093505050610bc0565b610a78600360f81b3385612b72565b600d546001600160801b03600160801b909104811690600090610aa090869084908616612c1b565b9050610aab85612c39565b610ab5908461693f565b600d80546001600160801b0319166001600160801b0392909216919091179055610ade81612c39565b600d8054601090610b00908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b2e8188612c63565b955085610b3b8987612f4f565b1115610b5a5760405163c972651760e01b815260040160405180910390fd5b610b676020880188616878565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610b9c8488612f4f565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b0386161580610bec57506001600160a01b038516155b15610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c2a5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610c7a57610c72858583818110610c4a57610c4a616966565b905060200201358888868686818110610c6557610c65616966565b9050602002013533612f6b565b600101610c2d565b50505050505050565b610c908484848433612f6b565b50505050565b6000806000806000610caa8989898961312c565b939d929c50909a509850909650945050505050565b60008054600114610ce25760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610d285760405163211ddda360e11b815260040160405180910390fd5b6000610d3261268e565b9050610d3e86826127c3565b50610d54610d4d600288613236565b3387612b72565b600080600080600080610d688b888e61326b565b949a509298509096509450925090508a8c8842821115610e39578360106000828254610d94919061697c565b90915550610da79050838a8988866134df565b6000610dd37f00000000000000000000000000000000000000000000000000000000000000008461698f565b6000818152600e6020526040812054919250600160801b909104600f0b90610e069086908a908e908d9089908990613659565b6000828152600e6020526040902054610e2d90600f83810b91600160801b9004900b613802565b610e3683612aaf565b50505b6000610e45898e612c63565b90508c6000610e55838e84613929565b90508f811015610e785760405163c972651760e01b815260040160405180910390fd5b610e83600286613236565b8f6000016020810190610e969190616878565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610f285760405162461bcd60e51b81526004016109fa90616905565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610f646020840184616878565b6001600160a01b031614610f8b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610fd45750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610feb57506011546001600160a01b03163314155b15611008576040516282b42960e81b815260040160405180910390fd5b60108054600090915561101b8184612c63565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee8361107161268e565b6040805192835260208301919091520160405180910390a2506001600055919050565b600080601283815481106110aa576110aa616966565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b0316601284815481106110e7576110e7616966565b600091825260209091200154909463ffffffff9091169350915050565b8361110e81613959565b6001600160a01b0316336001600160a01b03161461113f57604051632aab8bd360e01b815260040160405180910390fd5b61114b85858585613a16565b5050505050565b61115b81613a83565b50565b6040516370a0823160e01b81523060048201526000906111f4906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed91906169a2565b8385613bdd565b915050600081131561127c576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561126857600080fd5b505af1158015610c7a573d6000803e3d6000fd5b6000811215611304576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac306112be846169bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561126857600080fd5b505050565b600061131482613c77565b92915050565b6011546001600160a01b03163314611344576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6000806113a0858585613cc8565b90925090505b935093915050565b600080546001146113d15760405162461bcd60e51b81526004016109fa90616905565b60026000556113de613d48565b600c5460ff161561140257604051637983c05160e01b815260040160405180910390fd5b60008061140f8685613db5565b909250905061143f7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b82101561145f57604051632afb507160e21b815260040160405180910390fd5b61148a7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b611494908361698f565b600c805460ff1916600117905592506114ac82612c39565b600880546001600160801b0319166001600160801b039290921691909117905561154161153c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006140a2565b612c39565b600880546001600160801b03928316600160801b02921691909117905561158a6000807f0000000000000000000000000000000000000000000000000000000000000000614104565b6115a2600061159c6020870187616878565b85614104565b6115ad610a1f61278d565b5060006115bb878387613929565b90506115ca6020860186616878565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b61115b816141a4565b834211156116585760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661167f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117ab573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061180f906169ee565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061189061278d565b905090565b600080546001146118b85760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff16156118e6576040516313d0ff5960e31b815260040160405180910390fd5b6118ee613d48565b7f000000000000000000000000000000000000000000000000000000000000000085101561192f5760405163211ddda360e11b815260040160405180910390fd5b60006119b761193c614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614347565b9050848110806119c657508381115b156119e457604051633b61151160e11b815260040160405180910390fd5b6000806119f18886613db5565b91509150611a00610a1f61278d565b50600d54600360f81b60009081526002602052600080516020616b3f833981519152549091611a3a916001600160801b039091169061698f565b60008080526002602052600080516020616b5f8339815191525491925090611a6390839061697c565b90506000806000611a7386614382565b9050611a7e816144e8565b9150611a89876141a4565b6008546001600160801b038082168352600954600f0b6020840152600160801b909104166040820152611abb816144e8565b9250611ad38483611acc818761698f565b9190612c1b565b9850611aef90506000611ae960208c018c616878565b8a614104565b611af885612aaf565b60008315611b0f57611b0a8285614756565b611b12565b60005b9050611b2160208b018b616878565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a611b568a8a612f4f565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b600080600080611ba2868661476b565b9299919850965090945092505050565b61130483838333613a16565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611c54576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006113148261488f565b600061131482614938565b600080600054600114611cd95760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615611d07576040516313d0ff5960e31b815260040160405180910390fd5b611d0f613d48565b600080611d1c8886613db5565b915091506000611d2d898388613929565b90507f0000000000000000000000000000000000000000000000000000000000000000811015611d705760405163211ddda360e11b815260040160405180910390fd5b86821015611d91576040516342af972b60e01b815260040160405180910390fd5b6000611d9b61278d565b9050611da781846127c3565b506000806000611db7878761476b565b909a5091945092509050878c1115611de25760405163c972651760e01b815260040160405180910390fd5b8060106000828254611df4919061697c565b90915550611e2490507f00000000000000000000000000000000000000000000000000000000000000008561697c565b9850611e3483898489888e6149ae565b6000611e4160018b613236565b9050611e5a81611e5460208e018e616878565b8b614104565b80611e6860208d018d616878565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b600080600054600114611efa5760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611f405760405163211ddda360e11b815260040160405180910390fd5b6000611f4a61268e565b9050611f57610a1f61278d565b50611f6181612aaf565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091611faa916001600160801b039091169061698f565b90506000611fb8828461697c565b9050611fc66000338b612b72565b600080611fd68b87858888614b9c565b9098509092509050611ff9600360f81b611ff360208c018c616878565b89614104565b612003828a612c63565b9750600061201289888c613929565b9050888b11156120355760405163c972651760e01b815260040160405180910390fd5b6000841561204c576120478386614756565b61204f565b60005b905061205e60208c018c616878565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b6000806000546001146120f65760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615612124576040516313d0ff5960e31b815260040160405180910390fd5b61212c613d48565b7f000000000000000000000000000000000000000000000000000000000000000086101561216d5760405163211ddda360e11b815260040160405180910390fd5b600061217761268e565b90508481101561219a576040516342af972b60e01b815260040160405180910390fd5b60006121a461278d565b905060006121b282846127c3565b905060006121e07f00000000000000000000000000000000000000000000000000000000000000008461697c565b905060008060006121f28d8887614c9e565b909450909250905061220582888c614dd4565b91508060106000828254612219919061697c565b909155505050808b10156122405760405163c972651760e01b815260040160405180910390fd5b600061224c828b613db5565b50905061225b8d848987614dfc565b6000612268600286613236565b90508d6122828261227c60208f018f616878565b83614104565b8161229060208e018e616878565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95886122c5878e612f4f565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b600080546001146123285760405162461bcd60e51b81526004016109fa90616905565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561236e5760405163211ddda360e11b815260040160405180910390fd5b600061237861268e565b905061238486826127c3565b50612393610d4d600188613236565b6000806000806000806123a78b888e61503a565b95509550955095509550955060008c90508c4210156124705781601060008282546123d2919061697c565b909155506123e590508c888786856151b6565b60006124117f00000000000000000000000000000000000000000000000000000000000000008361698f565b6000818152600e6020526040902054909150600160801b9004600f0b61243d8e878b8a878f6001613659565b6000828152600e602052604090205461246490600f83810b91600160801b9004900b613802565b61246d8a612aaf565b50505b600061247c878c612c63565b9050600061248b828b8e613929565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600185613236565b6124c760208f018f616878565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b8461253e81613959565b6001600160a01b0316336001600160a01b03161461256f57604051632aab8bd360e01b815260040160405180910390fd5b61257c8686868686612f6b565b505050505050565b6000818152600e60205260409020546001600160801b0316156125a45750565b60006125ae61278d565b90506125da7f000000000000000000000000000000000000000000000000000000000000000083616a1d565b1515806125e657508181105b156126045760405163ecd29e8160e01b815260040160405180910390fd5b80820361261c576113048161261761268e565b6127c3565b815b6000818152600e60205260409020546001600160801b03168282036126485761264561268e565b90505b80156126585761114b84826127c3565b506126837f00000000000000000000000000000000000000000000000000000000000000008261697c565b905061261e565b5050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126dd575047612768565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612741573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276591906169a2565b90505b601454600003612779576000612787565b601454612787908290614756565b91505090565b60006127b97f000000000000000000000000000000000000000000000000000000000000000042616a1d565b611890904261698f565b6000828152600e6020526040812080546001600160801b03161515806127e857504284115b156127fe57546001600160801b03169050611314565b61280783612c39565b81546001600160801b0319166001600160801b03919091161781556000600e816128517f00000000000000000000000000000000000000000000000000000000000000008861698f565b815260208101919091526040016000908120546001600160801b0316915061287a600287613236565b60008181526002602052604081205491925081156128d3576000806128a2848a886000615383565b9150915080601060008282546128b8919061697c565b909155506128cc905084600084808e6134df565b6001925050505b60006128e060018a613236565b600081815260026020526040902054909150801561293b57600080612908838c8a6001615383565b91509150806010600082825461291e919061697c565b909155508c90506129338460008580856151b6565b600195505050505b82156129b957600061296d7f00000000000000000000000000000000000000000000000000000000000000008c61698f565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926129ad928492919004900b613802565b6129b68b612aaf565b50505b6000808a116129c95760006129e4565b6129e48a6129de6129d98d614382565b6144e8565b90612f4f565b600d546002602052600080516020616b3f833981519152546000808052600080516020616b5f83398151915254939450926001600160801b0390921691612a2b919061697c565b612a35919061698f565b905060008115612a4e57612a498383614756565b612a51565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091612af8916001600160801b039091169061698f565b90506000612b06828461697c565b90506000612b166129d986614382565b90506000612b25858385612c1b565b9050600080612b338861488f565b905082811115612b4a57612b47838261698f565b91505b6000821180612b57575083155b15612b6857612b6882858789615451565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612ba490849061698f565b909155505060008381526002602052604081208054839290612bc790849061698f565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000826000190484118302158202612c3257600080fd5b5091020490565b6000600160801b8210612c5f57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006014548311612c745782612c78565b6014545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cc8575047612d53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5091906169a2565b90505b601454600003612d64576000612d83565b612d83612d7c6014548361475690919063ffffffff16565b8590612f4f565b91508360146000828254612d97919061698f565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e4b57612df16020850185616878565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114612e3b576040519150601f19603f3d011682016040523d82523d6000602084013e612e40565b606091505b505080915050612efb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb612e876020870187616878565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015612ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef89190616a31565b90505b80612f19576040516312171d8360e31b815260040160405180910390fd5b612f29604085016020860161634e565b612f4457612f3f612f3861268e565b8490614756565b612f46565b825b95945050505050565b6000612f648383670de0b6b3a7640000612c1b565b9392505050565b6001600160a01b0384161580612f8857506001600160a01b038316155b15612fa65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461306a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff1661306a5760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146130685760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061306290849061698f565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061309c90849061698f565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130d390849061697c565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000808080806131778887611acc8c6129de6131508d670de0b6b3a764000061698f565b7f000000000000000000000000000000000000000000000000000000000000000090612f4f565b94506131a3857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b925060006131c46131bc8a670de0b6b3a764000061698f565b8b9089612c1b565b90506131f0817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b945061321c857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9250613228838561697c565b915050945094509450945094565b60006001600160f81b038211156132605760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080600080600080600061327f88613c77565b90506132e961328c614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061553a565b9098509550935060006133576132fd614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b905061338d8589613388847f00000000000000000000000000000000000000000000000000000000000000006155bb565b6155eb565b156133ab5760405163512095c760e01b815260040160405180910390fd5b6133b481613a83565b8a8a600080806133c68588888761312c565b9b5092955090935091506133dc9050818461698f565b6133e6908b61697c565b99506133f2828461697c565b6133fc908c61697c565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613437919061698f565b815260208101919091526040016000908120546001600160801b03169150428911613479576000898152600e60205260409020546001600160801b031661347b565b895b90506134ab8b8784848e7f0000000000000000000000000000000000000000000000000000000000000000615674565b96506134b7838761698f565b95506134c987878786868660006156c6565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b031661352861153c8261350b85670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b031691908a6000615741565b600b80546001600160801b03928316600160801b02921691909117905561354e86612c39565b613558908261693f565b600a80546001600160801b03928316600160801b0292169190911790555061357f83612c39565b6008805460009061359a9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506135c7826157bb565b600980546000906135dc908490600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061360c84612c39565b6008805460109061362e908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006136857f00000000000000000000000000000000000000000000000000000000000000008561698f565b9050600060026000613698600188613236565b81526020019081526020016000205490506000600260006136ba600289613236565b81526020019081526020016000205490508160001480156136d9575080155b156136fe576000838152600e6020526040902080546001600160801b031690556137f6565b60006137428b61370e8c89612f4f565b6137199060026169d7565b8b6137248c8b612f4f565b61372e919061697c565b613738919061698f565b61153c919061697c565b905084156137a1576000848152600e602052604090208054829190601090613775908490600160801b9004600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506137f4565b6000848152600e6020526040902080548291906010906137cc908490600160801b9004600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015613812575060008212155b156138a557600061382382826157f9565b61382d9084616ac8565b60095490915061385a90613855908390600160801b90046001600160801b0316600f0b61580f565b6157bb565b6009805460109061387c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561268a576000821261391b576138be826157bb565b6138c7826157bb565b6138d19190616a9b565b600980546010906138f3908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6138d16138558260006157f9565b600061393b604083016020840161634e565b15613947575082612f64565b6139518484612f4f565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b82048116911642613ac47f00000000000000000000000000000000000000000000000000000000000000008461697c565b1115613acf57505050565b600060128281548110613ae457613ae4616966565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690613b18834261698f565b601254909150878202830190600090613b3288600161697c565b613b3c9190616a1d565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110613b7557613b75616966565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008080613bef846301e13380614756565b90506000613c0e8260008812613c0557876129de565b6129de886169bb565b90506000861315613c4157613c2c613c258261581e565b8890612f4f565b9350613c38878561698f565b925050506113a6565b6000861215613c6957613c5d613c568261581e565b8890614756565b9350613c388785616ac8565b509495600095509350505050565b600080613c8261278d565b9050808311613c92576000613c9c565b613c9c818461698f565b9150612f64827f0000000000000000000000000000000000000000000000000000000000000000614756565b600080613d12856129de85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613d08818c614756565b6129de919061698f565b9150613d3e827f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9050935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590613d955750600034115b15613db357604051631574f9f360e01b815260040160405180910390fd5b565b60008080613dc9604085016020860161634e565b613de457613ddf613dd861268e565b8690612f4f565b613de6565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613eb45747915082341015613e55576040516312171d8360e31b815260040160405180910390fd5b82341115613eaf5733613e68843461698f565b604051600081818185875af1925050503d8060008114613ea4576040519150601f19603f3d011682016040523d82523d6000602084013e613ea9565b606091505b50909150505b613fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f3c91906169a2565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613fd69190616a31565b90505b80613ff7576040516312171d8360e31b815260040160405180910390fd5b60145460000361405e5761402b837f0000000000000000000000000000000000000000000000000000000000000000614756565b601481905594507f0000000000000000000000000000000000000000000000000000000000000000935061409b92505050565b60145460009061406f908585612c1b565b90508060146000828254614083919061697c565b9091555081905061409261268e565b95509550505050505b9250929050565b6000806140b3846301e13380614756565b90506140f96140ef6140cd670de0b6b3a7640000866159a9565b6140d78885612f4f565b6140e990670de0b6b3a764000061697c565b906159be565b6129de888a612f4f565b979650505050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061413690849061697c565b90915550506000838152600260205260408120805483929061415990849061697c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612c0e565b806000036141af5750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156141fc5760405163585fe6df60e11b815260040160405180910390fd5b60006142088383616ae8565b90507f000000000000000000000000000000000000000000000000000000000000000081121561424b5760405163585fe6df60e11b815260040160405180910390fd5b61425481612c39565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126142965761428f838286612c1b565b91506142b6565b6142aa6142a2826169bb565b849086612c1b565b6142b3906169bb565b91505b6142bf826157bb565b600980546001600160801b0319166001600160801b039283161790556008546143029161153c91600160801b9004166142f88785615a15565b611acc8787615a15565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600854600954600091611890916001600160801b0390911690600f0b615a15565b600080614356878787866155aa565b90506140f961436a82866301e13380615a32565b61437c83670de0b6b3a764000061698f565b90614756565b6143df60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916144ae9116614938565b8152600a546001600160801b03600160801b9182900481166020840152600b546040909301926144e092900416614938565b905292915050565b600080614508836101400151846101200151612f4f90919063ffffffff16565b61010084015160e085015161451c91612f4f565b6145269190616ac8565b9050600061453c84600001518560200151615a15565b905060008213156145dc57600061457e8286604001518760a001518860c00151670de0b6b3a764000061456f919061698f565b89606001518a60800151615a58565b905061458a8184615af2565b905080156145d6576145c3828660400151838860c00151670de0b6b3a76400006145b4919061698f565b89606001518a60800151615b01565b855186906145d290839061698f565b9052505b50614698565b6000821215614698576145ee826169bb565b915060006146228286604001518760c00151670de0b6b3a7640000614613919061698f565b88606001518960800151615b35565b905061462e8184615af2565b9050801561467a57614667828660400151838860c00151670de0b6b3a7640000614658919061698f565b89606001518a60800151615bcb565b8551869061467690839061697c565b9052505b614684818461698f565b8551869061469390839061697c565b905250505b60006146c7856101000151670de0b6b3a76400006146b6919061698f565b606087015160e08801519190612c1b565b6146f5866101400151670de0b6b3a76400006146e3919061698f565b60608801516101208901519190612c1b565b6146ff9190616ac8565b905060008186600001516147139190616ae8565b90508560a0015181121561473a5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161474c908261698f565b9695505050505050565b6000612f6483670de0b6b3a764000084612c1b565b6000806000806147d861477c614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615c60565b925060006147e76132fd614326565b90506148188785613388847f0000000000000000000000000000000000000000000000000000000000000000615c81565b156148365760405163512095c760e01b815260040160405180910390fd5b61483f81613a83565b60008061484d89848a613cc8565b909250905061485c828761698f565b9450614868818661697c565b955061487581848a612c1b565b9350614881848a61698f565b965050505092959194509250565b60095460009081906148b190600160801b90046001600160801b031684614756565b90506148dd7f00000000000000000000000000000000000000000000000000000000000000008261697c565b6008546001600160801b03161115614932576008547f0000000000000000000000000000000000000000000000000000000000000000906149289083906001600160801b031661698f565b612f64919061698f565b50919050565b600080670de0b6b3a764000061494c61278d565b61495691906169d7565b9050808311614966576000614970565b614970818461698f565b9150612f646149a7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006169d7565b8390614756565b600a546001600160801b03166149e961153c826149d385670de0b6b3a76400006169d7565b600b546001600160801b031691908a6001615741565b600b80546001600160801b0319166001600160801b0392909216919091179055614a1287612c39565b60088054600090614a2d9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a5a85612c39565b60088054601090614a7c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614aa986612c39565b614ab39082616a4e565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90614b0f614afa8b89612f4f565b614b058b60026169d7565b61153c919061698f565b835490915081908490601090614b30908490600160801b9004600f0b616a6e565b82546001600160801b039182166101009390930a9283029190920219909116179055508254614b6d90600f84810b91600160801b9004900b613802565b614b7687615cce565b614b93576040516318846de960e01b815260040160405180910390fd5b6137f687612aaf565b600080600080614bab88614382565b90506000614bb8826144e8565b9050614bca614bc561268e565b61488f565b9450614bd7858b89612c1b565b9450614bea614be5866169bb565b6141a4565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000614c1e836144e8565b90506000614c2d8a8385612c1b565b9050614c398c8b616ac8565b614c439082616ac8565b90506000811215614c8c576000614c64614c5c836169bb565b85908d612c1b565b9050614c70818961698f565b9750614c7b816141a4565b614c86818a8e615d40565b60009150505b94509092505050955095509592505050565b6000806000614d0a614cae614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615d85565b915085614d178387612f4f565b1115614d365760405163512095c760e01b815260040160405180910390fd5b6000614d436132fd614326565b9050614d4e81613a83565b600080614d6589670de0b6b3a7640000858b61312c565b509294509250614d7991508290508361698f565b614d83908661698f565b9450614dc589614d93838861698f565b89614d9e8c82615da6565b8c7f0000000000000000000000000000000000000000000000000000000000000000615674565b95509250505093509350939050565b6000614de6604083016020840161634e565b15614df5576139518484612f4f565b5082612f64565b600a54614e469061153c90600160801b90046001600160801b0316614e2984670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b03169190886001615741565b600b80546001600160801b03928316600160801b0292169190911790556000614e6e84612c39565b600854614e8491906001600160801b031661693f565b600880546001600160801b0319166001600160801b0383161790559050614eaa85612c39565b60088054601090614ecc908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614ef985612c39565b600a8054601090614f1b908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b911612159050614f6a5760405163585fe6df60e11b815260040160405180910390fd5b6000614f7461278d565b6000818152600e6020526040902054909150600160801b9004600f0b614f9987612c39565b6000838152600e602052604090208054601090614fc1908490600160801b9004600f0b616a9b565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461500b90600f83810b91600160801b9004900b613802565b61501485615cce565b615031576040516318846de960e01b815260040160405180910390fd5b610c7a85612aaf565b600080600080600080600061504e88613c77565b90506150b861505b614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615db5565b9098509650935060006150cc6132fd614326565b90506150d781613a83565b6000806150e68d85858f61312c565b98509294509092506150fc91508390508861698f565b9650615108818361697c565b615112908a61698f565b985061511e858a61697c565b9750505050506151a285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61515b919061698f565b81526020810191909152604001600020546001600160801b0316428d116151995760008d8152600e60205260409020546001600160801b031661519b565b8d5b60016156c6565b999d939c50919a5098509695509350505050565b600a546001600160801b03166151f161153c826151db85670de0b6b3a76400006169d7565b600b546001600160801b031691908a6000615741565b600b80546001600160801b0319166001600160801b039290921691909117905561521a86612c39565b615224908261693f565b600a80546001600160801b0319166001600160801b03929092169190911790555061524e83612c39565b600880546000906152699084906001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550615296826157bb565b600980546000906152ab908490600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506152db84612c39565b600880546010906152fd908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806153655750600954600854600f9190910b6001600160801b03909116125b1561114b5760405163585fe6df60e11b815260040160405180910390fd5b6000806153908686614756565b915060006153be837f0000000000000000000000000000000000000000000000000000000000000000612f4f565b90506153ea817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9150831561540d576153fc828261698f565b615406908461698f565b9250615424565b615417828261698f565b615421908461697c565b92505b8486101561544757615437838787612c1b565b9250615444828787612c1b565b91505b5094509492505050565b6000808411615460578261546b565b61546b838686612c1b565b90508060000361547b5750610c90565b80858382111561549657839150615493878385612c1b565b90505b61549f82612c39565b600d80546000906154ba9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506154e781612c39565b600d8054601090615509908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c7a81614be5906169bb565b6000808061555b61555388670de0b6b3a764000061698f565b899087612c1b565b90506155678888612f4f565b9150811561559d5761558e8a8a846155878a670de0b6b3a764000061698f565b8989615bcb565b925061559a838261697c565b90505b9750975097945050505050565b6000612f46826140e9858888612c1b565b60006155d96155d284670de0b6b3a764000061698f565b8390615e01565b612f6490670de0b6b3a764000061698f565b600080615669856155fa614326565b615604919061697c565b600854615622908790600160801b90046001600160801b031661698f565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b909210949350505050565b60008061568d856156858887615e01565b8a9190612c1b565b905061569a888486612c1b565b6156a4908261697c565b9050868111156156bb576156b8878261698f565b91505b509695505050505050565b600080600080600080888810156157235786156156eb576156e88d898b612c1b565b9c505b6156f68c898b612c1b565b9b506157028b8d616ac8565b905061570f8b898b612c1b565b9a5061571c8a898b612c1b565b9950615730565b61572d8b8d616ac8565b90505b9b9c9a9b999a975050505050505050565b600081156157815761577a615756848761697c565b6157608587612f4f565b61576a888a612f4f565b615774919061697c565b906159a9565b9050612f46565b82850361579057506000612f46565b61474c61579d848761698f565b6157a78587612f4f565b6157b1888a612f4f565b615774919061698f565b600060016001607f1b031982128015906157dc575060016001607f1b038213155b612c5f5760405163a5353be560e01b815260040160405180910390fd5b60008183136158085781612f64565b5090919050565b60008183136149325782612f64565b6000680248ce36a70cb26b3e19821361583957506000919050565b680755bf798b4a1bf1e582126158625760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000612f6483670de0b6b3a764000084615a32565b6000816000036159d75750670de0b6b3a7640000611314565b826000036159e757506000611314565b8160006159f385615e16565b9050818102615a0a670de0b6b3a764000082616b10565b905061474c8161581e565b600080615a228385616ac8565b90506000811215612f6457600080fd5b6000826000190484118302158202615a4957600080fd5b50910281810615159190040190565b600080615a688888878787616029565b90506000615a85615a7d876140e9878b615e01565b869086615a32565b615a8f908361698f565b9050670de0b6b3a76400008110615ac357615abc615ab5670de0b6b3a764000088614756565b82906159be565b9050615adb565b615ad8615ab5670de0b6b3a7640000886159a9565b90505b615ae5888261698f565b9998505050505050505050565b60008183116149325782612f64565b600080615b12888888888888616058565b9092509050806156bb57604051637ac17d2560e01b815260040160405180910390fd5b600080615b45878787878761611a565b90506000615b70670de0b6b3a7640000615b5f8787614756565b615b69919061697c565b83906159a9565b9050670de0b6b3a76400008110615b9d57615b96615ab5670de0b6b3a7640000886159a9565b9050615bb5565b615bb2615ab5670de0b6b3a764000088614756565b90505b615bbf818861698f565b98975050505050505050565b600080615bdb888887878761611a565b9050615beb856140e9888a61698f565b96506000615c058486615bfe8b8661698f565b9190615a32565b9050670de0b6b3a76400008110615c3257615c2b615ab5670de0b6b3a7640000886159a9565b9050615c4a565b615c47615ab5670de0b6b3a764000088614756565b90505b615c5481856159a9565b9050615ae5898261698f565b60006140f9878787615c7a88670de0b6b3a764000061698f565b878761613f565b6000612f64615cad670de0b6b3a7640000615c9c81876159a9565b615ca6919061698f565b8490615e01565b615cbf90670de0b6b3a764000061697c565b670de0b6b3a764000090614756565b6000615cfa7f000000000000000000000000000000000000000000000000000000000000000083612f4f565b600954600854615d38916000916001600160801b03600160801b9092048216600f0b91615d28911687612f4f565b615d329190616ac8565b906157f9565b121592915050565b6000615d4e6129d983614382565b60008080526002602052600080516020616b5f8339815191525491925090615d7790859061697c565b905061114b85838387615451565b60006140f9878787615d9f88670de0b6b3a764000061698f565b8787615b01565b60008183116158085781612f64565b60008080615dce61555388670de0b6b3a764000061698f565b9050861561559d57615de08888612f4f565b915061558e8a8a84615dfa8a670de0b6b3a764000061698f565b8989615b01565b6000612f648383670de0b6b3a7640000615a32565b6000808213615e3857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600061603585856159be565b61604e616046866140e9868b612f4f565b859085612c1b565b61474c919061697c565b600080600061606a898988888861611a565b905061607a866140e9898b61697c565b97508781101561609157600080925092505061610f565b60006160a28587615bfe8c8661698f565b9050670de0b6b3a764000081106160cf576160c8615ab5670de0b6b3a7640000896159a9565b90506160e7565b6160e4615ab5670de0b6b3a764000089614756565b90505b6160f181866159a9565b9050808a111561610857616105818b61698f565b93505b6001925050505b965096945050505050565b600061612685856159be565b61604e616137866140e9868b615e01565b859085615a32565b60008061614f888887878761611a565b9050616162856140e9613dd8898c61697c565b975061616f848985612c1b565b9750600061617d898361698f565b9050670de0b6b3a764000081106161aa576161a3615ab5670de0b6b3a7640000886159a9565b90506161c2565b6161bf615ab5670de0b6b3a764000088614756565b90505b615ae5818961698f565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561620b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561624d5761624d616213565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561627c5761627c616213565b604052919050565b6000602080838503121561629757600080fd5b825167ffffffffffffffff808211156162af57600080fd5b818501915085601f8301126162c357600080fd5b8151818111156162d5576162d5616213565b6162e7601f8201601f19168501616253565b915080825286848285010111156162fd57600080fd5b60005b8181101561631b578381018501518382018601528401616300565b50600090820190930192909252509392505050565b801515811461115b57600080fd5b803561634981616330565b919050565b60006020828403121561636057600080fd5b8135612f6481616330565b60006060828403121561493257600080fd5b60008060006060848603121561639257600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156163b757600080fd5b6163c38682870161636b565b9150509250925092565b80356001600160a01b038116811461634957600080fd5b60008083601f8401126163f657600080fd5b50813567ffffffffffffffff81111561640e57600080fd5b6020830191508360208260051b850101111561409b57600080fd5b6000806000806000806080878903121561644257600080fd5b61644b876163cd565b9550616459602088016163cd565b9450604087013567ffffffffffffffff8082111561647657600080fd5b6164828a838b016163e4565b9096509450606089013591508082111561649b57600080fd5b506164a889828a016163e4565b979a9699509497509295939492505050565b600080600080608085870312156164d057600080fd5b843593506164e0602086016163cd565b92506164ee604086016163cd565b9396929550929360600135925050565b6000806000806080858703121561651457600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561654657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561657257600080fd5b61657e8782880161636b565b91505092959194509250565b60006020828403121561659c57600080fd5b813567ffffffffffffffff8111156165b357600080fd5b6139518482850161636b565b6000602082840312156165d157600080fd5b5035919050565b600080600080608085870312156165ee57600080fd5b843593506165fe602086016163cd565b925060408501359150616613606086016163cd565b905092959194509250565b6000806040838503121561663157600080fd5b50508035926020909101359150565b80356001600160801b038116811461634957600080fd5b6000806040838503121561666a57600080fd5b61667383616640565b915061668160208401616640565b90509250929050565b6000806040838503121561669d57600080fd5b6166a6836163cd565b915060208301356166b681616330565b809150509250929050565b6000806000606084860312156166d657600080fd5b505081359360208301359350604090920135919050565b8035600f81900b811461634957600080fd5b6000610140828403121561671257600080fd5b61671a616229565b61672383616640565b815261673160208401616640565b6020820152616742604084016166ed565b604082015261675360608401616640565b606082015261676460808401616640565b608082015261677560a08401616640565b60a082015261678660c08401616640565b60c082015261679760e08401616640565b60e08201526101006167aa81850161633e565b908201526101206167bc84820161633e565b908201529392505050565b600080600080600080600060e0888a0312156167e257600080fd5b6167eb886163cd565b96506167f9602089016163cd565b9550604088013561680981616330565b945060608801359350608088013560ff8116811461682657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561685857600080fd5b83359250616868602085016163cd565b9150604084013590509250925092565b60006020828403121561688a57600080fd5b612f64826163cd565b6000602082840312156168a557600080fd5b612f6482616640565b600080600080600060a086880312156168c657600080fd5b853594506168d6602087016163cd565b93506168e4604087016163cd565b9250606086013591506168f9608087016163cd565b90509295509295909350565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b0382811682821603908082111561695f5761695f616929565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561131457611314616929565b8181038181111561131457611314616929565b6000602082840312156169b457600080fd5b5051919050565b6000600160ff1b82016169d0576169d0616929565b5060000390565b808202811582820484141761131457611314616929565b600060018201616a0057616a00616929565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082616a2c57616a2c616a07565b500690565b600060208284031215616a4357600080fd5b8151612f6481616330565b6001600160801b0381811683821601908082111561695f5761695f616929565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131457611314616929565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561131457611314616929565b818103600083128015838313168383128216171561695f5761695f616929565b8082018281126000831280158216821582161715616b0857616b08616929565b505092915050565b600082616b1f57616b1f616a07565b600160ff1b821460001984141615616b3957616b39616929565b50059056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220eda965e5fa99de157c3ca2b64570a81df567b9870f13771fa1c82b816774af0664736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a2646970667358221220c376f9eb0ff3d4b00ac80b280f5f92106c268d9af55f674c9391465110c12f1164736f6c63430008130033",
    "sourceMap": "650:6241:154:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1773:1696:164;;;:::i;:::-;;2545:198:161;;;;;;:::i;:::-;;:::i;:::-;;;845:25:167;;;833:2;818:18;2545:198:161;;;;;;;;731:2189:154;;;:::i;2170:134:63:-;;;:::i;:::-;;;;;;;:::i;2749:417:161:-;;;;;;:::i;:::-;;:::i;2939:133:63:-;;;:::i;2640:141::-;;;:::i;2321:218:161:-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;3749:32:167;;;3731:51;;3719:2;3704:18;2321:218:161;3585:203:167;5390:189:154;;;:::i;2456:178:63:-;;;:::i;:::-;;;;;;;:::i;2926:2195:154:-;;;:::i;2310:140:63:-;;;:::i;:::-;;;;;;;:::i;2787:146::-;;;:::i;3830:2306:161:-;;;;;;:::i;:::-;;:::i;1875:141:63:-;;;:::i;1819:584:56:-;;;:::i;:::-;;;7191:14:167;;7184:22;7166:41;;7154:2;7139:18;1819:584:56;7026:187:167;5585:1304:154;;;:::i;2022:142:63:-;;;:::i;1572:26:56:-;;;;;;;;;1773:1696:164;1824:13;:11;:13::i;:::-;1861:5;;1847:20;;-1:-1:-1;;;1847:20:164;;-1:-1:-1;;;;;1861:5:164;;;1847:20;;;3731:51:167;-1:-1:-1;;;;;;;;;;;1847:13:164;;;3704:18:167;;1847:20:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1963:2;1975:1;1979:5;1929:56;;;;;:::i;:::-;7606:3:167;7588:22;;;7647:1;7626:19;;;7619:30;;;-1:-1:-1;;;7680:3:167;7665:19;;7658:35;7731:3;7724:4;7709:20;;7702:33;;;7751:19;;7744:30;-1:-1:-1;;;7805:3:167;7790:19;;7783:35;7902:4;7890:17;;;7885:2;7870:18;;7863:45;-1:-1:-1;;;;;7944:32:167;;;-1:-1:-1;7924:18:167;;7917:60;8021:14;8014:22;-1:-1:-1;7993:19:167;;7986:51;7850:3;7835:19;1929:56:164;;;;;;;;;;;;;;;;;;;;;;;1917:9;;:68;;;;;-1:-1:-1;;;;;1917:68:164;;;;;-1:-1:-1;;;;;1917:68:164;;;;;;1995:28;2026:98;;;;;;;;2064:1;2026:98;;;;2085:1;2026:98;;;;2112:1;2026:98;;;1995:129;;2169:11;2183:7;2169:21;;2200:36;2239:603;;;;;;;;2302:9;;;;;;;;;-1:-1:-1;;;;;2302:9:164;-1:-1:-1;;;;;2239:603:164;;;;;565:4:33;2239:603:164;;;;565:4:33;2239:603:164;;;;1542:8;2239:603;;;;1662:8;2239:603;;;;1604:6;2239:603;;;;2618:41;2655:3;2618:36;:41::i;:::-;2239:603;;2685:10;;-1:-1:-1;;;;;2685:10:164;;;2239:603;;;;2723:12;;;2239:603;;;;;;;;;;;;;;1716:1;2239:603;;;;1762:4;2239:603;;;;;;;;2883:38;2200:642;;-1:-1:-1;2685:10:164;;2200:642;;2883:38;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2852:70;;2997:6;3005:12;2978:40;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2932:10;;:97;;;;;-1:-1:-1;;;;;2932:97:164;;;;;-1:-1:-1;;;;;2932:97:164;;;;;;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;3039:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:10:164;;;3063:25;;-1:-1:-1;;;3063:25:164;;-1:-1:-1;;;;;3077:10:164;;;3063:25;;;3731:51:167;-1:-1:-1;;;;;;;;;;;3063:13:164;-1:-1:-1;3063:13:164;;-1:-1:-1;3704:18:167;3063:25:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3098:10:164;;3119:6;;3098:34;;-1:-1:-1;;;3098:34:164;;-1:-1:-1;;;;;3119:6:164;;;3098:34;;;9991:51:167;3098:10:164;10058:18:167;;;10051:50;3098:10:164;;;-1:-1:-1;3098:20:164;;-1:-1:-1;9964:18:167;;3098:34:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3398:8:164;;;;;-1:-1:-1;3393:70:164;;-1:-1:-1;3393:70:164;-1:-1:-1;;;;;;;;;;;3422:7:164;3430:21;1662:8;3450:1;3430:21;:::i;:::-;3422:30;;;;;;;;;;;;;845:25:167;;833:2;818:18;;699:177;3422:30:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3393:70;1814:1655;;;;1773:1696::o;2545:198:161:-;2709:22;;-1:-1:-1;;;2709:22:161;;-1:-1:-1;;;;;3749:32:167;;;2709:22:161;;;3731:51:167;2655:7:161;;2681:55;;2695:5;;2702;;2709:15;;;;;3704:18:167;;2709:22:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2733:2;2681:13;:55::i;:::-;2674:62;2545:198;-1:-1:-1;;;;2545:198:161:o;731:2189:154:-;936:5;;798:7;;901:14;;925:36;;-1:-1:-1;;;;;936:5:154;798:7;901:14;925:10;:36::i;:::-;-1:-1:-1;1158:3:154;;1014:5;;1056:15;;993:18;;;;1136:59;;-1:-1:-1;;;;;1158:3:154;1014:5;1136:8;:59::i;:::-;1081:114;;;;1267:12;1281:21;1342:10;;;;;;;;;-1:-1:-1;;;;;1342:10:154;-1:-1:-1;;;;;1306:72:154;;:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1266:114;;;;1390:17;1399:4;1405:1;1390:8;:17::i;:::-;1417:41;1426:13;1441:16;1417:8;:41::i;:::-;1625:3;;1547:26;;;;1603:59;;-1:-1:-1;;;;;1625:3:154;1642:10;1603:8;:59::i;:::-;1720:10;;1697:65;;;-1:-1:-1;;;1697:65:154;;;;1546:116;;-1:-1:-1;1546:116:154;;-1:-1:-1;;;;;;1720:10:154;;;;1697:63;;:65;;;;;;;;;;;;1720:10;1697:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1673:89;;-1:-1:-1;1673:89:154;-1:-1:-1;1772:17:154;1673:89;1787:1;1772:8;:17::i;:::-;1799:41;1808:13;1823:16;1799:8;:41::i;:::-;1875:36;1762:4:164;1906:3:154;1875:11;:36::i;:::-;2016:3;;1982:15;;-1:-1:-1;2007:25:154;;-1:-1:-1;;;;;2016:3:154;2021:10;2007:8;:25::i;:::-;-1:-1:-1;;2089:10:154;;2066:65;;;-1:-1:-1;;;2066:65:154;;;;-1:-1:-1;;;;;2089:10:154;;;;2066:63;;:65;;;;;;;;;;;;;2089:10;2066:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2042:89;;-1:-1:-1;2042:89:154;-1:-1:-1;2141:17:154;2042:89;2156:1;2141:8;:17::i;:::-;2168:41;2177:13;2192:16;2168:8;:41::i;:::-;2303:3;;2293:50;;-1:-1:-1;;;;;2303:3:154;2308:17;2327:15;2293:9;:50::i;:::-;-1:-1:-1;2400:10:154;;2377:65;;;-1:-1:-1;;;2377:65:154;;;;-1:-1:-1;;;;;2400:10:154;;;;2377:63;;:65;;;;;;;;;;;;;2400:10;2377:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2353:89;;-1:-1:-1;2353:89:154;-1:-1:-1;2452:17:154;2353:89;2467:1;2452:8;:17::i;:::-;2479:41;2488:13;2503:16;2479:8;:41::i;:::-;2594:36;1762:4:164;2625:3:154;2594:11;:36::i;:::-;2694:3;;2659:15;;-1:-1:-1;2684:52:154;;-1:-1:-1;;;;;2694:3:154;2699:18;2719:16;2684:9;:52::i;:::-;-1:-1:-1;2793:10:154;;2770:65;;;-1:-1:-1;;;2770:65:154;;;;-1:-1:-1;;;;;2793:10:154;;;;2770:63;;:65;;;;;;;;;;;;;2793:10;2770:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2746:89;;-1:-1:-1;2746:89:154;-1:-1:-1;2845:17:154;2746:89;2860:1;2845:8;:17::i;:::-;2872:41;2881:13;2896:16;2872:8;:41::i;:::-;774:2146;;;;;;;;;;731:2189::o;2170:134:63:-;2217:33;2281:16;2262:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2262:35:63;;;;;;;;;;;;;;;;;;;;;;;2170:134;:::o;2749:417:161:-;2925:22;;-1:-1:-1;;;2925:22:161;;-1:-1:-1;;;;;3749:32:167;;;2925:22:161;;;3731:51:167;2883:7:161;;;;2925:15;;;;;3704:18:167;;2925:22:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2902:45;;2970:12;2961:6;:21;2957:56;;;2991:22;;-1:-1:-1;;;2991:22:161;;;;;;;;;;;2957:56;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;3023:12:161;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3047:20:161;;-1:-1:-1;;;3047:20:161;;-1:-1:-1;;;;;3749:32:167;;3047:20:161;;;3731:51:167;-1:-1:-1;;;;;;;;;;;3047:13:161;-1:-1:-1;3047:13:161;;-1:-1:-1;3704:18:167;;3047:20:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:23:161;;-1:-1:-1;;;3077:23:161;;-1:-1:-1;;;;;11074:32:167;;3077:23:161;;;11056:51:167;3092:7:161;11123:18:167;;;11116:34;-1:-1:-1;;;;;;;;;;;3077:7:161;-1:-1:-1;3077:7:161;;-1:-1:-1;11029:18:167;;3077:23:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3110:26:161;;-1:-1:-1;;;3110:26:161;;-1:-1:-1;;;;;11074:32:167;;;3110:26:161;;;11056:51:167;11123:18;;;11116:34;;;3110:14:161;;;-1:-1:-1;3110:14:161;;-1:-1:-1;11029:18:167;;3110:26:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;3153:6:161;;2749:417;-1:-1:-1;;;;;2749:417:161:o;2939:133:63:-;2985:33;3049:16;3030:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3030:35:63;;;;;;;;;;;;;;;;;;;;;;2939:133;:::o;2640:141::-;2688:35;2756:18;2735:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2735:39:63;;;;;;;;;;;;;;;;;;;;;;2640:141;:::o;2321:218:161:-;2377:13;2455:4;2444:16;;;;;;;;:::i;:::-;;;;-1:-1:-1;;2444:16:161;;;;;;;;;;2434:27;;2444:16;2434:27;;;;-1:-1:-1;;;2474:21:161;;2434:27;-1:-1:-1;;;;;;;;;;;;2474:8:161;;;:21;;2434:27;;2490:4;;2474:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2505:27:161;;-1:-1:-1;;;2505:27:161;;-1:-1:-1;;;;;11074:32:167;;2505:27:161;;;11056:51:167;2520:11:161;11123:18:167;;;11116:34;-1:-1:-1;;;;;;;;;;;2505:7:161;-1:-1:-1;2505:7:161;;-1:-1:-1;11029:18:167;;2505:27:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:218;;;:::o;5390:189:154:-;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;5446:15:154;;:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5504:10:154;;-1:-1:-1;;;;;5504:10:154;;-1:-1:-1;5473:49:154;;-1:-1:-1;5536:26:154;:15;5554:8;5536:26;:::i;:::-;5473:99;;;;;;;;;;;;;845:25:167;;833:2;818:18;;699:177;5473:99:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5390:189::o;2456:178:63:-;2512:48;2601:26;2572:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:178;:::o;2926:2195:154:-;3132:5;;2994:7;;3097:14;;3121:36;;-1:-1:-1;;;;;3132:5:154;2994:7;3097:14;3121:10;:36::i;:::-;-1:-1:-1;3355:3:154;;3210:5;;3252:15;;3189:18;;;;3332:60;;-1:-1:-1;;;;;3355:3:154;3210:5;3332:9;:60::i;:::-;3277:115;;;;3464:12;3478:21;3539:10;;;;;;;;;-1:-1:-1;;;;;3539:10:154;-1:-1:-1;;;;;3503:72:154;;:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3463:114;;;;3587:17;3596:4;3602:1;3587:8;:17::i;:::-;3614:41;3623:13;3638:16;3614:8;:41::i;:::-;3823:3;;3744:26;;;;3800:60;;-1:-1:-1;;;;;3823:3:154;3840:10;3800:9;:60::i;:::-;3918:10;;3895:65;;;-1:-1:-1;;;3895:65:154;;;;3743:117;;-1:-1:-1;3743:117:154;;-1:-1:-1;;;;;;3918:10:154;;;;3895:63;;:65;;;;;;;;;;;;3918:10;3895:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3871:89;;-1:-1:-1;3871:89:154;-1:-1:-1;3970:17:154;3871:89;3985:1;3970:8;:17::i;:::-;3997:41;4006:13;4021:16;3997:8;:41::i;:::-;4073:36;1762:4:164;4104:3:154;4073:11;:36::i;:::-;4215:3;;4180:15;;-1:-1:-1;4205:26:154;;-1:-1:-1;;;;;4215:3:154;4220:10;4205:9;:26::i;:::-;-1:-1:-1;;4288:10:154;;4265:65;;;-1:-1:-1;;;4265:65:154;;;;-1:-1:-1;;;;;4288:10:154;;;;4265:63;;:65;;;;;;;;;;;;;4288:10;4265:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4241:89;;-1:-1:-1;4241:89:154;-1:-1:-1;4340:17:154;4241:89;4355:1;4340:8;:17::i;:::-;4367:41;4376:13;4391:16;4367:8;:41::i;:::-;4503:3;;4492:51;;-1:-1:-1;;;;;4503:3:154;4508:17;4527:15;4492:10;:51::i;:::-;-1:-1:-1;4600:10:154;;4577:65;;;-1:-1:-1;;;4577:65:154;;;;-1:-1:-1;;;;;4600:10:154;;;;4577:63;;:65;;;;;;;;;;;;;4600:10;4577:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4553:89;;-1:-1:-1;4553:89:154;-1:-1:-1;4652:17:154;4553:89;4667:1;4652:8;:17::i;:::-;4679:41;4688:13;4703:16;4679:8;:41::i;:::-;4794:36;1762:4:164;4825:3:154;4794:11;:36::i;:::-;4895:3;;4859:15;;-1:-1:-1;4884:53:154;;-1:-1:-1;;;;;4895:3:154;4900:18;4920:16;4884:10;:53::i;2310:140:63:-;2358:34;2425:18;2404:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2787:146;2835:40;2908:18;2887:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3830:2306:161;3955:18;3976:11;;;;;3998:335;;4031:138;4075:6;4059:12;:22;;4031:138;;;;;;;;;;;;;;;;;:10;:138::i;:::-;3998:335;;;4200:122;4237:12;4228:6;:21;4200:122;;;;;;;;;;;;;;;;;:10;:122::i;:::-;4343:18;4364:13;:49;;4407:6;4364:49;;;4380:24;4397:6;4380;:24;:::i;:::-;4343:70;;4423:18;4445:13;4444:14;:75;;4513:6;4444:75;;;4490:7;4491:6;4490:7;:::i;:::-;4473:25;;:6;:25;:::i;:::-;4423:96;;4597:10;4582:12;:25;:54;;;;4626:10;4611:12;:25;4582:54;4578:233;;;4652:57;4661:12;4675:10;4652:57;;;;;;;;;;;;;-1:-1:-1;;;4652:57:161;;;:8;:57::i;:::-;4723;4732:12;4746:10;4723:57;;;;;;;;;;;;;-1:-1:-1;;;4723:57:161;;;:8;:57::i;:::-;4794:7;;;3830:2306;;;:::o;4578:233::-;4908:13;4904:1226;;;4937:21;4961;4976:6;4961:12;:21;:::i;:::-;4937:45;;5024:6;5000:13;:31;4996:516;;;5051:133;;;;;;;;;;;;;;;;;;;5135:31;5153:13;5143:6;5135:31;:::i;:::-;5051:12;:133::i;:::-;5202:37;;;;;;;;;;;;;;-1:-1:-1;;;5202:37:161;;;5232:6;5202:12;:37::i;:::-;5257:44;;;;;;;;;;;;;;-1:-1:-1;;;5257:44:161;;;5287:13;5257:12;:44::i;:::-;4996:516;;;5340:157;5370:10;5402:12;5340:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;4923:599;4904:1226;;;5542:21;5566;5575:12;5566:6;:21;:::i;:::-;5542:45;-1:-1:-1;5629:7:161;5630:6;5629:7;:::i;:::-;5605:13;:32;5601:519;;;5657:134;;;;;;;;;;;;;;;;;;5760:13;5750:6;5749:7;;;:::i;:::-;5741:32;;;;:::i;5657:134::-;5809:37;;;;;;;;;;;;;;-1:-1:-1;;;5809:37:161;;;5839:6;5809:12;:37::i;:::-;5864:45;;;;;;;;;;;;;;-1:-1:-1;;;5864:45:161;;;5895:13;5864:12;:45::i;:::-;5601:519;;;5948:157;5978:10;6010:12;5948:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;5528:602;3945:2191;;;3830:2306;;;:::o;1875:141:63:-;1924:34;1991:18;1970:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1819:584:56;1873:7;;1853:4;;1873:7;;;;;1869:528;;;-1:-1:-1;1903:7:56;;;;;;;;1819:584::o;1869:528::-;1941:17;-1:-1:-1;;;;;;;;;;;2985:55:56;3066:16;1980:374;;2196:43;;;-1:-1:-1;;;;;;;;;;;2196:43:56;;;11056:51:167;;;-1:-1:-1;;;11123:18:167;;;11116:34;2196:43:56;;;;;;;;;11029:18:167;;;2196:43:56;;;-1:-1:-1;;1671:64:56;;2086:175;;2135:34;;2086:175;;;:::i;:::-;;;;-1:-1:-1;;2086:175:56;;;;;;;;;;2047:232;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2020:259;;;2323:7;2312:27;;;;;;;;;;;;:::i;:::-;2297:42;;2002:352;1980:374;2374:12;1819:584;-1:-1:-1;1819:584:56:o;5585:1304:154:-;5712:24;:22;:24::i;:::-;5746:25;5774:28;1762:4:164;5774:15:154;:28;:::i;:::-;5888:10;;5852:74;;;-1:-1:-1;;;5852:74:154;;;;5746:56;;-1:-1:-1;5813:12:154;;;;-1:-1:-1;;;;;5888:10:154;;5852:72;;:74;;;;;;;;;;;5888:10;5852:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5812:114;;-1:-1:-1;5812:114:154;-1:-1:-1;5936:32:154;5812:114;5951:16;1716:1:164;5951:2:154;:16;:::i;:::-;5936:8;:32::i;:::-;5978:42;5987:13;6002:17;5978:8;:42::i;:::-;6117:17;6161:1;6144:243;6164:1;6169;6164:6;6144:243;;6252:10;;6229:79;;-1:-1:-1;;;6229:79:154;;;;;845:25:167;;;6213:12:154;;-1:-1:-1;;;;;6252:10:154;;6229:46;;818:18:167;;6229:79:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6210:98;;;6322:21;6331:4;6337:5;6322:8;:21::i;:::-;6357:19;1762:4:164;6357:19:154;;:::i;:::-;;-1:-1:-1;;6176:6:154;;:18;;6189:5;6193:1;6189;:5;:::i;:::-;6176:18;;;6185:1;6176:18;6172:22;;6144:243;;;-1:-1:-1;6467:14:154;6484;6497:1;1762:4:164;6484:14:154;:::i;:::-;6467:31;-1:-1:-1;6528:2:154;;6508:17;6574:309;6598:15;6612:1;1716::164;6598:15:154;:::i;:::-;6594:1;:19;6574:309;;;6679:10;;6648:87;;-1:-1:-1;;;6648:87:154;;;;;845:25:167;;;6634:11:154;;-1:-1:-1;;;;;6679:10:154;;6648:49;;818:18:167;;6648:87:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6634:101;-1:-1:-1;6749:58:154;6634:101;6805:1;6783:18;:11;6797:4;6783:18;:::i;:::-;6764:16;:9;6776:4;6764:16;:::i;:::-;:37;;;;:::i;:::-;6763:43;;;;:::i;6749:58::-;6822:16;6837:1;6822:16;;:::i;:::-;;-1:-1:-1;6852:20:154;1762:4:164;6852:20:154;;:::i;:::-;;;6620:263;6615:3;;;;;:::i;:::-;;;;6574:309;;2022:142:63;2071:35;2139:18;2118:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2118:39:63;;;;;;;;;;;;;;;;;;;;;;2022:142;:::o;1380:471:161:-;1430:19;;;;;;;;;;;;;;-1:-1:-1;;;1430:19:161;;;:10;:19::i;:::-;1422:5;:27;;-1:-1:-1;;;;;;1422:27:161;-1:-1:-1;;;;;1422:27:161;;;;;;;;;;1465:17;;;;;;;;;;;;-1:-1:-1;;;1465:17:161;;;;;;:10;:17::i;:::-;1459:3;:23;;-1:-1:-1;;;;;;1459:23:161;-1:-1:-1;;;;;1459:23:161;;;;;;;;;;1501:20;;;;;;;;;;;;-1:-1:-1;;;1501:20:161;;;;;;:10;:20::i;:::-;1492:6;:29;;-1:-1:-1;;;;;;1492:29:161;-1:-1:-1;;;;;1492:29:161;;;;;;;;;;1537:17;;;;;;;;;;;;-1:-1:-1;;;1537:17:161;;;;;;:10;:17::i;:::-;1531:3;:23;;-1:-1:-1;;;;;;1531:23:161;-1:-1:-1;;;;;1531:23:161;;;;;;;;;;1570:17;;;;;;;;;;;;-1:-1:-1;;;1570:17:161;;;;;;:10;:17::i;:::-;1564:3;;:23;;;;;-1:-1:-1;;;;;1564:23:161;;;;;-1:-1:-1;;;;;1564:23:161;;;;;;1609:22;;;;;;;;;;;;;;-1:-1:-1;;;1609:22:161;;;:10;:22::i;:::-;1598:8;:33;;-1:-1:-1;;;;;;1598:33:161;-1:-1:-1;;;;;1598:33:161;;;;;;;;;;1650:20;;;;;;;;;;;;-1:-1:-1;;;1650:20:161;;;;;;:10;:20::i;:::-;1641:6;:29;;-1:-1:-1;;;;;;1641:29:161;-1:-1:-1;;;;;1641:29:161;;;;;;;;;;1695:26;;;;;;;;;;;;-1:-1:-1;;;1695:26:161;;;;;;:10;:26::i;:::-;1680:12;:41;;-1:-1:-1;;;;;;1680:41:161;-1:-1:-1;;;;;1680:41:161;;;;;;;;;;1744:24;;;;;;;;;;;;-1:-1:-1;;;1744:24:161;;;;;;:10;:24::i;:::-;1731:10;:37;;-1:-1:-1;;;;;;1731:37:161;-1:-1:-1;;;;;1731:37:161;;;;;;;;;;1787:20;;;;;;;;;;;;-1:-1:-1;;;1787:20:161;;;;;;:10;:20::i;:::-;1778:6;:29;;-1:-1:-1;;;;;;1778:29:161;-1:-1:-1;;;;;1778:29:161;;;;;;;;;;1829:15;1818:8;:26;1380:471::o;5965:262:165:-;6031:7;;6072:89;6113:38;6141:9;:3;6147;6141:9;:::i;:::-;6121:10;;6113:27;:38::i;:::-;6080:10;;6072:27;:89::i;:::-;6050:111;-1:-1:-1;6178:42:165;565:4:33;6050:111:165;6178:29;:42::i;:::-;6171:49;5965:262;-1:-1:-1;;;5965:262:165:o;9122:612:164:-;9237:16;9284:443;9312:2;9332:3;9353:12;9383:330;;;;;;;;9430:4;9383:330;;;;;;9471:12;9383:330;;;;9520:1;9383:330;;;;9566:1;9383:330;;;;-1:-1:-1;;9383:330:164;;;;9682:1;9672:12;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;9672:12:164;-1:-1:-1;9383:330:164;;9284:10;:443::i;17761:640::-;17855:20;17877:18;17926:468;17952:6;17976:10;18004:376;;;;;;;;18051:4;18004:376;;;;;;18092:10;18004:376;;;;18139:1;18004:376;;;;18199:10;18004:376;;;;-1:-1:-1;;18004:376:164;;;;18349:1;18339:12;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;18339:12:164;-1:-1:-1;18004:376:164;;17926:8;:468::i;:::-;17907:487;;;;17761:640;;;;;:::o;5209:262:56:-;5271:1;5266;:6;5262:203;;-1:-1:-1;;;;;;;;;;;5293:41:56;;;;15043:2:167;15025:21;;;15082:2;15062:18;;;15055:30;15121:34;15116:2;15101:18;;15094:62;-1:-1:-1;;;15187:2:167;15172:18;;15165:32;15229:3;15214:19;;14841:398;5293:41:56;;;;;;;;5353:31;;;15456:21:167;;;15513:2;15493:18;;;15486:30;-1:-1:-1;;;15547:2:167;15532:18;;15525:40;15632:4;15617:20;;15610:36;;;5353:31:56;;-1:-1:-1;;;;;;;;;;;5353:31:56;;;;15597:3:167;5353:31:56;;;5403;;;15869:21:167;;;15926:2;15906:18;;;15899:30;;;;-1:-1:-1;;;15960:2:167;15945:18;;15938:40;16045:4;16030:20;;16023:36;;;-1:-1:-1;;;;;;;;;;;5403:31:56;16010:3:167;15995:19;5403:31:56;;;;;;;;5448:6;:4;:6::i;:::-;5209:262;;:::o;25404:175:164:-;25501:10;;25478:53;;-1:-1:-1;;;25478:53:164;;;;;16242:25:167;;;16283:18;;;16276:34;;;-1:-1:-1;;;;;25501:10:164;;;;25478:42;;16215:18:167;;25478:53:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;25541:7:164;-1:-1:-1;25541:7:164;;-1:-1:-1;25549:22:164;;-1:-1:-1;25567:4:164;25549:15;:22;:::i;:::-;25541:31;;;;;;;;;;;;;845:25:167;;833:2;818:18;;699:177;25541:31:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19740:494;19865:18;19914:313;19941:6;19965:12;19995:10;20023:190;;;;;;;;20073:4;20023:190;;;;;;20112:1;20023:190;;;;20182:1;20172:12;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;20172:12:164;-1:-1:-1;20023:190:164;;19914:9;:313::i;22406:625::-;22501:20;22523:18;22572:452;22599:6;22623:10;22651:359;;;;;;;;22698:4;22651:359;;;;;;22739:10;22651:359;;;;22786:1;22651:359;;;;22846:1;22651:359;;;;22892:10;22651:359;;;;22979:1;22969:12;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;22969:12:164;-1:-1:-1;22651:359:164;;22572:9;:452::i;24358:496::-;24484:18;24533:314;24561:6;24585:12;24615:10;24643:190;;;;;;;;24693:4;24643:190;;;;;;24732:1;24643:190;;;;24802:1;24792:12;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;24792:12:164;-1:-1:-1;24643:190:164;;24533:10;:314::i;3425:191:56:-;3504:9;3499:111;;-1:-1:-1;;;;;;;;;;;3560:3:56;3534:30;;;;;;:::i;:::-;;;;;;;;3578:21;3589:9;3578:10;:21::i;12219:177::-;12299:1;12295;:5;12291:99;;;-1:-1:-1;;;;;;;;;;;12347:3:56;12321:30;;;;;;:::i;:::-;;;;;;;;12365:14;12374:1;12377;12365:8;:14::i;:::-;12219:177;;;:::o;16185:::-;16265:1;16261;:5;16257:99;;;-1:-1:-1;;;;;;;;;;;16313:3:56;16287:30;;;;;;:::i;:::-;;;;;;;;16331:14;16340:1;16343;16331:8;:14::i;7546:145:72:-;7613:71;7676:2;7680;7629:54;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7629:54:72;;;;;;;;;;;;;;-1:-1:-1;;;;;7629:54:72;-1:-1:-1;;;7629:54:72;;;7613:15;:71::i;7697:143::-;7763:70;7825:2;7829;7779:53;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7779:53:72;;;;;;;;;;;;;;-1:-1:-1;;;;;7779:53:72;-1:-1:-1;;;7779:53:72;;;7763:15;:70::i;5476:178:56:-;5557:1;5552;:6;5548:100;;-1:-1:-1;;;;;;;;;;;5605:3:56;5579:30;;;;;;:::i;:::-;;;;;;;;5623:14;5632:1;5635;5623:8;:14::i;5127:257:154:-;5194:7;5228:1;5211:167;5236:2;5231:1;:7;5211:167;;5282:10;;-1:-1:-1;;;;;5282:10:154;5259:48;5308:8;:1;5312:4;5308:8;:::i;:::-;5259:58;;;;;;;;;;;;;845:25:167;;833:2;818:18;;699:177;5259:58:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5331:36;1762:4:164;5362:3:154;5331:11;:36::i;:::-;5240:3;;;;:::i;:::-;;;;5211:167;;1814:119:33;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;:::-;1895:31;;1814:119;;;;;:::o;2207:165::-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;7833:1283:164:-;7991:16;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;8019:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8043:17:164;;-1:-1:-1;;;8043:17:164;;-1:-1:-1;;;;;3749:32:167;;8043:17:164;;;3731:51:167;-1:-1:-1;;;;;;;;;;;8043:13:164;-1:-1:-1;8043:13:164;;-1:-1:-1;3704:18:167;;8043:17:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8128:10:164;;:26;;;-1:-1:-1;;;8128:26:164;;;;87:42:163;;-1:-1:-1;;;;;;8128:10:164;;;;-1:-1:-1;8128:24:164;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;8120:61:164;;:93;;;;-1:-1:-1;8197:16:164;;8120:93;8103:1007;;;8261:10;;8291:23;;;;;8397:190;;;;;;;;-1:-1:-1;;;;;8397:190:164;;;;;8492:16;;8397:190;;;;;;;;;8545:19;;;;8397:190;;;;8261:344;;-1:-1:-1;;;8261:344:164;;:10;;;;;:21;;:344;;8338:12;;8372:3;;8397:190;8261:344;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8238:367;;;;8103:1007;8636:9;;8651:23;;;;8636:39;;-1:-1:-1;;;8636:39:164;;;;;845:25:167;;;;8636:9:164;;;;-1:-1:-1;;;;;8636:9:164;;:14;;818:18:167;;8636:39:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8689:9:164;;8715:10;;8728:23;;;;8689:63;;-1:-1:-1;;;8689:63:164;;-1:-1:-1;;;;;8715:10:164;;;8689:63;;;11056:51:167;11123:18;;;11116:34;;;;8689:9:164;;;;;;-1:-1:-1;8689:17:164;;-1:-1:-1;11029:18:167;;8689:63:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;8789:10:164;;8891:190;;;;;;;;-1:-1:-1;;;;;8891:190:164;;;;;8986:16;;8891:190;;;;;;9039:19;;;;8891:190;;;;8789:310;;-1:-1:-1;;;8789:310:164;;:10;;;;;:21;;:310;;8832:12;;8866:3;;8891:190;8789:310;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;16327:1428::-;16464:20;16486;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;16518:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;16542:21:164;;-1:-1:-1;;;16542:21:164;;-1:-1:-1;;;;;3749:32:167;;16542:21:164;;;3731:51:167;-1:-1:-1;;;;;;;;;;;16542:13:164;-1:-1:-1;16542:13:164;;-1:-1:-1;3704:18:167;;16542:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;16625:10:164;;:26;;;-1:-1:-1;;;16625:26:164;;;;87:42:163;;-1:-1:-1;;;;;;16625:10:164;;;;-1:-1:-1;16625:24:164;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;16617:61:164;;:93;;;;-1:-1:-1;16694:16:164;;16617:93;16600:1149;;;16758:10;;16786:23;;;;;16865:21;;;;;16929:23;;;;;16974:194;;;;;;;-1:-1:-1;;;;;16974:194:164;;;;;17073:16;;16974:194;;;;;;;;;17126:19;;;;16974:194;;;;16758:428;;-1:-1:-1;;;16758:428:164;;:10;;;;;:19;;:428;;16833:10;;16865:21;16929:23;16758:428;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16735:451;;;;;;16600:1149;17217:9;;:26;;-1:-1:-1;;;17217:26:164;;;;;845:25:167;;;17217:9:164;;;;-1:-1:-1;;;;;17217:9:164;;:14;;818:18:167;;17217:26:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;17257:9:164;;17283:10;;17257:50;;-1:-1:-1;;;17257:50:164;;-1:-1:-1;;;;;17283:10:164;;;17257:50;;;11056:51:167;11123:18;;;11116:34;;;17257:9:164;;;;;;-1:-1:-1;17257:17:164;;-1:-1:-1;11029:18:167;;17257:50:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;17344:10:164;;17417:21;;;;;17481:23;;;;;17526:194;;;;;;;-1:-1:-1;;;;;17526:194:164;;;;;17625:16;;17526:194;;-1:-1:-1;17526:194:164;;;17678:19;;;;17526:194;;;;17344:394;;-1:-1:-1;;;17344:394:164;;:10;;;;;:19;;:394;;17385:10;;17417:21;;17481:23;17526:194;17344:394;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;16600:1149::-;16327:1428;;;;;;:::o;2409:432:56:-;-1:-1:-1;;;;;;;;;;;2985:55:56;3066:16;2452:359;;2652:67;;;-1:-1:-1;;;;;;;;;;;2652:67:56;;;20604:51:167;;;-1:-1:-1;;;20671:18:167;;;20664:34;;;;2712:4:56;20714:18:167;;;20707:34;2489:11:56;;1671:64;2586:43;;20577:18:167;;2652:67:56;;;-1:-1:-1;;2652:67:56;;;;;;;;;;2541:196;;;2652:67;2541:196;;:::i;:::-;;;;-1:-1:-1;;2541:196:56;;;;;;;;;;2506:245;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;2452:359:56;2820:7;:14;;-1:-1:-1;;2820:14:56;;;;;2409:432::o;19076:658:164:-;19247:18;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;19277:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19301:21:164;;-1:-1:-1;;;19301:21:164;;-1:-1:-1;;;;;3749:32:167;;19301:21:164;;;3731:51:167;-1:-1:-1;;;;;;;;;;;19301:13:164;-1:-1:-1;19301:13:164;;-1:-1:-1;3704:18:167;;19301:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19379:10:164;;19475:21;;;;;19535:178;;;;;;;;-1:-1:-1;;;;;19535:178:164;;;;;19626:16;;19535:178;;;;;;;;;19675:19;;;;19535:178;;;;19379:348;;-1:-1:-1;;;19379:348:164;;:10;;;;;-1:-1:-1;19379:20:164;;-1:-1:-1;19379:348:164;;19417:12;;19447:10;;19475:21;19535:178;19379:348;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;19360:367;19076:658;-1:-1:-1;;;;;19076:658:164:o;20763:1637::-;20901:20;20923:18;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;20953:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;20977:21:164;;-1:-1:-1;;;20977:21:164;;-1:-1:-1;;;;;3749:32:167;;20977:21:164;;;3731:51:167;-1:-1:-1;;;;;;;;;;;20977:13:164;-1:-1:-1;20977:13:164;;-1:-1:-1;3704:18:167;;20977:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21113:10:164;;21051:82;;-1:-1:-1;;;;;;21113:10:164;;-1:-1:-1;21051:48:164;:82::i;:::-;21036:97;;87:42:163;-1:-1:-1;;;;;21160:61:164;21168:10;;;;;;;;;-1:-1:-1;;;;;21168:10:164;-1:-1:-1;;;;;21168:24:164;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;21160:61:164;;:93;;;;-1:-1:-1;21237:16:164;;21160:93;21143:1207;;;21307:10;;21352:23;;;;;21435:21;;;;21494:23;;;;;21535:178;;;;;;;-1:-1:-1;;;;;21535:178:164;;;;;21626:16;;21535:178;;;;;;;;;21675:19;;;;21535:178;;;;21307:420;;-1:-1:-1;;;21307:420:164;;:10;;;;;:20;;:420;;21407:10;;21435:21;;21494:23;21307:420;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21278:449;;-1:-1:-1;21278:449:164;-1:-1:-1;21143:1207:164;;;21758:9;;21773:23;;;;21758:39;;-1:-1:-1;;;21758:39:164;;;;;845:25:167;;;;21758:9:164;;;;-1:-1:-1;;;;;21758:9:164;;:14;;818:18:167;;21758:39:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21811:9:164;;21837:10;;21850:21;;;;21811:61;;-1:-1:-1;;;21811:61:164;;-1:-1:-1;;;;;21837:10:164;;;21811:61;;;11056:51:167;11123:18;;;11116:34;;;;21811:9:164;;;;;;-1:-1:-1;21811:17:164;;-1:-1:-1;11029:18:167;;21811:61:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;21915:10:164;;21981:21;;;;22040:23;;;;;22081:178;;;;;;;-1:-1:-1;;;;;22081:178:164;;;;;22172:16;;22081:178;;;;;;22221:19;;;;22081:178;;;;21915:358;;-1:-1:-1;;;21915:358:164;;:10;;;;;:20;;:358;;21953:10;;21981:21;;22081:178;21915:358;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;22287:9;;22302:23;;;;21886:387;;-1:-1:-1;21886:387:164;;-1:-1:-1;22287:9:164;;;-1:-1:-1;;;;;22287:9:164;;:14;;22302:36;;21886:387;;22302:36;:::i;:::-;22287:52;;;;;;;;;;;;;845:25:167;;833:2;818:18;;699:177;22287:52:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20763:1637;;;;;;:::o;23691:661::-;23863:18;-1:-1:-1;;;;;;;;;;;309:37:57;;-1:-1:-1;;;;;23893:12:164;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23917:21:164;;-1:-1:-1;;;23917:21:164;;-1:-1:-1;;;;;3749:32:167;;23917:21:164;;;3731:51:167;-1:-1:-1;;;;;;;;;;;23917:13:164;-1:-1:-1;23917:13:164;;-1:-1:-1;3704:18:167;;23917:21:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23996:10:164;;24093:21;;;;;24153:178;;;;;;;;-1:-1:-1;;;;;24153:178:164;;;;;24244:16;;24153:178;;;;;;;;;24293:19;;;;24153:178;;;;23996:349;;-1:-1:-1;;;23996:349:164;;:10;;;;;-1:-1:-1;23996:21:164;;-1:-1:-1;23996:349:164;;24035:12;;24065:10;;24093:21;24153:178;23996:349;;;:::i;3262:157:56:-;3322:9;3317:96;;-1:-1:-1;;;;;;;;;;;3352:30:56;;;;20954:2:167;20936:21;;;20993:2;20973:18;;;20966:30;21032:25;21027:2;21012:18;;21005:53;21090:2;21075:18;;20752:347;3352:30:56;;;;;;;;3396:6;:4;:6::i;11955:259::-;12016:1;12012;:5;12008:200;;;-1:-1:-1;;;;;;;;;;;12038:41:56;;;;21306:2:167;21288:21;;;21345:2;21325:18;;;21318:30;21384:34;21379:2;21364:18;;21357:62;-1:-1:-1;;;21450:2:167;21435:18;;21428:32;21492:3;21477:19;;21104:398;12038:41:56;;;;;;;;12098:30;;;21719:21:167;;;21776:1;21756:18;;;21749:29;-1:-1:-1;;;21809:2:167;21794:18;;21787:39;21893:4;21878:20;;21871:36;;;12098:30:56;;-1:-1:-1;;;;;;;;;;;12098:30:56;;;;21858:3:167;12098:30:56;;;12147;;;22130:21:167;;;22187:1;22167:18;;;22160:29;;;;-1:-1:-1;;;22220:2:167;22205:18;;22198:39;22304:4;22289:20;;22282:36;;;-1:-1:-1;;;;;;;;;;;12147:30:56;22269:3:167;22254:19;12147:30:56;21918:406:167;15921:259:56;15982:1;15978;:5;15974:200;;;-1:-1:-1;;;;;;;;;;;16004:41:56;;;;22531:2:167;22513:21;;;22570:2;22550:18;;;22543:30;22609:34;22604:2;22589:18;;22582:62;-1:-1:-1;;;22675:2:167;22660:18;;22653:32;22717:3;22702:19;;22329:398;868:133:72;939:55;986:7;965:19;939:55::i;984:556:33:-;1100:9;1365:1;-1:-1:-1;;1348:19:33;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:33;;1497:27;;984:556::o;1291:237:165:-;1395:7;1477:11;-1:-1:-1;;;;;1477:25:165;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;;1433:29;1450:11;1433:16;:29::i;:::-;:88;;;;:::i;1007:380:72:-;1105:14;;591:42;1278:2;1265:16;;1081:21;;1105:14;1265:16;591:42;1314:5;1303:68;1294:77;;1231:150;;1007:380;:::o;603:227:165:-;690:7;777:10;-1:-1:-1;;;;;777:24:165;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:45;;;759:63;;:15;:63;:::i;:::-;728:95;;:15;:95;:::i;-1:-1:-1:-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;14:131:167:-;-1:-1:-1;;;;;89:31:167;;79:42;;69:70;;135:1;132;125:12;150:544;242:6;250;258;311:2;299:9;290:7;286:23;282:32;279:52;;;327:1;324;317:12;279:52;366:9;353:23;385:31;410:5;385:31;:::i;:::-;435:5;-1:-1:-1;492:2:167;477:18;;464:32;505:33;464:32;505:33;:::i;:::-;557:7;-1:-1:-1;616:2:167;601:18;;588:32;629:33;588:32;629:33;:::i;:::-;681:7;671:17;;;150:544;;;;;:::o;990:658::-;1161:2;1213:21;;;1283:13;;1186:18;;;1305:22;;;1132:4;;1161:2;1384:15;;;;1358:2;1343:18;;;1132:4;1427:195;1441:6;1438:1;1435:13;1427:195;;;1506:13;;-1:-1:-1;;;;;1502:39:167;1490:52;;1597:15;;;;1562:12;;;;1538:1;1456:9;1427:195;;;-1:-1:-1;1639:3:167;;990:658;-1:-1:-1;;;;;;990:658:167:o;1653:613::-;1754:6;1762;1770;1778;1831:3;1819:9;1810:7;1806:23;1802:33;1799:53;;;1848:1;1845;1838:12;1799:53;1887:9;1874:23;1906:31;1931:5;1906:31;:::i;:::-;1956:5;-1:-1:-1;2013:2:167;1998:18;;1985:32;2026:33;1985:32;2026:33;:::i;:::-;2078:7;-1:-1:-1;2132:2:167;2117:18;;2104:32;;-1:-1:-1;2188:2:167;2173:18;;2160:32;2201:33;2160:32;2201:33;:::i;:::-;1653:613;;;;-1:-1:-1;1653:613:167;;-1:-1:-1;;1653:613:167:o;2271:127::-;2332:10;2327:3;2323:20;2320:1;2313:31;2363:4;2360:1;2353:15;2387:4;2384:1;2377:15;2403:250;2470:2;2464:9;2512:6;2500:19;;2549:18;2534:34;;2570:22;;;2531:62;2528:88;;;2596:18;;:::i;:::-;2632:2;2625:22;2403:250;:::o;2658:922::-;2727:6;2780:2;2768:9;2759:7;2755:23;2751:32;2748:52;;;2796:1;2793;2786:12;2748:52;2836:9;2823:23;2865:18;2906:2;2898:6;2895:14;2892:34;;;2922:1;2919;2912:12;2892:34;2960:6;2949:9;2945:22;2935:32;;3005:7;2998:4;2994:2;2990:13;2986:27;2976:55;;3027:1;3024;3017:12;2976:55;3063:2;3050:16;3085:2;3081;3078:10;3075:36;;;3091:18;;:::i;:::-;3166:2;3160:9;3134:2;3220:13;;-1:-1:-1;;3216:22:167;;;3240:2;3212:31;3208:40;3196:53;;;3264:18;;;3284:22;;;3261:46;3258:72;;;3310:18;;:::i;:::-;3350:10;3346:2;3339:22;3385:2;3377:6;3370:18;3425:7;3420:2;3415;3411;3407:11;3403:20;3400:33;3397:53;;;3446:1;3443;3436:12;3397:53;3502:2;3497;3493;3489:11;3484:2;3476:6;3472:15;3459:46;3547:1;3525:15;;;3542:2;3521:24;3514:35;;;;-1:-1:-1;3529:6:167;2658:922;-1:-1:-1;;;;;2658:922:167:o;3793:1569::-;3997:4;4026:2;4066;4055:9;4051:18;4096:2;4085:9;4078:21;4119:6;4154;4148:13;4185:6;4177;4170:22;4211:2;4201:12;;4244:2;4233:9;4229:18;4222:25;;4306:2;4296:6;4293:1;4289:14;4278:9;4274:30;4270:39;4344:2;4336:6;4332:15;4365:1;4386;4396:937;4412:6;4407:3;4404:15;4396:937;;;4481:22;;;-1:-1:-1;;4477:36:167;4465:49;;4537:13;;4624:9;;-1:-1:-1;;;;;4620:35:167;4605:51;;4695:11;;4689:18;4727:15;;;4720:27;;;4808:19;;4577:15;;;4840:24;;;4930:21;;;;4975:1;;4898:2;4886:15;;;4989:236;5005:8;5000:3;4997:17;4989:236;;;5086:15;;-1:-1:-1;;;;;;5082:42:167;5068:57;;5194:17;;;;5033:1;5024:11;;;;;5151:14;;;;4989:236;;;-1:-1:-1;5311:12:167;;;;5248:5;-1:-1:-1;;;5276:15:167;;;;4438:1;4429:11;4396:937;;;-1:-1:-1;5350:6:167;;3793:1569;-1:-1:-1;;;;;;;;;3793:1569:167:o;5367:250::-;5452:1;5462:113;5476:6;5473:1;5470:13;5462:113;;;5552:11;;;5546:18;5533:11;;;5526:39;5498:2;5491:10;5462:113;;;-1:-1:-1;;5609:1:167;5591:16;;5584:27;5367:250::o;5622:271::-;5664:3;5702:5;5696:12;5729:6;5724:3;5717:19;5745:76;5814:6;5807:4;5802:3;5798:14;5791:4;5784:5;5780:16;5745:76;:::i;:::-;5875:2;5854:15;-1:-1:-1;;5850:29:167;5841:39;;;;5882:4;5837:50;;5622:271;-1:-1:-1;;5622:271:167:o;5898:803::-;6060:4;6089:2;6129;6118:9;6114:18;6159:2;6148:9;6141:21;6182:6;6217;6211:13;6248:6;6240;6233:22;6286:2;6275:9;6271:18;6264:25;;6348:2;6338:6;6335:1;6331:14;6320:9;6316:30;6312:39;6298:53;;6386:2;6378:6;6374:15;6407:1;6417:255;6431:6;6428:1;6425:13;6417:255;;;6524:2;6520:7;6508:9;6500:6;6496:22;6492:36;6487:3;6480:49;6552:40;6585:6;6576;6570:13;6552:40;:::i;:::-;6542:50;-1:-1:-1;6650:12:167;;;;6615:15;;;;6453:1;6446:9;6417:255;;;-1:-1:-1;6689:6:167;;5898:803;-1:-1:-1;;;;;;;5898:803:167:o;6706:315::-;6782:6;6790;6798;6851:2;6839:9;6830:7;6826:23;6822:32;6819:52;;;6867:1;6864;6857:12;6819:52;-1:-1:-1;;6890:23:167;;;6960:2;6945:18;;6932:32;;-1:-1:-1;7011:2:167;6996:18;;;6983:32;;6706:315;-1:-1:-1;6706:315:167:o;8254:944::-;8337:12;;-1:-1:-1;;;;;947:31:167;935:44;;8404:4;8397:5;8393:16;8387:23;8380:4;8375:3;8371:14;8364:47;8460:4;8453:5;8449:16;8443:23;8436:4;8431:3;8427:14;8420:47;8516:4;8509:5;8505:16;8499:23;8492:4;8487:3;8483:14;8476:47;8572:4;8565:5;8561:16;8555:23;8548:4;8543:3;8539:14;8532:47;8628:4;8621:5;8617:16;8611:23;8604:4;8599:3;8595:14;8588:47;8684:4;8677:5;8673:16;8667:23;8660:4;8655:3;8651:14;8644:47;8737:4;8730:5;8726:16;8720:23;8752:48;8794:4;8789:3;8785:14;8771:12;-1:-1:-1;;;;;947:31:167;935:44;;881:104;8752:48;-1:-1:-1;8819:6:167;8862:14;;;8856:21;-1:-1:-1;;;;;947:31:167;;8921:12;;;935:44;-1:-1:-1;;8953:6:167;8996:14;;;8990:21;8118:12;;9059;;;8106:25;8180:4;8169:16;;8163:23;8147:14;;;8140:47;8236:4;8225:16;;8219:23;8203:14;;;8196:47;-1:-1:-1;;9123:6:167;9112:18;;9106:25;9097:6;9088:16;;9081:51;9183:6;9172:18;9166:25;9157:6;9148:16;;;9141:51;8254:944::o;9203:256::-;9393:3;9378:19;;9406:47;9382:9;9435:6;9406:47;:::i;9464:354::-;9682:3;9667:19;;9695:47;9671:9;9724:6;9695:47;:::i;:::-;-1:-1:-1;;;;;9779:32:167;;;;9773:3;9758:19;;;;9751:61;9464:354;;-1:-1:-1;9464:354:167:o;10112:127::-;10173:10;10168:3;10164:20;10161:1;10154:31;10204:4;10201:1;10194:15;10228:4;10225:1;10218:15;10244:168;10317:9;;;10348;;10365:15;;;10359:22;;10345:37;10335:71;;10386:18;;:::i;10417:184::-;10487:6;10540:2;10528:9;10519:7;10515:23;10511:32;10508:52;;;10556:1;10553;10546:12;10508:52;-1:-1:-1;10579:16:167;;10417:184;-1:-1:-1;10417:184:167:o;10606:245::-;10685:6;10693;10746:2;10734:9;10725:7;10721:23;10717:32;10714:52;;;10762:1;10759;10752:12;10714:52;-1:-1:-1;;10785:16:167;;10841:2;10826:18;;;10820:25;10785:16;;10820:25;;-1:-1:-1;10606:245:167:o;11440:277::-;11507:6;11560:2;11548:9;11539:7;11535:23;11531:32;11528:52;;;11576:1;11573;11566:12;11528:52;11608:9;11602:16;11661:5;11654:13;11647:21;11640:5;11637:32;11627:60;;11683:1;11680;11673:12;11722:220;11871:2;11860:9;11853:21;11834:4;11891:45;11932:2;11921:9;11917:18;11909:6;11891:45;:::i;11947:317::-;-1:-1:-1;;;;;12124:32:167;;12106:51;;12193:2;12188;12173:18;;12166:30;;;-1:-1:-1;;12213:45:167;;12239:18;;12231:6;12213:45;:::i;12578:125::-;12643:9;;;12664:10;;;12661:36;;;12677:18;;:::i;12708:380::-;12787:1;12783:12;;;;12830;;;12851:61;;12905:4;12897:6;12893:17;12883:27;;12851:61;12958:2;12950:6;12947:14;12927:18;12924:38;12921:161;;13004:10;12999:3;12995:20;12992:1;12985:31;13039:4;13036:1;13029:15;13067:4;13064:1;13057:15;12921:161;;12708:380;;;:::o;13093:136::-;13128:3;-1:-1:-1;;;13149:22:167;;13146:48;;13174:18;;:::i;:::-;-1:-1:-1;13214:1:167;13210:13;;13093:136::o;13234:128::-;13301:9;;;13322:11;;;13319:37;;;13336:18;;:::i;13646:384::-;-1:-1:-1;;;;;;13831:33:167;;13819:46;;13888:13;;13801:3;;13910:74;13888:13;13973:1;13964:11;;13957:4;13945:17;;13910:74;:::i;:::-;14004:16;;;;14022:1;14000:24;;13646:384;-1:-1:-1;;;13646:384:167:o;14035:287::-;14164:3;14202:6;14196:13;14218:66;14277:6;14272:3;14265:4;14257:6;14253:17;14218:66;:::i;:::-;14300:16;;;;;14035:287;-1:-1:-1;;14035:287:167:o;14327:127::-;14388:10;14383:3;14379:20;14376:1;14369:31;14419:4;14416:1;14409:15;14443:4;14440:1;14433:15;14459:112;14491:1;14517;14507:35;;14522:18;;:::i;:::-;-1:-1:-1;14556:9:167;;14459:112::o;14576:120::-;14616:1;14642;14632:35;;14647:18;;:::i;:::-;-1:-1:-1;14681:9:167;;14576:120::o;14701:135::-;14740:3;14761:17;;;14758:43;;14781:18;;:::i;:::-;-1:-1:-1;14828:1:167;14817:13;;14701:135::o;16321:446::-;16571:2;16560:9;16553:21;16610:1;16605:2;16594:9;16590:18;16583:29;-1:-1:-1;;;16643:2:167;16632:9;16628:18;16621:35;16694:3;16687:4;16676:9;16672:20;16665:33;16534:4;16715:46;16756:3;16745:9;16741:19;16733:6;16715:46;:::i;16772:291::-;16949:2;16938:9;16931:21;16912:4;16969:45;17010:2;16999:9;16995:18;16987:6;16969:45;:::i;:::-;16961:53;;17050:6;17045:2;17034:9;17030:18;17023:34;16772:291;;;;;:::o;17362:146::-;17449:13;;17471:31;17449:13;17471:31;:::i;17513:525::-;17575:5;17623:4;17611:9;17606:3;17602:19;17598:30;17595:50;;;17641:1;17638;17631:12;17595:50;17674:2;17668:9;17716:4;17708:6;17704:17;17787:6;17775:10;17772:22;17751:18;17739:10;17736:34;17733:62;17730:88;;;17798:18;;:::i;:::-;17838:10;17834:2;17827:22;;17867:6;17858:15;;17903:9;17897:16;17889:6;17882:32;17968:2;17957:9;17953:18;17947:25;17942:2;17934:6;17930:15;17923:50;18027:2;18016:9;18012:18;18006:25;18001:2;17993:6;17989:15;17982:50;;17513:525;;;;:::o;18043:1117::-;18141:6;18194:3;18182:9;18173:7;18169:23;18165:33;18162:53;;;18211:1;18208;18201:12;18162:53;18237:17;;:::i;:::-;18277:48;18315:9;18277:48;:::i;:::-;18270:5;18263:63;18379:2;18368:9;18364:18;18358:25;18353:2;18346:5;18342:14;18335:49;18437:2;18426:9;18422:18;18416:25;18411:2;18404:5;18400:14;18393:49;18495:2;18484:9;18480:18;18474:25;18469:2;18462:5;18458:14;18451:49;18554:3;18543:9;18539:19;18533:26;18527:3;18520:5;18516:15;18509:51;18614:3;18603:9;18599:19;18593:26;18587:3;18580:5;18576:15;18569:51;18674:3;18663:9;18659:19;18653:26;18647:3;18640:5;18636:15;18629:51;18713:58;18766:3;18755:9;18751:19;18713:58;:::i;:::-;18707:3;18700:5;18696:15;18689:83;18791:3;18826:57;18879:2;18868:9;18864:18;18826:57;:::i;:::-;18810:14;;;18803:81;18903:3;18938:62;18992:7;18972:18;;;18938:62;:::i;:::-;18922:14;;;18915:86;19058:6;19043:22;;19037:29;19028:6;19017:18;;19010:57;19124:3;19109:19;;;19103:26;19094:6;19083:18;;19076:54;-1:-1:-1;18926:5:167;18043:1117;-1:-1:-1;18043:1117:167:o;19165:349::-;19280:1;19276;19271:3;19267:11;19263:19;19255:5;19249:12;19245:38;19240:3;19233:51;19347:4;19340:5;19336:16;19330:23;19323:31;19316:39;19309:4;19304:3;19300:14;19293:63;19215:3;19402:4;19395:5;19391:16;19385:23;19440:4;19433;19428:3;19424:14;19417:28;19461:47;19502:4;19497:3;19493:14;19479:12;19461:47;:::i;19519:400::-;19754:6;19743:9;19736:25;19797:6;19792:2;19781:9;19777:18;19770:34;19840:2;19835;19824:9;19820:18;19813:30;19717:4;19860:53;19909:2;19898:9;19894:18;19886:6;19860:53;:::i;19924:473::-;20187:6;20176:9;20169:25;20230:6;20225:2;20214:9;20210:18;20203:34;20273:6;20268:2;20257:9;20253:18;20246:34;20316:3;20311:2;20300:9;20296:18;20289:31;20150:4;20337:54;20386:3;20375:9;20371:19;20363:6;20337:54;:::i;:::-;20329:62;19924:473;-1:-1:-1;;;;;;19924:473:167:o",
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
    "test_oracle_data_recordings()": "d4dbd48f",
    "test_oracle_query_reverts()": "6239c5ef",
    "test_oracle_write_long()": "1885dd6a",
    "test_oracle_write_short()": "6b3992c7",
    "whaleTransfer(address,address,address)": "10716760",
    "whaleTransfer(address,address,uint256,address)": "3e5e0d26"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"WhaleBalanceExceeded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"WhaleIsContract\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32[]\",\"name\":\"extraData\",\"type\":\"bytes32[]\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_delta\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_targetValue\",\"type\":\"uint256\"}],\"name\":\"assertWithDelta\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"createUser\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"test_oracle_data_recordings\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"test_oracle_query_reverts\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"test_oracle_write_long\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"test_oracle_write_short\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"whale\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"whaleTransfer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"whale\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"whaleTransfer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])\":{\"notice\":\"Event Utils ///\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/units/hyperdrive/TWAPTest.sol\":\"TWAPTest\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/Hyperdrive.sol\":{\"keccak256\":\"0x2a4cbe095d6b6818959ba078ba32a3d71b06bee714193a92431e0ee56ae714bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31bad624349a8efd7f0d1ada9e8635b7d4191e0f80174b861ae76e63279917f6\",\"dweb:/ipfs/QmVBWfcxpNQLegXVLmoGYy1H5rwGaaAmkRwaLJiaxAaJmX\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd\",\"dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu\"]},\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6\",\"dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669\",\"dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x7dda4c0437e908336901192a3ac4290dfd27a8afc618f4dd787c517ffe608d9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://70133e63ca643fce51ac8eac8cadb96910fcabde98362e8c3cf91c0b629779f0\",\"dweb:/ipfs/QmTqAFsCvvA2X43oLfbmUFqvaj7eMLLHZ9odREFsBtzdmf\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x0330ca18326c2da2cfd29a6433e15dc8fb6213ef5b70717ef02a4fa17f69e64a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c23b142bc142472a47c6e739d008c90471dbcf8ec5b9415fd0e86f5920ef5dc1\",\"dweb:/ipfs/QmdnW3Kk4R7kQ1FQBuQNV5M9VUdHSkEvvvsjNBDoVi5geX\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/factory/HyperdriveFactory.sol\":{\"keccak256\":\"0x13e6d5551115a4a90e97bb36547093d8e1b7e13ce1ea88f398e105e5425c8f64\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6b07d242a96333f5c1e100b9c181dd5a0ef651b6f6faf294981fb35ad7510f85\",\"dweb:/ipfs/QmV4vfxMzFqFEYaJNgisWY4sdHSYuhnVkEW3Wn3ASoVdzN\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IForwarderFactory.sol\":{\"keccak256\":\"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3\",\"dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveDeployer.sol\":{\"keccak256\":\"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587\",\"dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/ERC20Forwarder.sol\":{\"keccak256\":\"0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034\",\"dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p\"]},\"contracts/src/token/ForwarderFactory.sol\":{\"keccak256\":\"0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e\",\"dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0\",\"dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d\",\"dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x180bd1e125dc35405886e74abf66d48d98802e42ff80e48edcc9931b6c38ee5e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62261e811c9cc6187a4cb8108d3f364707a1f2ce84090c055103d280e590577a\",\"dweb:/ipfs/QmW4nzqcDuKstJJ8FEziGFJf2XZnjkvsj2bbWzJAPNngKP\"]},\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/StdCheats.sol\":{\"keccak256\":\"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a\",\"dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe\"]},\"lib/forge-std/src/StdError.sol\":{\"keccak256\":\"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6\",\"dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj\"]},\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]},\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Test.sol\":{\"keccak256\":\"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765\",\"dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]},\"lib/forge-std/src/safeconsole.sol\":{\"keccak256\":\"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae\",\"dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88\",\"dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol\":{\"keccak256\":\"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b\",\"dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276\",\"dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2\"]},\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df\",\"dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol\":{\"keccak256\":\"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790\",\"dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol\":{\"keccak256\":\"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3\",\"dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol\":{\"keccak256\":\"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b\",\"dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf\",\"dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72\",\"dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"test/units/hyperdrive/TWAPTest.sol\":{\"keccak256\":\"0x226b68b962ea1c6414ed69b29ec92c419c5aca0c9329f0dc6504eb77c7a77b31\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://59154b710d4bbf2e7b5012da7e9d8e0eb6456a279fb5bea447366f74f6e2bf7b\",\"dweb:/ipfs/Qmcko4F9y7E6SZCW9eNziiFmUW4dqAXP6Uh1C6WXYFNCEW\"]},\"test/utils/BaseTest.sol\":{\"keccak256\":\"0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd\",\"dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0\",\"dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1\"]},\"test/utils/HyperdriveTest.sol\":{\"keccak256\":\"0x5d45ae03e8ec8955de5f744975de55cf5df5cdf89e496c45a0915a9de5f42280\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e84fca62745b74f64e2586d9f3d6f6ddf4b7cc1cda6b94c7603ae00529fe53e\",\"dweb:/ipfs/QmQtag6LwsmUye4hjBB6798r9Ci7JstUYFhu52TtqZErLN\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x5861db03144fda3f71c21354d8a639396bacb85acaca8804f6dbaf600428cf9a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c01ebbc32504f67bb4eaf65ef613431a0afc05530dbbc9a0489c342f722904b7\",\"dweb:/ipfs/QmZEVPaEqhD4p13yzfrKf1K5MFrvNaeF9pn7hSZxs9YfmQ\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171\",\"dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu\"]}},\"version\":1}",
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
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_oracle_data_recordings"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_oracle_query_reverts"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_oracle_write_long"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test_oracle_write_short"
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
        "test/units/hyperdrive/TWAPTest.sol": "TWAPTest"
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
      "test/units/hyperdrive/TWAPTest.sol": {
        "keccak256": "0x226b68b962ea1c6414ed69b29ec92c419c5aca0c9329f0dc6504eb77c7a77b31",
        "urls": [
          "bzz-raw://59154b710d4bbf2e7b5012da7e9d8e0eb6456a279fb5bea447366f74f6e2bf7b",
          "dweb:/ipfs/Qmcko4F9y7E6SZCW9eNziiFmUW4dqAXP6Uh1C6WXYFNCEW"
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
    "absolutePath": "test/units/hyperdrive/TWAPTest.sol",
    "id": 110292,
    "exportedSymbols": {
      "AssetId": [
        8311
      ],
      "FixedPointMath": [
        9066
      ],
      "HyperdriveDataProvider": [
        1927
      ],
      "HyperdriveMath": [
        9918
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
      "MockHyperdrive": [
        14346
      ],
      "TWAPTest": [
        110291
      ],
      "stdError": [
        22873
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:6853:154",
    "nodes": [
      {
        "id": 109653,
        "nodeType": "PragmaDirective",
        "src": "39:23:154",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 109655,
        "nodeType": "ImportDirective",
        "src": "64:50:154",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdError.sol",
        "file": "forge-std/StdError.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 22874,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109654,
              "name": "stdError",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 22873,
              "src": "73:8:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 109657,
        "nodeType": "ImportDirective",
        "src": "115:71:154",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109656,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "124:11:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 109659,
        "nodeType": "ImportDirective",
        "src": "187:62:154",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109658,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "196:7:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 109661,
        "nodeType": "ImportDirective",
        "src": "250:76:154",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109660,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "259:14:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 109663,
        "nodeType": "ImportDirective",
        "src": "327:76:154",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "contracts/src/libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 9919,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109662,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9918,
              "src": "336:14:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 109665,
        "nodeType": "ImportDirective",
        "src": "404:82:154",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveDataProvider.sol",
        "file": "contracts/src/HyperdriveDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 1928,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109664,
              "name": "HyperdriveDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1927,
              "src": "413:22:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 109667,
        "nodeType": "ImportDirective",
        "src": "487:67:154",
        "nodes": [],
        "absolutePath": "contracts/test/MockHyperdrive.sol",
        "file": "contracts/test/MockHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 14423,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109666,
              "name": "MockHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14346,
              "src": "496:14:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 109671,
        "nodeType": "ImportDirective",
        "src": "555:93:154",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveTest.sol",
        "file": "test/utils/HyperdriveTest.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 110292,
        "sourceUnit": 121862,
        "symbolAliases": [
          {
            "foreign": {
              "id": 109668,
              "name": "HyperdriveTest",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 121861,
              "src": "564:14:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 109669,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 124790,
              "src": "580:15:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 109670,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "597:11:154",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 110291,
        "nodeType": "ContractDefinition",
        "src": "650:6241:154",
        "nodes": [
          {
            "id": 109676,
            "nodeType": "UsingForDirective",
            "src": "692:33:154",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 109674,
              "name": "FixedPointMath",
              "nameLocations": [
                "698:14:154"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "698:14:154"
            },
            "typeName": {
              "id": 109675,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "717:7:154",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 109879,
            "nodeType": "FunctionDefinition",
            "src": "731:2189:154",
            "nodes": [],
            "body": {
              "id": 109878,
              "nodeType": "Block",
              "src": "774:2146:154",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    109680
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109680,
                      "mutability": "mutable",
                      "name": "apr",
                      "nameLocation": "792:3:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "784:11:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109679,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "784:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109682,
                  "initialValue": {
                    "hexValue": "302e3035653138",
                    "id": 109681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "798:7:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_50000000000000000_by_1",
                      "typeString": "int_const 50000000000000000"
                    },
                    "value": "0.05e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "784:21:154"
                },
                {
                  "assignments": [
                    109684
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109684,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "886:12:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "878:20:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109683,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "878:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109686,
                  "initialValue": {
                    "hexValue": "3530305f3030305f303030653138",
                    "id": 109685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "901:14:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_500000000000000000000000000_by_1",
                      "typeString": "int_const 500000000000000000000000000"
                    },
                    "value": "500_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "878:37:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109688,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "936:5:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109689,
                        "name": "apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109680,
                        "src": "943:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109690,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109684,
                        "src": "948:12:154",
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
                      "id": 109687,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "925:10:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 109691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "925:36:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109692,
                  "nodeType": "ExpressionStatement",
                  "src": "925:36:154"
                },
                {
                  "assignments": [
                    109694
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109694,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "1001:10:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "993:18:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109693,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "993:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109696,
                  "initialValue": {
                    "hexValue": "3130653138",
                    "id": 109695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1014:5:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_10000000000000000000_by_1",
                      "typeString": "int_const 10000000000000000000"
                    },
                    "value": "10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "993:26:154"
                },
                {
                  "assignments": [
                    109698
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109698,
                      "mutability": "mutable",
                      "name": "currentTimestamp",
                      "nameLocation": "1037:16:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "1029:24:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109697,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1029:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109701,
                  "initialValue": {
                    "expression": {
                      "id": 109699,
                      "name": "block",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -4,
                      "src": "1056:5:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_block",
                        "typeString": "block"
                      }
                    },
                    "id": 109700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1062:9:154",
                    "memberName": "timestamp",
                    "nodeType": "MemberAccess",
                    "src": "1056:15:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1029:42:154"
                },
                {
                  "assignments": [
                    109703,
                    109705
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109703,
                      "mutability": "mutable",
                      "name": "maturityTimeFirst",
                      "nameLocation": "1090:17:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "1082:25:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109702,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1082:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 109705,
                      "mutability": "mutable",
                      "name": "bondAmountFirst",
                      "nameLocation": "1117:15:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "1109:23:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109704,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1109:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109710,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 109707,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "1158:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109708,
                        "name": "baseAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109694,
                        "src": "1175:10:154",
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
                      "id": 109706,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "1136:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 109709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1136:59:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1081:114:154"
                },
                {
                  "assignments": [
                    109712,
                    109714
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109712,
                      "mutability": "mutable",
                      "name": "head",
                      "nameLocation": "1275:4:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "1267:12:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109711,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1267:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 109714,
                      "mutability": "mutable",
                      "name": "lastTimestamp",
                      "nameLocation": "1289:13:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "1281:21:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109713,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1281:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109723,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 109718,
                                "name": "hyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 119630,
                                "src": "1342:10:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              ],
                              "id": 109717,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1334:7:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 109716,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1334:7:154",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 109719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1334:19:154",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 109715,
                          "name": "MockHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14346,
                          "src": "1306:14:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                            "typeString": "type(contract MockHyperdrive)"
                          }
                        },
                        "id": 109720,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1306:57:154",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                          "typeString": "contract MockHyperdrive"
                        }
                      },
                      "id": 109721,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1364:14:154",
                      "memberName": "getOracleState",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13771,
                      "src": "1306:72:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view external returns (uint256,uint256)"
                      }
                    },
                    "id": 109722,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1306:74:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1266:114:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109725,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109712,
                        "src": "1399:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 109726,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1405:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "id": 109724,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "1390:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1390:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109728,
                  "nodeType": "ExpressionStatement",
                  "src": "1390:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109730,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109714,
                        "src": "1426:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109731,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109698,
                        "src": "1441:16:154",
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
                      "id": 109729,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "1417:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1417:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109733,
                  "nodeType": "ExpressionStatement",
                  "src": "1417:41:154"
                },
                {
                  "assignments": [
                    109735,
                    109737
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109735,
                      "mutability": "mutable",
                      "name": "maturityTimeSecond",
                      "nameLocation": "1555:18:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "1547:26:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109734,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1547:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 109737,
                      "mutability": "mutable",
                      "name": "bondAmountSecond",
                      "nameLocation": "1583:16:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 109878,
                      "src": "1575:24:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109736,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1575:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109742,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 109739,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "1625:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109740,
                        "name": "baseAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109694,
                        "src": "1642:10:154",
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
                      "id": 109738,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "1603:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 109741,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1603:59:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1546:116:154"
                },
                {
                  "expression": {
                    "id": 109754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 109743,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109712,
                          "src": "1674:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 109744,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109714,
                          "src": "1680:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 109745,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1673:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 109749,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "1720:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 109748,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1712:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 109747,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1712:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 109750,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1712:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 109746,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "1697:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 109751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1697:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 109752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1746:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "1697:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 109753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1697:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "1673:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109755,
                  "nodeType": "ExpressionStatement",
                  "src": "1673:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109757,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109712,
                        "src": "1781:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 109758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1787:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "id": 109756,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "1772:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1772:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109760,
                  "nodeType": "ExpressionStatement",
                  "src": "1772:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109762,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109714,
                        "src": "1808:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109763,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109698,
                        "src": "1823:16:154",
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
                      "id": 109761,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "1799:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1799:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109765,
                  "nodeType": "ExpressionStatement",
                  "src": "1799:41:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109767,
                        "name": "UPDATE_GAP",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119653,
                        "src": "1887:10:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 109770,
                            "name": "apr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109680,
                            "src": "1906:3:154",
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
                          "id": 109769,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1899:6:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 109768,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1899:6:154",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 109771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1899:11:154",
                        "tryCall": false,
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
                      "id": 109766,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "1875:11:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 109772,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1875:36:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109773,
                  "nodeType": "ExpressionStatement",
                  "src": "1875:36:154"
                },
                {
                  "expression": {
                    "id": 109777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 109774,
                      "name": "currentTimestamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109698,
                      "src": "1963:16:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 109775,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "1982:5:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 109776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1988:9:154",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "1982:15:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1963:34:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109778,
                  "nodeType": "ExpressionStatement",
                  "src": "1963:34:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109780,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "2016:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109781,
                        "name": "baseAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109694,
                        "src": "2021:10:154",
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
                      "id": 109779,
                      "name": "openLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120583,
                        120615,
                        120649
                      ],
                      "referencedDeclaration": 120615,
                      "src": "2007:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 109782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2007:25:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 109783,
                  "nodeType": "ExpressionStatement",
                  "src": "2007:25:154"
                },
                {
                  "expression": {
                    "id": 109795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 109784,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109712,
                          "src": "2043:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 109785,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109714,
                          "src": "2049:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 109786,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2042:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 109790,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "2089:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 109789,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2081:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 109788,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2081:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 109791,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2081:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 109787,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "2066:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 109792,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2066:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 109793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2115:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "2066:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 109794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2066:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "2042:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109796,
                  "nodeType": "ExpressionStatement",
                  "src": "2042:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109798,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109712,
                        "src": "2150:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "32",
                        "id": 109799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2156:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        }
                      ],
                      "id": 109797,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "2141:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2141:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109801,
                  "nodeType": "ExpressionStatement",
                  "src": "2141:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109803,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109714,
                        "src": "2177:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109804,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109698,
                        "src": "2192:16:154",
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
                      "id": 109802,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "2168:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2168:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109806,
                  "nodeType": "ExpressionStatement",
                  "src": "2168:41:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109808,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "2303:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109809,
                        "name": "maturityTimeFirst",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109703,
                        "src": "2308:17:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109810,
                        "name": "bondAmountFirst",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109705,
                        "src": "2327:15:154",
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
                      "id": 109807,
                      "name": "closeLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120691,
                        120717,
                        120745
                      ],
                      "referencedDeclaration": 120717,
                      "src": "2293:9:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 109811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2293:50:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109812,
                  "nodeType": "ExpressionStatement",
                  "src": "2293:50:154"
                },
                {
                  "expression": {
                    "id": 109824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 109813,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109712,
                          "src": "2354:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 109814,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109714,
                          "src": "2360:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 109815,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2353:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 109819,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "2400:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 109818,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2392:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 109817,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2392:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 109820,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2392:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 109816,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "2377:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 109821,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2377:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 109822,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2426:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "2377:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 109823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2377:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "2353:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109825,
                  "nodeType": "ExpressionStatement",
                  "src": "2353:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109827,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109712,
                        "src": "2461:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "32",
                        "id": 109828,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2467:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        }
                      ],
                      "id": 109826,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "2452:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2452:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109830,
                  "nodeType": "ExpressionStatement",
                  "src": "2452:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109832,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109714,
                        "src": "2488:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109833,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109698,
                        "src": "2503:16:154",
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
                      "id": 109831,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "2479:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2479:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109835,
                  "nodeType": "ExpressionStatement",
                  "src": "2479:41:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109837,
                        "name": "UPDATE_GAP",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119653,
                        "src": "2606:10:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 109840,
                            "name": "apr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109680,
                            "src": "2625:3:154",
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
                          "id": 109839,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2618:6:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 109838,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2618:6:154",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 109841,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2618:11:154",
                        "tryCall": false,
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
                      "id": 109836,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "2594:11:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 109842,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2594:36:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109843,
                  "nodeType": "ExpressionStatement",
                  "src": "2594:36:154"
                },
                {
                  "expression": {
                    "id": 109847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 109844,
                      "name": "currentTimestamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109698,
                      "src": "2640:16:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 109845,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "2659:5:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 109846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2665:9:154",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "2659:15:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2640:34:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109848,
                  "nodeType": "ExpressionStatement",
                  "src": "2640:34:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109850,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "2694:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109851,
                        "name": "maturityTimeSecond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109735,
                        "src": "2699:18:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109852,
                        "name": "bondAmountSecond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109737,
                        "src": "2719:16:154",
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
                      "id": 109849,
                      "name": "closeLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120691,
                        120717,
                        120745
                      ],
                      "referencedDeclaration": 120717,
                      "src": "2684:9:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 109853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2684:52:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109854,
                  "nodeType": "ExpressionStatement",
                  "src": "2684:52:154"
                },
                {
                  "expression": {
                    "id": 109866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 109855,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109712,
                          "src": "2747:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 109856,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109714,
                          "src": "2753:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 109857,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2746:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 109861,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "2793:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 109860,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2785:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 109859,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2785:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 109862,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2785:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 109858,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "2770:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 109863,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2770:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 109864,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2819:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "2770:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 109865,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2770:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "2746:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109867,
                  "nodeType": "ExpressionStatement",
                  "src": "2746:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109869,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109712,
                        "src": "2854:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "33",
                        "id": 109870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2860:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        }
                      ],
                      "id": 109868,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "2845:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2845:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109872,
                  "nodeType": "ExpressionStatement",
                  "src": "2845:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109874,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109714,
                        "src": "2881:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109875,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109698,
                        "src": "2896:16:154",
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
                      "id": 109873,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "2872:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2872:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109877,
                  "nodeType": "ExpressionStatement",
                  "src": "2872:41:154"
                }
              ]
            },
            "functionSelector": "1885dd6a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_oracle_write_long",
            "nameLocation": "740:22:154",
            "parameters": {
              "id": 109677,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "762:2:154"
            },
            "returnParameters": {
              "id": 109678,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "774:0:154"
            },
            "scope": 110291,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 110082,
            "nodeType": "FunctionDefinition",
            "src": "2926:2195:154",
            "nodes": [],
            "body": {
              "id": 110081,
              "nodeType": "Block",
              "src": "2970:2151:154",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    109883
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109883,
                      "mutability": "mutable",
                      "name": "apr",
                      "nameLocation": "2988:3:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "2980:11:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109882,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2980:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109885,
                  "initialValue": {
                    "hexValue": "302e3035653138",
                    "id": 109884,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2994:7:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_50000000000000000_by_1",
                      "typeString": "int_const 50000000000000000"
                    },
                    "value": "0.05e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2980:21:154"
                },
                {
                  "assignments": [
                    109887
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109887,
                      "mutability": "mutable",
                      "name": "contribution",
                      "nameLocation": "3082:12:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3074:20:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109886,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3074:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109889,
                  "initialValue": {
                    "hexValue": "3530305f3030305f303030653138",
                    "id": 109888,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3097:14:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_500000000000000000000000000_by_1",
                      "typeString": "int_const 500000000000000000000000000"
                    },
                    "value": "500_000_000e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3074:37:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109891,
                        "name": "alice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117531,
                        "src": "3132:5:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109892,
                        "name": "apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109883,
                        "src": "3139:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109893,
                        "name": "contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109887,
                        "src": "3144:12:154",
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
                      "id": 109890,
                      "name": "initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120073,
                        120106,
                        120141
                      ],
                      "referencedDeclaration": 120106,
                      "src": "3121:10:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 109894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3121:36:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109895,
                  "nodeType": "ExpressionStatement",
                  "src": "3121:36:154"
                },
                {
                  "assignments": [
                    109897
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109897,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "3197:10:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3189:18:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109896,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3189:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109899,
                  "initialValue": {
                    "hexValue": "3130653138",
                    "id": 109898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3210:5:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_10000000000000000000_by_1",
                      "typeString": "int_const 10000000000000000000"
                    },
                    "value": "10e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3189:26:154"
                },
                {
                  "assignments": [
                    109901
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109901,
                      "mutability": "mutable",
                      "name": "currentTimestamp",
                      "nameLocation": "3233:16:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3225:24:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109900,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3225:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109904,
                  "initialValue": {
                    "expression": {
                      "id": 109902,
                      "name": "block",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -4,
                      "src": "3252:5:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_block",
                        "typeString": "block"
                      }
                    },
                    "id": 109903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3258:9:154",
                    "memberName": "timestamp",
                    "nodeType": "MemberAccess",
                    "src": "3252:15:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3225:42:154"
                },
                {
                  "assignments": [
                    109906,
                    109908
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109906,
                      "mutability": "mutable",
                      "name": "maturityTimeFirst",
                      "nameLocation": "3286:17:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3278:25:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109905,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3278:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 109908,
                      "mutability": "mutable",
                      "name": "bondAmountFirst",
                      "nameLocation": "3313:15:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3305:23:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109907,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3305:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109913,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 109910,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "3355:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109911,
                        "name": "baseAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109897,
                        "src": "3372:10:154",
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
                      "id": 109909,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "3332:9:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 109912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3332:60:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3277:115:154"
                },
                {
                  "assignments": [
                    109915,
                    109917
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109915,
                      "mutability": "mutable",
                      "name": "head",
                      "nameLocation": "3472:4:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3464:12:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109914,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3464:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 109917,
                      "mutability": "mutable",
                      "name": "lastTimestamp",
                      "nameLocation": "3486:13:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3478:21:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109916,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3478:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109926,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 109921,
                                "name": "hyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 119630,
                                "src": "3539:10:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              ],
                              "id": 109920,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3531:7:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 109919,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3531:7:154",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 109922,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3531:19:154",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 109918,
                          "name": "MockHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14346,
                          "src": "3503:14:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                            "typeString": "type(contract MockHyperdrive)"
                          }
                        },
                        "id": 109923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3503:57:154",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                          "typeString": "contract MockHyperdrive"
                        }
                      },
                      "id": 109924,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3561:14:154",
                      "memberName": "getOracleState",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13771,
                      "src": "3503:72:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view external returns (uint256,uint256)"
                      }
                    },
                    "id": 109925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3503:74:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3463:114:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109928,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109915,
                        "src": "3596:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 109929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3602:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "id": 109927,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "3587:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3587:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109931,
                  "nodeType": "ExpressionStatement",
                  "src": "3587:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109933,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109917,
                        "src": "3623:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109934,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109901,
                        "src": "3638:16:154",
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
                      "id": 109932,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "3614:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3614:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109936,
                  "nodeType": "ExpressionStatement",
                  "src": "3614:41:154"
                },
                {
                  "assignments": [
                    109938,
                    109940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109938,
                      "mutability": "mutable",
                      "name": "maturityTimeSecond",
                      "nameLocation": "3752:18:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3744:26:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109937,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3744:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 109940,
                      "mutability": "mutable",
                      "name": "bondAmountSecond",
                      "nameLocation": "3780:16:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110081,
                      "src": "3772:24:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 109939,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3772:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 109945,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 109942,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "3823:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109943,
                        "name": "baseAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109897,
                        "src": "3840:10:154",
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
                      "id": 109941,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "3800:9:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 109944,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3800:60:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3743:117:154"
                },
                {
                  "expression": {
                    "id": 109957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 109946,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109915,
                          "src": "3872:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 109947,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109917,
                          "src": "3878:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 109948,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "3871:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 109952,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "3918:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 109951,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3910:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 109950,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3910:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 109953,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3910:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 109949,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "3895:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 109954,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3895:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 109955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3944:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "3895:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 109956,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3895:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "3871:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109958,
                  "nodeType": "ExpressionStatement",
                  "src": "3871:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109960,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109915,
                        "src": "3979:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 109961,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3985:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "id": 109959,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "3970:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3970:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109963,
                  "nodeType": "ExpressionStatement",
                  "src": "3970:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109965,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109917,
                        "src": "4006:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 109966,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109901,
                        "src": "4021:16:154",
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
                      "id": 109964,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "3997:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 109967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3997:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109968,
                  "nodeType": "ExpressionStatement",
                  "src": "3997:41:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109970,
                        "name": "UPDATE_GAP",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119653,
                        "src": "4085:10:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 109973,
                            "name": "apr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109883,
                            "src": "4104:3:154",
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
                          "id": 109972,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4097:6:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 109971,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4097:6:154",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 109974,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4097:11:154",
                        "tryCall": false,
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
                      "id": 109969,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "4073:11:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 109975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4073:36:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109976,
                  "nodeType": "ExpressionStatement",
                  "src": "4073:36:154"
                },
                {
                  "expression": {
                    "id": 109980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 109977,
                      "name": "currentTimestamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109901,
                      "src": "4161:16:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 109978,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "4180:5:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 109979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4186:9:154",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "4180:15:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4161:34:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109981,
                  "nodeType": "ExpressionStatement",
                  "src": "4161:34:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 109983,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "4215:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 109984,
                        "name": "baseAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109897,
                        "src": "4220:10:154",
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
                      "id": 109982,
                      "name": "openShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120872,
                        120900,
                        120930
                      ],
                      "referencedDeclaration": 120900,
                      "src": "4205:9:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 109985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4205:26:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "id": 109986,
                  "nodeType": "ExpressionStatement",
                  "src": "4205:26:154"
                },
                {
                  "expression": {
                    "id": 109998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 109987,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109915,
                          "src": "4242:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 109988,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109917,
                          "src": "4248:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 109989,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4241:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 109993,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "4288:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 109992,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4280:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 109991,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4280:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 109994,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4280:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 109990,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "4265:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 109995,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4265:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 109996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4314:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "4265:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 109997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4265:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4241:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109999,
                  "nodeType": "ExpressionStatement",
                  "src": "4241:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110001,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109915,
                        "src": "4349:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "32",
                        "id": 110002,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4355:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        }
                      ],
                      "id": 110000,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "4340:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110003,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4340:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110004,
                  "nodeType": "ExpressionStatement",
                  "src": "4340:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110006,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109917,
                        "src": "4376:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 110007,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109901,
                        "src": "4391:16:154",
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
                      "id": 110005,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "4367:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110008,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4367:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110009,
                  "nodeType": "ExpressionStatement",
                  "src": "4367:41:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110011,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "4503:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 110012,
                        "name": "maturityTimeFirst",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109906,
                        "src": "4508:17:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 110013,
                        "name": "bondAmountFirst",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109908,
                        "src": "4527:15:154",
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
                      "id": 110010,
                      "name": "closeShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120972,
                        120998,
                        121026
                      ],
                      "referencedDeclaration": 120998,
                      "src": "4492:10:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 110014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4492:51:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 110015,
                  "nodeType": "ExpressionStatement",
                  "src": "4492:51:154"
                },
                {
                  "expression": {
                    "id": 110027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 110016,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109915,
                          "src": "4554:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 110017,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109917,
                          "src": "4560:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 110018,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4553:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 110022,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "4600:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 110021,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4592:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 110020,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4592:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 110023,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4592:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 110019,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "4577:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 110024,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4577:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 110025,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4626:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "4577:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 110026,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4577:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4553:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110028,
                  "nodeType": "ExpressionStatement",
                  "src": "4553:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110030,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109915,
                        "src": "4661:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "32",
                        "id": 110031,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4667:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        }
                      ],
                      "id": 110029,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "4652:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4652:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110033,
                  "nodeType": "ExpressionStatement",
                  "src": "4652:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110035,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109917,
                        "src": "4688:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 110036,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109901,
                        "src": "4703:16:154",
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
                      "id": 110034,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "4679:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4679:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110038,
                  "nodeType": "ExpressionStatement",
                  "src": "4679:41:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110040,
                        "name": "UPDATE_GAP",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119653,
                        "src": "4806:10:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 110043,
                            "name": "apr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109883,
                            "src": "4825:3:154",
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
                          "id": 110042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4818:6:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 110041,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4818:6:154",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 110044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4818:11:154",
                        "tryCall": false,
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
                      "id": 110039,
                      "name": "advanceTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121055,
                      "src": "4794:11:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        "typeString": "function (uint256,int256)"
                      }
                    },
                    "id": 110045,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4794:36:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110046,
                  "nodeType": "ExpressionStatement",
                  "src": "4794:36:154"
                },
                {
                  "expression": {
                    "id": 110050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 110047,
                      "name": "currentTimestamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109901,
                      "src": "4840:16:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 110048,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "4859:5:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 110049,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4865:9:154",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "4859:15:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4840:34:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 110051,
                  "nodeType": "ExpressionStatement",
                  "src": "4840:34:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110053,
                        "name": "bob",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117533,
                        "src": "4895:3:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 110054,
                        "name": "maturityTimeSecond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109938,
                        "src": "4900:18:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 110055,
                        "name": "bondAmountSecond",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109940,
                        "src": "4920:16:154",
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
                      "id": 110052,
                      "name": "closeShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120972,
                        120998,
                        121026
                      ],
                      "referencedDeclaration": 120998,
                      "src": "4884:10:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (address,uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 110056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4884:53:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 110057,
                  "nodeType": "ExpressionStatement",
                  "src": "4884:53:154"
                },
                {
                  "expression": {
                    "id": 110069,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 110058,
                          "name": "head",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109915,
                          "src": "4948:4:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 110059,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 109917,
                          "src": "4954:13:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 110060,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4947:21:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 110064,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 119630,
                                  "src": "4994:10:154",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                    "typeString": "contract IHyperdrive"
                                  }
                                ],
                                "id": 110063,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4986:7:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 110062,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4986:7:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 110065,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4986:19:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 110061,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14346,
                            "src": "4971:14:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                              "typeString": "type(contract MockHyperdrive)"
                            }
                          },
                          "id": 110066,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4971:35:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                            "typeString": "contract MockHyperdrive"
                          }
                        },
                        "id": 110067,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5020:14:154",
                        "memberName": "getOracleState",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13771,
                        "src": "4971:63:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function () view external returns (uint256,uint256)"
                        }
                      },
                      "id": 110068,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4971:65:154",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4947:89:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110070,
                  "nodeType": "ExpressionStatement",
                  "src": "4947:89:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110072,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109915,
                        "src": "5055:4:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "33",
                        "id": 110073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5061:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        }
                      ],
                      "id": 110071,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "5046:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5046:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110075,
                  "nodeType": "ExpressionStatement",
                  "src": "5046:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110077,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109917,
                        "src": "5082:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 110078,
                        "name": "currentTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 109901,
                        "src": "5097:16:154",
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
                      "id": 110076,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "5073:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5073:41:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110080,
                  "nodeType": "ExpressionStatement",
                  "src": "5073:41:154"
                }
              ]
            },
            "functionSelector": "6b3992c7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_oracle_write_short",
            "nameLocation": "2935:23:154",
            "parameters": {
              "id": 109880,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2958:2:154"
            },
            "returnParameters": {
              "id": 109881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2970:0:154"
            },
            "scope": 110291,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 110122,
            "nodeType": "FunctionDefinition",
            "src": "5127:257:154",
            "nodes": [],
            "body": {
              "id": 110121,
              "nodeType": "Block",
              "src": "5170:214:154",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    110086
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110086,
                      "mutability": "mutable",
                      "name": "apr",
                      "nameLocation": "5188:3:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110121,
                      "src": "5180:11:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110085,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5180:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 110088,
                  "initialValue": {
                    "hexValue": "302e3035653138",
                    "id": 110087,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5194:7:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_50000000000000000_by_1",
                      "typeString": "int_const 50000000000000000"
                    },
                    "value": "0.05e18"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5180:21:154"
                },
                {
                  "body": {
                    "id": 110119,
                    "nodeType": "Block",
                    "src": "5245:133:154",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 110108,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 110106,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 110090,
                                "src": "5308:1:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "31653138",
                                "id": 110107,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5312:4:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                  "typeString": "int_const 1000000000000000000"
                                },
                                "value": "1e18"
                              },
                              "src": "5308:8:154",
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
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 110102,
                                      "name": "hyperdrive",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 119630,
                                      "src": "5282:10:154",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                        "typeString": "contract IHyperdrive"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                        "typeString": "contract IHyperdrive"
                                      }
                                    ],
                                    "id": 110101,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5274:7:154",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 110100,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5274:7:154",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 110103,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5274:19:154",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 110099,
                                "name": "MockHyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14346,
                                "src": "5259:14:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                                  "typeString": "type(contract MockHyperdrive)"
                                }
                              },
                              "id": 110104,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5259:35:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                "typeString": "contract MockHyperdrive"
                              }
                            },
                            "id": 110105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5295:12:154",
                            "memberName": "recordOracle",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13807,
                            "src": "5259:48:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256) external"
                            }
                          },
                          "id": 110109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5259:58:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 110110,
                        "nodeType": "ExpressionStatement",
                        "src": "5259:58:154"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 110112,
                              "name": "UPDATE_GAP",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 119653,
                              "src": "5343:10:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 110115,
                                  "name": "apr",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 110086,
                                  "src": "5362:3:154",
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
                                "id": 110114,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5355:6:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 110113,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5355:6:154",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 110116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5355:11:154",
                              "tryCall": false,
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
                            "id": 110111,
                            "name": "advanceTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121055,
                            "src": "5331:11:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                              "typeString": "function (uint256,int256)"
                            }
                          },
                          "id": 110117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5331:36:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 110118,
                        "nodeType": "ExpressionStatement",
                        "src": "5331:36:154"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 110095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 110093,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110090,
                      "src": "5231:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "hexValue": "3132",
                      "id": 110094,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5236:2:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_12_by_1",
                        "typeString": "int_const 12"
                      },
                      "value": "12"
                    },
                    "src": "5231:7:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 110120,
                  "initializationExpression": {
                    "assignments": [
                      110090
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 110090,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "5224:1:154",
                        "nodeType": "VariableDeclaration",
                        "scope": 110120,
                        "src": "5216:9:154",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 110089,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5216:7:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 110092,
                    "initialValue": {
                      "hexValue": "31",
                      "id": 110091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5228:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5216:13:154"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 110097,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5240:3:154",
                      "subExpression": {
                        "id": 110096,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110090,
                        "src": "5240:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 110098,
                    "nodeType": "ExpressionStatement",
                    "src": "5240:3:154"
                  },
                  "nodeType": "ForStatement",
                  "src": "5211:167:154"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recordTwelveDataPoints",
            "nameLocation": "5136:22:154",
            "parameters": {
              "id": 110083,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5158:2:154"
            },
            "returnParameters": {
              "id": 110084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5170:0:154"
            },
            "scope": 110291,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 110144,
            "nodeType": "FunctionDefinition",
            "src": "5390:189:154",
            "nodes": [],
            "body": {
              "id": 110143,
              "nodeType": "Block",
              "src": "5436:143:154",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 110125,
                        "name": "vm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17796,
                        "src": "5446:2:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Vm_$28947",
                          "typeString": "contract Vm"
                        }
                      },
                      "id": 110127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5449:12:154",
                      "memberName": "expectRevert",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 28609,
                      "src": "5446:15:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                        "typeString": "function () external"
                      }
                    },
                    "id": 110128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5446:17:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110129,
                  "nodeType": "ExpressionStatement",
                  "src": "5446:17:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 110140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 110137,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "5536:5:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 110138,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5542:9:154",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "5536:15:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "333635",
                          "id": 110139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5554:8:154",
                          "subdenomination": "days",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_31536000_by_1",
                            "typeString": "int_const 31536000"
                          },
                          "value": "365"
                        },
                        "src": "5536:26:154",
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
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 110133,
                                "name": "hyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 119630,
                                "src": "5504:10:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              ],
                              "id": 110132,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5496:7:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 110131,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5496:7:154",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 110134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5496:19:154",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 110130,
                          "name": "HyperdriveDataProvider",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1927,
                          "src": "5473:22:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveDataProvider_$1927_$",
                            "typeString": "type(contract HyperdriveDataProvider)"
                          }
                        },
                        "id": 110135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5473:43:154",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_HyperdriveDataProvider_$1927",
                          "typeString": "contract HyperdriveDataProvider"
                        }
                      },
                      "id": 110136,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5517:5:154",
                      "memberName": "query",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1926,
                      "src": "5473:49:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view external returns (uint256)"
                      }
                    },
                    "id": 110141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5473:99:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 110142,
                  "nodeType": "ExpressionStatement",
                  "src": "5473:99:154"
                }
              ]
            },
            "functionSelector": "6239c5ef",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_oracle_query_reverts",
            "nameLocation": "5399:25:154",
            "parameters": {
              "id": 110123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5424:2:154"
            },
            "returnParameters": {
              "id": 110124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5436:0:154"
            },
            "scope": 110291,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 110290,
            "nodeType": "FunctionDefinition",
            "src": "5585:1304:154",
            "nodes": [],
            "body": {
              "id": 110289,
              "nodeType": "Block",
              "src": "5633:1256:154",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 110147,
                      "name": "recordTwelveDataPoints",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110122,
                      "src": "5712:22:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 110148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5712:24:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110149,
                  "nodeType": "ExpressionStatement",
                  "src": "5712:24:154"
                },
                {
                  "assignments": [
                    110151
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110151,
                      "mutability": "mutable",
                      "name": "originalTimestamp",
                      "nameLocation": "5754:17:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110289,
                      "src": "5746:25:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110150,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5746:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 110156,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 110155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 110152,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "5774:5:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 110153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5780:9:154",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "5774:15:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 110154,
                      "name": "UPDATE_GAP",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119653,
                      "src": "5792:10:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5774:28:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5746:56:154"
                },
                {
                  "assignments": [
                    110158,
                    110160
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110158,
                      "mutability": "mutable",
                      "name": "head",
                      "nameLocation": "5821:4:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110289,
                      "src": "5813:12:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110157,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5813:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 110160,
                      "mutability": "mutable",
                      "name": "lastTimestamp",
                      "nameLocation": "5835:13:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110289,
                      "src": "5827:21:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110159,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5827:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 110169,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 110164,
                                "name": "hyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 119630,
                                "src": "5888:10:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                  "typeString": "contract IHyperdrive"
                                }
                              ],
                              "id": 110163,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5880:7:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 110162,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5880:7:154",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 110165,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5880:19:154",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 110161,
                          "name": "MockHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14346,
                          "src": "5852:14:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                            "typeString": "type(contract MockHyperdrive)"
                          }
                        },
                        "id": 110166,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5852:57:154",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                          "typeString": "contract MockHyperdrive"
                        }
                      },
                      "id": 110167,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5910:14:154",
                      "memberName": "getOracleState",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13771,
                      "src": "5852:72:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view external returns (uint256,uint256)"
                      }
                    },
                    "id": 110168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5852:74:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5812:114:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110171,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110158,
                        "src": "5945:4:154",
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
                        "id": 110174,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3132",
                          "id": 110172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5951:2:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_12_by_1",
                            "typeString": "int_const 12"
                          },
                          "value": "12"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "id": 110173,
                          "name": "ORACLE_SIZE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119650,
                          "src": "5956:11:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5951:16:154",
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
                      "id": 110170,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "5936:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5936:32:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110176,
                  "nodeType": "ExpressionStatement",
                  "src": "5936:32:154"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 110178,
                        "name": "lastTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110160,
                        "src": "5987:13:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 110179,
                        "name": "originalTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110151,
                        "src": "6002:17:154",
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
                      "id": 110177,
                      "name": "assertEq",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        17970,
                        17995,
                        18008,
                        18024,
                        18066,
                        18108,
                        18150,
                        18187,
                        18224,
                        18261,
                        15766,
                        15791,
                        15821,
                        15846,
                        15905,
                        15930,
                        15960,
                        15985,
                        17458,
                        17493
                      ],
                      "referencedDeclaration": 15960,
                      "src": "5978:8:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 110180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5978:42:154",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110181,
                  "nodeType": "ExpressionStatement",
                  "src": "5978:42:154"
                },
                {
                  "assignments": [
                    110183
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110183,
                      "mutability": "mutable",
                      "name": "check",
                      "nameLocation": "6109:5:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110289,
                      "src": "6101:13:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110182,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6101:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 110185,
                  "initialValue": {
                    "id": 110184,
                    "name": "originalTimestamp",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 110151,
                    "src": "6117:17:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6101:33:154"
                },
                {
                  "body": {
                    "id": 110225,
                    "nodeType": "Block",
                    "src": "6196:191:154",
                    "statements": [
                      {
                        "assignments": [
                          null,
                          110205
                        ],
                        "declarations": [
                          null,
                          {
                            "constant": false,
                            "id": 110205,
                            "mutability": "mutable",
                            "name": "time",
                            "nameLocation": "6221:4:154",
                            "nodeType": "VariableDeclaration",
                            "scope": 110225,
                            "src": "6213:12:154",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 110204,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6213:7:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 110215,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 110213,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110187,
                              "src": "6293:1:154",
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
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 110209,
                                      "name": "hyperdrive",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 119630,
                                      "src": "6252:10:154",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                        "typeString": "contract IHyperdrive"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                        "typeString": "contract IHyperdrive"
                                      }
                                    ],
                                    "id": 110208,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6244:7:154",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 110207,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6244:7:154",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 110210,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6244:19:154",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 110206,
                                "name": "MockHyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14346,
                                "src": "6229:14:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_MockHyperdrive_$14346_$",
                                  "typeString": "type(contract MockHyperdrive)"
                                }
                              },
                              "id": 110211,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6229:35:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                "typeString": "contract MockHyperdrive"
                              }
                            },
                            "id": 110212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6265:10:154",
                            "memberName": "loadOracle",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13797,
                            "src": "6229:46:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256) view external returns (uint256,uint256)"
                            }
                          },
                          "id": 110214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6229:79:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6210:98:154"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 110217,
                              "name": "time",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110205,
                              "src": "6331:4:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 110218,
                              "name": "check",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110183,
                              "src": "6337:5:154",
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
                            "id": 110216,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 15960,
                            "src": "6322:8:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256)"
                            }
                          },
                          "id": 110219,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6322:21:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 110220,
                        "nodeType": "ExpressionStatement",
                        "src": "6322:21:154"
                      },
                      {
                        "expression": {
                          "id": 110223,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 110221,
                            "name": "check",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 110183,
                            "src": "6357:5:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 110222,
                            "name": "UPDATE_GAP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119653,
                            "src": "6366:10:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6357:19:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 110224,
                        "nodeType": "ExpressionStatement",
                        "src": "6357:19:154"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 110192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 110190,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110187,
                      "src": "6164:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "33",
                      "id": 110191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6169:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_3_by_1",
                        "typeString": "int_const 3"
                      },
                      "value": "3"
                    },
                    "src": "6164:6:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 110226,
                  "initializationExpression": {
                    "assignments": [
                      110187
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 110187,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6157:1:154",
                        "nodeType": "VariableDeclaration",
                        "scope": 110226,
                        "src": "6149:9:154",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 110186,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6149:7:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 110189,
                    "initialValue": {
                      "hexValue": "32",
                      "id": 110188,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6161:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6149:13:154"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 110202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 110193,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110187,
                        "src": "6172:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 110196,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 110194,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 110187,
                            "src": "6176:1:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 110195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6181:1:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "6176:6:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 110200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 110198,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 110187,
                            "src": "6189:1:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 110199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6193:1:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "6189:5:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 110201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "6176:18:154",
                        "trueExpression": {
                          "hexValue": "34",
                          "id": 110197,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6185:1:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4_by_1",
                            "typeString": "int_const 4"
                          },
                          "value": "4"
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6172:22:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 110203,
                    "nodeType": "ExpressionStatement",
                    "src": "6172:22:154"
                  },
                  "nodeType": "ForStatement",
                  "src": "6144:243:154"
                },
                {
                  "assignments": [
                    110228
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110228,
                      "mutability": "mutable",
                      "name": "period",
                      "nameLocation": "6475:6:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110289,
                      "src": "6467:14:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110227,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6467:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 110232,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 110231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 110229,
                      "name": "UPDATE_GAP",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119653,
                      "src": "6484:10:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 110230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6497:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6484:14:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6467:31:154"
                },
                {
                  "assignments": [
                    110234
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110234,
                      "mutability": "mutable",
                      "name": "finalData",
                      "nameLocation": "6516:9:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110289,
                      "src": "6508:17:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110233,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6508:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 110236,
                  "initialValue": {
                    "hexValue": "3132",
                    "id": 110235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6528:2:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_12_by_1",
                      "typeString": "int_const 12"
                    },
                    "value": "12"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6508:22:154"
                },
                {
                  "assignments": [
                    110238
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 110238,
                      "mutability": "mutable",
                      "name": "currentData",
                      "nameLocation": "6548:11:154",
                      "nodeType": "VariableDeclaration",
                      "scope": 110289,
                      "src": "6540:19:154",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 110237,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6540:7:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 110240,
                  "initialValue": {
                    "hexValue": "3132",
                    "id": 110239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6562:2:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_12_by_1",
                      "typeString": "int_const 12"
                    },
                    "value": "12"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6540:24:154"
                },
                {
                  "body": {
                    "id": 110287,
                    "nodeType": "Block",
                    "src": "6620:263:154",
                    "statements": [
                      {
                        "assignments": [
                          110254
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 110254,
                            "mutability": "mutable",
                            "name": "avg",
                            "nameLocation": "6642:3:154",
                            "nodeType": "VariableDeclaration",
                            "scope": 110287,
                            "src": "6634:11:154",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 110253,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6634:7:154",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 110264,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 110262,
                              "name": "period",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110228,
                              "src": "6715:6:154",
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
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 110258,
                                      "name": "hyperdrive",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 119630,
                                      "src": "6679:10:154",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                        "typeString": "contract IHyperdrive"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                        "typeString": "contract IHyperdrive"
                                      }
                                    ],
                                    "id": 110257,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6671:7:154",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 110256,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6671:7:154",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 110259,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6671:19:154",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 110255,
                                "name": "HyperdriveDataProvider",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1927,
                                "src": "6648:22:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_HyperdriveDataProvider_$1927_$",
                                  "typeString": "type(contract HyperdriveDataProvider)"
                                }
                              },
                              "id": 110260,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6648:43:154",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_HyperdriveDataProvider_$1927",
                                "typeString": "contract HyperdriveDataProvider"
                              }
                            },
                            "id": 110261,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6692:5:154",
                            "memberName": "query",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1926,
                            "src": "6648:49:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view external returns (uint256)"
                            }
                          },
                          "id": 110263,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6648:87:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6634:101:154"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 110266,
                              "name": "avg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110254,
                              "src": "6758:3:154",
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
                              "id": 110276,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 110273,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 110269,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 110267,
                                        "name": "finalData",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 110234,
                                        "src": "6764:9:154",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "hexValue": "31653138",
                                        "id": 110268,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6776:4:154",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                          "typeString": "int_const 1000000000000000000"
                                        },
                                        "value": "1e18"
                                      },
                                      "src": "6764:16:154",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "+",
                                    "rightExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 110272,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 110270,
                                        "name": "currentData",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 110238,
                                        "src": "6783:11:154",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "hexValue": "31653138",
                                        "id": 110271,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6797:4:154",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                          "typeString": "int_const 1000000000000000000"
                                        },
                                        "value": "1e18"
                                      },
                                      "src": "6783:18:154",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "6764:37:154",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 110274,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "6763:39:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "hexValue": "32",
                                "id": 110275,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6805:1:154",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "6763:43:154",
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
                            "id": 110265,
                            "name": "assertEq",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17970,
                              17995,
                              18008,
                              18024,
                              18066,
                              18108,
                              18150,
                              18187,
                              18224,
                              18261,
                              15766,
                              15791,
                              15821,
                              15846,
                              15905,
                              15930,
                              15960,
                              15985,
                              17458,
                              17493
                            ],
                            "referencedDeclaration": 15960,
                            "src": "6749:8:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256)"
                            }
                          },
                          "id": 110277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6749:58:154",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 110278,
                        "nodeType": "ExpressionStatement",
                        "src": "6749:58:154"
                      },
                      {
                        "expression": {
                          "id": 110281,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 110279,
                            "name": "currentData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 110238,
                            "src": "6822:11:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "hexValue": "31",
                            "id": 110280,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6837:1:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "6822:16:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 110282,
                        "nodeType": "ExpressionStatement",
                        "src": "6822:16:154"
                      },
                      {
                        "expression": {
                          "id": 110285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 110283,
                            "name": "period",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 110228,
                            "src": "6852:6:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 110284,
                            "name": "UPDATE_GAP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119653,
                            "src": "6862:10:154",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6852:20:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 110286,
                        "nodeType": "ExpressionStatement",
                        "src": "6852:20:154"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 110249,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 110245,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110242,
                      "src": "6594:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 110248,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 110246,
                        "name": "ORACLE_SIZE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119650,
                        "src": "6598:11:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 110247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6612:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "6598:15:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6594:19:154",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 110288,
                  "initializationExpression": {
                    "assignments": [
                      110242
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 110242,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6587:1:154",
                        "nodeType": "VariableDeclaration",
                        "scope": 110288,
                        "src": "6579:9:154",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 110241,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6579:7:154",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 110244,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 110243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6591:1:154",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6579:13:154"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 110251,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6615:3:154",
                      "subExpression": {
                        "id": 110250,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 110242,
                        "src": "6615:1:154",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 110252,
                    "nodeType": "ExpressionStatement",
                    "src": "6615:3:154"
                  },
                  "nodeType": "ForStatement",
                  "src": "6574:309:154"
                }
              ]
            },
            "functionSelector": "d4dbd48f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test_oracle_data_recordings",
            "nameLocation": "5594:27:154",
            "parameters": {
              "id": 110145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5621:2:154"
            },
            "returnParameters": {
              "id": 110146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5633:0:154"
            },
            "scope": 110291,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 109672,
              "name": "HyperdriveTest",
              "nameLocations": [
                "671:14:154"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 121861,
              "src": "671:14:154"
            },
            "id": 109673,
            "nodeType": "InheritanceSpecifier",
            "src": "671:14:154"
          }
        ],
        "canonicalName": "TWAPTest",
        "contractDependencies": [
          12669,
          14346,
          14422
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          110291,
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
        "name": "TWAPTest",
        "nameLocation": "659:8:154",
        "scope": 110292,
        "usedErrors": [
          117551,
          117553
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 154
} as const;
