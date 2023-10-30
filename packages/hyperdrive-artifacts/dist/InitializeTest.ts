export const InitializeTest = {
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
      inputs: [],
      name: "test_initialize_failure",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "test_initialize_failure_not_payable",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "initialSharePrice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "checkpointDuration",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "checkpointsPerTerm",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "targetRate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "contribution",
          type: "uint256",
        },
      ],
      name: "test_initialize_success",
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
      "0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000194565b602990620000c09082620002f8565b5060405163f877cb1960e01b815260206004820152600e60248201526d11d3d154931257d49410d7d5549360921b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015a919081019062000194565b602a90620001699082620002f8565b503480156200017757600080fd5b50620003c4565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a857600080fd5b82516001600160401b0380821115620001c057600080fd5b818501915085601f830112620001d557600080fd5b815181811115620001ea57620001ea6200017e565b604051601f8201601f19908116603f011681019083821181831017156200021557620002156200017e565b8160405282815288868487010111156200022e57600080fd5b600093505b8284101562000252578484018601518185018701529285019262000233565b600086848301015280965050505050505092915050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f357600081815260208120601f850160051c81016020861015620002ce5750805b601f850160051c820191505b81811015620002ef57828155600101620002da565b5050505b505050565b81516001600160401b038111156200031457620003146200017e565b6200032c8162000325845462000269565b84620002a5565b602080601f8311600181146200036457600084156200034b5750858301515b600019600386901b1c1916600185901b178555620002ef565b600085815260208120601f198616915b82811015620003955788860151825594840194600190910190840162000374565b5085821015620003b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61fb6980620003d46000396000f3fe60806040523480156200001157600080fd5b50600436106200012d5760003560e01c806366d9a9a011620000af578063ab75e7c3116200007a578063ab75e7c31462000243578063b5508aa9146200025a578063ba414fa61462000264578063e20c9f71146200027f578063fa7626d4146200028957600080fd5b806366d9a9a014620001f057806385226c811462000209578063916a17c61462000222578063a80fb9bc146200022c57600080fd5b80633e5e0d2611620000fc5780633e5e0d26146200018b5780633e5e3c2314620001a25780633f7286f414620001ac578063421c5d8e14620001b6578063507ffba514620001c057600080fd5b80630a9254e4146200013257806310716760146200013e5780631ed7831c146200016857806336ddd5801462000181575b600080fd5b6200013c62000297565b005b620001556200014f36600462003b3b565b6200030a565b6040519081526020015b60405180910390f35b6200017262000392565b6040516200015f919062003b8d565b6200013c620003f6565b620001556200019c36600462003bdc565b62000704565b6200017262000964565b62000172620009c6565b6200013c62000a28565b620001d7620001d136600462003d25565b62000ce5565b6040516001600160a01b0390911681526020016200015f565b620001fa62000dfb565b6040516200015f919062003dad565b6200021362000eee565b6040516200015f919062003eb8565b620001fa62000fc8565b6200013c6200023d36600462003f1e565b620010b2565b6200013c6200025436600462003f5a565b620014c1565b6200021362001802565b6200026e620018dc565b60405190151581526020016200015f565b6200017262001a09565b6007546200026e9060ff1681565b620002a162001a6b565b6000805160206200fabe83398151915260001c6001600160a01b03166341af2f526040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620002ef57600080fd5b505af115801562000304573d6000803e3d6000fd5b50505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200038a91869186918216906370a0823190602401602060405180830381865afa1580156200035d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000383919062003f87565b8562000704565b949350505050565b60606014805480602002602001604051908101604052809291908181526020018280548015620003ec57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311620003cd575b5050505050905090565b601c546706f05b59d3b2000090683635c9adc5dea000009060009062000427906001600160a01b0316848462001ed7565b601c5490915062000444906001600160a01b031682848662001f14565b601c546200045c906001600160a01b03168262002075565b50506000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620004ac57600080fd5b505af1158015620004c1573d6000803e3d6000fd5b5050601d546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b1580156200051a57600080fd5b505af11580156200052f573d6000803e3d6000fd5b5050602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b0316925063a0712d689150602401600060405180830381600087803b1580156200057e57600080fd5b505af115801562000593573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810187905261010090920416925063095ea7b391506044016020604051808303816000875af1158015620005f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000618919062003fa1565b50604051630618f58760e51b8152637983c05160e01b60048201526000805160206200fa058339815191529063c31eb0e090602401600060405180830381600087803b1580156200066857600080fd5b505af11580156200067d573d6000803e3d6000fd5b5050602c54601d54604051632002b33360e01b81526001600160a01b039283169450632002b3339350620006be928792899291169060019060040162003fc5565b6020604051808303816000875af1158015620006de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000304919062003f87565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa15801562000750573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000776919062003f87565b9050808411156200079a5760405163188c93a560e31b815260040160405180910390fd5b6000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620007e857600080fd5b505af1158015620007fd573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03891660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b1580156200085257600080fd5b505af115801562000867573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a764000060248201526000805160206200fa05833981519152925063c88a5e6d9150604401600060405180830381600087803b158015620008ca57600080fd5b505af1158015620008df573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000933573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000959919062003fa1565b509295945050505050565b60606016805480602002602001604051908101604052809291908181526020018280548015620003ec576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311620003cd575050505050905090565b60606015805480602002602001604051908101604052809291908181526020018280548015620003ec576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311620003cd575050505050905090565b604080516390c5013b60e01b815290516706f05b59d3b2000091683635c9adc5dea00000916000805160206200fa05833981519152916390c5013b91600480830192600092919082900301818387803b15801562000a8557600080fd5b505af115801562000a9a573d6000803e3d6000fd5b5050601d546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b15801562000af357600080fd5b505af115801562000b08573d6000803e3d6000fd5b5050602b5460405163140e25ad60e31b8152600481018590526101009091046001600160a01b0316925063a0712d689150602401600060405180830381600087803b15801562000b5757600080fd5b505af115801562000b6c573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810186905261010090920416925063095ea7b391506044016020604051808303816000875af115801562000bcb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bf1919062003fa1565b50604051630618f58760e51b8152631574f9f360e01b60048201526000805160206200fa058339815191529063c31eb0e090602401600060405180830381600087803b15801562000c4157600080fd5b505af115801562000c56573d6000803e3d6000fd5b5050602c54601d54604051632002b33360e01b81526001600160a01b039283169450632002b333935060019262000c9a928792899290911690859060040162003fc5565b60206040518083038185885af115801562000cb9573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062000ce0919062003f87565b505050565b60008160405160200162000cfa919062003feb565b60408051601f198184030181529082905280516020909101206318caf8e360e31b825291506000805160206200fa058339815191529063c657c7189062000d48908490869060040162004000565b600060405180830381600087803b15801562000d6357600080fd5b505af115801562000d78573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab240000060248201526000805160206200fa05833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000ddd57600080fd5b505af115801562000df2573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b8282101562000ee55760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801562000ecc57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841162000e8d5790505b5050505050815250508152602001906001019062000e1f565b50505050905090565b60606018805480602002602001604051908101604052809291908181526020016000905b8282101562000ee557838290600052602060002001805462000f349062004026565b80601f016020809104026020016040519081016040528092919081815260200182805462000f629062004026565b801562000fb35780601f1062000f875761010080835404028352916020019162000fb3565b820191906000526020600020905b81548152906001019060200180831162000f9557829003601f168201915b50505050508152602001906001019062000f12565b6060601a805480602002602001604051908101604052809291908181526020016000905b8282101562000ee55760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200109957602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116200105a5790505b5050505050815250508152602001906001019062000fec565b620010cf856706f05b59d3b20000674563918244f40000620020a8565b9450620010e08460016018620020a8565b9350620010f0610e108562004078565b9350620011028360076102da620020a8565b92506200112082662386f26fc10000670de0b6b3a7640000620020a8565b91506200114381683635c9adc5dea000006a52b7d2dcc80cd2e4000000620020a8565b905060006200115966b1a2bc2ec5000062002133565b6020810187905260a08101869052905062001175848662004078565b6080820152601c5462001192906001600160a01b031682620021f9565b601c54600090620011ae906001600160a01b0316858562001ed7565b601c54909150620011cb906001600160a01b031682858762001f14565b602c54600090620011e5906001600160a01b031662002367565b9050620011f981866402540be4006200246e565b602b54601c546040516370a0823160e01b81526001600160a01b0391821660048201526200127f926101009004909116906370a0823190602401602060405180830381865afa15801562001251573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001277919062003f87565b6000620025c7565b602b54602c546040516370a0823160e01b81526001600160a01b03918216600482015262001304926101009004909116906370a0823190602401602060405180830381865afa158015620012d7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012fd919062003f87565b85620025c7565b620013ac826200131e670de0b6b3a7640000600262004078565b602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562001373573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001399919062004092565b51620013a6919062004140565b620025c7565b602c5460405163bd85b03960e01b81526000600482015262001437918491670de0b6b3a7640000916001600160a01b03169063bd85b03990602401602060405180830381865afa15801562001405573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200142b919062003f87565b620013a6919062004140565b602c54601c54604051631b2b776160e11b8152600060048201526001600160a01b039182166024820152620014b79285921690633656eec290604401602060405180830381865afa15801562001491573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620013a6919062003f87565b5050505050505050565b60008212801590620014fb57620014f5848310156040518060600160405280603681526020016200fafe603691396200268f565b62001522565b620015228285116040518060600160405280602781526020016200fa45602791396200268f565b6000816200153157846200153d565b6200153d848662004156565b9050600082156200154f578562001566565b6200155a856200416c565b62001566908762004140565b9050808410806200157657508184115b15620015f457620015b4848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b815250620026c8565b620015ec848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002705565b505050505050565b8215620016f457600062001609878662004140565b905085811015620016c75760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a20257300000000000060208201526200165f9062001659838962004140565b62002742565b620016906040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200278b565b620016c16040518060400160405280600d81526020016c4e65772044656c74613a20257360981b8152508262002742565b620016ed565b620016ed83866040518060600160405280602981526020016200fa6c60299139620027d4565b50620015ec565b600062001702858862004140565b90506200170f866200416c565b811015620017d3576200176a6040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200175e906200416c565b62001659919062004140565b6200179b6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200278b565b620017cd6040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b8152508262002742565b620017f9565b620017f982866040518060600160405280602981526020016200fa9560299139620027d4565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b8282101562000ee5578382906000526020600020018054620018489062004026565b80601f0160208091040260200160405190810160405280929190818152602001828054620018769062004026565b8015620018c75780601f106200189b57610100808354040283529160200191620018c7565b820191906000526020600020905b815481529060010190602001808311620018a957829003601f168201915b50505050508152602001906001019062001826565b600754600090610100900460ff1615620018ff5750600754610100900460ff1690565b60006000805160206200fa058339815191523b1562001a0457604080516000805160206200fa05833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001986917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc4916080016200418b565b60408051601f1981840301815290829052620019a291620041be565b6000604051808303816000865af19150503d8060008114620019e1576040519150601f19603f3d011682016040523d82523d6000602084013e620019e6565b606091505b509150508080602001905181019062001a00919062003fa1565b9150505b919050565b60606013805480602002602001604051908101604052809291908181526020018280548015620003ec576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311620003cd575050505050905090565b62001a7562002810565b601c546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa05833981519152906306447d5690602401600060405180830381600087803b15801562001aca57600080fd5b505af115801562001adf573d6000803e3d6000fd5b50505050601260008060405162001af69062003a5c565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f08015801562001b6c573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e13380815260200162015180815260200162001c3a8462002af0565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a09092019190915251909150600090829062001c8a9062003a6a565b62001c96919062004297565b604051809103906000f08015801562001cb3573d6000803e3d6000fd5b509050818160405162001cc69062003a78565b62001cd3929190620042a8565b604051809103906000f08015801562001cf0573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001d6557600080fd5b505af115801562001d7a573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa0583398151915293506306447d56925001600060405180830381600087803b15801562001dd257600080fd5b505af115801562001de7573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b15801562001e3c57600080fd5b505af115801562001e51573d6000803e3d6000fd5b5050602b5460ff169150620003049050576000805160206200fa0583398151915263e5d6bf0262001e886301e13380600362004078565b6040518263ffffffff1660e01b815260040162001ea791815260200190565b600060405180830381600087803b15801562001ec257600080fd5b505af1158015620014b7573d6000803e3d6000fd5b60006200038a8484846040518060a00160405280600115158152602001878152602001600081526020016000815260200160001981525062002b44565b600062001fbf7f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e6000805160206200fabe83398151915260001c6001600160a01b031663191553a46040518163ffffffff1660e01b81526004016000604051808303816000875af115801562001f8e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262001fb8919081019062004352565b9062002eb8565b905062001fcf81516001620025c7565b60008160008151811062001fe75762001fe7620044d9565b602002602001015190506200202181600001516001815181106200200f576200200f620044d9565b602002602001015160001c8762002fe8565b60008060008360200151806020019051810190620020409190620044ef565b925092509250620020528389620025c7565b6200205e8288620025c7565b6200206a8187620025c7565b505050505050505050565b6000806200209d848460405180604001604052806001151581526020016000815250620030d1565b915091509250929050565b600081831115620020f05760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b604482015260640160405180910390fd5b6000620020fe848462004140565b6200210b90600162004156565b905060006200211b828762004534565b905062002129858262004156565b9695505050505050565b6200213d62003a86565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c08101620021ba8562002af0565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b6000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200224757600080fd5b505af11580156200225c573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03851660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b158015620022b157600080fd5b505af1158015620022c6573d6000803e3d6000fd5b50505050600081604051620022db9062003a6a565b620022e7919062004297565b604051809103906000f08015801562002304573d6000803e3d6000fd5b5090508181604051620023179062003a78565b62002324929190620042a8565b604051809103906000f08015801562002341573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620023aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620023d0919062004588565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002414573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200243a919062004092565b90506200038a620024548260000151836020015162003232565b8260400151846020015185608001518660c0015162003252565b60006200247c8484620032a0565b90508181111562000304576000805160206200f9e5833981519152604051620024e19060208082526022908201527f4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16000805160206200fade833981519152846040516200250991906200464a565b60405180910390a16000805160206200fade8339815191528360405162002531919062004683565b60405180910390a160408051818152600a8183015269204d61782044656c746160b01b60608201526020810184905290516000805160206200fade8339815191529181900360800190a160408051818152600a8183015269202020202044656c746160b01b60608201526020810183905290516000805160206200fade8339815191529181900360800190a162000304620032c8565b8082146200268b576000805160206200f9e5833981519152604051620026299060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16000805160206200fade833981519152826040516200265191906200464a565b60405180910390a16000805160206200fade8339815191528160405162002679919062004683565b60405180910390a16200268b620032c8565b5050565b816200268b576000805160206200fa2583398151915281604051620026b59190620046ae565b60405180910390a16200268b82620033d1565b8183101562000ce0576000805160206200fa2583398151915281604051620026f19190620046ae565b60405180910390a162000ce083836200343b565b8183111562000ce0576000805160206200fa25833981519152816040516200272e9190620046ae565b60405180910390a162000ce083836200352a565b6200268b82826040516024016200275b929190620046df565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526200358d565b6200268b8282604051602401620027a4929190620046df565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b1790526200358d565b81831462000ce0576000805160206200fa2583398151915281604051620027fc9190620046ae565b60405180910390a162000ce08383620025c7565b6200283860405180604001604052806005815260200164616c69636560d81b81525062000ce5565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b60208201526200287d9062000ce5565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b6020820152620028c59062000ce5565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b60208201526200290a9062000ce5565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b60208201526200294f9062000ce5565b602060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550620029a0604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000ce5565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b6020820152620029e89062000ce5565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b602082015262002a369062000ce5565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b602082015262002a829062000ce5565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b602082015262002aca9062000ce5565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b60008062002b2762002b1762002b0885606462004078565b66a5bbed86c5a0009062003598565b6748cd4072281e000090620035af565b905062002b3d670de0b6b3a764000082620035af565b9392505050565b60006000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002b9457600080fd5b505af115801562002ba9573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b15801562002bfe57600080fd5b505af115801562002c13573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002c78573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c9e919062004588565b516001600160a01b031614801562002cb4575081515b1562002d4757602c5460208301518351604051632002b33360e01b81526001600160a01b0390931692632002b333929162002cf99188918a918c919060040162003fc5565b60206040518083038185885af115801562002d18573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002d3f919062003f87565b90506200038a565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002d9857600080fd5b505af115801562002dad573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002e12573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e38919062003fa1565b50602c548251604051632002b33360e01b81526001600160a01b0390921691632002b3339162002e7291879189918b919060040162003fc5565b6020604051808303816000875af115801562002e92573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d3f919062003f87565b60606000835167ffffffffffffffff81111562002ed95762002ed962003c36565b60405190808252806020026020018201604052801562002f2857816020015b6040805160608082018352808252602082015260009181019190915281526020019060019003908162002ef85790505b50915060005b845181101562002fde578385828151811062002f4e5762002f4e620044d9565b60200260200101516000015160008151811062002f6f5762002f6f620044d9565b60200260200101510362002fc95784818151811062002f925762002f92620044d9565b602002602001015183838062002fa89062004703565b94508151811062002fbd5762002fbd620044d9565b60200260200101819052505b8062002fd58162004703565b91505062002f2e565b5081525b92915050565b806001600160a01b0316826001600160a01b0316146200268b576000805160206200f9e58339815191526040516200305f9060208082526025908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b616464604082015264726573735d60d81b606082015260800190565b60405180910390a17f9c4e8541ca8f0dc1c413f9108f66d82d3cecb1bddbce437a61caa3175c4cc96f826040516200309891906200471f565b60405180910390a17f9c4e8541ca8f0dc1c413f9108f66d82d3cecb1bddbce437a61caa3175c4cc96f8160405162002679919062004764565b6000806000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200312257600080fd5b505af115801562003137573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b1580156200318c57600080fd5b505af1158015620031a1573d6000803e3d6000fd5b5050602c546020860151865160405163c23632a760e01b81526001600160a01b03909316945063c23632a79350620031e1928992918b9160040162003fc5565b60408051808303816000875af115801562003200573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200322691906200478f565b91509150935093915050565b600080620032418385620047b4565b9050600081121562002b3d57600080fd5b6000806200326387878786620035c6565b9050620032956200327a82866301e13380620035ea565b6200328e83670de0b6b3a764000062004140565b90620035af565b979650505050505050565b6000818311620032bc57620032b6838362004140565b62002b3d565b62002b3d828462004140565b6000805160206200fa058339815191523b15620033c057604080516000805160206200fa05833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f19818403018152908290526200335b92916020016200418b565b60408051601f19818403018152908290526200337791620041be565b6000604051808303816000865af19150503d8060008114620033b6576040519150601f19603f3d011682016040523d82523d6000602084013e620033bb565b606091505b505050505b6007805461ff001916610100179055565b8062003438576000805160206200f9e5833981519152604051620034269060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a162003438620032c8565b50565b808210156200268b576000805160206200f9e58339815191526040516200349e9060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b60608201526020810184905290516000805160206200fade8339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b6060820152602081018290526000805160206200fade8339815191529060800162002679565b808211156200268b576000805160206200f9e58339815191526040516200349e9060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620034388162003611565b600062002b3d8383670de0b6b3a764000062003632565b600062002b3d83670de0b6b3a76400008462003632565b6000620035e182620035da85888862003632565b9062003651565b95945050505050565b60008260001904841183021582026200360257600080fd5b50910281810615159190040190565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008260001904841183021582026200364a57600080fd5b5091020490565b6000816000036200366c5750670de0b6b3a764000062002fe2565b826000036200367e5750600062002fe2565b8160006200368c85620036b2565b9050818102620036a5670de0b6b3a764000082620047de565b90506200212981620038cf565b6000808213620036d557604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213620038eb57506000919050565b680755bf798b4a1bf1e58212620039155760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611daa806200481383390190565b6125b180620065bd83390190565b616e778062008b6e83390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200162003b1160405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b6001600160a01b03811681146200343857600080fd5b60008060006060848603121562003b5157600080fd5b833562003b5e8162003b25565b9250602084013562003b708162003b25565b9150604084013562003b828162003b25565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b8181101562003bd05783516001600160a01b03168352928401929184019160010162003ba9565b50909695505050505050565b6000806000806080858703121562003bf357600080fd5b843562003c008162003b25565b9350602085013562003c128162003b25565b925060408501359150606085013562003c2b8162003b25565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff8111828210171562003c735762003c7362003c36565b60405290565b6040516060810167ffffffffffffffff8111828210171562003c735762003c7362003c36565b604051610180810167ffffffffffffffff8111828210171562003c735762003c7362003c36565b604051601f8201601f1916810167ffffffffffffffff8111828210171562003cf25762003cf262003c36565b604052919050565b600067ffffffffffffffff82111562003d175762003d1762003c36565b50601f01601f191660200190565b60006020828403121562003d3857600080fd5b813567ffffffffffffffff81111562003d5057600080fd5b8201601f8101841362003d6257600080fd5b803562003d7962003d738262003cfa565b62003cc6565b81815285602083850101111562003d8f57600080fd5b81602084016020830137600091810160200191909152949350505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101562003e5557898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101562003e3f5783516001600160e01b0319168252928b019260019290920191908b019062003e13565b50978a0197955050509187019160010162003dd5565b50919998505050505050505050565b60005b8381101562003e8157818101518382015260200162003e67565b50506000910152565b6000815180845262003ea481602086016020860162003e64565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101562003f1157603f1988860301845262003efe85835162003e8a565b9450928501929085019060010162003edf565b5092979650505050505050565b600080600080600060a0868803121562003f3757600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060006060848603121562003f7057600080fd5b505081359360208301359350604090920135919050565b60006020828403121562003f9a57600080fd5b5051919050565b60006020828403121562003fb457600080fd5b8151801515811462002b3d57600080fd5b93845260208401929092526001600160a01b031660408301521515606082015260800190565b60208152600062002b3d602083018462003e8a565b6001600160a01b03831681526040602082018190526000906200038a9083018462003e8a565b600181811c908216806200403b57607f821691505b6020821081036200405c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141762002fe25762002fe262004062565b60006101a08284031215620040a657600080fd5b620040b062003c4c565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b8181038181111562002fe25762002fe262004062565b8082018082111562002fe25762002fe262004062565b6000600160ff1b820162004184576200418462004062565b5060000390565b6001600160e01b0319831681528151600090620041b081600485016020870162003e64565b919091016004019392505050565b60008251620041d281846020870162003e64565b9190910192915050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e08101516200424060e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002fe28284620041dc565b6101e08101620042b98285620041dc565b6001600160a01b03929092166101c09190910152919050565b600067ffffffffffffffff821115620042ef57620042ef62003c36565b5060051b60200190565b600082601f8301126200430b57600080fd5b81516200431c62003d738262003cfa565b8181528460208386010111156200433257600080fd5b6200038a82602083016020870162003e64565b805162001a048162003b25565b600060208083850312156200436657600080fd5b825167ffffffffffffffff808211156200437f57600080fd5b818501915085601f8301126200439457600080fd5b8151620043a562003d7382620042d2565b81815260059190911b83018401908481019088831115620043c557600080fd5b8585015b83811015620044cc57805185811115620043e257600080fd5b86016060818c03601f19011215620043f957600080fd5b6200440362003c79565b88820151878111156200441557600080fd5b8201603f81018d136200442757600080fd5b898101516200443a62003d7382620042d2565b81815260059190911b8201604001908b8101908f8311156200445b57600080fd5b6040840193505b828410156200447d5783518252928c0192908c019062004462565b84525050506040820151878111156200449557600080fd5b620044a58d8b83860101620042f9565b8a83015250620044b86060830162004345565b6040820152845250918601918601620043c9565b5098975050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000806000606084860312156200450557600080fd5b8351925060208401519150604084015190509250925092565b634e487b7160e01b600052601260045260246000fd5b6000826200454657620045466200451e565b500690565b6000606082840312156200455e57600080fd5b6200456862003c79565b905081518152602082015160208201526040820151604082015292915050565b60006101c082840312156200459c57600080fd5b620045a662003c9f565b620045b18362004345565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620045fd60e0840162004345565b60e08201526101006200461281850162004345565b9082015261012062004627858583016200454b565b908201526101808301516101408201526101a09092015161016083015250919050565b6040815260006200467560408301600a8152690808080808081319599d60b21b602082015260400190565b905082602083015292915050565b6040815260006200467560408301600a8152690808080808149a59da1d60b21b602082015260400190565b60408152600560408201526422b93937b960d91b606082015260806020820152600062002b3d608083018462003e8a565b604081526000620046f4604083018562003e8a565b90508260208301529392505050565b60006001820162004718576200471862004062565b5060010190565b6040815260006200474a60408301600a8152690808080808081319599d60b21b602082015260400190565b6001600160a01b0393909316602092909201919091525090565b6040815260006200474a60408301600a8152690808080808149a59da1d60b21b602082015260400190565b60008060408385031215620047a357600080fd5b505080516020909101519092909150565b8181036000831280158383131683831282161715620047d757620047d762004062565b5092915050565b600082620047f057620047f06200451e565b600160ff1b8214600019841416156200480d576200480d62004062565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a26469706673582212205dd3a3700e4490b728738fa0c6a7b52c1ca19eef64e421b08c8a6ef89f97bd5f64736f6c63430008130033",
    sourceMap:
      "522:4439:147:-:0;;;;;1572:26:50;;;1594:4;-1:-1:-1;;1572:26:50;;;;;;;;3126:44:54;;;;;;;;;;;-1:-1:-1;;;1262:31:159;;216:2:165;1262:31:159;198:21:165;255:2;235:18;228:30;-1:-1:-1;;;274:18:165;267:45;1262:12:159;;329:18:165;1262:31:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1262:31:159;;;;;;;;;;;;:::i;:::-;1237:56;;;;;;:::i;:::-;-1:-1:-1;1323:30:159;;-1:-1:-1;;;1323:30:159;;4328:2:165;1323:30:159;;;4310:21:165;4367:2;4347:18;;;4340:30;-1:-1:-1;;;4386:18:165;;;4379:44;1323:12:159;;;;4440:18:165;;1323:30:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1323:30:159;;;;;;;;;;;;:::i;:::-;1299:54;;;;;;:::i;:::-;;522:4439:147;;;;;;;;;;;;358:127:165;419:10;414:3;410:20;407:1;400:31;450:4;447:1;440:15;474:4;471:1;464:15;490:1042;570:6;601:2;644;632:9;623:7;619:23;615:32;612:52;;;660:1;657;650:12;612:52;687:16;;-1:-1:-1;;;;;752:14:165;;;749:34;;;779:1;776;769:12;749:34;817:6;806:9;802:22;792:32;;862:7;855:4;851:2;847:13;843:27;833:55;;884:1;881;874:12;833:55;913:2;907:9;935:2;931;928:10;925:36;;;941:18;;:::i;:::-;1016:2;1010:9;984:2;1070:13;;-1:-1:-1;;1066:22:165;;;1090:2;1062:31;1058:40;1046:53;;;1114:18;;;1134:22;;;1111:46;1108:72;;;1160:18;;:::i;:::-;1200:10;1196:2;1189:22;1235:2;1227:6;1220:18;1275:7;1270:2;1265;1261;1257:11;1253:20;1250:33;1247:53;;;1296:1;1293;1286:12;1247:53;1318:1;1309:10;;1328:129;1342:2;1339:1;1336:9;1328:129;;;1430:10;;;1426:19;;1420:26;1399:14;;;1395:23;;1388:59;1353:10;;;;1328:129;;;1499:1;1494:2;1489;1481:6;1477:15;1473:24;1466:35;1520:6;1510:16;;;;;;;;490:1042;;;;:::o;1537:380::-;1616:1;1612:12;;;;1659;;;1680:61;;1734:4;1726:6;1722:17;1712:27;;1680:61;1787:2;1779:6;1776:14;1756:18;1753:38;1750:161;;1833:10;1828:3;1824:20;1821:1;1814:31;1868:4;1865:1;1858:15;1896:4;1893:1;1886:15;1750:161;;1537:380;;;:::o;2048:545::-;2150:2;2145:3;2142:11;2139:448;;;2186:1;2211:5;2207:2;2200:17;2256:4;2252:2;2242:19;2326:2;2314:10;2310:19;2307:1;2303:27;2297:4;2293:38;2362:4;2350:10;2347:20;2344:47;;;-1:-1:-1;2385:4:165;2344:47;2440:2;2435:3;2431:12;2428:1;2424:20;2418:4;2414:31;2404:41;;2495:82;2513:2;2506:5;2503:13;2495:82;;;2558:17;;;2539:1;2528:13;2495:82;;;2499:3;;;2139:448;2048:545;;;:::o;2769:1352::-;2889:10;;-1:-1:-1;;;;;2911:30:165;;2908:56;;;2944:18;;:::i;:::-;2973:97;3063:6;3023:38;3055:4;3049:11;3023:38;:::i;:::-;3017:4;2973:97;:::i;:::-;3125:4;;3189:2;3178:14;;3206:1;3201:663;;;;3908:1;3925:6;3922:89;;;-1:-1:-1;3977:19:165;;;3971:26;3922:89;-1:-1:-1;;2726:1:165;2722:11;;;2718:24;2714:29;2704:40;2750:1;2746:11;;;2701:57;4024:81;;3171:944;;3201:663;1995:1;1988:14;;;2032:4;2019:18;;-1:-1:-1;;3237:20:165;;;3355:236;3369:7;3366:1;3363:14;3355:236;;;3458:19;;;3452:26;3437:42;;3550:27;;;;3518:1;3506:14;;;;3385:19;;3355:236;;;3359:3;3619:6;3610:7;3607:19;3604:201;;;3680:19;;;3674:26;-1:-1:-1;;3763:1:165;3759:14;;;3775:3;3755:24;3751:37;3747:42;3732:58;3717:74;;3604:201;-1:-1:-1;;;;;3851:1:165;3835:14;;;3831:22;3818:36;;-1:-1:-1;2769:1352:165:o;4126:338::-;522:4439:147;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60806040523480156200001157600080fd5b50600436106200012d5760003560e01c806366d9a9a011620000af578063ab75e7c3116200007a578063ab75e7c31462000243578063b5508aa9146200025a578063ba414fa61462000264578063e20c9f71146200027f578063fa7626d4146200028957600080fd5b806366d9a9a014620001f057806385226c811462000209578063916a17c61462000222578063a80fb9bc146200022c57600080fd5b80633e5e0d2611620000fc5780633e5e0d26146200018b5780633e5e3c2314620001a25780633f7286f414620001ac578063421c5d8e14620001b6578063507ffba514620001c057600080fd5b80630a9254e4146200013257806310716760146200013e5780631ed7831c146200016857806336ddd5801462000181575b600080fd5b6200013c62000297565b005b620001556200014f36600462003b3b565b6200030a565b6040519081526020015b60405180910390f35b6200017262000392565b6040516200015f919062003b8d565b6200013c620003f6565b620001556200019c36600462003bdc565b62000704565b6200017262000964565b62000172620009c6565b6200013c62000a28565b620001d7620001d136600462003d25565b62000ce5565b6040516001600160a01b0390911681526020016200015f565b620001fa62000dfb565b6040516200015f919062003dad565b6200021362000eee565b6040516200015f919062003eb8565b620001fa62000fc8565b6200013c6200023d36600462003f1e565b620010b2565b6200013c6200025436600462003f5a565b620014c1565b6200021362001802565b6200026e620018dc565b60405190151581526020016200015f565b6200017262001a09565b6007546200026e9060ff1681565b620002a162001a6b565b6000805160206200fabe83398151915260001c6001600160a01b03166341af2f526040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620002ef57600080fd5b505af115801562000304573d6000803e3d6000fd5b50505050565b6040516370a0823160e01b81526001600160a01b0380851660048301526000916200038a91869186918216906370a0823190602401602060405180830381865afa1580156200035d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000383919062003f87565b8562000704565b949350505050565b60606014805480602002602001604051908101604052809291908181526020018280548015620003ec57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311620003cd575b5050505050905090565b601c546706f05b59d3b2000090683635c9adc5dea000009060009062000427906001600160a01b0316848462001ed7565b601c5490915062000444906001600160a01b031682848662001f14565b601c546200045c906001600160a01b03168262002075565b50506000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620004ac57600080fd5b505af1158015620004c1573d6000803e3d6000fd5b5050601d546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b1580156200051a57600080fd5b505af11580156200052f573d6000803e3d6000fd5b5050602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b0316925063a0712d689150602401600060405180830381600087803b1580156200057e57600080fd5b505af115801562000593573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810187905261010090920416925063095ea7b391506044016020604051808303816000875af1158015620005f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000618919062003fa1565b50604051630618f58760e51b8152637983c05160e01b60048201526000805160206200fa058339815191529063c31eb0e090602401600060405180830381600087803b1580156200066857600080fd5b505af11580156200067d573d6000803e3d6000fd5b5050602c54601d54604051632002b33360e01b81526001600160a01b039283169450632002b3339350620006be928792899291169060019060040162003fc5565b6020604051808303816000875af1158015620006de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000304919062003f87565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa15801562000750573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000776919062003f87565b9050808411156200079a5760405163188c93a560e31b815260040160405180910390fd5b6000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620007e857600080fd5b505af1158015620007fd573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03891660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b1580156200085257600080fd5b505af115801562000867573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a764000060248201526000805160206200fa05833981519152925063c88a5e6d9150604401600060405180830381600087803b158015620008ca57600080fd5b505af1158015620008df573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000933573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000959919062003fa1565b509295945050505050565b60606016805480602002602001604051908101604052809291908181526020018280548015620003ec576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311620003cd575050505050905090565b60606015805480602002602001604051908101604052809291908181526020018280548015620003ec576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311620003cd575050505050905090565b604080516390c5013b60e01b815290516706f05b59d3b2000091683635c9adc5dea00000916000805160206200fa05833981519152916390c5013b91600480830192600092919082900301818387803b15801562000a8557600080fd5b505af115801562000a9a573d6000803e3d6000fd5b5050601d546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b15801562000af357600080fd5b505af115801562000b08573d6000803e3d6000fd5b5050602b5460405163140e25ad60e31b8152600481018590526101009091046001600160a01b0316925063a0712d689150602401600060405180830381600087803b15801562000b5757600080fd5b505af115801562000b6c573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810186905261010090920416925063095ea7b391506044016020604051808303816000875af115801562000bcb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bf1919062003fa1565b50604051630618f58760e51b8152631574f9f360e01b60048201526000805160206200fa058339815191529063c31eb0e090602401600060405180830381600087803b15801562000c4157600080fd5b505af115801562000c56573d6000803e3d6000fd5b5050602c54601d54604051632002b33360e01b81526001600160a01b039283169450632002b333935060019262000c9a928792899290911690859060040162003fc5565b60206040518083038185885af115801562000cb9573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062000ce0919062003f87565b505050565b60008160405160200162000cfa919062003feb565b60408051601f198184030181529082905280516020909101206318caf8e360e31b825291506000805160206200fa058339815191529063c657c7189062000d48908490869060040162004000565b600060405180830381600087803b15801562000d6357600080fd5b505af115801562000d78573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab240000060248201526000805160206200fa05833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000ddd57600080fd5b505af115801562000df2573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b8282101562000ee55760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801562000ecc57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841162000e8d5790505b5050505050815250508152602001906001019062000e1f565b50505050905090565b60606018805480602002602001604051908101604052809291908181526020016000905b8282101562000ee557838290600052602060002001805462000f349062004026565b80601f016020809104026020016040519081016040528092919081815260200182805462000f629062004026565b801562000fb35780601f1062000f875761010080835404028352916020019162000fb3565b820191906000526020600020905b81548152906001019060200180831162000f9557829003601f168201915b50505050508152602001906001019062000f12565b6060601a805480602002602001604051908101604052809291908181526020016000905b8282101562000ee55760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200109957602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116200105a5790505b5050505050815250508152602001906001019062000fec565b620010cf856706f05b59d3b20000674563918244f40000620020a8565b9450620010e08460016018620020a8565b9350620010f0610e108562004078565b9350620011028360076102da620020a8565b92506200112082662386f26fc10000670de0b6b3a7640000620020a8565b91506200114381683635c9adc5dea000006a52b7d2dcc80cd2e4000000620020a8565b905060006200115966b1a2bc2ec5000062002133565b6020810187905260a08101869052905062001175848662004078565b6080820152601c5462001192906001600160a01b031682620021f9565b601c54600090620011ae906001600160a01b0316858562001ed7565b601c54909150620011cb906001600160a01b031682858762001f14565b602c54600090620011e5906001600160a01b031662002367565b9050620011f981866402540be4006200246e565b602b54601c546040516370a0823160e01b81526001600160a01b0391821660048201526200127f926101009004909116906370a0823190602401602060405180830381865afa15801562001251573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001277919062003f87565b6000620025c7565b602b54602c546040516370a0823160e01b81526001600160a01b03918216600482015262001304926101009004909116906370a0823190602401602060405180830381865afa158015620012d7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012fd919062003f87565b85620025c7565b620013ac826200131e670de0b6b3a7640000600262004078565b602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562001373573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001399919062004092565b51620013a6919062004140565b620025c7565b602c5460405163bd85b03960e01b81526000600482015262001437918491670de0b6b3a7640000916001600160a01b03169063bd85b03990602401602060405180830381865afa15801562001405573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200142b919062003f87565b620013a6919062004140565b602c54601c54604051631b2b776160e11b8152600060048201526001600160a01b039182166024820152620014b79285921690633656eec290604401602060405180830381865afa15801562001491573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620013a6919062003f87565b5050505050505050565b60008212801590620014fb57620014f5848310156040518060600160405280603681526020016200fafe603691396200268f565b62001522565b620015228285116040518060600160405280602781526020016200fa45602791396200268f565b6000816200153157846200153d565b6200153d848662004156565b9050600082156200154f578562001566565b6200155a856200416c565b62001566908762004140565b9050808410806200157657508184115b15620015f457620015b4848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b815250620026c8565b620015ec848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b81525062002705565b505050505050565b8215620016f457600062001609878662004140565b905085811015620016c75760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a20257300000000000060208201526200165f9062001659838962004140565b62002742565b620016906040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200278b565b620016c16040518060400160405280600d81526020016c4e65772044656c74613a20257360981b8152508262002742565b620016ed565b620016ed83866040518060600160405280602981526020016200fa6c60299139620027d4565b50620015ec565b600062001702858862004140565b90506200170f866200416c565b811015620017d3576200176a6040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a20257300000000000081525082886200175e906200416c565b62001659919062004140565b6200179b6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b815250876200278b565b620017cd6040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b8152508262002742565b620017f9565b620017f982866040518060600160405280602981526020016200fa9560299139620027d4565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b8282101562000ee5578382906000526020600020018054620018489062004026565b80601f0160208091040260200160405190810160405280929190818152602001828054620018769062004026565b8015620018c75780601f106200189b57610100808354040283529160200191620018c7565b820191906000526020600020905b815481529060010190602001808311620018a957829003601f168201915b50505050508152602001906001019062001826565b600754600090610100900460ff1615620018ff5750600754610100900460ff1690565b60006000805160206200fa058339815191523b1562001a0457604080516000805160206200fa05833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001986917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc4916080016200418b565b60408051601f1981840301815290829052620019a291620041be565b6000604051808303816000865af19150503d8060008114620019e1576040519150601f19603f3d011682016040523d82523d6000602084013e620019e6565b606091505b509150508080602001905181019062001a00919062003fa1565b9150505b919050565b60606013805480602002602001604051908101604052809291908181526020018280548015620003ec576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311620003cd575050505050905090565b62001a7562002810565b601c546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa05833981519152906306447d5690602401600060405180830381600087803b15801562001aca57600080fd5b505af115801562001adf573d6000803e3d6000fd5b50505050601260008060405162001af69062003a5c565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f08015801562001b6c573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e13380815260200162015180815260200162001c3a8462002af0565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a09092019190915251909150600090829062001c8a9062003a6a565b62001c96919062004297565b604051809103906000f08015801562001cb3573d6000803e3d6000fd5b509050818160405162001cc69062003a78565b62001cd3929190620042a8565b604051809103906000f08015801562001cf0573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562001d6557600080fd5b505af115801562001d7a573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fa0583398151915293506306447d56925001600060405180830381600087803b15801562001dd257600080fd5b505af115801562001de7573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b15801562001e3c57600080fd5b505af115801562001e51573d6000803e3d6000fd5b5050602b5460ff169150620003049050576000805160206200fa0583398151915263e5d6bf0262001e886301e13380600362004078565b6040518263ffffffff1660e01b815260040162001ea791815260200190565b600060405180830381600087803b15801562001ec257600080fd5b505af1158015620014b7573d6000803e3d6000fd5b60006200038a8484846040518060a00160405280600115158152602001878152602001600081526020016000815260200160001981525062002b44565b600062001fbf7f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e6000805160206200fabe83398151915260001c6001600160a01b031663191553a46040518163ffffffff1660e01b81526004016000604051808303816000875af115801562001f8e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262001fb8919081019062004352565b9062002eb8565b905062001fcf81516001620025c7565b60008160008151811062001fe75762001fe7620044d9565b602002602001015190506200202181600001516001815181106200200f576200200f620044d9565b602002602001015160001c8762002fe8565b60008060008360200151806020019051810190620020409190620044ef565b925092509250620020528389620025c7565b6200205e8288620025c7565b6200206a8187620025c7565b505050505050505050565b6000806200209d848460405180604001604052806001151581526020016000815250620030d1565b915091509250929050565b600081831115620020f05760405162461bcd60e51b815260206004820152600e60248201526d098d2c47440dad2dc407c40dac2f60931b604482015260640160405180910390fd5b6000620020fe848462004140565b6200210b90600162004156565b905060006200211b828762004534565b905062002129858262004156565b9695505050505050565b6200213d62003a86565b60408051606080820183526000808352602080840182905283850191909152835161018081018552602b5461010090046001600160a01b03168152670de0b6b3a76400009181018290529384015266038d7ea4c68000908301526301e1338060808301526201518060a08301529060c08101620021ba8562002af0565b81526024546001600160a01b0390811660208301526023541660408201526060810192909252600560808301526103e860a09092019190915292915050565b6000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200224757600080fd5b505af11580156200225c573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03851660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b158015620022b157600080fd5b505af1158015620022c6573d6000803e3d6000fd5b50505050600081604051620022db9062003a6a565b620022e7919062004297565b604051809103906000f08015801562002304573d6000803e3d6000fd5b5090508181604051620023179062003a78565b62002324929190620042a8565b604051809103906000f08015801562002341573d6000803e3d6000fd5b50602c80546001600160a01b0319166001600160a01b0392909216919091179055505050565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620023aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620023d0919062004588565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002414573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200243a919062004092565b90506200038a620024548260000151836020015162003232565b8260400151846020015185608001518660c0015162003252565b60006200247c8484620032a0565b90508181111562000304576000805160206200f9e5833981519152604051620024e19060208082526022908201527f4572726f723a2061207e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16000805160206200fade833981519152846040516200250991906200464a565b60405180910390a16000805160206200fade8339815191528360405162002531919062004683565b60405180910390a160408051818152600a8183015269204d61782044656c746160b01b60608201526020810184905290516000805160206200fade8339815191529181900360800190a160408051818152600a8183015269202020202044656c746160b01b60608201526020810183905290516000805160206200fade8339815191529181900360800190a162000304620032c8565b8082146200268b576000805160206200f9e5833981519152604051620026299060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16000805160206200fade833981519152826040516200265191906200464a565b60405180910390a16000805160206200fade8339815191528160405162002679919062004683565b60405180910390a16200268b620032c8565b5050565b816200268b576000805160206200fa2583398151915281604051620026b59190620046ae565b60405180910390a16200268b82620033d1565b8183101562000ce0576000805160206200fa2583398151915281604051620026f19190620046ae565b60405180910390a162000ce083836200343b565b8183111562000ce0576000805160206200fa25833981519152816040516200272e9190620046ae565b60405180910390a162000ce083836200352a565b6200268b82826040516024016200275b929190620046df565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526200358d565b6200268b8282604051602401620027a4929190620046df565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b1790526200358d565b81831462000ce0576000805160206200fa2583398151915281604051620027fc9190620046ae565b60405180910390a162000ce08383620025c7565b6200283860405180604001604052806005815260200164616c69636560d81b81525062000ce5565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b60208201526200287d9062000ce5565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b6020820152620028c59062000ce5565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b60208201526200290a9062000ce5565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b60208201526200294f9062000ce5565b602060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550620029a0604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000ce5565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b6020820152620029e89062000ce5565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b602082015262002a369062000ce5565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b602082015262002a829062000ce5565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b602082015262002aca9062000ce5565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b60008062002b2762002b1762002b0885606462004078565b66a5bbed86c5a0009062003598565b6748cd4072281e000090620035af565b905062002b3d670de0b6b3a764000082620035af565b9392505050565b60006000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002b9457600080fd5b505af115801562002ba9573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b15801562002bfe57600080fd5b505af115801562002c13573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002c78573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002c9e919062004588565b516001600160a01b031614801562002cb4575081515b1562002d4757602c5460208301518351604051632002b33360e01b81526001600160a01b0390931692632002b333929162002cf99188918a918c919060040162003fc5565b60206040518083038185885af115801562002d18573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002d3f919062003f87565b90506200038a565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002d9857600080fd5b505af115801562002dad573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002e12573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002e38919062003fa1565b50602c548251604051632002b33360e01b81526001600160a01b0390921691632002b3339162002e7291879189918b919060040162003fc5565b6020604051808303816000875af115801562002e92573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d3f919062003f87565b60606000835167ffffffffffffffff81111562002ed95762002ed962003c36565b60405190808252806020026020018201604052801562002f2857816020015b6040805160608082018352808252602082015260009181019190915281526020019060019003908162002ef85790505b50915060005b845181101562002fde578385828151811062002f4e5762002f4e620044d9565b60200260200101516000015160008151811062002f6f5762002f6f620044d9565b60200260200101510362002fc95784818151811062002f925762002f92620044d9565b602002602001015183838062002fa89062004703565b94508151811062002fbd5762002fbd620044d9565b60200260200101819052505b8062002fd58162004703565b91505062002f2e565b5081525b92915050565b806001600160a01b0316826001600160a01b0316146200268b576000805160206200f9e58339815191526040516200305f9060208082526025908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b616464604082015264726573735d60d81b606082015260800190565b60405180910390a17f9c4e8541ca8f0dc1c413f9108f66d82d3cecb1bddbce437a61caa3175c4cc96f826040516200309891906200471f565b60405180910390a17f9c4e8541ca8f0dc1c413f9108f66d82d3cecb1bddbce437a61caa3175c4cc96f8160405162002679919062004764565b6000806000805160206200fabe83398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200312257600080fd5b505af115801562003137573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fa0583398151915292506306447d569150602401600060405180830381600087803b1580156200318c57600080fd5b505af1158015620031a1573d6000803e3d6000fd5b5050602c546020860151865160405163c23632a760e01b81526001600160a01b03909316945063c23632a79350620031e1928992918b9160040162003fc5565b60408051808303816000875af115801562003200573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200322691906200478f565b91509150935093915050565b600080620032418385620047b4565b9050600081121562002b3d57600080fd5b6000806200326387878786620035c6565b9050620032956200327a82866301e13380620035ea565b6200328e83670de0b6b3a764000062004140565b90620035af565b979650505050505050565b6000818311620032bc57620032b6838362004140565b62002b3d565b62002b3d828462004140565b6000805160206200fa058339815191523b15620033c057604080516000805160206200fa05833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f19818403018152908290526200335b92916020016200418b565b60408051601f19818403018152908290526200337791620041be565b6000604051808303816000865af19150503d8060008114620033b6576040519150601f19603f3d011682016040523d82523d6000602084013e620033bb565b606091505b505050505b6007805461ff001916610100179055565b8062003438576000805160206200f9e5833981519152604051620034269060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a162003438620032c8565b50565b808210156200268b576000805160206200f9e58339815191526040516200349e9060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b60608201526020810184905290516000805160206200fade8339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b6060820152602081018290526000805160206200fade8339815191529060800162002679565b808211156200268b576000805160206200f9e58339815191526040516200349e9060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620034388162003611565b600062002b3d8383670de0b6b3a764000062003632565b600062002b3d83670de0b6b3a76400008462003632565b6000620035e182620035da85888862003632565b9062003651565b95945050505050565b60008260001904841183021582026200360257600080fd5b50910281810615159190040190565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008260001904841183021582026200364a57600080fd5b5091020490565b6000816000036200366c5750670de0b6b3a764000062002fe2565b826000036200367e5750600062002fe2565b8160006200368c85620036b2565b9050818102620036a5670de0b6b3a764000082620047de565b90506200212981620038cf565b6000808213620036d557604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213620038eb57506000919050565b680755bf798b4a1bf1e58212620039155760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611daa806200481383390190565b6125b180620065bd83390190565b616e778062008b6e83390190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200162003b1160405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b6001600160a01b03811681146200343857600080fd5b60008060006060848603121562003b5157600080fd5b833562003b5e8162003b25565b9250602084013562003b708162003b25565b9150604084013562003b828162003b25565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b8181101562003bd05783516001600160a01b03168352928401929184019160010162003ba9565b50909695505050505050565b6000806000806080858703121562003bf357600080fd5b843562003c008162003b25565b9350602085013562003c128162003b25565b925060408501359150606085013562003c2b8162003b25565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff8111828210171562003c735762003c7362003c36565b60405290565b6040516060810167ffffffffffffffff8111828210171562003c735762003c7362003c36565b604051610180810167ffffffffffffffff8111828210171562003c735762003c7362003c36565b604051601f8201601f1916810167ffffffffffffffff8111828210171562003cf25762003cf262003c36565b604052919050565b600067ffffffffffffffff82111562003d175762003d1762003c36565b50601f01601f191660200190565b60006020828403121562003d3857600080fd5b813567ffffffffffffffff81111562003d5057600080fd5b8201601f8101841362003d6257600080fd5b803562003d7962003d738262003cfa565b62003cc6565b81815285602083850101111562003d8f57600080fd5b81602084016020830137600091810160200191909152949350505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101562003e5557898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101562003e3f5783516001600160e01b0319168252928b019260019290920191908b019062003e13565b50978a0197955050509187019160010162003dd5565b50919998505050505050505050565b60005b8381101562003e8157818101518382015260200162003e67565b50506000910152565b6000815180845262003ea481602086016020860162003e64565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101562003f1157603f1988860301845262003efe85835162003e8a565b9450928501929085019060010162003edf565b5092979650505050505050565b600080600080600060a0868803121562003f3757600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060006060848603121562003f7057600080fd5b505081359360208301359350604090920135919050565b60006020828403121562003f9a57600080fd5b5051919050565b60006020828403121562003fb457600080fd5b8151801515811462002b3d57600080fd5b93845260208401929092526001600160a01b031660408301521515606082015260800190565b60208152600062002b3d602083018462003e8a565b6001600160a01b03831681526040602082018190526000906200038a9083018462003e8a565b600181811c908216806200403b57607f821691505b6020821081036200405c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141762002fe25762002fe262004062565b60006101a08284031215620040a657600080fd5b620040b062003c4c565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b8181038181111562002fe25762002fe262004062565b8082018082111562002fe25762002fe262004062565b6000600160ff1b820162004184576200418462004062565b5060000390565b6001600160e01b0319831681528151600090620041b081600485016020870162003e64565b919091016004019392505050565b60008251620041d281846020870162003e64565b9190910192915050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e08101516200424060e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002fe28284620041dc565b6101e08101620042b98285620041dc565b6001600160a01b03929092166101c09190910152919050565b600067ffffffffffffffff821115620042ef57620042ef62003c36565b5060051b60200190565b600082601f8301126200430b57600080fd5b81516200431c62003d738262003cfa565b8181528460208386010111156200433257600080fd5b6200038a82602083016020870162003e64565b805162001a048162003b25565b600060208083850312156200436657600080fd5b825167ffffffffffffffff808211156200437f57600080fd5b818501915085601f8301126200439457600080fd5b8151620043a562003d7382620042d2565b81815260059190911b83018401908481019088831115620043c557600080fd5b8585015b83811015620044cc57805185811115620043e257600080fd5b86016060818c03601f19011215620043f957600080fd5b6200440362003c79565b88820151878111156200441557600080fd5b8201603f81018d136200442757600080fd5b898101516200443a62003d7382620042d2565b81815260059190911b8201604001908b8101908f8311156200445b57600080fd5b6040840193505b828410156200447d5783518252928c0192908c019062004462565b84525050506040820151878111156200449557600080fd5b620044a58d8b83860101620042f9565b8a83015250620044b86060830162004345565b6040820152845250918601918601620043c9565b5098975050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000806000606084860312156200450557600080fd5b8351925060208401519150604084015190509250925092565b634e487b7160e01b600052601260045260246000fd5b6000826200454657620045466200451e565b500690565b6000606082840312156200455e57600080fd5b6200456862003c79565b905081518152602082015160208201526040820151604082015292915050565b60006101c082840312156200459c57600080fd5b620045a662003c9f565b620045b18362004345565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152620045fd60e0840162004345565b60e08201526101006200461281850162004345565b9082015261012062004627858583016200454b565b908201526101808301516101408201526101a09092015161016083015250919050565b6040815260006200467560408301600a8152690808080808081319599d60b21b602082015260400190565b905082602083015292915050565b6040815260006200467560408301600a8152690808080808149a59da1d60b21b602082015260400190565b60408152600560408201526422b93937b960d91b606082015260806020820152600062002b3d608083018462003e8a565b604081526000620046f4604083018562003e8a565b90508260208301529392505050565b60006001820162004718576200471862004062565b5060010190565b6040815260006200474a60408301600a8152690808080808081319599d60b21b602082015260400190565b6001600160a01b0393909316602092909201919091525090565b6040815260006200474a60408301600a8152690808080808149a59da1d60b21b602082015260400190565b60008060408385031215620047a357600080fd5b505080516020909101519092909150565b8181036000831280158383131683831282161715620047d757620047d762004062565b5092915050565b600082620047f057620047f06200451e565b600160ff1b8214600019841416156200480d576200480d62004062565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a26469706673582212205dd3a3700e4490b728738fa0c6a7b52c1ca19eef64e421b08c8a6ef89f97bd5f64736f6c63430008130033",
    sourceMap:
      "522:4439:147:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;663:128;;;:::i;:::-;;2545:198:159;;;;;;:::i;:::-;;:::i;:::-;;;845:25:165;;;833:2;818:18;2545:198:159;;;;;;;;2170:134:57;;;:::i;:::-;;;;;;;:::i;797:772:147:-;;;:::i;2749:417:159:-;;;;;;:::i;:::-;;:::i;2939:133:57:-;;;:::i;2640:141::-;;;:::i;1575:492:147:-;;;:::i;2321:218:159:-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;4492:32:165;;;4474:51;;4462:2;4447:18;2321:218:159;4328:203:165;2456:178:57;;;:::i;:::-;;;;;;;:::i;2310:140::-;;;:::i;:::-;;;;;;;:::i;2787:146::-;;;:::i;2073:2147:147:-;;;;;;:::i;:::-;;:::i;3830:2306:159:-;;;;;;:::i;:::-;;:::i;1875:141:57:-;;;:::i;1819:584:50:-;;;:::i;:::-;;;8393:14:165;;8386:22;8368:41;;8356:2;8341:18;1819:584:50;8228:187:165;2022:142:57;;;:::i;1572:26:50:-;;;;;;;;;663:128:147;706:13;:11;:13::i;:::-;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;769:13:147;;:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;663:128::o;2545:198:159:-;2709:22;;-1:-1:-1;;;2709:22:159;;-1:-1:-1;;;;;4492:32:165;;;2709:22:159;;;4474:51:165;2655:7:159;;2681:55;;2695:5;;2702;;2709:15;;;;;4447:18:165;;2709:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2733:2;2681:13;:55::i;:::-;2674:62;2545:198;-1:-1:-1;;;;2545:198:159:o;2170:134:57:-;2217:33;2281:16;2262:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2262:35:57;;;;;;;;;;;;;;;;;;;;;;;2170:134;:::o;797:772:147:-;1003:5;;871:6;;910:9;;851:17;;992:42;;-1:-1:-1;;;;;1003:5:147;871:6;910:9;992:10;:42::i;:::-;1066:5;;973:61;;-1:-1:-1;1044:63:147;;-1:-1:-1;;;;;1066:5:147;973:61;1083:12;1097:9;1044:21;:63::i;:::-;1181:5;;1165:32;;-1:-1:-1;;;;;1181:5:147;1188:8;1165:15;:32::i;:::-;;;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;1283:12:147;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1321:3:147;;1307:18;;-1:-1:-1;;;1307:18:147;;-1:-1:-1;;;;;1321:3:147;;;1307:18;;;4474:51:165;-1:-1:-1;;;;;;;;;;;1307:13:147;-1:-1:-1;1307:13:147;;-1:-1:-1;4447:18:165;;1307::147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1335:9:147;;:28;;-1:-1:-1;;;1335:28:147;;;;;845:25:165;;;1335:9:147;;;;-1:-1:-1;;;;;1335:9:147;;-1:-1:-1;1335:14:147;;-1:-1:-1;818:18:165;;1335:28:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1373:9:147;;1399:10;;1373:52;;-1:-1:-1;;;1373:52:147;;-1:-1:-1;;;;;1399:10:147;;;1373:52;;;8783:51:165;8850:18;;;8843:34;;;1373:9:147;;;;;;-1:-1:-1;1373:17:147;;-1:-1:-1;8756:18:165;;1373:52:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1435:60:147;;-1:-1:-1;;;1435:60:147;;-1:-1:-1;;;1435:60:147;;;9314:52:165;-1:-1:-1;;;;;;;;;;;1435:15:147;;;9287:18:165;;1435:60:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1505:10:147;;1552:3;;1505:57;;-1:-1:-1;;;1505:57:147;;-1:-1:-1;;;;;1505:10:147;;;;-1:-1:-1;1505:21:147;;-1:-1:-1;1505:57:147;;1527:12;;1541:9;;1552:3;;;1505:10;;:57;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;2749:417:159:-;2925:22;;-1:-1:-1;;;2925:22:159;;-1:-1:-1;;;;;4492:32:165;;;2925:22:159;;;4474:51:165;2883:7:159;;;;2925:15;;;;;4447:18:165;;2925:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2902:45;;2970:12;2961:6;:21;2957:56;;;2991:22;;-1:-1:-1;;;2991:22:159;;;;;;;;;;;2957:56;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3023:12:159;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3047:20:159;;-1:-1:-1;;;3047:20:159;;-1:-1:-1;;;;;4492:32:165;;3047:20:159;;;4474:51:165;-1:-1:-1;;;;;;;;;;;3047:13:159;-1:-1:-1;3047:13:159;;-1:-1:-1;4447:18:165;;3047:20:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:23:159;;-1:-1:-1;;;3077:23:159;;-1:-1:-1;;;;;8801:32:165;;3077:23:159;;;8783:51:165;3092:7:159;8850:18:165;;;8843:34;-1:-1:-1;;;;;;;;;;;3077:7:159;-1:-1:-1;3077:7:159;;-1:-1:-1;8756:18:165;;3077:23:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3110:26:159;;-1:-1:-1;;;3110:26:159;;-1:-1:-1;;;;;8801:32:165;;;3110:26:159;;;8783:51:165;8850:18;;;8843:34;;;3110:14:159;;;-1:-1:-1;3110:14:159;;-1:-1:-1;8756:18:165;;3110:26:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;3153:6:159;;2749:417;-1:-1:-1;;;;;2749:417:159:o;2939:133:57:-;2985:33;3049:16;3030:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3030:35:57;;;;;;;;;;;;;;;;;;;;;;2939:133;:::o;2640:141::-;2688:35;2756:18;2735:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2735:39:57;;;;;;;;;;;;;;;;;;;;;;2640:141;:::o;1575:492:147:-;1781:14;;;-1:-1:-1;;;1781:14:147;;;;1661:6;;1700:9;;-1:-1:-1;;;;;;;;;;;1781:12:147;;;:14;;;;;1641:17;;1781:14;;;;;;;1641:17;1781:12;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1819:3:147;;1805:18;;-1:-1:-1;;;1805:18:147;;-1:-1:-1;;;;;1819:3:147;;;1805:18;;;4474:51:165;-1:-1:-1;;;;;;;;;;;1805:13:147;-1:-1:-1;1805:13:147;;-1:-1:-1;4447:18:165;;1805::147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1833:9:147;;:28;;-1:-1:-1;;;1833:28:147;;;;;845:25:165;;;1833:9:147;;;;-1:-1:-1;;;;;1833:9:147;;-1:-1:-1;1833:14:147;;-1:-1:-1;818:18:165;;1833:28:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1871:9:147;;1897:10;;1871:52;;-1:-1:-1;;;1871:52:147;;-1:-1:-1;;;;;1897:10:147;;;1871:52;;;8783:51:165;8850:18;;;8843:34;;;1871:9:147;;;;;;-1:-1:-1;1871:17:147;;-1:-1:-1;8756:18:165;;1871:52:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1933:48:147;;-1:-1:-1;;;1933:48:147;;-1:-1:-1;;;1933:48:147;;;9314:52:165;-1:-1:-1;;;;;;;;;;;1933:15:147;;;9287:18:165;;1933:48:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1991:10:147;;2050:3;;1991:69;;-1:-1:-1;;;1991:69:147;;-1:-1:-1;;;;;1991:10:147;;;;-1:-1:-1;1991:21:147;;-1:-1:-1;1991:10:147;;:69;;2025:12;;2039:9;;2050:3;;;;1991:10;;:69;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1631:436;;1575:492::o;2321:218:159:-;2377:13;2455:4;2444:16;;;;;;;;:::i;:::-;;;;-1:-1:-1;;2444:16:159;;;;;;;;;;2434:27;;2444:16;2434:27;;;;-1:-1:-1;;;2474:21:159;;2434:27;-1:-1:-1;;;;;;;;;;;;2474:8:159;;;:21;;2434:27;;2490:4;;2474:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2505:27:159;;-1:-1:-1;;;2505:27:159;;-1:-1:-1;;;;;8801:32:165;;2505:27:159;;;8783:51:165;2520:11:159;8850:18:165;;;8843:34;-1:-1:-1;;;;;;;;;;;2505:7:159;-1:-1:-1;2505:7:159;;-1:-1:-1;8756:18:165;;2505:27:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:218;;;:::o;2456:178:57:-;2512:48;2601:26;2572:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:178;:::o;2310:140::-;2358:34;2425:18;2404:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2787:146;2835:40;2908:18;2887:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2073:2147:147;2316:48;:17;2351:6;2359:4;2316:34;:48::i;:::-;2296:68;-1:-1:-1;2395:42:147;:18;2431:1;2434:2;2395:35;:42::i;:::-;2374:63;-1:-1:-1;2447:29:147;2469:7;2374:63;2447:29;:::i;:::-;;-1:-1:-1;2507:47:147;:18;2543:1;2546:7;2507:35;:47::i;:::-;2486:68;-1:-1:-1;2577:42:147;:10;2605:7;2614:4;2577:27;:42::i;:::-;2564:55;-1:-1:-1;2644:55:147;:12;2674:8;2684:14;2644:29;:55::i;:::-;2629:70;;2773:36;2812:19;2823:7;2812:10;:19::i;:::-;2841:24;;;:44;;;2895:25;;;:46;;;2773:58;-1:-1:-1;2977:39:147;2998:18;2923;2977:39;:::i;:::-;2951:23;;;:65;3033:5;;3026:21;;-1:-1:-1;;;;;3033:5:147;2951:6;3026;:21::i;:::-;3131:5;;3101:16;;3120:43;;-1:-1:-1;;;;;3131:5:147;3138:10;3150:12;3120:10;:43::i;:::-;3195:5;;3101:62;;-1:-1:-1;3173:64:147;;-1:-1:-1;;;;;3195:5:147;3101:62;3212:12;3226:10;3173:21;:64::i;:::-;3370:10;;3351:16;;3370:37;;-1:-1:-1;;;;;3370:10:147;:35;:37::i;:::-;3351:56;;3417:45;3435:8;3445:10;3457:4;3417:17;:45::i;:::-;3639:9;;3659:5;;3639:26;;-1:-1:-1;;;3639:26:147;;-1:-1:-1;;;;;3659:5:147;;;3639:26;;;4474:51:165;3630:39:147;;3639:9;;;;;;;:19;;4447:18:165;;3639:26:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3667:1;3630:8;:39::i;:::-;3688:9;;3716:10;;3688:40;;-1:-1:-1;;;3688:40:147;;-1:-1:-1;;;;;3716:10:147;;;3688:40;;;4474:51:165;3679:64:147;;3688:9;;;;;;;:19;;4447:18:165;;3688:40:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3730:12;3679:8;:64::i;:::-;3753:121;3775:8;3838:26;565:4:32;3838:1:147;:26;:::i;:::-;3797:10;;;;;;;;;-1:-1:-1;;;;;3797:10:147;-1:-1:-1;;;;;3797:22:147;;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:38;:67;;;;:::i;:::-;3753:8;:121::i;:::-;4039:10;;:44;;-1:-1:-1;;;4039:44:147;;:10;:44;;;845:25:165;3995:139:147;;4017:8;;565:4:32;;-1:-1:-1;;;;;4039:10:147;;:22;;818:18:165;;4039:44:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:85;;;;:::i;3995:139::-;4163:10;;4206:5;;4163:49;;-1:-1:-1;;;4163:49:147;;:10;:49;;;13070:25:165;-1:-1:-1;;;;;4206:5:147;;;13111:18:165;;;13104:60;4144:69:147;;4153:8;;4163:10;;:20;;13043:18:165;;4163:49:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;4144:69::-;2286:1934;;;2073:2147;;;;;:::o;3830:2306:159:-;3955:18;3976:11;;;;;3998:335;;4031:138;4075:6;4059:12;:22;;4031:138;;;;;;;;;;;;;;;;;:10;:138::i;:::-;3998:335;;;4200:122;4237:12;4228:6;:21;4200:122;;;;;;;;;;;;;;;;;:10;:122::i;:::-;4343:18;4364:13;:49;;4407:6;4364:49;;;4380:24;4397:6;4380;:24;:::i;:::-;4343:70;;4423:18;4445:13;4444:14;:75;;4513:6;4444:75;;;4490:7;4491:6;4490:7;:::i;:::-;4473:25;;:6;:25;:::i;:::-;4423:96;;4597:10;4582:12;:25;:54;;;;4626:10;4611:12;:25;4582:54;4578:233;;;4652:57;4661:12;4675:10;4652:57;;;;;;;;;;;;;-1:-1:-1;;;4652:57:159;;;:8;:57::i;:::-;4723;4732:12;4746:10;4723:57;;;;;;;;;;;;;-1:-1:-1;;;4723:57:159;;;:8;:57::i;:::-;4794:7;;;3830:2306;;;:::o;4578:233::-;4908:13;4904:1226;;;4937:21;4961;4976:6;4961:12;:21;:::i;:::-;4937:45;;5024:6;5000:13;:31;4996:516;;;5051:133;;;;;;;;;;;;;;;;;;;5135:31;5153:13;5143:6;5135:31;:::i;:::-;5051:12;:133::i;:::-;5202:37;;;;;;;;;;;;;;-1:-1:-1;;;5202:37:159;;;5232:6;5202:12;:37::i;:::-;5257:44;;;;;;;;;;;;;;-1:-1:-1;;;5257:44:159;;;5287:13;5257:12;:44::i;:::-;4996:516;;;5340:157;5370:10;5402:12;5340:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;4923:599;4904:1226;;;5542:21;5566;5575:12;5566:6;:21;:::i;:::-;5542:45;-1:-1:-1;5629:7:159;5630:6;5629:7;:::i;:::-;5605:13;:32;5601:519;;;5657:134;;;;;;;;;;;;;;;;;;5760:13;5750:6;5749:7;;;:::i;:::-;5741:32;;;;:::i;5657:134::-;5809:37;;;;;;;;;;;;;;-1:-1:-1;;;5809:37:159;;;5839:6;5809:12;:37::i;:::-;5864:45;;;;;;;;;;;;;;-1:-1:-1;;;5864:45:159;;;5895:13;5864:12;:45::i;:::-;5601:519;;;5948:157;5978:10;6010:12;5948:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;5528:602;3945:2191;;;3830:2306;;;:::o;1875:141:57:-;1924:34;1991:18;1970:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1819:584:50;1873:7;;1853:4;;1873:7;;;;;1869:528;;;-1:-1:-1;1903:7:50;;;;;;;;1819:584::o;1869:528::-;1941:17;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;1980:374;;2196:43;;;-1:-1:-1;;;;;;;;;;;2196:43:50;;;8783:51:165;;;-1:-1:-1;;;8850:18:165;;;8843:34;2196:43:50;;;;;;;;;8756:18:165;;;2196:43:50;;;-1:-1:-1;;1671:64:50;;2086:175;;2135:34;;2086:175;;;:::i;:::-;;;;-1:-1:-1;;2086:175:50;;;;;;;;;;2047:232;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2020:259;;;2323:7;2312:27;;;;;;;;;;;;:::i;:::-;2297:42;;2002:352;1980:374;2374:12;1819:584;-1:-1:-1;1819:584:50:o;2022:142:57:-;2071:35;2139:18;2118:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2118:39:57;;;;;;;;;;;;;;;;;;;;;;2022:142;:::o;1767:1696:162:-;1818:13;:11;:13::i;:::-;1855:5;;1841:20;;-1:-1:-1;;;1841:20:162;;-1:-1:-1;;;;;1855:5:162;;;1841:20;;;4474:51:165;-1:-1:-1;;;;;;;;;;;1841:13:162;;;4447:18:165;;1841:20:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:2;1969:1;1973:5;1923:56;;;;;:::i;:::-;14794:3:165;14776:22;;;14835:1;14814:19;;;14807:30;;;-1:-1:-1;;;14868:3:165;14853:19;;14846:35;14919:3;14912:4;14897:20;;14890:33;;;14939:19;;14932:30;-1:-1:-1;;;14993:3:165;14978:19;;14971:35;15090:4;15078:17;;;15073:2;15058:18;;15051:45;-1:-1:-1;;;;;15132:32:165;;;-1:-1:-1;15112:18:165;;15105:60;15209:14;15202:22;-1:-1:-1;15181:19:165;;15174:51;15038:3;15023:19;1923:56:162;;;;;;;;;;;;;;;;;;;;;;;1911:9;;:68;;;;;-1:-1:-1;;;;;1911:68:162;;;;;-1:-1:-1;;;;;1911:68:162;;;;;;1989:28;2020:98;;;;;;;;2058:1;2020:98;;;;2079:1;2020:98;;;;2106:1;2020:98;;;1989:129;;2163:11;2177:7;2163:21;;2194:36;2233:603;;;;;;;;2296:9;;;;;;;;;-1:-1:-1;;;;;2296:9:162;-1:-1:-1;;;;;2233:603:162;;;;;565:4:32;2233:603:162;;;;565:4:32;2233:603:162;;;;1536:8;2233:603;;;;1656:8;2233:603;;;;1598:6;2233:603;;;;2612:41;2649:3;2612:36;:41::i;:::-;2233:603;;2679:10;;-1:-1:-1;;;;;2679:10:162;;;2233:603;;;;2717:12;;;2233:603;;;;;;;;;;;;;;1710:1;2233:603;;;;1756:4;2233:603;;;;;;;;2877:38;2194:642;;-1:-1:-1;2679:10:162;;2194:642;;2877:38;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2846:70;;2991:6;2999:12;2972:40;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2926:10;;:97;;;;;-1:-1:-1;;;;;2926:97:162;;;;;-1:-1:-1;;;;;2926:97:162;;;;;;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3033:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3071:10:162;;;3057:25;;-1:-1:-1;;;3057:25:162;;-1:-1:-1;;;;;3071:10:162;;;3057:25;;;4474:51:165;-1:-1:-1;;;;;;;;;;;3057:13:162;-1:-1:-1;3057:13:162;;-1:-1:-1;4447:18:165;3057:25:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3092:10:162;;3113:6;;3092:34;;-1:-1:-1;;;3092:34:162;;-1:-1:-1;;;;;3113:6:162;;;3092:34;;;17179:51:165;3092:10:162;17246:18:165;;;17239:50;3092:10:162;;;-1:-1:-1;3092:20:162;;-1:-1:-1;17152:18:165;;3092:34:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3392:8:162;;;;;-1:-1:-1;3387:70:162;;-1:-1:-1;3387:70:162;-1:-1:-1;;;;;;;;;;;3416:7:162;3424:21;1656:8;3444:1;3424:21;:::i;:::-;3416:30;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;3416:30:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8686:563;8801:16;8848:394;8876:2;8896:3;8917:12;8947:281;;;;;;;;9000:4;8947:281;;;;;;9041:12;8947:281;;;;9090:1;8947:281;;;;9136:1;8947:281;;;;-1:-1:-1;;8947:281:162;;;8848:10;:394::i;4226:733:147:-;4412:24;4439:74;4484:19;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;4439:18:147;;:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4439:20:147;;;;;;;;;;;;:::i;:::-;:31;;:74::i;:::-;4412:101;;4523:24;4532:4;:11;4545:1;4523:8;:24::i;:::-;4557:21;4581:4;4586:1;4581:7;;;;;;;;:::i;:::-;;;;;;;4557:31;;4598:60;4631:3;:10;;;4642:1;4631:13;;;;;;;;:::i;:::-;;;;;;;4623:22;;4649:8;4598;:60::i;:::-;4669:16;4687:18;4707:16;4751:3;:8;;;4727:83;;;;;;;;;;;;:::i;:::-;4668:142;;;;;;4820:36;4829:8;4839:16;4820:8;:36::i;:::-;4866:40;4875:10;4887:18;4866:8;:40::i;:::-;4916:36;4925:8;4935:16;4916:8;:36::i;:::-;4402:557;;;;;4226:733;;;;:::o;12720:409:162:-;12813:20;12835:24;12890:232;12923:2;12943:6;12967:141;;;;;;;;13023:4;12967:141;;;;;;13062:1;12967:141;;;12890:15;:232::i;:::-;12871:251;;;;12720:409;;;;;:::o;6266:333:164:-;6394:7;6432;6421;:18;;6413:45;;;;-1:-1:-1;;;6413:45:164;;20980:2:165;6413:45:164;;;20962:21:165;21019:2;20999:18;;;20992:30;-1:-1:-1;;;21038:18:165;;;21031:44;21092:18;;6413:45:164;;;;;;;;6469:17;6489;6499:7;6489;:17;:::i;:::-;:21;;6509:1;6489:21;:::i;:::-;6469:41;-1:-1:-1;6520:16:164;6539:17;6469:41;6539:5;:17;:::i;:::-;6520:36;-1:-1:-1;6574:18:164;6585:7;6520:36;6574:18;:::i;:::-;6567:25;6266:333;-1:-1:-1;;;;;;6266:333:164:o;5229:945:162:-;5305:29;;:::i;:::-;5377:98;;;;;;;;;-1:-1:-1;5377:98:162;;;;;;;;;;;;;;;;;5504:663;;;;;;;5571:9;;;;;-1:-1:-1;;;;;5571:9:162;5504:663;;565:4:32;5504:663:162;;;;;;;;;;1536:8;5504:663;;;;1656:8;5504:663;;;;1598:6;5504:663;;;;5377:98;5504:663;;;5913:47;5950:9;5913:36;:47::i;:::-;5504:663;;5990:10;;-1:-1:-1;;;;;5990:10:162;;;5504:663;;;;6032:12;;;5504:663;;;;;;;;;;;1710:1;5504:663;;;;1756:4;5504:663;;;;;;;;5485:682;5229:945;-1:-1:-1;;5229:945:162:o;3469:357::-;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3583:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3607:23:162;;-1:-1:-1;;;3607:23:162;;-1:-1:-1;;;;;4492:32:165;;3607:23:162;;;4474:51:165;-1:-1:-1;;;;;;;;;;;3607:13:162;-1:-1:-1;3607:13:162;;-1:-1:-1;4447:18:165;;3607:23:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3640:20;3702:7;3671:39;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;3640:71;;3786:7;3795:12;3767:41;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3721:10:162;:98;;-1:-1:-1;;;;;;3721:98:162;-1:-1:-1;;;;;3721:98:162;;;;;;;;;;-1:-1:-1;;;3469:357:162:o;2108:690:163:-;2204:7;2223:40;2266:11;-1:-1:-1;;;;;2266:25:163;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2223:70;;2303:36;2342:11;-1:-1:-1;;;;;2342:23:163;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2303:64;;2396:395;2453:154;2521:8;:22;;;2565:8;:24;;;2453:46;:154::i;:::-;2625:8;:21;;;2664:10;:28;;;2710:10;:27;;;2755:10;:22;;;2396:39;:395::i;3504:470:53:-;3598:13;3614:19;3628:1;3631;3614:13;:19::i;:::-;3598:35;;3656:8;3648:5;:16;3644:324;;;-1:-1:-1;;;;;;;;;;;3685:41:53;;;;23014:2:165;22996:21;;;23053:2;23033:18;;;23026:30;23092:34;23087:2;23072:18;;23065:62;-1:-1:-1;;;23158:2:165;23143:18;;23136:32;23200:3;23185:19;;22812:398;3685:41:53;;;;;;;;-1:-1:-1;;;;;;;;;;;3774:1:53;3745:31;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;;;;;;;3824:1:53;3795:31;;;;;;:::i;:::-;;;;;;;;3845:38;;;24461:21:165;;;24518:2;24498:18;;;24491:30;-1:-1:-1;;;24552:2:165;24537:18;;24530:40;24637:4;24622:20;;24615:36;;;3845:38:53;;-1:-1:-1;;;;;;;;;;;3845:38:53;;;;24602:3:165;3845:38:53;;;3902:35;;;24874:21:165;;;24931:2;24911:18;;;24904:30;-1:-1:-1;;;24965:2:165;24950:18;;24943:40;25050:4;25035:20;;25028:36;;;3902:35:53;;-1:-1:-1;;;;;;;;;;;3902:35:53;;;;25015:3:165;3902:35:53;;;3951:6;:4;:6::i;5209:262:50:-;5271:1;5266;:6;5262:203;;-1:-1:-1;;;;;;;;;;;5293:41:50;;;;25277:2:165;25259:21;;;25316:2;25296:18;;;25289:30;25355:34;25350:2;25335:18;;25328:62;-1:-1:-1;;;25421:2:165;25406:18;;25399:32;25463:3;25448:19;;25075:398;5293:41:50;;;;;;;;-1:-1:-1;;;;;;;;;;;5382:1:50;5353:31;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;;;;;;;5432:1:50;5403:31;;;;;;:::i;:::-;;;;;;;;5448:6;:4;:6::i;:::-;5209:262;;:::o;3425:191::-;3504:9;3499:111;;-1:-1:-1;;;;;;;;;;;3560:3:50;3534:30;;;;;;:::i;:::-;;;;;;;;3578:21;3589:9;3578:10;:21::i;12219:177::-;12299:1;12295;:5;12291:99;;;-1:-1:-1;;;;;;;;;;;12347:3:50;12321:30;;;;;;:::i;:::-;;;;;;;;12365:14;12374:1;12377;12365:8;:14::i;16185:177::-;16265:1;16261;:5;16257:99;;;-1:-1:-1;;;;;;;;;;;16313:3:50;16287:30;;;;;;:::i;:::-;;;;;;;;16331:14;16340:1;16343;16331:8;:14::i;7546:145:66:-;7613:71;7676:2;7680;7629:54;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7629:54:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7629:54:66;-1:-1:-1;;;7629:54:66;;;7613:15;:71::i;7697:143::-;7763:70;7825:2;7829;7779:53;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7779:53:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7779:53:66;-1:-1:-1;;;7779:53:66;;;7763:15;:70::i;5476:178:50:-;5557:1;5552;:6;5548:100;;-1:-1:-1;;;;;;;;;;;5605:3:50;5579:30;;;;;;:::i;:::-;;;;;;;;5623:14;5632:1;5635;5623:8;:14::i;1380:471:159:-;1430:19;;;;;;;;;;;;;;-1:-1:-1;;;1430:19:159;;;:10;:19::i;:::-;1422:5;:27;;-1:-1:-1;;;;;;1422:27:159;-1:-1:-1;;;;;1422:27:159;;;;;;;;;;1465:17;;;;;;;;;;;;-1:-1:-1;;;1465:17:159;;;;;;:10;:17::i;:::-;1459:3;:23;;-1:-1:-1;;;;;;1459:23:159;-1:-1:-1;;;;;1459:23:159;;;;;;;;;;1501:20;;;;;;;;;;;;-1:-1:-1;;;1501:20:159;;;;;;:10;:20::i;:::-;1492:6;:29;;-1:-1:-1;;;;;;1492:29:159;-1:-1:-1;;;;;1492:29:159;;;;;;;;;;1537:17;;;;;;;;;;;;-1:-1:-1;;;1537:17:159;;;;;;:10;:17::i;:::-;1531:3;:23;;-1:-1:-1;;;;;;1531:23:159;-1:-1:-1;;;;;1531:23:159;;;;;;;;;;1570:17;;;;;;;;;;;;-1:-1:-1;;;1570:17:159;;;;;;:10;:17::i;:::-;1564:3;;:23;;;;;-1:-1:-1;;;;;1564:23:159;;;;;-1:-1:-1;;;;;1564:23:159;;;;;;1609:22;;;;;;;;;;;;;;-1:-1:-1;;;1609:22:159;;;:10;:22::i;:::-;1598:8;:33;;-1:-1:-1;;;;;;1598:33:159;-1:-1:-1;;;;;1598:33:159;;;;;;;;;;1650:20;;;;;;;;;;;;-1:-1:-1;;;1650:20:159;;;;;;:10;:20::i;:::-;1641:6;:29;;-1:-1:-1;;;;;;1641:29:159;-1:-1:-1;;;;;1641:29:159;;;;;;;;;;1695:26;;;;;;;;;;;;-1:-1:-1;;;1695:26:159;;;;;;:10;:26::i;:::-;1680:12;:41;;-1:-1:-1;;;;;;1680:41:159;-1:-1:-1;;;;;1680:41:159;;;;;;;;;;1744:24;;;;;;;;;;;;-1:-1:-1;;;1744:24:159;;;;;;:10;:24::i;:::-;1731:10;:37;;-1:-1:-1;;;;;;1731:37:159;-1:-1:-1;;;;;1731:37:159;;;;;;;;;;1787:20;;;;;;;;;;;;-1:-1:-1;;;1787:20:159;;;;;;:10;:20::i;:::-;1778:6;:29;;-1:-1:-1;;;;;;1778:29:159;-1:-1:-1;;;;;1778:29:159;;;;;;;;;;1829:15;1818:8;:26;1380:471::o;9725:262:163:-;9791:7;;9832:89;9873:38;9901:9;:3;9907;9901:9;:::i;:::-;9881:10;;9873:27;:38::i;:::-;9840:10;;9832:27;:89::i;:::-;9810:111;-1:-1:-1;9938:42:163;565:4:32;9810:111:163;9938:29;:42::i;:::-;9931:49;9725:262;-1:-1:-1;;;9725:262:163:o;7679:1001:162:-;7837:16;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;7865:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7889:17:162;;-1:-1:-1;;;7889:17:162;;-1:-1:-1;;;;;4492:32:165;;7889:17:162;;;4474:51:165;-1:-1:-1;;;;;;;;;;;7889:13:162;-1:-1:-1;7889:13:162;;-1:-1:-1;4447:18:165;;7889:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7974:10:162;;:26;;;-1:-1:-1;;;7974:26:162;;;;87:42:161;;-1:-1:-1;;;;;;7974:10:162;;;;-1:-1:-1;7974:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;7966:61:162;;:99;;;;-1:-1:-1;8043:22:162;;7966:99;7949:725;;;8113:10;;8143:23;;;;8273:22;;8113:200;;-1:-1:-1;;;8113:200:162;;-1:-1:-1;;;;;8113:10:162;;;;:21;;8143:23;8113:200;;8190:12;;8224:3;;8249:2;;8273:22;8113:200;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8090:223;;;;7949:725;8344:9;;8359:23;;;;8344:39;;-1:-1:-1;;;8344:39:162;;;;;845:25:165;;;;8344:9:162;;;;-1:-1:-1;;;;;8344:9:162;;:14;;818:18:165;;8344:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8397:9:162;;8423:10;;8436:23;;;;8397:63;;-1:-1:-1;;;8397:63:162;;-1:-1:-1;;;;;8423:10:162;;;8397:63;;;8783:51:165;8850:18;;;8843:34;;;;8397:9:162;;;;;;-1:-1:-1;8397:17:162;;-1:-1:-1;8756:18:165;;8397:63:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;8497:10:162;;8623:22;;8497:166;;-1:-1:-1;;;8497:166:162;;-1:-1:-1;;;;;8497:10:162;;;;:21;;:166;;8540:12;;8574:3;;8599:2;;8623:22;8497:166;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;485:579:164:-;594:32;666:15;727:4;:11;710:29;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;710:29:164;;;;;;;;;;;;;;;;695:44;;754:9;749:167;773:4;:11;769:1;:15;749:167;;;830:8;809:4;814:1;809:7;;;;;;;;:::i;:::-;;;;;;;:14;;;824:1;809:17;;;;;;;;:::i;:::-;;;;;;;:29;805:101;;884:4;889:1;884:7;;;;;;;;:::i;:::-;;;;;;;858:12;871:9;;;;;:::i;:::-;;;858:23;;;;;;;;:::i;:::-;;;;;;:33;;;;805:101;786:3;;;;:::i;:::-;;;;749:167;;;-1:-1:-1;990:29:164;;485:579;;;;;:::o;3622:277:50:-;3690:1;-1:-1:-1;;;;;3685:6:50;:1;-1:-1:-1;;;;;3685:6:50;;3681:212;;-1:-1:-1;;;;;;;;;;;3712:44:50;;;;26861:2:165;26843:21;;;26900:2;26880:18;;;26873:30;26939:34;26934:2;26919:18;;26912:62;-1:-1:-1;;;27005:2:165;26990:18;;26983:35;27050:3;27035:19;;26659:401;3712:44:50;;;;;;;;3775:34;3807:1;3775:34;;;;;;:::i;:::-;;;;;;;;3828;3860:1;3828:34;;;;;;:::i;12212:502:162:-;12351:20;12373:24;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;12409:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12433:17:162;;-1:-1:-1;;;12433:17:162;;-1:-1:-1;;;;;4492:32:165;;12433:17:162;;;4474:51:165;-1:-1:-1;;;;;;;;;;;12433:13:162;-1:-1:-1;12433:13:162;;-1:-1:-1;4447:18:165;;12433:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12523:10:162;;12591:21;;;;12671:22;;12523:184;;-1:-1:-1;;;12523:184:162;;-1:-1:-1;;;;;12523:10:162;;;;-1:-1:-1;12523:26:162;;-1:-1:-1;12523:184:162;;12567:6;;12591:21;12651:2;;12523:184;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12504:203;;;;12212:502;;;;;;:::o;68721:340:33:-;68856:7;;68907:53;68944:16;68914:14;68907:53;:::i;:::-;68875:85;;69004:1;68978:22;:27;;68970:36;;;;;2312:782;2548:11;2784:17;2804:150;2836:23;2873:13;2900:18;2932:12;2804:18;:150::i;:::-;2784:170;-1:-1:-1;2983:104:33;3026:47;2784:170;3045:17;3064:8;3026:18;:47::i;:::-;2984:15;2990:9;150:4:32;2984:15:33;:::i;:::-;2983:25;;:104::i;:::-;2964:123;2312:782;-1:-1:-1;;;;;;;2312:782:33:o;521:114:59:-;581:7;611:1;607;:5;:21;;623:5;627:1;623;:5;:::i;:::-;607:21;;;615:5;619:1;615;:5;:::i;2409:432:50:-;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;2452:359;;2652:67;;;-1:-1:-1;;;;;;;;;;;2652:67:50;;;28480:51:165;;;-1:-1:-1;;;28547:18:165;;;28540:34;;;;2712:4:50;28590:18:165;;;28583:34;2489:11:50;;1671:64;2586:43;;28453:18:165;;2652:67:50;;;-1:-1:-1;;2652:67:50;;;;;;;;;;2541:196;;;2652:67;2541:196;;:::i;:::-;;;;-1:-1:-1;;2541:196:50;;;;;;;;;;2506:245;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;2452:359:50;2820:7;:14;;-1:-1:-1;;2820:14:50;;;;;2409:432::o;3262:157::-;3322:9;3317:96;;-1:-1:-1;;;;;;;;;;;3352:30:50;;;;28830:2:165;28812:21;;;28869:2;28849:18;;;28842:30;28908:25;28903:2;28888:18;;28881:53;28966:2;28951:18;;28628:347;3352:30:50;;;;;;;;3396:6;:4;:6::i;:::-;3262:157;:::o;11955:259::-;12016:1;12012;:5;12008:200;;;-1:-1:-1;;;;;;;;;;;12038:41:50;;;;29182:2:165;29164:21;;;29221:2;29201:18;;;29194:30;29260:34;29255:2;29240:18;;29233:62;-1:-1:-1;;;29326:2:165;29311:18;;29304:32;29368:3;29353:19;;28980:398;12038:41:50;;;;;;;;12098:30;;;29595:21:165;;;29652:1;29632:18;;;29625:29;-1:-1:-1;;;29685:2:165;29670:18;;29663:39;29769:4;29754:20;;29747:36;;;12098:30:50;;-1:-1:-1;;;;;;;;;;;12098:30:50;;;;29734:3:165;12098:30:50;;;12147;;;30006:21:165;;;30063:1;30043:18;;;30036:29;;;;-1:-1:-1;;;30096:2:165;30081:18;;30074:39;30180:4;30165:20;;30158:36;;;-1:-1:-1;;;;;;;;;;;12147:30:50;30145:3:165;30130:19;12147:30:50;29794:406:165;15921:259:50;15982:1;15978;:5;15974:200;;;-1:-1:-1;;;;;;;;;;;16004:41:50;;;;30407:2:165;30389:21;;;30446:2;30426:18;;;30419:30;30485:34;30480:2;30465:18;;30458:62;-1:-1:-1;;;30551:2:165;30536:18;;30529:32;30593:3;30578:19;;30205:398;868:133:66;939:55;986:7;965:19;939:55::i;1814:119:32:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;2207:165::-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;1246:449:33:-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;:::-;1563:125;1246:449;-1:-1:-1;;;;;1246:449:33:o;2726:748:32:-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;1007:380:66:-;1105:14;;591:42;1278:2;1265:16;;1081:21;;1105:14;1265:16;591:42;1314:5;1303:68;1294:77;;1231:150;;1007:380;:::o;984:556:32:-;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;9632:3592::-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;10164:34;-1:-1:-1;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;-1:-1:-1:-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:131:165:-;-1:-1:-1;;;;;89:31:165;;79:42;;69:70;;135:1;132;125:12;150:544;242:6;250;258;311:2;299:9;290:7;286:23;282:32;279:52;;;327:1;324;317:12;279:52;366:9;353:23;385:31;410:5;385:31;:::i;:::-;435:5;-1:-1:-1;492:2:165;477:18;;464:32;505:33;464:32;505:33;:::i;:::-;557:7;-1:-1:-1;616:2:165;601:18;;588:32;629:33;588:32;629:33;:::i;:::-;681:7;671:17;;;150:544;;;;;:::o;990:658::-;1161:2;1213:21;;;1283:13;;1186:18;;;1305:22;;;1132:4;;1161:2;1384:15;;;;1358:2;1343:18;;;1132:4;1427:195;1441:6;1438:1;1435:13;1427:195;;;1506:13;;-1:-1:-1;;;;;1502:39:165;1490:52;;1597:15;;;;1562:12;;;;1538:1;1456:9;1427:195;;;-1:-1:-1;1639:3:165;;990:658;-1:-1:-1;;;;;;990:658:165:o;1653:613::-;1754:6;1762;1770;1778;1831:3;1819:9;1810:7;1806:23;1802:33;1799:53;;;1848:1;1845;1838:12;1799:53;1887:9;1874:23;1906:31;1931:5;1906:31;:::i;:::-;1956:5;-1:-1:-1;2013:2:165;1998:18;;1985:32;2026:33;1985:32;2026:33;:::i;:::-;2078:7;-1:-1:-1;2132:2:165;2117:18;;2104:32;;-1:-1:-1;2188:2:165;2173:18;;2160:32;2201:33;2160:32;2201:33;:::i;:::-;1653:613;;;;-1:-1:-1;1653:613:165;;-1:-1:-1;;1653:613:165:o;2271:127::-;2332:10;2327:3;2323:20;2320:1;2313:31;2363:4;2360:1;2353:15;2387:4;2384:1;2377:15;2403:252;2475:2;2469:9;2517:3;2505:16;;2551:18;2536:34;;2572:22;;;2533:62;2530:88;;;2598:18;;:::i;:::-;2634:2;2627:22;2403:252;:::o;2660:253::-;2732:2;2726:9;2774:4;2762:17;;2809:18;2794:34;;2830:22;;;2791:62;2788:88;;;2856:18;;:::i;2918:255::-;2990:2;2984:9;3032:6;3020:19;;3069:18;3054:34;;3090:22;;;3051:62;3048:88;;;3116:18;;:::i;3178:275::-;3249:2;3243:9;3314:2;3295:13;;-1:-1:-1;;3291:27:165;3279:40;;3349:18;3334:34;;3370:22;;;3331:62;3328:88;;;3396:18;;:::i;:::-;3432:2;3425:22;3178:275;;-1:-1:-1;3178:275:165:o;3458:187::-;3507:4;3540:18;3532:6;3529:30;3526:56;;;3562:18;;:::i;:::-;-1:-1:-1;3628:2:165;3607:15;-1:-1:-1;;3603:29:165;3634:4;3599:40;;3458:187::o;3650:673::-;3719:6;3772:2;3760:9;3751:7;3747:23;3743:32;3740:52;;;3788:1;3785;3778:12;3740:52;3828:9;3815:23;3861:18;3853:6;3850:30;3847:50;;;3893:1;3890;3883:12;3847:50;3916:22;;3969:4;3961:13;;3957:27;-1:-1:-1;3947:55:165;;3998:1;3995;3988:12;3947:55;4034:2;4021:16;4059:49;4075:32;4104:2;4075:32;:::i;:::-;4059:49;:::i;:::-;4131:2;4124:5;4117:17;4171:7;4166:2;4161;4157;4153:11;4149:20;4146:33;4143:53;;;4192:1;4189;4182:12;4143:53;4247:2;4242;4238;4234:11;4229:2;4222:5;4218:14;4205:45;4291:1;4270:14;;;4286:2;4266:23;4259:34;;;;4274:5;3650:673;-1:-1:-1;;;;3650:673:165:o;4536:1569::-;4740:4;4769:2;4809;4798:9;4794:18;4839:2;4828:9;4821:21;4862:6;4897;4891:13;4928:6;4920;4913:22;4954:2;4944:12;;4987:2;4976:9;4972:18;4965:25;;5049:2;5039:6;5036:1;5032:14;5021:9;5017:30;5013:39;5087:2;5079:6;5075:15;5108:1;5129;5139:937;5155:6;5150:3;5147:15;5139:937;;;5224:22;;;-1:-1:-1;;5220:36:165;5208:49;;5280:13;;5367:9;;-1:-1:-1;;;;;5363:35:165;5348:51;;5438:11;;5432:18;5470:15;;;5463:27;;;5551:19;;5320:15;;;5583:24;;;5673:21;;;;5718:1;;5641:2;5629:15;;;5732:236;5748:8;5743:3;5740:17;5732:236;;;5829:15;;-1:-1:-1;;;;;;5825:42:165;5811:57;;5937:17;;;;5776:1;5767:11;;;;;5894:14;;;;5732:236;;;-1:-1:-1;6054:12:165;;;;5991:5;-1:-1:-1;;;6019:15:165;;;;5181:1;5172:11;5139:937;;;-1:-1:-1;6093:6:165;;4536:1569;-1:-1:-1;;;;;;;;;4536:1569:165:o;6110:250::-;6195:1;6205:113;6219:6;6216:1;6213:13;6205:113;;;6295:11;;;6289:18;6276:11;;;6269:39;6241:2;6234:10;6205:113;;;-1:-1:-1;;6352:1:165;6334:16;;6327:27;6110:250::o;6365:271::-;6407:3;6445:5;6439:12;6472:6;6467:3;6460:19;6488:76;6557:6;6550:4;6545:3;6541:14;6534:4;6527:5;6523:16;6488:76;:::i;:::-;6618:2;6597:15;-1:-1:-1;;6593:29:165;6584:39;;;;6625:4;6580:50;;6365:271;-1:-1:-1;;6365:271:165:o;6641:803::-;6803:4;6832:2;6872;6861:9;6857:18;6902:2;6891:9;6884:21;6925:6;6960;6954:13;6991:6;6983;6976:22;7029:2;7018:9;7014:18;7007:25;;7091:2;7081:6;7078:1;7074:14;7063:9;7059:30;7055:39;7041:53;;7129:2;7121:6;7117:15;7150:1;7160:255;7174:6;7171:1;7168:13;7160:255;;;7267:2;7263:7;7251:9;7243:6;7239:22;7235:36;7230:3;7223:49;7295:40;7328:6;7319;7313:13;7295:40;:::i;:::-;7285:50;-1:-1:-1;7393:12:165;;;;7358:15;;;;7196:1;7189:9;7160:255;;;-1:-1:-1;7432:6:165;;6641:803;-1:-1:-1;;;;;;;6641:803:165:o;7449:454::-;7544:6;7552;7560;7568;7576;7629:3;7617:9;7608:7;7604:23;7600:33;7597:53;;;7646:1;7643;7636:12;7597:53;-1:-1:-1;;7669:23:165;;;7739:2;7724:18;;7711:32;;-1:-1:-1;7790:2:165;7775:18;;7762:32;;7841:2;7826:18;;7813:32;;-1:-1:-1;7892:3:165;7877:19;7864:33;;-1:-1:-1;7449:454:165;-1:-1:-1;7449:454:165:o;7908:315::-;7984:6;7992;8000;8053:2;8041:9;8032:7;8028:23;8024:32;8021:52;;;8069:1;8066;8059:12;8021:52;-1:-1:-1;;8092:23:165;;;8162:2;8147:18;;8134:32;;-1:-1:-1;8213:2:165;8198:18;;;8185:32;;7908:315;-1:-1:-1;7908:315:165:o;8420:184::-;8490:6;8543:2;8531:9;8522:7;8518:23;8514:32;8511:52;;;8559:1;8556;8549:12;8511:52;-1:-1:-1;8582:16:165;;8420:184;-1:-1:-1;8420:184:165:o;8888:277::-;8955:6;9008:2;8996:9;8987:7;8983:23;8979:32;8976:52;;;9024:1;9021;9014:12;8976:52;9056:9;9050:16;9109:5;9102:13;9095:21;9088:5;9085:32;9075:60;;9131:1;9128;9121:12;9377:427;9602:25;;;9658:2;9643:18;;9636:34;;;;-1:-1:-1;;;;;9706:32:165;9701:2;9686:18;;9679:60;9782:14;9775:22;9770:2;9755:18;;9748:50;9589:3;9574:19;;9377:427::o;10114:220::-;10263:2;10252:9;10245:21;10226:4;10283:45;10324:2;10313:9;10309:18;10301:6;10283:45;:::i;10339:317::-;-1:-1:-1;;;;;10516:32:165;;10498:51;;10585:2;10580;10565:18;;10558:30;;;-1:-1:-1;;10605:45:165;;10631:18;;10623:6;10605:45;:::i;10970:380::-;11049:1;11045:12;;;;11092;;;11113:61;;11167:4;11159:6;11155:17;11145:27;;11113:61;11220:2;11212:6;11209:14;11189:18;11186:38;11183:161;;11266:10;11261:3;11257:20;11254:1;11247:31;11301:4;11298:1;11291:15;11329:4;11326:1;11319:15;11183:161;;10970:380;;;:::o;11355:127::-;11416:10;11411:3;11407:20;11404:1;11397:31;11447:4;11444:1;11437:15;11471:4;11468:1;11461:15;11487:168;11560:9;;;11591;;11608:15;;;11602:22;;11588:37;11578:71;;11629:18;;:::i;11660:1098::-;11756:6;11809:3;11797:9;11788:7;11784:23;11780:33;11777:53;;;11826:1;11823;11816:12;11777:53;11852:22;;:::i;:::-;11903:9;11897:16;11890:5;11883:31;11967:2;11956:9;11952:18;11946:25;11941:2;11934:5;11930:14;11923:49;12025:2;12014:9;12010:18;12004:25;11999:2;11992:5;11988:14;11981:49;12083:2;12072:9;12068:18;12062:25;12057:2;12050:5;12046:14;12039:49;12142:3;12131:9;12127:19;12121:26;12115:3;12108:5;12104:15;12097:51;12202:3;12191:9;12187:19;12181:26;12175:3;12168:5;12164:15;12157:51;12262:3;12251:9;12247:19;12241:26;12235:3;12228:5;12224:15;12217:51;12322:3;12311:9;12307:19;12301:26;12295:3;12288:5;12284:15;12277:51;12347:3;12403:2;12392:9;12388:18;12382:25;12377:2;12370:5;12366:14;12359:49;;12427:3;12483:2;12472:9;12468:18;12462:25;12457:2;12450:5;12446:14;12439:49;;12507:3;12563:2;12552:9;12548:18;12542:25;12537:2;12530:5;12526:14;12519:49;;12587:3;12643:2;12632:9;12628:18;12622:25;12617:2;12610:5;12606:14;12599:49;;12667:3;12723:2;12712:9;12708:18;12702:25;12697:2;12690:5;12686:14;12679:49;;12747:5;12737:15;;;11660:1098;;;;:::o;12763:128::-;12830:9;;;12851:11;;;12848:37;;;12865:18;;:::i;13175:125::-;13240:9;;;13261:10;;;13258:36;;;13274:18;;:::i;13305:136::-;13340:3;-1:-1:-1;;;13361:22:165;;13358:48;;13386:18;;:::i;:::-;-1:-1:-1;13426:1:165;13422:13;;13305:136::o;13725:384::-;-1:-1:-1;;;;;;13910:33:165;;13898:46;;13967:13;;13880:3;;13989:74;13967:13;14052:1;14043:11;;14036:4;14024:17;;13989:74;:::i;:::-;14083:16;;;;14101:1;14079:24;;13725:384;-1:-1:-1;;;13725:384:165:o;14114:287::-;14243:3;14281:6;14275:13;14297:66;14356:6;14351:3;14344:4;14336:6;14332:17;14297:66;:::i;:::-;14379:16;;;;;14114:287;-1:-1:-1;;14114:287:165:o;15442:944::-;15525:12;;-1:-1:-1;;;;;947:31:165;935:44;;15592:4;15585:5;15581:16;15575:23;15568:4;15563:3;15559:14;15552:47;15648:4;15641:5;15637:16;15631:23;15624:4;15619:3;15615:14;15608:47;15704:4;15697:5;15693:16;15687:23;15680:4;15675:3;15671:14;15664:47;15760:4;15753:5;15749:16;15743:23;15736:4;15731:3;15727:14;15720:47;15816:4;15809:5;15805:16;15799:23;15792:4;15787:3;15783:14;15776:47;15872:4;15865:5;15861:16;15855:23;15848:4;15843:3;15839:14;15832:47;15925:4;15918:5;15914:16;15908:23;15940:48;15982:4;15977:3;15973:14;15959:12;-1:-1:-1;;;;;947:31:165;935:44;;881:104;15940:48;-1:-1:-1;16007:6:165;16050:14;;;16044:21;-1:-1:-1;;;;;947:31:165;;16109:12;;;935:44;-1:-1:-1;;16141:6:165;16184:14;;;16178:21;15306:12;;16247;;;15294:25;15368:4;15357:16;;15351:23;15335:14;;;15328:47;15424:4;15413:16;;15407:23;15391:14;;;15384:47;-1:-1:-1;;16311:6:165;16300:18;;16294:25;16285:6;16276:16;;16269:51;16371:6;16360:18;16354:25;16345:6;16336:16;;;16329:51;15442:944::o;16391:256::-;16581:3;16566:19;;16594:47;16570:9;16623:6;16594:47;:::i;16652:354::-;16870:3;16855:19;;16883:47;16859:9;16912:6;16883:47;:::i;:::-;-1:-1:-1;;;;;16967:32:165;;;;16961:3;16946:19;;;;16939:61;16652:354;;-1:-1:-1;16652:354:165:o;17300:186::-;17363:4;17396:18;17388:6;17385:30;17382:56;;;17418:18;;:::i;:::-;-1:-1:-1;17463:1:165;17459:14;17475:4;17455:25;;17300:186::o;17491:442::-;17544:5;17597:3;17590:4;17582:6;17578:17;17574:27;17564:55;;17615:1;17612;17605:12;17564:55;17644:6;17638:13;17675:49;17691:32;17720:2;17691:32;:::i;17675:49::-;17749:2;17740:7;17733:19;17795:3;17788:4;17783:2;17775:6;17771:15;17767:26;17764:35;17761:55;;;17812:1;17809;17802:12;17761:55;17825:77;17899:2;17892:4;17883:7;17879:18;17872:4;17864:6;17860:17;17825:77;:::i;17938:138::-;18017:13;;18039:31;18017:13;18039:31;:::i;18081:2249::-;18198:6;18229:2;18272;18260:9;18251:7;18247:23;18243:32;18240:52;;;18288:1;18285;18278:12;18240:52;18321:9;18315:16;18350:18;18391:2;18383:6;18380:14;18377:34;;;18407:1;18404;18397:12;18377:34;18445:6;18434:9;18430:22;18420:32;;18490:7;18483:4;18479:2;18475:13;18471:27;18461:55;;18512:1;18509;18502:12;18461:55;18541:2;18535:9;18564:63;18580:46;18623:2;18580:46;:::i;18564:63::-;18661:15;;;18743:1;18739:10;;;;18731:19;;18727:28;;;18692:12;;;;18767:19;;;18764:39;;;18799:1;18796;18789:12;18764:39;18831:2;18827;18823:11;18843:1457;18859:6;18854:3;18851:15;18843:1457;;;18938:3;18932:10;18974:2;18961:11;18958:19;18955:39;;;18990:1;18987;18980:12;18955:39;19017:20;;19089:4;19061:16;;;-1:-1:-1;;19057:30:165;19053:41;19050:61;;;19107:1;19104;19097:12;19050:61;19137:22;;:::i;:::-;19202:2;19198;19194:11;19188:18;19235:2;19225:8;19222:16;19219:36;;;19251:1;19248;19241:12;19219:36;19278:17;;19330:2;19322:11;;19318:25;-1:-1:-1;19308:53:165;;19357:1;19354;19347:12;19308:53;19398:2;19394;19390:11;19384:18;19428:63;19444:46;19487:2;19444:46;:::i;19428:63::-;19535:17;;;19633:1;19629:10;;;;19621:19;;19642:2;19617:28;;19574:14;;;;19661:21;;;19658:41;;;19695:1;19692;19685:12;19658:41;19733:2;19729;19725:11;19712:24;;19749:167;19767:8;19760:5;19757:19;19749:167;;;19849:12;;19835:27;;19788:14;;;;19888;;;;19749:167;;;19929:20;;-1:-1:-1;;;19992:2:165;19984:11;;19978:18;20012:16;;;20009:36;;;20041:1;20038;20031:12;20009:36;20081:64;20137:7;20132:2;20121:8;20117:2;20113:17;20109:26;20081:64;:::i;:::-;20076:2;20069:5;20065:14;20058:88;;20182:44;20220:4;20216:2;20212:13;20182:44;:::i;:::-;20177:2;20166:14;;20159:68;20240:18;;-1:-1:-1;20278:12:165;;;;18876;;18843:1457;;;-1:-1:-1;20319:5:165;18081:2249;-1:-1:-1;;;;;;;;18081:2249:165:o;20335:127::-;20396:10;20391:3;20387:20;20384:1;20377:31;20427:4;20424:1;20417:15;20451:4;20448:1;20441:15;20467:306;20555:6;20563;20571;20624:2;20612:9;20603:7;20599:23;20595:32;20592:52;;;20640:1;20637;20630:12;20592:52;20669:9;20663:16;20653:26;;20719:2;20708:9;20704:18;20698:25;20688:35;;20763:2;20752:9;20748:18;20742:25;20732:35;;20467:306;;;;;:::o;21121:127::-;21182:10;21177:3;21173:20;21170:1;21163:31;21213:4;21210:1;21203:15;21237:4;21234:1;21227:15;21253:112;21285:1;21311;21301:35;;21316:18;;:::i;:::-;-1:-1:-1;21350:9:165;;21253:112::o;21370:334::-;21432:5;21480:4;21468:9;21463:3;21459:19;21455:30;21452:50;;;21498:1;21495;21488:12;21452:50;21520:22;;:::i;:::-;21511:31;;21571:9;21565:16;21558:5;21551:31;21635:2;21624:9;21620:18;21614:25;21609:2;21602:5;21598:14;21591:49;21693:2;21682:9;21678:18;21672:25;21667:2;21660:5;21656:14;21649:49;21370:334;;;;:::o;21709:1098::-;21807:6;21860:3;21848:9;21839:7;21835:23;21831:33;21828:53;;;21877:1;21874;21867:12;21828:53;21903:22;;:::i;:::-;21948:40;21978:9;21948:40;:::i;:::-;21941:5;21934:55;22042:2;22031:9;22027:18;22021:25;22016:2;22009:5;22005:14;21998:49;22100:2;22089:9;22085:18;22079:25;22074:2;22067:5;22063:14;22056:49;22158:2;22147:9;22143:18;22137:25;22132:2;22125:5;22121:14;22114:49;22217:3;22206:9;22202:19;22196:26;22190:3;22183:5;22179:15;22172:51;22277:3;22266:9;22262:19;22256:26;22250:3;22243:5;22239:15;22232:51;22337:3;22326:9;22322:19;22316:26;22310:3;22303:5;22299:15;22292:51;22376:50;22421:3;22410:9;22406:19;22376:50;:::i;:::-;22370:3;22363:5;22359:15;22352:75;22446:3;22481:49;22526:2;22515:9;22511:18;22481:49;:::i;:::-;22465:14;;;22458:73;22550:3;22585:62;22639:7;22619:18;;;22585:62;:::i;:::-;22569:14;;;22562:86;22705:6;22690:22;;22684:29;22675:6;22664:18;;22657:57;22771:3;22756:19;;;22750:26;22741:6;22730:18;;22723:54;-1:-1:-1;22573:5:165;21709:1098;-1:-1:-1;21709:1098:165:o;23379:348::-;23609:2;23598:9;23591:21;23572:4;23629:49;23674:2;23663:9;23659:18;23292:2;23280:15;;-1:-1:-1;;;23320:4:165;23311:14;;23304:36;23365:2;23356:12;;23215:159;23629:49;23621:57;;23714:6;23709:2;23698:9;23694:18;23687:34;23379:348;;;;:::o;23896:::-;24126:2;24115:9;24108:21;24089:4;24146:49;24191:2;24180:9;24176:18;23809:2;23797:15;;-1:-1:-1;;;23837:4:165;23828:14;;23821:36;23882:2;23873:12;;23732:159;25478:446;25728:2;25717:9;25710:21;25767:1;25762:2;25751:9;25747:18;25740:29;-1:-1:-1;;;25800:2:165;25789:9;25785:18;25778:35;25851:3;25844:4;25833:9;25829:20;25822:33;25691:4;25872:46;25913:3;25902:9;25898:19;25890:6;25872:46;:::i;25929:291::-;26106:2;26095:9;26088:21;26069:4;26126:45;26167:2;26156:9;26152:18;26144:6;26126:45;:::i;:::-;26118:53;;26207:6;26202:2;26191:9;26187:18;26180:34;25929:291;;;;;:::o;26519:135::-;26558:3;26579:17;;;26576:43;;26599:18;;:::i;:::-;-1:-1:-1;26646:1:165;26635:13;;26519:135::o;27065:374::-;27295:2;27284:9;27277:21;27258:4;27315:49;27360:2;27349:9;27345:18;23292:2;23280:15;;-1:-1:-1;;;23320:4:165;23311:14;;23304:36;23365:2;23356:12;;23215:159;27315:49;-1:-1:-1;;;;;27400:32:165;;;;27395:2;27380:18;;;;27373:60;;;;-1:-1:-1;27307:57:165;27065:374::o;27444:::-;27674:2;27663:9;27656:21;27637:4;27694:49;27739:2;27728:9;27724:18;23809:2;23797:15;;-1:-1:-1;;;23837:4:165;23828:14;;23821:36;23882:2;23873:12;;23732:159;27823:245;27902:6;27910;27963:2;27951:9;27942:7;27938:23;27934:32;27931:52;;;27979:1;27976;27969:12;27931:52;-1:-1:-1;;28002:16:165;;28058:2;28043:18;;;28037:25;28002:16;;28037:25;;-1:-1:-1;27823:245:165:o;28073:200::-;28139:9;;;28112:4;28167:9;;28195:10;;28207:12;;;28191:29;28230:12;;;28222:21;;28188:56;28185:82;;;28247:18;;:::i;:::-;28185:82;28073:200;;;;:::o;30608:193::-;30647:1;30673;30663:35;;30678:18;;:::i;:::-;-1:-1:-1;;;30714:18:165;;-1:-1:-1;;30734:13:165;;30710:38;30707:64;;;30751:18;;:::i;:::-;-1:-1:-1;30785:10:165;;30608:193::o",
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
    "test_initialize_failure()": "36ddd580",
    "test_initialize_failure_not_payable()": "421c5d8e",
    "test_initialize_success(uint256,uint256,uint256,uint256,uint256)":
      "a80fb9bc",
    "whaleTransfer(address,address,address)": "10716760",
    "whaleTransfer(address,address,uint256,address)": "3e5e0d26",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"FixedPointMath_InvalidExponent","type":"error"},{"inputs":[],"name":"FixedPointMath_InvalidInput","type":"error"},{"inputs":[],"name":"WhaleBalanceExceeded","type":"error"},{"inputs":[],"name":"WhaleIsContract","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"version","type":"uint256"},{"indexed":false,"internalType":"address","name":"hyperdrive","type":"address"},{"components":[{"internalType":"contract IERC20","name":"baseToken","type":"address"},{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"minimumShareReserves","type":"uint256"},{"internalType":"uint256","name":"minimumTransactionAmount","type":"uint256"},{"internalType":"uint256","name":"positionDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"timeStretch","type":"uint256"},{"internalType":"address","name":"governance","type":"address"},{"internalType":"address","name":"feeCollector","type":"address"},{"components":[{"internalType":"uint256","name":"curve","type":"uint256"},{"internalType":"uint256","name":"flat","type":"uint256"},{"internalType":"uint256","name":"governance","type":"uint256"}],"internalType":"struct IHyperdrive.Fees","name":"fees","type":"tuple"},{"internalType":"uint256","name":"oracleSize","type":"uint256"},{"internalType":"uint256","name":"updateGap","type":"uint256"}],"indexed":false,"internalType":"struct IHyperdrive.PoolConfig","name":"config","type":"tuple"},{"indexed":false,"internalType":"address","name":"linkerFactory","type":"address"},{"indexed":false,"internalType":"bytes32","name":"linkerCodeHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32[]","name":"extraData","type":"bytes32[]"}],"name":"Deployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"apr","type":"uint256"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"RedeemWithdrawalShares","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"log_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"val","type":"uint256[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int256[]","name":"val","type":"int256[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"val","type":"address[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"","type":"bytes"}],"name":"log_bytes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"","type":"bytes32"}],"name":"log_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int256","name":"","type":"int256"}],"name":"log_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"address","name":"val","type":"address"}],"name":"log_named_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256[]","name":"val","type":"uint256[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256[]","name":"val","type":"int256[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"address[]","name":"val","type":"address[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"bytes","name":"val","type":"bytes"}],"name":"log_named_bytes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"bytes32","name":"val","type":"bytes32"}],"name":"log_named_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256","name":"val","type":"int256"},{"indexed":false,"internalType":"uint256","name":"decimals","type":"uint256"}],"name":"log_named_decimal_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"val","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"decimals","type":"uint256"}],"name":"log_named_decimal_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256","name":"val","type":"int256"}],"name":"log_named_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"string","name":"val","type":"string"}],"name":"log_named_string","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"val","type":"uint256"}],"name":"log_named_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"log_string","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"log_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"","type":"bytes"}],"name":"logs","type":"event"},{"inputs":[],"name":"IS_TEST","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"int256","name":"_delta","type":"int256"},{"internalType":"uint256","name":"_targetValue","type":"uint256"}],"name":"assertWithDelta","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"createUser","outputs":[{"internalType":"address","name":"_user","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"excludeArtifacts","outputs":[{"internalType":"string[]","name":"excludedArtifacts_","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"excludeContracts","outputs":[{"internalType":"address[]","name":"excludedContracts_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"excludeSenders","outputs":[{"internalType":"address[]","name":"excludedSenders_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"failed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"targetArtifactSelectors","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct StdInvariant.FuzzSelector[]","name":"targetedArtifactSelectors_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetArtifacts","outputs":[{"internalType":"string[]","name":"targetedArtifacts_","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetContracts","outputs":[{"internalType":"address[]","name":"targetedContracts_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetSelectors","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct StdInvariant.FuzzSelector[]","name":"targetedSelectors_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetSenders","outputs":[{"internalType":"address[]","name":"targetedSenders_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"test_initialize_failure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"test_initialize_failure_not_payable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointsPerTerm","type":"uint256"},{"internalType":"uint256","name":"targetRate","type":"uint256"},{"internalType":"uint256","name":"contribution","type":"uint256"}],"name":"test_initialize_success","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whale","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"whaleTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whale","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"whaleTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"errors":{"FixedPointMath_InvalidExponent()":[{"notice":"###################### ### FixedPointMath ### ######################"}]},"events":{"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])":{"notice":"Event Utils ///"}},"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"test/units/hyperdrive/InitializeTest.t.sol":"InitializeTest"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/DataProvider.sol":{"keccak256":"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30","license":"Apache-2.0","urls":["bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212","dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"]},"contracts/src/Hyperdrive.sol":{"keccak256":"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5","license":"Apache-2.0","urls":["bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e","dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"]},"contracts/src/HyperdriveBase.sol":{"keccak256":"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95","license":"Apache-2.0","urls":["bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e","dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"]},"contracts/src/HyperdriveDataProvider.sol":{"keccak256":"0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d","license":"Apache-2.0","urls":["bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5","dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA"]},"contracts/src/HyperdriveLP.sol":{"keccak256":"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a","license":"Apache-2.0","urls":["bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e","dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"]},"contracts/src/HyperdriveLong.sol":{"keccak256":"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188","license":"Apache-2.0","urls":["bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f","dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"]},"contracts/src/HyperdriveShort.sol":{"keccak256":"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa","license":"Apache-2.0","urls":["bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8","dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"]},"contracts/src/HyperdriveStorage.sol":{"keccak256":"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc","license":"Apache-2.0","urls":["bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a","dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"]},"contracts/src/HyperdriveTWAP.sol":{"keccak256":"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b","license":"Apache-2.0","urls":["bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc","dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"]},"contracts/src/factory/HyperdriveFactory.sol":{"keccak256":"0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde","license":"Apache-2.0","urls":["bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1","dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2"]},"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IForwarderFactory.sol":{"keccak256":"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af","license":"Apache-2.0","urls":["bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3","dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveDeployer.sol":{"keccak256":"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0","license":"Apache-2.0","urls":["bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587","dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"contracts/src/libraries/AssetId.sol":{"keccak256":"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384","license":"Apache-2.0","urls":["bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806","dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"]},"contracts/src/libraries/FixedPointMath.sol":{"keccak256":"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd","license":"Apache-2.0","urls":["bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b","dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"]},"contracts/src/libraries/HyperdriveMath.sol":{"keccak256":"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2","license":"Apache-2.0","urls":["bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75","dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"]},"contracts/src/libraries/SafeCast.sol":{"keccak256":"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f","license":"Apache-2.0","urls":["bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5","dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"]},"contracts/src/libraries/YieldSpaceMath.sol":{"keccak256":"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04","license":"Apache-2.0","urls":["bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef","dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"]},"contracts/src/token/ERC20Forwarder.sol":{"keccak256":"0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158","license":"Apache-2.0","urls":["bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034","dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p"]},"contracts/src/token/ForwarderFactory.sol":{"keccak256":"0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b","license":"Apache-2.0","urls":["bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e","dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ"]},"contracts/src/token/MultiToken.sol":{"keccak256":"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19","license":"Apache-2.0","urls":["bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98","dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"]},"contracts/src/token/MultiTokenDataProvider.sol":{"keccak256":"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f","license":"Apache-2.0","urls":["bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef","dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"]},"contracts/src/token/MultiTokenStorage.sol":{"keccak256":"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8","license":"Apache-2.0","urls":["bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6","dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"]},"contracts/test/ERC20Mintable.sol":{"keccak256":"0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389","license":"Apache-2.0","urls":["bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65","dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui"]},"lib/forge-std/lib/ds-test/src/test.sol":{"keccak256":"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b","license":"GPL-3.0-or-later","urls":["bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240","dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"]},"lib/forge-std/src/Base.sol":{"keccak256":"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c","license":"MIT","urls":["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224","dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"]},"lib/forge-std/src/StdAssertions.sol":{"keccak256":"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60","license":"MIT","urls":["bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b","dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"]},"lib/forge-std/src/StdChains.sol":{"keccak256":"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d","license":"MIT","urls":["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4","dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"]},"lib/forge-std/src/StdCheats.sol":{"keccak256":"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5","license":"MIT","urls":["bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a","dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"]},"lib/forge-std/src/StdError.sol":{"keccak256":"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77","license":"MIT","urls":["bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6","dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"]},"lib/forge-std/src/StdInvariant.sol":{"keccak256":"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1","license":"MIT","urls":["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c","dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"]},"lib/forge-std/src/StdJson.sol":{"keccak256":"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b","license":"MIT","urls":["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c","dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"]},"lib/forge-std/src/StdMath.sol":{"keccak256":"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2","license":"MIT","urls":["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92","dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"]},"lib/forge-std/src/StdStorage.sol":{"keccak256":"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d","license":"MIT","urls":["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26","dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"]},"lib/forge-std/src/StdStyle.sol":{"keccak256":"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d","license":"MIT","urls":["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8","dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"]},"lib/forge-std/src/StdUtils.sol":{"keccak256":"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1","license":"MIT","urls":["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140","dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"]},"lib/forge-std/src/Test.sol":{"keccak256":"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0","license":"MIT","urls":["bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765","dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4","license":"MIT","urls":["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241","dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"]},"lib/forge-std/src/console.sol":{"keccak256":"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba","license":"MIT","urls":["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70","dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"]},"lib/forge-std/src/console2.sol":{"keccak256":"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea","license":"MIT","urls":["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973","dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"]},"lib/forge-std/src/interfaces/IMulticall3.sol":{"keccak256":"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a","license":"MIT","urls":["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0","dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"]},"lib/forge-std/src/safeconsole.sol":{"keccak256":"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381","license":"MIT","urls":["bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae","dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"]},"lib/openzeppelin-contracts/contracts/access/AccessControl.sol":{"keccak256":"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c","license":"MIT","urls":["bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88","dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"]},"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":{"keccak256":"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247","license":"MIT","urls":["bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b","dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"]},"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol":{"keccak256":"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57","license":"MIT","urls":["bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a","dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"]},"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":{"keccak256":"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676","license":"MIT","urls":["bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276","dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"]},"lib/openzeppelin-contracts/contracts/security/Pausable.sol":{"keccak256":"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773","license":"MIT","urls":["bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004","dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B"]},"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b","license":"MIT","urls":["bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df","dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":{"keccak256":"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b","license":"MIT","urls":["bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f","dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol":{"keccak256":"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a","license":"MIT","urls":["bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790","dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":{"keccak256":"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec","license":"MIT","urls":["bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3","dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol":{"keccak256":"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa","license":"MIT","urls":["bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b","dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f","license":"MIT","urls":["bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf","dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT","urls":["bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d","dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT","urls":["bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f","dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858","license":"MIT","urls":["bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4","dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT","urls":["bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7","dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"]},"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol":{"keccak256":"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598","license":"MIT","urls":["bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72","dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"]},"lib/solmate/src/auth/Auth.sol":{"keccak256":"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c","license":"AGPL-3.0-only","urls":["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac","dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"]},"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol":{"keccak256":"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3","license":"AGPL-3.0-only","urls":["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef","dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"]},"lib/solmate/src/tokens/ERC20.sol":{"keccak256":"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10","license":"AGPL-3.0-only","urls":["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35","dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"]},"lib/solmate/src/utils/ReentrancyGuard.sol":{"keccak256":"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01","license":"AGPL-3.0-only","urls":["bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800","dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"]},"test/mocks/MockHyperdrive.sol":{"keccak256":"0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465","license":"Apache-2.0","urls":["bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378","dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn"]},"test/units/hyperdrive/InitializeTest.t.sol":{"keccak256":"0x357a833b2ced821f5fd0a747095238e50d0cb954a19408ae6edd6a79004c3cfa","license":"Apache-2.0","urls":["bzz-raw://12f2be951d80413cfc276f011de3c0e4ccbe633c5438be6b04d0f109988b2417","dweb:/ipfs/QmVkBhwVMXoy47AXCyGV6iQ4qnW8zK68EUojvRzyhrttek"]},"test/utils/BaseTest.sol":{"keccak256":"0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6","license":"Apache-2.0","urls":["bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd","dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD"]},"test/utils/Constants.sol":{"keccak256":"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b","license":"Apache-2.0","urls":["bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0","dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1"]},"test/utils/HyperdriveTest.sol":{"keccak256":"0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16","license":"Apache-2.0","urls":["bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b","dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd"]},"test/utils/HyperdriveUtils.sol":{"keccak256":"0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c","license":"Apache-2.0","urls":["bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82","dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN"]},"test/utils/Lib.sol":{"keccak256":"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2","license":"Apache-2.0","urls":["bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171","dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu"]}},"version":1}',
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
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_initialize_failure",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_initialize_failure_not_payable",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "initialSharePrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "checkpointDuration",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "checkpointsPerTerm",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "targetRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "contribution",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_initialize_success",
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
        "test/units/hyperdrive/InitializeTest.t.sol": "InitializeTest",
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
      "test/mocks/MockHyperdrive.sol": {
        keccak256:
          "0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465",
        urls: [
          "bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378",
          "dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn",
        ],
        license: "Apache-2.0",
      },
      "test/units/hyperdrive/InitializeTest.t.sol": {
        keccak256:
          "0x357a833b2ced821f5fd0a747095238e50d0cb954a19408ae6edd6a79004c3cfa",
        urls: [
          "bzz-raw://12f2be951d80413cfc276f011de3c0e4ccbe633c5438be6b04d0f109988b2417",
          "dweb:/ipfs/QmVkBhwVMXoy47AXCyGV6iQ4qnW8zK68EUojvRzyhrttek",
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
    absolutePath: "test/units/hyperdrive/InitializeTest.t.sol",
    id: 105101,
    exportedSymbols: {
      AssetId: [7731],
      FixedPointMath: [8486],
      HyperdriveMath: [10772],
      HyperdriveTest: [120941],
      HyperdriveUtils: [122442],
      IHyperdrive: [7103],
      InitializeTest: [105100],
      Lib: [123044],
      VmSafe: [27769],
    },
    nodeType: "SourceUnit",
    src: "39:4923:147",
    nodes: [
      {
        id: 104661,
        nodeType: "PragmaDirective",
        src: "39:23:147",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 104663,
        nodeType: "ImportDirective",
        src: "64:42:147",
        nodes: [],
        absolutePath: "lib/forge-std/src/Vm.sol",
        file: "forge-std/Vm.sol",
        nameLocation: "-1:-1:-1",
        scope: 105101,
        sourceUnit: 28242,
        symbolAliases: [
          {
            foreign: {
              id: 104662,
              name: "VmSafe",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 27769,
              src: "73:6:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 104665,
        nodeType: "ImportDirective",
        src: "107:71:147",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IHyperdrive.sol",
        file: "contracts/src/interfaces/IHyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 105101,
        sourceUnit: 7104,
        symbolAliases: [
          {
            foreign: {
              id: 104664,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "116:11:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 104667,
        nodeType: "ImportDirective",
        src: "179:62:147",
        nodes: [],
        absolutePath: "contracts/src/libraries/AssetId.sol",
        file: "contracts/src/libraries/AssetId.sol",
        nameLocation: "-1:-1:-1",
        scope: 105101,
        sourceUnit: 7732,
        symbolAliases: [
          {
            foreign: {
              id: 104666,
              name: "AssetId",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7731,
              src: "188:7:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 104669,
        nodeType: "ImportDirective",
        src: "242:76:147",
        nodes: [],
        absolutePath: "contracts/src/libraries/FixedPointMath.sol",
        file: "contracts/src/libraries/FixedPointMath.sol",
        nameLocation: "-1:-1:-1",
        scope: 105101,
        sourceUnit: 8487,
        symbolAliases: [
          {
            foreign: {
              id: 104668,
              name: "FixedPointMath",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 8486,
              src: "251:14:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 104671,
        nodeType: "ImportDirective",
        src: "319:76:147",
        nodes: [],
        absolutePath: "contracts/src/libraries/HyperdriveMath.sol",
        file: "contracts/src/libraries/HyperdriveMath.sol",
        nameLocation: "-1:-1:-1",
        scope: 105101,
        sourceUnit: 10773,
        symbolAliases: [
          {
            foreign: {
              id: 104670,
              name: "HyperdriveMath",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 10772,
              src: "328:14:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 104674,
        nodeType: "ImportDirective",
        src: "396:81:147",
        nodes: [],
        absolutePath: "test/utils/HyperdriveTest.sol",
        file: "../../utils/HyperdriveTest.sol",
        nameLocation: "-1:-1:-1",
        scope: 105101,
        sourceUnit: 120942,
        symbolAliases: [
          {
            foreign: {
              id: 104672,
              name: "HyperdriveTest",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 120941,
              src: "405:14:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 104673,
              name: "HyperdriveUtils",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 122442,
              src: "421:15:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 104676,
        nodeType: "ImportDirective",
        src: "478:42:147",
        nodes: [],
        absolutePath: "test/utils/Lib.sol",
        file: "../../utils/Lib.sol",
        nameLocation: "-1:-1:-1",
        scope: 105101,
        sourceUnit: 123045,
        symbolAliases: [
          {
            foreign: {
              id: 104675,
              name: "Lib",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 123044,
              src: "487:3:147",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 105100,
        nodeType: "ContractDefinition",
        src: "522:4439:147",
        nodes: [
          {
            id: 104681,
            nodeType: "UsingForDirective",
            src: "570:33:147",
            nodes: [],
            global: false,
            libraryName: {
              id: 104679,
              name: "FixedPointMath",
              nameLocations: ["576:14:147"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 8486,
              src: "576:14:147",
            },
            typeName: {
              id: 104680,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "595:7:147",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
          },
          {
            id: 104683,
            nodeType: "UsingForDirective",
            src: "608:28:147",
            nodes: [],
            global: false,
            libraryName: {
              id: 104682,
              name: "HyperdriveUtils",
              nameLocations: ["614:15:147"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 122442,
              src: "614:15:147",
            },
          },
          {
            id: 104685,
            nodeType: "UsingForDirective",
            src: "641:16:147",
            nodes: [],
            global: false,
            libraryName: {
              id: 104684,
              name: "Lib",
              nameLocations: ["647:3:147"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 123044,
              src: "647:3:147",
            },
          },
          {
            id: 104700,
            nodeType: "FunctionDefinition",
            src: "663:128:147",
            nodes: [],
            body: {
              id: 104699,
              nodeType: "Block",
              src: "696:95:147",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 104689,
                        name: "super",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: "706:5:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_super$_InitializeTest_$105100_$",
                          typeString: "type(contract super InitializeTest)",
                        },
                      },
                      id: 104691,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "712:5:147",
                      memberName: "setUp",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 119048,
                      src: "706:11:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$__$returns$__$",
                        typeString: "function ()",
                      },
                    },
                    id: 104692,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "706:13:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104693,
                  nodeType: "ExpressionStatement",
                  src: "706:13:147",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 104694,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "769:2:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 104696,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "772:10:147",
                      memberName: "recordLogs",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27353,
                      src: "769:13:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$__$returns$__$",
                        typeString: "function () external",
                      },
                    },
                    id: 104697,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "769:15:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104698,
                  nodeType: "ExpressionStatement",
                  src: "769:15:147",
                },
              ],
            },
            baseFunctions: [119048],
            functionSelector: "0a9254e4",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setUp",
            nameLocation: "672:5:147",
            overrides: {
              id: 104687,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "687:8:147",
            },
            parameters: {
              id: 104686,
              nodeType: "ParameterList",
              parameters: [],
              src: "677:2:147",
            },
            returnParameters: {
              id: 104688,
              nodeType: "ParameterList",
              parameters: [],
              src: "696:0:147",
            },
            scope: 105100,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            id: 104776,
            nodeType: "FunctionDefinition",
            src: "797:772:147",
            nodes: [],
            body: {
              id: 104775,
              nodeType: "Block",
              src: "841:728:147",
              nodes: [],
              statements: [
                {
                  assignments: [104704],
                  declarations: [
                    {
                      constant: false,
                      id: 104704,
                      mutability: "mutable",
                      name: "fixedRate",
                      nameLocation: "859:9:147",
                      nodeType: "VariableDeclaration",
                      scope: 104775,
                      src: "851:17:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 104703,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "851:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104706,
                  initialValue: {
                    hexValue: "302e35653138",
                    id: 104705,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "871:6:147",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_500000000000000000_by_1",
                      typeString: "int_const 500000000000000000",
                    },
                    value: "0.5e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "851:26:147",
                },
                {
                  assignments: [104708],
                  declarations: [
                    {
                      constant: false,
                      id: 104708,
                      mutability: "mutable",
                      name: "contribution",
                      nameLocation: "895:12:147",
                      nodeType: "VariableDeclaration",
                      scope: 104775,
                      src: "887:20:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 104707,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "887:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104710,
                  initialValue: {
                    hexValue: "313030302e30653138",
                    id: 104709,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "910:9:147",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_1000000000000000000000_by_1",
                      typeString: "int_const 1000000000000000000000",
                    },
                    value: "1000.0e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "887:32:147",
                },
                {
                  assignments: [104712],
                  declarations: [
                    {
                      constant: false,
                      id: 104712,
                      mutability: "mutable",
                      name: "lpShares",
                      nameLocation: "981:8:147",
                      nodeType: "VariableDeclaration",
                      scope: 104775,
                      src: "973:16:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 104711,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "973:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104718,
                  initialValue: {
                    arguments: [
                      {
                        id: 104714,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "1003:5:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104715,
                        name: "fixedRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104704,
                        src: "1010:9:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104716,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104708,
                        src: "1021:12:147",
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
                      id: 104713,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "992:10:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 104717,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "992:42:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "973:61:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104720,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "1066:5:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104721,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104712,
                        src: "1073:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104722,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104708,
                        src: "1083:12:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104723,
                        name: "fixedRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104704,
                        src: "1097:9:147",
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
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 104719,
                      name: "verifyInitializeEvent",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 105099,
                      src: "1044:21:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        typeString:
                          "function (address,uint256,uint256,uint256)",
                      },
                    },
                    id: 104724,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1044:63:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104725,
                  nodeType: "ExpressionStatement",
                  src: "1044:63:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104727,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "1181:5:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104728,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104712,
                        src: "1188:8:147",
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
                      id: 104726,
                      name: "removeLiquidity",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119560, 119581, 119604],
                      referencedDeclaration: 119581,
                      src: "1165:15:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 104729,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1165:32:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 104730,
                  nodeType: "ExpressionStatement",
                  src: "1165:32:147",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 104731,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "1283:2:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 104733,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1286:9:147",
                      memberName: "stopPrank",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27861,
                      src: "1283:12:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$__$returns$__$",
                        typeString: "function () external",
                      },
                    },
                    id: 104734,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1283:14:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104735,
                  nodeType: "ExpressionStatement",
                  src: "1283:14:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104739,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "1321:3:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      expression: {
                        id: 104736,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "1307:2:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 104738,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1310:10:147",
                      memberName: "startPrank",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27844,
                      src: "1307:13:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_address_$returns$__$",
                        typeString: "function (address) external",
                      },
                    },
                    id: 104740,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1307:18:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104741,
                  nodeType: "ExpressionStatement",
                  src: "1307:18:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104745,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104708,
                        src: "1350:12:147",
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
                        id: 104742,
                        name: "baseToken",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118891,
                        src: "1335:9:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_ERC20Mintable_$13321",
                          typeString: "contract ERC20Mintable",
                        },
                      },
                      id: 104744,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1345:4:147",
                      memberName: "mint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 13276,
                      src: "1335:14:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 104746,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1335:28:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104747,
                  nodeType: "ExpressionStatement",
                  src: "1335:28:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 104753,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "1399:10:147",
                            typeDescriptions: {
                              typeIdentifier: "t_contract$_IHyperdrive_$7103",
                              typeString: "contract IHyperdrive",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_contract$_IHyperdrive_$7103",
                              typeString: "contract IHyperdrive",
                            },
                          ],
                          id: 104752,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "1391:7:147",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_address_$",
                            typeString: "type(address)",
                          },
                          typeName: {
                            id: 104751,
                            name: "address",
                            nodeType: "ElementaryTypeName",
                            src: "1391:7:147",
                            typeDescriptions: {},
                          },
                        },
                        id: 104754,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "1391:19:147",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104755,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104708,
                        src: "1412:12:147",
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
                      expression: {
                        id: 104748,
                        name: "baseToken",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118891,
                        src: "1373:9:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_ERC20Mintable_$13321",
                          typeString: "contract ERC20Mintable",
                        },
                      },
                      id: 104750,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1383:7:147",
                      memberName: "approve",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 62967,
                      src: "1373:17:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        typeString:
                          "function (address,uint256) external returns (bool)",
                      },
                    },
                    id: 104756,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1373:52:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 104757,
                  nodeType: "ExpressionStatement",
                  src: "1373:52:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          expression: {
                            id: 104761,
                            name: "IHyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 7103,
                            src: "1451:11:147",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_IHyperdrive_$7103_$",
                              typeString: "type(contract IHyperdrive)",
                            },
                          },
                          id: 104762,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "1463:22:147",
                          memberName: "PoolAlreadyInitialized",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 7014,
                          src: "1451:34:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_error_pure$__$returns$__$",
                            typeString: "function () pure",
                          },
                        },
                        id: 104763,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1486:8:147",
                        memberName: "selector",
                        nodeType: "MemberAccess",
                        src: "1451:43:147",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes4",
                          typeString: "bytes4",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes4",
                          typeString: "bytes4",
                        },
                      ],
                      expression: {
                        id: 104758,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "1435:2:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 104760,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1438:12:147",
                      memberName: "expectRevert",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27900,
                      src: "1435:15:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_bytes4_$returns$__$",
                        typeString: "function (bytes4) external",
                      },
                    },
                    id: 104764,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1435:60:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104765,
                  nodeType: "ExpressionStatement",
                  src: "1435:60:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104769,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104708,
                        src: "1527:12:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104770,
                        name: "fixedRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104704,
                        src: "1541:9:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104771,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "1552:3:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "74727565",
                        id: 104772,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "bool",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "1557:4:147",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        value: "true",
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
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      expression: {
                        id: 104766,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "1505:10:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 104768,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1516:10:147",
                      memberName: "initialize",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7223,
                      src: "1505:21:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_payable$_t_uint256_$_t_uint256_$_t_address_$_t_bool_$returns$_t_uint256_$",
                        typeString:
                          "function (uint256,uint256,address,bool) payable external returns (uint256)",
                      },
                    },
                    id: 104773,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1505:57:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104774,
                  nodeType: "ExpressionStatement",
                  src: "1505:57:147",
                },
              ],
            },
            functionSelector: "36ddd580",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_initialize_failure",
            nameLocation: "806:23:147",
            parameters: {
              id: 104701,
              nodeType: "ParameterList",
              parameters: [],
              src: "829:2:147",
            },
            returnParameters: {
              id: 104702,
              nodeType: "ParameterList",
              parameters: [],
              src: "841:0:147",
            },
            scope: 105100,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 104834,
            nodeType: "FunctionDefinition",
            src: "1575:492:147",
            nodes: [],
            body: {
              id: 104833,
              nodeType: "Block",
              src: "1631:436:147",
              nodes: [],
              statements: [
                {
                  assignments: [104780],
                  declarations: [
                    {
                      constant: false,
                      id: 104780,
                      mutability: "mutable",
                      name: "fixedRate",
                      nameLocation: "1649:9:147",
                      nodeType: "VariableDeclaration",
                      scope: 104833,
                      src: "1641:17:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 104779,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1641:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104782,
                  initialValue: {
                    hexValue: "302e35653138",
                    id: 104781,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "1661:6:147",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_500000000000000000_by_1",
                      typeString: "int_const 500000000000000000",
                    },
                    value: "0.5e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1641:26:147",
                },
                {
                  assignments: [104784],
                  declarations: [
                    {
                      constant: false,
                      id: 104784,
                      mutability: "mutable",
                      name: "contribution",
                      nameLocation: "1685:12:147",
                      nodeType: "VariableDeclaration",
                      scope: 104833,
                      src: "1677:20:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 104783,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1677:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104786,
                  initialValue: {
                    hexValue: "313030302e30653138",
                    id: 104785,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "1700:9:147",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_1000000000000000000000_by_1",
                      typeString: "int_const 1000000000000000000000",
                    },
                    value: "1000.0e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1677:32:147",
                },
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 104787,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "1781:2:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 104789,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1784:9:147",
                      memberName: "stopPrank",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27861,
                      src: "1781:12:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$__$returns$__$",
                        typeString: "function () external",
                      },
                    },
                    id: 104790,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1781:14:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104791,
                  nodeType: "ExpressionStatement",
                  src: "1781:14:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104795,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "1819:3:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      expression: {
                        id: 104792,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "1805:2:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 104794,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1808:10:147",
                      memberName: "startPrank",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27844,
                      src: "1805:13:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_address_$returns$__$",
                        typeString: "function (address) external",
                      },
                    },
                    id: 104796,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1805:18:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104797,
                  nodeType: "ExpressionStatement",
                  src: "1805:18:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104801,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104784,
                        src: "1848:12:147",
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
                        id: 104798,
                        name: "baseToken",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118891,
                        src: "1833:9:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_ERC20Mintable_$13321",
                          typeString: "contract ERC20Mintable",
                        },
                      },
                      id: 104800,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1843:4:147",
                      memberName: "mint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 13276,
                      src: "1833:14:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 104802,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1833:28:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104803,
                  nodeType: "ExpressionStatement",
                  src: "1833:28:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 104809,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "1897:10:147",
                            typeDescriptions: {
                              typeIdentifier: "t_contract$_IHyperdrive_$7103",
                              typeString: "contract IHyperdrive",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_contract$_IHyperdrive_$7103",
                              typeString: "contract IHyperdrive",
                            },
                          ],
                          id: 104808,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "1889:7:147",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_address_$",
                            typeString: "type(address)",
                          },
                          typeName: {
                            id: 104807,
                            name: "address",
                            nodeType: "ElementaryTypeName",
                            src: "1889:7:147",
                            typeDescriptions: {},
                          },
                        },
                        id: 104810,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "1889:19:147",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104811,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104784,
                        src: "1910:12:147",
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
                      expression: {
                        id: 104804,
                        name: "baseToken",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118891,
                        src: "1871:9:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_ERC20Mintable_$13321",
                          typeString: "contract ERC20Mintable",
                        },
                      },
                      id: 104806,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1881:7:147",
                      memberName: "approve",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 62967,
                      src: "1871:17:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        typeString:
                          "function (address,uint256) external returns (bool)",
                      },
                    },
                    id: 104812,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1871:52:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 104813,
                  nodeType: "ExpressionStatement",
                  src: "1871:52:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          expression: {
                            id: 104817,
                            name: "IHyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 7103,
                            src: "1949:11:147",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_IHyperdrive_$7103_$",
                              typeString: "type(contract IHyperdrive)",
                            },
                          },
                          id: 104818,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "1961:10:147",
                          memberName: "NotPayable",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 7008,
                          src: "1949:22:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_error_pure$__$returns$__$",
                            typeString: "function () pure",
                          },
                        },
                        id: 104819,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1972:8:147",
                        memberName: "selector",
                        nodeType: "MemberAccess",
                        src: "1949:31:147",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes4",
                          typeString: "bytes4",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes4",
                          typeString: "bytes4",
                        },
                      ],
                      expression: {
                        id: 104814,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "1933:2:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 104816,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1936:12:147",
                      memberName: "expectRevert",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27900,
                      src: "1933:15:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_bytes4_$returns$__$",
                        typeString: "function (bytes4) external",
                      },
                    },
                    id: 104820,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1933:48:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104821,
                  nodeType: "ExpressionStatement",
                  src: "1933:48:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104827,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104784,
                        src: "2025:12:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104828,
                        name: "fixedRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104780,
                        src: "2039:9:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104829,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "2050:3:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "74727565",
                        id: 104830,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "bool",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "2055:4:147",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        value: "true",
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
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
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
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        expression: {
                          id: 104822,
                          name: "hyperdrive",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118894,
                          src: "1991:10:147",
                          typeDescriptions: {
                            typeIdentifier: "t_contract$_IHyperdrive_$7103",
                            typeString: "contract IHyperdrive",
                          },
                        },
                        id: 104824,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2002:10:147",
                        memberName: "initialize",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 7223,
                        src: "1991:21:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_external_payable$_t_uint256_$_t_uint256_$_t_address_$_t_bool_$returns$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,address,bool) payable external returns (uint256)",
                        },
                      },
                      id: 104826,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      names: ["value"],
                      nodeType: "FunctionCallOptions",
                      options: [
                        {
                          hexValue: "31",
                          id: 104825,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2021:1:147",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_1_by_1",
                            typeString: "int_const 1",
                          },
                          value: "1",
                        },
                      ],
                      src: "1991:33:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_payable$_t_uint256_$_t_uint256_$_t_address_$_t_bool_$returns$_t_uint256_$value",
                        typeString:
                          "function (uint256,uint256,address,bool) payable external returns (uint256)",
                      },
                    },
                    id: 104831,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1991:69:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104832,
                  nodeType: "ExpressionStatement",
                  src: "1991:69:147",
                },
              ],
            },
            functionSelector: "421c5d8e",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_initialize_failure_not_payable",
            nameLocation: "1584:35:147",
            parameters: {
              id: 104777,
              nodeType: "ParameterList",
              parameters: [],
              src: "1619:2:147",
            },
            returnParameters: {
              id: 104778,
              nodeType: "ParameterList",
              parameters: [],
              src: "1631:0:147",
            },
            scope: 105100,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 105007,
            nodeType: "FunctionDefinition",
            src: "2073:2147:147",
            nodes: [],
            body: {
              id: 105006,
              nodeType: "Block",
              src: "2286:1934:147",
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 104853,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 104847,
                      name: "initialSharePrice",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104836,
                      src: "2296:17:147",
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
                          hexValue: "302e35653138",
                          id: 104850,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2351:6:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_500000000000000000_by_1",
                            typeString: "int_const 500000000000000000",
                          },
                          value: "0.5e18",
                        },
                        {
                          hexValue: "35653138",
                          id: 104851,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2359:4:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_5000000000000000000_by_1",
                            typeString: "int_const 5000000000000000000",
                          },
                          value: "5e18",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier:
                              "t_rational_500000000000000000_by_1",
                            typeString: "int_const 500000000000000000",
                          },
                          {
                            typeIdentifier:
                              "t_rational_5000000000000000000_by_1",
                            typeString: "int_const 5000000000000000000",
                          },
                        ],
                        expression: {
                          id: 104848,
                          name: "initialSharePrice",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 104836,
                          src: "2316:17:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 104849,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2334:16:147",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "2316:34:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 104852,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2316:48:147",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2296:68:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104854,
                  nodeType: "ExpressionStatement",
                  src: "2296:68:147",
                },
                {
                  expression: {
                    id: 104861,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 104855,
                      name: "checkpointDuration",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104838,
                      src: "2374:18:147",
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
                          hexValue: "31",
                          id: 104858,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2431:1:147",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_1_by_1",
                            typeString: "int_const 1",
                          },
                          value: "1",
                        },
                        {
                          hexValue: "3234",
                          id: 104859,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2434:2:147",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_24_by_1",
                            typeString: "int_const 24",
                          },
                          value: "24",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_rational_1_by_1",
                            typeString: "int_const 1",
                          },
                          {
                            typeIdentifier: "t_rational_24_by_1",
                            typeString: "int_const 24",
                          },
                        ],
                        expression: {
                          id: 104856,
                          name: "checkpointDuration",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 104838,
                          src: "2395:18:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 104857,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2414:16:147",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "2395:35:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 104860,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2395:42:147",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2374:63:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104862,
                  nodeType: "ExpressionStatement",
                  src: "2374:63:147",
                },
                {
                  expression: {
                    id: 104865,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 104863,
                      name: "checkpointDuration",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104838,
                      src: "2447:18:147",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "*=",
                    rightHandSide: {
                      hexValue: "31",
                      id: 104864,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2469:7:147",
                      subdenomination: "hours",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_3600_by_1",
                        typeString: "int_const 3600",
                      },
                      value: "1",
                    },
                    src: "2447:29:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104866,
                  nodeType: "ExpressionStatement",
                  src: "2447:29:147",
                },
                {
                  expression: {
                    id: 104875,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 104867,
                      name: "checkpointsPerTerm",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104840,
                      src: "2486:18:147",
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
                          hexValue: "37",
                          id: 104870,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2543:1:147",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_7_by_1",
                            typeString: "int_const 7",
                          },
                          value: "7",
                        },
                        {
                          commonType: {
                            typeIdentifier: "t_rational_730_by_1",
                            typeString: "int_const 730",
                          },
                          id: 104873,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          leftExpression: {
                            hexValue: "32",
                            id: 104871,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2546:1:147",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_2_by_1",
                              typeString: "int_const 2",
                            },
                            value: "2",
                          },
                          nodeType: "BinaryOperation",
                          operator: "*",
                          rightExpression: {
                            hexValue: "333635",
                            id: 104872,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2550:3:147",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_365_by_1",
                              typeString: "int_const 365",
                            },
                            value: "365",
                          },
                          src: "2546:7:147",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_730_by_1",
                            typeString: "int_const 730",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_rational_7_by_1",
                            typeString: "int_const 7",
                          },
                          {
                            typeIdentifier: "t_rational_730_by_1",
                            typeString: "int_const 730",
                          },
                        ],
                        expression: {
                          id: 104868,
                          name: "checkpointsPerTerm",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 104840,
                          src: "2507:18:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 104869,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2526:16:147",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "2507:35:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 104874,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2507:47:147",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2486:68:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104876,
                  nodeType: "ExpressionStatement",
                  src: "2486:68:147",
                },
                {
                  expression: {
                    id: 104883,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 104877,
                      name: "targetRate",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104842,
                      src: "2564:10:147",
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
                          hexValue: "302e3031653138",
                          id: 104880,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2605:7:147",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_10000000000000000_by_1",
                            typeString: "int_const 10000000000000000",
                          },
                          value: "0.01e18",
                        },
                        {
                          hexValue: "31653138",
                          id: 104881,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2614:4:147",
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
                            typeIdentifier: "t_rational_10000000000000000_by_1",
                            typeString: "int_const 10000000000000000",
                          },
                          {
                            typeIdentifier:
                              "t_rational_1000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000",
                          },
                        ],
                        expression: {
                          id: 104878,
                          name: "targetRate",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 104842,
                          src: "2577:10:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 104879,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2588:16:147",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "2577:27:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 104882,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2577:42:147",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2564:55:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104884,
                  nodeType: "ExpressionStatement",
                  src: "2564:55:147",
                },
                {
                  expression: {
                    id: 104891,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 104885,
                      name: "contribution",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104844,
                      src: "2629:12:147",
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
                          id: 104888,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2674:8:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_1000000000000000000000_by_1",
                            typeString: "int_const 1000000000000000000000",
                          },
                          value: "1_000e18",
                        },
                        {
                          hexValue: "3130305f3030305f303030653138",
                          id: 104889,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "2684:14:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_rational_100000000000000000000000000_by_1",
                            typeString: "int_const 100000000000000000000000000",
                          },
                          value: "100_000_000e18",
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
                              "t_rational_100000000000000000000000000_by_1",
                            typeString: "int_const 100000000000000000000000000",
                          },
                        ],
                        expression: {
                          id: 104886,
                          name: "contribution",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 104844,
                          src: "2644:12:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 104887,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2657:16:147",
                        memberName: "normalizeToRange",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 122901,
                        src: "2644:29:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 104890,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2644:55:147",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2629:70:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104892,
                  nodeType: "ExpressionStatement",
                  src: "2629:70:147",
                },
                {
                  assignments: [104897],
                  declarations: [
                    {
                      constant: false,
                      id: 104897,
                      mutability: "mutable",
                      name: "config",
                      nameLocation: "2803:6:147",
                      nodeType: "VariableDeclaration",
                      scope: 105006,
                      src: "2773:36:147",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_PoolConfig_$6924_memory_ptr",
                        typeString: "struct IHyperdrive.PoolConfig",
                      },
                      typeName: {
                        id: 104896,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 104895,
                          name: "IHyperdrive.PoolConfig",
                          nameLocations: ["2773:11:147", "2785:10:147"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6924,
                          src: "2773:22:147",
                        },
                        referencedDeclaration: 6924,
                        src: "2773:22:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_storage_ptr",
                          typeString: "struct IHyperdrive.PoolConfig",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104901,
                  initialValue: {
                    arguments: [
                      {
                        hexValue: "302e3035653138",
                        id: 104899,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "2823:7:147",
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
                      id: 104898,
                      name: "testConfig",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 119224,
                      src: "2812:10:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_uint256_$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        typeString:
                          "function (uint256) view returns (struct IHyperdrive.PoolConfig memory)",
                      },
                    },
                    id: 104900,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2812:19:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolConfig_$6924_memory_ptr",
                      typeString: "struct IHyperdrive.PoolConfig memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2773:58:147",
                },
                {
                  expression: {
                    id: 104906,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      expression: {
                        id: 104902,
                        name: "config",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104897,
                        src: "2841:6:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_memory_ptr",
                          typeString: "struct IHyperdrive.PoolConfig memory",
                        },
                      },
                      id: 104904,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      memberLocation: "2848:17:147",
                      memberName: "initialSharePrice",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 6892,
                      src: "2841:24:147",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 104905,
                      name: "initialSharePrice",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104836,
                      src: "2868:17:147",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2841:44:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104907,
                  nodeType: "ExpressionStatement",
                  src: "2841:44:147",
                },
                {
                  expression: {
                    id: 104912,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      expression: {
                        id: 104908,
                        name: "config",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104897,
                        src: "2895:6:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_memory_ptr",
                          typeString: "struct IHyperdrive.PoolConfig memory",
                        },
                      },
                      id: 104910,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      memberLocation: "2902:18:147",
                      memberName: "checkpointDuration",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 6904,
                      src: "2895:25:147",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      id: 104911,
                      name: "checkpointDuration",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 104838,
                      src: "2923:18:147",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2895:46:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104913,
                  nodeType: "ExpressionStatement",
                  src: "2895:46:147",
                },
                {
                  expression: {
                    id: 104920,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      expression: {
                        id: 104914,
                        name: "config",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104897,
                        src: "2951:6:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_memory_ptr",
                          typeString: "struct IHyperdrive.PoolConfig memory",
                        },
                      },
                      id: 104916,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      memberLocation: "2958:16:147",
                      memberName: "positionDuration",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 6901,
                      src: "2951:23:147",
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
                      id: 104919,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 104917,
                        name: "checkpointDuration",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104838,
                        src: "2977:18:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "*",
                      rightExpression: {
                        id: 104918,
                        name: "checkpointsPerTerm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104840,
                        src: "2998:18:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "2977:39:147",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2951:65:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 104921,
                  nodeType: "ExpressionStatement",
                  src: "2951:65:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104923,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "3033:5:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104924,
                        name: "config",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104897,
                        src: "3040:6:147",
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
                      id: 104922,
                      name: "deploy",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119093, 119116, 119178],
                      referencedDeclaration: 119093,
                      src: "3026:6:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_struct$_PoolConfig_$6924_memory_ptr_$returns$__$",
                        typeString:
                          "function (address,struct IHyperdrive.PoolConfig memory)",
                      },
                    },
                    id: 104925,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3026:21:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104926,
                  nodeType: "ExpressionStatement",
                  src: "3026:21:147",
                },
                {
                  assignments: [104928],
                  declarations: [
                    {
                      constant: false,
                      id: 104928,
                      mutability: "mutable",
                      name: "lpShares",
                      nameLocation: "3109:8:147",
                      nodeType: "VariableDeclaration",
                      scope: 105006,
                      src: "3101:16:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 104927,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "3101:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104934,
                  initialValue: {
                    arguments: [
                      {
                        id: 104930,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "3131:5:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104931,
                        name: "targetRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104842,
                        src: "3138:10:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104932,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104844,
                        src: "3150:12:147",
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
                      id: 104929,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "3120:10:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 104933,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3120:43:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "3101:62:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104936,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "3195:5:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 104937,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104928,
                        src: "3202:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104938,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104844,
                        src: "3212:12:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104939,
                        name: "targetRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104842,
                        src: "3226:10:147",
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
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 104935,
                      name: "verifyInitializeEvent",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 105099,
                      src: "3173:21:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        typeString:
                          "function (address,uint256,uint256,uint256)",
                      },
                    },
                    id: 104940,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3173:64:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104941,
                  nodeType: "ExpressionStatement",
                  src: "3173:64:147",
                },
                {
                  assignments: [104943],
                  declarations: [
                    {
                      constant: false,
                      id: 104943,
                      mutability: "mutable",
                      name: "spotRate",
                      nameLocation: "3359:8:147",
                      nodeType: "VariableDeclaration",
                      scope: 105006,
                      src: "3351:16:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 104942,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "3351:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 104947,
                  initialValue: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 104944,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "3370:10:147",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 104945,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "3381:24:147",
                      memberName: "calculateAPRFromReserves",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 121127,
                      src: "3370:35:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$attached_to$_t_contract$_IHyperdrive_$7103_$",
                        typeString:
                          "function (contract IHyperdrive) view returns (uint256)",
                      },
                    },
                    id: 104946,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3370:37:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "3351:56:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104949,
                        name: "spotRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104943,
                        src: "3435:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104950,
                        name: "targetRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104842,
                        src: "3445:10:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "31653130",
                        id: 104951,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3457:4:147",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_10000000000_by_1",
                          typeString: "int_const 10000000000",
                        },
                        value: "1e10",
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
                        {
                          typeIdentifier: "t_rational_10000000000_by_1",
                          typeString: "int_const 10000000000",
                        },
                      ],
                      id: 104948,
                      name: "assertApproxEqAbs",
                      nodeType: "Identifier",
                      overloadedDeclarations: [17624, 17660, 17805, 17841],
                      referencedDeclaration: 17624,
                      src: "3417:17:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256,uint256)",
                      },
                    },
                    id: 104952,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3417:45:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104953,
                  nodeType: "ExpressionStatement",
                  src: "3417:45:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 104957,
                            name: "alice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116795,
                            src: "3659:5:147",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          ],
                          expression: {
                            id: 104955,
                            name: "baseToken",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118891,
                            src: "3639:9:147",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_contract$_ERC20Mintable_$13321",
                              typeString: "contract ERC20Mintable",
                            },
                          },
                          id: 104956,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3649:9:147",
                          memberName: "balanceOf",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 62893,
                          src: "3639:19:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            typeString:
                              "function (address) view external returns (uint256)",
                          },
                        },
                        id: 104958,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3639:26:147",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "30",
                        id: 104959,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3667:1:147",
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
                      id: 104954,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "3630:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 104960,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3630:39:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104961,
                  nodeType: "ExpressionStatement",
                  src: "3630:39:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                id: 104967,
                                name: "hyperdrive",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 118894,
                                src: "3716:10:147",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_contract$_IHyperdrive_$7103",
                                  typeString: "contract IHyperdrive",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier:
                                    "t_contract$_IHyperdrive_$7103",
                                  typeString: "contract IHyperdrive",
                                },
                              ],
                              id: 104966,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: "ElementaryTypeNameExpression",
                              src: "3708:7:147",
                              typeDescriptions: {
                                typeIdentifier: "t_type$_t_address_$",
                                typeString: "type(address)",
                              },
                              typeName: {
                                id: 104965,
                                name: "address",
                                nodeType: "ElementaryTypeName",
                                src: "3708:7:147",
                                typeDescriptions: {},
                              },
                            },
                            id: 104968,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "typeConversion",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "3708:19:147",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          ],
                          expression: {
                            id: 104963,
                            name: "baseToken",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118891,
                            src: "3688:9:147",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_contract$_ERC20Mintable_$13321",
                              typeString: "contract ERC20Mintable",
                            },
                          },
                          id: 104964,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3698:9:147",
                          memberName: "balanceOf",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 62893,
                          src: "3688:19:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            typeString:
                              "function (address) view external returns (uint256)",
                          },
                        },
                        id: 104969,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3688:40:147",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 104970,
                        name: "contribution",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104844,
                        src: "3730:12:147",
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
                      id: 104962,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "3679:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 104971,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3679:64:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104972,
                  nodeType: "ExpressionStatement",
                  src: "3679:64:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104974,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104928,
                        src: "3775:8:147",
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
                        id: 104982,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            arguments: [],
                            expression: {
                              argumentTypes: [],
                              expression: {
                                id: 104975,
                                name: "hyperdrive",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 118894,
                                src: "3797:10:147",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_contract$_IHyperdrive_$7103",
                                  typeString: "contract IHyperdrive",
                                },
                              },
                              id: 104976,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberLocation: "3808:11:147",
                              memberName: "getPoolInfo",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 7177,
                              src: "3797:22:147",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                                typeString:
                                  "function () view external returns (struct IHyperdrive.PoolInfo memory)",
                              },
                            },
                            id: 104977,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "3797:24:147",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier:
                                "t_struct$_PoolInfo_$6964_memory_ptr",
                              typeString: "struct IHyperdrive.PoolInfo memory",
                            },
                          },
                          id: 104978,
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3822:13:147",
                          memberName: "shareReserves",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 6927,
                          src: "3797:38:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "-",
                        rightExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 104981,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          leftExpression: {
                            hexValue: "32",
                            id: 104979,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "3838:1:147",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_2_by_1",
                              typeString: "int_const 2",
                            },
                            value: "2",
                          },
                          nodeType: "BinaryOperation",
                          operator: "*",
                          rightExpression: {
                            id: 104980,
                            name: "MINIMUM_SHARE_RESERVES",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118902,
                            src: "3842:22:147",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "3838:26:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "3797:67:147",
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
                      id: 104973,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "3753:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 104983,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3753:121:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104984,
                  nodeType: "ExpressionStatement",
                  src: "3753:121:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104986,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104928,
                        src: "4017:8:147",
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
                        id: 104993,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          arguments: [
                            {
                              expression: {
                                id: 104989,
                                name: "AssetId",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 7731,
                                src: "4062:7:147",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_type$_t_contract$_AssetId_$7731_$",
                                  typeString: "type(library AssetId)",
                                },
                              },
                              id: 104990,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              memberLocation: "4070:12:147",
                              memberName: "_LP_ASSET_ID",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 7680,
                              src: "4062:20:147",
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
                              id: 104987,
                              name: "hyperdrive",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 118894,
                              src: "4039:10:147",
                              typeDescriptions: {
                                typeIdentifier: "t_contract$_IHyperdrive_$7103",
                                typeString: "contract IHyperdrive",
                              },
                            },
                            id: 104988,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: "4050:11:147",
                            memberName: "totalSupply",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 7498,
                            src: "4039:22:147",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                              typeString:
                                "function (uint256) view external returns (uint256)",
                            },
                          },
                          id: 104991,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "4039:44:147",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "-",
                        rightExpression: {
                          id: 104992,
                          name: "MINIMUM_SHARE_RESERVES",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118902,
                          src: "4102:22:147",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "4039:85:147",
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
                      id: 104985,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "3995:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 104994,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3995:139:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 104995,
                  nodeType: "ExpressionStatement",
                  src: "3995:139:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 104997,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 104928,
                        src: "4153:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        arguments: [
                          {
                            expression: {
                              id: 105000,
                              name: "AssetId",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 7731,
                              src: "4184:7:147",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_type$_t_contract$_AssetId_$7731_$",
                                typeString: "type(library AssetId)",
                              },
                            },
                            id: 105001,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            memberLocation: "4192:12:147",
                            memberName: "_LP_ASSET_ID",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 7680,
                            src: "4184:20:147",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          {
                            id: 105002,
                            name: "alice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 116795,
                            src: "4206:5:147",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
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
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          ],
                          expression: {
                            id: 104998,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "4163:10:147",
                            typeDescriptions: {
                              typeIdentifier: "t_contract$_IHyperdrive_$7103",
                              typeString: "contract IHyperdrive",
                            },
                          },
                          id: 104999,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "4174:9:147",
                          memberName: "balanceOf",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 7537,
                          src: "4163:20:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_external_view$_t_uint256_$_t_address_$returns$_t_uint256_$",
                            typeString:
                              "function (uint256,address) view external returns (uint256)",
                          },
                        },
                        id: 105003,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4163:49:147",
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
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 104996,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "4144:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 105004,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4144:69:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 105005,
                  nodeType: "ExpressionStatement",
                  src: "4144:69:147",
                },
              ],
            },
            functionSelector: "a80fb9bc",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_initialize_success",
            nameLocation: "2082:23:147",
            parameters: {
              id: 104845,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 104836,
                  mutability: "mutable",
                  name: "initialSharePrice",
                  nameLocation: "2123:17:147",
                  nodeType: "VariableDeclaration",
                  scope: 105007,
                  src: "2115:25:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 104835,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2115:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 104838,
                  mutability: "mutable",
                  name: "checkpointDuration",
                  nameLocation: "2158:18:147",
                  nodeType: "VariableDeclaration",
                  scope: 105007,
                  src: "2150:26:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 104837,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2150:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 104840,
                  mutability: "mutable",
                  name: "checkpointsPerTerm",
                  nameLocation: "2194:18:147",
                  nodeType: "VariableDeclaration",
                  scope: 105007,
                  src: "2186:26:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 104839,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2186:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 104842,
                  mutability: "mutable",
                  name: "targetRate",
                  nameLocation: "2230:10:147",
                  nodeType: "VariableDeclaration",
                  scope: 105007,
                  src: "2222:18:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 104841,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2222:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 104844,
                  mutability: "mutable",
                  name: "contribution",
                  nameLocation: "2258:12:147",
                  nodeType: "VariableDeclaration",
                  scope: 105007,
                  src: "2250:20:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 104843,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2250:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2105:171:147",
            },
            returnParameters: {
              id: 104846,
              nodeType: "ParameterList",
              parameters: [],
              src: "2286:0:147",
            },
            scope: 105100,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 105099,
            nodeType: "FunctionDefinition",
            src: "4226:733:147",
            nodes: [],
            body: {
              id: 105098,
              nodeType: "Block",
              src: "4402:557:147",
              nodes: [],
              statements: [
                {
                  assignments: [105023],
                  declarations: [
                    {
                      constant: false,
                      id: 105023,
                      mutability: "mutable",
                      name: "logs",
                      nameLocation: "4432:4:147",
                      nodeType: "VariableDeclaration",
                      scope: 105098,
                      src: "4412:24:147",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr",
                        typeString: "struct VmSafe.Log[]",
                      },
                      typeName: {
                        baseType: {
                          id: 105021,
                          nodeType: "UserDefinedTypeName",
                          pathNode: {
                            id: 105020,
                            name: "VmSafe.Log",
                            nameLocations: ["4412:6:147", "4419:3:147"],
                            nodeType: "IdentifierPath",
                            referencedDeclaration: 26721,
                            src: "4412:10:147",
                          },
                          referencedDeclaration: 26721,
                          src: "4412:10:147",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Log_$26721_storage_ptr",
                            typeString: "struct VmSafe.Log",
                          },
                        },
                        id: 105022,
                        nodeType: "ArrayTypeName",
                        src: "4412:12:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_array$_t_struct$_Log_$26721_storage_$dyn_storage_ptr",
                          typeString: "struct VmSafe.Log[]",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 105031,
                  initialValue: {
                    arguments: [
                      {
                        expression: {
                          id: 105028,
                          name: "Initialize",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 120601,
                          src: "4484:10:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                            typeString:
                              "function (address,uint256,uint256,uint256)",
                          },
                        },
                        id: 105029,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "4495:8:147",
                        memberName: "selector",
                        nodeType: "MemberAccess",
                        src: "4484:19:147",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      ],
                      expression: {
                        arguments: [],
                        expression: {
                          argumentTypes: [],
                          expression: {
                            id: 105024,
                            name: "vm",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 17090,
                            src: "4439:2:147",
                            typeDescriptions: {
                              typeIdentifier: "t_contract$_Vm_$28241",
                              typeString: "contract Vm",
                            },
                          },
                          id: 105025,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "4442:15:147",
                          memberName: "getRecordedLogs",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 27360,
                          src: "4439:18:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_external_nonpayable$__$returns$_t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr_$",
                            typeString:
                              "function () external returns (struct VmSafe.Log memory[] memory)",
                          },
                        },
                        id: 105026,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4439:20:147",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr",
                          typeString: "struct VmSafe.Log memory[] memory",
                        },
                      },
                      id: 105027,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "4460:10:147",
                      memberName: "filterLogs",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 122515,
                      src: "4439:31:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_pure$_t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr_$_t_bytes32_$returns$_t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr_$attached_to$_t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr_$",
                        typeString:
                          "function (struct VmSafe.Log memory[] memory,bytes32) pure returns (struct VmSafe.Log memory[] memory)",
                      },
                    },
                    id: 105030,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4439:74:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier:
                        "t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr",
                      typeString: "struct VmSafe.Log memory[] memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "4412:101:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 105033,
                          name: "logs",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 105023,
                          src: "4532:4:147",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr",
                            typeString: "struct VmSafe.Log memory[] memory",
                          },
                        },
                        id: 105034,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "4537:6:147",
                        memberName: "length",
                        nodeType: "MemberAccess",
                        src: "4532:11:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "31",
                        id: 105035,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "4545:1:147",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_1_by_1",
                          typeString: "int_const 1",
                        },
                        value: "1",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_rational_1_by_1",
                          typeString: "int_const 1",
                        },
                      ],
                      id: 105032,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "4523:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 105036,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4523:24:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 105037,
                  nodeType: "ExpressionStatement",
                  src: "4523:24:147",
                },
                {
                  assignments: [105042],
                  declarations: [
                    {
                      constant: false,
                      id: 105042,
                      mutability: "mutable",
                      name: "log",
                      nameLocation: "4575:3:147",
                      nodeType: "VariableDeclaration",
                      scope: 105098,
                      src: "4557:21:147",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Log_$26721_memory_ptr",
                        typeString: "struct VmSafe.Log",
                      },
                      typeName: {
                        id: 105041,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 105040,
                          name: "VmSafe.Log",
                          nameLocations: ["4557:6:147", "4564:3:147"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 26721,
                          src: "4557:10:147",
                        },
                        referencedDeclaration: 26721,
                        src: "4557:10:147",
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_Log_$26721_storage_ptr",
                          typeString: "struct VmSafe.Log",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 105046,
                  initialValue: {
                    baseExpression: {
                      id: 105043,
                      name: "logs",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 105023,
                      src: "4581:4:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_array$_t_struct$_Log_$26721_memory_ptr_$dyn_memory_ptr",
                        typeString: "struct VmSafe.Log memory[] memory",
                      },
                    },
                    id: 105045,
                    indexExpression: {
                      hexValue: "30",
                      id: 105044,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "4586:1:147",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_0_by_1",
                        typeString: "int_const 0",
                      },
                      value: "0",
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "IndexAccess",
                    src: "4581:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Log_$26721_memory_ptr",
                      typeString: "struct VmSafe.Log memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "4557:31:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    baseExpression: {
                                      expression: {
                                        id: 105054,
                                        name: "log",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 105042,
                                        src: "4631:3:147",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_struct$_Log_$26721_memory_ptr",
                                          typeString:
                                            "struct VmSafe.Log memory",
                                        },
                                      },
                                      id: 105055,
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      memberLocation: "4635:6:147",
                                      memberName: "topics",
                                      nodeType: "MemberAccess",
                                      referencedDeclaration: 26716,
                                      src: "4631:10:147",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_array$_t_bytes32_$dyn_memory_ptr",
                                        typeString: "bytes32[] memory",
                                      },
                                    },
                                    id: 105057,
                                    indexExpression: {
                                      hexValue: "31",
                                      id: 105056,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      kind: "number",
                                      lValueRequested: false,
                                      nodeType: "Literal",
                                      src: "4642:1:147",
                                      typeDescriptions: {
                                        typeIdentifier: "t_rational_1_by_1",
                                        typeString: "int_const 1",
                                      },
                                      value: "1",
                                    },
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    nodeType: "IndexAccess",
                                    src: "4631:13:147",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bytes32",
                                      typeString: "bytes32",
                                    },
                                  },
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_bytes32",
                                      typeString: "bytes32",
                                    },
                                  ],
                                  id: 105053,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: "ElementaryTypeNameExpression",
                                  src: "4623:7:147",
                                  typeDescriptions: {
                                    typeIdentifier: "t_type$_t_uint256_$",
                                    typeString: "type(uint256)",
                                  },
                                  typeName: {
                                    id: 105052,
                                    name: "uint256",
                                    nodeType: "ElementaryTypeName",
                                    src: "4623:7:147",
                                    typeDescriptions: {},
                                  },
                                },
                                id: 105058,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "typeConversion",
                                lValueRequested: false,
                                nameLocations: [],
                                names: [],
                                nodeType: "FunctionCall",
                                src: "4623:22:147",
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
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              ],
                              id: 105051,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: "ElementaryTypeNameExpression",
                              src: "4615:7:147",
                              typeDescriptions: {
                                typeIdentifier: "t_type$_t_uint160_$",
                                typeString: "type(uint160)",
                              },
                              typeName: {
                                id: 105050,
                                name: "uint160",
                                nodeType: "ElementaryTypeName",
                                src: "4615:7:147",
                                typeDescriptions: {},
                              },
                            },
                            id: 105059,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "typeConversion",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "4615:31:147",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint160",
                              typeString: "uint160",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_uint160",
                              typeString: "uint160",
                            },
                          ],
                          id: 105049,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "4607:7:147",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_address_$",
                            typeString: "type(address)",
                          },
                          typeName: {
                            id: 105048,
                            name: "address",
                            nodeType: "ElementaryTypeName",
                            src: "4607:7:147",
                            typeDescriptions: {},
                          },
                        },
                        id: 105060,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4607:40:147",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 105061,
                        name: "provider",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105009,
                        src: "4649:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
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
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      ],
                      id: 105047,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15060,
                      src: "4598:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_address_$returns$__$",
                        typeString: "function (address,address)",
                      },
                    },
                    id: 105062,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4598:60:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 105063,
                  nodeType: "ExpressionStatement",
                  src: "4598:60:147",
                },
                {
                  assignments: [105065, 105067, 105069],
                  declarations: [
                    {
                      constant: false,
                      id: 105065,
                      mutability: "mutable",
                      name: "lpShares",
                      nameLocation: "4677:8:147",
                      nodeType: "VariableDeclaration",
                      scope: 105098,
                      src: "4669:16:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 105064,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "4669:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    {
                      constant: false,
                      id: 105067,
                      mutability: "mutable",
                      name: "baseAmount",
                      nameLocation: "4695:10:147",
                      nodeType: "VariableDeclaration",
                      scope: 105098,
                      src: "4687:18:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 105066,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "4687:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                    {
                      constant: false,
                      id: 105069,
                      mutability: "mutable",
                      name: "spotRate",
                      nameLocation: "4715:8:147",
                      nodeType: "VariableDeclaration",
                      scope: 105098,
                      src: "4707:16:147",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 105068,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "4707:7:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 105082,
                  initialValue: {
                    arguments: [
                      {
                        expression: {
                          id: 105072,
                          name: "log",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 105042,
                          src: "4751:3:147",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Log_$26721_memory_ptr",
                            typeString: "struct VmSafe.Log memory",
                          },
                        },
                        id: 105073,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "4755:4:147",
                        memberName: "data",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 26718,
                        src: "4751:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                      {
                        components: [
                          {
                            id: 105075,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "4774:7:147",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint256_$",
                              typeString: "type(uint256)",
                            },
                            typeName: {
                              id: 105074,
                              name: "uint256",
                              nodeType: "ElementaryTypeName",
                              src: "4774:7:147",
                              typeDescriptions: {},
                            },
                          },
                          {
                            id: 105077,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "4783:7:147",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint256_$",
                              typeString: "type(uint256)",
                            },
                            typeName: {
                              id: 105076,
                              name: "uint256",
                              nodeType: "ElementaryTypeName",
                              src: "4783:7:147",
                              typeDescriptions: {},
                            },
                          },
                          {
                            id: 105079,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "4792:7:147",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint256_$",
                              typeString: "type(uint256)",
                            },
                            typeName: {
                              id: 105078,
                              name: "uint256",
                              nodeType: "ElementaryTypeName",
                              src: "4792:7:147",
                              typeDescriptions: {},
                            },
                          },
                        ],
                        id: 105080,
                        isConstant: false,
                        isInlineArray: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "TupleExpression",
                        src: "4773:27:147",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_tuple$_t_type$_t_uint256_$_$_t_type$_t_uint256_$_$_t_type$_t_uint256_$_$",
                          typeString:
                            "tuple(type(uint256),type(uint256),type(uint256))",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                        {
                          typeIdentifier:
                            "t_tuple$_t_type$_t_uint256_$_$_t_type$_t_uint256_$_$_t_type$_t_uint256_$_$",
                          typeString:
                            "tuple(type(uint256),type(uint256),type(uint256))",
                        },
                      ],
                      expression: {
                        id: 105070,
                        name: "abi",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -1,
                        src: "4727:3:147",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_abi",
                          typeString: "abi",
                        },
                      },
                      id: 105071,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: "4731:6:147",
                      memberName: "decode",
                      nodeType: "MemberAccess",
                      src: "4727:10:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_abidecode_pure$__$returns$__$",
                        typeString: "function () pure",
                      },
                    },
                    id: 105081,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4727:83:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier:
                        "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "4668:142:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 105084,
                        name: "lpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105065,
                        src: "4829:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 105085,
                        name: "expectedLpShares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105011,
                        src: "4839:16:147",
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
                      id: 105083,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "4820:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 105086,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4820:36:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 105087,
                  nodeType: "ExpressionStatement",
                  src: "4820:36:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 105089,
                        name: "baseAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105067,
                        src: "4875:10:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 105090,
                        name: "expectedBaseAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105013,
                        src: "4887:18:147",
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
                      id: 105088,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "4866:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 105091,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4866:40:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 105092,
                  nodeType: "ExpressionStatement",
                  src: "4866:40:147",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 105094,
                        name: "spotRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105069,
                        src: "4925:8:147",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 105095,
                        name: "expectedSpotRate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 105015,
                        src: "4935:16:147",
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
                      id: 105093,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "4916:8:147",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 105096,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4916:36:147",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 105097,
                  nodeType: "ExpressionStatement",
                  src: "4916:36:147",
                },
              ],
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "verifyInitializeEvent",
            nameLocation: "4235:21:147",
            parameters: {
              id: 105016,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 105009,
                  mutability: "mutable",
                  name: "provider",
                  nameLocation: "4274:8:147",
                  nodeType: "VariableDeclaration",
                  scope: 105099,
                  src: "4266:16:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 105008,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "4266:7:147",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 105011,
                  mutability: "mutable",
                  name: "expectedLpShares",
                  nameLocation: "4300:16:147",
                  nodeType: "VariableDeclaration",
                  scope: 105099,
                  src: "4292:24:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 105010,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "4292:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 105013,
                  mutability: "mutable",
                  name: "expectedBaseAmount",
                  nameLocation: "4334:18:147",
                  nodeType: "VariableDeclaration",
                  scope: 105099,
                  src: "4326:26:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 105012,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "4326:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 105015,
                  mutability: "mutable",
                  name: "expectedSpotRate",
                  nameLocation: "4370:16:147",
                  nodeType: "VariableDeclaration",
                  scope: 105099,
                  src: "4362:24:147",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 105014,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "4362:7:147",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "4256:136:147",
            },
            returnParameters: {
              id: 105017,
              nodeType: "ParameterList",
              parameters: [],
              src: "4402:0:147",
            },
            scope: 105100,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 104677,
              name: "HyperdriveTest",
              nameLocations: ["549:14:147"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 120941,
              src: "549:14:147",
            },
            id: 104678,
            nodeType: "InheritanceSpecifier",
            src: "549:14:147",
          },
        ],
        canonicalName: "InitializeTest",
        contractDependencies: [13321, 92554, 92630],
        contractKind: "contract",
        fullyImplemented: true,
        linearizedBaseContracts: [
          105100, 120941, 117331, 26704, 26653, 22391, 22101, 21337, 19283,
          18563, 17031, 17097, 17094,
        ],
        name: "InitializeTest",
        nameLocation: "531:14:147",
        scope: 105101,
        usedErrors: [7088, 7090, 116815, 116817],
      },
    ],
    license: "Apache-2.0",
  },
  id: 147,
} as const;
