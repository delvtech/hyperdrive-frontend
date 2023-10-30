export const SandwichTest = {
  abi: [
    {
      inputs: [],
      name: "FixedPointMath_InvalidExponent",
      type: "error",
    },
    {
      inputs: [],
      name: "FixedPointMath_InvalidInput",
      type: "error",
    },
    {
      inputs: [],
      name: "WhaleBalanceExceeded",
      type: "error",
    },
    {
      inputs: [],
      name: "WhaleIsContract",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lpAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
      ],
      name: "AddLiquidity",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "CloseLong",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "CloseShort",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "version",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "hyperdrive",
          type: "address",
        },
        {
          components: [
            {
              internalType: "contract IERC20",
              name: "baseToken",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "initialSharePrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minimumShareReserves",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minimumTransactionAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "positionDuration",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "checkpointDuration",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "timeStretch",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "governance",
              type: "address",
            },
            {
              internalType: "address",
              name: "feeCollector",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "curve",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "flat",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "governance",
                  type: "uint256",
                },
              ],
              internalType: "struct IHyperdrive.Fees",
              name: "fees",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "oracleSize",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "updateGap",
              type: "uint256",
            },
          ],
          indexed: false,
          internalType: "struct IHyperdrive.PoolConfig",
          name: "config",
          type: "tuple",
        },
        {
          indexed: false,
          internalType: "address",
          name: "linkerFactory",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "linkerCodeHash",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "bytes32[]",
          name: "extraData",
          type: "bytes32[]",
        },
      ],
      name: "Deployed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lpAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "apr",
          type: "uint256",
        },
      ],
      name: "Initialize",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "OpenLong",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "OpenShort",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "withdrawalShareAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
      ],
      name: "RedeemWithdrawalShares",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lpAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "withdrawalShareAmount",
          type: "uint256",
        },
      ],
      name: "RemoveLiquidity",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "log",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "log_address",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256[]",
          name: "val",
          type: "uint256[]",
        },
      ],
      name: "log_array",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "int256[]",
          name: "val",
          type: "int256[]",
        },
      ],
      name: "log_array",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address[]",
          name: "val",
          type: "address[]",
        },
      ],
      name: "log_array",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "log_bytes",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "log_bytes32",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      name: "log_int",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "address",
          name: "val",
          type: "address",
        },
      ],
      name: "log_named_address",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "val",
          type: "uint256[]",
        },
      ],
      name: "log_named_array",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "int256[]",
          name: "val",
          type: "int256[]",
        },
      ],
      name: "log_named_array",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "val",
          type: "address[]",
        },
      ],
      name: "log_named_array",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "val",
          type: "bytes",
        },
      ],
      name: "log_named_bytes",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "val",
          type: "bytes32",
        },
      ],
      name: "log_named_bytes32",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "int256",
          name: "val",
          type: "int256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "decimals",
          type: "uint256",
        },
      ],
      name: "log_named_decimal_int",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "val",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "decimals",
          type: "uint256",
        },
      ],
      name: "log_named_decimal_uint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "int256",
          name: "val",
          type: "int256",
        },
      ],
      name: "log_named_int",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "val",
          type: "string",
        },
      ],
      name: "log_named_string",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "key",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "val",
          type: "uint256",
        },
      ],
      name: "log_named_uint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "log_string",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "log_uint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "logs",
      type: "event",
    },
    {
      inputs: [],
      name: "IS_TEST",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_value",
          type: "uint256",
        },
        {
          internalType: "int256",
          name: "_delta",
          type: "int256",
        },
        {
          internalType: "uint256",
          name: "_targetValue",
          type: "uint256",
        },
      ],
      name: "assertWithDelta",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
      ],
      name: "createUser",
      outputs: [
        {
          internalType: "address",
          name: "_user",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "excludeArtifacts",
      outputs: [
        {
          internalType: "string[]",
          name: "excludedArtifacts_",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "excludeContracts",
      outputs: [
        {
          internalType: "address[]",
          name: "excludedContracts_",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "excludeSenders",
      outputs: [
        {
          internalType: "address[]",
          name: "excludedSenders_",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "failed",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "setUp",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "targetArtifactSelectors",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "addr",
              type: "address",
            },
            {
              internalType: "bytes4[]",
              name: "selectors",
              type: "bytes4[]",
            },
          ],
          internalType: "struct StdInvariant.FuzzSelector[]",
          name: "targetedArtifactSelectors_",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "targetArtifacts",
      outputs: [
        {
          internalType: "string[]",
          name: "targetedArtifacts_",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "targetContracts",
      outputs: [
        {
          internalType: "address[]",
          name: "targetedContracts_",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "targetSelectors",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "addr",
              type: "address",
            },
            {
              internalType: "bytes4[]",
              name: "selectors",
              type: "bytes4[]",
            },
          ],
          internalType: "struct StdInvariant.FuzzSelector[]",
          name: "targetedSelectors_",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "targetSenders",
      outputs: [
        {
          internalType: "address[]",
          name: "targetedSenders_",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "apr",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "tradeSize",
          type: "uint256",
        },
      ],
      name: "test_sandwich_long_trade",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "_apr",
          type: "uint8",
        },
      ],
      name: "test_sandwich_lp",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "fixedRate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "contribution",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "tradeAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "sandwichAmount",
          type: "uint256",
        },
      ],
      name: "test_sandwich_short_trade",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "_apr",
          type: "uint8",
        },
        {
          internalType: "uint64",
          name: "_timeDelta",
          type: "uint64",
        },
      ],
      name: "test_sandwich_trades",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "whale",
          type: "address",
        },
        {
          internalType: "contract IERC20",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "whaleTransfer",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "whale",
          type: "address",
        },
        {
          internalType: "contract IERC20",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "whaleTransfer",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode: {
    object:
      "0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000194565b602990620000c09082620002f8565b5060405163f877cb1960e01b815260206004820152600e60248201526d11d3d154931257d49410d7d5549360921b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015a919081019062000194565b602a90620001699082620002f8565b503480156200017757600080fd5b50620003c4565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a857600080fd5b82516001600160401b0380821115620001c057600080fd5b818501915085601f830112620001d557600080fd5b815181811115620001ea57620001ea6200017e565b604051601f8201601f19908116603f011681019083821181831017156200021557620002156200017e565b8160405282815288868487010111156200022e57600080fd5b600093505b8284101562000252578484018601518185018701529285019262000233565b600086848301015280965050505050505092915050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f357600081815260208120601f850160051c81016020861015620002ce5750805b601f850160051c820191505b81811015620002ef57828155600101620002da565b5050505b505050565b81516001600160401b038111156200031457620003146200017e565b6200032c8162000325845462000269565b84620002a5565b602080601f8311600181146200036457600084156200034b5750858301515b600019600386901b1c1916600185901b178555620002ef565b600085815260208120601f198616915b82811015620003955788860151825594840194600190910190840162000374565b5085821015620003b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b62010f5380620003d56000396000f3fe60806040523480156200001157600080fd5b5060043610620001395760003560e01c806366d9a9a011620000bb578063b5508aa9116200007a578063b5508aa91462000280578063ba414fa6146200028a578063e20c9f7114620002a5578063e6ee489914620002af578063fa7626d414620002c657600080fd5b806366d9a9a0146200021657806385226c81146200022f578063916a17c61462000248578063aa739f8c1462000252578063ab75e7c3146200026957600080fd5b80632ce672a911620001085780632ce672a914620001a45780633e5e0d2614620001bb5780633e5e3c2314620001d25780633f7286f414620001dc578063507ffba514620001e657600080fd5b8063021db0e7146200013e5780630a9254e414620001575780631071676014620001615780631ed7831c146200018b575b600080fd5b620001556200014f366004620050ee565b620002d4565b005b62000155620004c7565b620001786200017236600462005137565b6200093e565b6040519081526020015b60405180910390f35b62000195620009c8565b60405162000182919062005189565b62000155620001b5366004620051ea565b62000a2c565b62000178620001cc36600462005232565b62000d42565b6200019562000fa5565b6200019562001007565b620001fd620001f7366004620052f6565b62001069565b6040516001600160a01b03909116815260200162000182565b620002206200117f565b604051620001829190620053b1565b6200023962001272565b604051620001829190620054bc565b620002206200134c565b620001556200026336600462005522565b62001436565b620001556200027a36600462005545565b6200162c565b6200023962001965565b6200029462001a3f565b604051901515815260200162000182565b6200019562001b6c565b62000155620002c036600462005572565b62001bce565b600754620002949060ff1681565b6000620002e866b1a2bc2ec5000062001dbc565b601c5490915062000303906001600160a01b03168262001e82565b6200031f8566038d7ea4c68000670de0b6b3a764000062001ff0565b94506200034384683635c9adc5dea000006b019d971e4fe8401e7400000062001ff0565b601c5490945060009062000362906001600160a01b031687876200207c565b905081604001516002620003779190620055a6565b620003839086620055c0565b602c54909550620003cb90670de0b6b3a764000090620003c290670c7d713b49da000090620003bb906001600160a01b0316620020b9565b90620020ce565b86919062001ff0565b601d54909450620003e6906001600160a01b031685620020e5565b50620004069050620003fe600c6301e13380620055c0565b60006200212b565b602c546200043590670de0b6b3a7640000906200042c906001600160a01b0316620020b9565b85919062001ff0565b601e54909350600090819062000455906001600160a01b031686620020e5565b9150915062000467600c60006200212b565b601e5460009062000483906001600160a01b0316848862002205565b90506200049181836200222d565b601c54600090620004ac906001600160a01b0316866200232b565b509050620004bb818a62002353565b50505050505050505050565b620004d1620023b6565b601c546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062010def833981519152906306447d5690602401600060405180830381600087803b1580156200052657600080fd5b505af11580156200053b573d6000803e3d6000fd5b505050506012600080604051620005529062005025565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f080158015620005c8573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620006968462002696565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a090920191909152519091506000908290620006e69062005033565b620006f2919062005691565b604051809103906000f0801580156200070f573d6000803e3d6000fd5b5090508181604051620007229062005041565b6200072f929190620056a2565b604051809103906000f0801580156200074c573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620007c157600080fd5b505af1158015620007d6573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062010def83398151915293506306447d56925001600060405180830381600087803b1580156200082e57600080fd5b505af115801562000843573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b1580156200089857600080fd5b505af1158015620008ad573d6000803e3d6000fd5b5050602b5460ff1691506200093890505760008051602062010def83398151915263e5d6bf02620008e46301e133806003620055a6565b6040518263ffffffff1660e01b81526004016200090391815260200190565b600060405180830381600087803b1580156200091e57600080fd5b505af115801562000933573d6000803e3d6000fd5b505050505b50505050565b6040516370a0823160e01b81526001600160a01b038085166004830152600091620009be91869186918216906370a0823190602401602060405180830381865afa15801562000991573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009b79190620056cc565b8562000d42565b90505b9392505050565b6060601480548060200260200160405190810160405280929190818152602001828054801562000a2257602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831162000a03575b5050505050905090565b600062000a4460ff8416662386f26fc10000620055a6565b905067ffffffffffffffff821660008051602062010def833981519152634c63e562662386f26fc10000841080159062000a8657506702c68af0bb1400008411155b6040518263ffffffff1660e01b815260040162000aa7911515815260200190565b60006040518083038186803b15801562000ac057600080fd5b505afa15801562000ad5573d6000803e3d6000fd5b5060008051602062010def8339815191529250634c63e562915050670de0b6b3a7640000831180159062000b07575060015b6040518263ffffffff1660e01b815260040162000b28911515815260200190565b60006040518083038186803b15801562000b4157600080fd5b505afa15801562000b56573d6000803e3d6000fd5b5050601c5466470de4df820000925062000b7f91506001600160a01b03168260008080620026e3565b50601c546b019d971e4fe8401e740000009060009062000baa906001600160a01b031685846200207c565b9050602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562000c01573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c27919062005753565b6040015162000c38906002620055a6565b62000c449083620055c0565b601d549092506a295be96e6406697200000090600090819062000c71906001600160a01b03168462002702565b9092509050600062000c886301e1338088620020ce565b905062000c9681896200212b565b601e546aa56fa5b99019a5c80000009060009062000cbe906001600160a01b031683620020e5565b50601d5490915062000cdb906001600160a01b031686866200273e565b50601e5462000cf5906001600160a01b0316828462002205565b50601c5460009062000d11906001600160a01b0316896200232b565b509050600062000d238a8d8762002766565b50905062000d32828262002353565b5050505050505050505050505050565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa15801562000d8e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000db49190620056cc565b90508084111562000dd85760405163188c93a560e31b815260040160405180910390fd5b60008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562000e2657600080fd5b505af115801562000e3b573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038916600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562000e9057600080fd5b505af115801562000ea5573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a7640000602482015260008051602062010def833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000f0857600080fd5b505af115801562000f1d573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000f71573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000f97919062005815565b50839150505b949350505050565b6060601680548060200260200160405190810160405280929190818152602001828054801562000a22576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000a03575050505050905090565b6060601580548060200260200160405190810160405280929190818152602001828054801562000a22576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000a03575050505050905090565b6000816040516020016200107e919062005839565b60408051601f198184030181529082905280516020909101206318caf8e360e31b8252915060008051602062010def8339815191529063c657c71890620010cc90849086906004016200584e565b600060405180830381600087803b158015620010e757600080fd5b505af1158015620010fc573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab2400000602482015260008051602062010def833981519152925063c88a5e6d9150604401600060405180830381600087803b1580156200116157600080fd5b505af115801562001176573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b82821015620012695760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200125057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620012115790505b50505050508152505081526020019060010190620011a3565b50505050905090565b60606018805480602002602001604051908101604052809291908181526020016000905b8282101562001269578382906000526020600020018054620012b89062005874565b80601f0160208091040260200160405190810160405280929190818152602001828054620012e69062005874565b8015620013375780601f106200130b5761010080835404028352916020019162001337565b820191906000526020600020905b8154815290600101906020018083116200131957829003601f168201915b50505050508152602001906001019062001296565b6060601a805480602002602001604051908101604052809291908181526020016000905b82821015620012695760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200141d57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620013de5790505b5050505050815250508152602001906001019062001370565b6200145282662386f26fc100006706f05b59d3b2000062001ff0565b91506200147581683635c9adc5dea000006a295be960834fb5ca9c000062001ff0565b601c5490915066b1a2bc2ec50000906200149d906001600160a01b03168260008080620026e3565b50601c546b019d971e4fe8401e7400000090620014c5906001600160a01b031684836200207c565b50601d546000908190849082908190620014e9906001600160a01b031684620020e5565b601d54919350915087906000906200150b906001600160a01b03168362002702565b601d54909250600091506200152b906001600160a01b0316868862002205565b9050620015398185620055c0565b97506000620015498484620055c0565b9050620015578982620055c0565b601c5490985066b1a2bc2ec5000097506200158b96506001600160a01b0316945086935060009250829150819050620026e3565b50601c54620015a5906001600160a01b031686856200207c565b50600084620015b58482620058b0565b601e549091506000908190620015d5906001600160a01b03168462002702565b601e549193509150620015f3906001600160a01b031683836200273e565b50620016008382620055c0565b935050505062001624816509184e72a000846200161e9190620055c0565b62002353565b505050505050565b600082128015906200166657620016608483101560405180606001604052806036815260200162010ee8603691396200281a565b6200168d565b6200168d82851160405180606001604052806027815260200162010e2f602791396200281a565b6000816200169c5784620016a8565b620016a88486620058b0565b905060008215620016ba5785620016d1565b620016c585620058c6565b620016d19087620055c0565b905080841080620016e157508184115b1562001757576200171f848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002853565b62001624848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002895565b8215620018575760006200176c8786620055c0565b9050858110156200182a5760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a2025730000000000006020820152620017c290620017bc8389620055c0565b620028d2565b620017f36040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200291b565b620018246040518060400160405280600d81526020016c4e65772044656c74613a20257360981b81525082620028d2565b62001850565b62001850838660405180606001604052806029815260200162010e566029913962002964565b5062001624565b6000620018658588620055c0565b90506200187286620058c6565b8110156200193657620018cd6040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a2025730000000000008152508288620018c190620058c6565b620017bc9190620055c0565b620018fe6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200291b565b620019306040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b81525082620028d2565b6200195c565b6200195c828660405180606001604052806029815260200162010e7f6029913962002964565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b8282101562001269578382906000526020600020018054620019ab9062005874565b80601f0160208091040260200160405190810160405280929190818152602001828054620019d99062005874565b801562001a2a5780601f10620019fe5761010080835404028352916020019162001a2a565b820191906000526020600020905b81548152906001019060200180831162001a0c57829003601f168201915b50505050508152602001906001019062001989565b600754600090610100900460ff161562001a625750600754610100900460ff1690565b600060008051602062010def8339815191523b1562001b67576040805160008051602062010def833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001ae9917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001620058e5565b60408051601f198184030181529082905262001b059162005918565b6000604051808303816000865af19150503d806000811462001b44576040519150601f19603f3d011682016040523d82523d6000602084013e62001b49565b606091505b509150508080602001905181019062001b63919062005815565b9150505b919050565b6060601380548060200260200160405190810160405280929190818152602001828054801562000a22576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000a03575050505050905090565b600062001be660ff8316662386f26fc10000620055a6565b905060008051602062010def833981519152634c63e562662386f26fc10000831080159062001c1d57506702c68af0bb1400008311155b6040518263ffffffff1660e01b815260040162001c3e911515815260200190565b60006040518083038186803b15801562001c5757600080fd5b505afa15801562001c6c573d6000803e3d6000fd5b5050601c5466470de4df820000925066038d7ea4c68000915062001c9e906001600160a01b03168383600080620026e3565b5050601c546b019d971e4fe8401e740000009060009062001cca906001600160a01b031684846200207c565b601d549091506a52b7d2dcc80cd2e400000090600090819062001cf7906001600160a01b03168462002702565b601d54919350915060009062001d17906001600160a01b031685620020e5565b50601d5490915060009062001d36906001600160a01b031688620029a0565b905062001d448187620029dc565b601d5462001d5d906001600160a01b031685856200273e565b50601d5462001d77906001600160a01b0316838762002205565b50601d5462001d90906001600160a01b0316826200232b565b5050601c5460009062001dad906001600160a01b0316886200232b565b509050620004bb818962002353565b62001dc66200504f565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c0810162001e438562002696565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b60008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001ed057600080fd5b505af115801562001ee5573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038516600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562001f3a57600080fd5b505af115801562001f4f573d6000803e3d6000fd5b5050505060008160405162001f649062005033565b62001f70919062005691565b604051809103906000f08015801562001f8d573d6000803e3d6000fd5b509050818160405162001fa09062005041565b62001fad929190620056a2565b604051809103906000f08015801562001fca573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b600081831115620020395760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b60448201526064015b60405180910390fd5b6000620020478484620055c0565b62002054906001620058b0565b905060006200206482876200594c565b9050620020728582620058b0565b9695505050505050565b6000620009be8484846040518060a00160405280600115158152602001878152602001600081526020016000815260200160001981525062002a3f565b6000620020c882600762002db3565b92915050565b6000620009c18383670de0b6b3a764000062002f9e565b6000806200212084846040518060a0016040528060011515815260200187815260200160008152602001600081526020018781525062002fbd565b915091509250929050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b1580156200217957600080fd5b505af11580156200218e573d6000803e3d6000fd5b5060008051602062010def833981519152925063e5d6bf029150620021b690508442620058b0565b6040518263ffffffff1660e01b8152600401620021d591815260200190565b600060405180830381600087803b158015620021f057600080fd5b505af115801562001624573d6000803e3d6000fd5b6000620009be84848460405180604001604052806001151581526020016000815250620033fe565b808210620023275760008051602062010dcf8339815191526040516200228e9060208082526021908201527f4572726f723a2061203c2062206e6f7420736174697366696564205b75696e746040820152605d60f81b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b606082015260208101849052905160008051602062010ec88339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b60608201526020810182905260008051602062010ec8833981519152906080015b60405180910390a16200232762003560565b5050565b6000806200212084846040518060400160405280600115158152602001600081525062003669565b80821015620023275760008051602062010dcf8339815191526040516200228e9060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620023de60405180604001604052806005815260200164616c69636560d81b81525062001069565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b6020820152620024239062001069565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b60208201526200246b9062001069565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b6020820152620024b09062001069565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620024f59062001069565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062002546604051806040016040528060088152602001673232b83637bcb2b960c11b81525062001069565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b60208201526200258e9062001069565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b6020820152620025dc9062001069565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620026289062001069565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b6020820152620026709062001069565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b600080620026cd620026bd620026ae856064620055a6565b66a5bbed86c5a00090620020ce565b6748cd4072281e000090620037ca565b9050620009c1670de0b6b3a764000082620037ca565b620026fb8585670de0b6b3a7640000868686620037e1565b5050505050565b6000806200212084846040518060a0016040528060011515815260200187815260200160008152602001878152602001600019815250620038b4565b6000620009be8484846040518060400160405280600115158152602001600081525062003c31565b600080806200277a846301e13380620037ca565b905060006200279e8260008812620027935787620003bb565b620003bb88620058c6565b90506000861315620027d957620027c1620027b98262003d44565b8890620020ce565b9350620027cf8785620055c0565b9250505062002812565b60008612156200280857620027fa620027f28262003d44565b8890620037ca565b9350620027cf878562005963565b8660009350935050505b935093915050565b81620023275760008051602062010e0f833981519152816040516200284091906200598d565b60405180910390a1620023278262003ed1565b81831015620028905760008051602062010e0f833981519152816040516200287c91906200598d565b60405180910390a162002890838362002353565b505050565b81831115620028905760008051602062010e0f83398151915281604051620028be91906200598d565b60405180910390a1620028908383620029dc565b620023278282604051602401620028eb929190620059be565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262003f3b565b62002327828260405160240162002934929190620059be565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262003f3b565b818314620028905760008051602062010e0f833981519152816040516200298c91906200598d565b60405180910390a162002890838362003f46565b6000620009c183836040518060a00160405280600115158152602001868152602001600081526020016000815260200160001981525062004036565b80821115620023275760008051602062010dcf8339815191526040516200228e9060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002a8f57600080fd5b505af115801562002aa4573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562002af957600080fd5b505af115801562002b0e573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002b73573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002b99919062005753565b516001600160a01b031614801562002baf575081515b1562002c4257602c5460208301518351604051632002b33360e01b81526001600160a01b0390931692632002b333929162002bf49188918a918c9190600401620059e2565b60206040518083038185885af115801562002c13573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002c3a9190620056cc565b905062000f9d565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002c9357600080fd5b505af115801562002ca8573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002d0d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d33919062005815565b50602c548251604051632002b33360e01b81526001600160a01b0390921691632002b3339162002d6d91879189918b9190600401620059e2565b6020604051808303816000875af115801562002d8d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c3a9190620056cc565b6000806001600160a01b0384166320fc488162002dd082620043c0565b6040518263ffffffff1660e01b815260040162002def91815260200190565b6040805180830381865afa15801562002e0c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e32919062005a08565b90506000846001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002e76573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e9c919062005a80565b90506000856001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562002ee0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002f06919062005753565b9050620020726040518061016001604052808460000151815260200184602001518152602001846040015181526020018460a00151815260200184610180015181526020018360c001518152602001846080015181526020018360200151815260200183604001518152602001836101200151600001518152602001836101200151604001518152508460200151600f0b8762004444565b600082600019048411830215820262002fb657600080fd5b5091020490565b60008060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200300e57600080fd5b505af115801562003023573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b1580156200307857600080fd5b505af11580156200308d573d6000803e3d6000fd5b5050602c54620030a992506001600160a01b0316905062004618565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156200311e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003144919062005753565b516001600160a01b03161480156200315a575082515b15620031f957602c54602084015160808501516040808701518751915163a179403b60e01b81526001600160a01b039095169463a179403b9493620031a9938b9391928d919060040162005b2e565b604080518083038185885af1158015620031c7573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620031ee919062005b5c565b909250905062002812565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200324a57600080fd5b505af11580156200325f573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af1158015620032c4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620032ea919062005815565b50602c5460808401516040808601518651915163a179403b60e01b81526001600160a01b039094169363a179403b936200332e938a9391928c919060040162005b2e565b60408051808303816000875af11580156200334d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003373919062005b5c565b602b54602086015192945090925061010090046001600160a01b0316906342966c6890620033a3908490620055c0565b6040518263ffffffff1660e01b8152600401620033c291815260200190565b600060405180830381600087803b158015620033dd57600080fd5b505af1158015620033f2573d6000803e3d6000fd5b50505050935093915050565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200344e57600080fd5b505af115801562003463573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b158015620034b857600080fd5b505af1158015620034cd573d6000803e3d6000fd5b5050602c5460208501518551604051636f8c3a5b60e01b81526001600160a01b039093169450636f8c3a5b935062003511928992899290918c919060040162005b2e565b6020604051808303816000875af115801562003531573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620035579190620056cc565b95945050505050565b60008051602062010def8339815191523b1562003658576040805160008051602062010def833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620035f39291602001620058e5565b60408051601f19818403018152908290526200360f9162005918565b6000604051808303816000865af19150503d80600081146200364e576040519150601f19603f3d011682016040523d82523d6000602084013e62003653565b606091505b505050505b6007805461ff001916610100179055565b60008060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620036ba57600080fd5b505af1158015620036cf573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b1580156200372457600080fd5b505af115801562003739573d6000803e3d6000fd5b5050602c546020860151865160405163c23632a760e01b81526001600160a01b03909316945063c23632a7935062003779928992918b91600401620059e2565b60408051808303816000875af115801562003798573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620037be919062005b5c565b91509150935093915050565b6000620009c183670de0b6b3a76400008462002f9e565b600060405180606001604052808581526020018481526020018381525090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001878152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620038718962002696565b81526024546001600160a01b03908116602083015260235416604082015260608101849052600560808201526103e860a090910152905062000933888262001e82565b60008060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200390557600080fd5b505af11580156200391a573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b1580156200396f57600080fd5b505af115801562003984573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa158015620039e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003a0f919062005753565b516001600160a01b031614801562003a25575082515b1562003ac357602c54602084015160608501516040808701518751915163036d741560e11b81526001600160a01b03909516946306dae82a949362003a74938b9391928d919060040162005b2e565b604080518083038185885af115801562003a92573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062003ab9919062005b5c565b9150915062002812565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562003b0e57600080fd5b505af115801562003b23573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562003b82573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ba8919062005815565b50602c5460608401516040808601518651915163036d741560e11b81526001600160a01b03909416936306dae82a9362003bec938a9391928c919060040162005b2e565b60408051808303816000875af115801562003c0b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ab9919062005b5c565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562003c8157600080fd5b505af115801562003c96573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562003ceb57600080fd5b505af115801562003d00573d6000803e3d6000fd5b5050602c546020850151855160405163fa3fcea760e01b81526001600160a01b03909316945063fa3fcea7935062003511928992899290918c919060040162005b2e565b6000680248ce36a70cb26b3e19821362003d6057506000919050565b680755bf798b4a1bf1e5821262003d8a5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b8062003f385760008051602062010dcf83398151915260405162003f269060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a162003f3862003560565b50565b62003f38816200469b565b808214620023275760008051602062010dcf83398151915260405162003fa89060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b606082015260208101849052905160008051602062010ec88339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b60608201526020810182905260008051602062010ec88339815191529060800162002315565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200408657600080fd5b505af11580156200409b573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038716600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b158015620040f057600080fd5b505af115801562004105573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa1580156200416a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004190919062005753565b516001600160a01b0316148015620041a6575081515b156200424457602c54602083015160608401516080850151855160405163c326a90360e01b81526001600160a01b039095169463c326a9039493620041f6938a93919290918c9160040162005b2e565b60206040518083038185885af115801562004215573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200423c9190620056cc565b9050620009c1565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200429557600080fd5b505af1158015620042aa573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af11580156200430f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004335919062005815565b50602c5460608301516080840151845160405163c326a90360e01b81526001600160a01b039094169363c326a903936200437a938993919290918b9160040162005b2e565b6020604051808303816000875af11580156200439a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200423c9190620056cc565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004402573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004428919062005753565b60a001516200443890426200594c565b620020c89042620055c0565b6040805160608101825260008082526020820181905291810182905260006200447686600001518760200151620046bc565b90506000620044948288604001518960e001518a60a00151620046dc565b90506000620044a48884620046f7565b9050620044b5888285858b6200481f565b1580156040870152908552620044d1579350620009c192505050565b6000620044e089848a62004969565b9050620044f1898286868c6200481f565b151560408701819052908652620045655760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b606482015260840162002030565b60005b878110156200460b576200457f8a83868862004a5b565b158015604089015260208801919091526200460b5760208601518651600091620045aa9190620037ca565b620045b69084620058b0565b905083811115620045c857506200460b565b620045d78b8288888e6200481f565b15801560408a0152908852620045f057809250620045f7565b506200460b565b50620046038162005b81565b905062004568565b5098975050505050505050565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156200465a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004680919062005753565b608001516200468f83620043c0565b620020c89190620058b0565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600080620046cb838562005963565b90506000811215620009c157600080fd5b60006200355782620046f085888862002f9e565b9062004af5565b60008062004722846101000151856020015162004715919062005b9d565b6101008601519062004b56565b9050600062004772620047478660e001518760c00151620037ca90919063ffffffff16565b8660e00151868860a00151670de0b6b3a7640000620047679190620055c0565b896040015162004b6e565b905060006200480b620047a88760a00151670de0b6b3a7640000620047989190620055c0565b670de0b6b3a76400009062004b9d565b620047ff620047ea8960a00151670de0b6b3a7640000620047ca9190620055c0565b620046f0620047de898d60200151620046bc565b60e08d015190620020ce565b60e08a015160c08b0151620003bb91620037ca565b620046f09085620055c0565b9050856040015181620020729190620055c0565b6000806000806200485a878a604001518a8c60a00151670de0b6b3a76400006200484a9190620055c0565b8d60c001518e60e0015162004bb4565b915091508062004873576000809350935050506200495f565b6000620048bb8a60c00151620048968b8a8e61012001518f610140015162004c6a565b620048a88c8b8f610120015162004c85565b620048b49190620055c0565b90620037ca565b620048c79084620055c0565b8a51620048d59190620055c0565b90506000620049098b60c00151620048f860008a62004b5690919063ffffffff16565b8d60800151620048b49190620055c0565b90508a6101000151816200491e9190620058b0565b821062004953576101008b0151620049378284620055c0565b620049439190620055c0565b600195509550505050506200495f565b60008095509550505050505b9550959350505050565b6000808390506000620049e1866101000151620049988860c001518960800151620037ca90919063ffffffff16565b60c0890151620049af90620048b489600062004b56565b8951620049bd9190620058b0565b620049c99190620055c0565b620049d59190620055c0565b60c088015190620020ce565b90506200207262004a16620049ff87670de0b6b3a7640000620055c0565b6101208901516101408a0151620003bb91620020ce565b62004a3b62004a2e88670de0b6b3a7640000620055c0565b6101208a015190620020ce565b62004a479085620055c0565b62004a539190620058b0565b8290620037ca565b600080600062004a6d87878662004cac565b9050600062004abe8860c00151620048b48a6101400151670de0b6b3a764000062004a999190620055c0565b620003bb62004ab18b670de0b6b3a7640000620055c0565b6101208e015190620020ce565b905080821062004ae25762004ad48183620055c0565b600193509350505062004aec565b6000809350935050505b94509492505050565b60008160000362004b105750670de0b6b3a7640000620020c8565b8260000362004b2257506000620020c8565b81600062004b308562004dd3565b905081810262004b49670de0b6b3a76400008262005bc8565b9050620020728162003d44565b600081831362004b675781620009c1565b5090919050565b600062004b7c828462004af5565b62004b91620027b985620046f08989620020ce565b620020729190620058b0565b6000620009c183670de0b6b3a76400008462004fe7565b6000808062004bc48585620037ca565b9050600062004bd782868c8a8d62004b6e565b905062004bea87620046f08a8c620058b0565b98508881101562004c045760008093509350505062004c5f565b600062004c2f62004c1e670de0b6b3a76400008a62004b9d565b620046f085620048b48e87620055c0565b905062004c3d8187620037ca565b9050808b111562004c575762004c54818c620055c0565b94505b600193505050505b965096945050505050565b60006200355762004c7d86868662004c85565b8390620020ce565b6000620009be84620003bb62004ca486670de0b6b3a7640000620055c0565b8590620020ce565b60008062004cf062004cd08660e001518760c00151620037ca90919063ffffffff16565b8660e00151858860a00151670de0b6b3a7640000620047679190620055c0565b9050600062004d3362004d2362004d178860a00151888a60400151620046f09190620058b0565b60c0890151906200500e565b670de0b6b3a764000090620037ca565b9050600062004dba62004d658860a00151670de0b6b3a764000062004d599190620055c0565b60a08a01519062004b9d565b620046f062004d998a60a00151670de0b6b3a764000062004d879190620055c0565b8a8c60400151620046f09190620058b0565b62004da59087620055c0565b60c08b015160e08c0151620003bb91620037ca565b905062004dc88282620020ce565b979650505050505050565b600080821362004df657604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600082600019048411830215820262004fff57600080fd5b50910281810615159190040190565b6000620009c18383670de0b6b3a764000062004fe7565b611daa8062005bfd83390190565b6125b180620079a783390190565b616e778062009f5883390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001620050da60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600080600080608085870312156200510557600080fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b038116811462003f3857600080fd5b6000806000606084860312156200514d57600080fd5b83356200515a8162005121565b925060208401356200516c8162005121565b915060408401356200517e8162005121565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b81811015620051cc5783516001600160a01b031683529284019291840191600101620051a5565b50909695505050505050565b803560ff8116811462001b6757600080fd5b60008060408385031215620051fe57600080fd5b6200520983620051d8565b9150602083013567ffffffffffffffff811681146200522757600080fd5b809150509250929050565b600080600080608085870312156200524957600080fd5b8435620052568162005121565b93506020850135620052688162005121565b9250604085013591506060850135620052818162005121565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715620052c957620052c96200528c565b60405290565b6040516101a0810167ffffffffffffffff81118282101715620052c957620052c96200528c565b6000602082840312156200530957600080fd5b813567ffffffffffffffff808211156200532257600080fd5b818401915084601f8301126200533757600080fd5b8135818111156200534c576200534c6200528c565b604051601f8201601f19908116603f011681019083821181831017156200537757620053776200528c565b816040528281528760208487010111156200539157600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156200545957898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015620054435783516001600160e01b0319168252928b019260019290920191908b019062005417565b50978a01979550505091870191600101620053d9565b50919998505050505050505050565b60005b83811015620054855781810151838201526020016200546b565b50506000910152565b60008151808452620054a881602086016020860162005468565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200551557603f19888603018452620055028583516200548e565b94509285019290850190600101620054e3565b5092979650505050505050565b600080604083850312156200553657600080fd5b50508035926020909101359150565b6000806000606084860312156200555b57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156200558557600080fd5b620009c182620051d8565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417620020c857620020c862005590565b81810381811115620020c857620020c862005590565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e08101516200563a60e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c08101620020c88284620055d6565b6101e08101620056b38285620055d6565b6001600160a01b03929092166101c09190910152919050565b600060208284031215620056df57600080fd5b5051919050565b805162001b678162005121565b6000606082840312156200570657600080fd5b6040516060810181811067ffffffffffffffff821117156200572c576200572c6200528c565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200576757600080fd5b62005771620052a2565b6200577c83620056e6565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620057c860e08401620056e6565b60e0820152610100620057dd818501620056e6565b90820152610120620057f285858301620056f3565b908201526101808301516101408201526101a09092015161016083015250919050565b6000602082840312156200582857600080fd5b81518015158114620009c157600080fd5b602081526000620009c160208301846200548e565b6001600160a01b0383168152604060208201819052600090620009be908301846200548e565b600181811c908216806200588957607f821691505b602082108103620058aa57634e487b7160e01b600052602260045260246000fd5b50919050565b80820180821115620020c857620020c862005590565b6000600160ff1b8201620058de57620058de62005590565b5060000390565b6001600160e01b03198316815281516000906200590a81600485016020870162005468565b919091016004019392505050565b600082516200592c81846020870162005468565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b6000826200595e576200595e62005936565b500690565b818103600083128015838313168383128216171562005986576200598662005590565b5092915050565b60408152600560408201526422b93937b960d91b6060820152608060208201526000620009c160808301846200548e565b604081526000620059d360408301856200548e565b90508260208301529392505050565b93845260208401929092526001600160a01b031660408301521515606082015260800190565b60006040828403121562005a1b57600080fd5b6040516040810181811067ffffffffffffffff8211171562005a415762005a416200528c565b60405282516001600160801b038116811462005a5c57600080fd5b81526020830151600f81900b811462005a7457600080fd5b60208201529392505050565b60006101a0828403121562005a9457600080fd5b62005a9e620052cf565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b948552602085019390935260408401919091526001600160a01b031660608301521515608082015260a00190565b6000806040838503121562005b7057600080fd5b505080516020909101519092909150565b60006001820162005b965762005b9662005590565b5060010190565b808201828112600083128015821682158216171562005bc05762005bc062005590565b505092915050565b60008262005bda5762005bda62005936565b600160ff1b82146000198414161562005bf75762005bf762005590565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a264697066735822122091d82ed0fb28abab5e0dff56134b9a989b38aba610058055b581acc7797d905364736f6c63430008130033",
    sourceMap:
      "343:8177:126:-:0;;;;;1572:26:50;;;1594:4;-1:-1:-1;;1572:26:50;;;;;;;;3126:44:54;;;;;;;;;;;-1:-1:-1;;;1262:31:159;;216:2:165;1262:31:159;198:21:165;255:2;235:18;228:30;-1:-1:-1;;;274:18:165;267:45;1262:12:159;;329:18:165;1262:31:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1262:31:159;;;;;;;;;;;;:::i;:::-;1237:56;;;;;;:::i;:::-;-1:-1:-1;1323:30:159;;-1:-1:-1;;;1323:30:159;;4328:2:165;1323:30:159;;;4310:21:165;4367:2;4347:18;;;4340:30;-1:-1:-1;;;4386:18:165;;;4379:44;1323:12:159;;;;4440:18:165;;1323:30:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1323:30:159;;;;;;;;;;;;:::i;:::-;1299:54;;;;;;:::i;:::-;;343:8177:126;;;;;;;;;;;;358:127:165;419:10;414:3;410:20;407:1;400:31;450:4;447:1;440:15;474:4;471:1;464:15;490:1042;570:6;601:2;644;632:9;623:7;619:23;615:32;612:52;;;660:1;657;650:12;612:52;687:16;;-1:-1:-1;;;;;752:14:165;;;749:34;;;779:1;776;769:12;749:34;817:6;806:9;802:22;792:32;;862:7;855:4;851:2;847:13;843:27;833:55;;884:1;881;874:12;833:55;913:2;907:9;935:2;931;928:10;925:36;;;941:18;;:::i;:::-;1016:2;1010:9;984:2;1070:13;;-1:-1:-1;;1066:22:165;;;1090:2;1062:31;1058:40;1046:53;;;1114:18;;;1134:22;;;1111:46;1108:72;;;1160:18;;:::i;:::-;1200:10;1196:2;1189:22;1235:2;1227:6;1220:18;1275:7;1270:2;1265;1261;1257:11;1253:20;1250:33;1247:53;;;1296:1;1293;1286:12;1247:53;1318:1;1309:10;;1328:129;1342:2;1339:1;1336:9;1328:129;;;1430:10;;;1426:19;;1420:26;1399:14;;;1395:23;;1388:59;1353:10;;;;1328:129;;;1499:1;1494:2;1489;1481:6;1477:15;1473:24;1466:35;1520:6;1510:16;;;;;;;;490:1042;;;;:::o;1537:380::-;1616:1;1612:12;;;;1659;;;1680:61;;1734:4;1726:6;1722:17;1712:27;;1680:61;1787:2;1779:6;1776:14;1756:18;1753:38;1750:161;;1833:10;1828:3;1824:20;1821:1;1814:31;1868:4;1865:1;1858:15;1896:4;1893:1;1886:15;1750:161;;1537:380;;;:::o;2048:545::-;2150:2;2145:3;2142:11;2139:448;;;2186:1;2211:5;2207:2;2200:17;2256:4;2252:2;2242:19;2326:2;2314:10;2310:19;2307:1;2303:27;2297:4;2293:38;2362:4;2350:10;2347:20;2344:47;;;-1:-1:-1;2385:4:165;2344:47;2440:2;2435:3;2431:12;2428:1;2424:20;2418:4;2414:31;2404:41;;2495:82;2513:2;2506:5;2503:13;2495:82;;;2558:17;;;2539:1;2528:13;2495:82;;;2499:3;;;2139:448;2048:545;;;:::o;2769:1352::-;2889:10;;-1:-1:-1;;;;;2911:30:165;;2908:56;;;2944:18;;:::i;:::-;2973:97;3063:6;3023:38;3055:4;3049:11;3023:38;:::i;:::-;3017:4;2973:97;:::i;:::-;3125:4;;3189:2;3178:14;;3206:1;3201:663;;;;3908:1;3925:6;3922:89;;;-1:-1:-1;3977:19:165;;;3971:26;3922:89;-1:-1:-1;;2726:1:165;2722:11;;;2718:24;2714:29;2704:40;2750:1;2746:11;;;2701:57;4024:81;;3171:944;;3201:663;1995:1;1988:14;;;2032:4;2019:18;;-1:-1:-1;;3237:20:165;;;3355:236;3369:7;3366:1;3363:14;3355:236;;;3458:19;;;3452:26;3437:42;;3550:27;;;;3518:1;3506:14;;;;3385:19;;3355:236;;;3359:3;3619:6;3610:7;3607:19;3604:201;;;3680:19;;;3674:26;-1:-1:-1;;3763:1:165;3759:14;;;3775:3;3755:24;3751:37;3747:42;3732:58;3717:74;;3604:201;-1:-1:-1;;;;;3851:1:165;3835:14;;;3831:22;3818:36;;-1:-1:-1;2769:1352:165:o;4126:338::-;343:8177:126;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60806040523480156200001157600080fd5b5060043610620001395760003560e01c806366d9a9a011620000bb578063b5508aa9116200007a578063b5508aa91462000280578063ba414fa6146200028a578063e20c9f7114620002a5578063e6ee489914620002af578063fa7626d414620002c657600080fd5b806366d9a9a0146200021657806385226c81146200022f578063916a17c61462000248578063aa739f8c1462000252578063ab75e7c3146200026957600080fd5b80632ce672a911620001085780632ce672a914620001a45780633e5e0d2614620001bb5780633e5e3c2314620001d25780633f7286f414620001dc578063507ffba514620001e657600080fd5b8063021db0e7146200013e5780630a9254e414620001575780631071676014620001615780631ed7831c146200018b575b600080fd5b620001556200014f366004620050ee565b620002d4565b005b62000155620004c7565b620001786200017236600462005137565b6200093e565b6040519081526020015b60405180910390f35b62000195620009c8565b60405162000182919062005189565b62000155620001b5366004620051ea565b62000a2c565b62000178620001cc36600462005232565b62000d42565b6200019562000fa5565b6200019562001007565b620001fd620001f7366004620052f6565b62001069565b6040516001600160a01b03909116815260200162000182565b620002206200117f565b604051620001829190620053b1565b6200023962001272565b604051620001829190620054bc565b620002206200134c565b620001556200026336600462005522565b62001436565b620001556200027a36600462005545565b6200162c565b6200023962001965565b6200029462001a3f565b604051901515815260200162000182565b6200019562001b6c565b62000155620002c036600462005572565b62001bce565b600754620002949060ff1681565b6000620002e866b1a2bc2ec5000062001dbc565b601c5490915062000303906001600160a01b03168262001e82565b6200031f8566038d7ea4c68000670de0b6b3a764000062001ff0565b94506200034384683635c9adc5dea000006b019d971e4fe8401e7400000062001ff0565b601c5490945060009062000362906001600160a01b031687876200207c565b905081604001516002620003779190620055a6565b620003839086620055c0565b602c54909550620003cb90670de0b6b3a764000090620003c290670c7d713b49da000090620003bb906001600160a01b0316620020b9565b90620020ce565b86919062001ff0565b601d54909450620003e6906001600160a01b031685620020e5565b50620004069050620003fe600c6301e13380620055c0565b60006200212b565b602c546200043590670de0b6b3a7640000906200042c906001600160a01b0316620020b9565b85919062001ff0565b601e54909350600090819062000455906001600160a01b031686620020e5565b9150915062000467600c60006200212b565b601e5460009062000483906001600160a01b0316848862002205565b90506200049181836200222d565b601c54600090620004ac906001600160a01b0316866200232b565b509050620004bb818a62002353565b50505050505050505050565b620004d1620023b6565b601c546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062010def833981519152906306447d5690602401600060405180830381600087803b1580156200052657600080fd5b505af11580156200053b573d6000803e3d6000fd5b505050506012600080604051620005529062005025565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f080158015620005c8573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620006968462002696565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a090920191909152519091506000908290620006e69062005033565b620006f2919062005691565b604051809103906000f0801580156200070f573d6000803e3d6000fd5b5090508181604051620007229062005041565b6200072f929190620056a2565b604051809103906000f0801580156200074c573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620007c157600080fd5b505af1158015620007d6573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b03909116600482015260008051602062010def83398151915293506306447d56925001600060405180830381600087803b1580156200082e57600080fd5b505af115801562000843573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b1580156200089857600080fd5b505af1158015620008ad573d6000803e3d6000fd5b5050602b5460ff1691506200093890505760008051602062010def83398151915263e5d6bf02620008e46301e133806003620055a6565b6040518263ffffffff1660e01b81526004016200090391815260200190565b600060405180830381600087803b1580156200091e57600080fd5b505af115801562000933573d6000803e3d6000fd5b505050505b50505050565b6040516370a0823160e01b81526001600160a01b038085166004830152600091620009be91869186918216906370a0823190602401602060405180830381865afa15801562000991573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009b79190620056cc565b8562000d42565b90505b9392505050565b6060601480548060200260200160405190810160405280929190818152602001828054801562000a2257602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831162000a03575b5050505050905090565b600062000a4460ff8416662386f26fc10000620055a6565b905067ffffffffffffffff821660008051602062010def833981519152634c63e562662386f26fc10000841080159062000a8657506702c68af0bb1400008411155b6040518263ffffffff1660e01b815260040162000aa7911515815260200190565b60006040518083038186803b15801562000ac057600080fd5b505afa15801562000ad5573d6000803e3d6000fd5b5060008051602062010def8339815191529250634c63e562915050670de0b6b3a7640000831180159062000b07575060015b6040518263ffffffff1660e01b815260040162000b28911515815260200190565b60006040518083038186803b15801562000b4157600080fd5b505afa15801562000b56573d6000803e3d6000fd5b5050601c5466470de4df820000925062000b7f91506001600160a01b03168260008080620026e3565b50601c546b019d971e4fe8401e740000009060009062000baa906001600160a01b031685846200207c565b9050602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562000c01573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c27919062005753565b6040015162000c38906002620055a6565b62000c449083620055c0565b601d549092506a295be96e6406697200000090600090819062000c71906001600160a01b03168462002702565b9092509050600062000c886301e1338088620020ce565b905062000c9681896200212b565b601e546aa56fa5b99019a5c80000009060009062000cbe906001600160a01b031683620020e5565b50601d5490915062000cdb906001600160a01b031686866200273e565b50601e5462000cf5906001600160a01b0316828462002205565b50601c5460009062000d11906001600160a01b0316896200232b565b509050600062000d238a8d8762002766565b50905062000d32828262002353565b5050505050505050505050505050565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa15801562000d8e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000db49190620056cc565b90508084111562000dd85760405163188c93a560e31b815260040160405180910390fd5b60008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562000e2657600080fd5b505af115801562000e3b573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038916600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562000e9057600080fd5b505af115801562000ea5573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a7640000602482015260008051602062010def833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000f0857600080fd5b505af115801562000f1d573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000f71573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000f97919062005815565b50839150505b949350505050565b6060601680548060200260200160405190810160405280929190818152602001828054801562000a22576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000a03575050505050905090565b6060601580548060200260200160405190810160405280929190818152602001828054801562000a22576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000a03575050505050905090565b6000816040516020016200107e919062005839565b60408051601f198184030181529082905280516020909101206318caf8e360e31b8252915060008051602062010def8339815191529063c657c71890620010cc90849086906004016200584e565b600060405180830381600087803b158015620010e757600080fd5b505af1158015620010fc573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab2400000602482015260008051602062010def833981519152925063c88a5e6d9150604401600060405180830381600087803b1580156200116157600080fd5b505af115801562001176573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b82821015620012695760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200125057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620012115790505b50505050508152505081526020019060010190620011a3565b50505050905090565b60606018805480602002602001604051908101604052809291908181526020016000905b8282101562001269578382906000526020600020018054620012b89062005874565b80601f0160208091040260200160405190810160405280929190818152602001828054620012e69062005874565b8015620013375780601f106200130b5761010080835404028352916020019162001337565b820191906000526020600020905b8154815290600101906020018083116200131957829003601f168201915b50505050508152602001906001019062001296565b6060601a805480602002602001604051908101604052809291908181526020016000905b82821015620012695760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200141d57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620013de5790505b5050505050815250508152602001906001019062001370565b6200145282662386f26fc100006706f05b59d3b2000062001ff0565b91506200147581683635c9adc5dea000006a295be960834fb5ca9c000062001ff0565b601c5490915066b1a2bc2ec50000906200149d906001600160a01b03168260008080620026e3565b50601c546b019d971e4fe8401e7400000090620014c5906001600160a01b031684836200207c565b50601d546000908190849082908190620014e9906001600160a01b031684620020e5565b601d54919350915087906000906200150b906001600160a01b03168362002702565b601d54909250600091506200152b906001600160a01b0316868862002205565b9050620015398185620055c0565b97506000620015498484620055c0565b9050620015578982620055c0565b601c5490985066b1a2bc2ec5000097506200158b96506001600160a01b0316945086935060009250829150819050620026e3565b50601c54620015a5906001600160a01b031686856200207c565b50600084620015b58482620058b0565b601e549091506000908190620015d5906001600160a01b03168462002702565b601e549193509150620015f3906001600160a01b031683836200273e565b50620016008382620055c0565b935050505062001624816509184e72a000846200161e9190620055c0565b62002353565b505050505050565b600082128015906200166657620016608483101560405180606001604052806036815260200162010ee8603691396200281a565b6200168d565b6200168d82851160405180606001604052806027815260200162010e2f602791396200281a565b6000816200169c5784620016a8565b620016a88486620058b0565b905060008215620016ba5785620016d1565b620016c585620058c6565b620016d19087620055c0565b905080841080620016e157508184115b1562001757576200171f848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002853565b62001624848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002895565b8215620018575760006200176c8786620055c0565b9050858110156200182a5760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a2025730000000000006020820152620017c290620017bc8389620055c0565b620028d2565b620017f36040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200291b565b620018246040518060400160405280600d81526020016c4e65772044656c74613a20257360981b81525082620028d2565b62001850565b62001850838660405180606001604052806029815260200162010e566029913962002964565b5062001624565b6000620018658588620055c0565b90506200187286620058c6565b8110156200193657620018cd6040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a2025730000000000008152508288620018c190620058c6565b620017bc9190620055c0565b620018fe6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200291b565b620019306040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b81525082620028d2565b6200195c565b6200195c828660405180606001604052806029815260200162010e7f6029913962002964565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b8282101562001269578382906000526020600020018054620019ab9062005874565b80601f0160208091040260200160405190810160405280929190818152602001828054620019d99062005874565b801562001a2a5780601f10620019fe5761010080835404028352916020019162001a2a565b820191906000526020600020905b81548152906001019060200180831162001a0c57829003601f168201915b50505050508152602001906001019062001989565b600754600090610100900460ff161562001a625750600754610100900460ff1690565b600060008051602062010def8339815191523b1562001b67576040805160008051602062010def833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001ae9917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001620058e5565b60408051601f198184030181529082905262001b059162005918565b6000604051808303816000865af19150503d806000811462001b44576040519150601f19603f3d011682016040523d82523d6000602084013e62001b49565b606091505b509150508080602001905181019062001b63919062005815565b9150505b919050565b6060601380548060200260200160405190810160405280929190818152602001828054801562000a22576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000a03575050505050905090565b600062001be660ff8316662386f26fc10000620055a6565b905060008051602062010def833981519152634c63e562662386f26fc10000831080159062001c1d57506702c68af0bb1400008311155b6040518263ffffffff1660e01b815260040162001c3e911515815260200190565b60006040518083038186803b15801562001c5757600080fd5b505afa15801562001c6c573d6000803e3d6000fd5b5050601c5466470de4df820000925066038d7ea4c68000915062001c9e906001600160a01b03168383600080620026e3565b5050601c546b019d971e4fe8401e740000009060009062001cca906001600160a01b031684846200207c565b601d549091506a52b7d2dcc80cd2e400000090600090819062001cf7906001600160a01b03168462002702565b601d54919350915060009062001d17906001600160a01b031685620020e5565b50601d5490915060009062001d36906001600160a01b031688620029a0565b905062001d448187620029dc565b601d5462001d5d906001600160a01b031685856200273e565b50601d5462001d77906001600160a01b0316838762002205565b50601d5462001d90906001600160a01b0316826200232b565b5050601c5460009062001dad906001600160a01b0316886200232b565b509050620004bb818962002353565b62001dc66200504f565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c0810162001e438562002696565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b60008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001ed057600080fd5b505af115801562001ee5573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038516600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562001f3a57600080fd5b505af115801562001f4f573d6000803e3d6000fd5b5050505060008160405162001f649062005033565b62001f70919062005691565b604051809103906000f08015801562001f8d573d6000803e3d6000fd5b509050818160405162001fa09062005041565b62001fad929190620056a2565b604051809103906000f08015801562001fca573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b600081831115620020395760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b60448201526064015b60405180910390fd5b6000620020478484620055c0565b62002054906001620058b0565b905060006200206482876200594c565b9050620020728582620058b0565b9695505050505050565b6000620009be8484846040518060a00160405280600115158152602001878152602001600081526020016000815260200160001981525062002a3f565b6000620020c882600762002db3565b92915050565b6000620009c18383670de0b6b3a764000062002f9e565b6000806200212084846040518060a0016040528060011515815260200187815260200160008152602001600081526020018781525062002fbd565b915091509250929050565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b1580156200217957600080fd5b505af11580156200218e573d6000803e3d6000fd5b5060008051602062010def833981519152925063e5d6bf029150620021b690508442620058b0565b6040518263ffffffff1660e01b8152600401620021d591815260200190565b600060405180830381600087803b158015620021f057600080fd5b505af115801562001624573d6000803e3d6000fd5b6000620009be84848460405180604001604052806001151581526020016000815250620033fe565b808210620023275760008051602062010dcf8339815191526040516200228e9060208082526021908201527f4572726f723a2061203c2062206e6f7420736174697366696564205b75696e746040820152605d60f81b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b606082015260208101849052905160008051602062010ec88339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b60608201526020810182905260008051602062010ec8833981519152906080015b60405180910390a16200232762003560565b5050565b6000806200212084846040518060400160405280600115158152602001600081525062003669565b80821015620023275760008051602062010dcf8339815191526040516200228e9060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620023de60405180604001604052806005815260200164616c69636560d81b81525062001069565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b6020820152620024239062001069565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b60208201526200246b9062001069565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b6020820152620024b09062001069565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620024f59062001069565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062002546604051806040016040528060088152602001673232b83637bcb2b960c11b81525062001069565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b60208201526200258e9062001069565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b6020820152620025dc9062001069565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620026289062001069565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b6020820152620026709062001069565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b600080620026cd620026bd620026ae856064620055a6565b66a5bbed86c5a00090620020ce565b6748cd4072281e000090620037ca565b9050620009c1670de0b6b3a764000082620037ca565b620026fb8585670de0b6b3a7640000868686620037e1565b5050505050565b6000806200212084846040518060a0016040528060011515815260200187815260200160008152602001878152602001600019815250620038b4565b6000620009be8484846040518060400160405280600115158152602001600081525062003c31565b600080806200277a846301e13380620037ca565b905060006200279e8260008812620027935787620003bb565b620003bb88620058c6565b90506000861315620027d957620027c1620027b98262003d44565b8890620020ce565b9350620027cf8785620055c0565b9250505062002812565b60008612156200280857620027fa620027f28262003d44565b8890620037ca565b9350620027cf878562005963565b8660009350935050505b935093915050565b81620023275760008051602062010e0f833981519152816040516200284091906200598d565b60405180910390a1620023278262003ed1565b81831015620028905760008051602062010e0f833981519152816040516200287c91906200598d565b60405180910390a162002890838362002353565b505050565b81831115620028905760008051602062010e0f83398151915281604051620028be91906200598d565b60405180910390a1620028908383620029dc565b620023278282604051602401620028eb929190620059be565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262003f3b565b62002327828260405160240162002934929190620059be565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262003f3b565b818314620028905760008051602062010e0f833981519152816040516200298c91906200598d565b60405180910390a162002890838362003f46565b6000620009c183836040518060a00160405280600115158152602001868152602001600081526020016000815260200160001981525062004036565b80821115620023275760008051602062010dcf8339815191526040516200228e9060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002a8f57600080fd5b505af115801562002aa4573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562002af957600080fd5b505af115801562002b0e573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002b73573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002b99919062005753565b516001600160a01b031614801562002baf575081515b1562002c4257602c5460208301518351604051632002b33360e01b81526001600160a01b0390931692632002b333929162002bf49188918a918c9190600401620059e2565b60206040518083038185885af115801562002c13573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002c3a9190620056cc565b905062000f9d565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002c9357600080fd5b505af115801562002ca8573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002d0d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d33919062005815565b50602c548251604051632002b33360e01b81526001600160a01b0390921691632002b3339162002d6d91879189918b9190600401620059e2565b6020604051808303816000875af115801562002d8d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c3a9190620056cc565b6000806001600160a01b0384166320fc488162002dd082620043c0565b6040518263ffffffff1660e01b815260040162002def91815260200190565b6040805180830381865afa15801562002e0c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e32919062005a08565b90506000846001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002e76573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e9c919062005a80565b90506000856001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562002ee0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002f06919062005753565b9050620020726040518061016001604052808460000151815260200184602001518152602001846040015181526020018460a00151815260200184610180015181526020018360c001518152602001846080015181526020018360200151815260200183604001518152602001836101200151600001518152602001836101200151604001518152508460200151600f0b8762004444565b600082600019048411830215820262002fb657600080fd5b5091020490565b60008060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200300e57600080fd5b505af115801562003023573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b1580156200307857600080fd5b505af11580156200308d573d6000803e3d6000fd5b5050602c54620030a992506001600160a01b0316905062004618565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156200311e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003144919062005753565b516001600160a01b03161480156200315a575082515b15620031f957602c54602084015160808501516040808701518751915163a179403b60e01b81526001600160a01b039095169463a179403b9493620031a9938b9391928d919060040162005b2e565b604080518083038185885af1158015620031c7573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620031ee919062005b5c565b909250905062002812565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200324a57600080fd5b505af11580156200325f573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af1158015620032c4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620032ea919062005815565b50602c5460808401516040808601518651915163a179403b60e01b81526001600160a01b039094169363a179403b936200332e938a9391928c919060040162005b2e565b60408051808303816000875af11580156200334d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003373919062005b5c565b602b54602086015192945090925061010090046001600160a01b0316906342966c6890620033a3908490620055c0565b6040518263ffffffff1660e01b8152600401620033c291815260200190565b600060405180830381600087803b158015620033dd57600080fd5b505af1158015620033f2573d6000803e3d6000fd5b50505050935093915050565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200344e57600080fd5b505af115801562003463573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b158015620034b857600080fd5b505af1158015620034cd573d6000803e3d6000fd5b5050602c5460208501518551604051636f8c3a5b60e01b81526001600160a01b039093169450636f8c3a5b935062003511928992899290918c919060040162005b2e565b6020604051808303816000875af115801562003531573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620035579190620056cc565b95945050505050565b60008051602062010def8339815191523b1562003658576040805160008051602062010def833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620035f39291602001620058e5565b60408051601f19818403018152908290526200360f9162005918565b6000604051808303816000865af19150503d80600081146200364e576040519150601f19603f3d011682016040523d82523d6000602084013e62003653565b606091505b505050505b6007805461ff001916610100179055565b60008060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620036ba57600080fd5b505af1158015620036cf573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b1580156200372457600080fd5b505af115801562003739573d6000803e3d6000fd5b5050602c546020860151865160405163c23632a760e01b81526001600160a01b03909316945063c23632a7935062003779928992918b91600401620059e2565b60408051808303816000875af115801562003798573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620037be919062005b5c565b91509150935093915050565b6000620009c183670de0b6b3a76400008462002f9e565b600060405180606001604052808581526020018481526020018381525090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001878152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e133808152602001620151808152602001620038718962002696565b81526024546001600160a01b03908116602083015260235416604082015260608101849052600560808201526103e860a090910152905062000933888262001e82565b60008060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200390557600080fd5b505af11580156200391a573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b1580156200396f57600080fd5b505af115801562003984573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa158015620039e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003a0f919062005753565b516001600160a01b031614801562003a25575082515b1562003ac357602c54602084015160608501516040808701518751915163036d741560e11b81526001600160a01b03909516946306dae82a949362003a74938b9391928d919060040162005b2e565b604080518083038185885af115801562003a92573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062003ab9919062005b5c565b9150915062002812565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562003b0e57600080fd5b505af115801562003b23573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562003b82573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ba8919062005815565b50602c5460608401516040808601518651915163036d741560e11b81526001600160a01b03909416936306dae82a9362003bec938a9391928c919060040162005b2e565b60408051808303816000875af115801562003c0b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ab9919062005b5c565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562003c8157600080fd5b505af115801562003c96573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038816600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b15801562003ceb57600080fd5b505af115801562003d00573d6000803e3d6000fd5b5050602c546020850151855160405163fa3fcea760e01b81526001600160a01b03909316945063fa3fcea7935062003511928992899290918c919060040162005b2e565b6000680248ce36a70cb26b3e19821362003d6057506000919050565b680755bf798b4a1bf1e5821262003d8a5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b8062003f385760008051602062010dcf83398151915260405162003f269060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a162003f3862003560565b50565b62003f38816200469b565b808214620023275760008051602062010dcf83398151915260405162003fa89060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b606082015260208101849052905160008051602062010ec88339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b60608201526020810182905260008051602062010ec88339815191529060800162002315565b600060008051602062010ea883398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200408657600080fd5b505af11580156200409b573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b038716600482015260008051602062010def83398151915292506306447d569150602401600060405180830381600087803b158015620040f057600080fd5b505af115801562004105573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa1580156200416a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004190919062005753565b516001600160a01b0316148015620041a6575081515b156200424457602c54602083015160608401516080850151855160405163c326a90360e01b81526001600160a01b039095169463c326a9039493620041f6938a93919290918c9160040162005b2e565b60206040518083038185885af115801562004215573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200423c9190620056cc565b9050620009c1565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200429557600080fd5b505af1158015620042aa573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af11580156200430f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004335919062005815565b50602c5460608301516080840151845160405163c326a90360e01b81526001600160a01b039094169363c326a903936200437a938993919290918b9160040162005b2e565b6020604051808303816000875af11580156200439a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200423c9190620056cc565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562004402573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004428919062005753565b60a001516200443890426200594c565b620020c89042620055c0565b6040805160608101825260008082526020820181905291810182905260006200447686600001518760200151620046bc565b90506000620044948288604001518960e001518a60a00151620046dc565b90506000620044a48884620046f7565b9050620044b5888285858b6200481f565b1580156040870152908552620044d1579350620009c192505050565b6000620044e089848a62004969565b9050620044f1898286868c6200481f565b151560408701819052908652620045655760405162461bcd60e51b815260206004820152603160248201527f496e697469616c20677565737320696e206063616c63756c6174654d617853686044820152701bdc9d18081a5cc81a5b9cdbdb1d995b9d607a1b606482015260840162002030565b60005b878110156200460b576200457f8a83868862004a5b565b158015604089015260208801919091526200460b5760208601518651600091620045aa9190620037ca565b620045b69084620058b0565b905083811115620045c857506200460b565b620045d78b8288888e6200481f565b15801560408a0152908852620045f057809250620045f7565b506200460b565b50620046038162005b81565b905062004568565b5098975050505050505050565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156200465a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062004680919062005753565b608001516200468f83620043c0565b620020c89190620058b0565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600080620046cb838562005963565b90506000811215620009c157600080fd5b60006200355782620046f085888862002f9e565b9062004af5565b60008062004722846101000151856020015162004715919062005b9d565b6101008601519062004b56565b9050600062004772620047478660e001518760c00151620037ca90919063ffffffff16565b8660e00151868860a00151670de0b6b3a7640000620047679190620055c0565b896040015162004b6e565b905060006200480b620047a88760a00151670de0b6b3a7640000620047989190620055c0565b670de0b6b3a76400009062004b9d565b620047ff620047ea8960a00151670de0b6b3a7640000620047ca9190620055c0565b620046f0620047de898d60200151620046bc565b60e08d015190620020ce565b60e08a015160c08b0151620003bb91620037ca565b620046f09085620055c0565b9050856040015181620020729190620055c0565b6000806000806200485a878a604001518a8c60a00151670de0b6b3a76400006200484a9190620055c0565b8d60c001518e60e0015162004bb4565b915091508062004873576000809350935050506200495f565b6000620048bb8a60c00151620048968b8a8e61012001518f610140015162004c6a565b620048a88c8b8f610120015162004c85565b620048b49190620055c0565b90620037ca565b620048c79084620055c0565b8a51620048d59190620055c0565b90506000620049098b60c00151620048f860008a62004b5690919063ffffffff16565b8d60800151620048b49190620055c0565b90508a6101000151816200491e9190620058b0565b821062004953576101008b0151620049378284620055c0565b620049439190620055c0565b600195509550505050506200495f565b60008095509550505050505b9550959350505050565b6000808390506000620049e1866101000151620049988860c001518960800151620037ca90919063ffffffff16565b60c0890151620049af90620048b489600062004b56565b8951620049bd9190620058b0565b620049c99190620055c0565b620049d59190620055c0565b60c088015190620020ce565b90506200207262004a16620049ff87670de0b6b3a7640000620055c0565b6101208901516101408a0151620003bb91620020ce565b62004a3b62004a2e88670de0b6b3a7640000620055c0565b6101208a015190620020ce565b62004a479085620055c0565b62004a539190620058b0565b8290620037ca565b600080600062004a6d87878662004cac565b9050600062004abe8860c00151620048b48a6101400151670de0b6b3a764000062004a999190620055c0565b620003bb62004ab18b670de0b6b3a7640000620055c0565b6101208e015190620020ce565b905080821062004ae25762004ad48183620055c0565b600193509350505062004aec565b6000809350935050505b94509492505050565b60008160000362004b105750670de0b6b3a7640000620020c8565b8260000362004b2257506000620020c8565b81600062004b308562004dd3565b905081810262004b49670de0b6b3a76400008262005bc8565b9050620020728162003d44565b600081831362004b675781620009c1565b5090919050565b600062004b7c828462004af5565b62004b91620027b985620046f08989620020ce565b620020729190620058b0565b6000620009c183670de0b6b3a76400008462004fe7565b6000808062004bc48585620037ca565b9050600062004bd782868c8a8d62004b6e565b905062004bea87620046f08a8c620058b0565b98508881101562004c045760008093509350505062004c5f565b600062004c2f62004c1e670de0b6b3a76400008a62004b9d565b620046f085620048b48e87620055c0565b905062004c3d8187620037ca565b9050808b111562004c575762004c54818c620055c0565b94505b600193505050505b965096945050505050565b60006200355762004c7d86868662004c85565b8390620020ce565b6000620009be84620003bb62004ca486670de0b6b3a7640000620055c0565b8590620020ce565b60008062004cf062004cd08660e001518760c00151620037ca90919063ffffffff16565b8660e00151858860a00151670de0b6b3a7640000620047679190620055c0565b9050600062004d3362004d2362004d178860a00151888a60400151620046f09190620058b0565b60c0890151906200500e565b670de0b6b3a764000090620037ca565b9050600062004dba62004d658860a00151670de0b6b3a764000062004d599190620055c0565b60a08a01519062004b9d565b620046f062004d998a60a00151670de0b6b3a764000062004d879190620055c0565b8a8c60400151620046f09190620058b0565b62004da59087620055c0565b60c08b015160e08c0151620003bb91620037ca565b905062004dc88282620020ce565b979650505050505050565b600080821362004df657604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600082600019048411830215820262004fff57600080fd5b50910281810615159190040190565b6000620009c18383670de0b6b3a764000062004fe7565b611daa8062005bfd83390190565b6125b180620079a783390190565b616e778062009f5883390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001620050da60405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600080600080608085870312156200510557600080fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b038116811462003f3857600080fd5b6000806000606084860312156200514d57600080fd5b83356200515a8162005121565b925060208401356200516c8162005121565b915060408401356200517e8162005121565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b81811015620051cc5783516001600160a01b031683529284019291840191600101620051a5565b50909695505050505050565b803560ff8116811462001b6757600080fd5b60008060408385031215620051fe57600080fd5b6200520983620051d8565b9150602083013567ffffffffffffffff811681146200522757600080fd5b809150509250929050565b600080600080608085870312156200524957600080fd5b8435620052568162005121565b93506020850135620052688162005121565b9250604085013591506060850135620052818162005121565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715620052c957620052c96200528c565b60405290565b6040516101a0810167ffffffffffffffff81118282101715620052c957620052c96200528c565b6000602082840312156200530957600080fd5b813567ffffffffffffffff808211156200532257600080fd5b818401915084601f8301126200533757600080fd5b8135818111156200534c576200534c6200528c565b604051601f8201601f19908116603f011681019083821181831017156200537757620053776200528c565b816040528281528760208487010111156200539157600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156200545957898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015620054435783516001600160e01b0319168252928b019260019290920191908b019062005417565b50978a01979550505091870191600101620053d9565b50919998505050505050505050565b60005b83811015620054855781810151838201526020016200546b565b50506000910152565b60008151808452620054a881602086016020860162005468565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200551557603f19888603018452620055028583516200548e565b94509285019290850190600101620054e3565b5092979650505050505050565b600080604083850312156200553657600080fd5b50508035926020909101359150565b6000806000606084860312156200555b57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156200558557600080fd5b620009c182620051d8565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417620020c857620020c862005590565b81810381811115620020c857620020c862005590565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e08101516200563a60e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c08101620020c88284620055d6565b6101e08101620056b38285620055d6565b6001600160a01b03929092166101c09190910152919050565b600060208284031215620056df57600080fd5b5051919050565b805162001b678162005121565b6000606082840312156200570657600080fd5b6040516060810181811067ffffffffffffffff821117156200572c576200572c6200528c565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200576757600080fd5b62005771620052a2565b6200577c83620056e6565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620057c860e08401620056e6565b60e0820152610100620057dd818501620056e6565b90820152610120620057f285858301620056f3565b908201526101808301516101408201526101a09092015161016083015250919050565b6000602082840312156200582857600080fd5b81518015158114620009c157600080fd5b602081526000620009c160208301846200548e565b6001600160a01b0383168152604060208201819052600090620009be908301846200548e565b600181811c908216806200588957607f821691505b602082108103620058aa57634e487b7160e01b600052602260045260246000fd5b50919050565b80820180821115620020c857620020c862005590565b6000600160ff1b8201620058de57620058de62005590565b5060000390565b6001600160e01b03198316815281516000906200590a81600485016020870162005468565b919091016004019392505050565b600082516200592c81846020870162005468565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b6000826200595e576200595e62005936565b500690565b818103600083128015838313168383128216171562005986576200598662005590565b5092915050565b60408152600560408201526422b93937b960d91b6060820152608060208201526000620009c160808301846200548e565b604081526000620059d360408301856200548e565b90508260208301529392505050565b93845260208401929092526001600160a01b031660408301521515606082015260800190565b60006040828403121562005a1b57600080fd5b6040516040810181811067ffffffffffffffff8211171562005a415762005a416200528c565b60405282516001600160801b038116811462005a5c57600080fd5b81526020830151600f81900b811462005a7457600080fd5b60208201529392505050565b60006101a0828403121562005a9457600080fd5b62005a9e620052cf565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b948552602085019390935260408401919091526001600160a01b031660608301521515608082015260a00190565b6000806040838503121562005b7057600080fd5b505080516020909101519092909150565b60006001820162005b965762005b9662005590565b5060010190565b808201828112600083128015821682158216171562005bc05762005bc062005590565b505092915050565b60008262005bda5762005bda62005936565b600160ff1b82146000198414161562005bf75762005bf762005590565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a264697066735822122091d82ed0fb28abab5e0dff56134b9a989b38aba610058055b581acc7797d905364736f6c63430008130033",
    sourceMap:
      "343:8177:126:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5021:1999;;;;;;:::i;:::-;;:::i;:::-;;1767:1696:162;;;:::i;2545:198:159:-;;;;;;:::i;:::-;;:::i;:::-;;;1235:25:165;;;1223:2;1208:18;2545:198:159;;;;;;;;2170:134:57;;;:::i;:::-;;;;;;;:::i;482:1992:126:-;;;;;;:::i;:::-;;:::i;2749:417:159:-;;;;;;:::i;:::-;;:::i;2939:133:57:-;;;:::i;2640:141::-;;;:::i;2321:218:159:-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;4916:32:165;;;4898:51;;4886:2;4871:18;2321:218:159;4752:203:165;2456:178:57;;;:::i;:::-;;;;;;;:::i;2310:140::-;;;:::i;:::-;;;;;;;:::i;2787:146::-;;;:::i;2480:2535:126:-;;;;;;:::i;:::-;;:::i;3830:2306:159:-;;;;;;:::i;:::-;;:::i;1875:141:57:-;;;:::i;1819:584:50:-;;;:::i;:::-;;;8611:14:165;;8604:22;8586:41;;8574:2;8559:18;1819:584:50;8446:187:165;2022:142:57;;;:::i;7088:1430:126:-;;;;;;:::i;:::-;;:::i;1572:26:50:-;;;;;;;;;5021:1999:126;5199:36;5238:19;5249:7;5238:10;:19::i;:::-;5274:5;;5199:58;;-1:-1:-1;5267:21:126;;-1:-1:-1;;;;;5274:5:126;5199:58;5267:6;:21::i;:::-;5524:42;:9;5551:8;5561:4;5524:26;:42::i;:::-;5512:54;-1:-1:-1;5591:55:126;:12;5621:8;5631:14;5591:29;:55::i;:::-;5686:5;;5576:70;;-1:-1:-1;5656:16:126;;5675:42;;-1:-1:-1;;;;;5686:5:126;5693:9;5576:70;5675:10;:42::i;:::-;5656:61;;5747:6;:27;;;5743:1;:31;;;;:::i;:::-;5727:47;;;;:::i;:::-;5889:10;;5727:47;;-1:-1:-1;5829:116:126;;5871:4;;5889:46;;5928:6;;5889:30;;-1:-1:-1;;;;;5889:10:126;:28;:30::i;:::-;:38;;:46::i;:::-;5829:11;;:116;:28;:116::i;:::-;5965:3;;5815:130;;-1:-1:-1;5955:27:126;;-1:-1:-1;;;;;5965:3:126;5815:130;5955:9;:27::i;:::-;-1:-1:-1;6053:46:126;;-1:-1:-1;6065:30:126;6085:10;1656:8:162;6065:30:126;:::i;:::-;6097:1;6053:11;:46::i;:::-;6262:10;;6199:103;;6244:4;;6262:30;;-1:-1:-1;;;;;6262:10:126;:28;:30::i;:::-;6199:14;;:103;:31;:103::i;:::-;6382:6;;6182:120;;-1:-1:-1;6313:20:126;;;;6359:67;;-1:-1:-1;;;;;6382:6:126;6182:120;6359:9;:67::i;:::-;6312:114;;;;6501:26;6513:10;6525:1;6501:11;:26::i;:::-;6663:6;;6615:21;;6639:94;;-1:-1:-1;;;;;6663:6:126;6683:12;6709:14;6639:10;:94::i;:::-;6615:118;;6743:37;6752:13;6767:12;6743:8;:37::i;:::-;6945:5;;6897:26;;6929:32;;-1:-1:-1;;;;;6945:5:126;6952:8;6929:15;:32::i;:::-;6896:65;;;6971:42;6980:18;7000:12;6971:8;:42::i;:::-;5189:1831;;;;;;5021:1999;;;;:::o;1767:1696:162:-;1818:13;:11;:13::i;:::-;1855:5;;1841:20;;-1:-1:-1;;;1841:20:162;;-1:-1:-1;;;;;1855:5:162;;;1841:20;;;4898:51:165;-1:-1:-1;;;;;;;;;;;1841:13:162;;;4871:18:165;;1841:20:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:2;1969:1;1973:5;1923:56;;;;;:::i;:::-;9651:3:165;9633:22;;;9692:1;9671:19;;;9664:30;;;-1:-1:-1;;;9725:3:165;9710:19;;9703:35;9776:3;9769:4;9754:20;;9747:33;;;9796:19;;9789:30;-1:-1:-1;;;9850:3:165;9835:19;;9828:35;9947:4;9935:17;;;9930:2;9915:18;;9908:45;-1:-1:-1;;;;;9989:32:165;;;-1:-1:-1;9969:18:165;;9962:60;10066:14;10059:22;-1:-1:-1;10038:19:165;;10031:51;9895:3;9880:19;1923:56:162;;;;;;;;;;;;;;;;;;;;;;;1911:9;;:68;;;;;-1:-1:-1;;;;;1911:68:162;;;;;-1:-1:-1;;;;;1911:68:162;;;;;;1989:28;2020:98;;;;;;;;2058:1;2020:98;;;;2079:1;2020:98;;;;2106:1;2020:98;;;1989:129;;2163:11;2177:7;2163:21;;2194:36;2233:603;;;;;;;;2296:9;;;;;;;;;-1:-1:-1;;;;;2296:9:162;-1:-1:-1;;;;;2233:603:162;;;;;565:4:32;2233:603:162;;;;565:4:32;2233:603:162;;;;1536:8;2233:603;;;;1656:8;2233:603;;;;1598:6;2233:603;;;;2612:41;2649:3;2612:36;:41::i;:::-;2233:603;;2679:10;;-1:-1:-1;;;;;2679:10:162;;;2233:603;;;;2717:12;;;2233:603;;;;;;;;;;;;;;1710:1;2233:603;;;;1756:4;2233:603;;;;;;;;2877:38;2194:642;;-1:-1:-1;2679:10:162;;2194:642;;2877:38;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2846:70;;2991:6;2999:12;2972:40;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2926:10;;:97;;;;;-1:-1:-1;;;;;2926:97:162;;;;;-1:-1:-1;;;;;2926:97:162;;;;;;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3033:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3071:10:162;;;3057:25;;-1:-1:-1;;;3057:25:162;;-1:-1:-1;;;;;3071:10:162;;;3057:25;;;4898:51:165;-1:-1:-1;;;;;;;;;;;3057:13:162;-1:-1:-1;3057:13:162;;-1:-1:-1;4871:18:165;3057:25:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3092:10:162;;3113:6;;3092:34;;-1:-1:-1;;;3092:34:162;;-1:-1:-1;;;;;3113:6:162;;;3092:34;;;12036:51:165;3092:10:162;12103:18:165;;;12096:50;3092:10:162;;;-1:-1:-1;3092:20:162;;-1:-1:-1;12009:18:165;;3092:34:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3392:8:162;;;;;-1:-1:-1;3387:70:162;;-1:-1:-1;3387:70:162;-1:-1:-1;;;;;;;;;;;3416:7:162;3424:21;1656:8;3444:1;3424:21;:::i;:::-;3416:30;;;;;;;;;;;;;1235:25:165;;1223:2;1208:18;;1089:177;3416:30:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3387:70;1808:1655;;;;1767:1696::o;2545:198:159:-;2709:22;;-1:-1:-1;;;2709:22:159;;-1:-1:-1;;;;;4916:32:165;;;2709:22:159;;;4898:51:165;2655:7:159;;2681:55;;2695:5;;2702;;2709:15;;;;;4871:18:165;;2709:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2733:2;2681:13;:55::i;:::-;2674:62;;2545:198;;;;;;:::o;2170:134:57:-;2217:33;2281:16;2262:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2262:35:57;;;;;;;;;;;;;;;;;;;;;;;2170:134;:::o;482:1992:126:-;562:11;576:23;:13;;;592:7;576:23;:::i;:::-;562:37;-1:-1:-1;629:19:126;;;-1:-1:-1;;;;;;;;;;;658:9:126;675:7;668:14;;;;;:31;;;693:6;686:3;:13;;668:31;658:42;;;;;;;;;;;;;8611:14:165;8604:22;8586:41;;8574:2;8559:18;;8446:187;658:42:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;710:9:126;-1:-1:-1;710:9:126;;-1:-1:-1;;565:4:32;720:34:126;;;;;:52;;-1:-1:-1;758:14:126;720:52;710:63;;;;;;;;;;;;;8611:14:165;8604:22;8586:41;;8574:2;8559:18;;8446:187;710:63:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;904:5:126;;876:7;;-1:-1:-1;897:38:126;;-1:-1:-1;;;;;;904:5:126;876:7;851:22;;;897:6;:38::i;:::-;-1:-1:-1;1032:5:126;;978:14;;955:20;;1021:36;;-1:-1:-1;;;;;1032:5:126;1039:3;978:14;1021:10;:36::i;:::-;1002:55;;1087:10;;;;;;;;;-1:-1:-1;;;;;1087:10:126;-1:-1:-1;;;;;1087:24:126;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:47;;;1083:51;;:1;:51;:::i;:::-;1067:67;;;;:::i;:::-;1287:3;;1067:67;;-1:-1:-1;1193:13:126;;1174:16;;;;1265:57;;-1:-1:-1;;;;;1287:3:126;1193:13;1265:8;:57::i;:::-;1216:106;;-1:-1:-1;1216:106:126;-1:-1:-1;1410:20:126;1433:36;1656:8:162;1459:9:126;1433:25;:36::i;:::-;1410:59;;1479:38;1491:12;1512:3;1479:11;:38::i;:::-;1649:6;;1583:14;;1561:19;;1639:30;;-1:-1:-1;;;;;1649:6:126;1583:14;1639:9;:30::i;:::-;-1:-1:-1;1722:3:126;;1607:62;;-1:-1:-1;1712:44:126;;-1:-1:-1;;;;;1722:3:126;1727:16;1745:10;1712:9;:44::i;:::-;-1:-1:-1;1826:6:126;;1815:50;;-1:-1:-1;;;;;1826:6:126;1834:17;1853:11;1815:10;:50::i;:::-;-1:-1:-1;2171:5:126;;2131:18;;2155:32;;-1:-1:-1;;;;;2171:5:126;2178:8;2155:15;:32::i;:::-;2130:57;;;2278:32;2316:95;2371:12;2392:3;2398:12;2316:54;:95::i;:::-;2277:134;;;2421:46;2430:10;2442:24;2421:8;:46::i;:::-;552:1922;;;;;;;;;;;;482:1992;;:::o;2749:417:159:-;2925:22;;-1:-1:-1;;;2925:22:159;;-1:-1:-1;;;;;4916:32:165;;;2925:22:159;;;4898:51:165;2883:7:159;;;;2925:15;;;;;4871:18:165;;2925:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2902:45;;2970:12;2961:6;:21;2957:56;;;2991:22;;-1:-1:-1;;;2991:22:159;;;;;;;;;;;2957:56;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3023:12:159;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3047:20:159;;-1:-1:-1;;;3047:20:159;;-1:-1:-1;;;;;4916:32:165;;3047:20:159;;;4898:51:165;-1:-1:-1;;;;;;;;;;;3047:13:159;-1:-1:-1;3047:13:159;;-1:-1:-1;4871:18:165;;3047:20:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:23:159;;-1:-1:-1;;;3077:23:159;;-1:-1:-1;;;;;14367:32:165;;3077:23:159;;;14349:51:165;3092:7:159;14416:18:165;;;14409:34;-1:-1:-1;;;;;;;;;;;3077:7:159;-1:-1:-1;3077:7:159;;-1:-1:-1;14322:18:165;;3077:23:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3110:26:159;;-1:-1:-1;;;3110:26:159;;-1:-1:-1;;;;;14367:32:165;;;3110:26:159;;;14349:51:165;14416:18;;;14409:34;;;3110:14:159;;;-1:-1:-1;3110:14:159;;-1:-1:-1;14322:18:165;;3110:26:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3153:6;3146:13;;;2749:417;;;;;;;:::o;2939:133:57:-;2985:33;3049:16;3030:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3030:35:57;;;;;;;;;;;;;;;;;;;;;;2939:133;:::o;2640:141::-;2688:35;2756:18;2735:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2735:39:57;;;;;;;;;;;;;;;;;;;;;;2640:141;:::o;2321:218:159:-;2377:13;2455:4;2444:16;;;;;;;;:::i;:::-;;;;-1:-1:-1;;2444:16:159;;;;;;;;;;2434:27;;2444:16;2434:27;;;;-1:-1:-1;;;2474:21:159;;2434:27;-1:-1:-1;;;;;;;;;;;;2474:8:159;;;:21;;2434:27;;2490:4;;2474:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2505:27:159;;-1:-1:-1;;;2505:27:159;;-1:-1:-1;;;;;14367:32:165;;2505:27:159;;;14349:51:165;2520:11:159;14416:18:165;;;14409:34;-1:-1:-1;;;;;;;;;;;2505:7:159;-1:-1:-1;2505:7:159;;-1:-1:-1;14322:18:165;;2505:27:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:218;;;:::o;2456:178:57:-;2512:48;2601:26;2572:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:178;:::o;2310:140::-;2358:34;2425:18;2404:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2787:146;2835:40;2908:18;2887:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2480:2535:126;2649:35;:3;2670:6;2678:5;2649:20;:35::i;:::-;2643:41;-1:-1:-1;2747:58:126;:9;2774:8;2784:20;2747:26;:58::i;:::-;2936:5;;2735:70;;-1:-1:-1;2908:7:126;;2929:38;;-1:-1:-1;;;;;2936:5:126;2908:7;2883:22;;;2929:6;:38::i;:::-;-1:-1:-1;3045:5:126;;3010:14;;3034:36;;-1:-1:-1;;;;;3045:5:126;3052:3;3010:14;3034:10;:36::i;:::-;-1:-1:-1;3410:3:126;;3081:17;;;;3290:9;;3081:17;;;;3383:74;;-1:-1:-1;;;;;3410:3:126;3290:9;3383;:74::i;:::-;3596:3;;3330:127;;-1:-1:-1;3330:127:126;-1:-1:-1;3519:9:126;;3500:16;;3587:23;;-1:-1:-1;;;;;3596:3:126;3519:9;3587:8;:23::i;:::-;3721:3;;3559:51;;-1:-1:-1;3665:25:126;;-1:-1:-1;3693:110:126;;-1:-1:-1;;;;;3721:3:126;3742:17;3777:12;3693:10;:110::i;:::-;3665:138;-1:-1:-1;3829:33:126;3665:138;3829:13;:33;:::i;:::-;3817:45;-1:-1:-1;4003:18:126;4024:24;4040:8;4024:13;:24;:::i;:::-;4003:45;-1:-1:-1;4079:22:126;4092:9;4003:45;4079:22;:::i;:::-;4242:5;;4062:39;;-1:-1:-1;4214:7:126;;-1:-1:-1;4235:38:126;;-1:-1:-1;;;;;;4242:5:126;;-1:-1:-1;4214:7:126;;-1:-1:-1;4189:22:126;;-1:-1:-1;4189:22:126;;-1:-1:-1;4189:22:126;;-1:-1:-1;4235:6:126;:38::i;:::-;-1:-1:-1;4304:5:126;;4293:36;;-1:-1:-1;;;;;4304:5:126;4311:3;4316:12;4293:10;:36::i;:::-;-1:-1:-1;4410:22:126;4503:9;4537:20;4548:9;4503;4537:20;:::i;:::-;4649:6;;4526:31;;-1:-1:-1;4572:24:126;;;;4623:72;;-1:-1:-1;;;;;4649:6:126;4526:31;4623:8;:72::i;:::-;4719:6;;4571:124;;-1:-1:-1;4571:124:126;-1:-1:-1;4709:50:126;;-1:-1:-1;;;;;4719:6:126;4571:124;;4709:9;:50::i;:::-;-1:-1:-1;4911:24:126;4927:8;4911:13;:24;:::i;:::-;4894:41;;4442:504;;;4955:53;4964:14;4997:10;4980:14;:27;;;;:::i;:::-;4955:8;:53::i;:::-;2555:2460;;;;2480:2535;;:::o;3830:2306:159:-;3955:18;3976:11;;;;;3998:335;;4031:138;4075:6;4059:12;:22;;4031:138;;;;;;;;;;;;;;;;;:10;:138::i;:::-;3998:335;;;4200:122;4237:12;4228:6;:21;4200:122;;;;;;;;;;;;;;;;;:10;:122::i;:::-;4343:18;4364:13;:49;;4407:6;4364:49;;;4380:24;4397:6;4380;:24;:::i;:::-;4343:70;;4423:18;4445:13;4444:14;:75;;4513:6;4444:75;;;4490:7;4491:6;4490:7;:::i;:::-;4473:25;;:6;:25;:::i;:::-;4423:96;;4597:10;4582:12;:25;:54;;;;4626:10;4611:12;:25;4582:54;4578:233;;;4652:57;4661:12;4675:10;4652:57;;;;;;;;;;;;;-1:-1:-1;;;4652:57:159;;;:8;:57::i;:::-;4723;4732:12;4746:10;4723:57;;;;;;;;;;;;;-1:-1:-1;;;4723:57:159;;;:8;:57::i;4578:233::-;4908:13;4904:1226;;;4937:21;4961;4976:6;4961:12;:21;:::i;:::-;4937:45;;5024:6;5000:13;:31;4996:516;;;5051:133;;;;;;;;;;;;;;;;;;;5135:31;5153:13;5143:6;5135:31;:::i;:::-;5051:12;:133::i;:::-;5202:37;;;;;;;;;;;;;;-1:-1:-1;;;5202:37:159;;;5232:6;5202:12;:37::i;:::-;5257:44;;;;;;;;;;;;;;-1:-1:-1;;;5257:44:159;;;5287:13;5257:12;:44::i;:::-;4996:516;;;5340:157;5370:10;5402:12;5340:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;4923:599;4904:1226;;;5542:21;5566;5575:12;5566:6;:21;:::i;:::-;5542:45;-1:-1:-1;5629:7:159;5630:6;5629:7;:::i;:::-;5605:13;:32;5601:519;;;5657:134;;;;;;;;;;;;;;;;;;5760:13;5750:6;5749:7;;;:::i;:::-;5741:32;;;;:::i;5657:134::-;5809:37;;;;;;;;;;;;;;-1:-1:-1;;;5809:37:159;;;5839:6;5809:12;:37::i;:::-;5864:45;;;;;;;;;;;;;;-1:-1:-1;;;5864:45:159;;;5895:13;5864:12;:45::i;:::-;5601:519;;;5948:157;5978:10;6010:12;5948:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;5528:602;3945:2191;;;3830:2306;;;:::o;1875:141:57:-;1924:34;1991:18;1970:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1819:584:50;1873:7;;1853:4;;1873:7;;;;;1869:528;;;-1:-1:-1;1903:7:50;;;;;;;;1819:584::o;1869:528::-;1941:17;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;1980:374;;2196:43;;;-1:-1:-1;;;;;;;;;;;2196:43:50;;;14349:51:165;;;-1:-1:-1;;;14416:18:165;;;14409:34;2196:43:50;;;;;;;;;14322:18:165;;;2196:43:50;;;-1:-1:-1;;1671:64:50;;2086:175;;2135:34;;2086:175;;;:::i;:::-;;;;-1:-1:-1;;2086:175:50;;;;;;;;;;2047:232;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2020:259;;;2323:7;2312:27;;;;;;;;;;;;:::i;:::-;2297:42;;2002:352;1980:374;2374:12;1819:584;-1:-1:-1;1819:584:50:o;2022:142:57:-;2071:35;2139:18;2118:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2118:39:57;;;;;;;;;;;;;;;;;;;;;;2022:142;:::o;7088:1430:126:-;7145:11;7159:23;:13;;;7175:7;7159:23;:::i;:::-;7145:37;-1:-1:-1;;;;;;;;;;;;7192:9:126;7209:7;7202:14;;;;;:31;;;7227:6;7220:3;:13;;7202:31;7192:42;;;;;;;;;;;;;8611:14:165;8604:22;8586:41;;8574:2;8559:18;;8446:187;7192:42:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7391:5:126;;7322:7;;-1:-1:-1;7362:8:126;;-1:-1:-1;7384:45:126;;-1:-1:-1;;;;;7391:5:126;7322:7;7362:8;7297:22;;7384:6;:45::i;:::-;-1:-1:-1;;7566:5:126;;7507:14;;7484:20;;7555:36;;-1:-1:-1;;;;;7566:5:126;7573:3;7507:14;7555:10;:36::i;:::-;7766:3;;7531:60;;-1:-1:-1;7671:14:126;;7649:19;;;;7744:60;;-1:-1:-1;;;;;7766:3:126;7671:14;7744:8;:60::i;:::-;7856:3;;7695:109;;-1:-1:-1;7695:109:126;-1:-1:-1;7815:25:126;;7846:27;;-1:-1:-1;;;;;7856:3:126;7861:11;7846:9;:27::i;:::-;-1:-1:-1;7999:3:126;;7814:59;;-1:-1:-1;7964:19:126;;7986:31;;-1:-1:-1;;;;;7999:3:126;8004:12;7986;:31::i;:::-;7964:53;;8027:36;8036:11;8049:13;8027:8;:36::i;:::-;8121:3;;8111:44;;-1:-1:-1;;;;;8121:3:126;8126:16;8144:10;8111:9;:44::i;:::-;-1:-1:-1;8176:3:126;;8165:47;;-1:-1:-1;;;;;8176:3:126;8181:17;8200:11;8165:10;:47::i;:::-;-1:-1:-1;8277:3:126;;8261:33;;-1:-1:-1;;;;;8277:3:126;8282:11;8261:15;:33::i;:::-;-1:-1:-1;;8446:5:126;;8406:18;;8430:37;;-1:-1:-1;;;;;8446:5:126;8453:13;8430:15;:37::i;:::-;8405:62;;;8477:34;8486:10;8498:12;8477:8;:34::i;5229:945:162:-;5305:29;;:::i;:::-;5377:98;;;;;;;;;-1:-1:-1;5377:98:162;;;;;;;;;;;;;;;;;5504:663;;;;;;;5571:9;;;;;-1:-1:-1;;;;;5571:9:162;5504:663;;565:4:32;5504:663:162;;;;;;;;;;1536:8;5504:663;;;;1656:8;5504:663;;;;1598:6;5504:663;;;;5377:98;5504:663;;;5913:47;5950:9;5913:36;:47::i;:::-;5504:663;;5990:10;;-1:-1:-1;;;;;5990:10:162;;;5504:663;;;;6032:12;;;5504:663;;;;;;;;;;;1710:1;5504:663;;;;1756:4;5504:663;;;;;;;;5485:682;5229:945;-1:-1:-1;;5229:945:162:o;3469:357::-;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3583:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3607:23:162;;-1:-1:-1;;;3607:23:162;;-1:-1:-1;;;;;4916:32:165;;3607:23:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;3607:13:162;-1:-1:-1;3607:13:162;;-1:-1:-1;4871:18:165;;3607:23:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3640:20;3702:7;3671:39;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;3640:71;;3786:7;3795:12;3767:41;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3721:10:162;:98;;-1:-1:-1;;;;;;3721:98:162;-1:-1:-1;;;;;3721:98:162;;;;;;;;;;-1:-1:-1;;;3469:357:162:o;6266:333:164:-;6394:7;6432;6421;:18;;6413:45;;;;-1:-1:-1;;;6413:45:164;;17689:2:165;6413:45:164;;;17671:21:165;17728:2;17708:18;;;17701:30;-1:-1:-1;;;17747:18:165;;;17740:44;17801:18;;6413:45:164;;;;;;;;;6469:17;6489;6499:7;6489;:17;:::i;:::-;:21;;6509:1;6489:21;:::i;:::-;6469:41;-1:-1:-1;6520:16:164;6539:17;6469:41;6539:5;:17;:::i;:::-;6520:36;-1:-1:-1;6574:18:164;6585:7;6520:36;6574:18;:::i;:::-;6567:25;6266:333;-1:-1:-1;;;;;;6266:333:164:o;8686:563:162:-;8801:16;8848:394;8876:2;8896:3;8917:12;8947:281;;;;;;;;9000:4;8947:281;;;;;;9041:12;8947:281;;;;9090:1;8947:281;;;;9136:1;8947:281;;;;-1:-1:-1;;8947:281:162;;;8848:10;:394::i;7095:155:163:-;7184:7;7210:33;7228:11;7241:1;7210:17;:33::i;:::-;7203:40;7095:155;-1:-1:-1;;7095:155:163:o;1814:119:32:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;20236:576:162:-;20331:20;20353:18;20402:403;20429:6;20453:10;20481:310;;;;;;;;20534:4;20481:310;;;;;;20575:10;20481:310;;;;20622:1;20481:310;;;;20682:1;20481:310;;;;20728:10;20481:310;;;20402:9;:403::i;:::-;20383:422;;;;20236:576;;;;;:::o;22930:175::-;23027:10;;23004:53;;-1:-1:-1;;;23004:53:162;;;;;18251:25:165;;;18292:18;;;18285:34;;;-1:-1:-1;;;;;23027:10:162;;;;23004:42;;18224:18:165;;23004:53:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;23067:7:162;-1:-1:-1;23067:7:162;;-1:-1:-1;23075:22:162;;-1:-1:-1;23093:4:162;23075:15;:22;:::i;:::-;23067:31;;;;;;;;;;;;;1235:25:165;;1223:2;1208:18;;1089:177;23067:31:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21970:447;22096:18;22145:265;22173:6;22197:12;22227:10;22255:141;;;;;;;;22311:4;22255:141;;;;;;22350:1;22255:141;;;22145:10;:265::i;13936:259:50:-;13998:1;13993;:6;13989:200;;-1:-1:-1;;;;;;;;;;;14020:40:50;;;;18532:2:165;18514:21;;;18571:2;18551:18;;;18544:30;18610:34;18605:2;18590:18;;18583:62;-1:-1:-1;;;18676:2:165;18661:18;;18654:31;18717:3;18702:19;;18330:397;14020:40:50;;;;;;;;14079:30;;;18944:21:165;;;19001:1;18981:18;;;18974:29;-1:-1:-1;;;19034:2:165;19019:18;;19012:39;19118:4;19103:20;;19096:36;;;14079:30:50;;-1:-1:-1;;;;;;;;;;;14079:30:50;;;;19083:3:165;14079:30:50;;;14128;;;19355:21:165;;;19412:1;19392:18;;;19385:29;;;;-1:-1:-1;;;19445:2:165;19430:18;;19423:39;19529:4;19514:20;;19507:36;;;-1:-1:-1;;;;;;;;;;;14128:30:50;19494:3:165;19479:19;14128:30:50;;;;;;;;14172:6;:4;:6::i;:::-;13936:259;;:::o;12720:409:162:-;12813:20;12835:24;12890:232;12923:2;12943:6;12967:141;;;;;;;;13023:4;12967:141;;;;;;13062:1;12967:141;;;12890:15;:232::i;11955:259:50:-;12016:1;12012;:5;12008:200;;;-1:-1:-1;;;;;;;;;;;12038:41:50;;;;19756:2:165;19738:21;;;19795:2;19775:18;;;19768:30;19834:34;19829:2;19814:18;;19807:62;-1:-1:-1;;;19900:2:165;19885:18;;19878:32;19942:3;19927:19;;19554:398;1380:471:159;1430:19;;;;;;;;;;;;;;-1:-1:-1;;;1430:19:159;;;:10;:19::i;:::-;1422:5;:27;;-1:-1:-1;;;;;;1422:27:159;-1:-1:-1;;;;;1422:27:159;;;;;;;;;;1465:17;;;;;;;;;;;;-1:-1:-1;;;1465:17:159;;;;;;:10;:17::i;:::-;1459:3;:23;;-1:-1:-1;;;;;;1459:23:159;-1:-1:-1;;;;;1459:23:159;;;;;;;;;;1501:20;;;;;;;;;;;;-1:-1:-1;;;1501:20:159;;;;;;:10;:20::i;:::-;1492:6;:29;;-1:-1:-1;;;;;;1492:29:159;-1:-1:-1;;;;;1492:29:159;;;;;;;;;;1537:17;;;;;;;;;;;;-1:-1:-1;;;1537:17:159;;;;;;:10;:17::i;:::-;1531:3;:23;;-1:-1:-1;;;;;;1531:23:159;-1:-1:-1;;;;;1531:23:159;;;;;;;;;;1570:17;;;;;;;;;;;;-1:-1:-1;;;1570:17:159;;;;;;:10;:17::i;:::-;1564:3;;:23;;;;;-1:-1:-1;;;;;1564:23:159;;;;;-1:-1:-1;;;;;1564:23:159;;;;;;1609:22;;;;;;;;;;;;;;-1:-1:-1;;;1609:22:159;;;:10;:22::i;:::-;1598:8;:33;;-1:-1:-1;;;;;;1598:33:159;-1:-1:-1;;;;;1598:33:159;;;;;;;;;;1650:20;;;;;;;;;;;;-1:-1:-1;;;1650:20:159;;;;;;:10;:20::i;:::-;1641:6;:29;;-1:-1:-1;;;;;;1641:29:159;-1:-1:-1;;;;;1641:29:159;;;;;;;;;;1695:26;;;;;;;;;;;;-1:-1:-1;;;1695:26:159;;;;;;:10;:26::i;:::-;1680:12;:41;;-1:-1:-1;;;;;;1680:41:159;-1:-1:-1;;;;;1680:41:159;;;;;;;;;;1744:24;;;;;;;;;;;;-1:-1:-1;;;1744:24:159;;;;;;:10;:24::i;:::-;1731:10;:37;;-1:-1:-1;;;;;;1731:37:159;-1:-1:-1;;;;;1731:37:159;;;;;;;;;;1787:20;;;;;;;;;;;;-1:-1:-1;;;1787:20:159;;;;;;:10;:20::i;:::-;1778:6;:29;;-1:-1:-1;;;;;;1778:29:159;-1:-1:-1;;;;;1778:29:159;;;;;;;;;;1829:15;1818:8;:26;1380:471::o;9725:262:163:-;9791:7;;9832:89;9873:38;9901:9;:3;9907;9901:9;:::i;:::-;9881:10;;9873:27;:38::i;:::-;9840:10;;9832:27;:89::i;:::-;9810:111;-1:-1:-1;9938:42:163;565:4:32;9810:111:163;9938:29;:42::i;3832:335:162:-;4002:158;4022:8;4044:3;565:4:32;4094:8:162;4116:7;4137:13;4002:6;:158::i;:::-;3832:335;;;;;:::o;16153:591::-;16247:20;16269:18;16318:419;16344:6;16368:10;16396:327;;;;;;;;16449:4;16396:327;;;;;;16490:10;16396:327;;;;16537:1;16396:327;;;;16597:10;16396:327;;;;-1:-1:-1;;16396:327:162;;;16318:8;:419::i;17914:445::-;18039:18;18088:264;18115:6;18139:12;18169:10;18197:141;;;;;;;;18253:4;18197:141;;;;;;18292:1;18197:141;;;18088:9;:264::i;8691:1028:163:-;8827:19;;;8947:23;:5;8961:8;8947:13;:23::i;:::-;8922:48;;8980:10;8993:56;9034:14;9008:1;9001:4;:8;:23;;9020:4;9001:23;;;9012:5;9013:4;9012:5;:::i;8993:56::-;8980:69;;9071:1;9064:4;:8;9060:621;;;9102:89;9146:30;9172:2;9146:18;:30::i;:::-;9102:10;;:18;:89::i;:::-;9088:103;-1:-1:-1;9223:24:163;9237:10;9088:103;9223:24;:::i;:::-;9205:43;;9262:30;;;;9060:621;9320:1;9313:4;:8;9309:372;;;9472:89;9516:30;9542:2;9516:18;:30::i;:::-;9472:10;;:18;:89::i;:::-;9458:103;-1:-1:-1;9586:40:163;9615:10;9458:103;9586:40;:::i;9309:372::-;9698:10;9710:1;9690:22;;;;;;8691:1028;;;;;;;:::o;3425:191:50:-;3504:9;3499:111;;-1:-1:-1;;;;;;;;;;;3560:3:50;3534:30;;;;;;:::i;:::-;;;;;;;;3578:21;3589:9;3578:10;:21::i;12219:177::-;12299:1;12295;:5;12291:99;;;-1:-1:-1;;;;;;;;;;;12347:3:50;12321:30;;;;;;:::i;:::-;;;;;;;;12365:14;12374:1;12377;12365:8;:14::i;:::-;12219:177;;;:::o;16185:::-;16265:1;16261;:5;16257:99;;;-1:-1:-1;;;;;;;;;;;16313:3:50;16287:30;;;;;;:::i;:::-;;;;;;;;16331:14;16340:1;16343;16331:8;:14::i;7546:145:66:-;7613:71;7676:2;7680;7629:54;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7629:54:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7629:54:66;-1:-1:-1;;;7629:54:66;;;7613:15;:71::i;7697:143::-;7763:70;7825:2;7829;7779:53;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7779:53:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7779:53:66;-1:-1:-1;;;7779:53:66;;;7763:15;:70::i;5476:178:50:-;5557:1;5552;:6;5548:100;;-1:-1:-1;;;;;;;;;;;5605:3:50;5579:30;;;;;;:::i;:::-;;;;;;;;5623:14;5632:1;5635;5623:8;:14::i;11047:559:162:-;11143:16;11190:409;11220:2;11240:12;11270:315;;;;;;;;11323:4;11270:315;;;;;;11364:12;11270:315;;;;11413:1;11270:315;;;;11459:1;11270:315;;;;-1:-1:-1;;11270:315:162;;;11190:12;:409::i;15921:259:50:-;15982:1;15978;:5;15974:200;;;-1:-1:-1;;;;;;;;;;;16004:41:50;;;;21405:2:165;21387:21;;;21444:2;21424:18;;;21417:30;21483:34;21478:2;21463:18;;21456:62;-1:-1:-1;;;21549:2:165;21534:18;;21527:32;21591:3;21576:19;;21203:398;7679:1001:162;7837:16;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;7865:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7889:17:162;;-1:-1:-1;;;7889:17:162;;-1:-1:-1;;;;;4916:32:165;;7889:17:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;7889:13:162;-1:-1:-1;7889:13:162;;-1:-1:-1;4871:18:165;;7889:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7974:10:162;;:26;;;-1:-1:-1;;;7974:26:162;;;;87:42:161;;-1:-1:-1;;;;;;7974:10:162;;;;-1:-1:-1;7974:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;7966:61:162;;:99;;;;-1:-1:-1;8043:22:162;;7966:99;7949:725;;;8113:10;;8143:23;;;;8273:22;;8113:200;;-1:-1:-1;;;8113:200:162;;-1:-1:-1;;;;;8113:10:162;;;;:21;;8143:23;8113:200;;8190:12;;8224:3;;8249:2;;8273:22;8113:200;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8090:223;;;;7949:725;8344:9;;8359:23;;;;8344:39;;-1:-1:-1;;;8344:39:162;;;;;1235:25:165;;;;8344:9:162;;;;-1:-1:-1;;;;;8344:9:162;;:14;;1208:18:165;;8344:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8397:9:162;;8423:10;;8436:23;;;;8397:63;;-1:-1:-1;;;8397:63:162;;-1:-1:-1;;;;;8423:10:162;;;8397:63;;;14349:51:165;14416:18;;;14409:34;;;;8397:9:162;;;;;;-1:-1:-1;8397:17:162;;-1:-1:-1;14322:18:165;;8397:63:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;8497:10:162;;8623:22;;8497:166;;-1:-1:-1;;;8497:166:162;;-1:-1:-1;;;;;8497:10:162;;;;:21;;:166;;8540:12;;8574:3;;8599:2;;8623:22;8497:166;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;5592:1309:163:-;5713:7;;-1:-1:-1;;;;;5775:25:163;;;5814:30;5775:25;5814:28;:30::i;:::-;5775:79;;;;;;;;;;;;;1235:25:165;;1223:2;1208:18;;1089:177;5775:79:163;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5732:122;;5864:36;5903:11;-1:-1:-1;;;;;5903:23:163;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5864:64;;5938:40;5981:11;-1:-1:-1;;;;;5981:25:163;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5938:70;;6037:857;6087:720;;;;;;;;6154:8;:22;;;6087:720;;;;6215:8;:24;;;6087:720;;;;6275:8;:21;;;6087:720;;;;6336:8;:25;;;6087:720;;;;6397:8;:21;;;6087:720;;;;6453:10;:22;;;6087:720;;;;6509:8;:19;;;6087:720;;;;6569:10;:28;;;6087:720;;;;6641:10;:31;;;6087:720;;;;6704:10;:15;;;:21;;;6087:720;;;;6762:10;:15;;;:26;;;6087:720;;;6825:10;:23;;;6037:857;;6866:14;6037:32;:857::i;984:556:32:-;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;18851:1379:162:-;18989:20;19011:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;19041:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19065:21:162;;-1:-1:-1;;;19065:21:162;;-1:-1:-1;;;;;4916:32:165;;19065:21:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;19065:13:162;-1:-1:-1;19065:13:162;;-1:-1:-1;4871:18:165;;19065:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19201:10:162;;19139:82;;-1:-1:-1;;;;;;19201:10:162;;-1:-1:-1;19139:48:162;:82::i;:::-;19124:97;;87:42:161;-1:-1:-1;;;;;19248:61:162;19256:10;;;;;;;;;-1:-1:-1;;;;;19256:10:162;-1:-1:-1;;;;;19256:24:162;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;19248:61:162;;:99;;;;-1:-1:-1;19325:22:162;;19248:99;19231:949;;;19401:10;;19446:23;;;;19529:21;;;;19588:23;;;;;19653:22;;19401:288;;-1:-1:-1;;;19401:288:162;;-1:-1:-1;;;;;19401:10:162;;;;:20;;19446:23;19401:288;;19501:10;;19529:21;;19629:6;;19653:22;19401:288;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;19372:317;;-1:-1:-1;19372:317:162;-1:-1:-1;19231:949:162;;;19720:9;;19735:23;;;;19720:39;;-1:-1:-1;;;19720:39:162;;;;;1235:25:165;;;;19720:9:162;;;;-1:-1:-1;;;;;19720:9:162;;:14;;1208:18:165;;19720:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19773:9:162;;19799:10;;19812:21;;;;19773:61;;-1:-1:-1;;;19773:61:162;;-1:-1:-1;;;;;19799:10:162;;;19773:61;;;14349:51:165;14416:18;;;14409:34;;;;19773:9:162;;;;;;-1:-1:-1;19773:17:162;;-1:-1:-1;14322:18:165;;19773:61:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;19877:10:162;;19943:21;;;;20002:23;;;;;20067:22;;19877:226;;-1:-1:-1;;;19877:226:162;;-1:-1:-1;;;;;19877:10:162;;;;:20;;:226;;19915:10;;19943:21;;20043:6;;20067:22;19877:226;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;20117:9;;20132:23;;;;19848:255;;-1:-1:-1;19848:255:162;;-1:-1:-1;20117:9:162;;;-1:-1:-1;;;;;20117:9:162;;:14;;20132:36;;19848:255;;20132:36;:::i;:::-;20117:52;;;;;;;;;;;;;1235:25:165;;1223:2;1208:18;;1089:177;20117:52:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;18851:1379;;;;;;:::o;21435:529::-;21607:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;21637:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21661:21:162;;-1:-1:-1;;;21661:21:162;;-1:-1:-1;;;;;4916:32:165;;21661:21:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;21661:13:162;-1:-1:-1;21661:13:162;;-1:-1:-1;4871:18:165;;21661:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;21740:10:162;;21837:21;;;;21921:22;;21740:217;;-1:-1:-1;;;21740:217:162;;-1:-1:-1;;;;;21740:10:162;;;;-1:-1:-1;21740:21:162;;-1:-1:-1;21740:217:162;;21779:12;;21809:10;;21837:21;;21897:6;;21921:22;21740:217;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;21721:236;21435:529;-1:-1:-1;;;;;21435:529:162:o;2409:432:50:-;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;2452:359;;2652:67;;;-1:-1:-1;;;;;;;;;;;2652:67:50;;;24831:51:165;;;-1:-1:-1;;;24898:18:165;;;24891:34;;;;2712:4:50;24941:18:165;;;24934:34;2489:11:50;;1671:64;2586:43;;24804:18:165;;2652:67:50;;;-1:-1:-1;;2652:67:50;;;;;;;;;;2541:196;;;2652:67;2541:196;;:::i;:::-;;;;-1:-1:-1;;2541:196:50;;;;;;;;;;2506:245;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;2452:359:50;2820:7;:14;;-1:-1:-1;;2820:14:50;;;;;2409:432::o;12212:502:162:-;12351:20;12373:24;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;12409:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12433:17:162;;-1:-1:-1;;;12433:17:162;;-1:-1:-1;;;;;4916:32:165;;12433:17:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;12433:13:162;-1:-1:-1;12433:13:162;;-1:-1:-1;4871:18:165;;12433:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12523:10:162;;12591:21;;;;12671:22;;12523:184;;-1:-1:-1;;;12523:184:162;;-1:-1:-1;;;;;12523:10:162;;;;-1:-1:-1;12523:26:162;;-1:-1:-1;12523:184:162;;12567:6;;12591:21;12651:2;;12523:184;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12504:203;;;;12212:502;;;;;;:::o;2207:165:32:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;4173:1050:162:-;4378:28;4409:123;;;;;;;;4447:8;4409:123;;;;4475:7;4409:123;;;;4508:13;4409:123;;;4378:154;;4542:36;4581:601;;;;;;;;4644:9;;;;;;;;;-1:-1:-1;;;;;4644:9:162;-1:-1:-1;;;;;4581:601:162;;;;;4688:17;4581:601;;;;565:4:32;4581:601:162;;;;1536:8;4581:601;;;;1656:8;4581:601;;;;1598:6;4581:601;;;;4958:41;4995:3;4958:36;:41::i;:::-;4581:601;;5025:10;;-1:-1:-1;;;;;5025:10:162;;;4581:601;;;;5063:12;;;4581:601;;;;;;;;;;1710:1;4581:601;;;;1756:4;4581:601;;;;;4542:640;-1:-1:-1;5192:24:162;5199:8;4542:640;5192:6;:24::i;15001:1146::-;15138:20;15160;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;15192:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15216:21:162;;-1:-1:-1;;;15216:21:162;;-1:-1:-1;;;;;4916:32:165;;15216:21:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;15216:13:162;-1:-1:-1;15216:13:162;;-1:-1:-1;4871:18:165;;15216:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15299:10:162;;:26;;;-1:-1:-1;;;15299:26:162;;;;87:42:161;;-1:-1:-1;;;;;;15299:10:162;;;;-1:-1:-1;15299:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;15291:61:162;;:99;;;;-1:-1:-1;15368:22:162;;15291:99;15274:867;;;15438:10;;15466:23;;;;15545:21;;;;15609:23;;;;;15682:22;;15438:284;;-1:-1:-1;;;15438:284:162;;-1:-1:-1;;;;;15438:10:162;;;;:19;;15466:23;15438:284;;15513:10;;15545:21;;15654:6;;15682:22;15438:284;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;15415:307;;;;;;15274:867;15753:9;;:26;;-1:-1:-1;;;15753:26:162;;;;;1235:25:165;;;15753:9:162;;;;-1:-1:-1;;;;;15753:9:162;;:14;;1208:18:165;;15753:26:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15793:9:162;;15819:10;;15793:50;;-1:-1:-1;;;15793:50:162;;-1:-1:-1;;;;;15819:10:162;;;15793:50;;;14349:51:165;14416:18;;;14409:34;;;15793:9:162;;;;;;-1:-1:-1;15793:17:162;;-1:-1:-1;14322:18:165;;15793:50:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;15880:10:162;;15953:21;;;;16017:23;;;;;16090:22;;15880:250;;-1:-1:-1;;;15880:250:162;;-1:-1:-1;;;;;15880:10:162;;;;:19;;:250;;15921:10;;15953:21;;16062:6;;16090:22;15880:250;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;17382:526::-;17553:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;17583:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;17607:21:162;;-1:-1:-1;;;17607:21:162;;-1:-1:-1;;;;;4916:32:165;;17607:21:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;17607:13:162;-1:-1:-1;17607:13:162;;-1:-1:-1;4871:18:165;;17607:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;17685:10:162;;17781:21;;;;17865:22;;17685:216;;-1:-1:-1;;;17685:216:162;;-1:-1:-1;;;;;17685:10:162;;;;-1:-1:-1;17685:20:162;;-1:-1:-1;17685:216:162;;17723:12;;17753:10;;17781:21;;17841:6;;17865:22;17685:216;;;:::i;5773:3347:32:-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;3262:157:50:-;3322:9;3317:96;;-1:-1:-1;;;;;;;;;;;3352:30:50;;;;25181:2:165;25163:21;;;25220:2;25200:18;;;25193:30;25259:25;25254:2;25239:18;;25232:53;25317:2;25302:18;;24979:347;3352:30:50;;;;;;;;3396:6;:4;:6::i;:::-;3262:157;:::o;868:133:66:-;939:55;986:7;965:19;939:55::i;5209:262:50:-;5271:1;5266;:6;5262:203;;-1:-1:-1;;;;;;;;;;;5293:41:50;;;;25533:2:165;25515:21;;;25572:2;25552:18;;;25545:30;25611:34;25606:2;25591:18;;25584:62;-1:-1:-1;;;25677:2:165;25662:18;;25655:32;25719:3;25704:19;;25331:398;5293:41:50;;;;;;;;5353:31;;;25946:21:165;;;26003:2;25983:18;;;25976:30;-1:-1:-1;;;26037:2:165;26022:18;;26015:40;26122:4;26107:20;;26100:36;;;5353:31:50;;-1:-1:-1;;;;;;;;;;;5353:31:50;;;;26087:3:165;5353:31:50;;;5403;;;26359:21:165;;;26416:2;26396:18;;;26389:30;;;;-1:-1:-1;;;26450:2:165;26435:18;;26428:40;26535:4;26520:20;;26513:36;;;-1:-1:-1;;;;;;;;;;;5403:31:50;26500:3:165;26485:19;5403:31:50;26147:408:165;9859:1182:162;9998:16;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;10026:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10050:17:162;;-1:-1:-1;;;10050:17:162;;-1:-1:-1;;;;;4916:32:165;;10050:17:162;;;4898:51:165;-1:-1:-1;;;;;;;;;;;10050:13:162;-1:-1:-1;10050:13:162;;-1:-1:-1;4871:18:165;;10050:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10141:10:162;;:26;;;-1:-1:-1;;;10141:26:162;;;;87:42:161;;-1:-1:-1;;;;;;10141:10:162;;;;-1:-1:-1;10141:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;10133:61:162;;:99;;;;-1:-1:-1;10210:22:162;;10133:99;10116:919;;;10280:10;;10312:23;;;;10393:21;;;;10453;;;;10537:22;;10280:297;;-1:-1:-1;;;10280:297:162;;-1:-1:-1;;;;;10280:10:162;;;;:23;;10312;10280:297;;10359:12;;10393:21;;10453;;10513:2;;10280:297;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10257:320;;;;10116:919;10608:9;;10623:23;;;;10608:39;;-1:-1:-1;;;10608:39:162;;;;;1235:25:165;;;;10608:9:162;;;;-1:-1:-1;;;;;10608:9:162;;:14;;1208:18:165;;10608:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;10661:9:162;;10687:10;;10700:23;;;;10661:63;;-1:-1:-1;;;10661:63:162;;-1:-1:-1;;;;;10687:10:162;;;10661:63;;;14349:51:165;14416:18;;;14409:34;;;;10661:9:162;;;;;;-1:-1:-1;10661:17:162;;-1:-1:-1;14322:18:165;;10661:63:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;10761:10:162;;10840:21;;;;10900;;;;10984:22;;10761:263;;-1:-1:-1;;;10761:263:162;;-1:-1:-1;;;;;10761:10:162;;;;:23;;:263;;10806:12;;10840:21;;10900;;10960:2;;10761:263;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;538:227:163:-;625:7;712:10;-1:-1:-1;;;;;712:24:163;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:45;;;694:63;;:15;:63;:::i;:::-;663:95;;:15;:95;:::i;40850:4432:33:-;-1:-1:-1;;;;;;;;41013:7:33;-1:-1:-1;;;;;;;;;;;;;;;41332:30:33;41365:113;41410:7;:21;;;41445:7;:23;;;41365:31;:113::i;:::-;41332:146;;41488:17;41508:170;41540:22;41576:7;:20;;;41610:7;:25;;;41649:7;:19;;;41508:18;:170::i;:::-;41488:190;;41688:29;41720:94;41761:7;41782:22;41720:27;:94::i;:::-;41688:126;;41866:185;41907:7;41928:21;41963:22;41999:9;42022:19;41866:27;:185::i;:::-;41824:227;;;41845:17;;;41824:227;;;;42061:76;;42105:21;-1:-1:-1;42098:28:33;;-1:-1:-1;;;42098:28:33;42061:76;43031:21;43055:109;43091:7;43112:9;43135:19;43055:22;:109::i;:::-;43031:133;;43216:177;43257:7;43278:13;43305:22;43341:9;43364:19;43216:27;:177::i;:::-;43174:219;;43195:17;;;43174:219;;;;;;43403:113;;;;-1:-1:-1;;;43403:113:33;;26762:2:165;43403:113:33;;;26744:21:165;26801:2;26781:18;;;26774:30;26840:34;26820:18;;;26813:62;-1:-1:-1;;;26891:18:165;;;26884:47;26948:19;;43403:113:33;26560:413:165;43403:113:33;43531:9;43526:1719;43550:14;43546:1;:18;43526:1719;;;44146:174;44201:7;44226:13;44257:9;44284:22;44146:37;:174::i;:::-;44056:264;;;44112:17;;;44056:264;44074:20;;;44056:264;;;;44376:5;44334:62;44500:20;;;;44473:18;;44409:29;;44473:48;;:18;:26;:48::i;:::-;44441:80;;:13;:80;:::i;:::-;44409:112;;44563:21;44539;:45;44535:89;;;44604:5;;;44535:89;44875:209;44920:7;44945:21;44984:22;45024:9;45051:19;44875:27;:209::i;:::-;44787:297;;;44841:17;;;44787:297;;;;45098:137;;45155:21;45139:37;;45098:137;;;45215:5;;;45098:137;-1:-1:-1;43566:3:33;;;:::i;:::-;;;43526:1719;;;-1:-1:-1;45262:13:33;40850:4432;-1:-1:-1;;;;;;;;40850:4432:33:o;1226:237:163:-;1330:7;1412:11;-1:-1:-1;;;;;1412:25:163;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;;1368:29;1385:11;1368:16;:29::i;:::-;:88;;;;:::i;1007:380:66:-;1105:14;;591:42;1278:2;1265:16;;1081:21;;1105:14;1265:16;591:42;1314:5;1303:68;1294:77;;1231:150;;1007:380;:::o;68721:340:33:-;68856:7;;68907:53;68944:16;68914:14;68907:53;:::i;:::-;68875:85;;69004:1;68978:22;:27;;68970:36;;;;;1246:449;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;45707:2348::-;45853:7;46290:28;46342:134;46433:7;:28;;;46400:7;:23;;;:62;;;;:::i;:::-;46349:28;;;;;46342:40;:134::i;:::-;46290:196;;47179:9;47191:267;47246:53;47273:7;:25;;;47246:7;:18;;;:26;;:53;;;;:::i;:::-;47313:7;:25;;;47352:23;47395:7;:19;;;150:4:32;47389:25:33;;;;:::i;:::-;47428:7;:20;;;47191:41;:267::i;:::-;47179:279;;47468:27;47498:490;47951:36;47967:7;:19;;;150:4:32;47961:25:33;;;;:::i;:::-;150:4:32;;47951:9:33;:36::i;:::-;47515:430;47596:335;47911:7;:19;;;150:4:32;47905:25:33;;;;:::i;:::-;47596:283;47697:160;47758:20;47808:7;:23;;;47697:31;:160::i;:::-;47596:46;;;;;:75;:283::i;:335::-;47543:25;;;;47516:18;;;;:53;;:26;:53::i;47515:430::-;47499:446;;:1;:446;:::i;47498:490::-;47468:520;;48028:7;:20;;;48006:19;:42;;;;:::i;52162:1774::-;52402:7;52411:4;52555:18;52575:12;52591:307;52671:23;52712:7;:20;;;52750:12;52786:7;:19;;;150:4:32;52780:25:33;;;;:::i;:::-;52823:7;:18;;;52859:7;:25;;;52591:62;:307::i;:::-;52554:344;;;;52913:7;52908:56;;52944:1;52947:5;52936:17;;;;;;;;52908:56;53040:21;53130:409;53520:7;:18;;;53298:212;53351:12;53389:10;53425:7;:16;;;53467:7;:21;;;53298:27;:212::i;:::-;53131:144;53175:12;53209:10;53241:7;:16;;;53131:22;:144::i;:::-;:379;;;;:::i;:::-;53130:389;;:409::i;:::-;53101:438;;:10;:438;:::i;:::-;53064:21;;:476;;;;:::i;:::-;53040:500;;53550:16;53569:100;53650:7;:18;;;53613:26;53637:1;53613:19;:23;;:26;;;;:::i;:::-;53570:7;:20;;;:70;;;;:::i;53569:100::-;53550:119;;53711:7;:28;;;53700:8;:39;;;;:::i;:::-;53683:13;:56;53679:251;;53807:28;;;;53780:24;53796:8;53780:13;:24;:::i;:::-;:55;;;;:::i;:::-;53853:4;53755:116;;;;;;;;;;53679:251;53910:1;53913:5;53902:17;;;;;;;;52162:1774;;;;;;;;;:::o;49517:849::-;49681:7;49700:21;49724:10;49700:34;;49744:13;49760:305;50027:7;:28;;;49960:48;49989:7;:18;;;49960:7;:20;;;:28;;:48;;;;:::i;:::-;49905:18;;;;49840:101;;49848:26;:19;49872:1;49848:23;:26::i;49840:101::-;49800:21;;:141;;;;:::i;:::-;:208;;;;:::i;:::-;:255;;;;:::i;:::-;49760:18;;;;;:26;:305::i;:::-;49744:321;-1:-1:-1;50094:265:33;50226:119;50307:16;50313:10;150:4:32;50307:16:33;:::i;:::-;50256;;;;50226:21;;;;:47;;:29;:47::i;:119::-;50161:42;50186:16;50192:10;150:4:32;50186:16:33;:::i;:::-;50161;;;;;:24;:42::i;:::-;50125:78;;:13;:78;:::i;:::-;:220;;;;:::i;:::-;50094:5;;:13;:265::i;54820:692::-;55034:7;55043:4;55059:11;55073:127;55120:7;55141:12;55167:23;55073:33;:127::i;:::-;55059:141;;55210:11;55224:159;55364:7;:18;;;55224:118;55320:7;:21;;;150:4:32;55314:27:33;;;;:::i;:::-;55224:68;55275:16;55281:10;150:4:32;55275:16:33;:::i;:::-;55224:29;;;;;:50;:68::i;:159::-;55210:173;;55404:3;55397;:10;55393:113;;55431:9;55437:3;55431;:9;:::i;:::-;55442:4;55423:24;;;;;;;;55393:113;55486:1;55489:5;55478:17;;;;;;54820:692;;;;;;;;:::o;4671:846:32:-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;15261:101::-;15317:6;15346:1;15342;:5;:13;;15354:1;15342:13;;;-1:-1:-1;15350:1:32;;15261:101;-1:-1:-1;15261:101:32:o;10669:302:35:-;10835:7;10956:8;:1;10962;10956:5;:8::i;:::-;10917:36;10932:20;10950:1;10932:13;:2;10943:1;10932:10;:13::i;10917:36::-;:47;;;;:::i;4141:115:32:-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;6050:1039:35:-;6239:14;;;6312:13;:1;6322:2;6312:9;:13::i;:::-;6295:30;;6386:9;6398:47;6425:6;6433:2;6437:1;6440;6443;6398:26;:47::i;:::-;6386:59;-1:-1:-1;6487:15:35;6500:1;6488:6;6492:2;6488:1;:6;:::i;6487:15::-;6483:19;;6520:1;6516;:5;6512:53;;;6545:1;6548:5;6537:17;;;;;;;;6512:53;6663:10;6676:81;6717:30;565:4:32;6745:1:35;6717:27;:30::i;:::-;6676:23;6692:6;6677:5;6681:1;6677;:5;:::i;6676:81::-;6663:94;-1:-1:-1;6867:14:35;6663:94;6878:2;6867:10;:14::i;:::-;6862:19;;7015:2;7011:1;:6;7007:52;;;7042:6;7046:2;7042:1;:6;:::i;:::-;7033:15;;7007:52;7078:4;7068:14;;6269:820;;;6050:1039;;;;;;;;;;:::o;58041:339:33:-;58223:7;58261:112;58301:58;58324:11;58337:10;58349:9;58301:22;:58::i;:::-;58261:14;;:22;:112::i;57489:234::-;57634:7;57660:56;57704:11;57660:35;57678:16;57684:10;150:4:32;57678:16:33;:::i;:::-;57660:9;;:17;:35::i;56179:1062::-;56361:7;56380:9;56392:267;56447:53;56474:7;:25;;;56447:7;:18;;;:26;;:53;;;;:::i;:::-;56514:7;:25;;;56553:23;56596:7;:19;;;150:4:32;56590:25:33;;;;:::i;56392:267::-;56380:279;;56669:11;56683:153;56708:118;56750:62;56792:7;:19;;;56774:12;56751:7;:20;;;:35;;;;:::i;56750:62::-;56708:18;;;;;:24;:118::i;:::-;150:4:32;;56683:11:33;:153::i;:::-;56669:167;;56846:11;56860:341;57148:52;57180:7;:19;;;150:4:32;57174:25:33;;;;:::i;:::-;57148:19;;;;;:25;:52::i;:::-;56860:270;57002:114;57075:7;:19;;;150:4:32;57069:25:33;;;;:::i;:::-;57026:12;57003:7;:20;;;:35;;;;:::i;57002:114::-;56978:138;;:1;:138;:::i;:::-;56920:18;;;;56860:38;;;;:79;;:59;:79::i;:341::-;56846:355;-1:-1:-1;57218:16:33;:3;56846:355;57218:11;:16::i;:::-;57211:23;56179:1062;-1:-1:-1;;;;;;;56179:1062:33:o;9632:3592:32:-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;-1:-1:-1;;;;;;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;2726:748::-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;3750:115::-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;-1:-1:-1:-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:385:165:-;100:6;108;116;124;177:3;165:9;156:7;152:23;148:33;145:53;;;194:1;191;184:12;145:53;-1:-1:-1;;217:23:165;;;287:2;272:18;;259:32;;-1:-1:-1;338:2:165;323:18;;310:32;;389:2;374:18;361:32;;-1:-1:-1;14:385:165;-1:-1:-1;14:385:165:o;404:131::-;-1:-1:-1;;;;;479:31:165;;469:42;;459:70;;525:1;522;515:12;540:544;632:6;640;648;701:2;689:9;680:7;676:23;672:32;669:52;;;717:1;714;707:12;669:52;756:9;743:23;775:31;800:5;775:31;:::i;:::-;825:5;-1:-1:-1;882:2:165;867:18;;854:32;895:33;854:32;895:33;:::i;:::-;947:7;-1:-1:-1;1006:2:165;991:18;;978:32;1019:33;978:32;1019:33;:::i;:::-;1071:7;1061:17;;;540:544;;;;;:::o;1380:658::-;1551:2;1603:21;;;1673:13;;1576:18;;;1695:22;;;1522:4;;1551:2;1774:15;;;;1748:2;1733:18;;;1522:4;1817:195;1831:6;1828:1;1825:13;1817:195;;;1896:13;;-1:-1:-1;;;;;1892:39:165;1880:52;;1987:15;;;;1952:12;;;;1928:1;1846:9;1817:195;;;-1:-1:-1;2029:3:165;;1380:658;-1:-1:-1;;;;;;1380:658:165:o;2043:156::-;2109:20;;2169:4;2158:16;;2148:27;;2138:55;;2189:1;2186;2179:12;2204:354;2269:6;2277;2330:2;2318:9;2309:7;2305:23;2301:32;2298:52;;;2346:1;2343;2336:12;2298:52;2369:27;2386:9;2369:27;:::i;:::-;2359:37;;2446:2;2435:9;2431:18;2418:32;2490:18;2483:5;2479:30;2472:5;2469:41;2459:69;;2524:1;2521;2514:12;2459:69;2547:5;2537:15;;;2204:354;;;;;:::o;2563:613::-;2664:6;2672;2680;2688;2741:3;2729:9;2720:7;2716:23;2712:33;2709:53;;;2758:1;2755;2748:12;2709:53;2797:9;2784:23;2816:31;2841:5;2816:31;:::i;:::-;2866:5;-1:-1:-1;2923:2:165;2908:18;;2895:32;2936:33;2895:32;2936:33;:::i;:::-;2988:7;-1:-1:-1;3042:2:165;3027:18;;3014:32;;-1:-1:-1;3098:2:165;3083:18;;3070:32;3111:33;3070:32;3111:33;:::i;:::-;2563:613;;;;-1:-1:-1;2563:613:165;;-1:-1:-1;;2563:613:165:o;3181:127::-;3242:10;3237:3;3233:20;3230:1;3223:31;3273:4;3270:1;3263:15;3297:4;3294:1;3287:15;3313:250;3380:2;3374:9;3422:6;3410:19;;3459:18;3444:34;;3480:22;;;3441:62;3438:88;;;3506:18;;:::i;:::-;3542:2;3535:22;3313:250;:::o;3568:252::-;3640:2;3634:9;3682:3;3670:16;;3716:18;3701:34;;3737:22;;;3698:62;3695:88;;;3763:18;;:::i;3825:922::-;3894:6;3947:2;3935:9;3926:7;3922:23;3918:32;3915:52;;;3963:1;3960;3953:12;3915:52;4003:9;3990:23;4032:18;4073:2;4065:6;4062:14;4059:34;;;4089:1;4086;4079:12;4059:34;4127:6;4116:9;4112:22;4102:32;;4172:7;4165:4;4161:2;4157:13;4153:27;4143:55;;4194:1;4191;4184:12;4143:55;4230:2;4217:16;4252:2;4248;4245:10;4242:36;;;4258:18;;:::i;:::-;4333:2;4327:9;4301:2;4387:13;;-1:-1:-1;;4383:22:165;;;4407:2;4379:31;4375:40;4363:53;;;4431:18;;;4451:22;;;4428:46;4425:72;;;4477:18;;:::i;:::-;4517:10;4513:2;4506:22;4552:2;4544:6;4537:18;4592:7;4587:2;4582;4578;4574:11;4570:20;4567:33;4564:53;;;4613:1;4610;4603:12;4564:53;4669:2;4664;4660;4656:11;4651:2;4643:6;4639:15;4626:46;4714:1;4692:15;;;4709:2;4688:24;4681:35;;;;-1:-1:-1;4696:6:165;3825:922;-1:-1:-1;;;;;3825:922:165:o;4960:1569::-;5164:4;5193:2;5233;5222:9;5218:18;5263:2;5252:9;5245:21;5286:6;5321;5315:13;5352:6;5344;5337:22;5378:2;5368:12;;5411:2;5400:9;5396:18;5389:25;;5473:2;5463:6;5460:1;5456:14;5445:9;5441:30;5437:39;5511:2;5503:6;5499:15;5532:1;5553;5563:937;5579:6;5574:3;5571:15;5563:937;;;5648:22;;;-1:-1:-1;;5644:36:165;5632:49;;5704:13;;5791:9;;-1:-1:-1;;;;;5787:35:165;5772:51;;5862:11;;5856:18;5894:15;;;5887:27;;;5975:19;;5744:15;;;6007:24;;;6097:21;;;;6142:1;;6065:2;6053:15;;;6156:236;6172:8;6167:3;6164:17;6156:236;;;6253:15;;-1:-1:-1;;;;;;6249:42:165;6235:57;;6361:17;;;;6200:1;6191:11;;;;;6318:14;;;;6156:236;;;-1:-1:-1;6478:12:165;;;;6415:5;-1:-1:-1;;;6443:15:165;;;;5605:1;5596:11;5563:937;;;-1:-1:-1;6517:6:165;;4960:1569;-1:-1:-1;;;;;;;;;4960:1569:165:o;6534:250::-;6619:1;6629:113;6643:6;6640:1;6637:13;6629:113;;;6719:11;;;6713:18;6700:11;;;6693:39;6665:2;6658:10;6629:113;;;-1:-1:-1;;6776:1:165;6758:16;;6751:27;6534:250::o;6789:271::-;6831:3;6869:5;6863:12;6896:6;6891:3;6884:19;6912:76;6981:6;6974:4;6969:3;6965:14;6958:4;6951:5;6947:16;6912:76;:::i;:::-;7042:2;7021:15;-1:-1:-1;;7017:29:165;7008:39;;;;7049:4;7004:50;;6789:271;-1:-1:-1;;6789:271:165:o;7065:803::-;7227:4;7256:2;7296;7285:9;7281:18;7326:2;7315:9;7308:21;7349:6;7384;7378:13;7415:6;7407;7400:22;7453:2;7442:9;7438:18;7431:25;;7515:2;7505:6;7502:1;7498:14;7487:9;7483:30;7479:39;7465:53;;7553:2;7545:6;7541:15;7574:1;7584:255;7598:6;7595:1;7592:13;7584:255;;;7691:2;7687:7;7675:9;7667:6;7663:22;7659:36;7654:3;7647:49;7719:40;7752:6;7743;7737:13;7719:40;:::i;:::-;7709:50;-1:-1:-1;7817:12:165;;;;7782:15;;;;7620:1;7613:9;7584:255;;;-1:-1:-1;7856:6:165;;7065:803;-1:-1:-1;;;;;;;7065:803:165:o;7873:248::-;7941:6;7949;8002:2;7990:9;7981:7;7977:23;7973:32;7970:52;;;8018:1;8015;8008:12;7970:52;-1:-1:-1;;8041:23:165;;;8111:2;8096:18;;;8083:32;;-1:-1:-1;7873:248:165:o;8126:315::-;8202:6;8210;8218;8271:2;8259:9;8250:7;8246:23;8242:32;8239:52;;;8287:1;8284;8277:12;8239:52;-1:-1:-1;;8310:23:165;;;8380:2;8365:18;;8352:32;;-1:-1:-1;8431:2:165;8416:18;;;8403:32;;8126:315;-1:-1:-1;8126:315:165:o;8638:182::-;8695:6;8748:2;8736:9;8727:7;8723:23;8719:32;8716:52;;;8764:1;8761;8754:12;8716:52;8787:27;8804:9;8787:27;:::i;8825:127::-;8886:10;8881:3;8877:20;8874:1;8867:31;8917:4;8914:1;8907:15;8941:4;8938:1;8931:15;8957:168;9030:9;;;9061;;9078:15;;;9072:22;;9058:37;9048:71;;9099:18;;:::i;9130:128::-;9197:9;;;9218:11;;;9215:37;;;9232:18;;:::i;10299:944::-;10382:12;;-1:-1:-1;;;;;1337:31:165;1325:44;;10449:4;10442:5;10438:16;10432:23;10425:4;10420:3;10416:14;10409:47;10505:4;10498:5;10494:16;10488:23;10481:4;10476:3;10472:14;10465:47;10561:4;10554:5;10550:16;10544:23;10537:4;10532:3;10528:14;10521:47;10617:4;10610:5;10606:16;10600:23;10593:4;10588:3;10584:14;10577:47;10673:4;10666:5;10662:16;10656:23;10649:4;10644:3;10640:14;10633:47;10729:4;10722:5;10718:16;10712:23;10705:4;10700:3;10696:14;10689:47;10782:4;10775:5;10771:16;10765:23;10797:48;10839:4;10834:3;10830:14;10816:12;-1:-1:-1;;;;;1337:31:165;1325:44;;1271:104;10797:48;-1:-1:-1;10864:6:165;10907:14;;;10901:21;-1:-1:-1;;;;;1337:31:165;;10966:12;;;1325:44;-1:-1:-1;;10998:6:165;11041:14;;;11035:21;10163:12;;11104;;;10151:25;10225:4;10214:16;;10208:23;10192:14;;;10185:47;10281:4;10270:16;;10264:23;10248:14;;;10241:47;-1:-1:-1;;11168:6:165;11157:18;;11151:25;11142:6;11133:16;;11126:51;11228:6;11217:18;11211:25;11202:6;11193:16;;;11186:51;10299:944::o;11248:256::-;11438:3;11423:19;;11451:47;11427:9;11480:6;11451:47;:::i;11509:354::-;11727:3;11712:19;;11740:47;11716:9;11769:6;11740:47;:::i;:::-;-1:-1:-1;;;;;11824:32:165;;;;11818:3;11803:19;;;;11796:61;11509:354;;-1:-1:-1;11509:354:165:o;12157:184::-;12227:6;12280:2;12268:9;12259:7;12255:23;12251:32;12248:52;;;12296:1;12293;12286:12;12248:52;-1:-1:-1;12319:16:165;;12157:184;-1:-1:-1;12157:184:165:o;12346:146::-;12433:13;;12455:31;12433:13;12455:31;:::i;12497:525::-;12559:5;12607:4;12595:9;12590:3;12586:19;12582:30;12579:50;;;12625:1;12622;12615:12;12579:50;12658:2;12652:9;12700:4;12692:6;12688:17;12771:6;12759:10;12756:22;12735:18;12723:10;12720:34;12717:62;12714:88;;;12782:18;;:::i;:::-;12822:10;12818:2;12811:22;;12851:6;12842:15;;12887:9;12881:16;12873:6;12866:32;12952:2;12941:9;12937:18;12931:25;12926:2;12918:6;12914:15;12907:50;13011:2;13000:9;12996:18;12990:25;12985:2;12977:6;12973:15;12966:50;;12497:525;;;;:::o;13027:1117::-;13125:6;13178:3;13166:9;13157:7;13153:23;13149:33;13146:53;;;13195:1;13192;13185:12;13146:53;13221:17;;:::i;:::-;13261:48;13299:9;13261:48;:::i;:::-;13254:5;13247:63;13363:2;13352:9;13348:18;13342:25;13337:2;13330:5;13326:14;13319:49;13421:2;13410:9;13406:18;13400:25;13395:2;13388:5;13384:14;13377:49;13479:2;13468:9;13464:18;13458:25;13453:2;13446:5;13442:14;13435:49;13538:3;13527:9;13523:19;13517:26;13511:3;13504:5;13500:15;13493:51;13598:3;13587:9;13583:19;13577:26;13571:3;13564:5;13560:15;13553:51;13658:3;13647:9;13643:19;13637:26;13631:3;13624:5;13620:15;13613:51;13697:58;13750:3;13739:9;13735:19;13697:58;:::i;:::-;13691:3;13684:5;13680:15;13673:83;13775:3;13810:57;13863:2;13852:9;13848:18;13810:57;:::i;:::-;13794:14;;;13787:81;13887:3;13922:62;13976:7;13956:18;;;13922:62;:::i;:::-;13906:14;;;13899:86;14042:6;14027:22;;14021:29;14012:6;14001:18;;13994:57;14108:3;14093:19;;;14087:26;14078:6;14067:18;;14060:54;-1:-1:-1;13910:5:165;13027:1117;-1:-1:-1;13027:1117:165:o;14733:277::-;14800:6;14853:2;14841:9;14832:7;14828:23;14824:32;14821:52;;;14869:1;14866;14859:12;14821:52;14901:9;14895:16;14954:5;14947:13;14940:21;14933:5;14930:32;14920:60;;14976:1;14973;14966:12;15015:220;15164:2;15153:9;15146:21;15127:4;15184:45;15225:2;15214:9;15210:18;15202:6;15184:45;:::i;15240:317::-;-1:-1:-1;;;;;15417:32:165;;15399:51;;15486:2;15481;15466:18;;15459:30;;;-1:-1:-1;;15506:45:165;;15532:18;;15524:6;15506:45;:::i;15871:380::-;15950:1;15946:12;;;;15993;;;16014:61;;16068:4;16060:6;16056:17;16046:27;;16014:61;16121:2;16113:6;16110:14;16090:18;16087:38;16084:161;;16167:10;16162:3;16158:20;16155:1;16148:31;16202:4;16199:1;16192:15;16230:4;16227:1;16220:15;16084:161;;15871:380;;;:::o;16256:125::-;16321:9;;;16342:10;;;16339:36;;;16355:18;;:::i;16386:136::-;16421:3;-1:-1:-1;;;16442:22:165;;16439:48;;16467:18;;:::i;:::-;-1:-1:-1;16507:1:165;16503:13;;16386:136::o;16806:384::-;-1:-1:-1;;;;;;16991:33:165;;16979:46;;17048:13;;16961:3;;17070:74;17048:13;17133:1;17124:11;;17117:4;17105:17;;17070:74;:::i;:::-;17164:16;;;;17182:1;17160:24;;16806:384;-1:-1:-1;;;16806:384:165:o;17195:287::-;17324:3;17362:6;17356:13;17378:66;17437:6;17432:3;17425:4;17417:6;17413:17;17378:66;:::i;:::-;17460:16;;;;;17195:287;-1:-1:-1;;17195:287:165:o;17830:127::-;17891:10;17886:3;17882:20;17879:1;17872:31;17922:4;17919:1;17912:15;17946:4;17943:1;17936:15;17962:112;17994:1;18020;18010:35;;18025:18;;:::i;:::-;-1:-1:-1;18059:9:165;;17962:112::o;19957:200::-;20023:9;;;19996:4;20051:9;;20079:10;;20091:12;;;20075:29;20114:12;;;20106:21;;20072:56;20069:82;;;20131:18;;:::i;:::-;20069:82;19957:200;;;;:::o;20162:446::-;20412:2;20401:9;20394:21;20451:1;20446:2;20435:9;20431:18;20424:29;-1:-1:-1;;;20484:2:165;20473:9;20469:18;20462:35;20535:3;20528:4;20517:9;20513:20;20506:33;20375:4;20556:46;20597:3;20586:9;20582:19;20574:6;20556:46;:::i;20613:291::-;20790:2;20779:9;20772:21;20753:4;20810:45;20851:2;20840:9;20836:18;20828:6;20810:45;:::i;:::-;20802:53;;20891:6;20886:2;20875:9;20871:18;20864:34;20613:291;;;;;:::o;21606:427::-;21831:25;;;21887:2;21872:18;;21865:34;;;;-1:-1:-1;;;;;21935:32:165;21930:2;21915:18;;21908:60;22011:14;22004:22;21999:2;21984:18;;21977:50;21818:3;21803:19;;21606:427::o;22038:729::-;22136:6;22189:2;22177:9;22168:7;22164:23;22160:32;22157:52;;;22205:1;22202;22195:12;22157:52;22238:2;22232:9;22280:2;22272:6;22268:15;22349:6;22337:10;22334:22;22313:18;22301:10;22298:34;22295:62;22292:88;;;22360:18;;:::i;:::-;22396:2;22389:22;22433:16;;-1:-1:-1;;;;;22478:46:165;;22468:57;;22458:85;;22539:1;22536;22529:12;22458:85;22552:21;;22618:2;22603:18;;22597:25;22664:2;22653:23;;;22641:36;;22631:64;;22691:1;22688;22681:12;22631:64;22723:2;22711:15;;22704:32;22715:6;22038:729;-1:-1:-1;;;22038:729:165:o;22772:1098::-;22868:6;22921:3;22909:9;22900:7;22896:23;22892:33;22889:53;;;22938:1;22935;22928:12;22889:53;22964:22;;:::i;:::-;23015:9;23009:16;23002:5;22995:31;23079:2;23068:9;23064:18;23058:25;23053:2;23046:5;23042:14;23035:49;23137:2;23126:9;23122:18;23116:25;23111:2;23104:5;23100:14;23093:49;23195:2;23184:9;23180:18;23174:25;23169:2;23162:5;23158:14;23151:49;23254:3;23243:9;23239:19;23233:26;23227:3;23220:5;23216:15;23209:51;23314:3;23303:9;23299:19;23293:26;23287:3;23280:5;23276:15;23269:51;23374:3;23363:9;23359:19;23353:26;23347:3;23340:5;23336:15;23329:51;23434:3;23423:9;23419:19;23413:26;23407:3;23400:5;23396:15;23389:51;23459:3;23515:2;23504:9;23500:18;23494:25;23489:2;23482:5;23478:14;23471:49;;23539:3;23595:2;23584:9;23580:18;23574:25;23569:2;23562:5;23558:14;23551:49;;23619:3;23675:2;23664:9;23660:18;23654:25;23649:2;23642:5;23638:14;23631:49;;23699:3;23755:2;23744:9;23740:18;23734:25;23729:2;23722:5;23718:14;23711:49;;23779:3;23835:2;23824:9;23820:18;23814:25;23809:2;23802:5;23798:14;23791:49;;23859:5;23849:15;;;22772:1098;;;;:::o;23875:499::-;24128:25;;;24184:2;24169:18;;24162:34;;;;24227:2;24212:18;;24205:34;;;;-1:-1:-1;;;;;24275:32:165;24270:2;24255:18;;24248:60;24352:14;24345:22;24339:3;24324:19;;24317:51;24115:3;24100:19;;23875:499::o;24379:245::-;24458:6;24466;24519:2;24507:9;24498:7;24494:23;24490:32;24487:52;;;24535:1;24532;24525:12;24487:52;-1:-1:-1;;24558:16:165;;24614:2;24599:18;;;24593:25;24558:16;;24593:25;;-1:-1:-1;24379:245:165:o;26978:135::-;27017:3;27038:17;;;27035:43;;27058:18;;:::i;:::-;-1:-1:-1;27105:1:165;27094:13;;26978:135::o;27118:216::-;27182:9;;;27210:11;;;27157:3;27240:9;;27268:10;;27264:19;;27293:10;;27285:19;;27261:44;27258:70;;;27308:18;;:::i;:::-;27258:70;;27118:216;;;;:::o;27339:193::-;27378:1;27404;27394:35;;27409:18;;:::i;:::-;-1:-1:-1;;;27445:18:165;;-1:-1:-1;;27465:13:165;;27441:38;27438:64;;;27482:18;;:::i;:::-;-1:-1:-1;27516:10:165;;27339:193::o",
    linkReferences: {},
  },
  methodIdentifiers: {
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
    "test_sandwich_long_trade(uint256,uint256)": "aa739f8c",
    "test_sandwich_lp(uint8)": "e6ee4899",
    "test_sandwich_short_trade(uint256,uint256,uint256,uint256)": "021db0e7",
    "test_sandwich_trades(uint8,uint64)": "2ce672a9",
    "whaleTransfer(address,address,address)": "10716760",
    "whaleTransfer(address,address,uint256,address)": "3e5e0d26",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"FixedPointMath_InvalidExponent","type":"error"},{"inputs":[],"name":"FixedPointMath_InvalidInput","type":"error"},{"inputs":[],"name":"WhaleBalanceExceeded","type":"error"},{"inputs":[],"name":"WhaleIsContract","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"version","type":"uint256"},{"indexed":false,"internalType":"address","name":"hyperdrive","type":"address"},{"components":[{"internalType":"contract IERC20","name":"baseToken","type":"address"},{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"minimumShareReserves","type":"uint256"},{"internalType":"uint256","name":"minimumTransactionAmount","type":"uint256"},{"internalType":"uint256","name":"positionDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"timeStretch","type":"uint256"},{"internalType":"address","name":"governance","type":"address"},{"internalType":"address","name":"feeCollector","type":"address"},{"components":[{"internalType":"uint256","name":"curve","type":"uint256"},{"internalType":"uint256","name":"flat","type":"uint256"},{"internalType":"uint256","name":"governance","type":"uint256"}],"internalType":"struct IHyperdrive.Fees","name":"fees","type":"tuple"},{"internalType":"uint256","name":"oracleSize","type":"uint256"},{"internalType":"uint256","name":"updateGap","type":"uint256"}],"indexed":false,"internalType":"struct IHyperdrive.PoolConfig","name":"config","type":"tuple"},{"indexed":false,"internalType":"address","name":"linkerFactory","type":"address"},{"indexed":false,"internalType":"bytes32","name":"linkerCodeHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32[]","name":"extraData","type":"bytes32[]"}],"name":"Deployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"apr","type":"uint256"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"RedeemWithdrawalShares","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"log_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"val","type":"uint256[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int256[]","name":"val","type":"int256[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"val","type":"address[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"","type":"bytes"}],"name":"log_bytes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"","type":"bytes32"}],"name":"log_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int256","name":"","type":"int256"}],"name":"log_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"address","name":"val","type":"address"}],"name":"log_named_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256[]","name":"val","type":"uint256[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256[]","name":"val","type":"int256[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"address[]","name":"val","type":"address[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"bytes","name":"val","type":"bytes"}],"name":"log_named_bytes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"bytes32","name":"val","type":"bytes32"}],"name":"log_named_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256","name":"val","type":"int256"},{"indexed":false,"internalType":"uint256","name":"decimals","type":"uint256"}],"name":"log_named_decimal_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"val","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"decimals","type":"uint256"}],"name":"log_named_decimal_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256","name":"val","type":"int256"}],"name":"log_named_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"string","name":"val","type":"string"}],"name":"log_named_string","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"val","type":"uint256"}],"name":"log_named_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"log_string","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"log_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"","type":"bytes"}],"name":"logs","type":"event"},{"inputs":[],"name":"IS_TEST","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"int256","name":"_delta","type":"int256"},{"internalType":"uint256","name":"_targetValue","type":"uint256"}],"name":"assertWithDelta","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"createUser","outputs":[{"internalType":"address","name":"_user","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"excludeArtifacts","outputs":[{"internalType":"string[]","name":"excludedArtifacts_","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"excludeContracts","outputs":[{"internalType":"address[]","name":"excludedContracts_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"excludeSenders","outputs":[{"internalType":"address[]","name":"excludedSenders_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"failed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"targetArtifactSelectors","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct StdInvariant.FuzzSelector[]","name":"targetedArtifactSelectors_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetArtifacts","outputs":[{"internalType":"string[]","name":"targetedArtifacts_","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetContracts","outputs":[{"internalType":"address[]","name":"targetedContracts_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetSelectors","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct StdInvariant.FuzzSelector[]","name":"targetedSelectors_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetSenders","outputs":[{"internalType":"address[]","name":"targetedSenders_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"apr","type":"uint256"},{"internalType":"uint256","name":"tradeSize","type":"uint256"}],"name":"test_sandwich_long_trade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_apr","type":"uint8"}],"name":"test_sandwich_lp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fixedRate","type":"uint256"},{"internalType":"uint256","name":"contribution","type":"uint256"},{"internalType":"uint256","name":"tradeAmount","type":"uint256"},{"internalType":"uint256","name":"sandwichAmount","type":"uint256"}],"name":"test_sandwich_short_trade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_apr","type":"uint8"},{"internalType":"uint64","name":"_timeDelta","type":"uint64"}],"name":"test_sandwich_trades","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whale","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"whaleTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whale","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"whaleTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"errors":{"FixedPointMath_InvalidExponent()":[{"notice":"###################### ### FixedPointMath ### ######################"}]},"events":{"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])":{"notice":"Event Utils ///"}},"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"test/integrations/hyperdrive/SandwichTest.t.sol":"SandwichTest"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/DataProvider.sol":{"keccak256":"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30","license":"Apache-2.0","urls":["bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212","dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"]},"contracts/src/Hyperdrive.sol":{"keccak256":"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5","license":"Apache-2.0","urls":["bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e","dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"]},"contracts/src/HyperdriveBase.sol":{"keccak256":"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95","license":"Apache-2.0","urls":["bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e","dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"]},"contracts/src/HyperdriveDataProvider.sol":{"keccak256":"0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d","license":"Apache-2.0","urls":["bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5","dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA"]},"contracts/src/HyperdriveLP.sol":{"keccak256":"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a","license":"Apache-2.0","urls":["bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e","dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"]},"contracts/src/HyperdriveLong.sol":{"keccak256":"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188","license":"Apache-2.0","urls":["bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f","dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"]},"contracts/src/HyperdriveShort.sol":{"keccak256":"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa","license":"Apache-2.0","urls":["bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8","dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"]},"contracts/src/HyperdriveStorage.sol":{"keccak256":"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc","license":"Apache-2.0","urls":["bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a","dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"]},"contracts/src/HyperdriveTWAP.sol":{"keccak256":"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b","license":"Apache-2.0","urls":["bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc","dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"]},"contracts/src/factory/HyperdriveFactory.sol":{"keccak256":"0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde","license":"Apache-2.0","urls":["bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1","dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2"]},"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IForwarderFactory.sol":{"keccak256":"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af","license":"Apache-2.0","urls":["bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3","dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveDeployer.sol":{"keccak256":"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0","license":"Apache-2.0","urls":["bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587","dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"contracts/src/libraries/AssetId.sol":{"keccak256":"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384","license":"Apache-2.0","urls":["bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806","dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"]},"contracts/src/libraries/FixedPointMath.sol":{"keccak256":"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd","license":"Apache-2.0","urls":["bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b","dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"]},"contracts/src/libraries/HyperdriveMath.sol":{"keccak256":"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2","license":"Apache-2.0","urls":["bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75","dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"]},"contracts/src/libraries/SafeCast.sol":{"keccak256":"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f","license":"Apache-2.0","urls":["bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5","dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"]},"contracts/src/libraries/YieldSpaceMath.sol":{"keccak256":"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04","license":"Apache-2.0","urls":["bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef","dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"]},"contracts/src/token/ERC20Forwarder.sol":{"keccak256":"0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158","license":"Apache-2.0","urls":["bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034","dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p"]},"contracts/src/token/ForwarderFactory.sol":{"keccak256":"0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b","license":"Apache-2.0","urls":["bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e","dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ"]},"contracts/src/token/MultiToken.sol":{"keccak256":"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19","license":"Apache-2.0","urls":["bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98","dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"]},"contracts/src/token/MultiTokenDataProvider.sol":{"keccak256":"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f","license":"Apache-2.0","urls":["bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef","dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"]},"contracts/src/token/MultiTokenStorage.sol":{"keccak256":"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8","license":"Apache-2.0","urls":["bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6","dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"]},"contracts/test/ERC20Mintable.sol":{"keccak256":"0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389","license":"Apache-2.0","urls":["bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65","dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui"]},"lib/forge-std/lib/ds-test/src/test.sol":{"keccak256":"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b","license":"GPL-3.0-or-later","urls":["bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240","dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"]},"lib/forge-std/src/Base.sol":{"keccak256":"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c","license":"MIT","urls":["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224","dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"]},"lib/forge-std/src/StdAssertions.sol":{"keccak256":"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60","license":"MIT","urls":["bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b","dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"]},"lib/forge-std/src/StdChains.sol":{"keccak256":"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d","license":"MIT","urls":["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4","dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"]},"lib/forge-std/src/StdCheats.sol":{"keccak256":"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5","license":"MIT","urls":["bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a","dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"]},"lib/forge-std/src/StdError.sol":{"keccak256":"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77","license":"MIT","urls":["bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6","dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"]},"lib/forge-std/src/StdInvariant.sol":{"keccak256":"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1","license":"MIT","urls":["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c","dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"]},"lib/forge-std/src/StdJson.sol":{"keccak256":"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b","license":"MIT","urls":["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c","dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"]},"lib/forge-std/src/StdMath.sol":{"keccak256":"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2","license":"MIT","urls":["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92","dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"]},"lib/forge-std/src/StdStorage.sol":{"keccak256":"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d","license":"MIT","urls":["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26","dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"]},"lib/forge-std/src/StdStyle.sol":{"keccak256":"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d","license":"MIT","urls":["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8","dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"]},"lib/forge-std/src/StdUtils.sol":{"keccak256":"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1","license":"MIT","urls":["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140","dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"]},"lib/forge-std/src/Test.sol":{"keccak256":"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0","license":"MIT","urls":["bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765","dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4","license":"MIT","urls":["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241","dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"]},"lib/forge-std/src/console.sol":{"keccak256":"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba","license":"MIT","urls":["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70","dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"]},"lib/forge-std/src/console2.sol":{"keccak256":"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea","license":"MIT","urls":["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973","dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"]},"lib/forge-std/src/interfaces/IMulticall3.sol":{"keccak256":"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a","license":"MIT","urls":["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0","dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"]},"lib/forge-std/src/safeconsole.sol":{"keccak256":"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381","license":"MIT","urls":["bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae","dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"]},"lib/openzeppelin-contracts/contracts/access/AccessControl.sol":{"keccak256":"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c","license":"MIT","urls":["bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88","dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"]},"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":{"keccak256":"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247","license":"MIT","urls":["bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b","dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"]},"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol":{"keccak256":"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57","license":"MIT","urls":["bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a","dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"]},"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":{"keccak256":"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676","license":"MIT","urls":["bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276","dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"]},"lib/openzeppelin-contracts/contracts/security/Pausable.sol":{"keccak256":"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773","license":"MIT","urls":["bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004","dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B"]},"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b","license":"MIT","urls":["bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df","dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":{"keccak256":"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b","license":"MIT","urls":["bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f","dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol":{"keccak256":"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a","license":"MIT","urls":["bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790","dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":{"keccak256":"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec","license":"MIT","urls":["bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3","dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol":{"keccak256":"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa","license":"MIT","urls":["bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b","dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f","license":"MIT","urls":["bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf","dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT","urls":["bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d","dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT","urls":["bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f","dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858","license":"MIT","urls":["bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4","dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT","urls":["bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7","dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"]},"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol":{"keccak256":"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598","license":"MIT","urls":["bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72","dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"]},"lib/solmate/src/auth/Auth.sol":{"keccak256":"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c","license":"AGPL-3.0-only","urls":["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac","dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"]},"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol":{"keccak256":"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3","license":"AGPL-3.0-only","urls":["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef","dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"]},"lib/solmate/src/tokens/ERC20.sol":{"keccak256":"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10","license":"AGPL-3.0-only","urls":["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35","dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"]},"lib/solmate/src/utils/ReentrancyGuard.sol":{"keccak256":"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01","license":"AGPL-3.0-only","urls":["bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800","dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"]},"test/integrations/hyperdrive/SandwichTest.t.sol":{"keccak256":"0x3b19182fec12a81c92c14ca00a18bad18d2fcdb5bc6905efdcdd27ac6cfc95f9","license":"Apache-2.0","urls":["bzz-raw://c21e30e2c2bb92bff21cbc12ffb88d12ef5c633f7dab084d955cad32a79dbe2f","dweb:/ipfs/QmPdThAXyngrpvDDcPvYUDCRSFZW2xY98Hxdt6EzX1kUPn"]},"test/mocks/MockHyperdrive.sol":{"keccak256":"0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465","license":"Apache-2.0","urls":["bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378","dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn"]},"test/utils/BaseTest.sol":{"keccak256":"0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6","license":"Apache-2.0","urls":["bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd","dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD"]},"test/utils/Constants.sol":{"keccak256":"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b","license":"Apache-2.0","urls":["bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0","dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1"]},"test/utils/HyperdriveTest.sol":{"keccak256":"0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16","license":"Apache-2.0","urls":["bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b","dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd"]},"test/utils/HyperdriveUtils.sol":{"keccak256":"0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c","license":"Apache-2.0","urls":["bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82","dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN"]},"test/utils/Lib.sol":{"keccak256":"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2","license":"Apache-2.0","urls":["bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171","dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [],
          type: "error",
          name: "FixedPointMath_InvalidExponent",
        },
        {
          inputs: [],
          type: "error",
          name: "FixedPointMath_InvalidInput",
        },
        {
          inputs: [],
          type: "error",
          name: "WhaleBalanceExceeded",
        },
        {
          inputs: [],
          type: "error",
          name: "WhaleIsContract",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "lpAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "AddLiquidity",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "CloseLong",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "CloseShort",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "version",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "address",
              name: "hyperdrive",
              type: "address",
              indexed: false,
            },
            {
              internalType: "struct IHyperdrive.PoolConfig",
              name: "config",
              type: "tuple",
              components: [
                {
                  internalType: "contract IERC20",
                  name: "baseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "initialSharePrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "minimumShareReserves",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "minimumTransactionAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "positionDuration",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "checkpointDuration",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timeStretch",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "governance",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "feeCollector",
                  type: "address",
                },
                {
                  internalType: "struct IHyperdrive.Fees",
                  name: "fees",
                  type: "tuple",
                  components: [
                    {
                      internalType: "uint256",
                      name: "curve",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "flat",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "governance",
                      type: "uint256",
                    },
                  ],
                },
                {
                  internalType: "uint256",
                  name: "oracleSize",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updateGap",
                  type: "uint256",
                },
              ],
              indexed: false,
            },
            {
              internalType: "address",
              name: "linkerFactory",
              type: "address",
              indexed: false,
            },
            {
              internalType: "bytes32",
              name: "linkerCodeHash",
              type: "bytes32",
              indexed: false,
            },
            {
              internalType: "bytes32[]",
              name: "extraData",
              type: "bytes32[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "Deployed",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "lpAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "apr",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "Initialize",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "OpenLong",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "OpenShort",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "withdrawalShareAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "RedeemWithdrawalShares",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "lpAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "withdrawalShareAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "RemoveLiquidity",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
              indexed: false,
            },
          ],
          type: "event",
          name: "log",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_address",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "val",
              type: "uint256[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_array",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "int256[]",
              name: "val",
              type: "int256[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_array",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "val",
              type: "address[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_array",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_bytes",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_bytes32",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "int256",
              name: "",
              type: "int256",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_int",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "address",
              name: "val",
              type: "address",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_address",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "uint256[]",
              name: "val",
              type: "uint256[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_array",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "int256[]",
              name: "val",
              type: "int256[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_array",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "address[]",
              name: "val",
              type: "address[]",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_array",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "bytes",
              name: "val",
              type: "bytes",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_bytes",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "bytes32",
              name: "val",
              type: "bytes32",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_bytes32",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "int256",
              name: "val",
              type: "int256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "decimals",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_decimal_int",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "val",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "decimals",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_decimal_uint",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "int256",
              name: "val",
              type: "int256",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_int",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "string",
              name: "val",
              type: "string",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_string",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "key",
              type: "string",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "val",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_named_uint",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_string",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "log_uint",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
              indexed: false,
            },
          ],
          type: "event",
          name: "logs",
          anonymous: false,
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "IS_TEST",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_value",
              type: "uint256",
            },
            {
              internalType: "int256",
              name: "_delta",
              type: "int256",
            },
            {
              internalType: "uint256",
              name: "_targetValue",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "assertWithDelta",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "createUser",
          outputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "excludeArtifacts",
          outputs: [
            {
              internalType: "string[]",
              name: "excludedArtifacts_",
              type: "string[]",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "excludeContracts",
          outputs: [
            {
              internalType: "address[]",
              name: "excludedContracts_",
              type: "address[]",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "excludeSenders",
          outputs: [
            {
              internalType: "address[]",
              name: "excludedSenders_",
              type: "address[]",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "failed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "setUp",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "targetArtifactSelectors",
          outputs: [
            {
              internalType: "struct StdInvariant.FuzzSelector[]",
              name: "targetedArtifactSelectors_",
              type: "tuple[]",
              components: [
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "bytes4[]",
                  name: "selectors",
                  type: "bytes4[]",
                },
              ],
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "targetArtifacts",
          outputs: [
            {
              internalType: "string[]",
              name: "targetedArtifacts_",
              type: "string[]",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "targetContracts",
          outputs: [
            {
              internalType: "address[]",
              name: "targetedContracts_",
              type: "address[]",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "targetSelectors",
          outputs: [
            {
              internalType: "struct StdInvariant.FuzzSelector[]",
              name: "targetedSelectors_",
              type: "tuple[]",
              components: [
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "bytes4[]",
                  name: "selectors",
                  type: "bytes4[]",
                },
              ],
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "targetSenders",
          outputs: [
            {
              internalType: "address[]",
              name: "targetedSenders_",
              type: "address[]",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "apr",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tradeSize",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_sandwich_long_trade",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_apr",
              type: "uint8",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_sandwich_lp",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "fixedRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "contribution",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tradeAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sandwichAmount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_sandwich_short_trade",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_apr",
              type: "uint8",
            },
            {
              internalType: "uint64",
              name: "_timeDelta",
              type: "uint64",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_sandwich_trades",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "whale",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "token",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "whaleTransfer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "whale",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "whaleTransfer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {},
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {},
        version: 1,
      },
    },
    settings: {
      remappings: [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/",
      ],
      optimizer: {
        enabled: true,
        runs: 200,
      },
      metadata: {
        bytecodeHash: "ipfs",
      },
      compilationTarget: {
        "test/integrations/hyperdrive/SandwichTest.t.sol": "SandwichTest",
      },
      libraries: {},
    },
    sources: {
      "contracts/src/DataProvider.sol": {
        keccak256:
          "0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30",
        urls: [
          "bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212",
          "dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/Hyperdrive.sol": {
        keccak256:
          "0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5",
        urls: [
          "bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e",
          "dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveBase.sol": {
        keccak256:
          "0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95",
        urls: [
          "bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e",
          "dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveDataProvider.sol": {
        keccak256:
          "0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d",
        urls: [
          "bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5",
          "dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveLP.sol": {
        keccak256:
          "0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a",
        urls: [
          "bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e",
          "dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveLong.sol": {
        keccak256:
          "0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188",
        urls: [
          "bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f",
          "dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveShort.sol": {
        keccak256:
          "0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa",
        urls: [
          "bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8",
          "dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveStorage.sol": {
        keccak256:
          "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        urls: [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveTWAP.sol": {
        keccak256:
          "0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b",
        urls: [
          "bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc",
          "dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/factory/HyperdriveFactory.sol": {
        keccak256:
          "0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde",
        urls: [
          "bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1",
          "dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IERC20.sol": {
        keccak256:
          "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        urls: [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w",
        ],
        license: "MIT",
      },
      "contracts/src/interfaces/IForwarderFactory.sol": {
        keccak256:
          "0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af",
        urls: [
          "bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3",
          "dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        keccak256:
          "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        urls: [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveDeployer.sol": {
        keccak256:
          "0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0",
        urls: [
          "bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587",
          "dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        keccak256:
          "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        urls: [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        keccak256:
          "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        urls: [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        keccak256:
          "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        urls: [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        keccak256:
          "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        urls: [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        keccak256:
          "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        urls: [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        keccak256:
          "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        urls: [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/AssetId.sol": {
        keccak256:
          "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        urls: [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        keccak256:
          "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        urls: [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        keccak256:
          "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        urls: [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/SafeCast.sol": {
        keccak256:
          "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        urls: [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        keccak256:
          "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        urls: [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/ERC20Forwarder.sol": {
        keccak256:
          "0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158",
        urls: [
          "bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034",
          "dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/ForwarderFactory.sol": {
        keccak256:
          "0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b",
        urls: [
          "bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e",
          "dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiToken.sol": {
        keccak256:
          "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        urls: [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiTokenDataProvider.sol": {
        keccak256:
          "0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f",
        urls: [
          "bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef",
          "dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        keccak256:
          "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        urls: [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj",
        ],
        license: "Apache-2.0",
      },
      "contracts/test/ERC20Mintable.sol": {
        keccak256:
          "0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389",
        urls: [
          "bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65",
          "dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui",
        ],
        license: "Apache-2.0",
      },
      "lib/forge-std/lib/ds-test/src/test.sol": {
        keccak256:
          "0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b",
        urls: [
          "bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240",
          "dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k",
        ],
        license: "GPL-3.0-or-later",
      },
      "lib/forge-std/src/Base.sol": {
        keccak256:
          "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c",
        urls: [
          "bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224",
          "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdAssertions.sol": {
        keccak256:
          "0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60",
        urls: [
          "bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b",
          "dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdChains.sol": {
        keccak256:
          "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
        urls: [
          "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
          "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdCheats.sol": {
        keccak256:
          "0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5",
        urls: [
          "bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a",
          "dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdError.sol": {
        keccak256:
          "0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77",
        urls: [
          "bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6",
          "dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdInvariant.sol": {
        keccak256:
          "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1",
        urls: [
          "bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c",
          "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdJson.sol": {
        keccak256:
          "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b",
        urls: [
          "bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c",
          "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdMath.sol": {
        keccak256:
          "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
        urls: [
          "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
          "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdStorage.sol": {
        keccak256:
          "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d",
        urls: [
          "bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26",
          "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdStyle.sol": {
        keccak256:
          "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
        urls: [
          "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
          "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/StdUtils.sol": {
        keccak256:
          "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1",
        urls: [
          "bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140",
          "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/Test.sol": {
        keccak256:
          "0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0",
        urls: [
          "bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765",
          "dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/Vm.sol": {
        keccak256:
          "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        urls: [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/console.sol": {
        keccak256:
          "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
        urls: [
          "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
          "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/console2.sol": {
        keccak256:
          "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea",
        urls: [
          "bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973",
          "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/interfaces/IMulticall3.sol": {
        keccak256:
          "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
        urls: [
          "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
          "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2",
        ],
        license: "MIT",
      },
      "lib/forge-std/src/safeconsole.sol": {
        keccak256:
          "0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381",
        urls: [
          "bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae",
          "dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
        keccak256:
          "0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c",
        urls: [
          "bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88",
          "dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":
        {
          keccak256:
            "0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247",
          urls: [
            "bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b",
            "dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        keccak256:
          "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
        urls: [
          "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
          "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":
        {
          keccak256:
            "0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676",
          urls: [
            "bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276",
            "dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/security/Pausable.sol": {
        keccak256:
          "0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773",
        urls: [
          "bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004",
          "dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        keccak256:
          "0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b",
        urls: [
          "bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df",
          "dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        keccak256:
          "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        urls: [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":
        {
          keccak256:
            "0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b",
          urls: [
            "bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f",
            "dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol":
        {
          keccak256:
            "0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a",
          urls: [
            "bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790",
            "dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":
        {
          keccak256:
            "0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca",
          urls: [
            "bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd",
            "dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":
        {
          keccak256:
            "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
          urls: [
            "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
            "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":
        {
          keccak256:
            "0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec",
          urls: [
            "bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3",
            "dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol":
        {
          keccak256:
            "0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa",
          urls: [
            "bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b",
            "dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        keccak256:
          "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        urls: [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        keccak256:
          "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        urls: [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        keccak256:
          "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        urls: [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        keccak256:
          "0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f",
        urls: [
          "bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf",
          "dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        keccak256:
          "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        urls: [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        keccak256:
          "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        urls: [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        keccak256:
          "0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858",
        urls: [
          "bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4",
          "dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        keccak256:
          "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        urls: [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        keccak256:
          "0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598",
        urls: [
          "bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72",
          "dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ",
        ],
        license: "MIT",
      },
      "lib/solmate/src/auth/Auth.sol": {
        keccak256:
          "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
        urls: [
          "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
          "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W",
        ],
        license: "AGPL-3.0-only",
      },
      "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
        keccak256:
          "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
        urls: [
          "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
          "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B",
        ],
        license: "AGPL-3.0-only",
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        keccak256:
          "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        urls: [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97",
        ],
        license: "AGPL-3.0-only",
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        keccak256:
          "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        urls: [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j",
        ],
        license: "AGPL-3.0-only",
      },
      "test/integrations/hyperdrive/SandwichTest.t.sol": {
        keccak256:
          "0x3b19182fec12a81c92c14ca00a18bad18d2fcdb5bc6905efdcdd27ac6cfc95f9",
        urls: [
          "bzz-raw://c21e30e2c2bb92bff21cbc12ffb88d12ef5c633f7dab084d955cad32a79dbe2f",
          "dweb:/ipfs/QmPdThAXyngrpvDDcPvYUDCRSFZW2xY98Hxdt6EzX1kUPn",
        ],
        license: "Apache-2.0",
      },
      "test/mocks/MockHyperdrive.sol": {
        keccak256:
          "0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465",
        urls: [
          "bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378",
          "dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn",
        ],
        license: "Apache-2.0",
      },
      "test/utils/BaseTest.sol": {
        keccak256:
          "0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6",
        urls: [
          "bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd",
          "dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD",
        ],
        license: "Apache-2.0",
      },
      "test/utils/Constants.sol": {
        keccak256:
          "0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b",
        urls: [
          "bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0",
          "dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1",
        ],
        license: "Apache-2.0",
      },
      "test/utils/HyperdriveTest.sol": {
        keccak256:
          "0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16",
        urls: [
          "bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b",
          "dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd",
        ],
        license: "Apache-2.0",
      },
      "test/utils/HyperdriveUtils.sol": {
        keccak256:
          "0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c",
        urls: [
          "bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82",
          "dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN",
        ],
        license: "Apache-2.0",
      },
      "test/utils/Lib.sol": {
        keccak256:
          "0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2",
        urls: [
          "bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171",
          "dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu",
        ],
        license: "Apache-2.0",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "test/integrations/hyperdrive/SandwichTest.t.sol",
    id: 88727,
    exportedSymbols: {
      AssetId: [7731],
      FixedPointMath: [8486],
      HyperdriveTest: [120941],
      HyperdriveUtils: [122442],
      IHyperdrive: [7103],
      Lib: [123044],
      SandwichTest: [88726],
    },
    nodeType: "SourceUnit",
    src: "39:8482:126",
    nodes: [
      {
        id: 88133,
        nodeType: "PragmaDirective",
        src: "39:23:126",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 88135,
        nodeType: "ImportDirective",
        src: "64:62:126",
        nodes: [],
        absolutePath: "contracts/src/libraries/AssetId.sol",
        file: "contracts/src/libraries/AssetId.sol",
        nameLocation: "-1:-1:-1",
        scope: 88727,
        sourceUnit: 7732,
        symbolAliases: [
          {
            foreign: {
              id: 88134,
              name: "AssetId",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7731,
              src: "73:7:126",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 88137,
        nodeType: "ImportDirective",
        src: "127:76:126",
        nodes: [],
        absolutePath: "contracts/src/libraries/FixedPointMath.sol",
        file: "contracts/src/libraries/FixedPointMath.sol",
        nameLocation: "-1:-1:-1",
        scope: 88727,
        sourceUnit: 8487,
        symbolAliases: [
          {
            foreign: {
              id: 88136,
              name: "FixedPointMath",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 8486,
              src: "136:14:126",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 88141,
        nodeType: "ImportDirective",
        src: "204:94:126",
        nodes: [],
        absolutePath: "test/utils/HyperdriveTest.sol",
        file: "../../utils/HyperdriveTest.sol",
        nameLocation: "-1:-1:-1",
        scope: 88727,
        sourceUnit: 120942,
        symbolAliases: [
          {
            foreign: {
              id: 88138,
              name: "HyperdriveTest",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 120941,
              src: "213:14:126",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 88139,
              name: "HyperdriveUtils",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 122442,
              src: "229:15:126",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 88140,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "246:11:126",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 88143,
        nodeType: "ImportDirective",
        src: "299:42:126",
        nodes: [],
        absolutePath: "test/utils/Lib.sol",
        file: "../../utils/Lib.sol",
        nameLocation: "-1:-1:-1",
        scope: 88727,
        sourceUnit: 123045,
        symbolAliases: [
          {
            foreign: {
              id: 88142,
              name: "Lib",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 123044,
              src: "308:3:126",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 88726,
        nodeType: "ContractDefinition",
        src: "343:8177:126",
        nodes: [
          {
            id: 88148,
            nodeType: "UsingForDirective",
            src: "389:33:126",
            nodes: [],
            global: false,
            libraryName: {
              id: 88146,
              name: "FixedPointMath",
              nameLocations: ["395:14:126"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 8486,
              src: "395:14:126",
            },
            typeName: {
              id: 88147,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "414:7:126",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
          },
          {
            id: 88150,
            nodeType: "UsingForDirective",
            src: "427:28:126",
            nodes: [],
            global: false,
            libraryName: {
              id: 88149,
              name: "HyperdriveUtils",
              nameLocations: ["433:15:126"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 122442,
              src: "433:15:126",
            },
          },
          {
            id: 88152,
            nodeType: "UsingForDirective",
            src: "460:16:126",
            nodes: [],
            global: false,
            libraryName: {
              id: 88151,
              name: "Lib",
              nameLocations: ["466:3:126"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 123044,
              src: "466:3:126",
            },
          },
          {
            id: 88310,
            nodeType: "FunctionDefinition",
            src: "482:1992:126",
            nodes: [],
            body: {
              id: 88309,
              nodeType: "Block",
              src: "552:1922:126",
              nodes: [],
              statements: [
                {
                  assignments: [88160],
                  declarations: [
                    {
                      constant: false,
                      id: 88160,
                      mutability: "mutable",
                      name: "apr",
                      nameLocation: "570:3:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "562:11:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88159,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "562:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88167,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 88166,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      arguments: [
                        {
                          id: 88163,
                          name: "_apr",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88154,
                          src: "584:4:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint8",
                            typeString: "uint8",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint8",
                            typeString: "uint8",
                          },
                        ],
                        id: 88162,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "ElementaryTypeNameExpression",
                        src: "576:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_uint256_$",
                          typeString: "type(uint256)",
                        },
                        typeName: {
                          id: 88161,
                          name: "uint256",
                          nodeType: "ElementaryTypeName",
                          src: "576:7:126",
                          typeDescriptions: {},
                        },
                      },
                      id: 88164,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "typeConversion",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "576:13:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "*",
                    rightExpression: {
                      hexValue: "302e3031653138",
                      id: 88165,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "592:7:126",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_10000000000000000_by_1",
                        typeString: "int_const 10000000000000000",
                      },
                      value: "0.01e18",
                    },
                    src: "576:23:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "562:37:126",
                },
                {
                  assignments: [88169],
                  declarations: [
                    {
                      constant: false,
                      id: 88169,
                      mutability: "mutable",
                      name: "timeDelta",
                      nameLocation: "617:9:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "609:17:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88168,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "609:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88174,
                  initialValue: {
                    arguments: [
                      {
                        id: 88172,
                        name: "_timeDelta",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88156,
                        src: "637:10:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint64",
                          typeString: "uint64",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint64",
                          typeString: "uint64",
                        },
                      ],
                      id: 88171,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "629:7:126",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_uint256_$",
                        typeString: "type(uint256)",
                      },
                      typeName: {
                        id: 88170,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "629:7:126",
                        typeDescriptions: {},
                      },
                    },
                    id: 88173,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "629:19:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "609:39:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        id: 88184,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88180,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88178,
                            name: "apr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88160,
                            src: "668:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: ">=",
                          rightExpression: {
                            hexValue: "302e3031653138",
                            id: 88179,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "675:7:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_rational_10000000000000000_by_1",
                              typeString: "int_const 10000000000000000",
                            },
                            value: "0.01e18",
                          },
                          src: "668:14:126",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "&&",
                        rightExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88183,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88181,
                            name: "apr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88160,
                            src: "686:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "<=",
                          rightExpression: {
                            hexValue: "302e32653138",
                            id: 88182,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "693:6:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_rational_200000000000000000_by_1",
                              typeString: "int_const 200000000000000000",
                            },
                            value: "0.2e18",
                          },
                          src: "686:13:126",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        src: "668:31:126",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      expression: {
                        id: 88175,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "658:2:126",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 88177,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "661:6:126",
                      memberName: "assume",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27750,
                      src: "658:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure external",
                      },
                    },
                    id: 88185,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "658:42:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88186,
                  nodeType: "ExpressionStatement",
                  src: "658:42:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        id: 88197,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88193,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88190,
                            name: "timeDelta",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88169,
                            src: "720:9:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "<=",
                          rightExpression: {
                            expression: {
                              id: 88191,
                              name: "FixedPointMath",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 8486,
                              src: "733:14:126",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_type$_t_contract$_FixedPointMath_$8486_$",
                                typeString: "type(library FixedPointMath)",
                              },
                            },
                            id: 88192,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            memberLocation: "748:6:126",
                            memberName: "ONE_18",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 7745,
                            src: "733:21:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "720:34:126",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "&&",
                        rightExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88196,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88194,
                            name: "timeDelta",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88169,
                            src: "758:9:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: ">=",
                          rightExpression: {
                            hexValue: "30",
                            id: 88195,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "771:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          src: "758:14:126",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        src: "720:52:126",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      expression: {
                        id: 88187,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "710:2:126",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 88189,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "713:6:126",
                      memberName: "assume",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27750,
                      src: "710:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure external",
                      },
                    },
                    id: 88198,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "710:63:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88199,
                  nodeType: "ExpressionStatement",
                  src: "710:63:126",
                },
                {
                  id: 88212,
                  nodeType: "Block",
                  src: "837:109:126",
                  statements: [
                    {
                      assignments: [88201],
                      declarations: [
                        {
                          constant: false,
                          id: 88201,
                          mutability: "mutable",
                          name: "timeStretchApr",
                          nameLocation: "859:14:126",
                          nodeType: "VariableDeclaration",
                          scope: 88212,
                          src: "851:22:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88200,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "851:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88203,
                      initialValue: {
                        hexValue: "302e3032653138",
                        id: 88202,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "876:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_20000000000000000_by_1",
                          typeString: "int_const 20000000000000000",
                        },
                        value: "0.02e18",
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "851:32:126",
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            id: 88205,
                            name: "alice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116795,
                            src: "904:5:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88206,
                            name: "timeStretchApr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88201,
                            src: "911:14:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            hexValue: "30",
                            id: 88207,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "927:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          {
                            hexValue: "30",
                            id: 88208,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "930:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          {
                            hexValue: "30",
                            id: 88209,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "933:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                          ],
                          id: 88204,
                          name: "deploy",
                          nodeType: "Identifier",
                          overloadedDeclarations: [119093, 119116, 119178],
                          referencedDeclaration: 119116,
                          src: "897:6:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                            typeString:
                              "function (address,uint256,uint256,uint256,uint256)",
                          },
                        },
                        id: 88210,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "897:38:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$__$",
                          typeString: "tuple()",
                        },
                      },
                      id: 88211,
                      nodeType: "ExpressionStatement",
                      src: "897:38:126",
                    },
                  ],
                },
                {
                  assignments: [88214],
                  declarations: [
                    {
                      constant: false,
                      id: 88214,
                      mutability: "mutable",
                      name: "contribution",
                      nameLocation: "963:12:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "955:20:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88213,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "955:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88216,
                  initialValue: {
                    hexValue: "3530305f3030305f303030653138",
                    id: 88215,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "978:14:126",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_rational_500000000000000000000000000_by_1",
                      typeString: "int_const 500000000000000000000000000",
                    },
                    value: "500_000_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "955:37:126",
                },
                {
                  assignments: [88218],
                  declarations: [
                    {
                      constant: false,
                      id: 88218,
                      mutability: "mutable",
                      name: "lpShares",
                      nameLocation: "1010:8:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "1002:16:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88217,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1002:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88224,
                  initialValue: {
                    arguments: [
                      {
                        id: 88220,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "1032:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88221,
                        name: "apr",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88160,
                        src: "1039:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88222,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88214,
                        src: "1044:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88219,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "1021:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88223,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1021:36:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1002:55:126",
                },
                {
                  expression: {
                    id: 88232,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88225,
                      name: "contribution",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88214,
                      src: "1067:12:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "-=",
                    rightHandSide: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 88231,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        hexValue: "32",
                        id: 88226,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "1083:1:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_2_by_1",
                          typeString: "int_const 2",
                        },
                        value: "2",
                      },
                      nodeType: "BinaryOperation",
                      operator: "*",
                      rightExpression: {
                        expression: {
                          arguments: [],
                          expression: {
                            argumentTypes: [],
                            expression: {
                              id: 88227,
                              name: "hyperdrive",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 118894,
                              src: "1087:10:126",
                              typeDescriptions: {
                                typeIdentifier: "t_contract$_IHyperdrive_$7103",
                                typeString: "contract IHyperdrive",
                              },
                            },
                            id: 88228,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "1098:13:126",
                            memberName: "getPoolConfig",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 7160,
                            src: "1087:24:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                              typeString:
                                "function () view external returns (struct IHyperdrive.PoolConfig memory)",
                            },
                          },
                          id: 88229,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1087:26:126",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolConfig_$6924_memory_ptr",
                            typeString: "struct IHyperdrive.PoolConfig memory",
                          },
                        },
                        id: 88230,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1114:20:126",
                        memberName: "minimumShareReserves",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6895,
                        src: "1087:47:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1083:51:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1067:67:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88233,
                  nodeType: "ExpressionStatement",
                  src: "1067:67:126",
                },
                {
                  assignments: [88235],
                  declarations: [
                    {
                      constant: false,
                      id: 88235,
                      mutability: "mutable",
                      name: "longPaid",
                      nameLocation: "1182:8:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "1174:16:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88234,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1174:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88237,
                  initialValue: {
                    hexValue: "35305f3030305f303030653138",
                    id: 88236,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "1193:13:126",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_rational_50000000000000000000000000_by_1",
                      typeString: "int_const 50000000000000000000000000",
                    },
                    value: "50_000_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1174:32:126",
                },
                {
                  assignments: [88239, 88241],
                  declarations: [
                    {
                      constant: false,
                      id: 88239,
                      mutability: "mutable",
                      name: "longMaturityTime",
                      nameLocation: "1225:16:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "1217:24:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88238,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1217:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    {
                      constant: false,
                      id: 88241,
                      mutability: "mutable",
                      name: "longAmount",
                      nameLocation: "1251:10:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "1243:18:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88240,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1243:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88246,
                  initialValue: {
                    arguments: [
                      {
                        id: 88243,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "1287:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88244,
                        name: "longPaid",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88235,
                        src: "1304:8:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88242,
                      name: "openLong",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119771, 119799, 119829],
                      referencedDeclaration: 119799,
                      src: "1265:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88245,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1265:57:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1216:106:126",
                },
                {
                  assignments: [88248],
                  declarations: [
                    {
                      constant: false,
                      id: 88248,
                      mutability: "mutable",
                      name: "timeAdvanced",
                      nameLocation: "1418:12:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "1410:20:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88247,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1410:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88253,
                  initialValue: {
                    arguments: [
                      {
                        id: 88251,
                        name: "timeDelta",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88169,
                        src: "1459:9:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      expression: {
                        id: 88249,
                        name: "POSITION_DURATION",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118911,
                        src: "1433:17:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 88250,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1451:7:126",
                      memberName: "mulDown",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7784,
                      src: "1433:25:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        typeString:
                          "function (uint256,uint256) pure returns (uint256)",
                      },
                    },
                    id: 88252,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1433:36:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1410:59:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88255,
                        name: "timeAdvanced",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88248,
                        src: "1491:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        arguments: [
                          {
                            id: 88258,
                            name: "apr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88160,
                            src: "1512:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          ],
                          id: 88257,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "1505:6:126",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_int256_$",
                            typeString: "type(int256)",
                          },
                          typeName: {
                            id: 88256,
                            name: "int256",
                            nodeType: "ElementaryTypeName",
                            src: "1505:6:126",
                            typeDescriptions: {},
                          },
                        },
                        id: 88259,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "1505:11:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_int256",
                          typeString: "int256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_int256",
                          typeString: "int256",
                        },
                      ],
                      id: 88254,
                      name: "advanceTime",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 120191,
                      src: "1479:11:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        typeString: "function (uint256,int256)",
                      },
                    },
                    id: 88260,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1479:38:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88261,
                  nodeType: "ExpressionStatement",
                  src: "1479:38:126",
                },
                {
                  assignments: [88263],
                  declarations: [
                    {
                      constant: false,
                      id: 88263,
                      mutability: "mutable",
                      name: "shortAmount",
                      nameLocation: "1569:11:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "1561:19:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88262,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1561:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88265,
                  initialValue: {
                    hexValue: "3230305f3030305f303030653138",
                    id: 88264,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "1583:14:126",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_rational_200000000000000000000000000_by_1",
                      typeString: "int_const 200000000000000000000000000",
                    },
                    value: "200_000_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1561:36:126",
                },
                {
                  assignments: [88267, null],
                  declarations: [
                    {
                      constant: false,
                      id: 88267,
                      mutability: "mutable",
                      name: "shortMaturityTime",
                      nameLocation: "1616:17:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "1608:25:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88266,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1608:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    null,
                  ],
                  id: 88272,
                  initialValue: {
                    arguments: [
                      {
                        id: 88269,
                        name: "celine",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116799,
                        src: "1649:6:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88270,
                        name: "shortAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88263,
                        src: "1657:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88268,
                      name: "openShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120029, 120053, 120079],
                      referencedDeclaration: 120053,
                      src: "1639:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88271,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1639:30:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1607:62:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88274,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "1722:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88275,
                        name: "longMaturityTime",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88239,
                        src: "1727:16:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88276,
                        name: "longAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88241,
                        src: "1745:10:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88273,
                      name: "closeLong",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119866, 119888, 119912],
                      referencedDeclaration: 119888,
                      src: "1712:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88277,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1712:44:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88278,
                  nodeType: "ExpressionStatement",
                  src: "1712:44:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88280,
                        name: "celine",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116799,
                        src: "1826:6:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88281,
                        name: "shortMaturityTime",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88267,
                        src: "1834:17:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88282,
                        name: "shortAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88263,
                        src: "1853:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88279,
                      name: "closeShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120116, 120138, 120162],
                      referencedDeclaration: 120138,
                      src: "1815:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88283,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1815:50:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88284,
                  nodeType: "ExpressionStatement",
                  src: "1815:50:126",
                },
                {
                  assignments: [88286, null],
                  declarations: [
                    {
                      constant: false,
                      id: 88286,
                      mutability: "mutable",
                      name: "lpProceeds",
                      nameLocation: "2139:10:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "2131:18:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88285,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "2131:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    null,
                  ],
                  id: 88291,
                  initialValue: {
                    arguments: [
                      {
                        id: 88288,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "2171:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88289,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88218,
                        src: "2178:8:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88287,
                      name: "removeLiquidity",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119560, 119581, 119604],
                      referencedDeclaration: 119581,
                      src: "2155:15:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88290,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2155:32:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2130:57:126",
                },
                {
                  assignments: [88293, null],
                  declarations: [
                    {
                      constant: false,
                      id: 88293,
                      mutability: "mutable",
                      name: "contributionPlusInterest",
                      nameLocation: "2286:24:126",
                      nodeType: "VariableDeclaration",
                      scope: 88309,
                      src: "2278:32:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88292,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "2278:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    null,
                  ],
                  id: 88303,
                  initialValue: {
                    arguments: [
                      {
                        id: 88296,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88214,
                        src: "2371:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        arguments: [
                          {
                            id: 88299,
                            name: "apr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88160,
                            src: "2392:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          ],
                          id: 88298,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "2385:6:126",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_int256_$",
                            typeString: "type(int256)",
                          },
                          typeName: {
                            id: 88297,
                            name: "int256",
                            nodeType: "ElementaryTypeName",
                            src: "2385:6:126",
                            typeDescriptions: {},
                          },
                        },
                        id: 88300,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "2385:11:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_int256",
                          typeString: "int256",
                        },
                      },
                      {
                        id: 88301,
                        name: "timeAdvanced",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88248,
                        src: "2398:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_int256",
                          typeString: "int256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      expression: {
                        id: 88294,
                        name: "HyperdriveUtils",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 122442,
                        src: "2316:15:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                          typeString: "type(library HyperdriveUtils)",
                        },
                      },
                      id: 88295,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2345:25:126",
                      memberName: "calculateCompoundInterest",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 121534,
                      src: "2316:54:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                        typeString:
                          "function (uint256,int256,uint256) pure returns (uint256,int256)",
                      },
                    },
                    id: 88302,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2316:95:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$",
                      typeString: "tuple(uint256,int256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2277:134:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88305,
                        name: "lpProceeds",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88286,
                        src: "2430:10:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88306,
                        name: "contributionPlusInterest",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88293,
                        src: "2442:24:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88304,
                      name: "assertGe",
                      nodeType: "Identifier",
                      overloadedDeclarations: [16040, 16065, 16095, 16120],
                      referencedDeclaration: 16040,
                      src: "2421:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 88307,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2421:46:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88308,
                  nodeType: "ExpressionStatement",
                  src: "2421:46:126",
                },
              ],
            },
            functionSelector: "2ce672a9",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_sandwich_trades",
            nameLocation: "491:20:126",
            parameters: {
              id: 88157,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 88154,
                  mutability: "mutable",
                  name: "_apr",
                  nameLocation: "518:4:126",
                  nodeType: "VariableDeclaration",
                  scope: 88310,
                  src: "512:10:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint8",
                    typeString: "uint8",
                  },
                  typeName: {
                    id: 88153,
                    name: "uint8",
                    nodeType: "ElementaryTypeName",
                    src: "512:5:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 88156,
                  mutability: "mutable",
                  name: "_timeDelta",
                  nameLocation: "531:10:126",
                  nodeType: "VariableDeclaration",
                  scope: 88310,
                  src: "524:17:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint64",
                    typeString: "uint64",
                  },
                  typeName: {
                    id: 88155,
                    name: "uint64",
                    nodeType: "ElementaryTypeName",
                    src: "524:6:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint64",
                      typeString: "uint64",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "511:31:126",
            },
            returnParameters: {
              id: 88158,
              nodeType: "ParameterList",
              parameters: [],
              src: "552:0:126",
            },
            scope: 88726,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 88477,
            nodeType: "FunctionDefinition",
            src: "2480:2535:126",
            nodes: [],
            body: {
              id: 88476,
              nodeType: "Block",
              src: "2555:2460:126",
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 88323,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88317,
                      name: "apr",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88312,
                      src: "2643:3:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue: "2e3031653138",
                          id: 88320,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2670:6:126",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_10000000000000000_by_1",
                            typeString: "int_const 10000000000000000",
                          },
                          value: ".01e18",
                        },
                        {
                          hexValue: "2e35653138",
                          id: 88321,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2678:5:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_500000000000000000_by_1",
                            typeString: "int_const 500000000000000000",
                          },
                          value: ".5e18",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_rational_10000000000000000_by_1",
                            typeString: "int_const 10000000000000000",
                          },
                          {
                            typeIdentifier:
                              "t_rational_500000000000000000_by_1",
                            typeString: "int_const 500000000000000000",
                          },
                        ],
                        expression: {
                          id: 88318,
                          name: "apr",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88312,
                          src: "2649:3:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 88319,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2653:16:126",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "2649:20:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 88322,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2649:35:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2643:41:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88324,
                  nodeType: "ExpressionStatement",
                  src: "2643:41:126",
                },
                {
                  expression: {
                    id: 88333,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88325,
                      name: "tradeSize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88314,
                      src: "2735:9:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue: "315f303030653138",
                          id: 88328,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2774:8:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_1000000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000000",
                          },
                          value: "1_000e18",
                        },
                        {
                          commonType: {
                            typeIdentifier:
                              "t_rational_49999999000000000000000000_by_1",
                            typeString: "int_const 49999999000000000000000000",
                          },
                          id: 88331,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          leftExpression: {
                            hexValue: "35305f3030305f303030653138",
                            id: 88329,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2784:13:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_rational_50000000000000000000000000_by_1",
                              typeString:
                                "int_const 50000000000000000000000000",
                            },
                            value: "50_000_000e18",
                          },
                          nodeType: "BinaryOperation",
                          operator: "-",
                          rightExpression: {
                            hexValue: "31653138",
                            id: 88330,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2800:4:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_rational_1000000000000000000_by_1",
                              typeString: "int_const 1000000000000000000",
                            },
                            value: "1e18",
                          },
                          src: "2784:20:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_49999999000000000000000000_by_1",
                            typeString: "int_const 49999999000000000000000000",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier:
                              "t_rational_1000000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000000",
                          },
                          {
                            typeIdentifier:
                              "t_rational_49999999000000000000000000_by_1",
                            typeString: "int_const 49999999000000000000000000",
                          },
                        ],
                        expression: {
                          id: 88326,
                          name: "tradeSize",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88314,
                          src: "2747:9:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 88327,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2757:16:126",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "2747:26:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 88332,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2747:58:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2735:70:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88334,
                  nodeType: "ExpressionStatement",
                  src: "2735:70:126",
                },
                {
                  id: 88347,
                  nodeType: "Block",
                  src: "2869:109:126",
                  statements: [
                    {
                      assignments: [88336],
                      declarations: [
                        {
                          constant: false,
                          id: 88336,
                          mutability: "mutable",
                          name: "timeStretchApr",
                          nameLocation: "2891:14:126",
                          nodeType: "VariableDeclaration",
                          scope: 88347,
                          src: "2883:22:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88335,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "2883:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88338,
                      initialValue: {
                        hexValue: "302e3035653138",
                        id: 88337,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "2908:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        value: "0.05e18",
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "2883:32:126",
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            id: 88340,
                            name: "alice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116795,
                            src: "2936:5:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88341,
                            name: "timeStretchApr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88336,
                            src: "2943:14:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            hexValue: "30",
                            id: 88342,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2959:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          {
                            hexValue: "30",
                            id: 88343,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2962:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          {
                            hexValue: "30",
                            id: 88344,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2965:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                          ],
                          id: 88339,
                          name: "deploy",
                          nodeType: "Identifier",
                          overloadedDeclarations: [119093, 119116, 119178],
                          referencedDeclaration: 119116,
                          src: "2929:6:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                            typeString:
                              "function (address,uint256,uint256,uint256,uint256)",
                          },
                        },
                        id: 88345,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "2929:38:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$__$",
                          typeString: "tuple()",
                        },
                      },
                      id: 88346,
                      nodeType: "ExpressionStatement",
                      src: "2929:38:126",
                    },
                  ],
                },
                {
                  assignments: [88349],
                  declarations: [
                    {
                      constant: false,
                      id: 88349,
                      mutability: "mutable",
                      name: "contribution",
                      nameLocation: "2995:12:126",
                      nodeType: "VariableDeclaration",
                      scope: 88476,
                      src: "2987:20:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88348,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "2987:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88351,
                  initialValue: {
                    hexValue: "3530305f3030305f303030653138",
                    id: 88350,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "3010:14:126",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_rational_500000000000000000000000000_by_1",
                      typeString: "int_const 500000000000000000000000000",
                    },
                    value: "500_000_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2987:37:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88353,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "3045:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88354,
                        name: "apr",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88312,
                        src: "3052:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88355,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88349,
                        src: "3057:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88352,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "3034:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88356,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3034:36:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88357,
                  nodeType: "ExpressionStatement",
                  src: "3034:36:126",
                },
                {
                  assignments: [88359],
                  declarations: [
                    {
                      constant: false,
                      id: 88359,
                      mutability: "mutable",
                      name: "shortLoss",
                      nameLocation: "3089:9:126",
                      nodeType: "VariableDeclaration",
                      scope: 88476,
                      src: "3081:17:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88358,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "3081:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88360,
                  nodeType: "VariableDeclarationStatement",
                  src: "3081:17:126",
                },
                {
                  assignments: [88362],
                  declarations: [
                    {
                      constant: false,
                      id: 88362,
                      mutability: "mutable",
                      name: "sandwichProfit",
                      nameLocation: "3200:14:126",
                      nodeType: "VariableDeclaration",
                      scope: 88476,
                      src: "3192:22:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88361,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "3192:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88363,
                  nodeType: "VariableDeclarationStatement",
                  src: "3192:22:126",
                },
                {
                  id: 88414,
                  nodeType: "Block",
                  src: "3224:888:126",
                  statements: [
                    {
                      assignments: [88365],
                      declarations: [
                        {
                          constant: false,
                          id: 88365,
                          mutability: "mutable",
                          name: "bondsShorted",
                          nameLocation: "3275:12:126",
                          nodeType: "VariableDeclaration",
                          scope: 88414,
                          src: "3267:20:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88364,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "3267:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88367,
                      initialValue: {
                        id: 88366,
                        name: "tradeSize",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88314,
                        src: "3290:9:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "3267:32:126",
                    },
                    {
                      assignments: [88369, 88371],
                      declarations: [
                        {
                          constant: false,
                          id: 88369,
                          mutability: "mutable",
                          name: "shortMaturityTime",
                          nameLocation: "3339:17:126",
                          nodeType: "VariableDeclaration",
                          scope: 88414,
                          src: "3331:25:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88368,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "3331:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                        {
                          constant: false,
                          id: 88371,
                          mutability: "mutable",
                          name: "shortBasePaid",
                          nameLocation: "3366:13:126",
                          nodeType: "VariableDeclaration",
                          scope: 88414,
                          src: "3358:21:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88370,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "3358:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88376,
                      initialValue: {
                        arguments: [
                          {
                            id: 88373,
                            name: "bob",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116797,
                            src: "3410:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88374,
                            name: "bondsShorted",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88365,
                            src: "3431:12:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          ],
                          id: 88372,
                          name: "openShort",
                          nodeType: "Identifier",
                          overloadedDeclarations: [120029, 120053, 120079],
                          referencedDeclaration: 120053,
                          src: "3383:9:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                            typeString:
                              "function (address,uint256) returns (uint256,uint256)",
                          },
                        },
                        id: 88375,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3383:74:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                          typeString: "tuple(uint256,uint256)",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "3330:127:126",
                    },
                    {
                      assignments: [88378],
                      declarations: [
                        {
                          constant: false,
                          id: 88378,
                          mutability: "mutable",
                          name: "basePaid",
                          nameLocation: "3508:8:126",
                          nodeType: "VariableDeclaration",
                          scope: 88414,
                          src: "3500:16:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88377,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "3500:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88380,
                      initialValue: {
                        id: 88379,
                        name: "tradeSize",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88314,
                        src: "3519:9:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "3500:28:126",
                    },
                    {
                      assignments: [null, 88382],
                      declarations: [
                        null,
                        {
                          constant: false,
                          id: 88382,
                          mutability: "mutable",
                          name: "bondsReceived",
                          nameLocation: "3570:13:126",
                          nodeType: "VariableDeclaration",
                          scope: 88414,
                          src: "3562:21:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88381,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "3562:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88387,
                      initialValue: {
                        arguments: [
                          {
                            id: 88384,
                            name: "bob",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116797,
                            src: "3596:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88385,
                            name: "basePaid",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88378,
                            src: "3601:8:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          ],
                          id: 88383,
                          name: "openLong",
                          nodeType: "Identifier",
                          overloadedDeclarations: [119771, 119799, 119829],
                          referencedDeclaration: 119799,
                          src: "3587:8:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                            typeString:
                              "function (address,uint256) returns (uint256,uint256)",
                          },
                        },
                        id: 88386,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3587:23:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                          typeString: "tuple(uint256,uint256)",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "3559:51:126",
                    },
                    {
                      assignments: [88389],
                      declarations: [
                        {
                          constant: false,
                          id: 88389,
                          mutability: "mutable",
                          name: "shortBaseReturned",
                          nameLocation: "3673:17:126",
                          nodeType: "VariableDeclaration",
                          scope: 88414,
                          src: "3665:25:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88388,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "3665:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88395,
                      initialValue: {
                        arguments: [
                          {
                            id: 88391,
                            name: "bob",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116797,
                            src: "3721:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88392,
                            name: "shortMaturityTime",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88369,
                            src: "3742:17:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            id: 88393,
                            name: "bondsShorted",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88365,
                            src: "3777:12:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          ],
                          id: 88390,
                          name: "closeShort",
                          nodeType: "Identifier",
                          overloadedDeclarations: [120116, 120138, 120162],
                          referencedDeclaration: 120138,
                          src: "3693:10:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            typeString:
                              "function (address,uint256,uint256) returns (uint256)",
                          },
                        },
                        id: 88394,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3693:110:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "3665:138:126",
                    },
                    {
                      expression: {
                        id: 88400,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 88396,
                          name: "shortLoss",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88359,
                          src: "3817:9:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88399,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88397,
                            name: "shortBasePaid",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88371,
                            src: "3829:13:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "-",
                          rightExpression: {
                            id: 88398,
                            name: "shortBaseReturned",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88389,
                            src: "3845:17:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "3829:33:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "3817:45:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 88401,
                      nodeType: "ExpressionStatement",
                      src: "3817:45:126",
                    },
                    {
                      assignments: [88403],
                      declarations: [
                        {
                          constant: false,
                          id: 88403,
                          mutability: "mutable",
                          name: "longProfit",
                          nameLocation: "4011:10:126",
                          nodeType: "VariableDeclaration",
                          scope: 88414,
                          src: "4003:18:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88402,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "4003:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88407,
                      initialValue: {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 88406,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 88404,
                          name: "bondsReceived",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88382,
                          src: "4024:13:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "-",
                        rightExpression: {
                          id: 88405,
                          name: "basePaid",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88378,
                          src: "4040:8:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "4024:24:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "4003:45:126",
                    },
                    {
                      expression: {
                        id: 88412,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 88408,
                          name: "sandwichProfit",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88362,
                          src: "4062:14:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88411,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88409,
                            name: "longProfit",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88403,
                            src: "4079:10:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "-",
                          rightExpression: {
                            id: 88410,
                            name: "shortLoss",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88359,
                            src: "4092:9:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "4079:22:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "4062:39:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 88413,
                      nodeType: "ExpressionStatement",
                      src: "4062:39:126",
                    },
                  ],
                },
                {
                  id: 88427,
                  nodeType: "Block",
                  src: "4175:109:126",
                  statements: [
                    {
                      assignments: [88416],
                      declarations: [
                        {
                          constant: false,
                          id: 88416,
                          mutability: "mutable",
                          name: "timeStretchApr",
                          nameLocation: "4197:14:126",
                          nodeType: "VariableDeclaration",
                          scope: 88427,
                          src: "4189:22:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88415,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "4189:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88418,
                      initialValue: {
                        hexValue: "302e3035653138",
                        id: 88417,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "4214:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        value: "0.05e18",
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "4189:32:126",
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            id: 88420,
                            name: "alice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116795,
                            src: "4242:5:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88421,
                            name: "timeStretchApr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88416,
                            src: "4249:14:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            hexValue: "30",
                            id: 88422,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "4265:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          {
                            hexValue: "30",
                            id: 88423,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "4268:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          {
                            hexValue: "30",
                            id: 88424,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "4271:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                          ],
                          id: 88419,
                          name: "deploy",
                          nodeType: "Identifier",
                          overloadedDeclarations: [119093, 119116, 119178],
                          referencedDeclaration: 119116,
                          src: "4235:6:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                            typeString:
                              "function (address,uint256,uint256,uint256,uint256)",
                          },
                        },
                        id: 88425,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4235:38:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$__$",
                          typeString: "tuple()",
                        },
                      },
                      id: 88426,
                      nodeType: "ExpressionStatement",
                      src: "4235:38:126",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88429,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "4304:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88430,
                        name: "apr",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88312,
                        src: "4311:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88431,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88349,
                        src: "4316:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88428,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "4293:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88432,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4293:36:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88433,
                  nodeType: "ExpressionStatement",
                  src: "4293:36:126",
                },
                {
                  assignments: [88435],
                  declarations: [
                    {
                      constant: false,
                      id: 88435,
                      mutability: "mutable",
                      name: "baselineProfit",
                      nameLocation: "4418:14:126",
                      nodeType: "VariableDeclaration",
                      scope: 88476,
                      src: "4410:22:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88434,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "4410:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88436,
                  nodeType: "VariableDeclarationStatement",
                  src: "4410:22:126",
                },
                {
                  id: 88468,
                  nodeType: "Block",
                  src: "4442:504:126",
                  statements: [
                    {
                      assignments: [88438],
                      declarations: [
                        {
                          constant: false,
                          id: 88438,
                          mutability: "mutable",
                          name: "basePaid",
                          nameLocation: "4492:8:126",
                          nodeType: "VariableDeclaration",
                          scope: 88468,
                          src: "4484:16:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88437,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "4484:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88440,
                      initialValue: {
                        id: 88439,
                        name: "tradeSize",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88314,
                        src: "4503:9:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "4484:28:126",
                    },
                    {
                      expression: {
                        id: 88445,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 88441,
                          name: "basePaid",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88438,
                          src: "4526:8:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88444,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88442,
                            name: "basePaid",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88438,
                            src: "4537:8:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "+",
                          rightExpression: {
                            id: 88443,
                            name: "shortLoss",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88359,
                            src: "4548:9:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "4537:20:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "4526:31:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 88446,
                      nodeType: "ExpressionStatement",
                      src: "4526:31:126",
                    },
                    {
                      assignments: [88448, 88450],
                      declarations: [
                        {
                          constant: false,
                          id: 88448,
                          mutability: "mutable",
                          name: "longMaturityTime",
                          nameLocation: "4580:16:126",
                          nodeType: "VariableDeclaration",
                          scope: 88468,
                          src: "4572:24:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88447,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "4572:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                        {
                          constant: false,
                          id: 88450,
                          mutability: "mutable",
                          name: "bondsReceived",
                          nameLocation: "4606:13:126",
                          nodeType: "VariableDeclaration",
                          scope: 88468,
                          src: "4598:21:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88449,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "4598:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88455,
                      initialValue: {
                        arguments: [
                          {
                            id: 88452,
                            name: "celine",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116799,
                            src: "4649:6:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88453,
                            name: "basePaid",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88438,
                            src: "4673:8:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          ],
                          id: 88451,
                          name: "openLong",
                          nodeType: "Identifier",
                          overloadedDeclarations: [119771, 119799, 119829],
                          referencedDeclaration: 119799,
                          src: "4623:8:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                            typeString:
                              "function (address,uint256) returns (uint256,uint256)",
                          },
                        },
                        id: 88454,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4623:72:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                          typeString: "tuple(uint256,uint256)",
                        },
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "4571:124:126",
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            id: 88457,
                            name: "celine",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116799,
                            src: "4719:6:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88458,
                            name: "longMaturityTime",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88448,
                            src: "4727:16:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            id: 88459,
                            name: "bondsReceived",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88450,
                            src: "4745:13:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          ],
                          id: 88456,
                          name: "closeLong",
                          nodeType: "Identifier",
                          overloadedDeclarations: [119866, 119888, 119912],
                          referencedDeclaration: 119888,
                          src: "4709:9:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            typeString:
                              "function (address,uint256,uint256) returns (uint256)",
                          },
                        },
                        id: 88460,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4709:50:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 88461,
                      nodeType: "ExpressionStatement",
                      src: "4709:50:126",
                    },
                    {
                      expression: {
                        id: 88466,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 88462,
                          name: "baselineProfit",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88435,
                          src: "4894:14:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88465,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88463,
                            name: "bondsReceived",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88450,
                            src: "4911:13:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "-",
                          rightExpression: {
                            id: 88464,
                            name: "basePaid",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88438,
                            src: "4927:8:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "4911:24:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "4894:41:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 88467,
                      nodeType: "ExpressionStatement",
                      src: "4894:41:126",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88470,
                        name: "baselineProfit",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88435,
                        src: "4964:14:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 88473,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 88471,
                          name: "sandwichProfit",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88362,
                          src: "4980:14:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "-",
                        rightExpression: {
                          hexValue: "3130303030",
                          id: 88472,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "4997:10:126",
                          subdenomination: "gwei",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_10000000000000_by_1",
                            typeString: "int_const 10000000000000",
                          },
                          value: "10000",
                        },
                        src: "4980:27:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88469,
                      name: "assertGe",
                      nodeType: "Identifier",
                      overloadedDeclarations: [16040, 16065, 16095, 16120],
                      referencedDeclaration: 16040,
                      src: "4955:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 88474,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4955:53:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88475,
                  nodeType: "ExpressionStatement",
                  src: "4955:53:126",
                },
              ],
            },
            functionSelector: "aa739f8c",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_sandwich_long_trade",
            nameLocation: "2489:24:126",
            parameters: {
              id: 88315,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 88312,
                  mutability: "mutable",
                  name: "apr",
                  nameLocation: "2522:3:126",
                  nodeType: "VariableDeclaration",
                  scope: 88477,
                  src: "2514:11:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 88311,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2514:7:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 88314,
                  mutability: "mutable",
                  name: "tradeSize",
                  nameLocation: "2535:9:126",
                  nodeType: "VariableDeclaration",
                  scope: 88477,
                  src: "2527:17:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 88313,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2527:7:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2513:32:126",
            },
            returnParameters: {
              id: 88316,
              nodeType: "ParameterList",
              parameters: [],
              src: "2555:0:126",
            },
            scope: 88726,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 88608,
            nodeType: "FunctionDefinition",
            src: "5021:1999:126",
            nodes: [],
            body: {
              id: 88607,
              nodeType: "Block",
              src: "5189:1831:126",
              nodes: [],
              statements: [
                {
                  assignments: [88492],
                  declarations: [
                    {
                      constant: false,
                      id: 88492,
                      mutability: "mutable",
                      name: "config",
                      nameLocation: "5229:6:126",
                      nodeType: "VariableDeclaration",
                      scope: 88607,
                      src: "5199:36:126",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_PoolConfig_$6924_memory_ptr",
                        typeString: "struct IHyperdrive.PoolConfig",
                      },
                      typeName: {
                        id: 88491,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 88490,
                          name: "IHyperdrive.PoolConfig",
                          nameLocations: ["5199:11:126", "5211:10:126"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6924,
                          src: "5199:22:126",
                        },
                        referencedDeclaration: 6924,
                        src: "5199:22:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_storage_ptr",
                          typeString: "struct IHyperdrive.PoolConfig",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88496,
                  initialValue: {
                    arguments: [
                      {
                        hexValue: "302e3035653138",
                        id: 88494,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5249:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        value: "0.05e18",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                      ],
                      id: 88493,
                      name: "testConfig",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 119224,
                      src: "5238:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_uint256_$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        typeString:
                          "function (uint256) view returns (struct IHyperdrive.PoolConfig memory)",
                      },
                    },
                    id: 88495,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5238:19:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolConfig_$6924_memory_ptr",
                      typeString: "struct IHyperdrive.PoolConfig memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "5199:58:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88498,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "5274:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88499,
                        name: "config",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88492,
                        src: "5281:6:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_memory_ptr",
                          typeString: "struct IHyperdrive.PoolConfig memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_memory_ptr",
                          typeString: "struct IHyperdrive.PoolConfig memory",
                        },
                      ],
                      id: 88497,
                      name: "deploy",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119093, 119116, 119178],
                      referencedDeclaration: 119093,
                      src: "5267:6:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_struct$_PoolConfig_$6924_memory_ptr_$returns$__$",
                        typeString:
                          "function (address,struct IHyperdrive.PoolConfig memory)",
                      },
                    },
                    id: 88500,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5267:21:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88501,
                  nodeType: "ExpressionStatement",
                  src: "5267:21:126",
                },
                {
                  expression: {
                    id: 88508,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88502,
                      name: "fixedRate",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88479,
                      src: "5512:9:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue: "302e303031653138",
                          id: 88505,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "5551:8:126",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_1000000000000000_by_1",
                            typeString: "int_const 1000000000000000",
                          },
                          value: "0.001e18",
                        },
                        {
                          hexValue: "31653138",
                          id: 88506,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "5561:4:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_1000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000",
                          },
                          value: "1e18",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_rational_1000000000000000_by_1",
                            typeString: "int_const 1000000000000000",
                          },
                          {
                            typeIdentifier:
                              "t_rational_1000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000",
                          },
                        ],
                        expression: {
                          id: 88503,
                          name: "fixedRate",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88479,
                          src: "5524:9:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 88504,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "5534:16:126",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "5524:26:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 88507,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "5524:42:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "5512:54:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88509,
                  nodeType: "ExpressionStatement",
                  src: "5512:54:126",
                },
                {
                  expression: {
                    id: 88516,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88510,
                      name: "contribution",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88481,
                      src: "5576:12:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue: "315f303030653138",
                          id: 88513,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "5621:8:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_1000000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000000",
                          },
                          value: "1_000e18",
                        },
                        {
                          hexValue: "3530305f3030305f303030653138",
                          id: 88514,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "5631:14:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_500000000000000000000000000_by_1",
                            typeString: "int_const 500000000000000000000000000",
                          },
                          value: "500_000_000e18",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier:
                              "t_rational_1000000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000000",
                          },
                          {
                            typeIdentifier:
                              "t_rational_500000000000000000000000000_by_1",
                            typeString: "int_const 500000000000000000000000000",
                          },
                        ],
                        expression: {
                          id: 88511,
                          name: "contribution",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88481,
                          src: "5591:12:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 88512,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "5604:16:126",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "5591:29:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 88515,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "5591:55:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "5576:70:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88517,
                  nodeType: "ExpressionStatement",
                  src: "5576:70:126",
                },
                {
                  assignments: [88519],
                  declarations: [
                    {
                      constant: false,
                      id: 88519,
                      mutability: "mutable",
                      name: "lpShares",
                      nameLocation: "5664:8:126",
                      nodeType: "VariableDeclaration",
                      scope: 88607,
                      src: "5656:16:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88518,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "5656:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88525,
                  initialValue: {
                    arguments: [
                      {
                        id: 88521,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "5686:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88522,
                        name: "fixedRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88479,
                        src: "5693:9:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88523,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88481,
                        src: "5704:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88520,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "5675:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88524,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5675:42:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "5656:61:126",
                },
                {
                  expression: {
                    id: 88531,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88526,
                      name: "contribution",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88481,
                      src: "5727:12:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "-=",
                    rightHandSide: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 88530,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        hexValue: "32",
                        id: 88527,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5743:1:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_2_by_1",
                          typeString: "int_const 2",
                        },
                        value: "2",
                      },
                      nodeType: "BinaryOperation",
                      operator: "*",
                      rightExpression: {
                        expression: {
                          id: 88528,
                          name: "config",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88492,
                          src: "5747:6:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolConfig_$6924_memory_ptr",
                            typeString: "struct IHyperdrive.PoolConfig memory",
                          },
                        },
                        id: 88529,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "5754:20:126",
                        memberName: "minimumShareReserves",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6895,
                        src: "5747:27:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "5743:31:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "5727:47:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88532,
                  nodeType: "ExpressionStatement",
                  src: "5727:47:126",
                },
                {
                  expression: {
                    id: 88544,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88533,
                      name: "tradeAmount",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88483,
                      src: "5815:11:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue: "31653138",
                          id: 88536,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "5871:4:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_1000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000",
                          },
                          value: "1e18",
                        },
                        {
                          arguments: [
                            {
                              hexValue: "302e39653138",
                              id: 88541,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "5928:6:126",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_rational_900000000000000000_by_1",
                                typeString: "int_const 900000000000000000",
                              },
                              value: "0.9e18",
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier:
                                  "t_rational_900000000000000000_by_1",
                                typeString: "int_const 900000000000000000",
                              },
                            ],
                            expression: {
                              arguments: [],
                              expression: {
                                argumentTypes: [],
                                expression: {
                                  id: 88537,
                                  name: "hyperdrive",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 118894,
                                  src: "5889:10:126",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_contract$_IHyperdrive_$7103",
                                    typeString: "contract IHyperdrive",
                                  },
                                },
                                id: 88538,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberLocation: "5900:17:126",
                                memberName: "calculateMaxShort",
                                nodeType: "MemberAccess",
                                referencedDeclaration: 121348,
                                src: "5889:28:126",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$attached_to$_t_contract$_IHyperdrive_$7103_$",
                                  typeString:
                                    "function (contract IHyperdrive) view returns (uint256)",
                                },
                              },
                              id: 88539,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              nameLocations: [],
                              names: [],
                              nodeType: "FunctionCall",
                              src: "5889:30:126",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            id: 88540,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "5920:7:126",
                            memberName: "mulDown",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 7784,
                            src: "5889:38:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              typeString:
                                "function (uint256,uint256) pure returns (uint256)",
                            },
                          },
                          id: 88542,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "5889:46:126",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier:
                              "t_rational_1000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        expression: {
                          id: 88534,
                          name: "tradeAmount",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88483,
                          src: "5829:11:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 88535,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "5841:16:126",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "5829:28:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 88543,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "5829:116:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "5815:130:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88545,
                  nodeType: "ExpressionStatement",
                  src: "5815:130:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88547,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "5965:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88548,
                        name: "tradeAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88483,
                        src: "5970:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88546,
                      name: "openShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120029, 120053, 120079],
                      referencedDeclaration: 120053,
                      src: "5955:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88549,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5955:27:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 88550,
                  nodeType: "ExpressionStatement",
                  src: "5955:27:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 88554,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        leftExpression: {
                          id: 88552,
                          name: "POSITION_DURATION",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118911,
                          src: "6065:17:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "-",
                        rightExpression: {
                          hexValue: "3132",
                          id: 88553,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "6085:10:126",
                          subdenomination: "seconds",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_12_by_1",
                            typeString: "int_const 12",
                          },
                          value: "12",
                        },
                        src: "6065:30:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "30",
                        id: 88555,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6097:1:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0",
                        },
                        value: "0",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0",
                        },
                      ],
                      id: 88551,
                      name: "advanceTime",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 120191,
                      src: "6053:11:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        typeString: "function (uint256,int256)",
                      },
                    },
                    id: 88556,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6053:46:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88557,
                  nodeType: "ExpressionStatement",
                  src: "6053:46:126",
                },
                {
                  expression: {
                    id: 88566,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 88558,
                      name: "sandwichAmount",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 88485,
                      src: "6182:14:126",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue: "31653138",
                          id: 88561,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "6244:4:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_1000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000",
                          },
                          value: "1e18",
                        },
                        {
                          arguments: [],
                          expression: {
                            argumentTypes: [],
                            expression: {
                              id: 88562,
                              name: "hyperdrive",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 118894,
                              src: "6262:10:126",
                              typeDescriptions: {
                                typeIdentifier: "t_contract$_IHyperdrive_$7103",
                                typeString: "contract IHyperdrive",
                              },
                            },
                            id: 88563,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "6273:17:126",
                            memberName: "calculateMaxShort",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 121348,
                            src: "6262:28:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$attached_to$_t_contract$_IHyperdrive_$7103_$",
                              typeString:
                                "function (contract IHyperdrive) view returns (uint256)",
                            },
                          },
                          id: 88564,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "6262:30:126",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier:
                              "t_rational_1000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        expression: {
                          id: 88559,
                          name: "sandwichAmount",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88485,
                          src: "6199:14:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 88560,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6214:16:126",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "6199:31:126",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 88565,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "6199:103:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "6182:120:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88567,
                  nodeType: "ExpressionStatement",
                  src: "6182:120:126",
                },
                {
                  assignments: [88569, 88571],
                  declarations: [
                    {
                      constant: false,
                      id: 88569,
                      mutability: "mutable",
                      name: "maturityTime",
                      nameLocation: "6321:12:126",
                      nodeType: "VariableDeclaration",
                      scope: 88607,
                      src: "6313:20:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88568,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "6313:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    {
                      constant: false,
                      id: 88571,
                      mutability: "mutable",
                      name: "shortPayment",
                      nameLocation: "6343:12:126",
                      nodeType: "VariableDeclaration",
                      scope: 88607,
                      src: "6335:20:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88570,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "6335:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88576,
                  initialValue: {
                    arguments: [
                      {
                        id: 88573,
                        name: "celine",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116799,
                        src: "6382:6:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88574,
                        name: "sandwichAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88485,
                        src: "6402:14:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88572,
                      name: "openShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120029, 120053, 120079],
                      referencedDeclaration: 120053,
                      src: "6359:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88575,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6359:67:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "6312:114:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "3132",
                        id: 88578,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6513:10:126",
                        subdenomination: "seconds",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_12_by_1",
                          typeString: "int_const 12",
                        },
                        value: "12",
                      },
                      {
                        hexValue: "30",
                        id: 88579,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6525:1:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0",
                        },
                        value: "0",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_rational_12_by_1",
                          typeString: "int_const 12",
                        },
                        {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0",
                        },
                      ],
                      id: 88577,
                      name: "advanceTime",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 120191,
                      src: "6501:11:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        typeString: "function (uint256,int256)",
                      },
                    },
                    id: 88580,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6501:26:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88581,
                  nodeType: "ExpressionStatement",
                  src: "6501:26:126",
                },
                {
                  assignments: [88583],
                  declarations: [
                    {
                      constant: false,
                      id: 88583,
                      mutability: "mutable",
                      name: "shortProceeds",
                      nameLocation: "6623:13:126",
                      nodeType: "VariableDeclaration",
                      scope: 88607,
                      src: "6615:21:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88582,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "6615:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88589,
                  initialValue: {
                    arguments: [
                      {
                        id: 88585,
                        name: "celine",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116799,
                        src: "6663:6:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88586,
                        name: "maturityTime",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88569,
                        src: "6683:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88587,
                        name: "sandwichAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88485,
                        src: "6709:14:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88584,
                      name: "closeShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120116, 120138, 120162],
                      referencedDeclaration: 120138,
                      src: "6639:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88588,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6639:94:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "6615:118:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88591,
                        name: "shortProceeds",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88583,
                        src: "6752:13:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88592,
                        name: "shortPayment",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88571,
                        src: "6767:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88590,
                      name: "assertLt",
                      nodeType: "Identifier",
                      overloadedDeclarations: [16274, 16299, 16329, 16354],
                      referencedDeclaration: 16274,
                      src: "6743:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 88593,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6743:37:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88594,
                  nodeType: "ExpressionStatement",
                  src: "6743:37:126",
                },
                {
                  assignments: [88596, null],
                  declarations: [
                    {
                      constant: false,
                      id: 88596,
                      mutability: "mutable",
                      name: "withdrawalProceeds",
                      nameLocation: "6905:18:126",
                      nodeType: "VariableDeclaration",
                      scope: 88607,
                      src: "6897:26:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88595,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "6897:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    null,
                  ],
                  id: 88601,
                  initialValue: {
                    arguments: [
                      {
                        id: 88598,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "6945:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88599,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88519,
                        src: "6952:8:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88597,
                      name: "removeLiquidity",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119560, 119581, 119604],
                      referencedDeclaration: 119581,
                      src: "6929:15:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88600,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6929:32:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "6896:65:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88603,
                        name: "withdrawalProceeds",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88596,
                        src: "6980:18:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88604,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88481,
                        src: "7000:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88602,
                      name: "assertGe",
                      nodeType: "Identifier",
                      overloadedDeclarations: [16040, 16065, 16095, 16120],
                      referencedDeclaration: 16040,
                      src: "6971:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 88605,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6971:42:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88606,
                  nodeType: "ExpressionStatement",
                  src: "6971:42:126",
                },
              ],
            },
            functionSelector: "021db0e7",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_sandwich_short_trade",
            nameLocation: "5030:25:126",
            parameters: {
              id: 88486,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 88479,
                  mutability: "mutable",
                  name: "fixedRate",
                  nameLocation: "5073:9:126",
                  nodeType: "VariableDeclaration",
                  scope: 88608,
                  src: "5065:17:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 88478,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5065:7:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 88481,
                  mutability: "mutable",
                  name: "contribution",
                  nameLocation: "5100:12:126",
                  nodeType: "VariableDeclaration",
                  scope: 88608,
                  src: "5092:20:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 88480,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5092:7:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 88483,
                  mutability: "mutable",
                  name: "tradeAmount",
                  nameLocation: "5130:11:126",
                  nodeType: "VariableDeclaration",
                  scope: 88608,
                  src: "5122:19:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 88482,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5122:7:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 88485,
                  mutability: "mutable",
                  name: "sandwichAmount",
                  nameLocation: "5159:14:126",
                  nodeType: "VariableDeclaration",
                  scope: 88608,
                  src: "5151:22:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 88484,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5151:7:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "5055:124:126",
            },
            returnParameters: {
              id: 88487,
              nodeType: "ParameterList",
              parameters: [],
              src: "5189:0:126",
            },
            scope: 88726,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 88725,
            nodeType: "FunctionDefinition",
            src: "7088:1430:126",
            nodes: [],
            body: {
              id: 88724,
              nodeType: "Block",
              src: "7135:1383:126",
              nodes: [],
              statements: [
                {
                  assignments: [88614],
                  declarations: [
                    {
                      constant: false,
                      id: 88614,
                      mutability: "mutable",
                      name: "apr",
                      nameLocation: "7153:3:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7145:11:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88613,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7145:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88621,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 88620,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      arguments: [
                        {
                          id: 88617,
                          name: "_apr",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 88610,
                          src: "7167:4:126",
                          typeDescriptions: {
                            typeIdentifier: "t_uint8",
                            typeString: "uint8",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint8",
                            typeString: "uint8",
                          },
                        ],
                        id: 88616,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "ElementaryTypeNameExpression",
                        src: "7159:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_uint256_$",
                          typeString: "type(uint256)",
                        },
                        typeName: {
                          id: 88615,
                          name: "uint256",
                          nodeType: "ElementaryTypeName",
                          src: "7159:7:126",
                          typeDescriptions: {},
                        },
                      },
                      id: 88618,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "typeConversion",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "7159:13:126",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "*",
                    rightExpression: {
                      hexValue: "302e3031653138",
                      id: 88619,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "7175:7:126",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_10000000000000000_by_1",
                        typeString: "int_const 10000000000000000",
                      },
                      value: "0.01e18",
                    },
                    src: "7159:23:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "7145:37:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        id: 88631,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88627,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88625,
                            name: "apr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88614,
                            src: "7202:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: ">=",
                          rightExpression: {
                            hexValue: "302e3031653138",
                            id: 88626,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "7209:7:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_rational_10000000000000000_by_1",
                              typeString: "int_const 10000000000000000",
                            },
                            value: "0.01e18",
                          },
                          src: "7202:14:126",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "&&",
                        rightExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 88630,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 88628,
                            name: "apr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88614,
                            src: "7220:3:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "<=",
                          rightExpression: {
                            hexValue: "302e32653138",
                            id: 88629,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "7227:6:126",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_rational_200000000000000000_by_1",
                              typeString: "int_const 200000000000000000",
                            },
                            value: "0.2e18",
                          },
                          src: "7220:13:126",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        src: "7202:31:126",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      expression: {
                        id: 88622,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "7192:2:126",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 88624,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "7195:6:126",
                      memberName: "assume",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27750,
                      src: "7192:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure external",
                      },
                    },
                    id: 88632,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "7192:42:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88633,
                  nodeType: "ExpressionStatement",
                  src: "7192:42:126",
                },
                {
                  id: 88650,
                  nodeType: "Block",
                  src: "7283:157:126",
                  statements: [
                    {
                      assignments: [88635],
                      declarations: [
                        {
                          constant: false,
                          id: 88635,
                          mutability: "mutable",
                          name: "timeStretchApr",
                          nameLocation: "7305:14:126",
                          nodeType: "VariableDeclaration",
                          scope: 88650,
                          src: "7297:22:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88634,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "7297:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88637,
                      initialValue: {
                        hexValue: "302e3032653138",
                        id: 88636,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "7322:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_20000000000000000_by_1",
                          typeString: "int_const 20000000000000000",
                        },
                        value: "0.02e18",
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "7297:32:126",
                    },
                    {
                      assignments: [88639],
                      declarations: [
                        {
                          constant: false,
                          id: 88639,
                          mutability: "mutable",
                          name: "curveFee",
                          nameLocation: "7351:8:126",
                          nodeType: "VariableDeclaration",
                          scope: 88650,
                          src: "7343:16:126",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          typeName: {
                            id: 88638,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "7343:7:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          visibility: "internal",
                        },
                      ],
                      id: 88641,
                      initialValue: {
                        hexValue: "302e303031653138",
                        id: 88640,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "7362:8:126",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_1000000000000000_by_1",
                          typeString: "int_const 1000000000000000",
                        },
                        value: "0.001e18",
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "7343:27:126",
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            id: 88643,
                            name: "alice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116795,
                            src: "7391:5:126",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 88644,
                            name: "timeStretchApr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88635,
                            src: "7398:14:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            id: 88645,
                            name: "curveFee",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 88639,
                            src: "7414:8:126",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            hexValue: "30",
                            id: 88646,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "7424:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                          {
                            hexValue: "30",
                            id: 88647,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "7427:1:126",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            value: "0",
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0",
                            },
                          ],
                          id: 88642,
                          name: "deploy",
                          nodeType: "Identifier",
                          overloadedDeclarations: [119093, 119116, 119178],
                          referencedDeclaration: 119116,
                          src: "7384:6:126",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                            typeString:
                              "function (address,uint256,uint256,uint256,uint256)",
                          },
                        },
                        id: 88648,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "7384:45:126",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$__$",
                          typeString: "tuple()",
                        },
                      },
                      id: 88649,
                      nodeType: "ExpressionStatement",
                      src: "7384:45:126",
                    },
                  ],
                },
                {
                  assignments: [88652],
                  declarations: [
                    {
                      constant: false,
                      id: 88652,
                      mutability: "mutable",
                      name: "contribution",
                      nameLocation: "7492:12:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7484:20:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88651,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7484:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88654,
                  initialValue: {
                    hexValue: "3530305f3030305f303030653138",
                    id: 88653,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "7507:14:126",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_rational_500000000000000000000000000_by_1",
                      typeString: "int_const 500000000000000000000000000",
                    },
                    value: "500_000_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "7484:37:126",
                },
                {
                  assignments: [88656],
                  declarations: [
                    {
                      constant: false,
                      id: 88656,
                      mutability: "mutable",
                      name: "aliceLpShares",
                      nameLocation: "7539:13:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7531:21:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88655,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7531:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88662,
                  initialValue: {
                    arguments: [
                      {
                        id: 88658,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "7566:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88659,
                        name: "apr",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88614,
                        src: "7573:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88660,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88652,
                        src: "7578:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88657,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "7555:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88661,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "7555:36:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "7531:60:126",
                },
                {
                  assignments: [88664],
                  declarations: [
                    {
                      constant: false,
                      id: 88664,
                      mutability: "mutable",
                      name: "tradeAmount",
                      nameLocation: "7657:11:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7649:19:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88663,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7649:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88666,
                  initialValue: {
                    hexValue: "3130305f3030305f303030653138",
                    id: 88665,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "7671:14:126",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_rational_100000000000000000000000000_by_1",
                      typeString: "int_const 100000000000000000000000000",
                    },
                    value: "100_000_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "7649:36:126",
                },
                {
                  assignments: [88668, 88670],
                  declarations: [
                    {
                      constant: false,
                      id: 88668,
                      mutability: "mutable",
                      name: "longMaturityTime",
                      nameLocation: "7704:16:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7696:24:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88667,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7696:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    {
                      constant: false,
                      id: 88670,
                      mutability: "mutable",
                      name: "longAmount",
                      nameLocation: "7730:10:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7722:18:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88669,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7722:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88675,
                  initialValue: {
                    arguments: [
                      {
                        id: 88672,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "7766:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88673,
                        name: "tradeAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88664,
                        src: "7783:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88671,
                      name: "openLong",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119771, 119799, 119829],
                      referencedDeclaration: 119799,
                      src: "7744:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88674,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "7744:60:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "7695:109:126",
                },
                {
                  assignments: [88677, null],
                  declarations: [
                    {
                      constant: false,
                      id: 88677,
                      mutability: "mutable",
                      name: "shortMaturityTime",
                      nameLocation: "7823:17:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7815:25:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88676,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7815:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    null,
                  ],
                  id: 88682,
                  initialValue: {
                    arguments: [
                      {
                        id: 88679,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "7856:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88680,
                        name: "tradeAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88664,
                        src: "7861:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88678,
                      name: "openShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120029, 120053, 120079],
                      referencedDeclaration: 120053,
                      src: "7846:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88681,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "7846:27:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "7814:59:126",
                },
                {
                  assignments: [88684],
                  declarations: [
                    {
                      constant: false,
                      id: 88684,
                      mutability: "mutable",
                      name: "bobLpShares",
                      nameLocation: "7972:11:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "7964:19:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88683,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "7964:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 88689,
                  initialValue: {
                    arguments: [
                      {
                        id: 88686,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "7999:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88687,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88652,
                        src: "8004:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88685,
                      name: "addLiquidity",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119470, 119496, 119524],
                      referencedDeclaration: 119496,
                      src: "7986:12:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256)",
                      },
                    },
                    id: 88688,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "7986:31:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "7964:53:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88691,
                        name: "bobLpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88684,
                        src: "8036:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88692,
                        name: "aliceLpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88656,
                        src: "8049:13:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88690,
                      name: "assertLe",
                      nodeType: "Identifier",
                      overloadedDeclarations: [16508, 16533, 16563, 16588],
                      referencedDeclaration: 16508,
                      src: "8027:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 88693,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8027:36:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88694,
                  nodeType: "ExpressionStatement",
                  src: "8027:36:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88696,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "8121:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88697,
                        name: "longMaturityTime",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88668,
                        src: "8126:16:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88698,
                        name: "longAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88670,
                        src: "8144:10:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88695,
                      name: "closeLong",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119866, 119888, 119912],
                      referencedDeclaration: 119888,
                      src: "8111:9:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88699,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8111:44:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88700,
                  nodeType: "ExpressionStatement",
                  src: "8111:44:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88702,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "8176:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88703,
                        name: "shortMaturityTime",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88677,
                        src: "8181:17:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88704,
                        name: "tradeAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88664,
                        src: "8200:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88701,
                      name: "closeShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120116, 120138, 120162],
                      referencedDeclaration: 120138,
                      src: "8165:10:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 88705,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8165:47:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 88706,
                  nodeType: "ExpressionStatement",
                  src: "8165:47:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88708,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "8277:3:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88709,
                        name: "bobLpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88684,
                        src: "8282:11:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88707,
                      name: "removeLiquidity",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119560, 119581, 119604],
                      referencedDeclaration: 119581,
                      src: "8261:15:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88710,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8261:33:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 88711,
                  nodeType: "ExpressionStatement",
                  src: "8261:33:126",
                },
                {
                  assignments: [88713, null],
                  declarations: [
                    {
                      constant: false,
                      id: 88713,
                      mutability: "mutable",
                      name: "lpProceeds",
                      nameLocation: "8414:10:126",
                      nodeType: "VariableDeclaration",
                      scope: 88724,
                      src: "8406:18:126",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 88712,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "8406:7:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    null,
                  ],
                  id: 88718,
                  initialValue: {
                    arguments: [
                      {
                        id: 88715,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "8446:5:126",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 88716,
                        name: "aliceLpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88656,
                        src: "8453:13:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88714,
                      name: "removeLiquidity",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119560, 119581, 119604],
                      referencedDeclaration: 119581,
                      src: "8430:15:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 88717,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8430:37:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "8405:62:126",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 88720,
                        name: "lpProceeds",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88713,
                        src: "8486:10:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 88721,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 88652,
                        src: "8498:12:126",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 88719,
                      name: "assertGe",
                      nodeType: "Identifier",
                      overloadedDeclarations: [16040, 16065, 16095, 16120],
                      referencedDeclaration: 16040,
                      src: "8477:8:126",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 88722,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8477:34:126",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 88723,
                  nodeType: "ExpressionStatement",
                  src: "8477:34:126",
                },
              ],
            },
            functionSelector: "e6ee4899",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_sandwich_lp",
            nameLocation: "7097:16:126",
            parameters: {
              id: 88611,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 88610,
                  mutability: "mutable",
                  name: "_apr",
                  nameLocation: "7120:4:126",
                  nodeType: "VariableDeclaration",
                  scope: 88725,
                  src: "7114:10:126",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint8",
                    typeString: "uint8",
                  },
                  typeName: {
                    id: 88609,
                    name: "uint8",
                    nodeType: "ElementaryTypeName",
                    src: "7114:5:126",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "7113:12:126",
            },
            returnParameters: {
              id: 88612,
              nodeType: "ParameterList",
              parameters: [],
              src: "7135:0:126",
            },
            scope: 88726,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 88144,
              name: "HyperdriveTest",
              nameLocations: ["368:14:126"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 120941,
              src: "368:14:126",
            },
            id: 88145,
            nodeType: "InheritanceSpecifier",
            src: "368:14:126",
          },
        ],
        canonicalName: "SandwichTest",
        contractDependencies: [13321, 92554, 92630],
        contractKind: "contract",
        fullyImplemented: true,
        linearizedBaseContracts: [
          88726, 120941, 117331, 26704, 26653, 22391, 22101, 21337, 19283,
          18563, 17031, 17097, 17094,
        ],
        name: "SandwichTest",
        nameLocation: "352:12:126",
        scope: 88727,
        usedErrors: [7088, 7090, 116815, 116817],
      },
    ],
    license: "Apache-2.0",
  },
  id: 126,
} as const;
